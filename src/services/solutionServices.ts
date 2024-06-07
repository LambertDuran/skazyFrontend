async function generateSolutions(){
    const url = "http://localhost:8080/api/solutions/generate";
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
    };

    return fetch(url, options);
}

async function deleteSolution(id: number){
    const url = `http://localhost:8080/api/solution/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
    };

    return fetch(url, options);
}

async function deleteSolutions(){
    const url = `http://localhost:8080/api/solutions`;
    const options = {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
    };

    return fetch(url, options);
}

export { generateSolutions, deleteSolution, deleteSolutions };