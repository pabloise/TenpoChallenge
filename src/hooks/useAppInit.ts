import {useEffect} from 'react';
import {initialize} from '../redux/modules/app/actions';
import {useAppDispatch} from './useAppDispatch';

const useAppInit = (): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialize());
  });

  return null;
};

export default useAppInit;
