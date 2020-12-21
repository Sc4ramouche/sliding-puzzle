// Fisher-Yates shuffle algorithm
// learn more: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function shuffle2D(array) {
  const size = array.length;
  const shuffled = shuffle(array.flat());

  const res = [];

  for (let i = 0; i < size; i++) {
    res.push(shuffled.slice(i * size, (i + 1) * size));
  }

  return res;
}
