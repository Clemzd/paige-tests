module.exports = {
	account: {
		email: 'test.glassful@yopmail.com',
		password: 'password'
	},
	createNewAccount: function() {
		return {
			email: 'glassful.test.sign-up' + new Date().getTime() + '@yopmail.com',
			password: 'password'
		};
	},
    coupon:{
        invalid:'wrongcode',
        valid: 'BEPAIGETEST'
    }
};