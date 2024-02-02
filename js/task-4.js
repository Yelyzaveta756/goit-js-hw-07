const submitForm = document.querySelector('.login-form');


submitForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert('All form fields must be filled in');
        return;
      }

      const formCloud = {
        email: emailInput.value.trim(),
        password:  passwordInput.value.trim(),
    }

    console.log(`Email: ${formCloud.email}`);
    console.log(`Password: ${formCloud.password}`)

    this.reset();
}
    






