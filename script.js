window.onload = function () {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.classList.add("dark");
    }

    document.getElementById("dark-toggle").onclick = function () {
        document.body.classList.toggle("dark");
        const mode = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("mode", mode);
    };

    showWelcomeMessage();
    document.getElementById("send-btn").onclick = sendMessage;
};

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatbox = document.getElementById("chat-box");
    const userText = input.value.trim();
    if (userText === "") return;

    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + userText;
    chatbox.appendChild(userMsg);

    const botMsg = document.createElement("div");
    const response = userText.toLowerCase().includes("sad")
        ? "I'm here for you 😊. Try deep breathing or talk to a friend ♥."
        : getRandomQuote();

    typeText(botMsg, "Bot: " + response);
    chatbox.appendChild(botMsg);

    saveChat("You: " + userText);
    saveChat("Bot: " + response);

    input.value = "";
    scrollToBottom();
}

function clearChat() {
    const chatbox = document.getElementById("chat-box");
    chatbox.innerHTML = '';
}

function showWelcomeMessage() {
    const chatbox = document.getElementById("chat-box");
    const welcome = document.createElement("div");
    welcome.textContent = "Bot: Welcome! I'm here to listen.©";
    chatbox.appendChild(welcome);
}

function getRandomQuote() {
    const quotes = [
        "Stay strong. Better days are coming.",
        "You are more capable than you think.",
        "Every moment is a fresh beginning."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function typeText(element, text, speed = 30) {
    let index = 0;
    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, speed);
        }
    }
    typeChar();
}

function saveChat(message) {
    const chat = JSON.parse(localStorage.getItem("chatHistory") || "[]");
    chat.push(message);
    localStorage.setItem("chatHistory", JSON.stringify(chat));
}

function scrollToBottom() {
    const chatbox = document.getElementById("chat-box");
    chatbox.scrollTop = chatbox.scrollHeight;
}
