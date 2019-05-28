import React from 'react';
import './Button.css';

export default function NumberButton() {
  return (
    <div className = "number-buttons">
        <table>
          <tbody>
          <tr>
            <td colSpan='3'>Clear</td>
          </tr>
          <tr>
            <td id ="nine">9</td>
            <td id ="eight">8</td>
            <td id ="seven">7</td>
          </tr>
          <tr>
            <td id ="six">6</td>
            <td id ="five">5</td>
            <td id ="four">4</td>
          </tr>
          <tr>
            <td id ="three">3</td>
            <td id ="two">2</td>
            <td id ="one">1</td>
          </tr>
          <tr>
            <td colSpan="3" id ="zero">0</td>
          </tr>
        </tbody>
        </table>
    </div>
  )
}
