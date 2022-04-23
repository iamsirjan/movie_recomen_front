
import actions from './actions';

const initialState = {
  loading: false,
  message: '',
  user:[],
  
  
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_REGISTERDETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_REGISTERDETAILS_SUC:
      return {
        ...state,
        loading: false,
      };
    case actions.SEND_REGISTERDETAILS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      case actions.GET_REGISTERDETAILS_REQ:
        return {
          ...state,
          loading: true,
        };
      case actions.GET_REGISTERDETAILS_SUC:
        return {
          ...state,
          loading: false,
          user: action.details,
        };
      case actions.GET_REGISTERDETAILS_FAIL:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
    
    default:
      return {
        ...state,
      };
  }
};

export default RegisterReducer;
