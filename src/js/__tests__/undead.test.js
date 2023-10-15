import Undead from "../Undead.js";

test("Testing Undead with attack and defence", () => {
  const gamer = new Undead("Игрок", "Undead");
  expect(gamer.attack).toBe(25);
  expect(gamer.defence).toBe(25);
});
