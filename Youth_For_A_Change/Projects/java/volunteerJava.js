const confirmButton = document.getElementById('confirmButton');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmationOkButton = document.getElementById('confirmation-ok');

confirmButton.addEventListener('click', function (event) {

    const nameInput = document.getElementById('nameInput').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();
    const mobileInput = document.getElementById('mobileInput').value.trim();
    const interestSelect = document.getElementById('interestSelect').value;
    const availabilityInput = document.getElementById('availabilityInput').value.trim();
    const reasonInput = document.getElementById('reasonInput').value.trim();

    if (nameInput === '' || emailInput === '' || mobileInput === '' || interestSelect === '' || availabilityInput === '' || reasonInput === '') {
        alert('Please fill in all required fields before proceeding.');
    } else {

        confirmationModal.classList.remove('hidden');
        confirmationModal.style.display = 'block';
    }
});

confirmationOkButton.addEventListener('click', function () {

    confirmationModal.classList.add('hidden');
    confirmationModal.style.display = 'none';
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
