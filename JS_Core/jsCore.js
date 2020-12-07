console.log('замыкание — это способность функции во время создания запоминать лексическое окружение' +
    ' ссылки на переменные и параметры, находящиеся в текущей области видимости' +
    ' и во внешних обласях видимоси' +
    ' ------------------------nodemon interview.js-----------------');
// function counterInit() {
//     let count = 0;
//     return function () {
//         count ++;
//         return count;
//     }
// }
//
// let counter=counterInit();
// //console.log(count);//ReferenceError
// console.log(counter());//1
// console.log(counter());//2
// console.log(counter());//3


console.log('Область видимости — это место, где (или откуда)' +
    ' мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости:' +
    ' глобальная, функциональная и блочная (ES6).' +
    'область видимости смотрим по месту обьявления функции.' +
    ' функция навсегда запоминает ссылку на лексическое окружение,' +
    ' где она была создана.' +
    ' получаем свежие значения переменных------------')

// let cc=500
// function out() {
//
//        function inn() {
//         let bb = 200
//         console.log(aa, bb, cc) //300 200 600
//     }
//
//     let aa = 300
//     inn()
// }
//
// let aa = 1, bb = 2
// cc=600
// out()

// let globalVar = 'global'
// let outerVar = 'outer'
//
// function outerFunc(outerParam) {
//     function innerFunc(innerParam) {
//         console.log(globalVar, outerParam, innerParam)//guess outer inner
//     }
//     return innerFunc
// }
//
// const x = outerFunc(outerVar)
// outerVar = 'outer-2'
// globalVar = 'guess'
// x('inner')


console.log("карринг Каррирование – это трансформация функций таким образом," +
    " чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)-------");
// function out(a) {
//     return function (b) {
//         return a * b;
//     }
// }
//
// console.log(out(2)(3));
// let out5 = out(5);
// console.log(out5(3),out5(5));

// function curry(func) {
//
//     return function curried(...args) {   //возвращаем функцию curried с некоторым набором аргументов
//         if (args.length >= func.length) {  //если количество переданных аргументов >= количеству аргументов каррируемой функции
//             return func.apply(this, args); //то вызываем func с этими аргументами и всё
//         } else {
//             return function(...args2) {    // иначе возвращаем новую функцию с некоторым набором аргументов
//                 return curried.apply(this, args.concat(args2)); // кторая рекурсивно вызывает функцию curried с обьединённым набором аргументов
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

console.log("this- это обьект перед точкой который используется для вызова метода" +
    ' this ссылается на значение объекта, который в данный момент выполняет или вызывает функцию.' +
    ' «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения,' +
    ' от того места, где мы используем this. Стрелочные функции не имеют собственного значения this.' +
    ' Они копируют значение this из внешнего лексического окружения где была обьявлена.' +
    'В IIFE, функциях, которые создаются в глобальном области видимости, анонимных функциях ' +
    'и внутренних функциях методов объекта значением this по умолчанию является объект window.'
);
// let obj = {
//     name: 'Tor',
//     show() {
//         console.log("-> ", this.name);
//     }
// }
// obj.show();//Tor
//
// function f() {
//     console.log("-> ", this.name);
// }
//
// obj.f = f;
//
// obj.f();//Tor
//
// let show = obj.show;//нет привязки
// show();//undefined
//
// let obj1 = {
//     name: 'SURPRISE',
//     show1: function() {
//        return () => {
//            console.log('--------',this.name)}
//     }
//
// }
//
//  obj.show = obj1.show1();//show1 вызвана для obj1 this===obj1 возвращаемая срел ф пролучает this из лексич окружения >> для нее теперь всегда this===obj1
//  let show7 = obj1.show1();
// show7();//SURPRISE
// obj.show();//SURPRISE

console.log('repeat() polyfill-----------------------------------------');
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

console.log('map() polyfill-----------------------------------------');
// Array.prototype.myMap=function(callback){
//     let result=[]
//     this.forEach(item=>{
//         result.push(callback(item))
//     })
//     return result
// }
//
// let ss=[1,2,3,4,5].myMap(item=>++item)
// console.log(ss)//[2,3,4,5,6]

console.log('filter() polyfill-----------------------------------------');
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

console.log('reduce() polyfill-----------------------------------------');
// Array.prototype.myReduce=function(callback,initial=null){
//     let result=initial
//     this.forEach(item=>{
//         result=callback(result,item)
//     })
//     return result
// }
// let res = [1,2,3,4,5].myReduce((accum,item)=>accum+item,10)
// console.log('res',res)


console.log('newF()===F---------------------------------------');
// function F() {
// return F;
// }
// console.log(new F()===F);

console.log('bind polyfill-------------------------------------');
// Function.prototype.myBind = function (context, ...args) {
//     let that=this;  //that===notBindedFunction
//     return function (...args2) {
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
// console.log('------------',bindedFunction(20));


console.log('create-- polyfill---------------------------------');
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

console.log('__proto__ работаем как с обычным свойством, если не находим свойства в обьекте то ищем в __proto__ -----');
// let animal={
//     legs: true
// }
// let rabbit={
//     ears: 'long',
//     __proto__:animal
// }
// console.log(rabbit.ears,rabbit.legs);//true long
// let wildRabbit={
//     strong: true
// }
// wildRabbit.__proto__=rabbit;
// wildRabbit.__proto__.tail='short'
//
// console.log(wildRabbit.legs,wildRabbit.ears,wildRabbit.strong,wildRabbit.tail,wildRabbit.__proto__.tail)//true long true short short
// console.log(wildRabbit.__proto__);//rabbit
// console.log(wildRabbit.__proto__.__proto__);//animal
// console.log(wildRabbit.__proto__.__proto__.__proto__);//Object

console.log('prototype -----------------------------------------');
// let animal = {
//     legs: true
// }
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;//когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ обьект animal
// Rabbit.prototype.gotLegs=function(){return this.legs} //когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ свойство gotLegs
// Rabbit.prototype.nose=true//когда создадим обьект с помощью ф.конструктора запишем ему в __proto__ свойство nose:true
// let rabbit = new Rabbit('billy');
// console.log('---->>>>',rabbit.legs, rabbit.name, rabbit.nose , rabbit.gotLegs(), rabbit.__proto__);//true billy true true  { legs: true, gotLegs: [Function (anonymous)], nose: true }


console.log('promise---------------------------------------------');

// prom = (a) => new Promise(resolve => {
//     setTimeout(
//         () => resolve(a + 10), 2000
//     )
// })
//
// async function f() {
//     const a = await prom(10);
//     console.log('a', a);
//     const b = await prom(a)
//     console.log('b', b)
//
// }
//
// f();
//
// let c
// prom(10).then(
//     result => {
//         console.log('result', result)
//         return prom(result)
//     }
// ).then(
//     res => {
//         c = res
//         console.log('c=', c)
//     }
// ).catch(e => console.log(e))
//
//
// async function g() {
//     try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let json = await data.json()
//         console.log(json)
//     } catch (e) {
//         console.error(e)
//     } finally {
//         console.log('final')
//     }
//
// }
//
// g()
//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(
//         data => data.json()
//     ).then(
//     json => {
//         console.log(json)
//     }
// )

console.log('hoisting--- всплывае только обьявление а не присваивание. var функциональная область видимости-----')
// console.log(num)//undef
// num = 6
// console.log(num);//6
// var num
//
// a = 10
// console.log(a);//10
// {
//     var a
// }
// console.log(a);//10
//
// cat();//mmmmmm
//
// function cat() {
//     console.log('mmmmmm')
// }
//
// {//console.log(aa, bb);---
//     let aa = 10
//     const bb = 20
//     console.log(aa, bb);
// }
//  // console.log(aa, bb);---

console.log('objects & primitives -----------------------')
// let user={name:'pit'}
// let user2=user
// user.name='john'
// console.log(user2.name)//john
//
// let a=2
// let b=a
// b=3
// console.log(a)//2

console.log('Object.keys, values, entries-------------')
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

console.log('рекурсия--------------------------------')
// function pow(x,n) {
//     if(n===1) return x
//    return  x*pow(x,n-1)
// }
//
// console.log(pow(2, 3));

console.log('флаги свойств обьекта--------------------');
// let user={
//     name: 'pit',
// }
//
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user,'name',{writable:false})
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// user.name='john'
// console.log(user.name)//pit

console.log('геттер сеттер  вызываем не как метод а как свойство--------------------');
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

console.log('остаточные ...rest параметры (получаем массив из аргументов)' +
    '...spread оператор расширения (получаем аргументы из массива)-------------------')
// function sum(...args) {
// return args.reduce((acc,item)=>acc+item,0)
// }
//
// let arr1=[2,2,2]
// let arr2=[2,2,2,2,2]
//
// console.log(sum(...arr1));
// console.log(sum(...arr2));

console.log('Деструктуризация----------------------------------------------')
// let arr=[undefined,2,3,4,5,6,7,8,9,0]
// const [a='cool', ,b, ,...rest]=arr
// console.log(a,b,rest)// cool,3,[5-0]
//
// let person={
//     name: 'pit',
//     age: 32,
//     address:{
//         city: 'Moscow',
//         country: 'Russia'
//     }
// }
//
// let {
//     name: firstName,
//     age,
//     car='no car',
//     address:{
//         city:town,
//         country
//     }
// }=person
// console.log(firstName,age,car,town,country)


console.log('функция groupBy из Lodash')
// function groupBy(array, prop) {
//     let obj = {}
//     array.forEach(it => {
//         let key = prop instanceof Function ? prop(it).toString() : it[prop].toString()
//         key in obj ? obj[key].push(it) : obj[key] = [it]
//     })
//     return obj
// }
//
// groupBy([1.2, 1.3, 4.2, 5.6, 4.6], Math.floor)

console.log('глубина вложенности массива-----------------------------')
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
//
// console.log(getDeep(array))   //8

console.log('classes----------------------------------')

class Animal {
    static breath = true  // публичное статическое поле можно вызвать только для класса
    #priv = 0 //приватное свойство используется только внутри класса, нельзя обьявить в конструкторе
        [`Field${priv}`] = 'prefixed field';  //название может вычисляться
    #privMethod() {
        console.log('private')
    }


    constructor(legs, blood) {
        this.voice = 'lfskdjf' + this.#priv
        this.legs = legs
        this.blood = blood
        this.say = function () {      //метод в обьекте
            console.log('ddddddddd')
        }
    }

    jump = true  // публичное статическое поле будет в обьекте

    run(num) {     //метод записывается в __proto__
        if (this.legs) {
            console.log(`run with ${num} legs`)
        }
        this.#privMethod()
    }

    get legss() {  //обращаемся как к свойству
        return this.legs ? 'yes' : 'no'
    }

    set legss(bool) { //обращаемся как к свойству
        this.legs = bool
    }
}


let cat = new Animal(true, 'red')
console.log(cat)
cat.legss = false
console.log(cat.legss)  //no

class Dog extends Animal {
    static breath = false

    constructor(legs, isWoof) {  //дополняем конструктор
        super(legs, 'red')  //вызываем родительский конструктор
        this.isWoof = isWoof
    }

    run() {     //переопределяем метод
        super.run(4) //можем вызвать родительский метод
        console.log(`new`)

    }
}

console.log('>>>>', Dog.breath)
console.log(new Dog(true, true))
new Dog(true, true).run()


