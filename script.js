let recommendations = [
    "To Kill a Mockingbird by Harper Lee",
    "1984 by George Orwell",
    "Pride and Prejudice by Jane Austen",
    "The Great Gatsby by F. Scott Fitzgerald",
    "Moby-Dick by Herman Melville"
];

document.getElementById('recommendBtn').addEventListener('click', function() {
    let userResponse = prompt("Do you want a book recommendation? (yes or no)");
    if (userResponse.toLowerCase() === "yes") {
        let randomIndex = Math.floor(Math.random() * recommendations.length);
        let book = recommendations[randomIndex];
        let recommendationElement = document.getElementById('bookRecommendation');

        recommendationElement.innerHTML = `We recommend: <strong>${book}</strong>`;
        recommendationElement.classList.remove('hidden');
    } else {
        alert("No problem! Happy reading anyway!");
    }
});
