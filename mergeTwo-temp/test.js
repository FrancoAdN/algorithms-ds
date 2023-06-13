const { fromArray, mergeTwoLists, toArray } = require("./index");
// const list = new ListNode(1, new ListNode(2, new ListNode(3)));
// console.log(toArray(list));
const list1 = fromArray([1, 2, 4]);
const list2 = fromArray([1, 3, 4]);
console.log(toArray(mergeTwoLists(list1, list2)));
