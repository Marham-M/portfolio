document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    // Simple email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return false;
    }
    if (!email.match(emailPattern)) {
        formMessage.textContent = "Please enter a valid email address.";
        return false;
    }
    if (message === "") {
        formMessage.textContent = "Please enter a message.";
        return false;
    }

    // If all validations pass
    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.style.color = "green";

    // Reset form fields (optional)
    document.getElementById("contactForm").reset();

    // Prevent form submission for demonstration purposes
    return false;
}
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.width = skillLevel;
        bar.textContent = skillLevel;
    });
});
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}