import { Card, Step, StepLabel, Stepper } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import { OrderStatus as Status } from 'models/Order';
import React from 'react';
import { styles } from './OrderStatus-styles';

type Props = WithStyles<typeof styles> & {
  status: Status;
}

interface State { }

class OrderStatus extends React.Component<Props, State> {
  render() {
    const { classes, status } = this.props;
    return (
      <Card className={classes.root}>
        <Stepper activeStep={
          status === Status.PENDING ? 0:
          status === Status.SENT ? 1:
          status === Status.DELIVERED ? 3: -1
        } alternativeLabel>
          <Step>
            <StepLabel>Pending</StepLabel>
          </Step>
          <Step>
            <StepLabel>On the way</StepLabel>
          </Step>
          <Step>
            <StepLabel>Delivered</StepLabel>
          </Step>
        </Stepper>
      </Card>
    );
  }
}

export default withStyles(styles)(OrderStatus);