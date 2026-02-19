document.addEventListener('DOMContentLoaded', function () {
    const recurringRadio = document.getElementById('recurring');
    const onceOffRadio = document.getElementById('once-off');
    const recurringOptions = document.getElementById('recurring-options');
    const confirmationPopup = document.getElementById('confirmation-popup');
    const confirmAmount = document.getElementById('confirm-amount');
    const recurringInfo = document.getElementById('recurring-info');
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');
    const donationAmountInput = document.getElementById('donation-amount');
    const currencySelect = document.getElementById('currency');
    const recurringPeriodSelect = document.getElementById('recurring-period');


    recurringRadio.addEventListener('change', function () {
        if (recurringRadio.checked) {
            recurringOptions.style.display = 'block';
        }
    });

    onceOffRadio.addEventListener('change', function () {
        if (onceOffRadio.checked) {
            recurringOptions.style.display = 'none';
        }
    });

    document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();

        const amount = parseFloat(donationAmountInput.value);
        const currency = currencySelect.value;


        if (amount > 0) {
            confirmAmount.textContent = `${amount} ${currency}`;


            if (recurringRadio.checked) {
                const recurringPeriod = recurringPeriodSelect.value;
                recurringInfo.textContent = `You have selected a recurring payment every ${recurringPeriod}.`;
                recurringInfo.style.display = 'block';
            } else {
                recurringInfo.style.display = 'none';
            }

            confirmationPopup.style.display = 'flex';
        } else {
            alert("Please enter a valid donation amount."); 
        }
    });


    acceptBtn.addEventListener('click', function () {
        confirmationPopup.style.display = 'none';
        window.location.href = 'confirmPayment.html';
    });


    declineBtn.addEventListener('click', function () {
        confirmationPopup.style.display = 'none';

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const confirmButton = document.querySelector('.confirm-button');
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmationOkButton = document.getElementById('confirmation-ok');
    const ownerInput = document.querySelector('.owner input');
    const cvvInput = document.getElementById('cvv-input');
    const cardNumberInput = document.getElementById('card-number-input');
    const monthSelect = document.getElementById('months');
    const yearSelect = document.getElementById('years');
    const toggleCvvButton = document.getElementById('toggle-cvv-visibility');


    function restrictToNumericInput(inputElement) {
        inputElement.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }


    restrictToNumericInput(cvvInput);
    restrictToNumericInput(cardNumberInput);


    toggleCvvButton.addEventListener('click', function () {
        if (cvvInput.type === 'password') {
            cvvInput.type = 'text';
            toggleCvvButton.textContent = 'Hide';
        } else {
            cvvInput.type = 'password';
            toggleCvvButton.textContent = 'Show';
        }
    });

    confirmButton.addEventListener('click', function (event) {
        event.preventDefault();


        if (ownerInput.value.trim() === '' || 
            cvvInput.value.trim() === '' || 
            cardNumberInput.value.trim() === '' || 
            monthSelect.value === '' || 
            yearSelect.value === '') {
            alert('Please fill in all required fields before proceeding.');
        } else {

            confirmationModal.classList.remove('hidden');
            confirmationModal.style.display = 'block';
        }
    });

    confirmationOkButton.addEventListener('click', function () {

        confirmationModal.classList.add('hidden');
        confirmationModal.style.display = 'none';

        window.location.href = 'index.html';
    });
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
