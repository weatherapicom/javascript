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

  describe('(package)', function() {
    describe('Location', function() {
      beforeEach(function() {
        instance = new WeatherApi.Location();
      });

      it('should create an instance of Location', function() {
        // TODO: update the code to test Location
        expect(instance).to.be.a(WeatherApi.Location);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property lat (base name: "lat")', function() {
        // TODO: update the code to test the property lat
        expect(instance).to.have.property('lat');
        // expect(instance.lat).to.be(expectedValueLiteral);
      });

      it('should have the property lon (base name: "lon")', function() {
        // TODO: update the code to test the property lon
        expect(instance).to.have.property('lon');
        // expect(instance.lon).to.be(expectedValueLiteral);
      });

      it('should have the property tzId (base name: "tz_id")', function() {
        // TODO: update the code to test the property tzId
        expect(instance).to.have.property('tzId');
        // expect(instance.tzId).to.be(expectedValueLiteral);
      });

      it('should have the property localtimeEpoch (base name: "localtime_epoch")', function() {
        // TODO: update the code to test the property localtimeEpoch
        expect(instance).to.have.property('localtimeEpoch');
        // expect(instance.localtimeEpoch).to.be(expectedValueLiteral);
      });

      it('should have the property localtime (base name: "localtime")', function() {
        // TODO: update the code to test the property localtime
        expect(instance).to.have.property('localtime');
        // expect(instance.localtime).to.be(expectedValueLiteral);
      });

    });
  });

}));
