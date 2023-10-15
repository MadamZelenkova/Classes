import Magician from "../Magician.js";

test("Testing Magician with attack and defence", () => {
  const gamer = new Magician("Игрок", "Daemon");
  expect(gamer.attack).toBe(10);
  expect(gamer.defence).toBe(40);
});
