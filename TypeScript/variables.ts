//Primitive Types
// supported types: string, number, boolean, null, undefined
const myName: string = "";

//union type. It could be more than one type - 2, 3 ... . Better than 'any'
const myNewName: string | null | undefined = null;

//Complex Types
//Arrays
// automatically detect types
let items = [5, "10"];

//Objects
//----------------

//Interface
// interface is specific feature for creating types for objects

interface Account {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void; // can't add business logic to method. it will be done in objects
}

const account: Account = {
  name: "Luis",
  balance: 5,
};

let accountsType: {}[]; //TS ще разбере, че типа е масив от обекти
let accounts: Account[]; //TS ще разбере, че типа е масив от обекти от interface Account types

//Classes

class InvestmentAccounts implements Account {
  constructor(public name, public balance) {}

  private withdraw() {}
}
