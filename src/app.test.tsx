import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import { setupStore } from './store/store';
const store = setupStore()
describe('TEST APP', () => {
  test('renders App', () => {
    render(  
    <MemoryRouter>
      <Provider>
        <App/>
      </Provider>
  </MemoryRouter>);
  });

})

