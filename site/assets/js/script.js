const villes = [
  { id: 'paris-time', timeZone: 'Europe/Paris' },
  { id: 'londres-time', timeZone: 'Europe/London' },
  { id: 'new-york-time', timeZone: 'America/New_York' },
  { id: 'tokyo-time', timeZone: 'Asia/Tokyo' },
];

function time() {
  const now = new Date();

  villes.forEach(({ id, timeZone }) => {
    document.getElementById(id).textContent = now.toLocaleTimeString('fr-FR', {
      timeZone,
    });
  });
}

time();
setInterval(time, 1000);