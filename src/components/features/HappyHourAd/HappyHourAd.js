import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  render() {
    const {title} = this.props;
    return (
      <div className="countdown">
        <h3 className="title">{title}</h3>
        <div className="promoDescription">promoDescription</div>
      </div>
    );
  }
}

export default HappyHourAd;