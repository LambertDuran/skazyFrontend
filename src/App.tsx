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

function App() {

    const nbElementsByPage = 5;

    const [isLoading, setIsLoading] = useState(false)

    const [time, setTime] = useState(null);
    const [solutions, setSolutions] = useState<Solution[] | null>(null);
    const [solution, setSolution] = useState<Solution | null>(null);
    const [page, setPage] = useState(1);

    async function OnClickGenerate() {
        setIsLoading(true);
        setSolutions(null);
        setTime(null);
        const response = await generateSolutions()
            .then(res => res.json())
            .then(data => {
                setTime(data.time);
                const fetchedSolutions = data.solutions;
                setSolutions(fetchedSolutions);
                if (fetchedSolutions && fetchedSolutions.length > 0) {
                    setSolution(fetchedSolutions![0])
                }
            })
        setIsLoading(false);
    }

    async function OnClickDeleteAll() {
        const response = await deleteSolutions()
            .then(s => {
                setSolution(null);
                setSolutions(null);
            });
    }

    async function OnClickDelete(id: number, solutions: Solution[]) {
        const response = await deleteSolution(id)
            .then(s => {
                deleteSolution(id)
                setSolutions(solutions.filter(s => s.id !== id));
            })
    }

    // @ts-ignore
    return (
        <div className="App">
            <div id="serpentin" className="serpentin">
                <Serpentin solution={solution}></Serpentin>
            </div>
            <div className='solutions'>
                <div>
                    <Button
                        variant="outlined"
                        onClick={OnClickDeleteAll}
                        style={{marginRight: "1em"}}>
                        Tout supprimer</Button>
                    <Button variant="outlined"
                            onClick={OnClickGenerate}>
                        Générer toutes les
                        solutions</Button>
                    {isLoading && <CircularProgress/>}
                </div>
                {time && <p>Temps de calcul : {time}s </p>}
                {solutions && solutions
                    .slice((page - 1) * nbElementsByPage, page * nbElementsByPage)
                    .map((sol: Solution) =>
                        <List>
                            <ListItem key={sol.id} disablePadding>
                                <ListItemButton>
                                    <ListItemText
                                        primary={sol.unknowns.toString()}
                                        onClick={() => {
                                            const element = document.getElementById("serpentin");
                                            element!.scrollIntoView({behavior: "smooth"});
                                            setSolution(sol)
                                        }}
                                        className={sol.id === solution!.id ? 'active_sol' : ''}
                                    />
                                </ListItemButton>
                                <Button variant="contained"
                                        onClick={() => { OnClickDelete(sol.id, solutions) }}>
                                    x
                                </Button>
                            </ListItem>
                        </List>)}
                {solutions?.length &&
                    <Pagination count={Math.floor(solutions!.length / nbElementsByPage + 1)}
                                color="primary"
                                onChange={(event: React.ChangeEvent<unknown>,
                                           page: number) => {
                                    setPage(page);
                                    const element = document.getElementById("serpentin");
                                    element!.scrollIntoView({behavior: "smooth"});
                                }}/>}
            </div>
        </div>
    );
}

export default App;
