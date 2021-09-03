const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://theglascockprojects.herokuapp.com/";

// json-server headers
const headers = new Headers();
headers.append("Content-Type", "application/json");
/**
 * Helper Function
 * Fetch json data from the url, and handles errors exluding AbortError
 * @param {*} url
 *  url of the request to make fetch
 * @param {*} options
 *  Options for the fetch
 * @param {*} onCancel
 *  value to return if the fetch call is aborted
 * @returns {Promise<any|Error}
 *  resolves either to json data or an error
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) return null;

    const jsonResponse = await response.json();
    if (jsonResponse.error)
      return Promise.reject({ message: jsonResponse.error });

    return jsonResponse.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}
/**
 * Fetches all existing projects from the database
 * @param {*} signal
 *  abort controller signal
 * @returns {Promise<[project]}
 *  a promise that resolves to a potentially empty array of projects in the database
 */
export async function listProjects(signal) {
  const url = new URL(`${API_BASE_URL}/projects`);
  return fetchJson(url, { headers, signal }, []);
}

/**
 * Fetches one existing project from the database based on it's ID
 * @param {*} projectId
 *  defines the id of the project we are looking for
 * @param {*} signal
 *  abort controller signal
 * @returns {Promise<[project]>}
 *  a promise that resolves to either an empty array or an array of length 1 containing a project from the database
 */
export async function readProject(projectId, signal) {
  const url = new URL(`${API_BASE_URL}/projects/${projectId}`);
  return fetchJson(url, { headers, signal }, []);
}
