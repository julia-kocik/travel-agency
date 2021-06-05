import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumber from './PhoneNumber';


const date = new Date();
const hour = date.getHours();

describe('Component PhoneNumber', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
  });
  
  it('should render Amanda, 678.243.8455 when 8:00-12:00', () => {
    const component = shallow(<PhoneNumber />);
    const renderedName = component.find('div').text();
    if(hour >= 8 && hour < 12) {
      expect(renderedName).toBe('Amanda, 678.243.8455');
    }
  });

  it('should render Tobias, 278.443.6443 when 12:00-16:00', () => {
    const component = shallow(<PhoneNumber />);
    const renderedName = component.find('div').text();
    if(hour >= 12 && hour < 16) {
      expect(renderedName).toBe('Tobias, 278.443.6443');
    }
  });

  it('should render Helena, 167.280.3970 when 16:00-22:00', () => {
    const component = shallow(<PhoneNumber />);
    const renderedName = component.find('div').text();
    if(hour >= 16 && hour < 22) {
      expect(renderedName).toBe('Helena, 167.280.3970');
    }
  });

  it('should render The office opens at 8:00 in other cases(22:00-8:00)', () => {
    const component = shallow(<PhoneNumber />);
    const renderedName = component.find('div').text();
    if(hour >= 22 && hour < 8) {
      expect(renderedName).toBe('The office opens at 8:00');
    }
  });

});