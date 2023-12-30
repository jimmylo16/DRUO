import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  it('renders properly when the table has Data', () => {
    const mockedBusinessList = [
      {
        id: 1,
        name: 'Jimmy Lopez',
        nit: 9,
        mail: 'jimmylo1606@gmail.com',
        isActive: true,
      },
      {
        id: 2,
        name: 'Jimmy Alejandro',
        nit: 123,
        mail: 'jimmylo1606@gmail.com',
        isActive: true,
      },
      {
        id: 3,
        name: 'test',
        nit: 3,
        mail: 'jimmylo1606@gmail.com',
        isActive: true,
      },
    ];
    render(<Table businessList={mockedBusinessList} />);

    expect(screen.getByText(`Jimmy Lopez`)).toBeInTheDocument();
    expect(screen.getByText(`Jimmy Alejandro`)).toBeInTheDocument();
    expect(screen.getByText(`test`)).toBeInTheDocument();
  });
});
