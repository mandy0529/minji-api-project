import {GET_DATA, SET_LOADING, SINGLE_DATA} from './action';

export const initialState = {
  loading: true,
  list: [],
  singleList: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case GET_DATA:
      return {...state, list: action.payload, loading: false};

    case SINGLE_DATA:
      const {color, img, season, type} = action.payload;
      const url = img[0].url;
      const seasons = season[0];
      const newData = {color, type, url, seasons};
      return {...state, singleList: newData, loading: false};

    default:
      throw new Error(`no matched type ${action.type}`);
  }
};

export default reducer;
