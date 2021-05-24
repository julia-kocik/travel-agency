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
        <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</strong></h2>
        
      </Col>
    </Row>
  </Grid>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;