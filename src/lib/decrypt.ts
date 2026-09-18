export interface EncryptedPayload {
  iterations: number;
  salt: string;
  iv: string;
  ciphertext: string;
}

const fromB64 = (s: string) => Uint8Array.from(atob(s), c => c.charCodeAt(0));

// Throws if the password is wrong (AES-GCM auth tag check fails).
export async function decryptPayload(payload: EncryptedPayload, password: string): Promise<string> {
  const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: fromB64(payload.salt), iterations: payload.iterations, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(payload.iv) }, key, fromB64(payload.ciphertext));
  return new TextDecoder().decode(plaintext);
}
