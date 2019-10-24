import { PLUS, MINUS } from './types.js';
import initialState from './initialState.json';

// reducer отдаёт объект state
const homeReducer = (state = initialState, action) => {
  // Проверка типа у action (state измениться, если тип совпадёт)
  switch (action.type) {
    case PLUS: return { ...state, counter: state.counter + 1 }; // ++state.counter
    case MINUS: return { ...state, counter: state.counter - 1 }; // --state.counter

    default: return state;
  }
};

export default homeReducer;
