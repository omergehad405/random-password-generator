const passInput = document.getElementById("password");
const chars = 'ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstvuwxyz0123456789!@#$%^&*(){}[]/|\/?<>~`'; 

function creatPassword() {
    const Length = 12;
    let password = '';

    for(let i = 0; i <= Length; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber , randomNumber + 1);
    }

    passInput.value = password;
}