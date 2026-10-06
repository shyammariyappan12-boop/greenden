// ===============================
// COURSE SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(function (card) {

        const courseName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (courseName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// ===============================
// ADD TOPIC
// ===============================

function addTopic() {

    const topicInput = document.getElementById("topicInput");

    const topic = topicInput.value.trim();

    if (topic === "") {
        alert("Please enter a topic!");
        return;
    }

    const topicsList = document.getElementById("topicsList");

    const newTopic = document.createElement("span");

    newTopic.innerText = topic;

    topicsList.appendChild(newTopic);

    topicInput.value = "";

}


// ===============================
// ENTER KEY FOR TOPIC
// ===============================

document
    .getElementById("topicInput")
    .addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            addTopic();
        }

    });


// ===============================
// HERO SEARCH BUTTON
// ===============================

const heroSearchButton = document.querySelector(".hero-search button");

const heroSearchInput = document.querySelector(".hero-search input");

heroSearchButton.addEventListener("click", function () {

    const searchValue = heroSearchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter something to search!");
        return;
    }

    searchInput.value = searchValue;

    searchInput.dispatchEvent(new Event("input"));

    document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// COURSE CARD CLICK
// ===============================

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const courseTitle =
            card.querySelector("h3").innerText;

        alert(
            "You selected:\n\n" +
            courseTitle +
            "\n\nCourse details coming soon!"
        );

    });

});