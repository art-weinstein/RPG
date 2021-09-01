export function Character (id, health, armor, strength, inventory) {
  this.id = id;
  this.level = [];
  this.health = health;
  this.armor = armor;
  this.strength = strength;
  this.inventory = inventory;
};



// Character.prototype.level = function(){
//   let level = 1
//   return level;
// }