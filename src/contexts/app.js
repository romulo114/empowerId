import { createContext, useContext, useEffect } from 'react';

export const initialState = {
  state: {
    title: 'EmpowerID',
  },
  dispatch: (action) => {},
};

export const AppStateContext = createContext(initialState);

export const useSelector = (selectorFn) => {
  const value = useContext(AppStateContext);
  return selectorFn(value.state);
};

export const useDispatch = () => {
  const value = useContext(AppStateContext);
  return value.dispatch;
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}

export function useTitle(title) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SET_TITLE',
      payload: title,
    });
  }, [title, dispatch]);
}
