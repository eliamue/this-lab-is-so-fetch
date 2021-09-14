import React from 'react';
import { render, screen } from '@testing-library/react';
import quoteContainer from '../containers/quoteContainer';

describe('Quote Container', () => {
  it('displays a list of quotes on the page', async () => {
    render(<quoteContainer />);

    screen.getByTest('Loading');
  });
});
