/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   if (head === null) {
       return head;
   }
    
    let h = new ListNode();
    let copy = h;
    
    while(head) {
        if (head.val !== val) {
            copy.next = new ListNode(head.val);
            copy = copy.next
        }
        
        head = head.next;
    }
    
    return h.next;
};