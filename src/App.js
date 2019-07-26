import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3002/list1';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
        let items = JSON.parse(xhr.responseText).items;
        console.log(items);
        this.setStete = {
          items: items
        }
      }
    }
    xhr.open('GET', endpoint);
    xhr.send();
  }

  render() {
    const {items} = this.state;
    return (
      <ul>
        {items.map(item => (
          <li key={item.name}>
            {item.name} : {item.num}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
