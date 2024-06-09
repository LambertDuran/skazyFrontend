import {MenuItem, Select, SelectProps} from "@mui/material";
import {styled} from '@mui/system';
import {Solution} from "../interfaces/solution";
import {useState, useEffect} from "react";

interface SerpentinInputProps {
    index: number;
    solutionTemp: Solution | null;
    setSolutionTemp: (sol: Solution | null) => void;
}

const CustomSelect = styled(Select)<SelectProps>(({theme}) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    color: 'grey',
    fontSize: '1em',
}));

const SerpentinInput: React.FC<SerpentinInputProps> = ({
                                                           index,
                                                           solutionTemp,
                                                           setSolutionTemp
                                                       }) => {
    const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [currentValue, setCurrentValue] =
        useState<number | null>(solutionTemp ? solutionTemp.unknowns[index] : null);

    useEffect(() => {
        if(solutionTemp)setCurrentValue(solutionTemp.unknowns[index])
    }, [solutionTemp]);

    const handleChange = (event: any) => {
        if (!solutionTemp) return;
        setCurrentValue(parseInt(event.target.value));
        let newSol = {...solutionTemp};
        newSol.unknowns[index] = parseInt(event.target.value);
        setSolutionTemp(newSol);
    }

    return (
        <div>
            {currentValue !== null ? (
                <CustomSelect
                    value={currentValue}
                    onChange={handleChange}>
                    {availableValues.map(v => (
                        <MenuItem
                            key={v}
                            value={v}
                        >
                            {v}
                        </MenuItem>
                    ))}
                </CustomSelect>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default SerpentinInput;