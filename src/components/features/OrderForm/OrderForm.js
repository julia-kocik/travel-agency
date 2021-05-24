import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props) => {
  const {tripCost, options, setOrderOption} = props;
  return (
    <Grid>
      <Row>
        {pricing.map(option => (
          <Col key={option.id} md={4}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
  setOrderOption: PropTypes.func,
};


export default OrderForm;