import Character from "../Character";

test("Character should have default values", () => {
  const character = new Character("Игрок", "Bowman");
  expect(character).toEqual({
    name: "Игрок",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
});

test("Testing name with invalid value", () => {
  expect(() => new Character("L", "Bowman")).toThrow("Имя должно содержать от 2 до 10 символов.");
});

test("Testing type with invalid value", () => {
  expect(() => new Character("Luna", "Snail")).toThrow("Недопустимый тип персонажа.");
});
