// // ARROW FUNCTION
// const user1 = (name) => {
//     console.log(name);
// };
// user1("b");
// //ES6
// let user = "user";//khia bao bien
// const PI = 3.14;//khai bao hang
// const birthday = "...";

// console.log("a");

// let arr = [1,2,3];
// // const arr1 = arr.map((item) => item - 1); //map de tao ra ban sao, khong anh huong den mang cu
// // console.log(arr1);
// for (let arr = 0; arr < 3; arr++) {
//     console.log(arr + 2);
// }
// //filter: function search(tim kiem)

// // reduce; 

// BAI 1 DAY NAY BRO
const animal = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 500
    },
]

const weight = animal.map((item) => item.weight);
console.log(weight);

// const number = [1,2,3,4,5,6,7,8,9,10];
// const result = number.filter((checknum) => cfhecknum %2 ==0);
// console.log(result);

// const playerProfile = [
//     {name: "Ronaldo", team: "MU?"},
//     {name: "Messi", team: "Barca"},
//     {name: "Neymar", team: "PSG"},
// ];

// const result = (data) => {
//     return data.reduce((obj, item) => {
//         obj[item.name] = { team: item.team};
//         return obj;
//     }, {});
// };

// const result1 = result(playerProfile);
// console.log(result1);


//destructuring Object, array
// const { id, website, date} = Not
// console.log.
// const date { '2014', '17', '07'} = date
// const year = date[0]
// const month = date[1]
// const day = date[2]


//spread operator
//const tools = {'hammer', '...'}
//const othertools = {'...','...'}
// const alltools = tools.concat(othertools)
// console.log(alltools);
// const all tools = {...tools, ...othertools}
// console.log(alltool)

// function restTest(...args) {
//     console.log(arguments)
// }

// restTest(1,2,3,4,5,6);




