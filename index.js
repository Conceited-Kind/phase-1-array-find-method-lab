// Function to find the year the Denver Broncos won the Superbowl
function superbowlWin(record) {
  const winRecord = record.find(game => game.result === "W");
  return winRecord ? winRecord.year : undefined;
}

// Export the function for testing
module.exports = superbowlWin;