import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptions = (props) => (
  <Grid>
    <Row>
      <Col>
        <div className={styles.component}>
          <h3 className={styles.title}>{props.name}</h3>
        </div>
      </Col>
    </Row>
  </Grid>
);

OrderOptions.propTypes = {
  name: PropTypes.string,
};

export default OrderOptions;