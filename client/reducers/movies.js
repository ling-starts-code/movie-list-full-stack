import{ADD_MOVIES,GET_ALL_MOVIES,DELETE_MOVIES,UPDATE_MOVIES} from'../actions'

const initialState=[]
const reducer = (state = initialState, action) =>{
  const {type, payload} = action
  switch(type) {
    case ADD_MOVIES:
      return [...state,payload]
    case GET_ALL_MOVIES:
      return payload
    case DELETE_MOVIES:
      return state.filter((movie)=>{return movie.id!==payload})
    case UPDATE_MOVIES:
      return state.map((movie)=>{
        if (movie.id === payload.id){
          return payload.updatedMovie
        } else return movie
      })
      
    default:
      return state
  }
}

export default reducer