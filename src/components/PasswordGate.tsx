import { useState, type FormEvent } from 'react';

// onUnlock resolves true when the password decrypts the content
const PasswordGate = ({ onUnlock }: { onUnlock: (password: string) => Promise<boolean> }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Case- and whitespace-insensitive: phone keyboards auto-capitalise and autocomplete adds spaces
    const normalized = password.trim().toLowerCase();
    if (!normalized) return;
    setBusy(true);
    setError(!(await onUnlock(normalized)));
    setBusy(false);
  };

  return (
    <section className="section-padding">
      <div className="container-width">
        <form onSubmit={onSubmit} className="bp-panel max-w-md p-6 sm:p-8">
          <span className="bp-tick bp-tick-tl" />
          <span className="bp-tick bp-tick-tr" />
          <span className="bp-tick bp-tick-bl" />
          <span className="bp-tick bp-tick-br" />
          <span className="bp-kicker block mb-4">// restricted · draft</span>
          <h1 className="text-2xl font-bold text-white mb-2">This essay is password-protected.</h1>
          <p className="text-muted-foreground mb-6">Enter the password you were sent to read it.</p>
          <input
            type="password"
            autoFocus
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            className="bp-mono w-full bg-white/[0.04] border border-border px-3 py-2.5 text-foreground outline-none focus:border-accent"
            placeholder="password"
            aria-label="Password"
          />
          {error && <p className="bp-mono text-xs text-[#ff8a7a] mt-2">Wrong password.</p>}
          <button type="submit" disabled={busy} className="bp-cta mt-5 disabled:opacity-60">
            {busy ? 'Unlocking…' : 'Unlock'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PasswordGate;
