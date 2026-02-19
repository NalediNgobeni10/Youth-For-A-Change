const confirmButton = document.getElementById('confirm');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmationOkButton = document.getElementById('confirmation-ok');
const overlay = document.getElementById('overlay');

confirmButton.addEventListener('click', function (event) {

    const fNameInput = document.getElementById('fNameInput').value.trim();
    const lNameInput = document.getElementById('lNameInput').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();
    const phoneInput = document.getElementById('phoneInput').value.trim();
    const messageInput = document.getElementById('messageInput').value.trim();

    if (fNameInput === '' || lNameInput === '' || emailInput === '' || phoneInput === '' || messageInput === '') {
        alert('Please fill in all required fields before proceeding.');
    } else {

        confirmationModal.classList.remove('hidden');
        confirmationModal.style.display = 'block';
        overlay.classList.remove('hidden');
        overlay.style.display = 'block';
    }
});

confirmationOkButton.addEventListener('click', function () {

    confirmationModal.classList.add('hidden');
    confirmationModal.style.display = 'none';
    overlay.classList.add('hidden');
    overlay.style.display = 'none';

});

document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const eInput = document.getElementById('eInput').value.trim();


        if (eInput) {

            alert(`${eInput} has been subscribed successfully!`);

            newsletterForm.reset();
        }
    });
});
