function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userText = input.value.trim();
    if (!userText) return;

    chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

    let reply = "XA AI is analyzing mission data...";

    const msg = userText.toLowerCase();

    if (msg.includes("mars")) {
        reply = "Mars mission focuses on oxygen generation, water extraction, and autonomous aerospace systems.";
    } 
    else if (msg.includes("l1")) {
        reply = "L1 Lagrange Point is ideal for solar observation and space communication relay stations.";
    }
    else if (msg.includes("oxygen")) {
        reply = "Oxygen on Mars can be produced by electrolysis of CO₂ using MOXIE-type systems.";
    }
    else if (msg.includes("water")) {
        reply = "Water on Mars can be extracted from subsurface ice and hydrated minerals.";
    }
    else if (msg.includes("hello") || msg.includes("hi")) {
        reply = "Hello Commander. XA AI online and ready.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `<div style="color:#7aa2ff;"><b>XA AI:</b> ${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);

    input.value = "";
}