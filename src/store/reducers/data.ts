import { IData as IState } from '@models/data';
import { AllAction } from '@store/actions';
import { updateState } from 'utils/update-state';

const initialState: IState = {
  user: undefined,
};

export function data(state: IState = initialState, action: AllAction) {
  switch (action.type) {
    case 'GET_USER_DATA':
      return updateState(state, {
        user: action.userInfo,
      });
    default:
      return state;
  }
}
