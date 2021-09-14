import React from 'react';
import { render, screen } from '@testing-library/react';
import quoteContainer from './quoteContainer';

describe('Quote Container', () => {
  it('displays a list of quotes on the page', async () => {
    render(<quoteContainer />);

    screen.getByTest('Loading');
    const ul = await screen.findByRole('list', { name: 'quotes' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
