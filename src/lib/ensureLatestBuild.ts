// GitHub Pages serves HTML with a ~10 min cache, so a returning visitor can get an old index.html
// that doesn't know about new routes. Compare against the deployed build id and reload once if stale.
export function ensureLatestBuild() {
  if (!import.meta.env.PROD) return;
  fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' })
    .then(r => (r.ok ? r.json() : null))
    .then((v: { build?: string } | null) => {
      if (!v?.build || v.build === __BUILD_ID__) return;
      const key = `reloaded-for-${v.build}`;
      try {
        if (sessionStorage.getItem(key)) return; // never loop
        sessionStorage.setItem(key, '1');
      } catch { /* storage blocked: still reload once per page load */ }
      window.location.reload();
    })
    .catch(() => {});
}
