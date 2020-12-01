interface IEmployee {
    name: string;
    age: number;
    position: 'Programmer' | 'Accountant' | 'Designer';
}

function filterBy(input: Object[], propName: string, propValue: any):  {
    return input.filter(item => item[propName] === propValue);
}

const employees: IEmployee[] = [
    { name: 'Mikle', age: 20, position: 'Programmer' },
    { name: 'Jordan', age: 25, position: 'Designer' },
    { name: 'Stive', age: 34, position: 'Accountant' },
    { name: 'Tom', age: 19, position: 'Programmer'},
    { name: 'Bob', age: 43, position: 'Programmer'},
    { name: 'Mikle', age: 19, position: 'Programmer'},
    { name: 'Bob', age: 27, position: 'Designer'},
]


// filterBy(employees, 'position', 'Programmer'); // вернёт IEmployee[]
// filterBy(employees, 'surname', 'Cook'); // ошибка, тип IEmployee не содержит поле 'surname'
// filterBy(employees, 'position', 'Tester'); // ошибка, поле 'position' не может содер

console.log(filterBy<string>(employees, 'position', 'Programmer'))
console.log(filterBy(employees, 'surname', 'Cook'))
console.log(filterBy(employees, 'position', 'Tester'))

