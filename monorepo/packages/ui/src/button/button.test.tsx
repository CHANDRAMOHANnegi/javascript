import { test, expect} from 'vitest';
import { render, screen} from '@testing-library/react'
import {Button} from './button';
import '@testing-library/jest-dom'

test('Button shuold be rendered', () => {
  render(<Button>Hello</Button>);

  expect(screen.getByText(/Hello/)).toBeInTheDocument();
});
