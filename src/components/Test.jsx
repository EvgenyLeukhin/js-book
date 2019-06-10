import React, { Component } from 'react';


class Test extends Component {
  state = {
    people: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });

    // fetch url
    fetch(`https://swapi.co/api/people/`)

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
        });
      }
      );
  };

  render() {
    const { people, loading, error } = this.state;
    return (
      <div>
        <button onClick={this.fetchData}>Fetch data</button>

        {
          loading ? <p>Loading ...</p> :
            <ul>
              {people.map(i =>
                <li key={i.id}>{i.name}</li>
              )}
            </ul>
        }
        { error && <p>Error - Could not fetch</p> }
      </div>
    );
  }
}

export default Test;

