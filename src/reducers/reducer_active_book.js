// State argument is NOT application state, only the state
// This reducer is responsable for
export default function( state = null, action ) {
  switch( action.type ) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}