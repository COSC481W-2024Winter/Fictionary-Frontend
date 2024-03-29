import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_SERVER_URL;

function Lobby({setViewCurr, setViewNext, socket, setSocket, isHost, setIsHost, guestName, players, setPlayers}) {
  const navigate = useNavigate();
  const { roomId } = useParams();
  // ellen: guestName passed as a prop from Host.js and extracted in Room.js passed to Lobby.js as a prop
  // const { roomId, guestName } = useParams();
  // const [players, setPlayers] = useState([]);
  // ellen: moved to Room.js so each game page can access these
  // const [socket, setSocket] = useState(null);
  // const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    let mySocketId = null;
    newSocket.on('yourSocketId', ({ id }) => {
      mySocketId = id;
      newSocket.emit('joinRoom', { userid: mySocketId, room: roomId, userName: guestName });
    });


    // Setup event listeners for socket
    newSocket.on('updateUserList', (Updatedplayers) => {
      setPlayers(Updatedplayers);
      // Update isHost based on the updated players list and mySocketId
      const user = Updatedplayers.find((player) => player.id === mySocketId);
      console.log(Updatedplayers);
      setIsHost(user ? user.isHost : false);
    });

    newSocket.on('gameStarted', () => {
      // Conditional rendering for the game (i.e., Canvas, Results, Scoreboard)
      alert('Game Start');
      handleNext();
    });

    return () => {
      newSocket.disconnect();
    };
  }, [navigate, roomId, guestName]); // Removed WebSocketID from the dependency array as it's no longer needed

  
  function handleLeaveClick() {
    // Navigate back to home or the previous page
    navigate('/');
  }

  function handleStartClick() {
    // Emit startGame event if current user is the host
    if (isHost) {
      socket.emit('startGame', roomId);
    } else {
      alert('Only the host can start the game.');
    }
    // please don't remove, does not break anything but needed for testing, see issue #43
    // npm start -> NODE_ENV set to "development"
    // npm build -> NODE_ENV set to "production"
    // npm test -> NODE_ENV set to "test"
    if (process.env.NODE_ENV === "test") {
      handleNext();
    }
  }

  function handleNext() {
    setViewCurr(false);
    setViewNext(true);
  }

    //procedurally generate table/list for users 
    return (
        <div className="background custom-text">
            <div>
                <h1 className="large-text">Fictionary</h1>
                <h1 className="header mb-5">Lobby</h1>
                <p className="sub-header pt-0 mb-10">Room: {roomId}</p>
            </div>
            <div>
                <ul className = "grid grid-cols-2 gap-10" >
                    {players.map((player, i) => (
                      <li className="large-text pt-0 mb-0" key={i}>
                        {player.name} {player.isHost ? '(Host)' : ''}
                      </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={handleLeaveClick} className="red-button mx-20 mt-10">Leave</button>
                {isHost && (
                  <button onClick={handleStartClick} className="blue-button mx-20 mt-10" >Start</button>
                )}
            </div>
        </div>
    );
}

export default Lobby;