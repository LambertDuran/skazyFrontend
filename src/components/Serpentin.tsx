import {Solution} from "../interfaces/solution";
import SerpentinInput from "./SerpentinInput";
import "../components/Serpentin.css"
import Button from "@mui/material/Button";
import {updateSolution} from "../services/solutionServices";

interface SerpentinProps {
    solution: Solution | null;
    setSolution: (sol: Solution | null) => void;
    solutions?: Solution[] | null;
    setSolutions?: (sol: Solution[] | null) => void;
}

const Serpentin: React.FC<SerpentinProps> = ({solution, setSolution, solutions, setSolutions}) => {
    let unknowns = solution?.unknowns ?? null;
    let tempSol = solution ? {...solution} : null;

    console.log('tempSol', tempSol)

    async function handleModify() {
        if (!tempSol) return;
        await updateSolution(tempSol)
            .then(res => res.json())
            .then(data => {
                setSolution(data);
            })

        //if(!solutions) return;
        //let newSolutions = [...solutions];
        //const index = newSolutions.findIndex(s => s.id === solution?.id);
        //if(index >= 0){
        //    newSolutions[index] = tempSol;
        //    setSolutions(newSolutions);
        //}
    }

    return (
        <div className="serpentin_container">
            <div className={solution?.bisvalid ? 'grid_valid' : 'grid_invalid'}>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[0] : null}
                        index={0}
                        solution={tempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[4] : null}
                        index={4}
                        solution={tempSol}/>
                </div>
                <div className="cell">-</div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[5] : null}
                        index={5}
                        solution={tempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="cell">66</div>

                <div className="cell">+</div>
                <div className="empty_cell"></div>
                <div className="cell">x</div>
                <div className="empty_cell"></div>
                <div className="cell">-</div>
                <div className="empty_cell"></div>
                <div className="cell">=</div>

                <div className="cell">13</div>
                <div className="empty_cell"></div>
                <div className="cell">12</div>
                <div className="empty_cell"></div>
                <div className="cell">11</div>
                <div className="empty_cell"></div>
                <div className="cell">10</div>

                <div className="cell">x</div>
                <div className="empty_cell"></div>
                <div className="cell">+</div>
                <div className="empty_cell"></div>
                <div className="cell">+</div>
                <div className="empty_cell"></div>
                <div className="cell">-</div>

                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[1] : null}
                        index={1}
                        solution={tempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[3] : null}
                        index={3}
                        solution={solution}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[6] : null}
                        index={6}
                        solution={tempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[8] : null}
                        index={8}
                        solution={tempSol}/>
                </div>

                <div className="cell">:</div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[2] : null}
                        index={2}
                        solution={tempSol}/>
                </div>
                <div className="cell">+</div>
                <div className="empty_cell"></div>
                <div className="cell">x</div>
                <div className="colorCell">
                    <SerpentinInput
                        unknown={unknowns ? unknowns[7] : null}
                        index={7}
                        solution={tempSol}/></div>
                <div className="cell">:</div>

            </div>
            <Button
                variant='text'
                style={{
                    marginTop: "1em",
                    marginLeft: '0.25em',
                    paddingLeft: '2em'
                }}
                onClick={handleModify}>
                Modifier
            </Button>
        </div>
    );
};

export default Serpentin;