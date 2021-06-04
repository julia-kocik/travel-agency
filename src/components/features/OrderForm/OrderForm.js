import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {settings} from '../../../data/settings';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripDetails) => {
  
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  if(!options.name || !options.contact) {
    alert('Name or contact field is empty');
    return false;
  }
  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };
  
  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = (props) => {
  const {tripCost, options, setOrderOption, tripDetails} = props;
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
        <Button onClick={() => sendOrder(options, tripCost, tripDetails)}>Order now!</Button>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};


export default OrderForm;