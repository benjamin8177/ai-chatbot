const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

const botResponses = [
    "That sounds interesting! Tell me more.",
    "I'm an AI, but I can still understand that.",
    "Could you clarify your statement?",
    "That's a fantastic idea! Let's explore it.",
    "I'm here to help. What else do you need?",
    "Processing your request...",
    "Absolutely! Anything for you."
];

function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'} fade-in`;
    
    msgDiv.innerHTML = `
        <div class="avatar"><i class="fa-solid ${isUser ? 'fa-user' : 'fa-robot'}"></i></div>
        <div class="content">
            <p>${text}</p>
            <span class="timestamp">${getCurrentTime()}</span>
        </div>
    `;
    
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // User message
    appendMessage(text, true);
    userInput.value = '';
    
    // Show typing indicator
    typingIndicator.style.display = 'flex';
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Bot reply
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        const randomReply = botResponses[Math.floor(Math.random() * botResponses.length)];
        appendMessage(randomReply, false);
    }, 1500);
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
