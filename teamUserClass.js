
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
    addWord(word) {
        this.wordList.push(word);
    }
    changeUserName(newUserName) {
        this.userName = newUserName; 
    }
}


function rebuildTeamsListFromJSON(teamsData) {
    let output = [];
    // create new Team Object for each team
    for (let teamIdx = 0; teamIdx < teamsData.length; teamIdx++) {
        output[teamIdx] = new Team(teamsData[teamIdx].teamName, teamsData[teamIdx].members, teamsData[teamIdx].score);
        // create new User Objects for each user of a given team
        for (let memberIdx = 0; memberIdx < teamsData[teamIdx].members.length; memberIdx++) {
            teamsData[teamIdx].members[memberIdx] = new User(teamsData[teamIdx].members[memberIdx].userName, teamsData[teamIdx].members[memberIdx].wordList)
        }
    }
    return output;
}