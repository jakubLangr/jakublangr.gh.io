import { decryptPayload, type EncryptedPayload } from '@/lib/decrypt';

// Encrypted essays live at a stable URL (public/protected/<slug>.json, written by
// scripts/encrypt-essay.mjs) and are fetched fresh, so an old cached page never asks for a
// file that a later deploy removed.
const ESSAYS = ['europe-ai'];

export const hasEssay = (slug: string) => ESSAYS.includes(slug);

// Thrown when the encrypted file can't be loaded, e.g. an old cached page asking for a file
// that a newer deploy replaced. Distinct from a wrong password.
export class StaleBuildError extends Error {}

export const decryptEssay = async (slug: string, password: string) => {
  let payload: EncryptedPayload;
  try {
    const res = await fetch(`/protected/${slug}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error(String(res.status));
    payload = await res.json();
  } catch {
    throw new StaleBuildError('Could not load essay');
  }
  return decryptPayload(payload, password);
};

// Reload the page from the server, bypassing a cached index.html. Once per session to avoid loops.
export const reloadFresh = () => {
  try {
    if (sessionStorage.getItem('essay-fresh-reload')) return false;
    sessionStorage.setItem('essay-fresh-reload', '1');
  } catch { /* storage blocked */ }
  window.location.replace(`${window.location.pathname}?r=${Date.now()}`);
  return true;
};

// One password per browser session, shared by all protected essays
const STORAGE_KEY = 'essay-pw';
export const storedPassword = () => {
  try { return sessionStorage.getItem(STORAGE_KEY); } catch { return null; }
};
export const storePassword = (pw: string) => {
  try { sessionStorage.setItem(STORAGE_KEY, pw); } catch { /* private mode etc. */ }
};
