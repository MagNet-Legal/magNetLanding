// Reads the lightweight, non-sensitive `magnet_logged_in` marker cookie that
// magnet-app-front sets on .magnetlegal.co after a successful sign-in (and
// clears on sign-out). This site has no Supabase session of its own - the
// cookie is the only signal it has for whether the visitor is logged in.
const COOKIE_NAME = "magnet_logged_in";

export function isLoggedIn(): boolean {
  return document.cookie
    .split("; ")
    .some((entry) => entry === `${COOKIE_NAME}=1`);
}

// The app also sets `magnet_plan`: the Stripe price id of the visitor's current plan
// (active, trialing or past due), or no cookie when they have none. It exists so
// this page can send an existing member to their account instead of into a
// checkout that would create a second subscription. It is a convenience, not a
// guarantee: it can be up to a day stale, and Stripe is the source of truth.
const PLAN_COOKIE_NAME = "magnet_plan";

export function currentPlanPriceId(): string | null {
  const entry = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${PLAN_COOKIE_NAME}=`));
  if (!entry) return null;
  const value = decodeURIComponent(entry.slice(PLAN_COOKIE_NAME.length + 1));
  return value || null;
}
