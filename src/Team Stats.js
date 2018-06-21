const team = {
  _players: [
    {firstName: "Neymar",
     lastName:"Silva",
     age:26},
    {firstName: "Christiano",
     lastName:"Ronaldo",
     age:33},
    {firstName: "Lionel",
     lastName:"Messi",
     age:30},
  ],

  _games:[
    {opponent: "Liverpool",
    teamPoints: 1,
    opponentPoints: 3},
    {opponent: "Roma",
    teamPoints: 3,
    opponentPoints: 2},
    {opponent: "Barcelona",
    teamPoints: 5,
    opponentPoints: 1},
  ],

  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return this.players.push(player);
  },

  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    return this.games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("FC Bacau",2,3);
console.log(team.games);
