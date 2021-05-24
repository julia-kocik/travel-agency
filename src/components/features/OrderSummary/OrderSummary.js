import React from 'react';
import styles from './OrderSummary.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';



const OrderSummary = (props) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2 className={styles.component}>Total: <strong>$12,45</strong></h2>
        {formatPrice(calculateTotal(props.tripCost, props.options))}
      </Col>
    </Row>
  </Grid>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;