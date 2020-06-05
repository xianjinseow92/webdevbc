/* Javascript Objects */

var houseKeeper1 = {
    sexiness: 7,
    workedAt: ['Hotel1', 'Hotel2'],
    hasWorkPermit: true,
    name: "Jane"
}

// Iterating through keys
for (var key in houseKeeper1) {
    console.log(`${key}: ${houseKeeper1[key]}`);
}

/* Javascript Constructor Functions */
function HouseKeeper (sexiness, workedAt, hasWorkPermit, name) {
    this.sexiness = sexiness;
    this.workedAt = workedAt;
    this.hasWorkPermit = hasWorkPermit;
    this.name = name;
    this.clean = function () { // adding methods to your constructor function (class)
        alert('Cleaning...')
    }
}

var houseKeeper12 = new HouseKeeper(3, ['Hotel2', 'Hotel3'], true, 'Fatima');
