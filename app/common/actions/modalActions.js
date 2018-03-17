export const CLOSE_MODAL_ACTION = "CLOSE_MODAL_ACTION";
export const CLOSE_LOADING_ACTION = "CLOSE_LOADING_ACTION";
export const SHOW_LOADING_ACTION = "SHOW_LOADING_ACTION";
export const SHOW_SUCCESS_MODAL_ACTION = "SHOW_SUCCESS_MODAL_ACTION";

export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL_ACTION
  };
};

export const closeLoadingAction = () => {
  return {
    type: CLOSE_LOADING_ACTION
  };
};

export const showLoadingAction = () => {
  return {
    type: SHOW_LOADING_ACTION
  };
};

export const showSuccessModalAction = () => {
  return {
    type: SHOW_SUCCESS_MODAL_ACTION
  };
};
