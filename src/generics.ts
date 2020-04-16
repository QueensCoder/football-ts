class ArrayOfAny<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAny(['a', 'b', 'c']);
// type inference and generics working together

// generics with functions

// syntax for using generics with let or const
const printAny = <T>(arr: T[]): void => {
  arr.forEach((elem) => {
    console.log(elem);
  });
};

function printAnything<T>(arr: T[]): void {
  arr.forEach((elem) => console.log(elem));
}

// constraints with generics

interface Printable {
  print(): void;
}

// ensures that print is avail on each elem inside of the array passed in
const printHouseOrCar = <T extends Printable>(arr: T[]): void => {
  arr.forEach((elem) => console.log(elem));
};

printHouseOrCar([1]); //errors out 1 does not have print method
printHouseOrCar([{ print: () => console.log('has print') }]); //statisfies interface
