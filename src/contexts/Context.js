import React, {useContext, useEffect, useReducer} from 'react';
import reducer, {initialState} from './reducer';
import axios from 'axios';
import {GET_DATA, SET_LOADING, SINGLE_DATA} from './action';

const API_START_POINTS = '/api/minji';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({type: SET_LOADING});
    try {
      const {data} = await axios(API_START_POINTS);
      dispatch({type: GET_DATA, payload: data});
    } catch (error) {
      throw new Error(error);
    }
  };

  const singleData = async (id) => {
    dispatch({type: SET_LOADING});
    try {
      const {
        data: {fields: data},
      } = await axios(`${API_START_POINTS}?id=${id}`);
      dispatch({type: SINGLE_DATA, payload: data});
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{...state, singleData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
