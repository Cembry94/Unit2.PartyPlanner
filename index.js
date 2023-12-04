document.addEventListener('DOMContentLoaded', fetchAndDisplayParties);

function fetchAndDisplayParties() {
    fetch('/api/parties') // Replace with your API endpoint
        (response => response.json())
        (parties => {
            const partiesList = document.getElementById('parties-list');
            partiesList.innerHTML = '';
            parties.forEach(party => {
                
                partyElement.innerHTML = `
                    <p>Name: ${party.name}</p>
                    <p>Date: ${party.date}</p>
                    <p>Time: ${party.time}</p>
                    <p>Location: ${party.location}</p>
                    <p>Description: ${party.description}</p>
                    <button onclick="deleteParty(${party.id})">Delete</button>
                `;
                
            });
        });
}