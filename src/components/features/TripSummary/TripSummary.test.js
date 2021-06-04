import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component Trip Summary', () => {

  const expectedLink = '/trip/abc';
  const expectedImage = 'image.jpg';
  const expectedName = 'alt';
  const expectedCost = '$10';
  const expectedDays = 5;
  let expectedTags = ['tag1', 'tag2', 'tag3'];
  const tripId = 'abc';

  const component = shallow(<TripSummary 
    id={tripId}
    image={expectedImage}
    name={expectedName} 
    cost={expectedCost}
    days={expectedDays}
    tags={expectedTags}
  />);

  it('should be the correct link', () => {
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('should be the correct src and alt', () => {
    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');
    expect(renderedSrc).toEqual(expectedImage);
    expect(renderedAlt).toEqual(expectedName);
  });

  it('should be the correct name, days, cost', () => {
    const renderedName = component.find('.title').text();
    const renderedDaysAndCost = component.find('.details').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedDaysAndCost).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });

  it('should be the correct tags', () => {
    const renderedTag1 = component.find('.tags span').at(0).text();
    const renderedTag2 = component.find('.tags span').at(1).text();
    const renderedTag3 = component.find('.tags span').at(2).text();
    expect(renderedTag1).toEqual(expectedTags[0]);
    expect(renderedTag2).toEqual(expectedTags[1]);
    expect(renderedTag3).toEqual(expectedTags[2]);
  });

  it('should not render div tags if props tags is false', () => {
    const component = shallow(<TripSummary 
      id={tripId}
      image={expectedImage}
      name={expectedName} 
      cost={expectedCost}
      days={expectedDays}
    />);
    expect(component.find('.tags').exists()).toBe(false);
  });
});