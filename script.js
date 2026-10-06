const form = document.querySelector(".contact-content form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        form.reset();
    });
}