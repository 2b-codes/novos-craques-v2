import { SHOW_SIGNUP_MODAL } from "../actions";

const INICIAL_STATE = {
  showSignupModal: false,
};

const CLOSED_STATE = {

  showSignupModal: false,
  showSuccessModal: false
};

export default (state = { ...INICIAL_STATE }, action) => {

  switch (action.type) {
    case SHOW_SIGNUP_MODAL: return { ...state, showSignupModal: true };

    default: return state;
  }
};
