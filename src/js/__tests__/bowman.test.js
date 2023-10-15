import Bowman from "../Bowman.js";

test("Testing Bowman with attack and defence", () => {
  const gamer = new Bowman("Игрок", "Bowman");
  expect(gamer.attack).toBe(25);
  expect(gamer.defence).toBe(25);
});
