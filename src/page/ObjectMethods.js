let myObj = {
  name: "altaf",
  work: "developer",
  didi: {
    name: "kajol",
    age: 24,
    dob: "24/09/2022",
    didiFriends: ["sonu", "Dheeraj", "altaf", "loki", "varsha", "ajay"],
  },
  friends: "sonu monu tonu ",
  education: "BSC.CS",
  office: "Mirats Insights",
};
// console.log("my name --------->" + myObj[education]);
let keys = Object.keys(myObj);
console.log("keys--------> " + keys);
// let values = Object.values(myObj);
// console.log("values------> " + values);
// let entries = Object.entries(myObj);
// console.log("entries-----> " + entries);
// -----------------nasted --------------
// let keys2 = Object.keys(myObj.didi);
// console.log("keys2--------> " + keys2);
let values2 = Object.values(myObj.didi);

console.log("values2------> " + values2);
