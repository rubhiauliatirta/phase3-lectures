

export default function groupAnimals(animals) {
  // you can only write your code here!

  //mengumpulkan kehadiran first letter pada array
  var arrayFirstLetter = [];
  var resultArray = [];
  for (let i = 0; i < animals.length; i++) {
    arrayFirstLetter.push(animals[i][0]);
  }

  //sorting dari a-z
  arrayFirstLetter.sort();

  var currentLetter = '';
  for (let i = 0; i < arrayFirstLetter.length; i++) {
    var animalsgroup = [];
    if (arrayFirstLetter[i] !== currentLetter) {
      currentLetter = arrayFirstLetter[i];
      for (let j = 0; j < animals.length; j++) {
        if (currentLetter === animals[j][0]) {
          animalsgroup.push(animals[j])
        }
      }
      resultArray.push(animalsgroup);
    }
  }
  return resultArray;
}