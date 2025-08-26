// [{ course: "Angular", votes: 3 }, { course: "React", votes: 2 }, { course: "Vue", votes: 1 }];
import React from 'react';

export default function App() {
    const [data, setData] = setState([{ course: "Angular", votes: 3 }, { course: "React", votes: 2 }, { course: "Vue", votes: 1 }])


    const getAllVotes = ()=>data.reduce((acc, item)=>{
return acc+item.votes
}, 0)

const handleClick = (courseName)=>{
    const newCources=data.map((item)=>{if(item.couse === courseName){return({couse: item.couse, votes:item.vote+1)}) 
        setData(newCources)
}
    


  return (<div>
<ul>
{
data?.map(
    (item, index)=><li key={index}><p>{item.course}</p><button onClick={()=>{handleClick(item.course)}}>{item.votes}</button></li>
)

}


</ul>

<div>{`all votes ${getAllVotes()}`}</div>

  </div>)
}


try {
    const prom = new Promise((resolve, reject)=>{setTimeout(() => {
        reject( new Error('Async error'))
      }, 1000))})

      await prom

  } catch (e) {
    console.log('Caught:', e);
  }



  // Исправьте типизацию функции `filterBy` таким образом, чтобы она:
// 1. первым аргументом принимала массив любых объектов;
// 2. вторым – имя поля, по которому производится фильтрация;
// 3. третьим – значение, которое должно содержать поле;
// 4. возвращала тип первого аргумента (исходного массива).

function filterBy(input: Object[], propName: string, propValue: any): Object[] {
  return input.filter((item) => item[propName] === propValue);
}

interface IEmployee {
  name: string;
  age: number;
  position: "Programmer" | "Accountant" | "Designer";
}

const employees: IEmployee[] = [
  { name: "Mikle", age: 20, position: "Programmer" },
  { name: "Jordan", age: 25, position: "Designer" },
  { name: "Stive", age: 34, position: "Accountant" },
  { name: "Tom", age: 19, position: "Programmer" },
  { name: "Bob", age: 43, position: "Programmer" },
  { name: "Mikle", age: 19, position: "Programmer" },
  { name: "Bob", age: 27, position: "Designer" },
];

console.log("filterBy", filterBy(employees, "position", "Programmer")); // вернёт IEmployee[]
filterBy(employees, "surname", "Cook"); // ошибка, тип IEmployee не содержит поле 'surname'
filterBy(employees, "position", "Tester"); // ошибка, поле 'position' не может содержать значение 'Tester',



// Написать функцию, которая принимает объект и на его основании строит query string
// Количество полей неограничено. Значения number | string

const input: Record<string, string | number> = {
  a: 1,
  b: "string",
};

const queryStringBuilder = (
  parameters: Record<string, string | number>
): string => {
  return "";
};

console.log("queryStringBuilder", queryStringBuilder(input)); // "?a=1&b=string"






