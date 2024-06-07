import {Solution} from "../interfaces/solution";
import "../components/Serpentin.css"

interface SerpentinProps {
    solution: Solution | null;
}

const Serpentin: React.FC<SerpentinProps> = ({solution}) => {
    let unknowns = solution?.unknowns ?? null;
    return (
        <div className="grid">
            <div className="colorCell">{unknowns ? unknowns[0] : ''}</div>
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
        </div>
    );
};

export default Serpentin;