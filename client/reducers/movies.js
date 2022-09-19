import{ADD_MOVIES,GET_ALL_MOVIES,DELETE_MOVIES} from'../actions'

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

    default:
      return state
  }
}

export default reducer