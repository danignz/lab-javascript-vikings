// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);    
    this.name = name;    
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `${this.name} has received damage points of ${damage}`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
     return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(vickingObject){
    this.vikingArmy.push(vickingObject);
  }

  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack(){

  }

  saxonAttack(){

  }

  showStatus(){

  }


}



const strength = 150;
const health = 300;
const soldierManolo = new Soldier(health, strength);
console.log(soldierManolo.attack());



const name = 'Harald';
const strength2 = 160;
const health2 = 310;
const vikingLauri = new Viking(name, health2, strength2);
console.log(vikingLauri.attack());
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.health);
console.log(vikingLauri.battleCry());



const health3 = 60;
const strength3 = 25;
const saxonMikel = new Saxon(health3, strength3);
console.log(saxonMikel.attack());
console.log(saxonMikel.health);
console.log(saxonMikel.receiveDamage(50));
console.log(saxonMikel.receiveDamage(150));
console.log(saxonMikel.health);

//const viking = generateViking();
//constsaxon = generateSaxon();
const war = new War();
console.log(war.vikingArmy, war.saxonArmy);

war.addViking(vikingLauri);
war.addViking(vikingLauri);
war.addViking(vikingLauri);
console.log(war.vikingArmy);
war.addSaxon(saxonMikel);
war.addSaxon(saxonMikel);
war.addSaxon(saxonMikel);
console.log(war.saxonArmy);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
