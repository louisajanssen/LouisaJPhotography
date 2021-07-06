import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { Contact } from '../Contact'


describe('Contact', () => {
    test('first line of contact page', () => {
        render(<Contact />);
        screen.getAllByTestId('excited')
    });
});

describe('Contact', () => {
    test('renders info', () => {
        render(<Contact />);
        screen.getAllByTestId('info')
    });
});

describe('Contact', () => {
    test('renders submit button', () => {
        render(<Contact />);
        screen.getAllByTestId('submit')
    });
});
