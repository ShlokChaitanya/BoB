document.getElementById('login_button').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    const passwordid = document.getElementById('passwordid').value;

    if (passwordid === 'KGX067607') {
        window.location.href = '/login';
    } else {
        alert('No User Found');
    }
}); 

const input = document.getElementById('passwordid');
const label = document.getElementById('userIdLabel');

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        label.classList.add('active');
    } else {
        label.classList.remove('active');
    }
});
