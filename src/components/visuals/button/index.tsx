import React from 'react';
import styles from './style.scss';

export class Button extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    type: 'primary',
  };

  public render(): JSX.Element {
    const { type, children, onClick } = this.props;
    return (
      <button className={styles[`button-${type}`]} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  children: string;
  type?: 'primary' | 'secondary';
}

export interface IDispatchProps {
  onClick?: () => void;
}
