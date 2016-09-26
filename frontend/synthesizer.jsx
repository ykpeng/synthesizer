import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import Note from './util/note';

document.addEventListener("DOMContentLoaded", () => {
  window.Note = Note;
  ReactDOM.render(<div>Hi</div>, document.getElementById("root"));
})
