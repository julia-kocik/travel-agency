import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDecription: '.promoDescription',
};

const mockProps = {
  title: 'Lorem ipsum',
  promoDescription: 'Lorem ipsum dolor',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should be h3 with class .title && div with class .countdown', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDecription)).toEqual(true);
  });

  it('should return props title in the title', () => {
    const component = shallow(<HappyHourAd title={mockProps.title} {...mockProps} />);
    const renderedProp = component.find(select.title).text();
    expect(renderedProp).toEqual(mockProps.title);
  });
  
});