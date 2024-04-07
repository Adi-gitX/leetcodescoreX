       document.addEventListener("DOMContentLoaded", function() {
    const leaderboardBody = document.getElementById("leaderboard-body");

    // Array of usernames to fetch data for
    const usernames = [
        "Raman-Luhach", "anuragk47", "akashg250804", "mdeepanshu", "saikiranbompelliwar0592",
        "yashlunawat2005", "kezual_coding", "bhavani_shanker", "khatam_aadmi", "Meenaksh_0604",
        "princesahoo659", "yashagrawal0110", "mk0904", "Second_By_Choice", "vivekananda_99",
        "Zakurooooo", "manshusainishab", "Suyash_Parmar", "monurajj", "mannvaswani4",
        "Piyushk12", "manu108", "insaneFTHL", "ayush_gupta_1309", "Inferior_Kush",
        "karthikreddy0165", "Pranay0083", "shivansh_7394", "abhishek23csai", "Prerak_arya",
        "anujsingh31", "user9233qs", "nstXNikhil", "InfinityAditya07", "ritikraj2425",
        "shiven_16", "HarshalNerpagar_333", "Salonii_29", "vikasdevlpr9", "HimanshuRawat77",
        "ajtkr200", "BHAVIHSYASAHAY", "Sourabhishere", "Agrapujya", "samyak2605",
        "abhay_2901", "Janhvi290904", "Yashii_Gupta", "aryan2vb", "codic-yeeshu",
        "Asmit_codes", "CodingWithVaishnav", "BinaryBard1337", "divyanshi_sachan", "visheshrao17",
        "aman01k", "soniyamalviya", "siddharthashukla260804", "code_ron", "Eternal11",
        "Aman1411", "tejmulmovin", "ProgramPro42", "Belal_Raza", "harsh_Gupta123564",
        "Awert_", "aayushh_2607", "subhammahapatra004", "AnkushYadav1712", "shekharsamarth1574",
        "Aviral_S", "mehak26_jain", "Sainathmeesala", "Astro__Dally", "aryanlovescode",
        "prabhat15s", "seven_mark", "satyarth100x", "shashwat_0906", "sujanam_d",
        "thxmbi", "Nilesh_NST", "viv_1205", "Udita_0707", "r69shabh",
        "pintuSingh", "sanskar_singh23", "Sugat_17", "davinciCodeReader", "Omi112244", 
        "amod_24", "Soumya_ranjan_143", "Manasa_0306", "Kalash Kumari Thakur", "Coming Soon", 
        "Kartik Yadav"
    ];

    // Fetch data for each username and populate the leaderboard
    usernames.forEach(username => {
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Failed to fetch data for ${username}`);
                }
            })
            .then(data => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${data.rank}</td>
                    <td>${username}</td>
                    <td>${data.score}</td>
                `;
                leaderboardBody.appendChild(row);
            })
            .catch(error => console.error(error));
    });
});

 
