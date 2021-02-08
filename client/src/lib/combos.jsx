const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

// map each letter to a card value
const cardValue = (c) => {
  let copy = Array.from(cards);
  copy.reverse();
  return copy.indexOf(c) + 2;
}

// make combos my mapping each card to each other card
const lines = cards.map((x,y,z) => {
  const lineArray = z.map(a => a + x);
  return lineArray;
});

const combos = lines.flat();

// correct ordering, add offsuit
const orderCombos = combos.map(x => {
  const matrix = x.split('').reduce((a,b) => {
    if (cardValue(a) > cardValue(b)) {
      return (a + b) + 'o';
    } else if (cardValue(b) > cardValue(a)) {
      return b + a;
    } else if (cardValue(a) === cardValue(b)) {
      return a + b;
    }
  }, '');

  return matrix;
});

// add suited combos
const range = orderCombos.map(y => {
  if (y.length < 3 && y.charAt(0) !== y.charAt(1)) {
    return y + 's';
  }
  return y;
});

export default range;
