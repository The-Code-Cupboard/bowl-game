// load in list of team objects from local storage
const teams = JSON.parse(localStorage.getItem("teams"));

// re-instantiate Teams objects from alternative class constructor
for (team_index = 0; team_index < teams.length; team_index ++) {
    teams[team_index] = Team.fromData(teams[team_index])
}

window.onload = function() {
    document.getElementById("teamAName").innerHTML = teams[0].team_name;
    document.getElementById("teamAUserDisplay").innerHTML = teams[0].calc_num_members();
    document.getElementById("teamAWordCount").innerHTML = teams[0].calc_total_team_words();
}