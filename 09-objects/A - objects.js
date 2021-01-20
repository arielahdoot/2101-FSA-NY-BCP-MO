let pusheen = {
    firstName: 'Pusheen',
    lastName: 'the cat',
    age: 7,
    color: "gray and tabby",
    siblings: {
      sister: 'Stormy',
      brother: 'Pip'
    },
    getFullName: function () {
      return `${this.firstName} ${this.lastName}` 
    },
    sayHi: function (friendName) {
      return `${this.firstName} ${this.lastName} says Hi to ${friendName}`;
    },
    sayHiObj: function (friend) {
      console.log('this.friend', this.friend); // dont do this
      console.log('this', this)
  
      return `${this.getFullName()} says Hi to ${friend.name}`
    },
    // testing: this.age + 1 // don't do this
  } 
  
  console.log(pusheen['col' + 'or']); // actually what is executed: pusheen['color']
  console.log(pusheen.color);
  console.log(pusheen.HasToBeTheExactNameOfKey)
  console.log(pusheen.age++)// equal to pusheen.age += 1. Also be written as pusheen.age = pusheen.age + 1
  
  for (let prop in pusheen) { // do this
    console.log("Pusheen's", prop, 'is', pusheen[prop]); // pusheen[key] is actually pusheen['name']...pusheen['age']...
  }
  
  // for (let key in pusheen) { // dont do this. this assumes there there exists a key named 'key' in pusheen object. There isnt one
  //   console.log("Pusheen's", key, 'is', pusheen['key']);
  // }
  
  console.log('----------------')
  
  // really comes in handy with react
  // console.log(Object.keys(pusheen)); // Object.keys(nameOfObject)
  // console.log(Object.values(pusheen));
  // console.log(Object.entries(pusheen));
  // var entries = Object.entries(pusheen);
  // console.log(Object.fromEntries(entries));
  // console.log(pusheen.siblings);
  // console.log(pusheen.siblings['sister']);
  // console.log(pusheen['siblings']['sister']);
  
  // console.log(pusheen.firstName, pusheen.lastName); // full name
  // console.log(pusheen.getFullName());
  console.log(pusheen.sayHi('Fullstack'));
  var friend = { // named object
    name: 'Fullstack'
  }
  console.log(pusheen.sayHiObj({name:'Fullstack'})); // passing anonymous object
  console.log(pusheen.sayHiObj(friend));