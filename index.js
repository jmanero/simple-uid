var Crypto = require('crypto');

/**
 * Generates a string composed of the millisecond date, the current PID, and
 * some random bytes
 * 
 * @returns String
 */
function generator(url) {
	var randomnesss = Crypto.randomBytes(24);
	randomnesss.writeDoubleBE(Date.now(), 0);
	randomnesss.writeUInt32BE(process.pid, 8);

	var output = randomnesss.toString('base64');

	// URL safe
	if (url) {
		output = output.replace(/\//g, '_');
		output = output.replace(/\+/g, '-');
	}

	return output;
}

exports.generate = generator;
