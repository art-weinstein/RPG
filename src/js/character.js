export class Character {
  constructor(name) {
  this.name = name;
  this.level = 1;
  this.health = 100;
  this.armor = 0;
  this.strength = 30;
  this.inventory = 0;
  this.experience = 0;
  }


  // levelChange() {
  //   if (this.experience === 50) {
  //     this.level = 2;
  //   };
  // }; 

  
  levelChange() {
    for (let i = 0; i <= this.experience; i++) {
    this.level = (this.experience / 50); 
    };
  }; 

  strengthChange (){

  }

  armorChange() {
    if (this.level === 2){
      this.armor = 50
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

