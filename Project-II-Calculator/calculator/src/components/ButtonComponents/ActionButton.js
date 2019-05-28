import React from 'react';
import './Button.css';

export default function ActionButton() {
  return (
    <div className="action-button">
      <table>
        <tbody>
          <tr>
            <td id ="divide">÷</td>
          </tr>
          <tr>
            <td id ="multiply">X</td>
          </tr>
          <tr>
            <td id ="minus">-</td>
          </tr>
          <tr>
            <td id ="add">+</td>
          </tr>
          <tr>
            <td id ="equals">=</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
};
