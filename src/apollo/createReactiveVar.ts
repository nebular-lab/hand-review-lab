import { makeVar, ReactiveVar } from '@apollo/client';

export const createReactiveVar = <T>(initialValue: T): ReactiveVar<T> => makeVar<T>(initialValue);
