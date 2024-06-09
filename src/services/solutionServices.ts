import {Solution} from "../interfaces/solution";

const baseUrl = "http://localhost:8080/api";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
};

async function generateSolutions(){
    const url = baseUrl + "/solutions/generate";
    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(url, options);
}

async function deleteSolution(id: number){
    const url = baseUrl + `/solution/${id}`;
    const options = {
        method: "DELETE",
        headers: headers
    };

    return fetch(url, options);
}

async function updateSolution(solution: Solution){
  const url = baseUrl + '/solution';
  const options = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(solution)
  };

  return fetch(url, options);
}

async function deleteSolutions(){
    const url = baseUrl + "/solutions";
    const options = {
        method: "DELETE",
        headers: headers
    };

    return fetch(url, options);
}

export { generateSolutions, deleteSolution, deleteSolutions, updateSolution };