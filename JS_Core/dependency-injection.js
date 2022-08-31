// Внедрение зависимостей — это шаблон, который помогает избежать жестко запрограммированных зависимостей в модулях,
//  давая вызывающей стороне возможность изменять их и предоставлять свои собственные, если они хотят, в одном месте.
// Давайте разберемся для чего он нужен на примере

// class Tires {
//   constructor(size, vendor) {
//     this.size = size;
//     this.vendor = vendor;
//   }
// }

// class Car {
//   constructor(name, size, vendor) {
//     this.name = name;
//     this.tires = new Tires(size, vendor);
//   }
// }

// const someCar1 = new Car('Volvo', 19, 'Pirelli');

// Давайте рассмотрим этот пример, классу Car требуется инстанс класса Tires. Мы можем сказать что Car зависит от Tires.
// Как мы видим - этот пример рабочий, в конструкторе Car успешно инициализируется поле tires инстансом класса Tires.
// Однако такой подход вызывает проблеы.
// Давайте мы изменим имплементацию класса Tires (например добавим параметр конструктора)

// class Tires {
//   constructor(size, vendor, season) {
//     this.size = size;
//     this.vendor = vendor;
//     this.season = season;
//   }
// }

// class Car {
//   constructor(name, size, vendor, season) {
//     this.name = name;
//     this.tires = new Tires(size, vendor, season);
//   }
// }

// const someCar2 = new Car('Volvo', 19, 'Pirelli', 'summer');

//  Мы видим, теперь чтобы правильно получить инстанс класса Tires в Car нам нужно внести изменения в класс Car.
//  При изменениях в классе Tires мы должны найти все места его использования в других классах и внести изменения, что очень не удобно.
//  К тому же теперь чтобы получить инстанс класса Car нам нужно передать уже не 3 а 4 параметра. А если представить
//  что и класс Car может использоваться в более высокоуровневых модулях - то изменения в одном классе могут вызвать
//  лавинообразную последовательность изменений.
//  Так же возникают сложности с тестированием Car, подменить реализацию Tires не представляется возможным,
//  ведь он прямо жестко закодирован в месте своего использования.
//  Получается что один класс зависит от
//  имплементации другого, что нарушает один из принципов SOLID - принцип инверсии зависимостей (Dependency Inversion Principle, DIP)
//  Высокоуровневые модули не должны зависеть от низкоуровневых; оба типа должны зависеть от абстракций.

// Чтобы решить эти проблему давайте передадим нужные зависимости в параметры конструктора класса Car

// class Tires {
//   constructor(size, vendor, season) {
//     this.size = size;
//     this.vendor = vendor;
//     this.season = season;
//   }
// }

// class Car {
//   constructor(name, tires) {
//     this.name = name;
//     this.tires = tires;
//   }
// }

// const someCar3 = new Car('Volvo', new Tires(19, 'Pirelli', 'summer'));

// Мы передали зависимость (инстанс класса Tires) как аргумент конструктора класса Car
// теперь имплементация класса Car не зависит от Tires
// Такой паттерн называется Dependency Injection.

// теперь давайте подумаем, достаточно ли этого подхода?
// несмотря на всю его простоту, такой подход в большом приложении может стать не масштабируемым,
// Представим что у модуля, может быть много зависимостей, у которых могут быть свои зависимости,
// тогда проверить наличие зависимостей, соответствие их типам, правильно и в нужном порядке передать
//  зависимости, становится не тривиальной задачей, сложность которой растет по мере усложнения проекта.
// Так же если одна из зависимостей меняется - то необходимо заменить её везде где она передается.
// Рассмотрим такой пример:

class StockService {
  getStock() {
    // fetch from backend
    return {
      motors: { v8: 10, v6: 5 },
      tires: { pirelli: 20, toyo: 10 },
    };
  }
}

class TransferService {
  getTransferAbility() {
    // fetch from backend
    return true;
  }
}

class TiresService {
  constructor(stockService, transferService, tiresVendor) {
    this.stockService = stockService;
    this.transferService = transferService;
    this.tiresVendor = tiresVendor;
  }
  isAllowSetTires() {
    const tiresAvailability =
      this.stockService.getStock().tires[this.tiresVendor] > 4;

    const transferAbility = this.transferService.getTransferAbility();

    return tiresAvailability && transferAbility;
  }
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Car {
  constructor(carVendor, tiresService, person) {
    this.carVendor = carVendor;
    this.tires = tiresService?.isAllowSetTires()
      ? tiresService.tiresVendor
      : 'no tires';
    this.person = person;
  }
}

// теперь для получения инстанса класса Car нам нужно вручную создать инстансы всех его зависимостей, которые в свою очередь
// также имеют зависимости

const stockService = new StockService();
const transferService = new TransferService();
const tiresService = new TiresService(stockService, transferService, 'pirelli');
const person = new Person('Bill', 'Russel');

const someCar = new Car('Volvo', tiresService, person);
console.log(someCar);

// теперь представим что мы создаем инстансы Car во многих местах в приложении и нам понадобилось изменить
// одну из его зависимостей, тогда мы должны найти все эти места и исправить зависимости вручную.
// Было бы не плохо если бы какая-то сущность сделала это за нас, создала инстансы всех зависимостей
// и инжектировала их.
// Для решения этой проблемы воспользуемся паттерном Inversion of Control (IoC) - суть которого в том, что разработчик часть своих полномочий отдает на
//  откуп внешней программой сущности — функции, библиотеке или фреймворку. Касательно DI, IoC заключается в том, что мы просто указываем зависимости
//  при  описании класса. А созданием инстансов этих зависимостей управляет какой-то внешний код, например контейнер внедрения зависимостей
//   Dependency Injection Container (DIC) при инициализации инстанса основного класса.
// Давайте создадим простейший Dependency Injection Container

class Driver {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setDriverLicense(id) {
    this.driverLicense = id;
  }
}

class DIC {
  constructor() {
    this.dependencies = {};
    this.arguments = {};
  }

  registerDependency(name, dependency) {
    this.dependencies[name] = dependency;
  }

  setArgument(name, argument) {
    this.arguments[name] = argument;
  }

  get(name) {
    if (!this.arguments[name]) {
      const dependency = this.dependencies[name];
      if (dependency) {
        this.arguments[name] = this.getInstance(dependency);
      } else {
        throw new Error('No module found for: ' + name);
      }
    }
    return this.arguments[name];
  }

  resetArguments() {
    this.arguments = {};
  }

  getConstructorParams(someClass) {
    return someClass
      .toString()
      ?.split(/constructor\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
      ?.split(',')
      ?.map((item) => item.trim());
  }

  getInstance(dependency) {
    const fnArgs =
      this.getConstructorParams(dependency)?.map((arg) => this.get(arg)) || [];
    return new dependency(...fnArgs);
  }
}

// Давайте разберемся как это работает этот Dependency Injection Container.
//  Здесь используются понятия 'зависимости' - это классы, инстансы которых нужно создать и 
//  'аргументы' - это инстансы классов, обекты или примитивы который мы передаем в качестве аргументов в конструктор.
// Dependency Injection Container хранит зависимости и аргументы  в отдельных обьектах, где ключ это имя парамерта конструктора а значение 
// это класс (для зависимостей) и обьект или примитив (для аргументов). Для начала при помощи метода registerDependency мы передаем в
//  DIC все зависимости а при помощи метода setArgument передаем все аргументы. Затем вызываем метод get('car') и передаем в него имя класса
//  инстанс которого мы хотим создать. В нашем случае у класса Car имя 'car'. Далее вызывается метод getInstance(Car) который получает
//  имена параметров конструктора класса Car и для каждого из них снова рекурсивно вызывается метод get(parametrName), если имя параметра соответствует
//  аргументу, то метод возвращает эначение этого аргумента. Если имя параметра соответствует зависимости, то снова вызывается метод
// getInstance(dependency) который создает инстанс зависимости и передает его в качестве аргумента.


// создадим инстанс Dependency Injection Container и зарегистрируем в нем все зависимости, которые
// требуют создания инстансов, они будут постоянно храниться в контейнере и не требуют изменения
const dic = new DIC();
dic.registerDependency('stockService', StockService);
dic.registerDependency('transferService', TransferService);
dic.registerDependency('tiresService', TiresService);
dic.registerDependency('person', Driver);
dic.registerDependency('car', Car);

// теперь в любом месте в коде чтобы получить инстанс Car
//  передадим в Dependency Injection Container необходимые аргументы

dic.setArgument('carVendor', 'Ferrari');
dic.setArgument('tiresVendor', 'toyo');
dic.setArgument('firstName', 'John');
dic.setArgument('lastName', 'Stone');
const someNewCar5 = dic.get('car');

// результат будет тот же что и при ручной передаче зависимостей
// Чтобы получить другой автомобиль нужно только сбросить аргументы и передать в DIC новые, зависимости остаются те же

dic.resetArguments();
dic.setArgument('carVendor', 'Volvo');
dic.setArgument('tiresVendor', 'pirelli');
dic.setArgument('firstName', 'Mike');
dic.setArgument('lastName', 'Miller');
const someNewCar6 = dic.get('car');

console.log(someNewCar5);

// теперь давайте поменяем зависимость, вместо класса Person используем класс Driver
// с помощью DIC это сделать очень просто, на этапе регистрайии зависимостей вместо dic.registerDependency('person', Person); 
//  указать dic.registerDependency('person', Driver);
// при этом все cars созданные в автоматически получат новую зависимость. 

someNewCar6.person.setDriverLicense(123);
console.log(someNewCar6.person.driverLicense);
