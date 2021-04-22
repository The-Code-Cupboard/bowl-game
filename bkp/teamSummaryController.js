// load in list of team objects from local storage
const teams = JSON.parse(localStorage.getItem("teams"));

// re-instantiate Teams objects from alternative class constructor
for (let team_index = 0; team_index < teams.length; team_index ++) {
    teams[team_index] = Team.fromData(teams[team_index])
}