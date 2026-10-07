# Plan: deploy GitHub Pages from a workflow, not from a committed `docs/`

**Status: proposed, not started.** Nothing in this document has been done. It records
a decision to take later.

## The problem

The site is served by GitHub Pages from the committed `docs/` folder on `main`
(Pages source: "Deploy from a branch", `main`, `/docs`). A workflow
(`.github/workflows/rebuild-docs.yml`) builds the site on every pull request and
commits the result back onto the **PR branch**. So `docs/` is only correct on `main`
if the PR is merged **after** that bot commit lands.

On 2026-10-07, PR #14 (pricing page change) was merged about a minute before the
rebuild commit was pushed to its branch (`08:54:23` merge, `08:55:28` rebuild commit).
`main` kept the old bundle, the live pricing page lacked the change, and a second PR
(#15) was needed to publish the stranded build.

Nothing prevents this: `main` has no required status checks, and the rebuild runs
_after_ the PR is opened and reviewable.

Other costs of committing build output:

- Every build renames the bundle (`index.<hash>.js`), so `docs/` produces noisy diffs
  and merge conflicts between concurrent PRs.
- The bot adds a commit to every PR branch.
- Anything injected into `index.html` during a build (the Impeccable Live script, see
  `CLAUDE.md`) can be committed and published.

## Why not just make the rebuild a required check

Probably does not work as the workflow is written. It commits with the default
`GITHUB_TOKEN`, and GitHub does not start new workflow runs for pushes made with that
token, so the PR's new head commit would never get a result for a required check and
the PR would sit at "Expected, waiting". (Documented GitHub behavior; not tested here.)

A version that works changes the workflow from "rebuild and commit" to "build and fail
if `docs/` differs", with the developer committing the build. That keeps the bundle in
git, so the diff noise and the injected-script risk remain.

## Proposal

Let GitHub Pages build and deploy from `main` with a workflow, and stop committing
build output.

- Pages source becomes **GitHub Actions**.
- A workflow on push to `main` (and manual dispatch) runs `npm ci`, `npm run build`,
  uploads the build with `actions/upload-pages-artifact`, and publishes it with
  `actions/deploy-pages`.
- The build goes to `dist/` (Vite's default), which is already git-ignored.
- `docs/` and `rebuild-docs.yml` are deleted.

What this removes: the merge race, the bundle-hash diff noise, the bot commits, and
committed build output.

## Steps, in two PRs so rollback stays possible

**PR 1: add the deploy path, keep `docs/`.**

1. Add `.github/workflows/deploy-pages.yml` (permissions `contents: read`,
   `pages: write`, `id-token: write`; a `concurrency` group for Pages; build job;
   deploy job with the `github-pages` environment).
2. Change `package.json` so `build` is plain `vite build` (output `dist/`) and
   `postbuild` copies `dist/index.html` to `dist/404.html`, so deep links such as
   `/pricing-plans` still resolve on Pages.
3. Put a copy of `CNAME` in `public/` so it is part of the build output.
4. Leave `docs/` and `rebuild-docs.yml` in place for now.

Then, an admin step in the repo settings, done right before merging PR 1: **Settings →
Pages → Build and deployment → Source: GitHub Actions**. Confirm **Custom domain**
still says `magnetlegal.co` and **Enforce HTTPS** is still on.

**Verify after the first deploy** (do not proceed until all pass):

- `https://magnetlegal.co/` loads, and the Actions run shows green.
- `https://magnetlegal.co/pricing-plans` loads directly (not only by clicking a link).
- `https://magnetlegal.co/pricing-plans?reason=no-active-subscription` shows the
  "We couldn't find an active subscription" banner.
- The custom domain and HTTPS are unchanged.

**PR 2: remove the old path**, only once PR 1 is verified live.

1. Delete `docs/` and `.github/workflows/rebuild-docs.yml`.
2. Update `CLAUDE.md` and `readme.md`: the build is `dist/`, and the "docs/ is
   published" and "never build or commit while the live script is injected" warnings
   change (a clean build now comes from source on `main`, not from a committed
   folder).

## Rollback

Until PR 2 merges: set **Settings → Pages → Source** back to "Deploy from a branch",
`main`, `/docs`. `docs/` is still there, so the site returns to how it is today.

After PR 2: revert PR 2 (restores `docs/`), then set the Pages source back as above.

## Open questions to settle before starting

- Whether the custom domain stays configured in Settings after switching the source
  (it should; check before relying on the `CNAME` file, which Actions deployments
  do not read).
- Who has admin access to change the Pages source setting.
- Whether any other tooling reads `docs/` directly.

## Until this is done

Merge a PR only after its `Rebuild docs/ from …` commit has appeared on the PR (the
PR's **Commits** tab), and check that the PR's **Files changed** shows the new bundle
filename.
