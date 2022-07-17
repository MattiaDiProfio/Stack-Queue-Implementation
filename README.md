## Table of contents

- [Overview](#Overview)
- [Analysis](#Analysis)
- [Resources](#Resources-&-References)
- [Author](#Author)

# Overview

- The following is an implementation from scratch of the Stack and Queue
  abstract data structures. 

- For the Stack implementation I decided to use an array, whereas for the 
  Queue I opted instead for a Doubly Linked List,
  motivation for this decision can be found in the analysis section.

# Analysis 

1. Stack 
    Since the Stack follows a FIFO principle, it is ideal to use an array 
    as the fundemental data structure as it takes constant time to add and 
    remove an item from the end of the array.

    addElement time complexity : O(1);
    removeElement time complexity : O(1);
    reverseOder time complexity : O(n);

2. Queue
    Since the Queue follows a LIFO principle, each time an item needs to be
    dequeued or enqueued at the beginning requires re-indexing of the whole
    array, an operation with O(n) time complexity.

    The solution I decided to implement uses the Doubly Linked List as the 
    fundamental data structure since addition and removal of a node from both
    beginning and end of the list requires O(1) time.

    Another advantage of using a Doubly Linked List instea of a Singly Linked List
    is that the user can decide if the queue goes from left to right or the opposite,
    since each node has both a "previous" and "next" pointer.
    
    A disadvantage of using a Doubly Linked List is that it requires more space in
    memory than an array due to each node having a value and two pointers.

# Resources & References

- https://www.youtube.com/watch?v=RN1wzY_tnYU (queue using Singly Linked List)

# Author
- LinkedIn - [Mattia Di Profio](linkedin.com/in/mattia-di-profio-69b4131b3)
