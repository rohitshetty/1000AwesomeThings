const thousandAwesomeThings = require('./index');

thousandAwesomeThings.getAwesomeOfTheDayUrl()
    .then(awesome => {
        console.log(awesome);
    })