export function Character (id, experience) {
  this.id = id;
  // this.level = level;
  this.health = 100;
  this.armor = 50;
  this.strength = 1;
  this.inventory = 0;
  this.experience = experience;
};

Character.prototype.assignId = function() {
  let currentId = this.id;
  currentId = 1
};

Character.prototype.level = function(){
  let currentExperience = this.experience;
  let currentLevel = 0;
  if (currentExperience === 0){
    currentLevel = 1;
    return currentLevel;
    };
};