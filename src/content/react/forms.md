# Forms

## Controlled form (with state)

```js
...
class Controlled extends Component {
  // Controlled aproach
  state = {
    firstname: '',
    lastname: '',
  }

  handleNameChange     = e => this.setState({ name: e.target.value });
  handleLastnameChange = e => this.setState({ lastname: e.target.value });

  // shortcut
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    alert(`
      name: ${this.state.name}
      email: ${this.state.email}
      phone: ${this.state.phone}
    `);
  }
  ...
  <form
    action=""
    method="post"
    onSubmit={this.onSubmit}
  >
    <div>
      <label htmlFor="name">Enter Name</label>
      <input
        required
        id="firstname" 
        name="firstname"
        autoComplete="on"
        placeholder="Name"
        onChange={this.onChange}
        value={this.state.firstname}
      />
    </div>

    <div>
      <label htmlFor="lastname">Enter Lastname</label>
      <input
        required
        id="lastname" 
        name="lasstname"
        autoComplete="on"
        placeholder="Lastname"
        value={this.state.lastname}
        onChange={this.onChange}
      />
    </div>

    <button
      type="submit"
      onClick={this.onSubmit}
      disabled={!firstname && !lastname}
    >
      Submit
    </button>
  </form>
  ...
```

## Unontrolled form (with refs)
```js

class UncontrolledForm extends Component {

  state = { formFilled: null }

  onChange = () => {
    if (this.firstname.value && this.lastname.value) {
      this.setState({formFilled: true});
    } else {
      this.setState({formFilled: false});
    }
  };

  onSubmit = e => {
    e.preventDefault();

    const inputValues = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
    };

    alert(`
      firstname: ${inputValues.firstname}
      lastname: ${inputValues.lastname}
    `);

  };
  ...

  <form
    action=""
    method="post"
    onSubmit={this.onSubmit}
  >

    <div>
      <label htmlFor="firstname">firstname</label>
      <input
        name="firstname"
        id="firstname"
        placeholder="Enter your firstname ..."
        required
        autoComplete="on"
        onChange={this.onChange}
        ref={ el => this.firstname = el }
      />
    </div>

    <div>
      <label htmlFor="lastname">lastname</label>
      <input
        name="lastname"
        id="lastname"
        required
        autoComplete="on"
        onChange={this.onChange}
        ref={ el => this.lastname = el }
        placeholder="Enter your lastname ..."
      />
    </div>

    <input
      type="submit"
      value="Send contacts"
      disabled={!firstname && !lastname}
    />
  </form>

  ...
```
