import React, {useState} from 'react';
import './App.css';

import {Solution} from "./interfaces/solution";

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {generateSolutions, deleteSolution, deleteSolutions} from "./services/solutionServices";
import Serpentin from "./components/Serpentin";
import Pagination from '@mui/material/Pagination';
import {TextField} from '@mui/material';

function App() {

    const nbElementsByPage = 4;

    const [isLoading, setIsLoading] = useState(false)

    const [time, setTime] = useState(null);
    const [solutions, setSolutions] = useState<Solution[] | null>(null);
    const [solution, setSolution] = useState<Solution | null>(null);
    const [page, setPage] = useState(1);
    const [filteredSolutions, setFilteredSolutions] = useState<Solution[] | null>(null);

    async function handleClickGenerate() {
        setIsLoading(true);
        setSolutions(null);
        setTime(null);
        await generateSolutions()
            .then(res => res.json())
            .then(data => {
                setTime(data.time);
                const fetchedSolutions = data.solutions;
                setSolutions(fetchedSolutions);
                setFilteredSolutions(fetchedSolutions);
                if (fetchedSolutions && fetchedSolutions.length > 0) {
                    setSolution(fetchedSolutions![0])
                }
            })
        setIsLoading(false);
    }

    async function handleClickDeleteAll() {
        await deleteSolutions()
            .then(s => {
                setTime(null);
                setSolution(null);
                setSolutions(null);
                setFilteredSolutions(null);
            });
    }

    async function handleClickDelete(id: number) {
        if (!solutions) return;
        await deleteSolution(id)
            .then(s => {
                deleteSolution(id)
                setSolutions(solutions.filter(s => s.id !== id));
                if (filteredSolutions) setFilteredSolutions(filteredSolutions.filter(s => s.id !== id));
            })
    }

    function handleSearchChange(event: any) {
        const search = event.target.value;
        if (!search) {
            setFilteredSolutions(solutions);
            return;
        }
        const searchStr = search.split('').join(',');
        const filtered = solutions?.filter(s => {
            return s.unknowns.join(",").includes(searchStr);
        })
        setFilteredSolutions(filtered ?? null);
    }

    // @ts-ignore
    return (
        <div className="App">
            <div id="serpentin" className="serpentin">
                <Serpentin solution={solution} setSolution={setSolution}/>
            </div>
            <div className='solutions'>
                <div>
                    <TextField
                        label="Recherche"
                        variant="standard"
                        className="recherche"
                        onChange={handleSearchChange}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#1976d2', // Couleur des contours avant focus
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#1976d2', // Couleur des contours au survol
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1976d2', // Couleur des contours après focus
                            },
                            '& .MuiInputLabel-root': {
                                color: '#1976d2', // Couleur du label
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#1976d2', // Couleur du label au focus
                            },
                            '& .MuiInputBase-input': {
                                color: 'white', // Couleur du texte
                            },
                        }}/>
                    <Button
                        variant="outlined"
                        onClick={handleClickDeleteAll}
                        style={{marginRight: "1em"}}>
                        Tout supprimer</Button>
                    <Button variant="outlined"
                            onClick={handleClickGenerate}>
                        Générer toutes les
                        solutions</Button>
                    {isLoading && <CircularProgress/>}
                </div>
                {time && <p>Temps de calcul : {time}s </p>}
                <List>
                    {filteredSolutions && filteredSolutions
                        .slice((page - 1) * nbElementsByPage, page * nbElementsByPage)
                        .map((sol: Solution) =>
                            <ListItem disablePadding key={sol.id}>
                                <ListItemButton>
                                    <ListItemText
                                        primary={sol.unknowns.toString()}
                                        onClick={() => {
                                            setSolution(sol)
                                        }}
                                        className={sol.id === solution!.id ? 'active_sol' : ''}
                                    />
                                </ListItemButton>
                                <Button variant="contained"
                                        onClick={() => handleClickDelete(sol.id)}>
                                    x
                                </Button>
                            </ListItem>)}
                </List>
                {filteredSolutions?.length &&
                    <Pagination count={Math.floor(filteredSolutions!.length / nbElementsByPage + 1)}
                                color="primary"
                                onChange={(event: React.ChangeEvent<unknown>,
                                           page: number) => {
                                    setPage(page);
                                }}/>}
            </div>
        </div>
    );
}

export default App;
