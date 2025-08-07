// Swasthya Sathi - Welcome Screen (React)
// Simple, attractive, local-flavored UI

import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English', emoji: '🇮🇳' },
  { code: 'bn', label: 'Bengali', emoji: '🇧🇩' },
  { code: 'hi', label: 'Hindi', emoji: '🇮🇳' },
  { code: 'ur', label: 'Urdu', emoji: '🇵🇰' },
];

export default function Welcome({ onStart }) {
  const [lang, setLang] = useState('en');

  return (
    <div style={{
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 role="banner" style={{ fontSize: '2.5em', marginBottom: 10 }}>
        🩺 Swasthya Sathi
      </h1>
      <div style={{ marginBottom: 20, fontSize: '1.2em' }}>
        <label htmlFor="lang">Choose Language: </label>
        <select id="lang" value={lang} onChange={e => setLang(e.target.value)} style={{ fontSize: '1em' }}>
          {languages.map(l =>
            <option key={l.code} value={l.code}>{l.emoji} {l.label}</option>
          )}
        </select>
      </div>
      <button
        style={{
          background: '#ff9800',
          color: '#fff',
          fontSize: '1.5em',
          padding: '0.8em 2em',
          border: 'none',
          borderRadius: 10,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        }}
        onClick={() => onStart(lang)}
        data-testid="start-btn"
      >
        Start Consultation
      </button>
      <button
        style={{
          background: '#fff',
          color: '#43e97b',
          fontSize: '1em',
          padding: '0.5em 1.5em',
          border: '2px solid #43e97b',
          borderRadius: 10,
          cursor: 'pointer',
          marginTop: 15
        }}
      >
        Health Info
      </button>
    </div>
  );
}