import { Character } from "../src/js/character";
import { CyberWizard } from "../src/js/character";

describe('Character', () => {
  test('Should create character object' , () => {
    let character = new Character("Kevin", 1, 1);
    expect(character.name).toEqual("Kevin");
    expect(character.level).toEqual(1);
    expect(character.health).toEqual(100);
    expect(character.armor).toEqual(1);
    expect(character.strength).toEqual(1);
    expect(character.inventory).toEqual(0);
    expect(character.experience).toEqual(0);
  });
  test ('Should set character level to 2', () =>{
    let character = new Character("Kevin", 1, 10);
    character.experience = 50;
    character.levelChange();
    expect(character.level).toEqual(2);
  });
    test ("Should set CyberWizard magic to 2 when level is 2", () => {
      let cyberWiz = new CyberWizard("Kevin", 1, 10);
      cyberWiz.experience = 50;
      cyberWiz.levelChange();
      cyberWiz.magicChange();
      expect(cyberWiz.magic).toEqual(2);
    
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