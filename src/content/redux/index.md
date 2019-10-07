# Redux

[Official Docs](https://redux.js.org/)

![Redux schema](https://raw.githubusercontent.com/EvgenyLeukhin/js-book/master/src/content/redux/redux.png)

A predictable state container for JavaScript apps.

Суть Redux - есть глобальный state + функции actions, которые меняют этот state (state + actions = store). Это всё находится в одном месте (reducer). Доступ к store компоненту предоставляет функция connect. Все данные из store можно прикручивать к props компонентов через методы mapStateToProps и mapDispatchToProps.

**Redux** - единый глобальный state всего приложения + Reducer. State в Redux все компоненты могут только читать, изменять его нельзя.

**Reducer** - (Функция) вся логика по обновлению или изменению state. Reducer обновляет state. Реагирует на actions.

**Actions** - (Объекты) События (действия), которые могут создаваться в компонентах, для передачи в Reducer, чтобы обновить state.

**Store** - (Объект) Центральный объект Redux. Обёртка Reducer и глобального state. Изолирование всего Redux от остального кода.

**Dispatch** - (Функция) Передача actions в Store, чтобы обновить state

**mapStateToProps** - (Функция), которая вызывается из компонента, возвращает дынные из store (пробрасывает props в компонент). Какие данные внести компоненту в props из store.

**mapDispatchToProps** - ... какие actions внести компоненту из reducers в props из store.
