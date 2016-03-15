var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Player Model
 * =============
 */

var Player = new keystone.List('Player', {
	map: {name:'fullname'},
	autokey: {path: 'slug', from: 'fullname', unique: true}
});

Player.add({
	fullname: { type: Types.Name, required: true, default: 'Navn?' },
	email: { type: Types.Email, required: true },
	createdAt: { type: Date, default: Date.now }
});

//Player.defaultSort = '-createdAt';
Player.defaultColumns = 'fullname, email, createdAt';
Player.register();
