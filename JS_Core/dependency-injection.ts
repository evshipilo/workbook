import {Container, token} from 'brandi';
import { injected } from 'brandi';

interface IUser {
	name: string;
}

class User implements IUser{
	public name: string;

	constructor() {
		this.name = 'John';
	}
}

console.log((new User).name)

// TODO No DI класс UserService1 привязан к конкретному классу User. В этом варианте имеет место "жесткая" зависимость  от реализации т.е.
//  зависимость от инстанса конкретного класса. Принцип инверсии зависимостей (Dependency Inversion Principle, DIP) - Высокоуровневые модули не
//  должны зависеть от низкоуровневых; оба типа  должны зависеть от абстракций. Абстракции не должны зависеть от деталей, детали должны зависеть
//  от абстракций.

class UserService1 {
	public user: IUser

	constructor() {
		this.user = new User();
	}

	isAdmin = () => this.user.name === 'John'
}
const UserService1Instance = new UserService1();
console.log(UserService1Instance.isAdmin())

// TODO DI в двух словах DI это передача обектов от которых зависит наш класс в качестве параметров конструктора этого класса. В конструктор
//  UserService2 теперь можно передавать инстансы разных классов но реализующие один интерфейс. В этом варианте имеет место  "мягкая" зависимость
//  от абстракции — интерфейса. также это удобно для тестирования. Но не всегда удобно передавать зависимости вручную при создании инстанса класса
//  особенно если их много и они имеют собственные зависимости.

class UserService2 {
	public user: IUser

	constructor(user: IUser) {
		this.user = user;
	}

	isAdmin = () => this.user.name === 'John'
}
const UserService2Instance = new UserService2(new User());
console.log(UserService2Instance.isAdmin())

// TODO Automatic Injections. Применим паттерн Inversion of Control (IoC) - суть которого в том, что разработчик часть своих полномочий отдает на
//  откуп внешней программой сущности — функции, библиотеке или фреймворку. Касательно DI, IoC заключается в том, что мы просто указываем зависимости
//  при  описании класса. А созданием инстансов этих зависимостей управляет какой-то внешний код (например контейнер внедрения зависимостей
//  Brandi), при инициализации инстанса основного класса.

class UserService3 {

	constructor(private user: IUser) {}

	isAdmin = () => this.user.name === 'John'
}

// после компиляции в JavaScript, в нашем коде не будет интерфейсов и типов. Брэнди использует токены для привязки зависимостей к их реализациям во
// время выполнения JavaScript.
// Поскольку токены являются типизированными, невозможно внедрить зависимость с другим интерфейсом, это вызовет ошибку во время компиляции
const TOKENS = {
	user: token<IUser>('user'),
	userService: token<UserService3>('userService'),
};

const container = new Container()
// конфигурируем контейнер
container
	.bind(TOKENS.user)
	.toInstance(User) /* ← Binds the token to an instance можем легко менять реализацию поменяв User на другой класс типа IUser */
	.inTransientScope();

container
	.bind(TOKENS.userService)
	.toInstance(UserService3) /* ← Binds the token to an instance */
	.inTransientScope(); // новый экземпляр будет создаваться каждый раз, когда он будет получен из контейнера;

//	Мы используем функцию injected, чтобы указать, по какому токену следует внедрить зависимость.
injected(UserService3, TOKENS.user);

const userServiceInstance = container.get(TOKENS.userService)
	console.log(userServiceInstance.isAdmin())



function filterBy<T, P extends keyof T>(input: T[], propName: P, propValue: T[P]): T[] {
	return input.filter((item) => item[propName] === propValue);
}

// что должно получиться
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
	{ name: "Bob", age: 27, position: "Designer" }
];

console.log(filterBy(employees, "position", "Programmer")) // вернёт IEmployee[]
console.log(filterBy(employees, "surname", "Cook")) // ошибка, тип IEmployee не содержит поле 'surname'
console.log(filterBy(employees, "position", "Tester")) // ошибка, поле 'position' не может содержать значение

function fn(x: boolean): void
// Неправильный тип аргумента
function fn(x: string): void
// This overload signature is not compatible with its implementation signature.
// Данная сигнатура перегрузки не совместима с сигнатурой ее реализации
function fn(x: boolean | string) {}



