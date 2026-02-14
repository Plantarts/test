const SCRIPT_URL = "YOUR_WEB_APP_URL_HERE"; 

async function sendMessage() {
    const input = document.getElementById('user-input');
    const msgDiv = document.getElementById('messages');
    const text = input.value.trim();
    
    if (!text) return;

    // Display User Message
    msgDiv.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = '';
    msgDiv.scrollTop = msgDiv.scrollHeight;

    // Simulate AI/System Response
    const aiResponse = "Obrigado pelo comentário! Eu registrei sua mensagem: " + text;
    
    setTimeout(() => {
        msgDiv.innerHTML += `<div class="msg bot">${aiResponse}</div>`;
        msgDiv.scrollTop = msgDiv.scrollHeight;
    }, 500);

    // --- SEND TO GOOGLE SHEETS ---
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', 
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: text, bot: aiResponse })
        });
        console.log("Comentário salvo na planilha!");
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}

// Add 'Enter' key support
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
