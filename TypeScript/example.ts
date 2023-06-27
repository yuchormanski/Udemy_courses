//задава се типа на функцията. Ако връща нещо , се изписва типа на резултата. В противен случай се изписва void
function addShipping(price: number, shipping: number): number {
  return price + shipping;
}

addShipping(10, 5);
