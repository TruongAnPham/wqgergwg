// const subject = [
//     {
//         "name": "math",
//         "difficulty": "10",
//         "like?": "No"
//     },
//     {
//         "name": "history",
//         "difficulty": "5",
//         "like?": "yes"
//     },
//     {
//         "name": "litureature",
//         "difficulty": "9",
//         "like?": "kindof"
//     },
//     {
//         "name": "english",
//         "difficulty": "11",
//         "like?": "yes"
//     },
// ]
// const difficulty = subject.map((item) => item.difficulty);
// console.log(difficulty);

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

// const portfolio = [
//     {thing: "Can do Code", usable: "10/10"},
//     {thing: "Creativity", usable: "11/10"},
//     {thing: "English", usable: "10/10"},
// ];
// const things =(data) => {
//     return data.reduce((obj, item) => {
//         obj[item.usable] = {thing: item.usable};
//         return obj;
//     }, {})
// };
// const thingss = things(portfolio);
// console.log(thingss);

const maythangnamkicho =[
    {namki:"maythangchopbvm", tacdung: "deotacdung"},
    {namki:"maythangbingong", tacdung: "giongnhuconcac"},
    {namki:"maythangantienmy", tacdung: "deobietdilam"},
];

const memaybeo = (data) => {
    return data.reduce((obj, item) =>{
        obj[item.tacdung] = {namki: item.tacdung};
        return obj;
    }, {})
};

const ghira = memaybeo(maythangnamkicho);
console.log(ghira);