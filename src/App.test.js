// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DriftV2 title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DriftV2/i);
    expect(titleElement).toBeInTheDocument();
});
