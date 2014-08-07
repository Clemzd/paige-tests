var bescribe = require('be-paige/bescribe');
var LoginPage = require('../../../lib/login/login.js');
var CustomerAccountEditPage = require('../../../lib/customer/account/edit.js');

var config = {
  address: 'http://happy.pixafy.com/glassful/current/index.php',
  webdriver: {
    address: 'http://localhost:4444/wd/hub',
    config: {
      platform: 'MAC',
      browserName: 'chrome'
    }
  }
};

var customerAccountEditContext;

bescribe("Edit account information", config, function(context, describe, it) {


  beforeEach(function() {
    customerAccountEditContext = context.Page.build().redirectTo(LoginPage)
      .completeLoginForm('glassful.test@yopmail.com', 'password')
      .submitLoginForm()
      .redirectTo(CustomerAccountEditPage);
  });

  describe("Edit first name", function() {
    it("Empty", function() {
      customerAccountEditContext.completeEditForm('', 'new last name', 'glassful.newemail@yopmail.com')
        .submitEditForm()
        .onPage();
    });

    it("Not empty", function() {
      customerAccountEditContext.completeEditForm('new first name', 'new last name', 'glassful.newemail@yopmail.com');
    });
  });

  describe("Edit last name", function() {
    it("Empty", function() {
      customerAccountEditContext.completeEditForm('new first name', '', 'glassful.newemail@yopmail.com')
        .submitEditForm()
        .onPage();
    });

    it("Not empty", function() {
      customerAccountEditContext.completeEditForm('new first name', 'new last name', 'glassful.newemail@yopmail.com');
    });
  });

  describe("Edit mail address", function() {
    it("Invalid mail address", function() {
      customerAccountEditContext.completeEditForm('new first name', 'new last name', 'glassful.newemailyopmail.com')
        .submitEditForm()
        .onPage();
    });

    it("Valid mail address", function() {
      customerAccountEditContext.completeEditForm('new first name', 'new last name', 'glassful.newemail@yopmail.com');
    });
  });

});