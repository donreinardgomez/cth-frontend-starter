import { IUi as IState } from '@models/ui';
import { AllAction } from '@store/actions';
import { updateState } from 'utils/update-state';

const initialState: IState = {
  openPopup: false,
  selectedLanguage: 'ja', // Default Language
};

export function ui(state: IState = initialState, action: AllAction) {
  switch (action.type) {
    case 'TOGGLE_POPUP':
      const aa = updateState(state, {
        openPopup: action.openPopup,
      });
      return aa;
    case 'SET_LANGUAGE':
      return updateState(state, {
        selectedLanguage: action.lang,
      });
    default:
      return state;
  }
}
