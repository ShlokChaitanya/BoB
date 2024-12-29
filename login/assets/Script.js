const input = document.getElementById('passwordInput');
const label = document.getElementById('PasswordLabel');

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        label.classList.add('active');
    } else {
        label.classList.remove('active');
    }
});


const input1 = document.getElementById('CaptchaInput');
const label1 = document.getElementById('CaptchaLabel');

input1.addEventListener('input', () => {
    if (input1.value.trim() !== '') {
        label1.classList.add('active');
    } else {
        label1.classList.remove('active');
    }
});

document.getElementById('loginbutton').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    const passwordid = document.getElementById('passwordInput').value;

    if (input1.value.trim() !== '195906') {
        alert('Incorrect Captcha');
        return;
    }

    if (passwordid === 'Achippa@07') {
        window.location.href = '/Dashboard/';
    } else {
        alert('Incorrect Password');
    }
}); 
