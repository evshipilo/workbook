//TODO ООП - методология программирования, основанная на представлении программы в виде совокупности объектов,
// каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования. Принципы:
// 1) Инкапсуляция - сокрытие внутренней реализации обьекта от других обьектов и предоставление набора методов для взаимодействия с ним (API).
// Инкапсуляция ускоряет процесс разработки: слабо связанные друг с другом компоненты 	могут разрабатываться, тестироваться и дополняться
// независимо. Атак же переиспользоваться.
// 2) Наследование - описание новых классов на основе существующего (родительского). При этом свойства и функциональность родительского класса
// заимствуются новым классом.
// 3) Полиморфизм - классы-наследники наследуют функциональность классов-родителей но конкретная реализация этой функциональности может быть
// разной. (переопределение методов и конструктора в наследниках)
// 4) Абстракция — для каждого объекта мы задаём минимальное количество свойств, которые позволят нам решить задачу.

// TODO Принципы чистого кода: DRY - don't repeat yourself (не повторяйся), KISS - keep it simple stupid (упрощай код), YAGNI - не создавай не нужное

// TODO SOLID способствует созданию такого приложения, которое будет легко поддерживать и расширять в течение долгого времени. ota-solid.vercel.app
//  1)Принцип единственной ответственности (Single Responsibility Principle, SRP) - У модуля должна быть только одна причина для  изменения. Те
//  если компонент отвечает за поведение кнопки то единственной причиной для его изменения должно быть изменение бизнес требований к поведению
//  этой кнопки. При изменении какого-либо бизнес требования к приложению вся функциональность которая требует изменения должна быть собрана в 1
//  модуле. Принцип позволяет уменьшить количество кода, который  нужно  менять при изменении бизнес-правил.
//  2)Принцип открытости-закрытости (Open-Closed Principle, OCP) - модули должны быть открыты для расширения , но закрыты для изменения.  открыты
//  для расширения — их функциональность может быть дополнена, если изменятся требования; закрыты для изменения —
//  расширение функциональности модуля не должно приводить к изменения в других модулях, которые его используют иначе маленькое изменение в одном
//  модуле станет причиной кучи изменений в других.
//  3) Принцип подстановки Барбары Лисков (Liskov Substitution Principle, LSP) - классы-наследники не  должны  противоречить базовому классу.
//  Например, они не могут предоставлять интерфейс ýже базового. Функций, которые используют базовый класс должны правильно работать и с наследниками.
//  4)Принцип разделения интерфейса (Interface Segregation Principle, ISP) - Сущности не должны зависеть от интерфейсов, которые они не
//  используют. ISP содержит правила и ограничения, которые помогают справиться  проблемой, когда при наследовании класс-потомок получает вместе с
//  нужной функциональностью кучу неиспользуемой и ненужной. ISP помогает проектировать интерфейсы так, чтобы их изменения затрагивали только те
//  модули, на функциональность которых они действительно влияют. Чаще всего это заставляет интерфейсы дробить (разделять).
//  5) Принцип инверсии зависимостей (Dependency Inversion Principle, DIP) - Высокоуровневые модули не должны зависеть от низкоуровневых; оба типа
//  должны зависеть от абстракций. Абстракции не должны зависеть от деталей, детали должны зависеть от абстракций. DIP помогает снизить
//  взаимозависимость модулей.

// TODO Event Loop -- JS однопоточный, одновременно выполняет только 1 задачу.
// При вызове функций создаются контексты их выполнения (лексическое окружение + this), которые помещаются в стек вызовов, по мере выполнения функций 
// контексты удаляются из стека. Однако выполнение некоторых функций может быть отложено во времени (SetTimeout, EventListeners, Promise)
// Чтобы не блокировать стек дожидаясь выполнения асинхронных операций, такие функции удаляются из стека, а их колбеки и обработчики попадают в webAPI,
// При достижении определенного события (клик, таймер, резолв) колбэки попадают в очередь макрозадач, обработчики промисов в очерель микрозадач.
// Здесь и работает EventLoop по алгоритму
// -- Если стек пуст - проверяем очередь микрозадач. Если там есть задачи - помещаем 1 звдвчу в стек и выполняем
// -- Если нету - проверяем очередь макрозадач. Если там есть задачи - помещаем 1 звдвчу в стек и выполняем. 
// -- Повторяем сначала!

// TODO замыкание — это способность функции во время создания запоминать лексическое окружениессылки на переменные и параметры, находящиеся в
//  текущей области видимости и во внешних областях видимости. Все функции «при рождении» получают скрытое свойство [[Environment]], которое
//  ссылается на лексическое окружение места, где они были созданы. Лексическое окружение - обьект в котором содержаться локальные переменные и
//  ссылка на внешнее лексическое окружение. В стек вызоаов попадают контексты выполнения функций, которые состоят из значения this и лексического
//  окружения  = [[Environment]].

//function counterInit(increment) {
//    let count = 0;
//    return function () {
//        count=count+increment;
//        return count;
//    }
//}
//
//let counter=counterInit(1);
////console.log(count);//ReferenceError
//console.log(counter());//1
//console.log(counter());//2
//console.log(counter());//3

// TODO Область видимости — это место, откуда мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости: глобальная,
//  функциональная и блочная (ES6). Для функции область видимости смотрим по месту обьявления функции. Функция навсегда запоминает ссылку на
//  лексическое окружение, где она была создана. Получаем свежие значения переменных

//let cc=500
//function out() {
//  let aa = 300
//
//       function inn() {
//        let bb = 200
//        console.log(aa, bb, cc)
//    }
//
//    aa=350
//    inn()
//}
//
//let aa = 1, bb = 2
//cc=600
//out()
//
//
//let globalVar = 'global'
//let outerVar = 'outer'
//
//function outerFunc(outerParam) {
//    function innerFunc(innerParam) {
//        console.log(globalVar, outerParam, innerParam)//guess outer inner
//    }
//    return innerFunc
//}
//
//const x = outerFunc(outerVar)
//outerVar = 'outer-2'
//globalVar = 'guess'
//x('inner')

// TODO Паттерны проектирования (Порождающие, Структурные, Поведенческие)
//  1)«Синглтон» (Singleton) представляет собой объект, который может существовать лишь в единственном экземпляре. Позволяет не нарушать SRP.

//let instance = null;
//function User(name) {
//	if(instance) { return instance;	}
//	instance = this;
//	this.name = name;
//	return instance;
//}
//const user1 = new User('Peter');
//const user2 = new User('Mark');
//console.log(user1 === user2);

// TODO 2) «Фабрика» может быть использован в том случае, если нужно создавать различные объекты в зависимости от специфических условий.

//class Car{
//	constructor(options) { this.doors7 = options.doors;	}
//}
//class Truck {
//	constructor(options) { this.doors = options.doors;	}
//}
//class VehicleFactory {
//	createVehicle(options) {
//		if(options.vehicleType === 'car') {
//			return new Car(options);
//		} else if(options.vehicleType === 'truck') {
//			return new Truck(options);
//		}
//	}
//}
//
//const factory = new VehicleFactory();
//const car = factory.createVehicle({
//	vehicleType: 'car',
//	doors: 4
//});
//const truck= factory.createVehicle({
//	vehicleType: 'truck',
//	doors: 2
//});
//console.log(car);
//console.log(truck);

// TODO Структурные паттерны «Декоратор» (Decorator) используется для расширения функционала объектов без модификации существующих классов  или
//  функций-конструкторов.

//class Bike {
//	constructor() {
//		this.weels = 2
//	}
//}
//
//function speedy(bike) { // функция декоратор
//	bike.speed = 100
//}
//
//let honda = new Bike()
//speedy(honda)
//console.log(honda)
//
//// TODO Кеширующий декоратор
//
//function makeCaching(f) {
//	let cache = {}
//	return function(a) {
//		if (a in cache) {
//			return cache[a]
//		} else {
//			cache[a] = f(a);
//			return cache[a];
//		}
//	}
//}

// TODO Адаптер — это структурный паттерн проектирования, который позволяет взаимодействовать объектам с несовместимыми интерфейсами.

// TODO Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе обьектов.

// TODO Поведенческие паттерны: Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий одним объектам
//  следить и реагировать  на события, происходящие в других объектах.

//class EventObserver {
//	constructor() {	this.observers = []  //массив подписчиков (массив функций которые вызываются при срабатывании метода dispatch)
//		}
//	subscribe(fn) {	this.observers.push(fn)	}
//	unsubscribe(fn) {	this.observers = this.observers.filter(subscriber => subscriber !== fn)	}
//	dispatch(data) {
//		this.observers.forEach(observer => observer(data)) //observer(data) -- вызываем каждую функцию из массива observers,
//		// передавая ей в параметры данные из параметров метода dispatch
//	}
//}
//
// function createObserver() {
//   const subscribers = []
//
//   return {
//     subscribe(callback) {
//       subscribers.push(callback)
//     },
//     dispatch(data) {
//       subscribers.forEach(subscriber => subscriber(data))
//     }
//   }
// }
//
// const observer = createObserver()
// const textField = document.querySelector('.textField')
// const countField = document.querySelector('.countField')
// textField.addEventListener('keyup', () => {
//   observer.dispatch(textField.value)
// })
// observer.subscribe((data) => {
//   countField.innerHTML = data.length
// })

// TODO карринг Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// function out(a) {
//     return function (b) {
//         return a * b;
//     }
// }
//
// console.log(out(2)(3));
// let out5 = out(5);
// console.log(out5(3),out5(5));
//
// function curry(func) {
//
//     return function curried(...args) {   //возвращаем функцию curried с некоторым набором аргументов
//         if (args.length >= func.length) {  //если количество переданных аргументов >= количеству аргументов каррируемой функции
//             return func(...args); //то вызываем func с этими аргументами и всё
//         } else {
//             return function(...args2) {    // иначе возвращаем новую функцию с некоторым набором аргументов
//                 return curried(...args,...args2); // кторая рекурсивно вызывает функцию curried с обьединённым набором аргументов
//                          // и так далее пока не выполнится первое условие
//            }
//         }
//     }
// }
//
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
// console.log( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
// console.log( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов

//TODO Каждая функция javascript при вызове получает ссылку на текущий контекст выполнения, называемый this.
//	В строгом режиме значение этого ключевого слова по умолчанию undefined, не в строгом - глобальный объект (window в браузере)
//	это называется привязкой по умолчанию для этого ключевого слова.
//	Если мы вызываем функцию как метод обьекта, this становится этим объектом - это неявная привязка this.
//	Явная привязка this f.call(context,arg1,arg2...) f.apply(context,[arg1,arg2...]) f.bind(context,arg1,arg2...)
//	Ключевое слово new перед любой функцией превращает вызов функции в вызов конструктора, при этом
//	создается новый пустой объект, и этот обьект присваивается this, код функции обычно модифицирует this, возвращается значение this
//	Приоритет привязок ключевого слова this:
//	1) вызывается ли функция с ключевым словом new.
//	2) вызывается ли функция с помощью метода call () или apply (), что означает явную привязку
//	3) вызывается ли функция как метод обьекта (неявная привязка).
//	4) значение this по умолчанию (глобальный обьект или undefined)
//	Если метод передаётся отдельно от объекта – this теряется. a=obj.doSomething; a();
//	 Стрелочные функции не имеют собственного значения this. Они копируют значение this и arguments из внешней функции
//	И это поведение нельзя изменить с помощью функций call или bind.
//	Стрелочные функции удобно использовать внутри обычных функций тк интуитивно понятно какое значение this они используют
//	В IIFE, функциях, которые создаются в глобальной области видимости, анонимных функциях
//	и внутренних функциях методов объекта значением this по умолчанию является объект window.
//	привязка контекста f.call(context,arg1,arg2...) f.apply(context,[arg1,arg2...]) f.bind(context,arg1,arg2...)

// TODO  TYPESCRIPT. Это не самостоятельный язык программирования, а надмножество JS, компилируется в JS. достоинства: Строгая типизация, компилятор и
//  IDE сразу подскажут ошибки до запуска JS, Помощь в предотвращении багов; Если код компилируется, высок процент вероятности, что он работает
//  string, number, boolean, Arrays, Tuple let x:[string, number], Enum перечисления, Unknown эта переменная может быть чем
//  угодно, any произвольный тип, void функция не возвращает ничего, Null, Undefined, Never тип возвращаемого значения для  функций которые
//  генерируют или возвращают ошибку, Object, Symbol.   as - утверждение типа, Jenerics - параметр типа, interface - определяет свойства и методы,
//  которые объект должен реализовать.


//let obj = {
//  name: 'Tor',
//  show() {
//    console.log("-> ", this.name);
//  },
//  gg: () => {
//    console.log("->>>>> ", this);
//  } //Если мы используем this внутри стрелочной функции,
//  // то его значение берётся из внешней «нормальной» функции.
//}
//
//function ggg() {
//  console.log("->>>>>+++ ", this)
//}
//
//function loseContecst(callback){
//	callback();
//}
//
//loseContecst(obj.show) //undefined тоже самое что и f=obj.show; loseContecst(f) потеря контекста при передаче метода отдельно от объекта
//loseContecst(()=>obj.show()) //Tor
//loseContecst(obj.show.bind(obj)) //Tor
//
//obj.show();//Tor
//obj.gg()//Window
//ggg()//Window
//
//function f() {
//  console.log("-> ", this.name);
//}
//
//obj.f = f;
//
//obj.f();//Tor
//
//let show = obj.show;//нет привязки. метод передаётся отдельно от объекта – this теряется.
//show();//undefined this===Window
//
//let obj1 = {
//  name: 'SURPRISE',
//  show1() {
//    return () => {
//      console.log('--------', this.name)
//    }
//  }
//}
//
//const printer = {
//	items: [1],
//	print() { // важно что внешняя функция имеет контекст
//		// Стрелочная функция определяется внутри функции print,
//		// но вызывается внутри метода forEach
//		this.items.forEach(() => console.log(this.items));
//	},
//};
//
//printer.print(); // [1]
//
//obj.show = obj1.show1();//show1 вызвана для obj1 this===obj1 возвращаемая срел ф пролучает this из лексич окружения >> для нее теперь всегда this===obj1
//obj1.show1()();//SURPRISE obj.show();//SURPRISE

// TODO repeat()

// function repeat(n) {
//     let sum='';
//     for(let a=0; a<n; a++){
//         sum+=this;
//     }
// return sum;
// }
//
// String.prototype.repeat=repeat;
//
// console.log('a'.repeat(3));
// console.log((new String).__proto__.repeat)

// TODO map() polyfill

//Array.prototype.myMap=function(callback){
//    let result=[]
//    this.forEach(item=>{
//        //result.push(callback(item))
//		 result=[...result,callback(item)]
//    })
//    return result
//}
//
//let ss=[1,2,3,4,5].myMap(item=>++item)
//console.log(ss)//[2,3,4,5,6]

// TODO filter() polyfill

// Array.prototype.myFilter=function(callback){
//     let result=[]
//     this.forEach(item=>{
//         if(callback(item)) result.push(item)
//     })
//     return result
// }
//
// let res=[1,2,3,4,5,6].myFilter(item=>item>3)
// console.log(res)

//TODO reduce() polyfill

// Array.prototype.myReduce=function(callback,initial=null){
//     let result=initial
//     this.forEach(item=>{
//         result=callback(result,item)
//     })
//     return result
// }
// let res = [1,2,3,4,5].myReduce((accum,item)=>accum+item,10)
// console.log('res',res)  //25

// TODO bind polyfill

// Function.prototype.myBind = function (context, ...args) {
//     let that=this;  //that===notBindedFunction
//     return function (...args2) {                //замыкание - возвращаемая ф запоминает context, ...args
//         return that.apply(context, args.concat(args2));
//     }
// }
//
// let obj = {
//     field: 100
// }
//
// function notBindedFunction(a, b) {
//     return a + b + this.field;
// }
//
// let bindedFunction = notBindedFunction.myBind(obj, 10);
//
// console.log('------------',bindedFunction(20));   //130

// TODO create polyfill

// Object.prototype.myCreate=function (proto) {
//     let obj={};
//     obj.__proto__=proto
//     //Object.setPrototypeOf(obj,proto);
// return obj;
// }
//
// let animal={
//     leg: true
// };
//
// let rabbit=Object.myCreate(animal);
//
// console.log(rabbit.leg);//true

// TODO обьект __proto__ работаем как с обычным свойством, если не находим свойства в обьекте то ищем в __proto__, Операции записи/удаления
//  работают  непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер), for..in перебирает как свои,  так и
//  унаследованные свойства, Остальные методы получения ключей/значений работают только с собственными свойствами объекта

// let animal={
//     legs: true
// }
// console.log(animal.__proto__) //Object
// let rabbit={
//     ears: 'long',
//     __proto__:animal  //свойства из обьекта animal теперь  в обьекте(свойстве) __proto__ обьекта rabbit
// }
// console.log(rabbit.ears,rabbit.legs);//true long
// let wildRabbit={
//     strong: true
// }
//
// wildRabbit.__proto__.tail='short'
// console.log(wildRabbit.__proto__)
// wildRabbit.__proto__=rabbit; //свойства из обьекта rabbit теперь  в прототипе обьекта wildRabbit //свойство tail теперь  в прототипе обьекта
// wildRabbit console.log(rabbit,wildRabbit.__proto__)// rabbit убрал tail из прототипа
// console.log(wildRabbit.legs,wildRabbit.ears,wildRabbit.strong,wildRabbit.tail,wildRabbit.__proto__.tail)//true long true short short
// console.log(wildRabbit.__proto__);//rabbit wildRabbit.__proto__.tail='ttt' wildRabbit.__proto__.ears='not long'
// console.log(wildRabbit.__proto__); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! console.log(rabbit);// когда мы добавляем или
// меняем свойства прототипа они меняются в самом обьекте rabbit console.log(wildRabbit.__proto__.__proto__);//animal
// console.log(wildRabbit.__proto__.__proto__.__proto__);//Object  console.log(rabbit.toString()) console.log(rabbit-wildRabbit) const a=new Date()
// console.log(a.valueOf()) console.log(a.toString())

//TODO prototype  Значение F.prototype должно быть либо объектом, либо null. Другие значения не будут работать, По умолчанию все функции
// имеют F.prototype = { constructor: F }, поэтому мы можем получить конструктор объекта через свойство "constructor"

//let animal = {
//    legs: true
//}
//
//function Rabbit(name) {
//    this.name = name;
//}
//
//function WildRabbit(){}
//console.log(Rabbit.prototype)
//Rabbit.prototype = animal;//когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ обьект animal
//console.log(Rabbit.prototype)
//Rabbit.prototype.gotLegs=function(){return this.legs} //когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ свойство gotLegs
//Rabbit.prototype.nose=true//когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ свойство nose:true
//console.log(Rabbit.prototype)
//WildRabbit.prototype=Object.create(Rabbit.prototype)
//let rabbit = new Rabbit('billy');
//console.log('---->>>>',rabbit.legs, rabbit.name, rabbit.nose , rabbit.gotLegs(), rabbit.__proto__);//true billy true true  { legs: true, gotLegs:
// [Function (anonymous)], nose: true }

//TODO PROMISE Многие функции в JavaScript асинхронные - результат их выполнения будет получен не сразу а через время. Раньше для работы с такими
// функциями применяли колбеки, в функцию передавали колбек и при наступлении определенного отложенного во времени события (например
// request.onload) выполняли колбек передавая в него полученные данные, однако если после выполнения одной асинхронной операции нам последовательно
// нужно вывать другие асинхронные операции то в колбеке нужно вызвать другую асинхронную функцию в коллбеке которой вызвать следующую асинхронную
// функцию и тд. Такой код сложно читать и поддерживать. Промисы позволили нам работать с асинхронными кодом более чистым и плоским способом.
// Объект Promise используется для отложенных и асинхронных вычислений при создании промис принимает функцию-исполнитель с двумя
// колбеками resolve и reject функция-исполнитель описывает выполнение какой-то асинхронной работы, по завершении которой необходимо вызвать
// функцию  resolve или reject. При создании промис находится в ожидании (pending), а затем может стать исполненным  (fulfilled), вернув
// полученный  результат (значение), или отклонённым (rejected), вернув причину отказа. В любом из этих случаев вызывается обработчик,
// прикреплённый к промису методом then. Async/await Ключевое слово async перед объявлением функции: Обязывает её всегда возвращать промис.
// Позволяет использовать await в теле этой функции. Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:
// Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw. Иначе вернётся результат промиса.

//function loadScript(sourse, callback){  //передача колбека
//	sourse.onload = callback(data)
//}
//
//loadScript('/my/script.js', function(data) {
//	loadScript('/my/script2.js', function(data) {
//	})
//
//});

//prom = (a) => new Promise(resolve => {
//    setTimeout(
//        () => resolve(a + 10), 2000
//    )
//})
//
//async function f() {
//    const a = await prom(10);
//    console.log('a', a);
//    const b = await prom(a)
//    console.log('b', b)
//
//}
//
//f();
//
//let c
//prom(10).then(
//    result => {
//        console.log('result', result)
//        return prom(result)
//    }
//).then(
//    res => {
//        c = res
//        console.log('c=', c)
//    }
//).catch(e => console.log(e))
//
//
//async function g() {
//    try {
//        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//        let json = await data.json()
//        console.log(json)
//    } catch (e) {
//        console.error(e)
//    } finally {
//        console.log('final')
//    }
//
//}
//
//g()
//
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(
//        data => data.json()
//    ).then(
//    json => {
//        console.log(json)
//    }
//)

// TODO hoisting всплывае только обьявление а не присваивание. var функциональная область видимости var всплывает со значением undefined, let и
//  const при всплытии undefined не присваивается поэтому при обращении будет ошибка

//console.log(num)
//num = 6
//console.log(num)
//var num
//
//a = 10
//console.log(a);//10
//{
//    var a
//}
//console.log(a);//10
//
//cat();//mau
//
//function cat() {
//    console.log('mau')
//}
//
//dog();
//let dog = function(){ console.log('gav')}
//
//{console.log(aa, bb);
//    let aa = 10
//    const bb = 20
//    console.log(aa, bb);
//}
//  console.log(aa, bb);

// TODO objects & primitives

// let user={name:'pit'}
// let user2=user
// user.name='john'
// console.log(user2.name)//john
//
// let a=2
// let b=a
// b=3
// console.log(a)//2

//TODO Object.keys, values, entries

// let user={
//     name: 'pit',
//     surname: 'kjnkjn',
//     say(){
//         console.log(this.name)}
// }
//
// console.log(Object.entries(user));
// console.log(Object.values(user));
// console.log(Object.keys(user));

// TODO рекурсия

// function pow(x,n) {
//     if(n===1) return x
//    return  x*pow(x,n-1)
// }
//
// console.log(pow(2, 3));

// TODO флаги свойств обьекта

// let user={
//     name: 'pit',
// }
//
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user,'name',{writable:false})
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// user.name='john'
// console.log(user.name)//pit

// TODO геттер сеттер  вызываем не как метод а как свойство

// let user={
//     name: 'pit',
//     surname: 'jwew',
//     get fullName(){
//         return this.name+this.surname
//     },
//     set change(name){
//         this.name=name
//     }
// }
//
// console.log(user.fullName);
// user.change='john'
// console.log(user.fullName);

// TODO остаточные ...rest параметры (получаем массив из аргументов) ...spread оператор расширения (получаем аргументы из массива или обьекта)

// function sum(...args) {
// return args.reduce((acc,item)=>acc+item,0)
// }
//
// let arr1=[2,2,2]
// let arr2=[2,2,2,2,2]
//
// console.log(sum(...arr1));
// console.log(sum(...arr2));
//
// let firstObject = {a: 1, b: 2};
// let secObject = {e: 1, f: 2};
// let secondObject = {...firstObject, c: 3, d: 4, b:'new', ...secObject};
// console.log(secondObject); // { a: 1, b: 2, c: 3, d: 4 }
//
// let firstArray = ["A", "B", "C"];
// let secondArray = ["X", ...firstArray, "Y", "Z"];
//
// let myArray = [1, 2, 3, 4, 5];
// let [a, b, c, ...d] = myArray;   //деструктуризвция

// TODO Деструктуризация - присваивание значений свойств обьекта или элементов массива переменным

// let arr = [undefined, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const [a = 'cool', , b, , ...rest] = arr
// console.log(a, b, rest)// cool,3,[5-0]
//
// let person = {
//   name: 'pit',
//   bbb: 'aaa',
//   age: 32,
//   address: {
//     city: 'Moscow',
//     country: 'Russia'
//   }
// }
//
// let {
//   name: firstName,
//   age,
//   car = 'no car',
//   address: {
//     city: town,
//     country
//   }
// } = person
// console.log(firstName, age, car, town, country)  //pit, 32,  no car, Moscow, Russia
//
//деструктуризация параметра функции
//function userId({id}) {
//	console.log(id);
//}
//var user = {
//	id: 42,
//};
//userId(user)

// TODO функция groupBy из Lodash

// function groupBy(array, prop) {
//     let obj = {}
//     array.forEach(it => {
//         let key = prop instanceof Function ? prop(it).toString() : it[prop].toString()
//         key in obj ? obj[key].push(it) : obj[key] = [it]
//     })
//     return obj
// }
//
// console.log(groupBy([1.2, 1.3, 4.2, 5.6, 4.6], Math.floor))

// TODO глубина вложенности массива

// let array = [1, [[[[]]]], [1, 2, 3, [1, [[[[[[]]]]]]]], 3, [2]]
//
// let a = 0
//
// function getDeep(array) {
//     if (array.some(it => Array.isArray(it))) {
//         a++
//         getDeep(array.flat())
//     }
//     return a
// }
// console.log(getDeep(array))   //8

// TODO classes

// class Animal {
//     static breath = true  // публичное статическое поле можно вызвать только для класса
//     #priv = 0 //приватное свойство используется только внутри класса, нельзя обьявить в конструкторе
//         [`Field${priv}`] = 'prefixed field';  //название может вычисляться
//     static #privMethod() {
//         console.log('private')
//     }
//
//
//     constructor(legs, blood) {
//         this.voice = 'lfskdjf' + this.#priv
//         this.legs = legs
//         this.blood = blood
//         this.say = function () {      //метод в обьекте
//             console.log('ddddddddd')
//         }
//     }
//
//     jump = true  // публичное статическое поле будет в обьекте
//
//     run(num) {     //метод записывается в __proto__
//         if (this.legs) {
//             console.log(`run with ${num} legs`)
//         }
//         this.#privMethod()
//     }
//
//     get legss() {  //обращаемся как к свойству
//         return this.legs ? 'yes' : 'no'
//     }
//
//     set legss(bool) { //обращаемся как к свойству
//         this.legs = bool
//     }
// }
//
//
// let cat = new Animal(true, 'red')
// console.log(cat)
// cat.legss = false
// console.log(cat.legss)  //no
//
// class Dog extends Animal {
//     static breath = false
//
//     constructor(legs, isWoof) {  //дополняем конструктор
//         super(legs, 'red')  //вызываем родительский конструктор
//         this.isWoof = isWoof
//     }
//
//     run() {     //переопределяем метод
//         super.run(4) //можем вызвать родительский метод
//         console.log(`new`)
//
//     }
// }
//
// console.log('>>>>', Dog.breath)
// console.log(new Dog(true, true))
// new Dog(true, true).run()
//

// TODO кэширующий декоратор

//function makeCaching(f) {
//    let cache = new Map()
//    return function (...a) {
//      const hash=a.toString()
//      console.log(hash)
//        if (cache.has(hash)) {
//          console.log('take from cash:', hash,'-->',cache.get(hash))
//            return cache.get(hash)
//        } else {
//          console.log('calculate')
//            cache.set(hash,f(...a));
//            return cache.get(a);
//        }
//    }
//}
//
//function mult(a,b){return a*b}
//
//multCash = makeCaching(mult);
//multCash(5,6)
//multCash(5,6)
//multCash(5,6)
//
//function makeCaching(f) {
//	let cache = new Map()
//	return function (a) {
//		if (cache.has(a)) {
//			console.log('take from cash:', a,'-->',cache.get(a))
//			return cache.get(a)
//		} else {
//			console.log('calculate',a)
//			cache.set(a,f(a));
//			return cache.get(a);
//		}
//	}
//}
//
//function mult(a){return a*a}
//multCash = makeCaching(mult);
//multCash(5)
//multCash(6)
//multCash(5)
//multCash(6)

// TODO tricky thing

// for(var s = 0; s < 5; s++) {
//
//   setTimeout(function() {
//     console.log(s);
//   }, 1000)
// }
//
//
// for (var i = 0; i < 5; i++) {
//   // передадим функции переменную i, в результате
//   // у каждой функции будет доступ к правильному значению индекса
//   // в параметры передается функция которая немедленно вызывается с корректным значением i, возвращая нужную нам функцию
//   // которая в свою очередь посредством замыкания имеет доступ к нужной нам переменной
//   setTimeout((function(i_local) {
//      return function() {
//       console.log( i_local);
//      }
//   })(i), 1000);
// }
//
// for(let s = 0; s < 5; s++) {
//   // использование ключевого слова let, которое появилось в ES6,
//   // позволяет создавать новую привязку при каждом вызове функции
//  // при каждой итерации создается блок внутри которого своя переменная s c блочной областью видимости
//   setTimeout(function() {
//     console.log(s);
//   }, 1000)
// }
//
// for(var m = 0; m < 5; m++) {
//   //тоже самое что внутри блока создать переменную с let
//   let g=m
//   setTimeout(function() {
//     console.log(g);
//   }, 1000)
// }

// TODO generators

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }
// let generator=generateSequence()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
//
// function* generateSequence2(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }
//
// function* generateAlphaNum() {
//   yield* generateSequence2(1, 2);
//   yield* generateSequence2(11, 12);
//   yield* generateSequence2(21, 22);
//   return 31
// }
// let generator1=generateAlphaNum()
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())

//TODO Trotling (функция вызывается не более 1 раза за определенный период времени) Debouncing (функция не запускается пока вызовы не прекратятся
// на опред период времени)

// function throttle(f, t) {
//   let memo
//   return function (...args) {
//     const start = new Date().valueOf()
//     if (memo === undefined || (start - memo) > t) {
//       memo = start
//       return f(args)
//     }
//   }
// }
//
// function debouncing(f, t) {
//   let memo
//   return function (...args) {
//     const start = new Date().valueOf()
//     if (memo === undefined || (start - memo) > t) {
//       memo = start
//       return f(args)
//     } else {
//       memo = start
//     }
//   }
// }
//
// function long() {
//   const start = new Date().valueOf()
//   for (let i = 0; i < 1000000; i++) {
//   }
//   return (new Date().valueOf() - start+ 'ms')
// }
//
// let throttled = throttle(() => 'trigged!!!', 20);
// let debounced = debouncing(() => 'trigged!!!', 20);
//
// console.log(throttled())
// console.log(throttled())
// console.log(long())
// console.log(throttled())
// console.log(long())
// console.log(throttled())
// console.log(long())
// console.log(throttled())
//
// console.log(debounced())
// console.log(debounced())
// console.log(long())
// console.log(debounced())
// console.log(long())
// console.log(debounced())
// console.log(long())
// console.log(debounced())
// console.log(long())
// console.log(long())
// console.log(debounced())

// TODO REDUX

 //function CreateStore() {
 //  const subscribers = []
 //  let state = {}
 //
 //  function reducer(state, action) {
 //    if (action.type === 'change') {
 //      return {...state, text: action.payload}
 //    }
 //    return state
 //  }
 //
 //  return {
 //    subscribe(callback) {
 //      subscribers.push(callback)
 //    },
 //    dispatch(action) {
 //      state = reducer(state, action)
 //      subscribers.forEach(subscriber => subscriber())
 //    },
 //    getState() {
 //      return state
 //    }
 //  }
 //}
 //
 //const store = CreateStore()
 //const textField = document.querySelector('.textField')
 //const countField = document.querySelector('.countField')
 //
 //textField.addEventListener('keyup', () => {
 //  store.dispatch({type: 'change', payload: textField.value})
 //})
 //
 //store.subscribe(() => {
 //  countField.innerHTML = store.getState().text.length
 //})

// TODO для собеса rsschool------------------aaabbc-> 3a2b1c

//function check(str) {
//  let arr = str.split('')
//  let sorted = arr.sort((a, b) => {
//    if (a > b) return 1;
//    if (a < b) return -1
//  })
//  let ss=sorted.join('').trim()
//  sorted=ss.split('')
//  let res = '';
//  let num = 1
//  sorted.forEach((a, index) => {
//    if (a === sorted[index + 1]) {
//      num++
//    } else {
//      res += num + a;
//      num = 1;
//    }
//  })
//  return res
//}
//
//console.log(check(' a b   a a bc c '))
//let users = [
//  {name: "Вася", age: 25, salary: 2000},
//  {name: "Петя", age: 27, salary: 2500},
//  {name: "Маша", age: 21, salary: 3000},
//  {name: "Оля", age: 22, salary: 2800},
//  {name: "Катя", age: 28, salary: 2300},
//  {name: "Костя", age: 24, salary: 2100}
//];
//
//function range(arr, parameter, min, max) {
//  const filtered = arr.filter(item => item[parameter] >= min && item[parameter] <= max)
//  filtered.sort((a, b) => a[parameter] - b[parameter])
//  return filtered.map(item => item.name)
//}
//
//console.log(range(users, 'age', 21, 25))
//
//
//let users = [
//	{name: "Вася", age: 25, salary: 2000},
//	{name: "Петя", age: 27, salary: 2500},
//	{name: "Маша", age: 21, salary: 3000},
//	{name: "Оля", age: 22, salary: 2800},
//	{name: "Катя", age: 28, salary: 2300},
//	{name: "Костя", age: 24, salary: 2100}
//];
//
// вернуть массив имен у которых параметр будут в заданных пределах
//
//function range() {
//
//}
//
//console.log(range(users, 'age', 21, 25))

//TODO bench training

// const meeting = (arr) => {
//   const index = arr.findIndex(item=> item==='O')
//   return index === -1 ? 'None available!' : index
// }

// console.log(meeting(['X', 'O', 'X']),
//   meeting(['O','X','X','X','X']),
//   meeting(['X','X','X','X','X']))

// const compareCharacters = (obj) => {
//   const commonArr = []
//   const resultObj = {}
//   const keysArr = Object.keys(obj).reverse()

//   keysArr.forEach(key=>{
//     const arr = obj[key]
//     const resultArr = []

//     arr.forEach(char=> {
//       if(!commonArr.includes(char)){
//         commonArr.push(char)
//         resultArr.push(char)
//       }
//     })

//     resultObj[key]=resultArr
//   })

//   return resultObj
// }

// console.log(compareCharacters({
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }))

// console.log(compareCharacters({
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }))

