export function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function badgeForStatus(status) {
  const label =
    {
      todo: 'To do',
      'in-progress': 'In progress',
      blocked: 'Blocked',
      done: 'Done',
    }[status] || status;
  return `<span class="badge">${label}</span>`;
}

export function generateId() {
  return (
    't_' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4)
  );
}
