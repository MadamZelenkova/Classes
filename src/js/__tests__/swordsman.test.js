import Swordsman from "../Swordsman.js";

test("Testing Swordsman with attack and defence", () => {
  const gamer = new Swordsman("Игрок", "Swordsman");
  expect(gamer.attack).toBe(40);
  expect(gamer.defence).toBe(10);
});
