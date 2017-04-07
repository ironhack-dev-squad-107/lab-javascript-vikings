describe ("Soldiers", function () {
  var soldier;
  var strength = 150;
  var health   = 300;

  beforeEach (function () {
    soldier = new Soldier(health, strength);
  });

  it ("Should has Object as its prototype", function () {
    expect(typeof(soldier)).toBe("object");
  });

  it ("Should have a number of health", function () {
    expect(typeof(soldier.health)).toBe("number");
    expect(soldier.health).toEqual(health);
  });

  // it ("Should have a number of strength", function () {
  //   expect(typeof(soldier.strength)).toBe("number");
  //   expect(soldier.strength).toEqual(strength);
  // });

  // it ("Should have an attack function", function () {
  //   expect(typeof(soldier.attack)).toBe("function");
  //   expect(soldier.attack()).toEqual(strength);
  // });

  // it ("Should have a receiveDamage function", function () {
  //   expect(typeof(soldier.receiveDamage)).toBe("function");
  // });

  // it ("Should remove the received damage form his health", function () {
  //   var damage = 50;
  //
  //   soldier.receiveDamage(damage);
  //   expect(soldier.health).toEqual(health - damage);
  // });
});

describe ("Vikings", function () {
  var viking;
  var name     = "Harald";
  var strength = 150;
  var health   = 300;

  beforeEach (function () {
    viking = new Viking(name, health, strength);
  });

  // it ("Should be derived from Soldier", function () {
  //   expect(viking instanceof Soldier).toEqual(true);
  // });

  // it ("Should have a name", function () {
  //   expect(typeof(viking.name)).toBe("string");
  //   expect(viking.name).toEqual(name);
  // });

  // it ("Should have a health number", function () {
  //   expect(typeof(viking.health)).toBe("number");
  //   expect(viking.health).toEqual(health);
  // });

  // it ("Should have a strength number", function () {
  //   expect(typeof(viking.strength)).toBe("number");
  //   expect(viking.strength).toEqual(strength);
  // });

  // it ("Should have an attack function", function () {
  //   expect(typeof(viking.attack)).toBe("function");
  //   expect(viking.attack()).toEqual(strength);
  // });

  // it ("Should have a receiveDamage function", function () {
  //   var damage = 50;
  //
  //   expect(viking.receiveDamage(damage)).toEqual(name + " has received " + damage + " points of damage");
  //   expect(viking.health).toEqual(health - damage);
  // });

  // it ("Should have a battleCry function", function () {
  //   expect(typeof(viking.battleCry)).toBe("function");
  // });

  // it ("Should return 'Odin Owns You All!' when battleCry is called", function () {
  //   var battleCry = viking.battleCry();
  //   expect(typeof(battleCry)).toBe("string");
  //   expect(battleCry).toEqual("Odin Owns You All!");
  // });

  // it ("Should return '{name} has died in act of combat' when the health is equal or lower than 0", function () {
  //   expect(viking.receiveDamage(health)).toEqual(name + " has died in act of combat");
  // });
});

describe ("Saxons", function () {
  var saxon;
  var health   = 60;
  var strength = 25;

  beforeEach(function () {
    saxon = new Saxon(health, strength);
  });

  // it ("Should be derived from Soldier", function () {
  //   expect(saxon instanceof Soldier).toEqual(true);
  // });

  // it ("Should have a health number", function () {
  //   expect(typeof(saxon.health)).toBe("number");
  //   expect(saxon.health).toEqual(health);
  // });

  // it ("Should have a strength number", function () {
  //   expect(typeof(saxon.strength)).toBe("number");
  //   expect(saxon.strength).toEqual(strength);
  // });

  // it ("Should have an attack function", function () {
  //   expect(typeof(saxon.attack)).toBe("function");
  //   expect(saxon.attack()).toEqual(strength);
  // });

  // it ("Should have a receiveDamage function", function () {
  //   expect(typeof(saxon.receiveDamage)).toBe("function");
  // });

  // it ("Should remove the received damage from his health", function () {
  //   var damage = 50;
  //
  //   expect(saxon.receiveDamage(damage)).toEqual("A Saxon has received " + damage + " points of damage");
  //   expect(saxon.health).toEqual(health - damage);
  // });

  // it ("Should return 'A Saxon has died in combat' when the health is equal or lower than 0", function () {
  //   expect(saxon.receiveDamage(health)).toEqual("A Saxon has died in combat");
  // });
});

describe ("War", function () {
  var viking, saxon, war;

  function generateViking () {
    var name     = "Harald";
    var strength = 150;
    var health   = 300;

    return new Viking(name, health, strength);
  }

  function generateSaxon () {
    var health   = 60;
    var strength = 25;

    return new Saxon(health, strength);
  }

  beforeEach(function () {
    viking = generateViking();
    saxon  = generateSaxon();
    war    = new War();
  });

  // it ("Should exist an array of Vikings", function () {
  //   expect(Object.prototype.toString.call(war.vikingsArmy) === '[object Array]').toBe(true);
  // });

  // it ("Should add Vikings to the army", function () {
  //   expect(typeof(war.addViking)).toBe("function");
  //   war.addViking(viking);
  //   expect(war.vikingsArmy.length).toEqual(1);
  // });

  // it ("Should exist an array of Saxons", function () {
  //   expect(Object.prototype.toString.call(war.saxonsArmy) === '[object Array]').toBe(true);
  // });

  // it ("Should add Saxons to the army", function () {
  //   expect(typeof(war.addSaxon)).toBe("function");
  //   war.addSaxon(saxon);
  //   expect(war.saxonsArmy.length).toEqual(1);
  // });

  describe ("Armies Attack", function () {
    beforeEach (function () {
      war.addViking(viking);
      war.addSaxon(saxon);
    });

    // it ("Should show the result of the saxon attack", function () {
    //   expect(typeof(war.saxonAttack)).toBe("function");
    //   expect(war.saxonAttack()).toEqual(viking.name + " has received " + saxon.strength + " points of damage");
    // });

    // it ("Should show the result of the viking attack", function () {
    //   expect(typeof(war.vikingAttack)).toBe("function");
    //   expect(war.vikingAttack()).toEqual("A Saxon has died in combat");
    //   expect(war.saxonsArmy.length).toEqual(0);
    // });

    // it ("Should has a fight function to start the combat", function () {
    //   expect(typeof(war.fight)).toBe("function");
    // });

    // it ("Should show the final stats of the combat", function () {
    //   expect(typeof(war.showStats)).toBe("function");
    //   expect(war.showStats()).toEqual("Vikings have won the war of the century!");
    // });
  });
});
