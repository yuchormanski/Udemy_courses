//Primitive Types
// supported types: string, number, boolean, null, undefined
var myName = "";
//union type. It could be more than one type - 2, 3 ... . Better than 'any'
var myNewName = null;
//Complex Types
//Arrays
// automatically detect types
var items = [5, "10"];
var account = {
    name: "Luis",
    balance: 5,
};
var accountsType; //TS ще разбере, че типа е масив от обекти
var accounts; //TS ще разбере, че типа е масив от обекти от interface Account types
//Classes
var InvestmentAccounts = /** @class */ (function () {
    function InvestmentAccounts(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccounts.prototype.withdraw = function () { };
    return InvestmentAccounts;
}());
