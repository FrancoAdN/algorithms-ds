const mergeTwoLists = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

test("mergeTwoLists", () => {
  expect(typeof mergeTwoLists).toEqual("function");
});

test("merge two lists", () => {
  const list1 = new List([1, 2, 4]);
  const list2 = new List([1, 3, 4]);

  const expectedResult = new List([1, 1, 2, 3, 4, 4]);
  const result = mergeTwoLists(list1, list2);
  expect(result).toEqual(expectedResult);
});

test("return an empty list when the two given are empty", () => {
  const list1 = new List();
  const list2 = new List();

  const expectedResult = new List();
  const result = mergeTwoLists(list1, list2);
  expect(result).toEqual(expectedResult);
});

test("merge the value from one list when the other is empty", () => {
  const list1 = new List();
  const list2 = new List([0, 3]);

  const expectedResult = new List([0, 3]);
  const result = mergeTwoLists(list1, list2);
  expect(result).toEqual(expectedResult);
});
