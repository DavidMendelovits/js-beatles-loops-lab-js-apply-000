function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(johnLennonFacts) {
  var johnLennonfax = [];
  let i = 0;
  while (i < johnLennonFacts.length) {
    johnLennonfax.push(`${johnLennonFacts[i]}!!!`);
    i++;
  }
  return johnLennonfax;
}

function iLoveTheBeatles(n) {
  let shoutIt = [];;
  do {
    shoutIt.push('I love the Beatles!');
  }
  while (n > 15);

  return shoutIt;
}
