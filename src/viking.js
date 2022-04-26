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
class Saxon {}




// War
class War {}


let soldier;
const strength = 150;
const health = 300;

soldierManolo = new Soldier(health, strength);

console.log(soldierManolo.attack());


let viking;
const name = 'Harald';
const strength2 = 160;
const health2 = 310;

vikingLauri = new Viking(name, health2, strength2);
console.log(vikingLauri.attack());
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.health);
console.log(vikingLauri.battleCry());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
