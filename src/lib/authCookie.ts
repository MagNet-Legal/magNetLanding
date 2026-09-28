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
