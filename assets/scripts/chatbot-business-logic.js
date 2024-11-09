import { botResponses } from "../../assets/scripts/chatbot-data.js";

const usersMsg = document.getElementById("users-message");
const usersSendBtn = document.getElementById("send-btn");
const chatOutput = document.getElementById("chat-output");
const showKeywordsBtn = document.getElementById("bot-get-keyword-btn");

const sendMsg = () => {
    const message = usersMsg.value.trim();

    if (!message) {
        return;
    }

    addMessageToChat("user", message);

    usersMsg.value = "";

    // Pass the actual message to removeChatHistory
    removeChatHistory(message);

    // bot thinking
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessageToChat("bot", botResponse);
    }, 500);
};

const addMessageToChat = (sender, message) => {
   const newMessage = document.createElement("p");
   newMessage.classList.add("message", "border", sender);
   newMessage.innerHTML = message;
   chatOutput.appendChild(newMessage);
   chatOutput.scrollTop = chatOutput.scrollHeight;
};

const getBotResponse = (usersInput) => {
    usersInput = usersInput.toLowerCase();

    // Check if the input matches any other keyword in the responses
    for (const keyword in botResponses) {
        if (usersInput.includes(keyword)) {
            const responses = botResponses[keyword];
            // Pick a random response
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    const defaultResponses = botResponses["default"];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};



// Function to display all bot response categories
const displayBotCategories = () => {
    const botCategories = Object.keys(botResponses); // Get all keys in botResponses
    const catagoryList = document.createElement("ul");
    catagoryList.classList.add("gap-2", "flex", "flex-col");
  
    // Loop through each category and add it as a list item
    botCategories.forEach(category => {
        const listItem = document.createElement("li");
        listItem.classList.add("bot", "mb-2");
        listItem.textContent = category;
        catagoryList.appendChild(listItem);
        chatOutput.appendChild(catagoryList);
    });
}

// Function to remove all child elements
const removeChatHistory = (message) => {
    // Clear chat only if the user types "clear"
    if (message.toLowerCase() === "clear") {
        chatOutput.innerHTML = "";
    }
};

usersSendBtn.addEventListener("click", sendMsg);
showKeywordsBtn.addEventListener("click", displayBotCategories);

// listening for keyboards
usersMsg.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMsg();
    }
});