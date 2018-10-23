## 1000 Awesome Things 
[1000AwesomeThings](https://1000awesomethings.com) is a website that publishes one awesome thing about everyday life.
This is an attempt to access that content programmatically.

This internally uses request-promise and cheerio to download the page and grab the content. 

### API

- `getAwesomeOfTheDayUrl`
    Get the url to the Awesomeness of the day. This fetches the home page internally and finds the most recent post and returns its url.

Usage:

```js
const thousandAwesomeThings = require('./index');

thousandAwesomeThings.getAwesomeOfTheDayUrl()
    .then(awesome => {
        console.log(awesome);
    });

```