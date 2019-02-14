// function coucou(guy) {
//     return `hello ${guy}`;
// };
const coucou = (guy) => {
    return `hello ${guy}`;
}
let counter = 5;
const table = ['Michel', 'Tristan', 'Alex', 'Oreo'];
const objectTable = [
    {
        name: 'Michel',
        old: 35,
        gender: 'Male'
    },
    {
        name: 'Tristant',
        old: 29,
        gender: 'Male'
    },
    {
        name: 'Tristant',
        old: 29,
        gender: 'Male'
    }
];

objectTable.forEach(function (obj) {
    console.log(coucou(obj.old))
})


const multiplicator = (number, multiple) => {
    return number * multiple;
};
