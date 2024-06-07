import {Solution} from "../interfaces/solution";
import SerpentinInput from "./SerpentinInput";
import "../components/Serpentin.css"
import Button from "@mui/material/Button";

interface SerpentinProps {
    solution: Solution | null;
    setSolution: (sol: Solution | null) => void;
}

const Serpentin: React.FC<SerpentinProps> = ({solution, setSolution}) => {
    let unknowns = solution?.unknowns ?? null;
    return (
        <div className="grid">
            <div className="colorCell">
                <SerpentinInput
                    unknown={unknowns ? unknowns[0] : null}
                    index={0}
                    solution={solution}
                    setSolution={setSolution}/>
            </div>
            <div className="empty_cell"></div>
            <div className="colorCell">{unknowns ? unknowns[4] : ''}</div>
            <div className="cell">-</div>
            <div className="colorCell">{unknowns ? unknowns[5] : ''}</div>
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

            <div className="colorCell">{unknowns ? unknowns[1] : ''}</div>
            <div className="empty_cell"></div>
            <div className="colorCell">{unknowns ? unknowns[3] : ''}</div>
            <div className="empty_cell"></div>
            <div className="colorCell">{unknowns ? unknowns[6] : ''}</div>
            <div className="empty_cell"></div>
            <div className="colorCell">{unknowns ? unknowns[8] : ''}</div>

            <div className="cell">:</div>
            <div className="colorCell">{unknowns ? unknowns[2] : ''}</div>
            <div className="cell">+</div>
            <div className="empty_cell"></div>
            <div className="cell">x</div>
            <div className="colorCell">{unknowns ? unknowns[7] : ''}</div>
            <div className="cell">:</div>

            <Button
                variant='text'
                style={{
                    marginLeft: '0.25em',
                    paddingLeft: '2em'
                }}>
                Modifier
            </Button>
        </div>
    );
};

export default Serpentin;