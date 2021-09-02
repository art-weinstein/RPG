export class Character {
  constructor(name, armor, strength) {
  this.name = name;
  this.level = 1;
  this.health = 100;
  this.armor = armor;
  this.strength = strength;
  this.inventory = 0;
  this.experience = 0;
  }


  levelChange() {
    if (this.experience === 50) {
      this.level = 2;
    };
  }; 


  armor() {
    let currentArmor = this.armor;
    currentArmor = 0;
    if (this.level <= 10){
      currentArmor = 50;
      return currentArmor;
    };
  };
};

export class CyberWizard  extends Character {
  constructor (name, armor, strength){
    super(name, armor, strength);
    this.magic = 0;
  }
  magicChange() {
    if (this.level === 2){
      this.magic = 2;
    }
  }
}

