/*
 Andranae Bevans
 CSC350
 Assignment: Week 2 - JSON and Bootstrap
 */
//Singer info stored as JSON-style JavaScript objects
const singers = [
    { "name": "Frank Ocean", "song": "Pyramids", "hometown": "New Orleans, Louisiana" },
    { "name": "Amy Winehouse", "song": "Back to Black", "hometown": "London, England" },
    { "name": "The Cranberries", "song": "Linger", "hometown": "Limerick, Ireland" },
    { "name": "Erykah Badu", "song": "Bag Lady", "hometown": "Dallas, Texas" },
    { "name": "Keyshia Cole", "song": "Heaven Sent", "hometown": "Oakland, California" },
    { "name": "Sade", "song": "Is It a Crime", "hometown": "London, England" }
];

//Add one table row for each singer
function displaySingers() {
    const table = document.getElementById("singerTable");

    singers.forEach(function(singer) {
        const row = document.createElement("tr");

        //textContent displays the data as text inside each cell
        [singer.name, singer.song, singer.hometown].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", displaySingers);
