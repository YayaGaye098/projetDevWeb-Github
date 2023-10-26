document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let service = document.getElementById('service').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    if (!service || !date || !time) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    alert(`Service : ${service}, Date : ${date}, Heure : ${time}`);
});