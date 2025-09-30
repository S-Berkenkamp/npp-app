'use client';

import * as Sentry from '@sentry/nextjs';

export default function Page() {
  const handleClick = () => {
    // Sanfte Variante: Event wird erfasst, UI bleibt benutzbar
    Sentry.captureException(new Error('Sentry Test (client) – captured via button'));
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>NPP App – Sentry Test</h1>
      <p style={{ marginBottom: '1rem' }}>
        Klicken Sie auf den Button, um einen Testfehler an Sentry zu senden.
      </p>
      <button
        onClick={handleClick}
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        Sentry Testfehler auslösen
      </button>
    </main>
  );
}
