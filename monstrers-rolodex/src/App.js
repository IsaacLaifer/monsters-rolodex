import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[
        {
          name:'Linda',
          id:'12jf13',
        },
        {
          name:'Frank',
          id:'1674f13',
        },
        {
          name:'Jacky',
          id:'12jf743',
        },
        {
          name:'Andrei',
          id:'12jf184k3',
        },
      ]
  
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}> <h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;
