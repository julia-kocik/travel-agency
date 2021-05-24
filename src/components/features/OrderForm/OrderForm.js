import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = (props) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption name={option.id} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
};


export default OrderForm;