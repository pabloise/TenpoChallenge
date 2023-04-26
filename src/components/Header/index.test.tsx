import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header from '.';

describe('examples of some things', () => {
  it('renders the Header component', () => {
    render(<Header />);

    screen.getByText('Header');
  });
});
