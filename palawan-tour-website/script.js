
// Tour details
function showDetails(place) {
    const descriptions = {
        "El Nido": "Explore beautiful beaches, lagoons, and limestone cliffs in El Nido, Palawan.",
        "Coron": "Discover stunning lakes, coral reefs, and island destinations in Coron.",
        "Puerto Princesa": "Experience the famous Underground River and beautiful nature."
    };

    alert(descriptions[place]);
}

// Contact form
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting Palawan Tours!");

    this.reset();
});
