function searchPlaces() {

    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".card");

    if (searchText === "") {
        alert("Please enter a place to search.");
        return;
    }

    let found = false;

    cards.forEach(function(card) {

        const placeName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (placeName.includes(searchText)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!found) {
        alert("No destination found.");
    }
}