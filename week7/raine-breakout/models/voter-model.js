var votes = {
  hellyes: 0,
  yes: 0,
  no: 0
};

module.exports = {
  vote: function (value) {
    votes[value]++;
  },

  getWinner: function () {
    var winner = 'hellyes';
    if(votes.yes > votes[winner]) {
      winner = 'yes'
    }
    if(votes.no > votes[winner]) {
      winner = 'no'
    }
    return winner;
  }
};