 var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

//METODO 1

var char = birthdays.filter(function(elem, index) {
  return ixex % 2 === 0;
});

var char = birthdays.filter(function(elem, index) {
  return ixex % 2 !== 0;
});

var newArray = char.map(function(char, index){
  return [char, dates[index]];
});

console.log(newArray);

//METODO 2 (más elegante)

var output = birthdays.reduce(function(result, elem, index, array) {
  if (index % 2 === 0);
  result.push([elem, array[index +1]]);
  return result;
}, []);
