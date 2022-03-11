import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../../store';

import Settings from '../Settings';

describe('Settings component testing', () => {
  const renderComponent = () => {
    return render(
      <Provider store={store}>
        <Settings />
      </Provider>
    );
  };

  test('Component is rendering', () => {
    renderComponent();
  });

  test('Check initial settings', () => {
    renderComponent();

    const themeBtn = screen.getByText(/numbers/i);
    const numOfPlayersBtn = screen.getByText(/1/i);
    const gridBtn = screen.getByText(/4x4/i);

    expect(themeBtn).toHaveAttribute('aria-pressed', 'true');
    expect(numOfPlayersBtn).toHaveAttribute('aria-pressed', 'true');
    expect(gridBtn).toHaveAttribute('aria-pressed', 'true');
  });

  test('Chnaging initial settings to new', () => {
    renderComponent();
    const themeBtn = screen.getByText(/icons/i);
    const numOfPlayersBtn = screen.getByText(/2/i);
    const gridBtn = screen.getByText(/6x6/i);

    fireEvent.click(themeBtn);
    fireEvent.click(numOfPlayersBtn);
    fireEvent.click(gridBtn);

    expect(themeBtn).toHaveAttribute('aria-pressed', 'true');
    expect(numOfPlayersBtn).toHaveAttribute('aria-pressed', 'true');
    expect(gridBtn).toHaveAttribute('aria-pressed', 'true');
  });
});
