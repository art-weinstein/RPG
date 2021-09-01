export function Character (id, level, health, armor, strength, inventory) {
  this.id = 1;
  // this.level = level;
  this.health = 100;
  this.armor = 50;
  this.strength = 1;
  this.inventory = 0;
};


Character.prototype.level = function(){
  this.level = 1;
  return this.level;
};