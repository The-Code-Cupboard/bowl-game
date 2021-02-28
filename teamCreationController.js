window.onload = function() {
    localStorage.clear();
}

function createTeams() {

    team1_name = document.getElementById("team1").value;
    team2_name = document.getElementById("team2").value;
    let team1 = new Team(team1_name);
    let team2 = new Team(team2_name);

    // check for duplicate names
    if (team1.team_name === "" || team2.team_name === "") {
        window.alert("Team names fields must not be empty. Try again.");
        event.preventDefault();
    }
    else if (team1.team_name === team2.team_name) {
        window.alert("Team names must be unique. Try again.");
        event.preventDefault();
    }
    else {
        localStorage.setItem("teams", JSON.stringify([team1, team2]));
    }
}