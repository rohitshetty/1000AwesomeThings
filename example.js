const thousandAwesomeThings = require('./index');

thousandAwesomeThings.getAwesomeOfTheDay()
    .then(awesome => {
        console.log(awesome);
    })