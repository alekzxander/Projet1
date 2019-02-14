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

// while (counter < 5) {
//     counter++;
//     console.log(coucou('Tristan'), counter + ' fois !!')
// }
// for (let i = 0; i < table.length; i++) {
//     console.log(coucou(table[i]), i + ' fois !!')
// }
objectTable.forEach(function (obj) {
    console.log(coucou(obj.old))
})

