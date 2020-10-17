import React from "react";



export default class FirstComponent extends React.Component {
    render() {
        return (
            <div className="firstComponent">
                First component
            </div>
        );
    }
}



export const SecondComponent = () =>{

    return (
        <div className="SecondComponent">
            Second component
        </div>
    );

}
