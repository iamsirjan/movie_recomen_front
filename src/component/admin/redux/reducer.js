
import actions from './actions';

const initialState = {
  loading: false,
  message: '',
  Details: [],
  Genre:[],
  Language:[],
  Rating:[],
  Recommend:[],
  UserRecommend:[],

  
};

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_DETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_DETAILS_SUC:
      return {
        ...state,
        loading: false,
      };
    case actions.SEND_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case actions.GET_DETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DETAILS_SUC:
      return {
        ...state,
        loading: false,
        Details: action.details,
      };
    case actions.GET_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      case actions.GET_RATING_REQ:
        return {
          ...state,
          loading: true,
        };
      case actions.GET_RATING_SUC:
        return {
          ...state,
          loading: false,
          Rating: action.rating,
        };
      case actions.GET_RATING_FAIL:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
        case actions.GET_RECOMMEND_REQ:
          return {
            ...state,
            loading: true,
          };
        case actions.GET_RECOMMEND_SUC:
          return {
            ...state,
            loading: false,
            Recommend: action.details,
          };
        case actions.GET_RECOMMEND_FAIL:
          return {
            ...state,
            loading: false,
            message: action.payload,
          };
          case actions.GET_USERRECOMMEND_REQ:
            return {
              ...state,
              loading: true,
            };
          case actions.GET_USERRECOMMEND_SUC:
            return {
              ...state,
              loading: false,
              UserRecommend: action.details,
            };
          case actions.GET_USERRECOMMEND_FAIL:
            return {
              ...state,
              loading: false,
              message: action.payload,
            };
        
        case actions.SEND_RATING_REQ:
          return {
            ...state,
            loading: true,
          };
        case actions.SEND_RATING_SUC:
          return {
            ...state,
            loading: false,
          
          };
        case actions.SEND_RATING_FAIL:
          return {
            ...state,
            loading: false,
            message: action.payload,
          };
      
      case actions.GET_GENRE_REQ:
        return {
          ...state,
          loading: true,
        };
      case actions.GET_GENRE_SUC:
        return {
          ...state,
          loading: false,
          Genre: action.genre,
        };
      case actions.GET_GENRE_FAIL:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
        case actions.GET_LANGUAGE_REQ:
          return {
            ...state,
            loading: true,
          };
        case actions.GET_LANGUAGE_SUC:
          return {
            ...state,
            loading: false,
            Language: action.language,
          };
        case actions.GET_LANGUAGE_FAIL:
          return {
            ...state,
            loading: false,
            message: action.payload,
          };
     
    case actions.DLT_DETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.DLT_DETAILS_SUC:
      return {
        ...state,
        loading: false,
        Details: state.Details.filter(
          (detail) => detail.movie_id !== action.id,
        ),
      };
    case actions.DLT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case actions.EDIT_DETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.EDIT_DETAILS_SUC:
      return {
        ...state,
        loading: false,
      };
    case actions.EDIT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default DetailsReducer;
