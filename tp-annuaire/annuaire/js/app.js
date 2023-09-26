document.addEventListener('DOMContentLoaded', () => {
    const addContactBtn = document.getElementById('addContactBtn');
    const contactList = document.getElementById('contactList');
    const contactModal = document.getElementById('contactModal');
    const popupTitle = document.getElementById('popup-title');
    const popupFirstName = document.getElementById('popup-firstName');
    const popupLastName = document.getElementById('popup-lastName');
    const popupBirthDate = document.getElementById('popup-birthDate');
    const popupEmail = document.getElementById('popup-email');
    const popupPhoneNumber = document.getElementById('popup-phoneNumber');
    const popupAvatar = document.getElementById('popup-avatar');
    const popupSaveBtn = document.getElementById('popup-saveBtn');
    const popupCloseBtn = document.getElementById('popup-closeBtn');
    let editingContactId = null;
    // Tableau de contacts
    const contacts = [];
    let nextContactId = 1; // Pour attribuer des identifiants uniques
    // Fonction pour ajouter un contact à la liste
    function addContactToList(contact) {
        const li = document.createElement('li');
        li.textContent = `${contact.firstName} ${contact.lastName}`;
        li.setAttribute('data-contact-id', contact.id.toString());
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Modifier';
        editBtn.className = 'btn btn-primary btn-sm ml-2'; // Ajoutez des classes Bootstrap pour le style
        li.appendChild(editBtn);
        // Ajoutez un gestionnaire d'événements au bouton "Modifier"
        editBtn.addEventListener('click', () => editContact(contact.id));
        // Créez un bouton "Supprimer"
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'btn btn-danger btn-sm ml-2'; // Ajoutez des classes Bootstrap pour le style
        li.appendChild(deleteBtn);
        // Ajoutez un gestionnaire d'événements au bouton "Supprimer"
        deleteBtn.addEventListener('click', () => deleteContact(contact.id));
        contactList === null || contactList === void 0 ? void 0 : contactList.appendChild(li);
    }
    // Fonction pour afficher la pop-up
    function showPopup(title) {
        if (popupTitle)
            popupTitle.textContent = title;
        if (contactModal)
            contactModal.style.display = 'block';
    }
    // Fonction pour effacer les champs de la pop-up
    function clearPopupFields() {
        if (popupFirstName)
            popupFirstName.value = '';
        if (popupLastName)
            popupLastName.value = '';
        if (popupBirthDate)
            popupBirthDate.value = '';
        if (popupEmail)
            popupEmail.value = '';
        if (popupPhoneNumber)
            popupPhoneNumber.value = '';
        if (popupAvatar)
            popupAvatar.value = '';
    }
    // Fonction pour ajouter un nouveau contact ou mettre à jour un contact existant
    function saveContact() {
        const contact = {
            id: editingContactId !== null ? editingContactId : nextContactId++,
            firstName: popupFirstName.value,
            lastName: popupLastName.value,
            birthDate: popupBirthDate.value,
            email: popupEmail.value,
            phoneNumber: popupPhoneNumber.value,
            avatar: popupAvatar.value,
        };
        if (editingContactId !== null) {
            // Mise à jour d'un contact existant
            const index = contacts.findIndex((c) => c.id === editingContactId);
            if (index !== -1) {
                contacts[index] = contact;
                const li = document.querySelector(`[data-contact-id="${contact.id}"]`);
                li.textContent = `${contact.firstName} ${contact.lastName}`;
            }
            editingContactId = null;
        }
        else {
            // Ajout d'un nouveau contact
            contacts.push(contact);
            addContactToList(contact);
        }
        clearPopupFields();
        if (contactModal)
            contactModal.style.display = 'none';
    }
    // Fonction pour éditer un contact existant
    function editContact(contactId) {
        editingContactId = contactId;
        const contact = contacts.find((c) => c.id === contactId);
        if (contact) {
            showPopup('Modifier le contact');
            if (popupTitle)
                popupTitle.textContent = 'Modifier le contact'; // Mise à jour du titre de la pop-up
            if (popupFirstName)
                popupFirstName.value = contact.firstName;
            if (popupLastName)
                popupLastName.value = contact.lastName;
            if (popupBirthDate)
                popupBirthDate.value = contact.birthDate;
            if (popupEmail)
                popupEmail.value = contact.email;
            if (popupPhoneNumber)
                popupPhoneNumber.value = contact.phoneNumber;
            if (popupAvatar)
                popupAvatar.value = contact.avatar;
        }
    }
    // Fonction pour supprimer un contact
    function deleteContact(contactId) {
        const index = contacts.findIndex((c) => c.id === contactId);
        if (index !== -1) {
            contacts.splice(index, 1);
            const li = document.querySelector(`[data-contact-id="${contactId}"]`);
            contactList === null || contactList === void 0 ? void 0 : contactList.removeChild(li);
        }
        clearPopupFields();
        editingContactId = null;
        if (contactModal)
            contactModal.style.display = 'none';
    }
    // Écouteur d'événement pour le bouton "Ajouter un contact"
    addContactBtn === null || addContactBtn === void 0 ? void 0 : addContactBtn.addEventListener('click', () => showPopup('Ajouter un contact'));
    // Écouteur d'événement pour le bouton "Ajouter" de la pop-up
    popupSaveBtn === null || popupSaveBtn === void 0 ? void 0 : popupSaveBtn.addEventListener('click', saveContact);
    // Écouteur d'événement pour le bouton "Fermer" de la pop-up
    popupCloseBtn === null || popupCloseBtn === void 0 ? void 0 : popupCloseBtn.addEventListener('click', () => {
        clearPopupFields();
        if (editingContactId !== null) {
            deleteContact(editingContactId);
        }
        editingContactId = null;
        if (contactModal)
            contactModal.style.display = 'none';
    });
});
