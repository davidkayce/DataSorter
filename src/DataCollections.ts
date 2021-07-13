
export class NumericCollection {
  constructor(
    public data: number[],
  ) { }

  get length(): number {
    return this.data.length;
  }

  public compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }

  public swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class StringCollection {
  constructor(
    public data: string,
  ) { }

  get length(): number {
    return this.data.length;
  }

  public compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  public swap(i: number, j: number): void {
    const characters = this.data.split("");
    const temp = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;
    this.data = characters.join("");
  }
}

// tslint:disable-next-line: max-classes-per-file
class LinkedListNode {
  public next: LinkedListNode | null = null;
  constructor(
    public data: number,
  ) { }
}

// tslint:disable-next-line: max-classes-per-file
export class LinkedList {
  public head: LinkedListNode | null = null;

  get length(): number {
    if (!this.head) { return 0; }

    let len = 1;
    let node = this.head;
    while (node.next) {
      len++;
      node = node.next;
    }

    return len;
  }

  public add(data: number): void {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head; // referencc to our head node
    while (tail.next) {
      tail = tail.next; // go through each till you reach the end(the one with no next)
    }
    tail.next = node;
  }

  public at(index: number): LinkedListNode { // function to return a node at an index
    if (!this.head) { throw new Error("Index out of bounds"); }

    let counter = 0;
    let node: LinkedListNode | null = this.head;
    while (node) {
      if (counter === index) { return node; }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  public compare(i: number, j: number): boolean {
    if (!this.head) { throw new Error("List is empty"); }
    return this.at(i).data > this.at(j).data;
  }

  public swap(i: number, j: number): void {
    const leftNode = this.at(i);
    const rightNode = this.at(j);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  public print(): void {
    if (!this.head) { return; }

    let node: LinkedListNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
