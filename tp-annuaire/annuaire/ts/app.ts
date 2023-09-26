document.addEventListener('DOMContentLoaded', () => {
  const addContactBtn: HTMLElement | null = document.getElementById('addContactBtn');
  const contactList: HTMLElement | null = document.getElementById('contactList');
  const contactModal: HTMLElement | null = document.getElementById('contactModal');
  const popupTitle: HTMLElement | null = document.getElementById('popup-title');
  const popupFirstName: HTMLInputElement | null = document.getElementById('popup-firstName') as HTMLInputElement;
  const popupLastName: HTMLInputElement | null = document.getElementById('popup-lastName') as HTMLInputElement;
  const popupBirthDate: HTMLInputElement | null = document.getElementById('popup-birthDate') as HTMLInputElement;
  const popupEmail: HTMLInputElement | null = document.getElementById('popup-email') as HTMLInputElement;
  const popupPhoneNumber: HTMLInputElement | null = document.getElementById('popup-phoneNumber') as HTMLInputElement;
  const popupAvatar: HTMLInputElement | null = document.getElementById('popup-avatar') as HTMLInputElement;
  const popupSaveBtn: HTMLElement | null = document.getElementById('popup-saveBtn');
  const popupCloseBtn: HTMLElement | null = document.getElementById('popup-closeBtn');
  let editingContactId: number | null = null;

  // Interface pour représenter un contact
  interface Contact {
    id: number; // Identifiant unique pour chaque contact
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    phoneNumber: string;
    avatar: string;
  }

  // Tableau de contacts
  const contacts: Contact[] = [];
  let nextContactId = 1; // Pour attribuer des identifiants uniques

  // Fonction pour ajouter un contact à la liste
  function addContactToList(contact: Contact) {
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

    contactList?.appendChild(li);
  }

  // Fonction pour afficher la pop-up
  function showPopup(title: string) {
    if (popupTitle) popupTitle.textContent = title;
    if (contactModal) contactModal.style.display = 'block';
  }

  // Fonction pour effacer les champs de la pop-up
  function clearPopupFields() {
    if (popupFirstName) popupFirstName.value = '';
    if (popupLastName) popupLastName.value = '';
    if (popupBirthDate) popupBirthDate.value = '';
    if (popupEmail) popupEmail.value = '';
    if (popupPhoneNumber) popupPhoneNumber.value = '';
    if (popupAvatar) popupAvatar.value = '';
  }

  // Fonction pour ajouter un nouveau contact ou mettre à jour un contact existant
  function saveContact() {
    const contact: Contact = {
      id: editingContactId !== null ? editingContactId : nextContactId++,
      firstName: popupFirstName!.value,
      lastName: popupLastName!.value,
      birthDate: popupBirthDate!.value,
      email: popupEmail!.value,
      phoneNumber: popupPhoneNumber!.value,
      avatar: popupAvatar!.value,
    };

    if (editingContactId !== null) {
      // Mise à jour d'un contact existant
      const index = contacts.findIndex((c) => c.id === editingContactId);
      if (index !== -1) {
        contacts[index] = contact;
        const li = document.querySelector(`[data-contact-id="${contact.id}"]`) as HTMLElement;
        li.textContent = `${contact.firstName} ${contact.lastName}`;
      }
      editingContactId = null;
    } else {
      // Ajout d'un nouveau contact
      contacts.push(contact);
      addContactToList(contact);
    }

    clearPopupFields();
    if (contactModal) contactModal.style.display = 'none';
  }

  // Fonction pour éditer un contact existant
  function editContact(contactId: number) {
    editingContactId = contactId;
    const contact = contacts.find((c) => c.id === contactId);
    if (contact) {
      showPopup('Modifier le contact');
      if (popupTitle) popupTitle.textContent = 'Modifier le contact'; // Mise à jour du titre de la pop-up
      if (popupFirstName) popupFirstName.value = contact.firstName;
      if (popupLastName) popupLastName.value = contact.lastName;
      if (popupBirthDate) popupBirthDate.value = contact.birthDate;
      if (popupEmail) popupEmail.value = contact.email;
      if (popupPhoneNumber) popupPhoneNumber.value = contact.phoneNumber;
      if (popupAvatar) popupAvatar.value = contact.avatar;
    }
  }

  // Fonction pour supprimer un contact
  function deleteContact(contactId: number) {
    const index = contacts.findIndex((c) => c.id === contactId);
    if (index !== -1) {
      contacts.splice(index, 1);
      const li = document.querySelector(`[data-contact-id="${contactId}"]`) as HTMLElement;
      contactList?.removeChild(li);
    }
    clearPopupFields();
    editingContactId = null;
    if (contactModal) contactModal.style.display = 'none';
  }

  // Écouteur d'événement pour le bouton "Ajouter un contact"
  addContactBtn?.addEventListener('click', () => showPopup('Ajouter un contact'));

  // Écouteur d'événement pour le bouton "Ajouter" de la pop-up
  popupSaveBtn?.addEventListener('click', saveContact);

  // Écouteur d'événement pour le bouton "Fermer" de la pop-up
  popupCloseBtn?.addEventListener('click', () => {
    clearPopupFields();
    if (editingContactId !== null) {
      deleteContact(editingContactId);
    }
    editingContactId = null;
    if (contactModal) contactModal.style.display = 'none';
  });
});
