var dashboard = document.getElementById('dashboard');
    
    // Ajoutez vos données ici. Par exemple :
    var data = [
        { usagers: 'Maguette Ngom', prestations: 'Service 01', reservations: 'Reservation 01', problemes: 'Problem 01' },
        { usagers: 'Alpha BA', prestations: 'Service 02', reservations: 'Reservation 02', problemes: 'Problem 02'},
        { usagers: "Elhadji Birane Ba" , prestations: 'Service 03', reservations: 'Reservation 03', problemes: 'Problem 03'},
        { usagers: 'Pape wally guissé', prestations: 'Service 04', reservations: 'Reservation 04', problemes: 'Problem 04'},
        { usagers: 'Fatima Soow', prestations: 'Service 05', reservations: 'Reservation 05', problemes: 'Problem 05'}, 
        {usagers: 'Yaya Gaye', prestations: 'Service 06', reservations: 'Reservation 06', problemes: 'Problem 06'},
    ];
    
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].usagers}</td>
                        <td>${data[i].prestations}</td>
                        <td>${data[i].reservations}</td>
                        <td>${data[i].problemes}</td>
                   </tr>`;
        dashboard.innerHTML += row;
    }


// Données d'exemple (utilisateurs)


let users = [
    { id: 1, name: "Utilisateur 1", email: "user1@example.com" },
    { id: 2, name: "Utilisateur 2", email: "user2@example.com" },
    { id: 3, name: "Utilisateur 3", email: "user3@example.com" },
];

// Affiche la liste des utilisateurs
function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        const userItem = document.createElement("div");
        userItem.innerHTML = `${user.name} - ${user.email}
            <button class="edit-user" data-id="${user.id}">Éditer</button>
            <button class="delete-user" data-id="${user.id}">Supprimer</button>`;
        userList.appendChild(userItem);
    });
}

// Ajoute un utilisateur
function addUser(name, email) {
    const id = users.length + 1;
    users.push({ id, name, email });
}

// Édite un utilisateur
function editUser(id, name, email) {
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = name;
        user.email = email;
    }
}

// Supprime un utilisateur
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

// Gestionnaire de clic pour le bouton "Ajouter un Utilisateur"
const addUserButton = document.getElementById("add-user-button");
addUserButton.addEventListener("click", () => {
    // Afficher le formulaire d'ajout d'utilisateur (modal)
    const userModal = document.getElementById("user-modal");
    userModal.style.display = "block";
    userModal.innerHTML = `
        <h2>Ajouter un Utilisateur</h2>
        <input type="text" id="name" placeholder="Nom">
        <input type="text" id="email" placeholder="E-mail">
        <button id="save-user">Enregistrer</button>
        <button id="cancel-user">Annuler</button>
    `;
    const saveButton = document.getElementById("save-user");
    saveButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name && email) {
            addUser(name, email);
            displayUsers();
            userModal.style.display = "none";
        }
    });
    const cancelButton = document.getElementById("cancel-user");
    cancelButton.addEventListener("click", () => {
        userModal.style.display = "none";
    });
});

// Gestionnaire de clic pour les boutons "Éditer" et "Supprimer"
document.addEventListener("click", event => {
    if (event.target.classList.contains("edit-user")) {
        const id = parseInt(event.target.getAttribute("data-id"))}});

// Données d'exemple (articles de contenu)
let content = [
    { id: 1, title: "Statistique 1", body: "Contenu statistique 1" },
    { id: 2, title: "Aide 1", body: "Contenu de l'aide 1" },
    { id: 3, title: "FAQ 1", body: "Question 1: Réponse 1" },
];

// Affiche la liste des articles de contenu
function displayContent() {
    const contentList = document.getElementById("content-list");
    contentList.innerHTML = "";
    content.forEach(item => {
        const contentItem = document.createElement("div");
        contentItem.innerHTML = `${item.title}
            <button class="edit-content" data-id="${item.id}">Éditer</button>
            <button class="delete-content" data-id="${item.id}">Supprimer</button>
            <p>${item.body}</p>`;
        contentList.appendChild(contentItem);
    });
}

// Ajoute un article de contenu
function addContent(title, body) {
    const id = content.length + 1;
    content.push({ id, title, body });
}

// Édite un article de contenu
function editContent(id, title, body) {
    const item = content.find(item => item.id === id);
    if (item) {
        item.title = title;
        item.body = body;
    }
}

// Supprime un article de contenu
function deleteContent(id) {
    content = content.filter(item => item.id !== id);
}

// Gestionnaire de clic pour le bouton "Ajouter un Article"
const addContentButton = document.getElementById("add-content-button");
addContentButton.addEventListener("click", () => {
    // Afficher le formulaire d'ajout/édition d'article de contenu (modal)
    const contentModal = document.getElementById("content-modal");
    contentModal.style.display = "block";
    contentModal.innerHTML = `
        <h2>Ajouter un Article</h2>
        <input type="text" id="title" placeholder="Titre">
        <textarea id="body" placeholder="Corps de l'article"></textarea>
        <button id="save-content">Enregistrer</button>
        <button id="cancel-content">Annuler</button>
    `;
    const saveButton = document.getElementById("save-content");
    saveButton.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        if (title && body) {
            addContent(title, body);
            displayContent();
            contentModal.style.display = "none";
        }
    });
    const cancelButton = document.getElementById("cancel-content");
    cancelButton.addEventListener("click", () => {
        contentModal.style.display = "none";
    });
});

// Gestionnaire de clic pour les boutons "Éditer" et "Supprimer"
document.addEventListener("click", event => {
    if (event.target.classList.contains("edit-content")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        const item = content.find(item => item.id === id);
        if (item) {
            // Afficher le formulaire d'édition avec les données actuelles
            const contentModal = document.getElementById("content-modal");
            contentModal.style.display = "block";
            contentModal.innerHTML = `
                <h2>Éditer l'Article</h2>
                <input type="text" id="title" placeholder="Titre" value="${item.title}">
                <textarea id="body" placeholder="Corps de l'article">${item.body}</textarea>
                <button id="save-content">Enregistrer</button>
                <button id="cancel-content">Annuler</button>
            `;
            const saveButton = document.getElementById("save-content");
            saveButton.addEventListener("click", () => {
                const newTitle = document.getElementById("title").value;
                const newBody = document.getElementById("body").value;
                if (newTitle && newBody) {
                    editContent(id, newTitle, newBody);
                    displayContent();
                    contentModal.style.display = "none";
                }
            });
            const cancelButton = document.getElementById("cancel-content");
            cancelButton.addEventListener("click", () => {
                contentModal.style.display = "none";
            });
        }
    } else if (event.target.classList.contains("delete-content")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        deleteContent(id);
        displayContent();
    }
});

// Initialiser l'affichage des articles de contenu
displayContent();

 // JavaScript pour gérer les actions sur les commentaires
 const comments = document.querySelectorAll('.comment');

 comments.forEach(comment => {
     const approveButton = comment.querySelector('.approve');
     const editButton = comment.querySelector('.edit');
     const deleteButton = comment.querySelector('.delete');

     approveButton.addEventListener('click', () => {
         comment.classList.add('approved');
         approveButton.disabled = true;
     });

     deleteButton.addEventListener('click', () => {
         comment.remove();
     });

     editButton.addEventListener('click', () => {
         const text = comment.querySelector('p').textContent;
         const newText = prompt('Modifier le commentaire:', text);

         if (newText !== null && newText !== '') {
             comment.querySelector('p').textContent = newText;
         }
     });
 });

