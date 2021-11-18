import { ADD, REMOVE, RESET, ADD1, REMOVE1, ADD20, REMOVE20, ADD21, REMOVE21, ADD30, REMOVE30, ADD31, REMOVE31, ADD40, REMOVE40, ADD41, REMOVE41, ADD50, REMOVE50, ADD51, REMOVE51, RESET20, RESET30, RESET40, RESET50} from "./typeScore";

const initialState = {
    count: 0,
    count1:0,
    count2:0,
    count20:0,
    count3:0,
    count30:0,
    count4:0,
    count40:0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD:
            return{
                ...state,
                count: state.count + 1,
            }
        case REMOVE: 
            return{
                ...state,
                count: state.count -1
            }
        case RESET:
            return{
                ...state,
                count: 0,
                count1: 0,
            }
        case ADD1:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE1: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case ADD20:
            return{
                ...state,
                count2: state.count2 + 1,
                }
        case REMOVE20: 
            return{
                ...state,
                count2: state.count2 -1
                }
        case ADD21:
            return{
                ...state,
                count20: state.count20 + 1,
                }
        case REMOVE21: 
            return{
                ...state,
                count20: state.count20 -1
                }
        case RESET20:
            return{
                ...state,
                count2: 0,
                count20: 0,
            }
        case ADD30:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE30: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case ADD31:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE31: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case RESET30:
            return{
                ...state,
                count30: 0,
                count31: 0,
            }
        case ADD40:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE40: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case ADD41:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE41: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case RESET40:
            return{
                ...state,
                count40: 0,
                count41: 0,
            }
        case ADD50:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE50: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case ADD51:
            return{
                ...state,
                count1: state.count1 + 1,
                }
        case REMOVE51: 
            return{
                ...state,
                count1: state.count1 -1
                }
        case RESET50:
            return{
                ...state,
                count50: 0,
                count51: 0,
            }
        default:
            return state
    }
}

export default counterReducer