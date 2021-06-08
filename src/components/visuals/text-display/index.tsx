import React, { CSSProperties } from 'react';
import styles from './style.scss';

export class TextDisplay extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    size: 'medium',
    weight: 'normal',
    color: 'primary',
    display: 'block',
  };

  public render(): JSX.Element {
    return (
      <div className={this.getClassNames()} style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }

  protected getClassNames() {
    const { size, display, color, weight, align, truncate, onClick } = this.props;
    const textStyle = [
      styles.textDisplay,
      styles[`size-${size}`],
      styles[`display-${display}`],
      styles[`color-${color}`],
      styles[`weight-${weight}`],
      styles[`align-${align}`],
      onClick && styles.link,
      truncate && styles[`truncate-${truncate}`],
    ].filter((style) => style);
    return textStyle.join(' ');
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  weight?: 'bold' | 'normal';
  color?: Colors;
  display?: 'block' | 'inline' | 'flex-centered-text';
  align?: 'center' | 'end' | 'default';
  truncate?: 'ellipsis';
  children?: React.ReactNode;
  style?: CSSProperties;
}

export interface IDispatchProps {
  onClick?: () => void;
}

export type Colors = 'primary' | 'primary-3' | 'gray-1' | 'gray-3' | 'white';
