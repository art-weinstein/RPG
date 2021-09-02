import { Character } from "../src/js/character";
import { CyberWizard } from "../src/js/character";
import { Warrior } from "../src/js/character";

describe('Character', () => {
  test('Should create character object' , () => {
    let character = new Character("Kevin");
    expect(character.name).toEqual("Kevin");
    expect(character.level).toEqual(1);
    expect(character.health).toEqual(100);
    expect(character.armor).toEqual(0);
    expect(character.strength).toEqual(0);
    expect(character.inventory).toEqual(0);
    expect(character.experience).toEqual(0);
  });
  test ('Should set character level to 2', () =>{
    let character = new Character("Kevin");
    character.experience = 100;
    character.levelChange();
    expect(character.level).toEqual(2);
  });  
  test("Should set armor for new Character to 50", () =>{
    let character = new Character("Kevin");
    character.experience = 100;
    character.levelChange();
    character.armorChange();
    expect(character.armor).toEqual(50);
  });
    test ("Should set CyberWizard magic to 5 when level is 3", () => {
      let cyberWiz = new CyberWizard("Kevin");
      cyberWiz.experience = 150;
      cyberWiz.levelChange();
      cyberWiz.magicChange();
      expect(cyberWiz.magic).toEqual(5);
  });
  test("Should set Character strength to 10", () => {
    let character = new Character;
    character.experience = 100;
    character.levelChange();
    character.strengthChange();
    expect(character.strength).toEqual(10);
  });
  test ("Should set Warrior strength to 20 when level is 2", () => {
    let warrior = new Warrior("Kevin");
    warrior.experience = 100;
    warrior.levelChange();
    warrior.warriorStrength();
    expect(warrior.strength).toEqual(20);
});
  test ("Should set Warrior strength to 20 when level is 2", () => {
    let warrior = new Warrior("Kevin");
    warrior.experience = 150;
    warrior.levelChange();
    warrior.warriorStrength();
    expect(warrior.strength).toEqual(25);
  });
  test("Should set character Armor to 50 when expirence is 100", () => {
    let character = new Character("Kevin");
    character.experience = 100;
    character.levelChange();
    character.armorChange();
    expect(character.armor).toEqual(50);
  });


  // test("should return id of 1", () => {
  //   let character = new Character(id, armor, experience);
  //   expect(character.id).toEqual(1);
  // });
  // test("based on level being 1, armor should return 50", () => {
  //   let character = new Character(id, armor, experience)
  //   expect(character.armor).toEqual(50)
  // });
});