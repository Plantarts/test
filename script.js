/* --- NEW EXTERNAL FILE: script.js --- */
const SCRIPT_URL = "YOUR_WEB_APP_URL_HERE"; 

async function sendMessage() {
    const input = document.getElementById('user-input');
    const msgDiv = document.getElementById('messages');
    const text = input.value.trim();
    
    if (!text) return;

    // Display User Message
    msgDiv.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = '';

    // Simulate AI Response
    const aiResponse = "I've logged your message: " + text;
    
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
        console.log("Data saved to Sheets!");
    } catch (error) {
        console.error("Error saving to Sheets:", error);
    }
}
/* --- END OF script.js --- */
