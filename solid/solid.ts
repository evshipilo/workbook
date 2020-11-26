
//     SOLID:
//https://habr.com/ru/company/ruvds/blog/426413/
// S: Single Responsibility Principle (Принцип единственной ответственности).
// ответственность - причина изменения, у класса и модуля должна быть единственная причина для изменения.
// стараться разделять компоненты, изменения в которых вызывают различные причины


//  -------wrong
// class Animal {
//     constructor(name: string){}
//     getAnimalName(){}
//     saveAnimal(animal: Animal){}
// }

// ------ok
// class Animal{
//     constructor(name: string) {
//     }
//     getAnimalName(){}
// }
// class AnimalDB{
//     getAnimal(a: Animal){}
//     saveAnimal(a: Animal){}
// }

// O: Open-Closed Principle (Принцип открытости-закрытости).
// Программные сущности (классы, модули, функции) должны быть открыты для расширения, но не для модификации
//Изменения в программе должны происходить при написание нового кода, а не модификации старого.

// interface Animal{
//     name: string
// }
//
// class Animal {
//     constructor(name: string){ }
//     getAnimalName() { }
// }
//
// const animals: Array<Animal> = [
//     new Animal('lion'),
//     new Animal('mouse')
// ];
// function AnimalSound(a: Array<Animal>) {
//     for(let i = 0; i <= a.length; i++) {
//         if(a[i].name == 'lion')
//             return 'roar';
//         if(a[i].name == 'mouse')
//             return 'squeak';
//     }
// }
// AnimalSound(animals);
// при добавлении новых животных придется менять функцию AnimalSound


// class Animal {
//     makeSound(){};
//     //...
// }
// class Lion extends Animal {
//     makeSound() {
//         return 'roar';
//     }
// }
//
// class Snake extends Animal {
//     makeSound() {
//         return 'hiss';
//     }
// }
//
// const animals: Array<Animal> = [
//     new Snake(),
//     new Lion()
// ];
//
// function AnimalSound(a: Array<Animal>) {
//     for(let i = 0; i <= a.length; i++) {
//         a[i].makeSound();
//     }
// }
// AnimalSound(animals);

// L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).
// классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не
// нарушая работу программы. Если оказывается, что в коде проверяется тип класса,
// значит принцип подстановки нарушается.

//wrong
// function AnimalLegCount(a: Array<Animal>) {
//     for(let i = 0; i <= a.length; i++) {
//         if( a[i] instanceof Lion)
//             return LionLegCount(a[i]);
//         if( a[i] instanceof  Mouse)
//             return MouseLegCount(a[i]);
//         if( a[i] instanceof  Snake)
//             return SnakeLegCount(a[i]);
//     }
// }
// AnimalLegCount(animals);

//ok
// class Animal {
//     //...
//     LegCount(){};
// }
//
// class Lion extends Animal{
//     //...
//     LegCount() {
//         return 4
//     }
// }
//
// function AnimalLegCount(a: Array<Animal>) {
//     for(let i = 0; i <= a.length; i++) {
//         a[i].LegCount();
//     }
// }
// AnimalLegCount(animals);


// I: Interface Segregation Principle (Принцип разделения интерфейса).
// Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента.
// Клиенты не должны зависеть от интерфейсов, которые они не используют.

//wrong
// interface Shape {
//     drawCircle();
//     drawSquare();
//     drawRectangle();
// }
//
// class Circle implements Shape {
//     drawCircle(){
//         //...
//     }
//     drawSquare(){
//         //...
//     }
//     drawRectangle(){
//         //...
//     }
// }

//ok
// interface Shape {
//     draw();
// }
// interface ICircle {
//     drawCircle();
// }
// interface ISquare {
//     drawSquare();
// }
//
// class Circle implements ICircle {
//     drawCircle() {
//         //...
//     }
// }
// class Square implements ISquare {
//     drawSquare() {
//         //...
//     }
// }
//
// class CustomShape implements Shape {
//     draw(){
//         //...
//     }
// }

// D: Dependency Inversion Principle (Принцип инверсии зависимостей).
// Модули верхних уровней не должны зависеть от модулей нижних уровней.
// Оба типа модулей должны зависеть от абстракций.
// Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
