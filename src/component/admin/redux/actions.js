const entities = '[DETAILS]';

const actions = {
  SEND_DETAILS_REQ: `${entities} SEND_DETAILS_REQ`,
  SEND_DETAILS_SUC: `${entities} SEND_DETAILS_SUC`,
  SEND_DETAILS_FAIL: `${entities} SEND_DETAILS_FAIL`,

  GET_DETAILS_REQ: `${entities} GET_DETAILS_REQ`,
  GET_DETAILS_SUC: `${entities} GET_DETAILS_SUC`,
  GET_DETAILS_FAIL: `${entities} GET_DETAILS_FAIL`,

  GET_GENRE_REQ: `${entities} GET_GENRE_REQ`,
  GET_GENRE_SUC: `${entities} GET_GENRE_SUC`,
  GET_GENRE_FAIL: `${entities} GET_GENRE_FAIL`,

  GET_RATING_REQ: `${entities} GET_RATING_REQ`,
  GET_RATING_SUC: `${entities} GET_RATING_SUC`,
  GET_RATING_FAIL: `${entities} GET_RATING_FAIL`,


  SEND_RATING_REQ: `${entities} GET_SEND_REQ`,
  SEND_RATING_SUC: `${entities} GET_SEND_SUC`,
  SEND_RATING_FAIL: `${entities} GET_SEND_FAIL`,

  GET_LANGUAGE_REQ: `${entities} GET_LANGUAGE_REQ`,
  GET_LANGUAGE_SUC: `${entities} GET_LANGUAGE_SUC`,
  GET_LANGUAGE_FAIL: `${entities} GET_LANGUAGE_FAIL`,

  DLT_DETAILS_REQ: `${entities} DLT_DETAILS_REQ`,
  DLT_DETAILS_SUC: `${entities} DLT_DETAILS_SUC`,
  DLT_DETAILS_FAIL: `${entities} DLT_DETAILS_FAIl`,

  EDIT_DETAILS_REQ: `${entities} EDIT_DETAILS_REQ`,
  EDIT_DETAILS_SUC: `${entities} EDIT_DETAILS_SUC`,
  EDIT_DETAILS_FAIL: `${entities} EDIT_DETAILS_FAIL`,

  GET_RECOMMEND_REQ: `${entities} GET_RECOMMEND_REQ`,
  GET_RECOMMEND_SUC: `${entities} GET_RECOMMEND_SUC`,
  GET_RECOMMEND_FAIL: `${entities} GET_RECOMMEND_FAIL`,

  GET_USERRECOMMEND_REQ: `${entities} GET_USERRECOMMEND_REQ`,
  GET_USERRECOMMEND_SUC: `${entities} GET_USERRECOMMEND_SUC`,
  GET_USERRECOMMEND_FAIL: `${entities} GET_USERRECOMMEND_FAIL`,

  adddetails: (payload) => ({
    type: actions.SEND_DETAILS_REQ,
    payload,
  }),

  getGenreDetails:(payload) => ({
    type:actions.GET_GENRE_REQ
  }),
  getRatingDetails:(payload) => ({
    type:actions.GET_RATING_REQ
  }),
  getRecommendDetails:(payload) => ({
    type:actions.GET_RECOMMEND_REQ,
    payload,
  }),
  getUserRecommendDetails:(payload) => ({
    type:actions.GET_USERRECOMMEND_REQ,
    payload,
  }),
  sendRatingDetails:(payload) => ({
    type:actions.SEND_RATING_REQ,
    payload,

  }),
  getLanguageDetails:(payload) => ({
    type:actions.GET_LANGUAGE_REQ
  }),

  getdetails: (payload) => ({
    type: actions.GET_DETAILS_REQ,
  }),


  editdetails: (id, data) => ({
    type: actions.EDIT_DETAILS_REQ,
    id,
    data, 
  }),

  deletedetails: (payload) => ({
    type: actions.DLT_DETAILS_REQ,
    payload,
  }),
};

export default actions;
