# DOM

Global object with abstruction of html elements. Includes all html tags & and methods with them.

```js
document;
document.documentElement;;   // всё, что лежит в <html>
document.body;               // всё, что лежит в <body>
document.all;                // все элементы (*)
document.forms;              // все формы
document.images;             // все изображения
document.links;              // все ссылки
document.scripts;            // все скрипты
document.stylesheets;        // все стили
```

Вставляет html-разметку или текст туда, смотря куда подключен скрипт

```js
document.write('<p>Hello, World!</p>');
```

## BOM

Browser object model

Window is a root of everything. По умолчанию стоит у методов alert, prompt, confirm

```js
window
console.log()                // info, warn, error
alert(), prompt(), confirm() // window methods
screen
location                     // .href
history
cokkies
localStorage
Date, time
```

## DOM-selectors

```js
// most used
document.querySelector('.some-class');
document.querySelectorAll('.some-class'); // return NodeList

// old-school
document.getElementById('some-id');
document.getElementByName('some-id');
document.getElementsByClassName('some-class');
document.getElementsByTagName('p');
```

## ClassList

```js
el.classList.add('some-class');
el.classList.remove('some-class');
el.classList.toggle('some-class');
el.classList.contains('some-class');
```

## Attributes

```js
el.setAttribute('style', 'color: red;');
el.hasAttribute('style');    // check, return bool
el.getAttribute('style');    // get value of this attribute
el.removeAttribute('style'); // remove attribute
el.className('some-class');  // add class
el.title('title text');      // create title attribute
el.hidden = true;            // add hidden attribute
el.dataset.filter = 'some';  // change some data attribute

// style
el.style.color = 'red';
el.style.backgroundColor = 'red';
el.style.fontSize = '20px';
```

## DOM-family

NodeList - перебираемый объект-псевдомассив :(. Включает пробелы, как отдельные элементы

DOM-collection - перебираемый объект-псевдомассив без пробелов. Возвращает только разметку.

```js
// parent
el.parentNode || el.parentElement;  // equal

// sublinks
el.previousSibling;
el.nextSibling;

// children
el.childNodes; // NodeList :(
el.children;   // HTML-Collection )
el.children[0] || el.childNodes[0]; // equal
el.firstElementChild;
el.lastElementChild;

el.matches('p');           // check selector, return bool
el.closest('.some-class'); // find nearest element
el.contains(someElement2); // return bool
```

## createElement

```js
const el = document.createElement('div');
// присваиваем класс
el.className = 'class-1 class-2';

// и внутреннюю разметку
el.innerHTML = '<b>New text</b>';
```

## Inject html

```js
// Вставить нового потомка в конец родителя
parentElement.appendChild(newer);

// Замена одного потомка на другой
parentElement.replaceChild(newer, older);

// Удаление прямого потомка
parentElement.removeChild(childElement);

// вставить перед определенным потомком
// второй арг. функции - перед каким элементом вставлять
el.insertBefore(newElement, el.children[0]);

// если указать null, то сработает как appendChild
el.insertBefore(newElement, null);

// new Image
const someImg = new Image();
someImg.src = 'img/some-img.jpg';
someImg.alt = 'some alt text';
```


## Change html

```js
// change inner layout
someElement.innerHTML = '<p>Something<p>';

// change all layout
someElement.outerHTML = '<p>Something<p>';

// only text, html as string
someElement.textContent = 'Some text';
```
