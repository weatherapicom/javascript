/*
 * Weather API
 *  # Introduction  WeatherAPI.com provides access to weather and geo data via a JSON/XML restful API. It allows developers to create desktop, web and mobile applications using this data very easy.    We provide following data through our API:     - Real-time weather - 14 day weather forecast - Astronomy - Time zone - Location data - Search or Autocomplete API - NEW: Historical weather - NEW: Future Weather (Upto 300 days ahead) - Weather Alerts - Air Quality Data  # Getting Started    You need to [signup](https://www.weatherapi.com/signup.aspx) and then you can find your API key under [your account](https://www.weatherapi.com/login.aspx), and start using API right away!    We have [code libraries](https://www.weatherapi.com/docs/code-libraries.aspx) for different programming languages like PHP, .net, JAVA, etc.  If you find any features missing or have any suggestions, please [contact us](https://www.weatherapi.com/contact.aspx).    # Authentication    API access to the data is protected by an API key. If at anytime, you find the API key has become vulnerable, please regenerate the key using Regenerate button next to the API key.  Authentication to the WeatherAPI.com API is provided by passing your API key as request parameter through an API .      ##  key parameter  key=<YOUR API KEY>  
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WeatherApi);
  }
}(this, function(expect, WeatherApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WeatherApi.APIsApi();
  });

  describe('(package)', function() {
    describe('APIsApi', function() {
      describe('astronomy', function() {
        it('should call astronomy successfully', function(done) {
          // TODO: uncomment, update parameter values for astronomy call and complete the assertions
          /*
          var q = "q_example";
          var dt = new Date("2013-10-20");

          instance.astronomy(q, dt, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('forecastWeather', function() {
        it('should call forecastWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for forecastWeather call and complete the assertions
          /*
          var q = "q_example";
          var days = 56;
          var opts = {};
          opts.dt = new Date("2013-10-20");
          opts.unixdt = 56;
          opts.hour = 56;
          opts.lang = "lang_example";

          instance.forecastWeather(q, days, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('futureWeather', function() {
        it('should call futureWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for futureWeather call and complete the assertions
          /*
          var q = "q_example";
          var opts = {};
          opts.dt = new Date("2013-10-20");
          opts.lang = "lang_example";

          instance.futureWeather(q, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('historyWeather', function() {
        it('should call historyWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for historyWeather call and complete the assertions
          /*
          var q = "q_example";
          var dt = new Date("2013-10-20");
          var opts = {};
          opts.unixdt = 56;
          opts.endDt = new Date("2013-10-20");
          opts.unixendDt = 56;
          opts.hour = 56;
          opts.lang = "lang_example";

          instance.historyWeather(q, dt, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ipLookup', function() {
        it('should call ipLookup successfully', function(done) {
          // TODO: uncomment, update parameter values for ipLookup call and complete the assertions
          /*
          var q = "q_example";

          instance.ipLookup(q, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(WeatherApi.Ip);
            expect(data.ip).to.be.a('string');
            expect(data.ip).to.be("185.249.71.82");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("ipv4");
            expect(data.continentCode).to.be.a('string');
            expect(data.continentCode).to.be("EU");
            expect(data.continentName).to.be.a('string');
            expect(data.continentName).to.be("Europe");
            expect(data.countryCode).to.be.a('string');
            expect(data.countryCode).to.be("GB");
            expect(data.countryName).to.be.a('string');
            expect(data.countryName).to.be("United Kingdom");
            expect(data.isEu).to.be.a('string');
            expect(data.isEu).to.be("false");
            expect(data.geonameId).to.be.a('number');
            expect(data.geonameId).to.be(2643743);
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("London");
            expect(data.region).to.be.a('string');
            expect(data.region).to.be("");
            expect(data.lat).to.be.a('number');
            expect(data.lat).to.be(51.5264);
            expect(data.lon).to.be.a('number');
            expect(data.lon).to.be(-0.0841);
            expect(data.tzId).to.be.a('string');
            expect(data.tzId).to.be("Europe/London");
            expect(data.localtimeEpoch).to.be.a('number');
            expect(data.localtimeEpoch).to.be(1658520645);
            expect(data.localtime).to.be.a('string');
            expect(data.localtime).to.be("2022-07-22 21:10");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('realtimeWeather', function() {
        it('should call realtimeWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for realtimeWeather call and complete the assertions
          /*
          var q = "q_example";
          var opts = {};
          opts.lang = "lang_example";

          instance.realtimeWeather(q, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchAutocompleteWeather', function() {
        it('should call searchAutocompleteWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for searchAutocompleteWeather call and complete the assertions
          /*
          var q = "q_example";

          instance.searchAutocompleteWeather(q, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(WeatherApi.ArrayOfSearch);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('timeZone', function() {
        it('should call timeZone successfully', function(done) {
          // TODO: uncomment, update parameter values for timeZone call and complete the assertions
          /*
          var q = "q_example";

          instance.timeZone(q, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(WeatherApi.Location);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("New York");
            expect(data.region).to.be.a('string');
            expect(data.region).to.be("New York");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("United States of America");
            expect(data.lat).to.be.a('number');
            expect(data.lat).to.be(40.71);
            expect(data.lon).to.be.a('number');
            expect(data.lon).to.be(-74.01);
            expect(data.tzId).to.be.a('string');
            expect(data.tzId).to.be("America/New_York");
            expect(data.localtimeEpoch).to.be.a('number');
            expect(data.localtimeEpoch).to.be(1658522976);
            expect(data.localtime).to.be.a('string');
            expect(data.localtime).to.be("2022-07-22 16:49");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
