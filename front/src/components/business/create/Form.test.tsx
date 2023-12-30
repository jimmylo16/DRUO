import { render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('renders the form with the proper inputs', () => {
    render(<Form />);

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('nit')).toBeInTheDocument();
    expect(screen.getByTestId('mail')).toBeInTheDocument();
  });
});
