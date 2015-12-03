var ship;
var crewNames;
var launchpad;
var rocket;

launchpad = function(ship, crewNames, rocket) {
  console.log('Initiating Launchpad Procedures');
  console.log(ship.name + ' preparing for lift');
  loadCrewmate(ship, crewNames);
  ship.mountPropulsion(rocket);
  ship.fuelShip(10);
  ship.propulsion.fire();
  console.log('Captain ' + ship.captain().name + ' will take reign and lead us to glory');
  countdown(5, ship);
}

ship = {
  name: 'Stellar',
  crew: [],
  captain: function(){
    var randomCaptain = this.crew[Math.floor(Math.random()*this.crew.length)];
    return randomCaptain;
  },
  mountPropulsion: function(rocket){
    this.propulsion = rocket;
  },
  propulsion: null,
  fuelShip: function(addFuel){
    this.propulsion.fuel += addFuel;
  },
  takeoff: function() {
    console.log('VROOOMMMM WHOOSH')
  }
}

crewNames = ['Sally', 'Gino', 'Michelle', 'Ninjin']

var createCrewmate = function(name) {
  var crewmate = {name: name};
  return crewmate;
}

var loadCrewmate = function(ship, crewNames) {
  for (var i = 0; i < crewNames.length; i++) {
    ship.crew.push(createCrewmate(crewNames[i]));
  }
  return ship.crew;
}

rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log('Fuel consumed. Fuel reservior now at ' + this.fuel)
    }
    else {
      console.log('Engines failed to fire. Fuel reservior empty.')
    }
  }
}

var countdown = function(num, ship){
  if (num > 0) {
    setTimeout(function(){
      console.log(num);
      countdown(num-1, ship);
    }, 1000);
  }else {
    console.log('To infinity and beyond!');
    ship.takeoff();
  };
}

launchpad(ship, crewNames, rocket);
