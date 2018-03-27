import React, {Component} from 'react';
import './App.css';
import Temp from './component/temp';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: ''};
    }


    handleChange = (event) => {
        let n = event.target.name;
        let v = event.target.value;
        this.setState({[n]: v});
    }


    render() {
        return (
            <div>
                <Temp/>
                <h2 className="App-header App-title">
                    Name: <input type="text" name="name"
                                 value={this.state.name}
                                 onChange={this.handleChange}/>
                    Surname: <input type="text"
                                    name="surname"
                                    value={this.state.surname}
                                    onChange={this.handleChange}/>

                    <Foo name={this.state.name}
                         surname={this.state.surname}/>
                </h2>
            </div>);
    }


}

class Foo extends Component {
    render() {
        return (
            <div><h2>{this.props.name} : {this.props.surname}</h2>

                FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO <br/>
                Barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr<br/>
            </div>
        );
    }
}


export default App; //เรียกใช้นอกคลาส