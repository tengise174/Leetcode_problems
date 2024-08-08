// ==== Completed ==== //

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// Non-empty linked list
// two non-negative int (-1, 1.5)

const addTwoNumbers = (l1, l2) => {

    let p1 = l1,
        p2 = l2,
        num1 = 0,
        num2 = 0,
        carry = 0,
        solution = new ListNode(0),
        current = solution;

    while (p1 || p2) {

        num1 = (p1) ? p1.val : 0;
        num2 = (p2) ? p2.val : 0;

        if (num1 + num2 + carry > 9) {
            // do something
            current.next = new ListNode(num1 + num2 + carry - 10);
            current = current.next;
            carry = 1;
        } else {
            //do something else
            current.next = new ListNode(num1 + num2 + carry);
            current = current.next;
            carry = 0;
        }

        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;

    }

    if (carry) current.next = new ListNode(carry);

    return solution.next;
};