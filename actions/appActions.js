import * as types from './actionTypes';

export function start() {
  return {
    type: types.START
  };
}

export function stop() {
  return {
    type: types.STOP
  };
}
