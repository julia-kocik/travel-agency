import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input 
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max}
    />
    {formatPrice(price)}
  </div>
);
  
OrderOptionNumber.propTypes ={
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  value: PropTypes.number,
  price: PropTypes.string,
};
  
  
export default OrderOptionNumber;