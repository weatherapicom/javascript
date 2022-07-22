# Javascript client for WeatherAPI.com

# Introduction  
WeatherAPI.com provides access to weather and geo data via a JSON/XML restful API. It allows developers to create desktop, web and mobile applications using this data very easy.    

We provide following data through our API:     
- Real-time weather 
- 14 day weather forecast 
- Astronomy 
- Time zone 
- Location data 
- Search or Autocomplete API 
- NEW: Historical weather 
- NEW: Future Weather (Upto 300 days ahead) 
- Weather Alerts 
- Air Quality Data  

# Getting Started    
You need to [signup](https://www.weatherapi.com/signup.aspx) and then you can find your API key under [your account](https://www.weatherapi.com/login.aspx), and start using API right away!    

We have [code libraries](https://www.weatherapi.com/docs/code-libraries.aspx) for different programming languages like PHP, .net, JAVA, etc.  If you find any features missing or have any suggestions, please [contact us](https://www.weatherapi.com/contact.aspx).    

# Authentication    
API access to the data is protected by an API key. If at anytime, you find the API key has become vulnerable, please regenerate the key using Regenerate button next to the API key.  Authentication to the WeatherAPI.com API is provided by passing your API key as request parameter through an API .      

##  key parameter  
key=YOUR_API_KEY  

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install weather_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your weather_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('weather_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/weather_api
then install it via:

```shell
    npm install YOUR_USERNAME/weather_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WeatherApi = require('weather_api');

var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['key'] = "Token"

var api = new WeatherApi.APIsApi()

var q = "q_example"; // {String} Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var dt = new Date("2013-10-20"); // {Date} Date on or after 1st Jan, 2015 in yyyy-MM-dd format


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.astronomy(q, dt, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.weatherapi.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WeatherApi.APIsApi* | [**astronomy**](docs/APIsApi.md#astronomy) | **GET** /astronomy.json | Astronomy API
*WeatherApi.APIsApi* | [**forecastWeather**](docs/APIsApi.md#forecastWeather) | **GET** /forecast.json | Forecast API
*WeatherApi.APIsApi* | [**futureWeather**](docs/APIsApi.md#futureWeather) | **GET** /future.json | Future API
*WeatherApi.APIsApi* | [**historyWeather**](docs/APIsApi.md#historyWeather) | **GET** /history.json | History API
*WeatherApi.APIsApi* | [**ipLookup**](docs/APIsApi.md#ipLookup) | **GET** /ip.json | IP Lookup API
*WeatherApi.APIsApi* | [**realtimeWeather**](docs/APIsApi.md#realtimeWeather) | **GET** /current.json | Realtime API
*WeatherApi.APIsApi* | [**searchAutocompleteWeather**](docs/APIsApi.md#searchAutocompleteWeather) | **GET** /search.json | Search/Autocomplete API
*WeatherApi.APIsApi* | [**timeZone**](docs/APIsApi.md#timeZone) | **GET** /timezone.json | Time Zone API


## Documentation for Models

 - [WeatherApi.Alerts](docs/Alerts.md)
 - [WeatherApi.ArrayOfSearch](docs/ArrayOfSearch.md)
 - [WeatherApi.Astronomy](docs/Astronomy.md)
 - [WeatherApi.Current](docs/Current.md)
 - [WeatherApi.Error400](docs/Error400.md)
 - [WeatherApi.Error401](docs/Error401.md)
 - [WeatherApi.Error403](docs/Error403.md)
 - [WeatherApi.Forecast](docs/Forecast.md)
 - [WeatherApi.Ip](docs/Ip.md)
 - [WeatherApi.Location](docs/Location.md)
 - [WeatherApi.Search](docs/Search.md)


## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string

