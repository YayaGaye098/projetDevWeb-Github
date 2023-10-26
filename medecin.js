document.getElementById(registrtion-form).addEventListener('submit', function(e)
{
    e.preventDefault();
    const name = document.getElementById('name').Value;
    const email = document.getElementById('email').Value;
    const password = document.getElementById('password ').Value;
    const profilInfo = document.getElementById('profil-Info').Value;


    document.getElementById('doctor-name').textContent = name;
    document.getElementById('doctor-email').textContent = email;
    document.getElementById('doctor-info').textContent = profilInfo;

    document.getElementById('doctor-profile').style.display = 'block';
});