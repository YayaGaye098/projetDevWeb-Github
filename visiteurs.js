// Simulons des données de réservation
const reservations = [
    { id: 1, date: '2023-10-15', description: 'Réservation 1' },
    { id: 2, date: '2023-10-20', description: 'Réservation 2' },
    { id: 3, date: '2023-10-25', description: 'Réservation 3' },
];
const reservationsp = [
{ id: 4, date: '2023-10-15', description: 'Réservation 4' },
{ id: 5, date: '2023-10-20', description: 'Réservation 5' },
{ id: 6, date: '2023-10-25', description: 'Réservation 6' },
];

const reservationList = document.getElementById('reservation-list');

// Affiche les réservations dans le tableau de bord
function displayReservations() {
    reservationList.innerHTML = '';
    reservations.forEach((reservation) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${reservation.date}: ${reservation.description}</span>
            <button onclick="cancelReservation(${reservation.id})">Annuler</button>
            <button onclick="editReservation(${reservation.id})">Modifier</button>
        `;
        reservationList.appendChild(li);
    });
    reservationsp.forEach((reservationp) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${reservationp.date}: ${reservationp.description}</span>
        `;
        reservationList.appendChild(li);
    });
}

// Annule une réservation
function cancelReservation(reservationId) {
    // Recherchez la réservation dans la liste en fonction de l'ID
    const index = reservations.findIndex(reservation => reservation.id === reservationId);

    if (index !== -1) {
        // Supprimez la réservation de la liste
        reservations.splice(index, 1);

        // Mettez à jour l'affichage
        displayReservations();
    } else {
        alert('Réservation introuvable');
    }
}




// Initialisation de la page
displayReservations();

function editReservation(reservationId, newDate) {
    // Recherchez la réservation dans le tableau en fonction de l'ID
    const reservation = reservations.find(reservation => reservation.id === reservationId);

    if (reservation) {
        // Mettez à jour la date de la réservation
        const newDate = prompt('Nouvelle date de la réservation:', reservation.date);
            reservation.date = newDate;

        // Appelez une fonction de rafraîchissement de l'affichage
        displayReservations();
        }else {
        alert('Réservation introuvable');
    }
 }

