import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import detailData from '../fixtures/detail.json';

//mock
const server = setupServer(
  rest.get('https://futuramaapi.herokuapp.com/api/characters/bender', (req, res, ctx) => {
    return res(ctx.json(detailData));
    //copied json of all quotes from api and put it into file called detail.json
  })
);

describe('Detail Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of quotes from a single character', async () => {
    const component = render(
      <MemoryRouter initialEntries={['/bender']}>
        <DetailContainer />
      </MemoryRouter>
    );

    screen.getByTest('Loading');
    await screen.findByText('Bender', { exact: false });
    expect(component).toMatchSnapshot();
  });
});
