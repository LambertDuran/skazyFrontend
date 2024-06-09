import {Solution} from "../interfaces/solution";
import SerpentinInput from "./SerpentinInput";
import "../components/Serpentin.css"
import Button from "@mui/material/Button";
import {updateSolution} from "../services/solutionServices";
import {useEffect, useState} from "react";

interface SerpentinProps {
    solution: Solution | null;
    setSolution: (sol: Solution | null) => void;
}

const Serpentin: React.FC<SerpentinProps> = ({solution, setSolution}) => {

    const [tempSol, setTempSol] = useState<Solution | null>(null);

    useEffect(() => {
        setTempSol(solution ? {...solution} : null);
    }, [solution]);


    async function handleModify() {
        if (!tempSol) return;
        await updateSolution(tempSol)
            .then(res => res.json())
            .then(data => {
                setSolution(data);
            })
    }

    return (
        <div className="serpentin_container">
            <div className={solution?.bisvalid ? 'grid_valid' : 'grid_invalid'}>
                <div className="colorCell">
                    <SerpentinInput
                        index={0}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        index={4}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="cell">-</div>
                <div className="colorCell">
                    <SerpentinInput
                        index={5}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
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
                        index={1}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        index={3}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        index={6}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="empty_cell"></div>
                <div className="colorCell">
                    <SerpentinInput
                        index={8}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>

                <div className="cell">:</div>
                <div className="colorCell">
                    <SerpentinInput
                        index={2}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/>
                </div>
                <div className="cell">+</div>
                <div className="empty_cell"></div>
                <div className="cell">x</div>
                <div className="colorCell">
                    <SerpentinInput
                        index={7}
                        solutionTemp={tempSol}
                        setSolutionTemp={setTempSol}/></div>
                <div className="cell">:</div>

            </div>
            <Button
                variant='outlined'
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