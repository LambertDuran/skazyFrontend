import {MenuItem, Select, SelectProps } from "@mui/material";
import { styled } from '@mui/system';
import {Solution} from "../interfaces/solution";
import {useState, useEffect} from "react";

interface SerpentinInputProps {
    unknown: number | null;
    index: number;
    solution: Solution | null,
    setSolution: (sol: Solution | null) => void;
}

const CustomSelect = styled(Select)<SelectProps>(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    color: 'grey',
    fontSize: '1em',
}));

const SerpentinInput: React.FC<SerpentinInputProps> = ({
                                                           unknown,
                                                           index,
                                                           solution,
                                                           setSolution
                                                       }) => {
    const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [currentValue, setCurrentValue] =
        useState<number | null>(unknown);

    useEffect(() => {
        setCurrentValue(unknown);
    }, [unknown])

    const handleChange = (event: any) => {
        if (!solution) return;
        let newSolution: Solution = {...solution};
        setCurrentValue(parseInt(event.target.value));
        solution.unknowns[index] = parseInt(event.target.value);
        setSolution(newSolution);
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