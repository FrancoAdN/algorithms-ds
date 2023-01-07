/*
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.
  
  * Input: list1 = [1,2,4], list2 = [1,3,4]
  * Output: [1,1,2,3,4,4]
*/

const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

function mergeTwoLists(list1, list2) {
  const resultList = new List();
  let headL1 = list1.head;
  let headL2 = list2.head;

  while (headL1 || headL2) {
    if (headL1 && headL2) {
      if (headL1.data < headL2.data) {
        resultList.insertLast(headL1.data);
        headL1 = headL1.next;
      } else {
        resultList.insertLast(headL2.data);
        headL2 = headL2.next;
      }
    } else if (headL1) {
      resultList.insertLast(headL1.data);
      headL1 = headL1.next;
    } else {
      resultList.insertLast(headL2.data);
      headL2 = headL2.next;
    }
  }
  return resultList;
}

module.exports = mergeTwoLists;
