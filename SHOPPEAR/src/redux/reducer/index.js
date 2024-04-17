import * as constants from 'redux/constants/app.constants';

const defaultState = {
  items: [],
  loading: false,
};

const productReducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.PRODUCT_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.PRODUCT_GET_ALL_SUCCEEDED:
      return {
        ...state,
        items: data.items,
        loading: false,
      };
    case constants.PRODUCT_GET_ALL_FAILED:
      return {
        ...state,
        loading: false,
      };
  }
};

export default productReducer;