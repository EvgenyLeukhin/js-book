# MobX store

In MobX store is a js-class. Create class inside **./store/someStorename.ts**.

До 6-ой версии рекомендовано использовать декораторы.

```@observable @action @computed```

* **observable** - отмечает поле как отслеживаемое 
* **observable deep** - будут отлеживаться вложенные поля
* **action** - меняет стейт
* **computed** - метод для вычисления значений

## Store with makeObservable, observable, action

```ts
import { makeObservable, observable, action, computed, autorun } from "mobx"

class Todo {
  // constructor config
  constructor(title) {
    makeObservable(this, {
      count: observable,
      finished: observable,
      toggle: action, // указываем, что это action
      double: computed, // вычисляемое из стейта значение
    });

    this.title = title; // title inside constructor
  }

  // initial state
  id = Math.random();
  count = 1;
  finished = false;

  // все методы класса будут являться экшенами
  toggle() {
    this.finished = !this.finished;
  }

  get double = () => {
    return this.count * 2;
  }
}

export default new Todo();
export const todoStore = new Todo();

// будет всегда запускатся при изменении count
autorun(() => {
  console.log(todoStore.count);
})
```

```makeObservable``` - указывает на отслеживаемые поля, если состоние поля измениться при вызове какого-ниб экшена, то произойдет перерендер компонента.

```makeAutoObservable``` - автоматический перерендер компонента при изменении любого поля.

При makeAutoObservable по умолчанию 

* все поля являются отслеживаемые @observable

* все методы @action

* все get-методы @computed

* можно убрать из tsconfig experimentalDecorators

```ts
import { makeAutoObservable } from 'mobx';

// в mobx стор это класс
class CounterStore {
  // initial state
  count = 100;
  private _count2 = 200; // приватное поле c _ (нельзя изменять readonly, best practice)

  constructor() {
    // сделать класс отслеживаемым
    // будет перерендер при изменении state
    makeAutoObservable(this);
  }

  // методы класса здесь будут являться экшенами
  // в отличие от redux состояние в mobx является изменяемым
  plus() {
    this.count = this.count + 1;
  }
  
  minus() {
    this.count = this.count - 1;
  }

  // 2 variant (pure func)
  minus = () => {
    this.count = this.count - 1;
  }

  // получить неисзменяемое значение (best practice)
  get count2 = () => {
    return this._count2;
  }
}

// экспортируем экземпляр данного класса
export default new CounterStore();
```


## Store with makeAutoObservable

```ts
import { makeAutoObservable } from "mobx";

class TodoStore {
  // initial state
  todos = [
    { id: 'TODO 1', title: 'TODO 1', completed: false },
    { id: 'TODO 2', title: 'TODO 2', completed: false },
    { id: 'TODO 3', title: 'TODO 3', completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  };

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo);
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        // добавить список
        this.todos = [...this.todos, ...json]
      })

    // runInAction(() => ...)
  }
}

export default new TodoStore();
```
