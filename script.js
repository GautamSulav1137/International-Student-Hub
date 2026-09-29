

// ===============================
// KOREAN HELPER
// ===============================

const phrases = {

university: {
korean: "교수님, 질문이 있습니다.",
english: "Professor, I have a question."
},

restaurant: {
korean: "영수증을 주시겠어요?",
english: "Could I have the receipt, please?"
},

hospital: {
korean: "병원이 어디에 있나요?",
english: "Where is the hospital?"
},

work: {
korean: "오늘 몇 시까지 일하면 되나요?",
english: "Until what time should I work today?"
}

};


function showPhrase(category) {

const phrase = phrases[category];

document.getElementById("koreanText").textContent =
phrase.korean;

document.getElementById("englishText").textContent =
phrase.english;

document.getElementById("copyMessage").textContent = "";
}


// ===============================
// COPY KOREAN PHRASE
// ===============================

function copyPhrase() {

const koreanText =
document.getElementById("koreanText").textContent;

navigator.clipboard.writeText(koreanText);

document.getElementById("copyMessage").textContent =
"Copied!";
}


// ===============================
// DEADLINE TRACKER
// ===============================

function addDeadline() {

const task =
document.getElementById("taskInput").value;

const date =
document.getElementById("dateInput").value;

if (task === "" || date === "") {
alert("Please enter both a task and a date.");
return;
}

const deadlineList =
document.getElementById("deadlineList");

const deadline = document.createElement("div");

deadline.className = "deadline-item";

deadline.innerHTML = `
<div>
<strong>${task}</strong>
<small>${date}</small>
</div>

<button onclick="completeTask(this)">
✓
</button>
`;

deadlineList.appendChild(deadline);

document.getElementById("taskInput").value = "";
document.getElementById("dateInput").value = "";
}


function completeTask(button) {

const item = button.parentElement;

item.classList.toggle("completed");

}


// ===============================
// SIMPLE AI ASSISTANT DEMO
// ===============================

function askQuestion() {

const input =
document.getElementById("questionInput");

const question = input.value.trim();

if (question === "") {
return;
}

const chat =
document.getElementById("chatMessages");

// User message

const userMessage =
document.createElement("div");

userMessage.className = "user-message";

userMessage.textContent = question;

chat.appendChild(userMessage);


// Simple demo response

let answer =
"I'm still learning. Please check the university website for official information.";

const lowerQuestion =
question.toLowerCase();


if (lowerQuestion.includes("library")) {

answer =
"The university library usually provides study spaces, books and computer facilities. Check your university library website for opening hours.";

}

else if (lowerQuestion.includes("professor")) {

answer =
"You can contact your professor through email or the university's learning management system.";

}

else if (lowerQuestion.includes("deadline")) {

answer =
"You can add your assignment and exam deadlines in the Deadline Tracker section.";

}

else if (lowerQuestion.includes("korean")) {

answer =
"Try the Korean Helper section above. You can find useful phrases for university, restaurants, hospitals and work.";

}


setTimeout(() => {

const botMessage =
document.createElement("div");

botMessage.className = "bot-message";

botMessage.textContent = answer;

chat.appendChild(botMessage);

chat.scrollTop = chat.scrollHeight;

}, 500);


input.value = "";
}


// Allow Enter key to send message

document
.getElementById("questionInput")
.addEventListener("keypress", function(event) {

if (event.key === "Enter") {
askQuestion();
}

});
