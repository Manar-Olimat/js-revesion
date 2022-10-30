//Write a function that takes a number as input and
//  returns true if the number is less than or equal to zero, otherwise return false.
function checkValue(variable) {
    if (variable <= 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkValue(0));
  
  //Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

  function nextInt(n) {
    return n + 1;
  }
  console.log(nextInt(2));
  
  //Write a function that takes an array of strings and returns only the strings with numbers in it as an array.
//    And return an empty array, If there are no strings containing numbers.

  function containsNum(array) {
    filterArr = array.filter((ele) => {
     
      if (/[0-9]/.test(ele)) {
        return true;
      }
    });
    return filterArr;
  }
  console.log(containsNum(["test1", "tes55t", "test", "22test"]));
  
  //Develop a JS Code to check if a number is even or odd using recursion
  function isEven(n) {
    if (n % 2 == 0) {
      return 'EVEN';
    } else{
      return 'Odd';
    }
   
  }
 
  
  console.log(isEven("1"));

  
  //Write a function to swap all instances of string ch1 
//   with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

  function swap(string, char1, char2) {
    let edit = string.split("").map((ele) => {
      if (ele === char1) {
        return char2;
      } else if (ele === char2) {
        return char1;
      } else {
        return ele;
      }
    });
    return edit.join("");
  }
  
  console.log(swap("aaddeee", "e", "a"));

  
  // Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
  // Use forEach to  Return all the names in the previous array

  function arrName(array) {
    array.forEach((ele) => {
      console.log(ele);
    });
  }
  arrName(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);
  

//   Project an array of series into an array of {id, title} pairs using forEach()
//   A projection is a process of applying a function to an existing value to produce a new value.
  
  let newSeries = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
  
  function idAndTittle(array) {
    result = [];
    array.forEach((ele) => {
      result.push({ id: ele.id, title: ele.title });
    });
    return result;
  }
  
  console.log(idAndTittle(newSeries));
  
  // Use map() now to implement the same previous functionality
  function idAndTittleMap() {
    return newSeries.map((ele) => {
      return { id: ele.id, title: ele.title };
    });
  }
  
  console.log(idAndTittleMap());

  //Use filter() to return the series with a rating under 5 
  function getRating(array) {
    return array.filter((ele) => {
      return ele.rating < 5;
    });
  }
  console.log(getRating(newSeries));
  
  
  //Use reduce()  function to return the longest string in an array of strings.
  function longest(array) {
    return array.reduce((acc, curr) => {
      return acc.length > curr.length ? acc : curr;
    });
  }
  
  console.log(longest(["Java", "JavaScript", "Python", "C++", "PHP"]));
  
  //Create a function displayName that, given the pokemon data, below,
//    uses reduce to return an array containing the names of the characters.
  
  

  let pokemonData = [
    {
      game_index: 76,
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "blue",
        url: "https://pokeapi.co/api/v2/version/2/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version/3/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "gold",
        url: "https://pokeapi.co/api/v2/version/4/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "silver",
        url: "https://pokeapi.co/api/v2/version/5/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version/6/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/version/7/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version/9/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/",
      },
    },
  ];

  function displayName(array) {
    return array.reduce((acc, curr) => {
      return acc.concat(curr.name);
    }, []);
  }
  
  console.log(displayName(pokemonData));
  


  // output

  var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}

employee.sayHi()

// Hi Coach ! Rawan


var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}

employee.printInfo()

//Car owner? undefined


var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

employee.info.printAddress()

// nothing need console.log

