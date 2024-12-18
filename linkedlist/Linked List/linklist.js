//Linked-List in JS....

class Node 
{
    constructor(data) 
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList 
{
    constructor() 
    {
        this.head = null;
    }

    //Insertion at starting.....
    insertAtStart(data) 
    {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    //Insertion at ending....
    insertAtEnd(data) 
    {
        const newNode = new Node(data);
        if (this.head === null) 
        {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null)
        {
            current = current.next;
        }
        current.next = newNode;
    }


    //Deleting from start....
    deleteFromStart() 
    {
        if (this.head === null) 
        {
            console.log("List is empty. Nothing to delete.");
            return;
        }
        this.head = this.head.next;
    }


    //Deleting from ending.... 
    deleteFromEnd() 
    {
        if (this.head === null) 
        {
            console.log("List is empty. Nothing to delete.");
            return;
        }

        if (this.head.next === null) 
        {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) 
        {
            current = current.next;
        }
        current.next = null;
    }


    //Display LinkedList....
    display() 
    {
        if (this.head === null) 
        { l .  p  
            console.log("List is empty.");
            return;
        }

        let current = this.head;
        let listElements = "";
        while (current !== null) 
        {
            listElements += current.data + " -> ";
            current = current.next;
        }
        console.log(listElements + "null");
    }


    //Reverse LinkedList....
    reverse() 
    {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) 
        {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}




const list = new LinkedList();
list.insertAtEnd(10);

list.insertAtStart(5);

console.log("Starting list:- ");
list.display();

list.deleteFromStart();
console.log("After deleting from start:- ");
list.display();

list.deleteFromEnd();
console.log("After deleting from end:- ");
list.display();

list.reverse();
console.log("Reversing list is:- ");
list.display();
