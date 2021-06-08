import { UserInfo } from '@containers/user-info';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { BugReport as BugReportMaterialIcon, Close as CloseMaterialIcon } from '@material-ui/icons';
import { IData } from '@models/data';
import { IStore } from '@models/store';
import { IUi } from '@models/ui';
import { togglePopup } from '@store/actions/ui';
import { Button } from '@visuals/button';
import { Card } from '@visuals/card';
import { Icon } from '@visuals/icon';
import { Logo } from '@visuals/logo';
import { LogoButton } from '@visuals/logo-button';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './style.scss';

class LayoutClass extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    const { togglePopup } = this.props;
    return (
      <>
        <Card subText='更新日：2021/04/20'>EY商事 FY21 業績分析</Card>
        <Card subText='更新日：2021/04/20' cardImage={<Logo type='format' />}>
          EY商事 FY21 業績分析
        </Card>
        <Card subText='更新日：2021/04/20' isStarred>
          EY商事 FY21 業績分析
        </Card>
        <Card subText='更新日：2021/04/20' isArchived>
          EY商事 FY21 業績分析
        </Card>
        <Card subText='更新日：2021/04/20' isArchived isStarred hoverText='Boxを編集する'>
          EY商事 FY21 業績分析
        </Card>
        <CloseMaterialIcon />
        <BugReportMaterialIcon className={styles.bigIcon} />
        <TextDisplay>Sample Text</TextDisplay>
        <LogoButton logo='dictionary' label='Test Button' />
        <LogoButton logo='data-input' label='Test Button' type='active' />
        <LogoButton logo='graph' label='Test Button' type='hover' />
        <Icon type='home' />
        LAYOUT　１２３!
        <Logo type='graph' />
        <br />
        <Link to='/user-info'>User Info</Link>
        <br />
        <Button onClick={() => togglePopup(true)}>Open Popup</Button>
        <br />
        {this.renderDialog()}
        <Switch>
          <Route exact path='/user-info' component={UserInfo} />
        </Switch>
      </>
    );
  }

  protected renderDialog(): JSX.Element {
    const {
      ui: { openPopup },
      togglePopup,
    } = this.props;
    return (
      <Dialog fullWidth open={openPopup} onClose={() => togglePopup(false)}>
        <DialogTitle>SampleDialog</DialogTitle>
        <DialogContent>Sample Dialog Content</DialogContent>
        <DialogActions>
          <Button onClick={() => togglePopup(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

export interface IStateProps {
  data: IData;
  ui: IUi;
}

export interface IDispatchProps {
  togglePopup: (flag: boolean) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  data: state.data,
  ui: state.ui,
});

const mapDispatchToProps: IDispatchProps = {
  togglePopup,
};

export const Layout = compose(connect(mapStateToProps, mapDispatchToProps))(
  withRouter(LayoutClass),
);
