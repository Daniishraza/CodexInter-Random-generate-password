function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.getElementById("generate-btn").addEventListener("click", function () {
    const length = document.getElementById("length").value;
    const result = generatePassword(length);
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = result;

    resultContainer.style.transform = "scale(1.1)";
    setTimeout(() => {
        resultContainer.style.transform = "scale(1)";
    }, 300);
});