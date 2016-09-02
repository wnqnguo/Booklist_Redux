//state arument is not application state. 
//only the state the reducer is responsible for
// es6 syntax, if state is undefined set it to null
export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state
}