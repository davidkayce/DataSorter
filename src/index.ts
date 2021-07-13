import { LinkedList, NumericCollection, StringCollection } from "./DataCollections";
import { Sorter } from "./Sorter";

const numberSorter = (numberArray: number[]): Sorter => new Sorter(new NumericCollection(numberArray));
const textSorter = (sortable: string): Sorter => new Sorter(new StringCollection(sortable));

console.dir({
  number: numberSorter([2, 45, 34, 21, 45, 1, 45, 2, 2.45, -1.003]).sort(),
  text: textSorter("David").sort(),
});
