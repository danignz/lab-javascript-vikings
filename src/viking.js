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

    const randomVickingIndex = Math.floor(Math.random() * this.vikingArmy.length); // max = Random numbers between 0 and ( this.vikingArmy-1)
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    
    const resultVikAt = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVickingIndex].strength);

    if (this.saxonArmy[randomSaxonIndex].health < 0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return resultVikAt; 
  }

  saxonAttack(){

    const randomVickingIndex = Math.floor(Math.random() * this.vikingArmy.length); // max = Random numbers between 0 and ( this.vikingArmy-1)
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    
    const resultSaxAt = this.vikingArmy[randomVickingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);

    if (this.vikingArmy[randomVickingIndex].health < 0){
      this.vikingArmy.splice(randomVickingIndex, 1);
    }

    return resultSaxAt; 
  }

  showStatus(){
    
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1 ){
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}

//Creation of war object
const war = new War();

//Definition of Soldiers
war.addViking(new Viking('Hara', 290, 205));
war.addViking(new Viking('Lars', 300, 120));
war.addViking(new Viking('Thor', 230, 180));
war.addViking(new Viking('Olaf', 250, 230));
war.addViking(new Viking('Ivar', 270, 160));
war.addSaxon(new Saxon(200, 90));
war.addSaxon(new Saxon(160, 120));
war.addSaxon(new Saxon(150, 152));
war.addSaxon(new Saxon(270, 151));
war.addSaxon(new Saxon(190, 270));

//Initial army arrays
console.log(war.vikingArmy, war.saxonArmy);

//Starts Battle
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());

//Status of battle
console.log(war.showStatus());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
