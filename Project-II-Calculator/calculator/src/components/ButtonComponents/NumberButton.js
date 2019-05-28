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
            <td>9</td>
            <td>8</td>
            <td>7</td>
          </tr>
          <tr>
            <td>6</td>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td colSpan="3">0</td>
          </tr>
        </tbody>
        </table>
    </div>
  )
}
