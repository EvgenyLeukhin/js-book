# Fetch

## api.js

```js
const baseURL = 'https://swapi.co/api';
export default baseURL;
...
```

## CBC with fetch

```js
...

import baseUrl from 'api.js';

class FetchPage extends Component {

  state = {
    people: [],
    loading: false,
    error: null,
  };

  // fetch data after render
  componentDidMount() { 
    // this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });

    // fetch url
    fetch(`${baseUrl}/people/`)

      // return json
      .then(res => {
        if (res.ok) { return res.json(); }
        else {
          throw new Error(`${res.status} - Couldn't fetch`),
          this.setState({ loading: false, error: true });
        }
      })

      .then(resJSON => {
        this.setState({
          people: resJSON.results,
          loading: false,
        })
      }
    )
  };

  render() {
    const { people, loading } = this.state;

    return (
      <>
        <button onClick={this.fetchData}>Fetch data</button>

        {
          loading ? <p>Loading ...</p> :
            <ul>
              {people.map((item, index) =>
                <li key={index}>{item.name}</li>
              )}
            </ul>
        }
        { error && <p>Error - Could not fetch</p> }
      </>
    );
  }
}

export default FetchPage;
```
