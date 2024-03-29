
class Team {
    constructor(teamName, members = [], score = 0) {
        this.teamName = teamName;
        this.members = members;
        this.score = score;
    }

    addUserToTeam(newTeamMember) {
        this.members.push(newTeamMember);
    }

    getMembersList() {
        return this.members;
    }

    addToScore(n){
        this.score += n;
    }

    getScore() {
        return this.score;
    }

    changeTeamName(newTeamName) {
        this.teamName = newTeamName;
    }

    getTeamName(){
        return this.teamName;
    } 

    getNumMembers() {
        return this.members.length;
    }

    getTotalTeamWords() {
        let numWords = 0;
        for (let member of this.members) {
            numWords += member.wordList.length;
        }
        return numWords;
    }
}


class User {
    constructor(userName, wordList = []) {
        this.userName = userName;
        this.wordList = wordList;
    }

    changeUserName(newUserName) {
        this.userName = newUserName; 
    }

    getUserName() {
        return this.userName;
    }

    addWord(word) {
        this.wordList.push(word);
    }

    getWordList() {
        return this.wordList;
    }
}


function getTeamsListFromJSON(teamsData) {
    let output = [];
    // create new Team Object for each team
    for (let teamIdx = 0; teamIdx < teamsData.length; teamIdx++) {
        output[teamIdx] = new Team(teamsData[teamIdx].teamName, teamsData[teamIdx].members, teamsData[teamIdx].score);
        // create new User Objects for each user of a given team
        for (let memberIdx = 0; memberIdx < teamsData[teamIdx].members.length; memberIdx++) {
            teamsData[teamIdx].members[memberIdx] = new User(teamsData[teamIdx].members[memberIdx].userName, teamsData[teamIdx].members[memberIdx].wordList);
        }
    }
    return output;
}

function shuffle(array) {
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getWordsListAllTeams(teams) {
    let output = [];
    for (let currentTeam of teams) {
        for (let currentMember of currentTeam.getMembersList()) {
                output.push(...currentMember.getWordList());
        }
    }
    shuffle(output);
    return output;
}

function getUserListInTurnOrder(teams) {
    let output = [];
    let teamA = teams[0].getMembersList();
    let teamB = teams[1].getMembersList();
    for (let i=0; i<teamA.length; i++) {
        output.push(teamA[i]);
        output.push(teamB[i]);
    }
    //doesn't account for inbalanced teams - may breaks
    return output;
}

