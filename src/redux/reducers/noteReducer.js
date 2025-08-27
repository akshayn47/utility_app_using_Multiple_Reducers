import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";


const initialState = {
    notes:[{text:"loremipsum fds fds fds fdsf dsfds fds", createdOn: new Date()},{text:"alwar ftyu gfh hg fg gfs", createdOn: new Date()}]

}

export function noteReducer(state=initialState,action){

    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes:[
                    ...state.notes, 
                    {
                    text: action.text,
                    createdOn: new Date()
                    }
                ]
            }
        case DELETE_NOTE:
            // state.notes.splice(action.index.1);
            return {
                ...state,
                notes: state.notes.filter((note,i)=>i != action.index)
            }

        default:
            return state;

    }
}