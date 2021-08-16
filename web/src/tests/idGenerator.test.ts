import idGenerator from "../utils/idGenerator";

test("test id generator", () => {
  expect(idGenerator([])).toEqual(0);

  expect(idGenerator([{ id: 0 }, { id: 2 }])).toEqual(1);

  expect(idGenerator([{ id: 0 }, { id: 1 }, { id: 2 }])).toEqual(3);
});
