// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2301-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    // console.log(result);
    return result.data.players
  } catch (err) {
    console.error(err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `${APIURL}players${playerId}`
    );
    const result = await response.json();
    console.log(resultz);
  } catch (err) {
    console.error(err);
  }
};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
