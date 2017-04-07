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
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function (damage) {
    this.health -= damage;

    if (this.health > 0)
      return this.name + " has received " + damage + " points of damage";

    return this.name + " has died in act of combat";
  };

  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//------------------------------------------------------
// SAXON
//------------------------------------------------------
function Saxon (health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function (damage) {
    this.health -= damage;

    if (this.health > 0)
      return "A Saxon has received " + damage + " points of damage";

    return "A Saxon has died in combat";
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//------------------------------------------------------
// WAR
//------------------------------------------------------
function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];

  this.addViking = function (viking) {
    this.vikingsArmy.push(viking);
  };

  this.addSaxon = function (saxon) {
    this.saxonsArmy.push(saxon);
  };

  this.saxonAttack = function () {
    return this.vikingsArmy[0].receiveDamage(this.saxonsArmy[0].attack());
  };

  this.vikingAttack = function () {
    var result = this.saxonsArmy[0].receiveDamage(this.vikingsArmy[0].attack());

    if (this.saxonsArmy[0].health <= 0) {
      this.saxonsArmy.splice(0, 1);
    }

    return result;
  };

  this.fight = function () {
    this.saxonAttack();
    this.vikingAttack();
  };

  this.showStats = function () {
    return "Vikings have won the war of the century!";
  };
}
