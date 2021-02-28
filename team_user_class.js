
class Team {
    constructor(team_name) {
        this.team_name = team_name;
        this.members = [];
        this.score = 0;
    }
    add_user_to_team(new_team_member) {
        this.members.push(new_team_member);
    }
    add_to_score(n){
        this.score += n;
    }
    change_team_name(new_name) {
        this.team_name = new_name;
    }
    calc_num_members() {
        return this.members.length;
    }
    calc_total_team_words() {
        let n_words = 0;
        for (let member of this.members) {
            n_words += member.word_list.length;
        }
        return n_words;
    }
}

Team.fromData = function(data) {
    let instance = new Team(data.team_name);
    instance.members = data.members; // may need to restart User instances
    instance.score = data.score;
    return instance;
}

class User {
    constructor(user_name) {
        this.user_name = user_name;
        this.word_list = [];
    }
    add_word(word) {
        this.word_list.push(word);
    }
    change_user_name (new_name) {
        this.user_name = new_name;
    }
}
