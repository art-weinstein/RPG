export class Character {
  constructor(name) {
  this.name = name;
  this.level = 1;
  this.health = 100;
  this.armor = 0;
  this.strength = 0;
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
    for(let i = 0; i <= this.level; i++) {
      this.strength = (this.level *  5);
    };
  };

  armorChange() {
    for(let i = 0; i <= this.level; i++) {
      this.armor = (this.level * 25);
    };
  };
};

export class CyberWizard  extends Character {
  constructor (name){
    super(name);
    this.magic = 0;
  }
  magicChange() {
    for(let i = 0; i <= this.level; i++) {
      this.magic = (this.level + 2)
    }
  }
}

export class Warrior extends Character {
  constructor (name){
    super(name);
  }
  warriorStrength() {
    for(let i = 0; i <= this.level; i++) {
      this.strength = ((this.level *  5) + 10);
    }
  }
}

