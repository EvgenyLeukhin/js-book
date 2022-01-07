# MobX use store

Чтобы подключить стор нужно обернуть компонент методом **observer**.

Так как сторы это классы, то нельзя деструктурировать поля, ввсегда нужно строго прописывать **storeName.fieldName**.

При мапинге массивов для MobX важно, чтобы ключи были уникальные id, не индексы массива.

```tsx
// import some stores
import counterStore from './store/counterStore';
import todoStore from './store/todoStore';

// import observer method
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <div className="App">
      <h2>>Use store state</h2>
      <p>{counterStore.count}</p>
      <ul>
      {todoStore.todos.map(todo => {
        return (
          <li key={todo.id}>{todo.title}</li>
        );
      })}
      </ul>

      <h2>>Use store actions</h2>
      <div className="App-controls">
        <span onClick={() => counterStore.plus()}>+</span>
        <span onClick={() => counterStore.minus()}>-</span>
        <span onClick={() => todoStore.fetchTodo()}>fetch</span>
      </div>
    </div>
  );
});

export default App;
```
