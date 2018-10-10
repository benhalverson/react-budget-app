import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../components/ErrorBoundary';

test('it should render correctly', () => {
  const wrapper = shallow(<ErrorBoundary />);
  expect(wrapper).toMatchSnapshot();
});

test('it should catches errors', () => {
  const ProblemChild = () => {
    return <div>{new Error('Error thrown from problem child')}</div>; // eslint-disable-line
  };

  const wrapper = shallow(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  wrapper.instance().componentDidCatch();
  expect(wrapper).toMatchSnapshot();
});
