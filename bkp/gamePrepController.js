const USER_ID = "user_id"

function createUser() {
    // create user based on form input and add their words to the user object
    let newUser = new User(document.getElementById(USER_ID).value);
    //loops through nouns entered by user and adds to wordsList
    Array.from(document.getElementsByClassName("nouns")).forEach(
        (element) => newUser.addWord(element.value));
    //get radio button selection
    let teamIdx = identifyTeamIndex();
    //add user to team
    teams[teamIdx].addUserToTeam(newUser);
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

function addTextField() {
    const ul = document.getElementById("nounList");
    const li = document.createElement("li");
    li.innerHTML = '<input type="text" class="nouns" placeholder="Person, Place or Thing" value="">';
    ul.appendChild(li);
}

function clearTextFields() {
    // clear text fields
    document.getElementById(USER_ID).value = "";
    for (element of document.getElementsByClassName("nouns")) {
        element.value = "";
    }
}

function finalizeGamePrep() {
    createUser();
    saveTeams();
}

function saveTeams() {
    localStorage.setItem("teams", JSON.stringify(teams));
}