import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Scoreboard({setViewCurr, setViewNext, players, setPlayers, guesses, setGuesses, setViewNextRound, setViewFinalScore, roundCount, usedIndexes, setRoundCount, setUsedIndexes}) {
    const { roomId } = useParams();
    const [nextArtist, setNextArtist] = useState(null);
    const [bestTrickster, setBestTrickster] = useState(null);
    const [bestArtist, setBestArist] = useState(null);

    useEffect(() => {
        sortUsers();
        setGuesses([]);
    }, []);

    function sortUsers(){
        if(players.length > 0){
            for(let i = 0; i < players.length; i++){
                for(let j = 0; j < players.length; j++){
                    if(players[j].trickScore < players[i].trickScore){
                        let temp = players[j];
                        players[j] = players[i];
                        players[i] = temp;
                    }
                }
            }
            setBestTrickster(players[0].name);
    
            for(let i = 0; i < players.length; i++){
                for(let j = 0; j < players.length; j++){
                    if(players[j].artScore < players[i].artScore){
                        let temp = players[j];
                        players[j] = players[i];
                        players[i] = temp;
                    }
                }
            }
            setBestArist(players[0].name);

            for(let i = 0; i < players.length; i++){
                for(let j = 0; j < players.length; j++){
                    if(players[j].totalScore < players[i].totalScore){
                        let temp = players[j];
                        players[j] = players[i];
                        players[i] = temp;
                    }
                }
            }
        }
    }

    function Title(){
        if(nextArtist != null){
            return(
                <p className="large-text pb-2">Scores:</p>
            );
        }
        else{
            return(
                <p className="large-text pb-2">Final Scores:</p>
            );
        }
    }

    function GameMessage(){
        if(nextArtist != null){
            return(
                <div className="bg-[#d2a24c] flex flex-col justify-evenly w-5/12 aspect-square">
                    <p className="large-text">Next Artist:</p>
                    <p className="large-text">{nextArtist}</p>
                </div>
            );
        }
        else{
            return(
                <div className="bg-[#d2a24c] flex flex-col justify-evenly w-5/12 aspect-square">
                    <p className="header">Bonus Awards:</p>
                    <p className="sub-header">Best Artist:</p>
                    <p className="large-text">{bestArtist}</p>
                    <p className="sub-header">Best Trickster:</p>
                    <p className="large-text">{bestTrickster}</p>
                </div>
            );
        }
    }

    function handleNextBtn() {
        setViewCurr(false);
        // if 3 rounds have occured
        if(roundCount == 3) {
            setViewFinalScore(true);
        // if ever player has gotten a turn to draw, start next round 
        } else if(players.length == usedIndexes.length) {
            setRoundCount(roundCount + 1);
            setUsedIndexes([]);
            setViewNextRound(true);
        } else {
            setViewNext(true);
        }
        }

    return (
        <div className="background custom-text pt-4 pb-4 px-6 min-h-screen max-h-max">
            {/* display room and page title for testing */}
             
            
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 p-0 m-0 justify-center items-center justify-items-stretch">
                <div className="flex flex-col justify-center items-center">
                    <Title />
                    <table className="table">
                        <tr className="borders">
                            <th className="borders table-header">Player</th>
                            <th className="borders table-header">Place</th>
                            <th className="borders table-header">Score</th>
                        </tr>
                        {players.map((player, index) => <tr className="borders">
                            <td className="borders table-data">{player.name}</td>
                            <td className="borders table-data">{(index+1) + ((index+1) > 3 ? "th" : (index+1) === 3 ? "rd" : (index+1) === 2 ? "nd" : "st")}</td>
                            <td className="borders table-data">{player.totalScore} {player.totalScore === 1 ? `pt` : `pts`}</td>
                        </tr>)}
                    </table>
                </div>
                <div className="flex flex-col justify-center items-center mr-6 my-6 gap-6">
                    <p className="text-2x1">room: {roomId} &#40;scoreboard&#41;</p>
                    <div className="large-text-nomargin ml-4">Fictionary</div>
                    <div className="bg-[#d2a24c] flex flex-col justify-evenly w-5/12 aspect-square">
                        <p className="large-text">Next Artist:</p>
                        <p className="large-text">{nextArtist}</p>
                    </div>
                    <GameMessage />
                    <button onClick={handleNextBtn}  className="blue-button cursor-pointer size-fit px-4 py-2" data-testid="scoreboard-ctn-btn" >Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard;