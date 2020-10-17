import React,{Component} from 'react';
import './App.css';

class FirstComponet extends React.Component {
    render() {
        return (
            <div className="firstComponent">
                First component
            </div>
        );
    }
}

const SecondComponet = () =>{

    return (
        <div className="secondComponetn">
            Second component
        </div>
    );

}


class App extends Component{
    render() {
        return (
            <div className="App">
                <FirstComponet/>
                <SecondComponet/>
            </div>
        );
    }
}


export default App;
