// apollo/useReactiveVarHooks.ts
import { ReactiveVar, useReactiveVar } from '@apollo/client';

export type ReactiveVarHooks<T> = [T, (payload: T) => void];

export const useReactiveVarHooks = <T>(reactiveVar: ReactiveVar<T>): ReactiveVarHooks<T> => {
  const value = useReactiveVar(reactiveVar);
  const setValue = (payload: T) => {
    reactiveVar(payload);
  };
  return [value, setValue];
};
