/* Shared login preference for the Kyoto travel and private learning shells.
 * Store only the last authorized email address (never tokens) across browser sessions.
 * The existing short-lived OAuth access token remains in sessionStorage.
 */
(function () {
  'use strict';
  const KEY = 'hanami-google-account-hint-v1';
  const ABOUT = 'https://www.googleapis.com/drive/v3/about?fields=user(emailAddress)';
  function getHint() {
    try {
      const hint = localStorage.getItem(KEY) || '';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hint) ? hint : '';
    } catch { return ''; }
  }
  function forget() { try { localStorage.removeItem(KEY); } catch {} }
  async function remember(accessToken) {
    // Avoid another Drive API request when this browser already remembers an account.
    if (!accessToken || getHint()) return;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    try {
      const response = await fetch(ABOUT, {
        headers: {Authorization: 'Bearer ' + accessToken},
        cache: 'no-store',
        signal: controller.signal
      });
      if (!response.ok) return;
      const email = (await response.json())?.user?.emailAddress;
      if (typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        try { localStorage.setItem(KEY, email); } catch {}
      }
    } catch {
      // Account hints are optional. A Drive or storage failure must not block access.
    } finally { clearTimeout(timer); }
  }
  function request(client, switchAccount = false) {
    if (switchAccount) {
      forget();
      return client.requestAccessToken({prompt: 'select_account'});
    }
    const hint = getHint();
    return client.requestAccessToken(hint ? {prompt: '', login_hint: hint} : {prompt: ''});
  }
  window.HanamiAuth = Object.freeze({getHint, forget, remember, request});
})();
