function createTeams() {
    let team1Name = document.getElementById("team1").value;
    let team2Name = document.getElementById("team2").value;

    // check for any empty user imput fields
    if (team1Name === "" || team2Name === "") {
        window.alert("Team names fields must not be empty. Try again.");
        event.preventDefault();
    }
    // check for duplicate names from user input
    else if (team1Name === team2Name) {
        window.alert("Team names must be unique. Try again.");
        event.preventDefault();
    }
    else {
        //create new Team objects and write to localStorage
        let team1 = new Team(team1Name);
        let team2 = new Team(team2Name);
        localStorage.setItem("teams", JSON.stringify([team1, team2]));
    }
}