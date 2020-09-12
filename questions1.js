// -------------------- Q1 --------------------//
/**
 *  Create a function that takes a number num and returns its double factorial.
 * @param {Number} number
 * @returns {Number}
 *
 * @example doubleFactorial(2) -> 2
 * @example doubleFactorial(9) -> 945
 * @example doubleFactorial(6) -> 48
 *
 * @hints Double factorial is not the same as factorial * 2
 */
function doubleFactorial(num) {
  return num <= 0 ? 1 : num * doubleFactorial(num - 2);
}
//
function doubleFactorial2(number) {
  if (number == -1 || number === 0) {
    return 1;
  } else {
    return number * doubleFactorial(number - 2);
  }
}

//
//
//
//
//
//
// -------------------- Q2 --------------------
/**
 *  Create a function that takes a string and returns a JSON of it's words count
 * @param {String} str
 * @returns {Object}
 *
 * @example findWordsCount('hello, thats what he said hello') -> {a: 4, b:4, c: 6, x:2}
 */
function findwordsCount(str) {
  words = str.split(/[, ]+/); //regex to get the words
  resutls = {};
  for (let word of words) {
    if (!(word in resutls)) {
      resutls[word] = 1;
    } else {
      resutls[word] = resutls[word] + 1;
    }
  }
  return resutls;
}
//
function findwordsCount2(str) {
  let arr = {};
  str
    .replace(/[^\w\s]/gi, "")
    .split(" ")
    .forEach((word) => (arr[word] = isNaN(arr[word]) ? 1 : arr[word] + 1));
  return arr;
}
//
function findwordsCount3(str) {
  var arr = str.split();
  var wordCountsArray = arr.map(function (item) {
    var counter = 0;
    var itemCount = arr.reduce(function (prevVal, curVal) {
      if (curVal == item) {
        counter++;
      }
      return;
    }, 0);

    return item + ": " + counter;
  });

  return wordCountsArray;
}
//
//
//
//
//
//
// -------------------- Q3 --------------------
/**
 *  Create a function that takes an object and returns the keys and values as separate arrays.
 * @param {String} str
 * @returns {Object}
 *
 * @example keysAndValues({ a: 1, b: 2, c: 3 }) -> [["a", "b", "c"], [1, 2, 3]]
 */
function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map((key) => obj[key])];
}
//
function keysAndValues2(obj) {
  let keys = [];
  let values = [];
  for (const property in obj) {
    keys.push(property);
    values.push(obj[property]);
  }
  return [keys, values];
}
//
function keysAndValues3(obj) {
  return [Object.keys(obj), Object.values(obj)];
}

//
//
//
//
//
//
// -------------------- Q4 --------------------
/**
 *  You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
 * If you can't find Nemo, return "I can't find Nemo :(".
 * @param {String} str
 * @returns {String}
 *
 * @example findNemo("I am finding Nemo !") -> "I found Nemo at 4!"
 */
function findNemo(str) {
  const index = str.split(" ").findIndex((e) => e === "Nemo");
  return index > -1 ? `I found Nemo at ${index + 1}!` : "I can't find Nemo :(";
}
//
function findNemo2(str) {
  if (str.includes("Nemo")) {
    let arr = str.split(" ");
    let i = arr.indexOf("Nemo");
    return `I found Nemo at ${i + 1}!`;
  } else return "I can't find Nemo :(";
}
//
function findNemo3(str) {
  words = str.split(/[, ]+/);
  results = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toUpperCase() == "NEMO") {
      results.push(i);
    }
  }
  return "I found Nemo at " + results + " !";
}
//
function findNemo4(str) {
  let f = 0;
  var res = str.split(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i] == "Nemo") {
      f = 1;
      let nemo = i + 1;
      return `I found Nemo at ${nemo}`;
    }
  }
  if (f == 0) {
    return "I can't find Nemo :(";
  }
}
//
//
//
//
//
//
// -------------------- Q5 --------------------
/**
 *  Create a function that takes two numbers and a mathematical operator (+ - / *) and will perform a calculation with the given numbers.
 * @param {Number} num1
 * @param {String} op
 * @param {Number} num1
 * @returns {Number}
 *
 * @example calculator(4, "/", 2) -> 2
 * @example calculator(2, "*", 2) -> 4
 */
function calculator(num1, op, num2) {
  return {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num2 ? num1 / num2 : "Cannot divide by 0!",
  }[op];
}
//
function calculator2(num1, op, num2) {
  return eval(`${num1}${op}${num2}`);
}
//
function calculator3(num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
    default:
      "somthing wrong";
  }
}
//
function calculator4(num1, op, num2) {
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num1 / num2;
  }
  return result;
}
//
//
//
//
//
//
// -------------------- Q6 --------------------
/**
 *  An array is special, if every even index contains an even number and every odd index contains an odd number.
 * Create a function that returns true if an array is special, and false otherwise.
 * @param {Object} arr
 * @returns {Boolean}
 *
 * @example isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) -> true
 * @example isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) -> false
 */

function isSpecialArray2(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] % 2 !== 0) return false;
    } else if (arr[i] % 2 === 0) return false;
  }
  return true;
}
//
function isSpecialArray3(arr) {
  var bool = "true";
  for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && arr[i] % 2 === 0) {
      bool = "false";
    } else if (i % 2 === 0 && arr[i] % 2 !== 0) {
      bool = "false";
    }
  }
  return bool;
}
//
function isSpecialArray4(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2) && !(i % 2)) {
      continue;
    } else if (arr[i] % 2 && i % 2) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
//
const isSpecialArray = (a) => a.every((v, i) => v % 2 == i % 2);

//
//
//
//
//
//
// -------------------- Q7 --------------------
/**
 *  Add a property to an array inside a test function. the property should returns the max number
 * @param {Object} arr
 * @returns {Number}
 *
 * @example maxByProperty([2, 7, 4, 9, 6, 1, 6, 3]) -> 9
 */
function maxByProperty(arr) {
  arr.max = () => Math.max(...arr);
  return arr.max();
}
//
function maxByProperty2(arr) {
  arr.max = () => arr.reduce((a, b) => Math.max(a, b));
  return arr.max();
}
//
function maxByProperty3(arr) {
  let myMax = function () {
    let m = this[0];
    for (let i = 0; i < this.length; i++) {
      if (m < this[i]) {
        m = this[i];
      }
    }
    return m;
  };
  arr.max = myMax;
  return arr.max();
}
//
function maxByProperty(arr) {
  Array.prototype.test = function () {
    // this one will be applied for all arrays
    return this.sort((a, b) => a - b)[this.length - 1];
  };
  return arr.test();
}

//
//
//
//
//
//
// -------------------- Q8 --------------------
/**
 *  Add a property function to a number that takes another number and returns true if the secont number is a number of number1 power
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Boolean}
 *
 * @example isPowByProperty(2, 256) -> true
 * @example isPowByProperty(3, 9) -> true
 * @example isPowByProperty(3, 6) -> false
 */
function isPowByProperty(num1, num2) {
  Number.prototype.isPow = function (num) {
    return (
      Math.pow(Math.round(Math.log(num) / Math.log(this.valueOf()))) == num
    );
  };
  return num1.isPow(num2);
}
//
function isPowByProperty2(num1, num2) {
  while (num1 < num2) num1 = Math.pow(num1, 2); // Will take time + it's big O 1^n
  return num1 == num2 ? true : false;
}
//
function isPowByProperty3(num1, num2) {
  return num1 ** Math.sqrt(num2) % 1 == 0;
}
//
function isPowByProperty4(num1, num2) {
  Number.prototype.power = function (num2) {
    booleanResult = Number.isInteger(
      Math.log10(num2) / Math.log10(this.valueOf())
    );
    return booleanResult;
  };
  return num1.power(num2);
}

//
//
//
//
//
//
// -------------------- Q9 --------------------
/**
 *  Create a function that takes an array of numbers and return true if the number 7 appears in the array. Otherwise, return false.
 * @param {Object} arr
 * @returns {Boolean}
 *
 * @example isthereSeven([1, 2, 3, 4, 5, 6, 17]) -> true
 * @example isthereSeven([8, 6, 33, 100]) -> false
 * @example isthereSeven([2, 55, 60, 97, 86]) -> true
 * @example isthereSeven([1, 2, 3, 4, 5, 6, 7]) -> true
 */
function isthereSeven(arr) {
  return arr.join("").indexOf("7") >= 0;
}
//
function isthereSeven2(arr) {
  for (var number of arr) {
    if (number.toString().split("").includes("7")) return true;
  }
  return false;
}
//
function isthereSeven3(arr) {
  var temp = false;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    while (element >= 0) {
      var x = element % 10;
      element = number.toFixed(element / 10);
      if (element === 7) {
        temp = true;
      }
    }
  }
  return temp;
}
//
//
//
//
//
// -------------------- Q10 --------------------
/**
 *  Write a function that takes the day name such as 'Sunday' and takes a number. and the function should return what day will be after that number of days
 * @param {String} day
 * @param {Number} after
 * @returns {String}
 *
 * @example whatDay('Sunday', 2) -> Tuesday
 * @example whatDay('Sunday', 7) -> Sunday
 * @example whatDay('Mon', 12) -> Saturday
 */
function whatDay(day, after) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let num = days.indexOf(day);
  return days[num + (after % 7)];
}
//
function whatDay2(day, after) {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ];
  let d = day.toLowerCase(),
    num = after >= 7 ? after - 7 : after;
  reqDay = days.indexOf(d) + num;
  dayCapitalized = days[reqDay].charAt(0).toUpperCase() + days[reqDay].slice(1);

  return dayCapitalized;
}
//
function whatDay3(day, after) {
  var temp = 0;
  var arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (var i = 0; i < arr.length; i++) {
    if (day == arr[i]) temp = i;
  }
  let temp1 = temp + (after % 7);
  if (temp1 > 6) temp1 = temp1 - 7;
  var x = arr[temp1];
  return x;
}
//
function whatDay4(day, after) {
  let week = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  if (after >= week.length) return whatDay(day, after - week.length);
  // recursion
  else return week[after];
}
//
function whatDay5(day, after) {
  switch (day) {
    case "Sunday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 0:
          return "sunday";
          break;
        case 1:
          return "monday";
          break;
        case 2:
          return "tuesday";
          break;
        case 3:
          return "wednesday";
          break;
        case 4:
          return "thursday";
          break;
        case 5:
          return "friday";
          break;
        case 6:
          return "saturday";
          break;
      }
      break;
    }
    case "Monday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 6:
          return "sunday";
          break;
        case 0:
          return "monday";
          break;
        case 1:
          return "tuesday";
          break;
        case 2:
          return "wednesday";
          break;
        case 3:
          return "thursday";
          break;
        case 4:
          return "friday";
          break;
        case 5:
          return "saturday";
          break;
      }
      break;
    }
    case "Tuesday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 5:
          return "sunday";
          break;
        case 6:
          return "monday";
          break;
        case 0:
          return "tuesday";
          break;
        case 1:
          return "wednesday";
          break;
        case 2:
          return "thursday";
          break;
        case 3:
          return "friday";
          break;
        case 4:
          return "saturday";
          break;
      }
      break;
    }
    case "Wednesday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 4:
          return "sunday";
          break;
        case 5:
          return "monday";
          break;
        case 6:
          return "tuesday";
          break;
        case 0:
          return "wednesday";
          break;
        case 1:
          return "thursday";
          break;
        case 2:
          return "friday";
          break;
        case 3:
          return "saturday";
          break;
      }
      break;
    }
    case "Thursday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 3:
          return "sunday";
          break;
        case 4:
          return "monday";
          break;
        case 5:
          return "tuesday";
          break;
        case 6:
          return "wednesday";
          break;
        case 0:
          return "thursday";
          break;
        case 1:
          return "friday";
          break;
        case 2:
          return "saturday";
          break;
      }
      break;
    }

    case "Friday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 2:
          return "sunday";
          break;
        case 3:
          return "monday";
          break;
        case 4:
          return "tuesday";
          break;
        case 5:
          return "wednesday";
          break;
        case 6:
          return "thursday";
          break;
        case 0:
          return "friday";
          break;
        case 1:
          return "saturday";
          break;
      }
      break;
    }
    case "Saturday": {
      while (after >= 7) {
        after -= 7;
      }
      switch (after) {
        case 1:
          return "sunday";
          break;
        case 2:
          return "monday";
          break;
        case 3:
          return "tuesday";
          break;
        case 4:
          return "wednesday";
          break;
        case 5:
          return "thursday";
          break;
        case 6:
          return "friday";
          break;
        case 0:
          return "saturday";
          break;
      }
      break;
    }
  }
}
//
//
//
//
//
//
//
// -------------------- Q11 --------------------
/**
 *  Create a function that takes an array of string and returns a number consist of only the numbers inside the strings
 * @param {Object} arr
 * @returns {String}
 *
 * @example numInStr(["abc", "ab10c", "a10bc", "bcd"]) -> '1010'
 * @example numInStr(["this is a test", "test1", "test2", "2"]) -> '122'
 */
function numInStr(arr) {
  return arr.join("").match(/\d+/g).join(""); // from google using regex
}
//
function numInStr2(arr) {
  let str = JSON.stringify(arr);
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str.charAt(i)) && str.charAt(i) !== " ") {
      newStr.push(str.charAt(i));
    }
  }
  let res = newStr.join("");
  return res;
}
//
function numInStr3(arr) {
  let arr2 = [...arr.toString()],
    numbers = "0123456789";
  num = "";
  arr2.forEach((char) => {
    if (numbers.includes(char)) {
      num += char;
    } else {
      num = num;
    }
  });
  return num;
}
//
function numInStr4(arr) {
  var x = arr[1];
  var str = "";
  for (var i = 0; i < x.length; i++) {
    if (x[i] >= 0 && x[i] <= 9) str = str + x[i];
  }
  return str;
}
//
//
//
//
//
//
// -------------------- Q12 --------------------
/**
 *  Write a function that tell me what is the type of it's only parameter
 * @param {*} parameter
 * @returns {String}
 *
 * @example whatIsThis([1, 2, 3, 4]) -> 'Array'
 * @example numInStr({a: 1, b: 2, c: 3}) -> 'Object'
 * @example numInStr("Hello !") -> 'String'
 * @example numInStr() -> 'undefind'
 */
function whatIsThis(parameter) {
  if (Array.isArray(parameter)) {
    return "Array";
  }
  return typeof parameter;
}
//
function whatIsThis2(parameter) {
  return Array.isArray(parameter) ? "Array" : typeof parameter;
}
//
//
//
//
//
//
// -------------------- Q13 --------------------
/**
 *  Write a function that takes a JSON and converts every null to an empty string
 * @param {Object} obj
 * @returns {Object}
 *
 * @example ridOfNulls({name: 'Ali', age: null}) -> {name: 'Ali', age:''}
 * @example ridOfNulls({name: 'Ali', age: 20, address: {street: '14', coordinates: {long: null, lat: null}}}) -> {name: 'Ali', age:'', address: {street: '14', coordinates: {long: "", lat:""}}}
 */

function ridOfNulls(obj) {
  for (item in obj) {
    if (obj[item] === null) obj[item] = "";
    if (typeof obj[item] == "object") obj[item] = getRidFromNulls(obj[item]);
  }
  return data;
}
//
function ridOfNulls2(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      obj[key] = "";
    } else if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
      obj[key] = ridOfNulls(obj[key]);
    }
  });
  return obj;
}
//
function ridOfNulls3(obj) {
  obj = JSON.parse(JSON.stringify(obj).replace(/\:null/gi, ':""')); // changed it to string and replace null with ""
  return obj;
}

//
//
//
//
//
//
// -------------------- Q14 --------------------
/**
 *  Write a function that takes a String descripe files in your computer and returns the calculation of each type of files
 * 
 * @param {String} files
 * @returns {String}
 *
 * @example filesDescription(`My.song.mp3 11b
                              greatSong.flac 1000b
                              not3.txt 5b
                              video.mp4 200b
                              game.exe 100b
                              mov!e.mkv 10000b`) -> 
 *`music 1011b
 * images 0b
 * movies 10200b
 * other 105b`
 */

function filesDescription(files) {
  let musics = 0;
  let images = 0;
  let movies = 0;
  let others = 0;
  const lines = files.split("\n");
  lines.forEach((line) => {
    const file = line.split(" ");
    if (/\.(mp3|flac|aac)$/.test(file[0])) {
      musics += parseInt(file[1]);
    } else if (/\.(jpg|bmp|gif)$/.test(file[0])) {
      images += parseInt(file[1]);
    } else if (/\.(mp4|mkv|avi)$/.test(file[0])) {
      movies += parseInt(file[1]);
    } else {
      others += parseInt(file[1]);
    }
  });

  return `
  music ${musics}
  images ${images}
  movies ${movies}
  others ${others}
  `;
}
//

function filesDescription2(str) {
  let m = 0;
  let v = 0;
  let p = 0;
  let o = 0;
  var firstLine = str.split("\n");
  firstLine.forEach((x) => {
    if (
      x.split(".").pop().split(" ")[0] == "mp3" ||
      x.split(".").pop().split(" ")[0] == "aac" ||
      x.split(".").pop().split(" ")[0] == "flac"
    )
      m += parseInt(x.split(".").pop().split(" ").pop().slice(0, -1));
    else if (
      x.split(".").pop().split(" ")[0] == "jpg" ||
      x.split(".").pop().split(" ")[0] == "bmp" ||
      x.split(".").pop().split(" ")[0] == "gif"
    )
      p += parseInt(x.split(".").pop().split(" ").pop().slice(0, -1));
    else if (
      x.split(".").pop().split(" ")[0] == "mp4" ||
      x.split(".").pop().split(" ")[0] == "avi" ||
      x.split(".").pop().split(" ")[0] == "mkv"
    )
      v += parseInt(x.split(".").pop().split(" ").pop().slice(0, -1));
    else o += parseInt(x.split(".").pop().split(" ").pop().slice(0, -1));
  });

  let result = music`${m}b \nimages ${p}b \nmovies ${v}b \nother ${o}b`;

  return result;
}
//
function filesDescription3(str) {
  let arr = str.split("\n");
  let musicReg = /mp3|flac/;
  let moviesReg = /mkv|mp4/;
  let imagesReg = /jpg|png/;

  let music = arr.filter((a) => musicReg.test(a));
  let movies = arr.filter((a) => moviesReg.test(a));
  let images = arr.filter((a) => imagesReg.test(a));
  let others = arr.filter(
    (a) => !musicReg.test(a) && !moviesReg.test(a) && !imagesReg.test(a)
  );
  const DigitFilter = /[0-9]+\d/g;
  let musicSum = music.length
    ? music.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let moviesSum = movies.length
    ? movies.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let imagSum = images.length
    ? images.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let otherSum = others.length
    ? others.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;

  return `music ${musicSum}b
    images ${imagSum}b
    movies ${moviesSum}b
    other ${otherSum}b
    `;
}
//
//
//
function filesDescription4(str) {
  let temp = {};
  str.split("\n").forEach((e) => {
    if (e.split(" ")[0].includes("mp3") || e.split(" ")[0].includes("flac")) {
      temp["music"] = isNaN(temp["music"])
        ? e.split(" ")[1].replace("b", "")
        : parseInt(temp["music"]) +
          parseInt(e.split(" ")[1].replace("b", "")) +
          "b";
    } else if (
      e.split(" ")[0].includes("mp4") ||
      e.split(" ")[0].includes("mkv")
    ) {
      temp["movies"] = isNaN(temp["movies"])
        ? e.split(" ")[1].replace("b", "")
        : parseInt(temp["movies"]) +
          parseInt(e.split(" ")[1].replace("b", "")) +
          "b";
    } else if (
      e.split(" ")[0].includes("jpg") ||
      e.split(" ")[0].includes("png")
    ) {
      temp["images"] = isNaN(temp["images"])
        ? e.split(" ")[1].replace("b", "")
        : parseInt(temp["images"]) +
          parseInt(e.split(" ")[1].replace("b", "")) +
          "b";
    } else {
      temp["others"] = isNaN(temp["others"])
        ? e.split(" ")[1].replace("b", "")
        : parseInt(temp["others"]) +
          parseInt(e.split(" ")[1].replace("b", "")) +
          "b";
    }
  });
  return temp;
}
//
//
//
//
//
//
// -------------------- Q15 --------------------
/**
 * What is the wrong with this function
 * Please commit the lines that making the error and place them with the right ones
 *
 */
function run() {
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar);
  {
    // let baz = "Bazz";
    var baz = "Bazz";
    console.log(baz);
  }
  console.log(baz);
}
// let to var
//
//
//
//
//
//
// -------------------- Q16 --------------------
/**
 *  Create a binary search function that takes an array and targed element and returns the index of the element
 * @param {Object} arr
 * @returns {Number} x
 *
 * @example findByBinary([1, 2, 3, 4, 5, 6, 29, 55, 74, 93], 29) -> 6
 */
function findByBinary(parameter, num) {
  let l = -1,
    r = parameter.length,
    i;
  i = Math.floor((r + l) / 2);
  console.log(i);
  while (r + l !== 0) {
    if (num > parameter[i]) l = i;
    else if (num < parameter[i]) r = i;
    else if (num == parameter[i]) return i;
    i = Math.floor((r + l) / 2);
  }
}
//
//
//
//
//
//
// -------------------- Q17 --------------------
/**
 *  Add properties to an array to make it like a queueu (add queue and dequeue)
 * @example
 *  let arr = [];
 *  arr.queue(4) -> [4]
 *  arr.queue(3) -> [4, 3]
 *  arr.queue(12) -> [4, 3, 12]
 *  arr.dequeue() -> [3, 12]
 */
function makeQueue() {
  let arr = [];
  Array.prototype.queue = function (num) {
    this.unshift(num);
  };
  Array.prototype.dequeue = function () {
    this.shift();
  };
  arr.queue(4);
  arr.queue(3);
  arr.queue(12);
  arr.dequeue();
  console.log(arr);
}
//
//
//
//
//
//
// -------------------- Q18 --------------------
/**
 *  Create your own split function that works just like the split property
 * @param {String} str
 * @returns {String} op
 *
 * @example mySplit("Hi there, how are you", " ") -> ["Hi", "there,", "how", "are", "you"]
 * @example mySplit("Hi there, how are you",  ",") -> ["Hi there", "how are you"]
 *
 */
function mySplit(str, op) {
  let output = [];
  let t = "";
  for (const l of str) {
    if (l == op) {
      output.push(t);
      t = "";
    } else t = t + l;
  }
  output.push(t);
  return output;
}
//
function mySplit2(str, op) {
  let arr = [],
    i = 0,
    j = 0;
  for (i = 0; i <= str.length; i++) {
    if (str[i] == op) {
      arr.push(str.slice(j, i));
      j = i + 1;
    }
  }
  arr.push(str.slice(j));
  return arr;
}
//
function mySplit3(str, op) {
  var stringArray = [""];
  var j = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == op) {
      j++;
      stringArray.push("");
    } else {
      stringArray[j] += str.charAt(i);
    }
  }
  return stringArray;
}
//
function mySplit4(str, op) {
  let arr = [];
  let startIndex,
    endIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === op) {
      endIndex = i;
      let word = str.substring(startIndex, endIndex++);
      arr.push(word);
      startIndex = endIndex;
    }
  }
  arr.push(str.substring(startIndex, str.length));
  return arr;
}
//
//
//
//
//
//
// -------------------- Q19 --------------------
/**
 *  Write a function that takes a string str of letters 'L' and 'R', denoting the types of shoes in the line (left or right), returns the maximum number of intervals such that each interval contains an equal number of left and right shoes.
 * @param {String} str
 * @returns {String}
 * For example, given str="RLRRLLRLRRLL" the function should return 4, because str can be split into intervals: "RL", "RRLL", "RL", and "RRLL".
 * Givrn str="RLLRRRRLLRLL" the function should return 3, because str can be split into intervals: "RL", "LR", and "RRRLLRLL".
 * Note that the 'R' count and the 'L' count are always the same.
 */
function pileOfShoes(str) {
  // write your code in JavaScript (Node.js 8.9.4)
  let rightCount = 0;
  let leftCount = 0;
  let totalCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") rightCount++;
    if (str[i] == "L") leftCount++;
    if (rightCount === leftCount && rightCount != 0) {
      totalCount++;
      rightCount = 0;
      leftCount = 0;
    }
  }
  return totalCount;
}
//
function pileOfShoes2(str) {
  let rOnes = 0;
  let lOnes = 0;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      rOnes = rOnes + 1;
    } else {
      lOnes = lOnes + 1;
    }
    if (lOnes == rOnes) {
      endIndex = i;
      console.log(str.substring(startIndex, ++endIndex));
      startIndex = endIndex;
      lOnes = 0;
      rOnes = 0;
    }
  }
}
