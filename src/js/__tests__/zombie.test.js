import Zombie from "../Zombie.js";

test("Testing Zombie with attack and defence", () => {
  const gamer = new Zombie("Игрок", "Zombie");
  expect(gamer.attack).toBe(40);
  expect(gamer.defence).toBe(10);
});
