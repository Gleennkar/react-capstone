import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../redux/configureStore';

describe('Details test', () => {
  test('Check if Details component renders correctly', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});
