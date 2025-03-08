document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav div div a");

    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = section.id === targetId ? "block" : "none";
        });

        navLinks.forEach(link => {
            if (link.getAttribute("href").substring(1) === targetId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    const addButtons = document.querySelectorAll(".add-btn");

    addButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Feature coming soon: Add functionality for " + this.parentElement.querySelector("h1").textContent);
        });
    });

    // Show only the dashboard by default
    showSection("profile");
});







// script.js
const chatWindow = document.querySelector('.chat-window');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageHTML = `<p>${message}</p>`;
        chatMessages.innerHTML += messageHTML;
        messageInput.value = '';
    }
});