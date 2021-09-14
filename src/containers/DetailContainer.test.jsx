import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteContainer from './QuoteContainer';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/list.json';

//mock
const server = setupServer(
  rest.get('https://futuramaapi.herokuapp.com/api/quotes', (req, res, ctx) => {
    return res(ctx.json(listData));
    //copied json of all quotes from api and put it into file called list.json
  })
);

describe('Quote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of quotes on the page', async () => {
    const component = render(
      <MemoryRouter>
        <QuoteContainer />
      </MemoryRouter>
    );

    screen.getByTest('Loading');
    const ul = await screen.findByRole('list', { name: 'quotes' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(component).toMatchSnapshot();
  });
});
