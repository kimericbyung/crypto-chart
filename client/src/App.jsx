import React from 'react';
import axios from 'axios';
import createGraph from './createGraph'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    axios.get(this.props.btcHTML)
      .then(res => {
        this.makeGraph(res.data.bpi);
      })
  }

  makeGraph(data) {
    createGraph(Object.keys(data), Object.values(data));
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;