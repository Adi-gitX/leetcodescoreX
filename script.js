        document.addEventListener("DOMContentLoaded", function() {
            const leaderboardBody = document.getElementById("leaderboard-body");

            const usernames = [
                "Raman-Luhach", "anuragk47", "akashg250804", "mdeepanshu", "saikiranbompelliwar0592","anujsingh31", "user9233qs", "nstXNikhil", "InfinityAditya07"
                // Add the rest of the usernames here...
            ];

            // Function to generate a random score
            function getRandomScore(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            // Populate the leaderboard with random scores for each user
            usernames.forEach((username, index) => {
                const rank = index + 1;
                const score = getRandomScore(1, 100); // Generate a random score between 1 and 100

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${rank}</td>
                    <td>${username}</td>
                    <td>${score}</td>
                `;
                leaderboardBody.appendChild(row);
            });
        });
