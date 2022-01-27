const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(flyby) {
  for (const fly of flyby) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = fly.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyby) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(flyby);
});