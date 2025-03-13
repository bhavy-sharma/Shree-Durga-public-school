// script.js
function incrementNumbers() {
    const projects = document.getElementById('projects');
    const clients = document.getElementById('clients');
    const satisfaction = document.getElementById('satisfaction');
    const team = document.getElementById('team');

    let projectCount = 0;
    let clientCount = 0;
    let satisfactionPercent = 0;
    let teamCount = 0;

    const interval = setInterval(() => {
        if (projectCount <= 2000) {
            projects.textContent = `${projectCount}+`;
            projectCount++;
        }
        
        if (clientCount <= 4000) {
            clients.textContent = `${clientCount}+`;
            clientCount++;
        }

        if (satisfactionPercent <= 98) {
            satisfaction.textContent = `${satisfactionPercent}%`;
            satisfactionPercent++;
        }

        if (teamCount <= 30) {
            team.textContent = `${teamCount}`;
            teamCount++;
        }

        // Stop incrementing when all values are reached
        if (projectCount > 2000 && clientCount > 4000 && satisfactionPercent > 98 && teamCount > 30) {
            clearInterval(interval);
        }
    }, 50); // Adjust speed by changing interval time
}

// Start incrementing numbers when the page loads
window.onload = incrementNumbers;
