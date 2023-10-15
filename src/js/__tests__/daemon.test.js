import Daemon from "../Daemon.js";

test("Testing Daemon with attack and defence", () => {
  const gamer = new Daemon("Игрок", "Daemon");
  expect(gamer.attack).toBe(10);
  expect(gamer.defence).toBe(40);
});
