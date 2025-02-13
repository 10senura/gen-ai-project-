


JavaScript (script.js)
javascript
const facts = [
    "Coding is like solving puzzles!",
    "The first computer bug was an actual moth!",
    "JavaScript was created in just 10 days!",
    "HTML stands for HyperText Markup Language.",
    "CSS stands for Cascading Style Sheets.",
    "The first website ever created is still online.",
    "There are over 700 programming languages!",
    "The first computer programmer was Ada Lovelace.",
    "JavaScript was originally called Mocha.",
    "Coding can improve problem-solving skills!"
];

function changeFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
