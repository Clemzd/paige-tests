var bescribe = require('be-paige/bescribe');
var LoginPage = require('../../lib/login/login.js');
var MonthlyBoxPage = require('../../lib/monthly-box/monthly-box.js');
var config = require('../config/config.js');

var loginPageContext;

bescribe("Batch tasks", config, function(context, describe, it) {
  // Login tests
  describe("Login", function() {

    beforeEach(function() {
      loginPageContext = context.Page.build()
        .redirectTo(LoginPage);
    });

    it("login successfully", function() {
      loginPageContext
        .completeLoginForm('glassful.test@yopmail.com', 'password')
        .submitLoginForm()
        .switchTo(MonthlyBoxPage)
        .onPage();
    });

    it("password does not exists", function() {
      loginPageContext
        .completeLoginForm('glassful.test@yopmail.com', '')
        .submitLoginForm()
        .onPage();
    });

    it("account does not exist", function() {
      loginPageContext
        .completeLoginForm('doesnotexist@doesnotexists.fr', 'doesnotexists')
        .submitLoginForm()
        .onPage();
    });

  });

});