class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let head;

  if (list1.val < list2.val) {
    head = new ListNode(list1.val, null);
    list1 = list1.next;
  } else {
    head = new ListNode(list2.val, null);
    list2 = list2.next;
  }

  let current = head;

  while (list1 || list2) {
    if (!list1) {
      current.next = list2;
      return head;
    }

    if (!list2) {
      current.next = list1;
      return head;
    }
    if (list1.val < list2.val) {
      current.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      current.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }

    current = current.next;
  }

  return head;
};

function toArray(list) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
}

function fromArray(arr) {
  let head = new ListNode(arr.shift(), null);
  let current = head;

  for (let num of arr) {
    current.next = new ListNode(num, null);
    current = current.next;
  }

  return head;
}

module.exports = { mergeTwoLists, toArray, fromArray, ListNode };
