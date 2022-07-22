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
    describe('Ip', function() {
      beforeEach(function() {
        instance = new WeatherApi.Ip();
      });

      it('should create an instance of Ip', function() {
        // TODO: update the code to test Ip
        expect(instance).to.be.a(WeatherApi.Ip);
      });

      it('should have the property ip (base name: "ip")', function() {
        // TODO: update the code to test the property ip
        expect(instance).to.have.property('ip');
        // expect(instance.ip).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property continentCode (base name: "continent_code")', function() {
        // TODO: update the code to test the property continentCode
        expect(instance).to.have.property('continentCode');
        // expect(instance.continentCode).to.be(expectedValueLiteral);
      });

      it('should have the property continentName (base name: "continent_name")', function() {
        // TODO: update the code to test the property continentName
        expect(instance).to.have.property('continentName');
        // expect(instance.continentName).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "country_code")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryName (base name: "country_name")', function() {
        // TODO: update the code to test the property countryName
        expect(instance).to.have.property('countryName');
        // expect(instance.countryName).to.be(expectedValueLiteral);
      });

      it('should have the property isEu (base name: "is_eu")', function() {
        // TODO: update the code to test the property isEu
        expect(instance).to.have.property('isEu');
        // expect(instance.isEu).to.be(expectedValueLiteral);
      });

      it('should have the property geonameId (base name: "geoname_id")', function() {
        // TODO: update the code to test the property geonameId
        expect(instance).to.have.property('geonameId');
        // expect(instance.geonameId).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
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