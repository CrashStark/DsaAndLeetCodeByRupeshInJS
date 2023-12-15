class List {
  constructor(VALUE) {
    this.head = {
      value: VALUE,
      next: null,
    };

      this.tail = this.head;
      console.log(this.tail);

  }
  appendNode(node) {
    let newNod ={
        value:node,
        next:null
    };
    this.tail.next=newNod;
    this.tail=newNod;
  }
}

var ls=new List(10);

ls.appendNode(20);
console.log(ls);
ls.appendNode(30);
console.log(ls.toString());
ls.appendNode(40);
console.log(ls.toString());
