
const USER_ID = "user_id"
// load in list of team objects from local storage
const teams = JSON.parse(localStorage.getItem("teams"));
for (let team_index = 0; team_index < teams.length; team_index ++) {
    teams[team_index] = Team.fromData(teams[team_index])
}

window.onload = () => {
    // populate team selection buttons with actual team names
    const team1Label = document.getElementById("team1RadioLabel");
    team1Label.innerHTML = teams[0].team_name;
    const team2Label = document.getElementById("team2RadioLabel");
    team2Label.innerHTML = teams[1].team_name;
}

function addTextField() {
    const ul = document.getElementById("nounList");
    const li = document.createElement("li");
    li.innerHTML = '<input type="text" class="nouns" placeholder="Person, Place or Thing" value="">';
    ul.appendChild(li);
}

function finalizeGamePrep() {
    createUser();
    saveTeams();
}

function createUser() {
    // create user based on form input and add their words to the user object
    let user_name = document.getElementById(USER_ID).value;
    let newUser = new User(user_name);
    //loops through nouns entered by user and adds to wordsList
    Array.from(document.getElementsByClassName("nouns")).forEach(
        (element) => newUser.add_word(element.value));
    //get radio button selection
    let team_index = identifyTeamIndex();
    //add user to team
    teams[team_index].add_user_to_team(newUser);
    clearTextFields()
}

function identifyTeamIndex() {
    // add new user to team depending on which button is selected
    if (document.getElementById("team1Radio").checked) {
        return 0;
    }
    else if (document.getElementById("team2Radio").checked) {
        return 1;
    }
}

function clearTextFields() {
    // clear text fields
    document.getElementById(USER_ID).value = "";
    for (element of document.getElementsByClassName("nouns")) {
        element.value = "";
    }
}

function saveTeams() {
    localStorage.setItem("teams", JSON.stringify(teams));
}