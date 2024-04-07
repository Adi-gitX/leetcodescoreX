function fetchScores() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username');
        return;
    }

    const apiUrl = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayScores(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayScores(data) {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Clear previous results

    const { solvedProblem, easySolved, mediumSolved, hardSolved } = data;
    const htmlContent = `
        <p>Total Solved: ${solvedProblem}</p>
        <p>Easy: ${easySolved}</p>
        <p>Medium: ${mediumSolved}</p>
        <p>Hard: ${hardSolved}</p>
    `;

    leaderboard.innerHTML = htmlContent;
}