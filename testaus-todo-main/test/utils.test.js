import { describe, it, expect } from 'vitest';
import { escapeHtml, badgeForStatus, generateId } from '../public/utils.js';

// Testit `public/utils.js` apufunktioille
// Tässä tarkistetaan perustoiminnallisuudet: merkkien enkoodaus,
// status-badgen teksti ja ID-generointi.
describe('utils', () => {
  // Tarkistaa, että erikoismerkit enkoodautuvat HTML-ystävälliseen muotoon
  it('escapeHtml should encode special chars', () => {
    const raw = `a & b <c> \" '`;
    const out = escapeHtml(raw);
    expect(out).toContain('&amp;');
    expect(out).toContain('&lt;');
    expect(out).toContain('&gt;');
    expect(out).toContain('&quot;');
    expect(out).toContain('&#039;');
  });

  // Varmistaa, että eri statuksille palautetaan luettava badge-teksti
  it('badgeForStatus returns readable label', () => {
    expect(badgeForStatus('todo')).toContain('To do');
    expect(badgeForStatus('in-progress')).toContain('In progress');
    expect(badgeForStatus('blocked')).toContain('Blocked');
    expect(badgeForStatus('done')).toContain('Done');
    // Tuntemattomalle statukselle palautetaan itse status-arvo
    expect(badgeForStatus('custom')).toContain('custom');
  });

  // Generoi uniikin ID-avaimen, joka alkaa 't_'-prefiksillä
  it('generateId produces a non-empty string with prefix', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
    expect(id.startsWith('t_')).toBe(true);
  });
});
