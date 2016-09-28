import { KEY_PRESSED,
         KEY_RELEASED
       } from '../actions/note_actions';

import { NOTE_NAMES } from '../util/tones';

const notes = (state = [], action) => {
  const validNote = NOTE_NAMES.includes(action.key);
  const idx = state.indexOf(action.key);

  switch (action.type) {
    case KEY_PRESSED:
      if (validNote && idx === -1) {
        return [...state, action.key];
      } else {
        return state;
      }
      break;
    case KEY_RELEASED:
      if (validNote && idx !== -1) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      } else {
        return state;
      }
      break;
    default:
      return state;
  }
}

export default notes;
