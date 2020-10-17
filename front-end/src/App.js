import React,{Component} from 'react';
import './App.css';
import FirstComponent, {SecondComponent} from "./components/FirstComponent";





class App extends Component{
    render() {
        return (
            <div className="App">
                hola mundo
                <FirstComponent/>
                <SecondComponent/>
            </div>
        );
    }
}


export default App;
