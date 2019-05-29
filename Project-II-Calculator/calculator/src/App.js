import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

export default class App extends Component {
    render() {
        return (
            <div className = "App">
              <CalculatorDisplay />
              <ButtonContainer />
            </div>
        )
    }
}
