# StimulusJs

```git clone https://github.com/stimulusjs/stimulus-starter.git```

* [StimulusJs official docs](https://stimulusjs.org/)
* [StimulusJs official repo](https://github.com/stimulusjs/stimulus)
* [StimulusJs official starter](https://github.com/stimulusjs/stimulus-starter.git)

Framework for static html pages created by Ruby on Rails funs. Work by data-attributes.

Js-Controllers -> Html with data-attributes -> Targets -> Actions

## Html-file

### Add controller

```html
<div data-controller="home">
  <h1>Home page</h1>
  <p>Home page description</p>
  <button>Click me</button>
</div>
```

### Add targets

```html
<div data-controller="home">
  <h1 data-target="home.title">Home page</h1>
  <p data-target="home.description">Home page description</p>
  <button>Click me</button>
</div>
```

### Add action

```html
<div data-controller="home">
  <h1 data-target="home.title">Home page</h1>
  <p data-target="home.description">Home page description</p>
  <button data-action="click->home#buttonClickHandle">Click me</button>
</div>
```

## Js-file (controller)

### home-controller.js

```js
// import controller
import { Controller } from 'stimulus';

export default class extends Controller {

  // lifecycle
  connect() {
    console.log('This text will be always appear');
  }

  // write target which was creater in html file
  static targets = [ 'title', 'description', 'button' ];

  // write the action with same naming like in html file
  buttonClickHandle(e) {
    console.log(e);
    this.titleTarget.textContent = 'New home page title';
    this.titleDescription.textContent = 'New home page description';
  }
}
```

## Lifecycle

### Initialize

Once, when the controller is first instantiated. For setting up (save state)

```js
initialize() {
  console.log('Initial state');
}
```

### Connect

**connect()** method, which Stimulus calls each time a controller is connected to the document.

```js
connect() {
  console.log('This text will be always appear');
  console.log(this.element);
}
```

### Disconnect

Anytime the controller is disconnected from the DOM

```js
disconnect() {
  ...
}
```

## Get and set ???

### Get

Getter methods

```js
get name() {
  return this.nameTarget.value
}
```

### Set
