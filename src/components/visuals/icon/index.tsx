import React, { CSSProperties } from 'react';
import styles from './style.scss';

export class Icon extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    isCircular: false,
    size: 'medium',
    display: 'block',
  };

  public render(): JSX.Element {
    const { style, onClick } = this.props;
    return <div className={this.getClassNames()} style={style} onClick={onClick} />;
  }

  protected getClassNames() {
    const { display, size, isCircular, type, onClick } = this.props;
    return [
      styles.icon,
      styles[type],
      styles[`size-${size}`],
      styles[`display-${display}`],
      isCircular && styles.circular,
      onClick && styles.clickable,
      isCircular,
    ]
      .filter((style) => style)
      .join(' ');
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IDispatchProps {
  onClick?: () => void;
}

export interface IStateProps {
  type: IconTypes;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large';
  isCircular?: boolean;
  style?: CSSProperties;
  lat?: number;
  lng?: number;
  text?: string;
  display?: 'block' | 'inline';
}

export type IconTypes =
  | 'home'
  | 'home2'
  | 'home3'
  | 'office'
  | 'newspaper'
  | 'pencil'
  | 'pencil2'
  | 'quill'
  | 'pen'
  | 'blog'
  | 'eyedropper'
  | 'droplet'
  | 'paint';
