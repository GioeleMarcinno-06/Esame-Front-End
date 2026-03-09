// Arrow function: carica utenti al click del bottone
const loadData = () => {
	const usersContainer = document.getElementById('users');
	usersContainer.textContent = 'Caricamento...';

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			usersContainer.innerHTML = '';
			users.forEach(user => {
				const card = document.createElement('div');
				card.className = 'user';
				card.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
				usersContainer.appendChild(card);
			});
		})
		.catch(error => {
			usersContainer.textContent = 'Errore nel caricamento';
			console.log('Fetch error:', error);
		});
};

// Associa il click del bottone alla funzione
const loadBtn = document.getElementById('load-users');
if (loadBtn) {
	loadBtn.addEventListener('click', loadData);
}
const changeCardColor = () => {
  const cards = document.querySelectorAll('.user');
  cards.forEach(card => {
    // cambia a un colore casuale ogni volta
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    card.style.backgroundColor = randomColor;
  });
};

// Event listener sui bottoni
document.getElementById('load-users').addEventListener('click', loadData);
document.getElementById('change-color').addEventListener('click', changeCardColor);