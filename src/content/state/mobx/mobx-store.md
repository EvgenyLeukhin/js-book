# MobX store

In MobX store is a js-class. Create class inside **./store/someStorename.ts**

* **observable** - отмечает поле как отслеживаемое 
* **observable deep** - будут отлеживаться вложенные поля
* **action** - меняет стейт
* **computed** - метод для вычисления значений

## Store with makeObservable, observable, action

```ts
import { makeObservable, observable, action } from "mobx"

class Todo {
  // initial state
  id = Math.random();
  title = '';
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action, // указываем, что это action
    });

    this.title = title; // title inside constructor
  }

  // все методы класса будут являться экшенами
  toggle() {
    this.finished = !this.finished;
  }
}

export default new Todo();
```

```makeObservable``` - указывает на отслеживаемые поля, если состоние поля измениться при вызове какого-ниб экшена, то произойдет перерендер компонента.

```makeAutoObservable``` - автоматический перерендер компонента при изменении любого поля.

```ts
import { makeAutoObservable } from 'mobx';

// в mobx стор это класс
class CounterStore {
  // initial state
  count = 100;

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
  }
}

export default new TodoStore();
```
