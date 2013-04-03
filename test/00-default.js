var Assert = require('assert');

var UID = require('../');

describe("Simple UID", function() {
	var count = 1000000;
	describe("Reasonable uniqueness: No collisions in " + count + " generations", function() {
		var tries = {};

		for ( var i = 0; i < count; i++) {
			var r = UID.generate();
			if (tries[r]) {
				tries[r]++;
				next;
			}

			tries[r] = 1;
		}
		
		it("didn't colide", function() {
			var len = Object.keys(tries).length;
			Assert.equal(len, count, "Oh, No. There were " + (count - len) + " collisions!");
		});
	});
});