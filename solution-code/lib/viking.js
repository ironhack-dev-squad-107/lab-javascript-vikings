//------------------------------------------------------
// SOLDIER
//------------------------------------------------------
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength;
  };

  this.receiveDamage = function (damage) {
    this.health -= damage;
  };
}

//------------------------------------------------------
// VIKING
//------------------------------------------------------
function Viking () {}

//------------------------------------------------------
// SAXON
//------------------------------------------------------
function Saxon () {}

//------------------------------------------------------
// WAR
//------------------------------------------------------
function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
