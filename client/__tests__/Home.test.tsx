import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { Home } from '../Home'


describe('Home', () => {
    test('renders outdoor header', () => {
        render(<Home />);
        screen.getAllByTestId('outdoor')
    });
});

describe('Home', () => {
    test('renders event header', () => {
        render(<Home />);
        screen.getAllByTestId('event')
    });
});

describe('Home', () => {
    test('renders about me header', () => {
        render(<Home />);
        screen.getAllByTestId('basedIn')
    });
});
