var numberOfMatches = function(n) {
    let count = 0;
    let currentTeams = n;
    while (currentTeams > 1) {
        console.log('Current teams',currentTeams)
        count = count + parseInt(currentTeams / 2)
        currentTeams =
          currentTeams % 2 == 0 ? currentTeams / 2 : (currentTeams + 1) / 2;
    }
    return count
};
console.log(numberOfMatches(7))
console.log(numberOfMatches(14))