const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.querySelector(".chat-box");

sendBtn.addEventListener("click", function () {
    sendMessage();
});

messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }

    // Create new message element
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "right");

    const messageContent = document.createElement("p");
    messageContent.classList.add("msg-text");
    messageContent.textContent = messageText;

    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(timestamp);

    // Append to chat box
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    messageInput.value = "";
}
