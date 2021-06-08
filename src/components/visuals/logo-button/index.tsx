import { Logo, Type as LogoType } from '@visuals/logo';
import React from 'react';
import styles from './styles.scss';

export class LogoButton extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    type: 'default',
  };

  public render(): JSX.Element {
    const { onClick, logo, label, type } = this.props;
    return (
      <div className={`${styles.iconBotton} ${styles[type]}`} onClick={onClick}>
        <Logo type={logo} />
        {label}
      </div>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  logo: LogoType;
  label: string;
  type?: 'default' | 'active' | 'hover';
}

export interface IDispatchProps {
  onClick?: () => void;
  onHover?: () => void;
}
