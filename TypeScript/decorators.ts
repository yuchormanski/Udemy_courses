//Decorators are functions for extending business logic or adding metadata

//decorator function  записват се с @

//hardcoded id
function MenuItem(value) {
  return class extends value {
    id = "abc";
  };
}

@MenuItem
class Pizza {
  id: string;
}

class Hamburger {
  id: string;
}

console.log(new Pizza().id);

//closure
function MenuItem2(itemId: string) {
  return function (value) {
    return class extends value {
      id = itemId;
    };
  };
}

@MenuItem2("abc")
class Pizza2 {
  id: string;
}

@MenuItem2("xyz")
class Hamburger2 {
  id: string;
}

console.log(new Pizza2().id);
