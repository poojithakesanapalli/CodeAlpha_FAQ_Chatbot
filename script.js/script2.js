const faqs = [

{
keywords: ["codealpha", "internship"],
answer:
"CodeAlpha is a platform offering internships and technical projects for students."
},

{
keywords: ["ai", "artificial intelligence"],
answer:
"Artificial Intelligence enables machines to perform tasks that normally require human intelligence."
},

{
keywords: ["chatbot", "build chatbot", "ai chatbot"],
answer:
"I can help you build an AI chatbot using HTML, CSS, and JavaScript step-by-step."
},

{
keywords: ["technologies", "html", "css", "javascript"],
answer:
"This project is built using HTML, CSS, and JavaScript."
},

{
keywords: ["developer", "developed", "who made this"],
answer:
"This project was developed by Poojitha as part of the CodeAlpha AI Internship."
},

{
keywords: ["web development", "website"],
answer:
"Web development involves creating websites and web applications."
}

];

function sendMessage(){

const userInput =
document.getElementById("userInput");

const chatBox =
document.getElementById("chatBox");

const message =
userInput.value.toLowerCase().trim();

if(message === ""){
return;
}

// USER MESSAGE

const userDiv =
document.createElement("div");

userDiv.className = "user-message";

userDiv.innerText =
userInput.value;

chatBox.appendChild(userDiv);

// BOT MESSAGE

const botDiv =
document.createElement("div");

botDiv.className = "bot-message";

let found = false;

for(let faq of faqs){

for(let keyword of faq.keywords){

if(message.includes(keyword)){

botDiv.innerText =
faq.answer;

found = true;

break;

}

}

if(found) break;

}

if(!found){

botDiv.innerText =
"Sorry, I don't understand that question.";

}

setTimeout(() => {

chatBox.appendChild(botDiv);

chatBox.scrollTop =
chatBox.scrollHeight;

}, 500);

userInput.value = "";

}