import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumber from './PhoneNumber';



describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
  });
  
  it('should render Amanda, 678.243.8455 when 8:00-12:00', () => {
    const component = shallow(<PhoneNumber />);
    const renderedName = component.find('div').text();
    expect(renderedName).toBe('');
  });

  it('should render Tobias, 278.443.6443 when 12:00-16:00', () => {

  });

  it('should render Helena, 167.280.3970 when 16:00-22:00', () => {

  });
  it('should render The office opens at 8:00 in other cases(22:00-8:00)', () => {

  });

});