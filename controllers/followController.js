let followController = module.exports;
const assert = require('assert');
const Definer = require('../lib/mistake');
const Follow = require('../models/Follow');

followController.subscribe = async (req, res) => {
	try {
		console.log('GET: cont/subscribe');
		assert.ok(req.member, Definer.auth_err5);

		const follow = new Follow();
		await follow.subscribeData(req.member, req.body);
		res.json({ state: 'success', data: 'subscribed' });
	} catch (err) {
		console.log(`ERROR, cont/subscribe ${err.message}`);
		res.json({ state: 'fail', message: err.message });
	}
};

followController.unsubscribe = async (req, res) => {
	try {
		console.log('GET: cont/unsubscribe');
		assert.ok(req.member, Definer.auth_err5);

		const follow = new Follow();
		await follow.unsubscribeData(req.member, req.body);

		res.json({ state: 'success', data: 'unsubscribed' });
	} catch (err) {
		console.log(`ERROR, cont/unsubscribe ${err.message}`);
		res.json({ state: 'fail', message: err.message });
	}
};

followController.getMemberFollowings = async (req, res) => {
	try {
		console.log('GET: cont/getMemberFollowings');
		const follow = new Follow();
		const result = await follow.getMemberFollowingsData(req.query);
	
		res.json({ state: 'success', data: result });
	} catch (err) {
		console.log(`ERROR, cont/getMemberFollowings ${err.message}`);
		res.json({ state: 'fail', message: err.message });
	}
};
