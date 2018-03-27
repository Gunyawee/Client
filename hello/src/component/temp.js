import React, {Component} from 'report';
import '../App.css'

class temp extends Component {
    render() {

        return (
            <div>
                <h2 className="App-header">Temperature</h2>
                <input type="text" name="celsius"
                        value={this.state.celsius}
                         onChange={this.handleCelsius}/>
            </div>

        );
    }

}

export default temp;