const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  if (
    !(date instanceof Date) ||
    !Object.getOwnPropertyNames(date.__proto__).includes("toLocaleString")
  ) {
    throw new Error("Invalid date!");
  }

  try {
    date.getUTCDay();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth() + 1;

  if (month === 12 || month <= 2) {
    return 'winter';
  } else if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else {
    return 'autumn|fall';
  }
}

module.exports = {
  getSeason
};
