import { Code as IconCode, Lock as IconLock, Star as IconStar } from '@material-ui/icons';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export class Card extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    isArchived: false,
    isStarred: false,
  };

  public constructor(props: Props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  public render(): JSX.Element {
    const { onClick } = this.props;
    return (
      <div
        className={styles.card}
        onClick={onClick}
        onMouseEnter={() => this.onHover()}
        onMouseLeave={() => this.onMouseOut()}
      >
        {this.renderCardImage()}
        <div className={styles.labelContainer}>
          {this.renderLabel()}
          {this.renderStar()}
        </div>
      </div>
    );
  }

  protected onHover() {
    this.setState({
      isHovered: true,
    });
  }

  protected onMouseOut() {
    this.setState({
      isHovered: false,
    });
  }

  protected renderLabel(): JSX.Element {
    const { children, subText } = this.props;
    return (
      <div>
        <TextDisplay color='gray-1' size='small' weight='bold'>
          {children}
        </TextDisplay>
        {subText && (
          <TextDisplay color='gray-3' size='x-small'>
            {subText}
          </TextDisplay>
        )}
      </div>
    );
  }

  protected renderCardImage(): JSX.Element {
    const { cardImage, hoverText } = this.props;
    const { isHovered } = this.state;
    return (
      <>
        {hoverText && isHovered && (
          <div className={styles.hoverText}>
            <TextDisplay color='white'>{hoverText}</TextDisplay>
          </div>
        )}
        <div className={styles.cardImageContainer}>
          {this.renderArchived()}
          <div className={styles.cardImage}>
            {cardImage || <IconCode className={styles.cardImageIcon} />}
          </div>
        </div>
      </>
    );
  }

  protected renderArchived(): JSX.Element {
    const { isArchived } = this.props;
    if (!isArchived) return;
    return (
      <div className={styles.archive}>
        <IconLock className={styles.archiveIconLock} />
        <TextDisplay color='white' size='small' display='inline'>
          Archived
        </TextDisplay>
      </div>
    );
  }

  protected renderStar(): JSX.Element {
    const { isStarred, onStarClick } = this.props;
    const starStyles = [styles.star, isStarred && styles.starred].filter((c) => c).join(' ');

    return (
      <div onClick={onStarClick}>
        <IconStar className={starStyles} />
      </div>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  children: string;
  subText?: string;
  hoverText?: string;
  isArchived?: boolean;
  isStarred?: boolean;
  cardImage?: any;
}

export interface IDispatchProps {
  onClick?: () => void;
  onStarClick?: () => void;
}

interface State {
  isHovered?: boolean;
}
