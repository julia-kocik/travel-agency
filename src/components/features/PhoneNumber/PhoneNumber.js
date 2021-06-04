import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  getProperHour() {
    const date = new Date();
    const hour = date.getHours();
    if(hour >= 8 && hour < 12) {
      return 'Amanda, 678.243.8455';
    } else if(hour >= 12 && hour < 16) {
      return 'Tobias, 278.443.6443';
    } else if(hour >= 16 && hour < 22) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00';
    }
  }
  render() {
    return (
      <div className={styles.component}>
        {this.getProperHour()}
      </div>
    );
  }
}

export default PhoneNumber;