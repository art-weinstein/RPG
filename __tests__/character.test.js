import { Character } from "../src/js/character";

// Character
describe('Character', () => {
  test('Should create character object' , () => {
    let character = new Character();
    expect(character.id).toEqual(2);
    expect(character.health).toEqual(100);
    expect(character.armor).toEqual(50);
    expect(character.strength).toEqual(1);
    expect(character.inventory).toEqual(0);
  });
});