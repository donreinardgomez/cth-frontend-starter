import { IData } from '@models/data';
import { IStore } from '@models/store';
import { IUi } from '@models/ui';
import { getUserData } from '@store/actions/data';
import { Icon } from '@visuals/icon';
import { History, LocationState } from 'history';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class UserInfoClass extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    // TODO fake user data call :)
    const { getUserData } = this.props;
    getUserData(1);
  }

  public render(): JSX.Element {
    const { data } = this.props;
    return (
      <div>
        <Icon type='pen' />A<div>Id: {data?.user?.id}</div>
        <div>Name: {data?.user?.name}</div>
        <div>Email: {data?.user?.email}</div>
      </div>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  data: IData;
  ui: IUi;
  history?: History<LocationState>;
  classes?: any;
}

export interface IDispatchProps {
  getUserData: (userId: number) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  data: state.data,
  ui: state.ui,
});

const mapDispatchToProps: IDispatchProps = {
  getUserData,
};

export const UserInfo = compose(connect(mapStateToProps, mapDispatchToProps))(
  withRouter(UserInfoClass),
);
