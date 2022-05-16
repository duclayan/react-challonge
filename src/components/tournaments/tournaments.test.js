import React from 'react';
import TournamentColumn from "./tournaments";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

const fs = require('fs');

import { render } from '@testing-library/react'

// it("")
// beforeAll(async() => {
//   path = fs.realpathSync('/tournament');
//   await window.ongoingprotocol()
// })

// test("renders tournament link", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<TournamentColumn/>, div)
// });

it ("renders component correctly", () =>{
  const {getByTestId} = render(<TournamentColumn></TournamentColumn>)
  getByTestId('render-tournaments-table')
})