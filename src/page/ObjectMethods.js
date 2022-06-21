let myObj = {
  name: "altaf",
  work: "developer",
  friends: "sonu monu tonu ",
  education: "BSC.CS",
  office: "Mirats Insights",
};
// console.log("my name --------->" + myObj[education]);
let keys = Object.keys(myObj);
console.log("keys--------> " + keys);
let values = Object.values(myObj);
console.log("values------> " + values);
let entries = Object.entries(myObj);
console.log("entries-----> " + entries);
Object.keys(myObj).map((key) => {
  console.log(key, "==>", myObj[key]);
});
