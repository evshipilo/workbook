Вот список задач, которые помогут вам глубже понять TypeScript, включая работу с типами, дженериками, утилитами и строгой типизацией:

---

### **1. Работа с дженериками**
**Задача:** Напишите функцию `mergeObjects`, которая принимает два объекта и возвращает новый объект, содержащий свойства обоих. Тип возвращаемого объекта должен быть объединением типов двух входных объектов.

```typescript
function mergeObjects<T, U>(obj1: T, obj2: U): ??? {
  return { ...obj1, ...obj2 };
}

// Пример использования:
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const merged = mergeObjects(obj1, obj2); // { name: "Alice", age: 25 }
```

---

### **2. Ограничение типов с помощью `keyof`**
**Задача:** Напишите функцию `pluck`, которая принимает массив объектов и имя поля, а возвращает массив значений этого поля.

```typescript
function pluck<T, K extends keyof T>(items: T[], key: K): ??? {
  return items.map(item => item[key]);
}

// Пример использования:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const names = pluck(people, "name"); // ["Alice", "Bob"]
const ages = pluck(people, "age"); // [25, 30]
```

---

### **3. Утилиты типов**
**Задача:** Используйте встроенные утилиты TypeScript (`Partial`, `Required`, `Readonly`, `Pick`, `Omit`) для создания новых типов. Например, напишите функцию `updateEmployee`, которая принимает объект сотрудника и частичное обновление его свойств.

```typescript
function updateEmployee(employee: IEmployee, updates: Partial<IEmployee>): IEmployee {
  return { ...employee, ...updates };
}

// Пример использования:
const employee: IEmployee = { name: "Alice", age: 25, position: "Designer" };
const updatedEmployee = updateEmployee(employee, { age: 26 }); // { name: "Alice", age: 26, position: "Designer" }
```

---

### **4. Типизация асинхронных функций**
**Задача:** Напишите функцию `fetchData`, которая принимает URL и возвращает данные в виде объекта. Тип данных должен быть параметризован с помощью дженериков.

```typescript
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

// Пример использования:
interface User {
  id: number;
  name: string;
}
const user = await fetchData<User>("https://api.example.com/user/1");
console.log(user.name); // Вывод имени пользователя
```

---

### **5. Создание условных типов**
**Задача:** Напишите условный тип `IsString<T>`, который возвращает `true` для типа `string` и `false` для всех остальных типов.

```typescript
type IsString<T> = ???;

// Пример использования:
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
type Test3 = IsString<"hello">; // true
```

---

### **6. Типизация функций обратного вызова**
**Задача:** Напишите функцию `mapWithCallback`, которая принимает массив и функцию обратного вызова. Функция обратного вызова должна быть строго типизирована.

```typescript
function mapWithCallback<T, U>(items: T[], callback: (item: T) => U): U[] {
  return items.map(callback);
}

// Пример использования:
const numbers = [1, 2, 3];
const strings = mapWithCallback(numbers, (num) => `Number: ${num}`); // ["Number: 1", "Number: 2", "Number: 3"]
```

---

### **7. Работа с неизменяемыми типами**
**Задача:** Напишите функцию `freezeObject`, которая принимает объект и возвращает его неизменяемую версию.

```typescript
function freezeObject<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// Пример использования:
const obj = { name: "Alice", age: 25 };
const frozenObj = freezeObject(obj);
// frozenObj.age = 26; // Ошибка: объект неизменяемый
```

---

### **8. Создание рекурсивных типов**
**Задача:** Напишите тип `NestedObject<T>`, который описывает объект, где значения могут быть либо типа `T`, либо вложенными объектами того же типа.

```typescript
type NestedObject<T> = ???;

// Пример использования:
type NestedString = NestedObject<string>;
const example: NestedString = {
  key1: "value1",
  key2: {
    key3: "value3",
    key4: {
      key5: "value5",
    },
  },
};
```

---

### **9. Типизация сложных структур данных**
**Задача:** Напишите тип `TreeNode<T>`, который описывает узел дерева. Каждый узел может содержать значение типа `T` и массив дочерних узлов.

```typescript
type TreeNode<T> = ???;

// Пример использования:
const tree: TreeNode<number> = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};
```

---

### **10. Создание кастомных утилит типов**
**Задача:** Напишите утилиту типа `MyPick<T, K>`, которая работает аналогично встроенному `Pick`, выбирая только указанные ключи из типа `T`.

```typescript
type MyPick<T, K extends keyof T> = ???;

// Пример использования:
interface User {
  id: number;
  name: string;
  age: number;
}
type UserPreview = MyPick<User, "id" | "name">;
// UserPreview: { id: number; name: string }
```

---

### **11. Типизация функций с перегрузкой**
**Задача:** Напишите функцию `format`, которая принимает либо строку, либо число, и возвращает строку. Если передано число, оно форматируется с двумя знаками после запятой.

```typescript
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(2);
  }
  return input;
}

// Пример использования:
console.log(format("Hello")); // "Hello"
console.log(format(123.456)); // "123.46"
```

---

### **12. Работа с типами через `infer`**
**Задача:** Напишите условный тип `ReturnType<T>`, который извлекает тип возвращаемого значения из функции.

```typescript
type MyReturnType<T> = ???;

// Пример использования:
type Test = MyReturnType<() => string>; // string
type Test2 = MyReturnType<(x: number) => boolean>; // boolean
```

---

Эти задачи охватывают широкий спектр возможностей TypeScript и помогут вам глубже понять его мощные инструменты для работы с типами.