const entities = '[DETAILS]';

const actions = {
  SEND_REGISTERDETAILS_REQ: `${entities} SEND_REGISTERDETAILS_REQ`,
  SEND_REGISTERDETAILS_SUC: `${entities} SEND_REGISTERDETAILS_SUC`,
  SEND_REGISTERDETAILS_FAIL: `${entities} SEND_REGISTERDETAILS_FAIL`,

  GET_REGISTERDETAILS_REQ: `${entities} GET_REGISTERDETAILS_REQ`,
  GET_REGISTERDETAILS_SUC: `${entities} GET_REGISTERDETAILS_SUC`,
  GET_REGISTERDETAILS_FAIL: `${entities} GET_REGISTERDETAILS_FAIL`,

  adddetails: (payload) => ({
    type: actions.SEND_REGISTERDETAILS_REQ,
    payload,
  }),
  getdetails: (payload) => ({
    type: actions.GET_REGISTERDETAILS_REQ,
    payload,
  }),

};

export default actions;
