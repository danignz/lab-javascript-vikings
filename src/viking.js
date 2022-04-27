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

  }


}  

 
/*
const strength = 150;
const health = 300;
const soldierManolo = new Soldier(health, strength);
console.log(soldierManolo.attack());*/ 

const war = new War();

war.addViking(new Viking('Harald', 290, 105));
war.addViking(new Viking('Lars', 300, 120));
war.addViking(new Viking('Thor', 230, 100));
war.addViking(new Viking('Olaf', 250, 230));
war.addViking(new Viking('Ivar', 270, 160));
//war.addViking(new Viking('Jorgen', 210, 190));
//war.addViking(new Viking('Bjorn', 210, 200));
//war.addViking(new Viking('Einar', 350, 160));
//war.addViking(new Viking('Niels', 310, 120));
//war.addViking(new Viking('Hans', 370, 250));;
war.addSaxon(new Saxon(300, 50));
war.addSaxon(new Saxon(210, 120));
war.addSaxon(new Saxon(210, 102));
war.addSaxon(new Saxon(270, 101));
war.addSaxon(new Saxon(190, 70));
//war.addSaxon(new Saxon(230, 200));
//war.addSaxon(new Saxon(210, 80));
//war.addSaxon(new Saxon(150, 150));
//war.addSaxon(new Saxon(180, 90));
//war.addSaxon(new Saxon(170, 80));

//Initial army 
console.log(war.vikingArmy, war.saxonArmy);

console.log(war.vikingAttack());
 
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
/* 


console.log(war.vikingAttack());

*/

/*
console.log(vikingLauri.attack());
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.receiveDamage(150));
console.log(vikingLauri.health);
console.log(vikingLauri.battleCry());
*/

/*
const health3 = 60;
const strength3 = 25;
const saxonMikel = new Saxon(health3, strength3);
console.log(saxonMikel.attack());
console.log(saxonMikel.health);
console.log(saxonMikel.receiveDamage(50));
console.log(saxonMikel.receiveDamage(150));
console.log(saxonMikel.health);
*/
//const viking = generateViking();
//constsaxon = generateSaxon();

/*

war.addSaxon(saxonMikel);
war.addSaxon(saxonMikel);
war.addSaxon(saxonMikel);
console.log(war.saxonArmy);
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();

*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
