import React from 'react';
import { useState } from 'react';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import Artist from '../Artist.js';

jest.useFakeTimers();

const TestComponent = () => {
    const [mockPlayers, setMockPlayers] = useState([
      { name: 'Player1', isHost: true },
      { name: 'Player2', isHost: false },
      { name: 'Player3', isHost: false },
    ]);
  
    const [mockUsedIndexes, setMockUsedIndexes] = useState([0, 1, 2]);
    const [mockArtist, setMockArtist] = useState(null);
    const [mockIsHost, setMockIsHost] = useState(false);
    const setMockViewCurr = jest.fn();
    const setMockViewNext = jest.fn();
    return (
      <Artist
        //artist={mockArtist}
        setViewCurr={setMockViewCurr}
        setViewNext={setMockViewNext}
        players={mockPlayers}
        setPlayers={setMockPlayers}
        setIsHost={setMockIsHost}
        usedIndexes={mockUsedIndexes}
        setUsedIndexes={setMockUsedIndexes}
        artist={mockArtist}
        setArtist={setMockArtist}
      />
    );
  };
 
  test('artist component', async () => {
    act(() => {
    
    render(<TestComponent />);
    });
    // Your test assertions go here
    expect(screen.getByText('NEXT ARTIST IS'));
    expect(screen.getByText('Player3'));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    await waitFor(() => {
      expect(screen.getByText('GET READY TO DRAW IN')).toBeInTheDocument();
    });  
    
    expect(screen.getByText('3'));
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument();
    });  
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });  


    fireEvent.click(screen.getByTestId("next"));
  });