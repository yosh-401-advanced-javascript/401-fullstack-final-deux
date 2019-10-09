import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toys: {},
      // name: '',
      // favToy: '',


    };
console.log(this.state.toys)
  }
  componentDidMount() {
    fetch('http://localhost:4000/toys')
    .then(response => response.json())
    .then(data => this.setState(console.log({toys: data})))
    console.log('dsfada', this.state.toys.data)
  }




  handleDelete = (event, _id) => {
    event.preventDefault();
    fetch('http://localhost:4000/toys/:id', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({_id}),
    })
    .then(response => response.json())
    .then(data => this.setState(console.log({toys: data})))
  };

  handleAdd = (event) => {
    event.preventDefault();
    console.log('fdsasdfsa',this.state);
    fetch('http://localhost:4000/toys', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
     {name: this.state.name, favToy: this.state.favToy}
      )
    })
    .then(response => response.json())
    .then(data => {
      this.setState((prevState) => {
        return {toys: [prevState.toys, data]}
      })
    });
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(name)
  };

  render() {
    return (
        <div>
          <h1>SANTA?! I LOVE SANTA!</h1>
          <ul>
            {Object.keys(this.state.toys).map((toy) => {
              console.log(this.state.toys)
              return <li key={toy}
              >
                {/*{(toy === 0*/}
                {/*    ? <p>TOYS!!! {toy.name} - {toy.toys}</p>*/}
                {/*    : <p>{toy.name} - {toy.toys}</p>)}*/}
                {/*<button onClick={(event) =>*/}
                {/*    this.handleDelete(event, toy._id)}>DELETE*/}
                {/*</button>*/}
              </li>
            })}
          </ul>
          <form onSubmit={this.handleAdd}>
            <input
                name='name'
                value={this.state.toys.name}
                onChange={this.handleChange}
                placeholder='ADD A NAME!'
            />
            <input
                name='favToy'
                value={this.state.toys.favToy}
                onChange={this.handleChange}
                placeholder='ADD A TOY!'
            />
            <button type='submit'>ADD</button>
          </form>
        </div>
    );
  }
}



export default App;
