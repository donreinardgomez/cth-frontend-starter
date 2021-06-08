import React from 'react';
import styles from './style.scss';

export class Logo extends React.Component<Props> {
  public render(): JSX.Element {
    const { onClick, type, style } = this.props;
    return (
      <div
        style={style}
        className={`${styles.logo} ${styles[type]} ${onClick && styles.clickable}`}
        onClick={onClick}
      />
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IDispatchProps {
  onClick?: () => void;
}

export interface IStateProps {
  type: Type;
  style?: React.CSSProperties;
}

export type Type =
  | 'analysis'
  | 'comment'
  | 'company-active'
  | 'company'
  | 'dashboard-active'
  | 'dashboard'
  | 'data-input-active'
  | 'data-input'
  | 'dictionary'
  | 'format-active'
  | 'format'
  | 'graph'
  | 'home-active'
  | 'home';
