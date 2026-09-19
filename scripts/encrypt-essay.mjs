// Encrypts a private markdown essay so only ciphertext ships in the public repo/bundle.
// Usage: ESSAY_PASSWORD=... node scripts/encrypt-essay.mjs <slug>
//   reads  private/<slug>.md
//   writes public/protected/<slug>.json
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';

const ITERATIONS = 250_000;

const slug = process.argv[2];
// Normalised like the browser gate (case- and whitespace-insensitive)
const password = process.env.ESSAY_PASSWORD?.trim().toLowerCase();
if (!slug || !password) {
  console.error('Usage: ESSAY_PASSWORD=... node scripts/encrypt-essay.mjs <slug>');
  process.exit(1);
}

const plaintext = readFileSync(`private/${slug}.md`, 'utf8');
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));

const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
);
const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext));

const b64 = (bytes) => Buffer.from(bytes).toString('base64');
writeFileSync(
  `public/protected/${slug}.json`,
  JSON.stringify({ iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), ciphertext: b64(new Uint8Array(ciphertext)) }) + '\n',
);
console.log(`Encrypted private/${slug}.md -> public/protected/${slug}.json`);
