# WeatherApi.APIsApi

All URIs are relative to *https://api.weatherapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**astronomy**](APIsApi.md#astronomy) | **GET** /astronomy.json | Astronomy API
[**forecastWeather**](APIsApi.md#forecastWeather) | **GET** /forecast.json | Forecast API
[**futureWeather**](APIsApi.md#futureWeather) | **GET** /future.json | Future API
[**historyWeather**](APIsApi.md#historyWeather) | **GET** /history.json | History API
[**ipLookup**](APIsApi.md#ipLookup) | **GET** /ip.json | IP Lookup API
[**realtimeWeather**](APIsApi.md#realtimeWeather) | **GET** /current.json | Realtime API
[**searchAutocompleteWeather**](APIsApi.md#searchAutocompleteWeather) | **GET** /search.json | Search/Autocomplete API
[**timeZone**](APIsApi.md#timeZone) | **GET** /timezone.json | Time Zone API


<a name="astronomy"></a>
# **astronomy**
> Object astronomy(q, dt)

Astronomy API

Return Location and Astronomy Object

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var dt = new Date("2013-10-20"); // Date | Date on or after 1st Jan, 2015 in yyyy-MM-dd format


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.astronomy(q, dt, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 
 **dt** | **Date**| Date on or after 1st Jan, 2015 in yyyy-MM-dd format | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="forecastWeather"></a>
# **forecastWeather**
> Object forecastWeather(q, days, opts)

Forecast API

Forecast weather API method returns upto next 10 day weather forecast and weather alert as json. The data is returned as a Forecast Object.<br /><br />Forecast object contains astronomy data, day weather forecast and hourly interval weather information for a given city.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var days = 56; // Number | Number of days of weather forecast. Value ranges from 1 to 14

var opts = { 
  'dt': new Date("2013-10-20"), // Date | Date should be between today and next 14 day in yyyy-MM-dd format. e.g. '2015-01-01'
  'unixdt': 56, // Number | Please either pass 'dt' or 'unixdt' and not both in same request. unixdt should be between today and next 14 day in Unix format. e.g. 1490227200
  'hour': 56, // Number | Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6
  'lang': "lang_example" // String | Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.forecastWeather(q, days, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 
 **days** | **Number**| Number of days of weather forecast. Value ranges from 1 to 14 | 
 **dt** | **Date**| Date should be between today and next 14 day in yyyy-MM-dd format. e.g. '2015-01-01' | [optional] 
 **unixdt** | **Number**| Please either pass 'dt' or 'unixdt' and not both in same request. unixdt should be between today and next 14 day in Unix format. e.g. 1490227200 | [optional] 
 **hour** | **Number**| Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6 | [optional] 
 **lang** | **String**| Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="futureWeather"></a>
# **futureWeather**
> Object futureWeather(q, opts)

Future API

Future weather API method returns weather in a 3 hourly interval in future for a date between 14 days and 300 days from today in the future.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var opts = { 
  'dt': new Date("2013-10-20"), // Date | Date should be between 14 days and 300 days from today in the future in yyyy-MM-dd format (i.e. dt=2023-01-01)
  'lang': "lang_example" // String | Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.futureWeather(q, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 
 **dt** | **Date**| Date should be between 14 days and 300 days from today in the future in yyyy-MM-dd format (i.e. dt=2023-01-01) | [optional] 
 **lang** | **String**| Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="historyWeather"></a>
# **historyWeather**
> Object historyWeather(q, dt, opts)

History API

History weather API method returns historical weather for a date on or after 1st Jan, 2010 as json. The data is returned as a Forecast Object.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var dt = new Date("2013-10-20"); // Date | Date on or after 1st Jan, 2015 in yyyy-MM-dd format

var opts = { 
  'unixdt': 56, // Number | Please either pass 'dt' or 'unixdt' and not both in same request.<br />unixdt should be on or after 1st Jan, 2015 in Unix format
  'endDt': new Date("2013-10-20"), // Date | Date on or after 1st Jan, 2015 in yyyy-MM-dd format<br />'end_dt' should be greater than 'dt' parameter and difference should not be more than 30 days between the two dates.
  'unixendDt': 56, // Number | Date on or after 1st Jan, 2015 in Unix Timestamp format<br />unixend_dt has same restriction as 'end_dt' parameter. Please either pass 'end_dt' or 'unixend_dt' and not both in same request. e.g. unixend_dt=1490227200
  'hour': 56, // Number | Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6
  'lang': "lang_example" // String | Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.historyWeather(q, dt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 
 **dt** | **Date**| Date on or after 1st Jan, 2015 in yyyy-MM-dd format | 
 **unixdt** | **Number**| Please either pass 'dt' or 'unixdt' and not both in same request.<br />unixdt should be on or after 1st Jan, 2015 in Unix format | [optional] 
 **endDt** | **Date**| Date on or after 1st Jan, 2015 in yyyy-MM-dd format<br />'end_dt' should be greater than 'dt' parameter and difference should not be more than 30 days between the two dates. | [optional] 
 **unixendDt** | **Number**| Date on or after 1st Jan, 2015 in Unix Timestamp format<br />unixend_dt has same restriction as 'end_dt' parameter. Please either pass 'end_dt' or 'unixend_dt' and not both in same request. e.g. unixend_dt=1490227200 | [optional] 
 **hour** | **Number**| Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6 | [optional] 
 **lang** | **String**| Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="ipLookup"></a>
# **ipLookup**
> Ip ipLookup(q)

IP Lookup API

IP Lookup API method allows a user to get up to date information for an IP address.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass IP address.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ipLookup(q, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass IP address. | 

### Return type

[**Ip**](Ip.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="realtimeWeather"></a>
# **realtimeWeather**
> Object realtimeWeather(q, opts)

Realtime API

Current weather or realtime weather API method allows a user to get up to date current weather information in json and xml. The data is returned as a Current Object.<br /><br />Current object contains current or realtime weather information for a given city.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var opts = { 
  'lang': "lang_example" // String | Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.realtimeWeather(q, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 
 **lang** | **String**| Returns 'condition:text' field in API in the desired language.<br /> Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to check 'lang-code'. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="searchAutocompleteWeather"></a>
# **searchAutocompleteWeather**
> ArrayOfSearch searchAutocompleteWeather(q)

Search/Autocomplete API

WeatherAPI.com Search or Autocomplete API returns matching cities and towns as an array of Location object.

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAutocompleteWeather(q, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 

### Return type

[**ArrayOfSearch**](ArrayOfSearch.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="timeZone"></a>
# **timeZone**
> Location timeZone(q)

Time Zone API

Return Location Object

### Example
```javascript
var WeatherApi = require('weather_api');
var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new WeatherApi.APIsApi();

var q = "q_example"; // String | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeZone(q, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more. | 

### Return type

[**Location**](Location.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

