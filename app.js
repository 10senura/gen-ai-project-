const facts = [
    "I love coding and solving errors—it feels like solving a puzzle!",
    "Debugging is like being a detective in a crime movie where you are also the culprit!",
    "I enjoy working on real-time projects that help people track fitness and health.",
    "One of my hobbies is engaging with others and sharing knowledge about tech.",
    "I led my team, Matrix Kz, in the ICET Industry Mind Program!",
    "Creating interactive websites and applications is something I truly enjoy!",
    "I love learning new technologies and experimenting with different programming languages.",
    "Building a cloud-based hospital management system was one of my challenging yet exciting projects.",
    "I enjoy working with JavaScript, especially when making dynamic and interactive web pages.",
    "Seeing my projects come to life gives me a sense of accomplishment and motivation!"
];

function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}
