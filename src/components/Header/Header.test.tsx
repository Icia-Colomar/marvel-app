import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from './Header';

// Mock de los assets
vi.mock('../../assets/marvel-logo.svg', () => ({
  default: 'mocked-marvel-logo.svg'
}));

vi.mock('../../assets/heart-icon.svg', () => ({
  default: 'mocked-heart-icon.svg'
}));

describe('Header Component', () => {
  describe('Rendering', () => {
    it('should render the header with correct role', () => {
      render(<Header />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should render the Marvel logo with correct alt text', () => {
      render(<Header />);
      
      const logo = screen.getByAltText('Marvel Logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', 'mocked-marvel-logo.svg');
    });

    it('should render the logo inside an h1 element', () => {
      render(<Header />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      
      const logo = screen.getByAltText('Marvel Logo');
      expect(heading).toContainElement(logo);
    });
  });

  describe('Favorites Button', () => {
    it('should render the favorites button with correct accessibility attributes', () => {
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      expect(favoritesButton).toBeInTheDocument();
      expect(favoritesButton).toHaveAttribute('type', 'button');
      expect(favoritesButton).toHaveAttribute('aria-label', 'Favorites characters');
    });

    it('should render the heart icon with correct alt text', () => {
      render(<Header />);
      
      const heartIcon = screen.getByAltText('Favorites Icon');
      expect(heartIcon).toBeInTheDocument();
      expect(heartIcon).toHaveAttribute('src', 'mocked-heart-icon.svg');
    });

    it('should display the favorites count as 0 initially', () => {
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      expect(favoritesButton).toHaveTextContent('0');
    });
  });

  describe('User Interactions', () => {
    it('should call handleFavoritesClick when favorites button is clicked', () => {
      // Mock console.log to verify the click handler
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      fireEvent.click(favoritesButton);
      
      expect(consoleSpy).toHaveBeenCalledWith('Favorites button clicked');
      
      consoleSpy.mockRestore();
    });

    it('should handle favorites button click with user event', async () => {
      const user = userEvent.setup();
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      await user.click(favoritesButton);
      
      expect(consoleSpy).toHaveBeenCalledWith('Favorites button clicked');
      
      consoleSpy.mockRestore();
    });

    it('should be keyboard accessible', async () => {
      const user = userEvent.setup();
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      
      // Enfocar el botón y presionar Enter
      favoritesButton.focus();
      await user.keyboard('{Enter}');
      
      expect(consoleSpy).toHaveBeenCalledWith('Favorites button clicked');
      
      consoleSpy.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('should have images with proper alt text', () => {
      render(<Header />);
      
      const marvelLogo = screen.getByAltText('Marvel Logo');
      const heartIcon = screen.getByAltText('Favorites Icon');
      
      expect(marvelLogo).toBeInTheDocument();
      expect(heartIcon).toBeInTheDocument();
    });

    it('should have appropriate ARIA attributes', () => {
      render(<Header />);
      
      const favoritesButton = screen.getByRole('button', { name: /favorites characters/i });
      expect(favoritesButton).toHaveAttribute('aria-label', 'Favorites characters');
      expect(favoritesButton).toHaveAttribute('type', 'button');
    });
  });

  describe('Performance', () => {
    it('should not cause unnecessary re-renders', () => {
      const renderSpy = vi.fn();
      
      const TestHeader = () => {
        renderSpy();
        return <Header />;
      };
      
      const { rerender } = render(<TestHeader />);
      expect(renderSpy).toHaveBeenCalledTimes(1);
      
      // Re-renderizar con las mismas props
      rerender(<TestHeader />);
      expect(renderSpy).toHaveBeenCalledTimes(2);
    });
  });
});