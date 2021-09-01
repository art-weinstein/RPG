import { Character } from "../src/js/character";

describe('Character', () => {
  test('Should create character object' , () => {
    let character = new Character(1, 0);
    expect(character.id).toEqual(1);
    expect(character.experience).toEqual(0)
    expect(character.health).toEqual(100);
    expect(character.armor).toEqual(50);
    expect(character.strength).toEqual(1);
    expect(character.inventory).toEqual(0);
  });
  test ('Should set character level to 1', () =>{
    let character = new Character(1, 0);
    expect(character.level()).toEqual(1);
  });
  test("should return id of 1", () => {
    let character = new Character(1, 0);
    expect(character.id).toEqual(1);
  });
});