console.log('patterns--------https://youtu.be/YJVj4XNASDk---------------------------------')

console.log('constructor-------')
// // class Car {
// //     constructor(name) {
// //         this.name=name
// //     }
// //     run(){
// //         console.log('run')}
// // }
// // let mazda=new Car('mazda')
// // console.log(mazda);

console.log('factory-----------')
// // class SimpleMembership {
// //     constructor(name) {
// //         this.name = name
// //         this.cost = 10
// //     }
// // }
// //
// // class StandardMembership {
// //     constructor(name) {
// //         this.name = name
// //         this.cost = 50
// //     }
// // }
// //
// // class PremiumMembership {
// //     constructor(name) {
// //         this.name = name
// //         this.cost = 100
// //     }
// // }
// //
// // class FactoryMembership {
// //     static list = {
// //         simple: SimpleMembership,
// //         standard: StandardMembership,
// //         premium: PremiumMembership
// //     }
// //     create(name, type = 'simple') {
// //         const Membership = FactoryMembership.list[type]
// //         const member = new Membership(name)
// //         member.type = type
// //         return member
// //     }
// // }
// //
// // let factory=new FactoryMembership()
// //
// // member1=factory.create('pit','standard')
// // member2=factory.create('john','premium')
// // member3=factory.create('stan')
// // console.log(member1,member2,member3)

console.log('prototype---------')
// // let animal={legs:true}
// // let rabbit=Object.create(animal,{run:{value:true}})
// // console.log(rabbit,rabbit.__proto__)//


console.log('adapter адаптирует интерфейсы------')
// // class OldCalc {
// //     operations(t1,t2,operation){
// //         switch (operation) {
// //             case 'add':return t1+t2
// //             case 'sub':return t1-t2
// //         }
// //     }
// // }
// // class NewCalc {
// //     add(t1, t2) {
// //         return t1+t2
// //     }
// //     sub(t1,t2){
// //         return t1-t2
// //     }
// // }
// //
// // class AdapterCalc {
// //     constructor() {
// //         this.calc=new NewCalc()
// //     }
// //     operations(t1,t2,operation){
// //         switch (operation) {
// //             case 'add': return this.calc.add(t1,t2)
// //             case 'sub': return this.calc.sub(t1,t2)
// //         }
// //     }
// // }
// //
// // const calc1=new NewCalc()
// // const calc2=new OldCalc()
// // const calc3=new AdapterCalc()
// // console.log(calc1.add(5, 10),calc2.operations(5,10,'add'));
// // console.log(calc3.operations(5,10,'add'),calc3.calc.add(5,10)) // используем старый и новый интерфейс

console.log('decorator декорирует обьект---------')
// // class Car {
// //     constructor() {
// //         this.weels=4
// //     }
// // }
// //
// // function speedy(car) {
// // car.speed=100
// //     return car
// // }
// //
// // let mazda=new Car()
// // let speedyMazda=speedy(mazda)
// // console.log(speedyMazda)

console.log('кэширующий декоратор --------------')
// function makeCaching(f) {
//     let cache = {}
//     return function (a) {
//         if (a in cache) {
//             return cache[a]
//         } else {
//             cache[a] = f(a);
//             return cache[a];
//         }
//     }
// }
//
// f = makeCaching(f);

console.log('chain_of_responsibility----------')
// // class MySum {
// //     constructor(val=42) {
// //         this.sum=val
// //     }
// //     add(a){
// //         this.sum+=a
// //         return this //возвращаеи обьект
// //     }
// // }
// // const  sum=new MySum()
// // console.log(sum.add(2).add(5).add(8).sum);

 console.log('observer-----------------------')
// // class Subject {
// //     constructor() {
// //         this.observers=[]
// //     }
// //     subscribe(observer){this.observers.push(observer)}
// //     unSubscribe(observer){this.observers=this.observers.filter(obs=>obs!==observer)}
// //     fire(action){this.observers.forEach(observer=>observer.update(action))}
// // }
// // class Observer {
// //     constructor(state=1) {
// //         this.state=state
// //         this.initialState=state
// //     }
// // update(action){
// //         switch (action) {
// //             case 'INCREMENT':this.state=++this.state
// //                 break
// //             case 'DECREMENT':this.state=--this.state
// //             break
// //             default: this.state= this.initialState
// //         }
// // }
// // }
// //
// // const stream=new Subject()
// //
// // const observer1=new Observer()
// // const observer2=new Observer(10)
// // const observer3=new Observer(20)
// //
// // stream.subscribe(observer1)
// // stream.subscribe(observer2)
// // stream.subscribe(observer3)
// //
// // stream.fire('INCREMENT')
// // stream.fire('INCREMENT')
// // stream.fire('INCREMENT')
// //
// // console.log(observer1.state,observer2.state,observer3.state)

console.log('observer (обозреватель) мы создаем один обсервер и потом в нескольких местах подписываемся на события ' +
    'этого обсервера с помощью subscribe. Поэтому когда мы вызовем observer.dispatch, то это уведомит' +
    'всех подписчиков.------------------------')


 class EventObserver {
     constructor() {
         this.observers = []  //массив подписчиков (массив функций которые вызываются при срабатывании метода dispatch)
     }

     subscribe(fn) {
         this.observers.push(fn)
     }

     unsubscribe(fn) {
         this.observers = this.observers.filter(subscriber => subscriber !== fn)
     }

     dispatch(data) {
         this.observers.forEach(observer => observer(data)) //observer(data) -- вызываем каждую функцию из массива observers,
                                                             // передавая ей в параметры данные из параметров метода dispatch
     }
 }

function functionalEventObserver() {
 const observers = []

 return (
   {
    subscribe(fn) { observers.push(fn) },
    dispatch(data) { observers.forEach(observer => observer(data)) }
   }
 )

}

//redux
function createStore() {
  const subscribers = [];
  let state = {};

  function reducer(action, state) {
    switch (action.type){
      case 'PushKey' : return {
        ...state,
        text: action.payload,
        symbolsCount: getSymbolsCount(action.payload),
        wordsCount: getWordsCount(action.payload)
      };
      break;
      default: return {...state};
    }

  }

  return {
    subscribe(fn) {
      subscribers.push(fn)
    },
    dispatch(action) {
      state = reducer(action, state); // редюсер меняет стейт в соответствии с экшеном
      subscribers.forEach(subscriber => subscriber(state)) // подписчики получают свежий стейт
    }
  }

}

 //const blogObserver = new EventObserver()
 //const blogObserver = functionalEventObserver()
 const store = createStore()

 const textField = document.querySelector('.textField')
 const countField = document.querySelector('.countField')
 const countField2 = document.querySelector('.countField2')

 //blogObserver.subscribe(text => {
 //    console.log('broadcast catched', text)
 //})
 //
 //blogObserver.subscribe(text=>{
 //    countField.innerHTML=getWordsCount(text)
 //})
 //
 //blogObserver.subscribe(text=>{
 //    countField2.innerHTML=getSymbolsCount(text)
 //})
 //
 //textField.addEventListener('keyup', () => {
 //    blogObserver.dispatch(textField.value)
 //})



store.subscribe(state => {
  console.log('state', state)
})

store.subscribe(state=>{
  countField.innerHTML=state.wordsCount
})

store.subscribe(state=>{
  countField2.innerHTML=state.symbolsCount
})

textField.addEventListener('keyup', () => {
  store.dispatch({type:'PushKey',payload: textField.value})
})

 function getWordsCount(text) {
     return text ? text.trim().split(/\s+/).length : 0
 }

 function getSymbolsCount(text) {
     return text ? text.split('').length : 0
 }

module.exports={a:1}