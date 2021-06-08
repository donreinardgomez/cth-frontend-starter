import { TSupportedLanguage } from '@models/supported-languages';
import { Action } from 'redux';

interface ActionTogglePopup extends Action {
  openPopup: boolean;
  type: 'TOGGLE_POPUP';
}

export function togglePopup(flag: boolean): ActionTogglePopup {
  return {
    openPopup: flag,
    type: 'TOGGLE_POPUP',
  };
}

interface ActionSetLanguage extends Action {
  lang: TSupportedLanguage;
  type: 'SET_LANGUAGE';
}

export function setLanguage(lang: TSupportedLanguage): ActionSetLanguage {
  return {
    lang: lang,
    type: 'SET_LANGUAGE',
  };
}

export type UiActions = ActionTogglePopup | ActionSetLanguage;
