interface Sortable<T> {
  data: T;
  length: number;
  compare: (i: number, j: number) => boolean;
  swap: (i: number, j: number) => void;
}

interface Iterable {
  length: number;
}

export class Sorter <T extends Iterable> {
  constructor(
    public collection: Sortable<T>,
  ) { }

  public sort(): Iterable {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    return this.collection.data;
  }
}
