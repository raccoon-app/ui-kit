const layout = require('../layout');
const loadEnv = require('./load');
const getenv = require('getenv');

loadEnv(layout.envFilePath);

const port = getenv.int('PORT', 9000);

const environment = {
	API_BASE_URL: getenv('API_BASE_URL', `http://localhost:${port}`),
	PORT: port,
	NODE_ENV: getenv('NODE_ENV', 'production'),
	PLATFORM: getenv('PLATFORM', 'web'),
	DB_NAME: getenv('DB_NAME', 'raccoonApp'),
	DB_HOST: getenv('DB_HOST', 'localhost'),
	DB_PORT: getenv('DB_PORT', '27017'),
	DB_USER: getenv('DB_USER', ''),
	DB_PASSWORD: getenv('DB_PASSWORD', ''),
	SESSION_SECRET: getenv('SESSION_SECRET', 'secret12345'),
	// FACEBOOK_ID: getenv('FACEBOOK_ID', ''),
	// FACEBOOK_SECRET: getenv('FACEBOOK_SECRET', ''),
	// GOOGLE_PLUS_ID: getenv('GOOGLE_PLUS_ID', ''),
	// GOOGLE_PLUS_SECRET: getenv('GOOGLE_PLUS_SECRET', ''),
	IMAGE_HOSTING_URL: getenv('IMAGE_HOSTING_URL', '')
};


Object.assign(environment, checkIfTestAndGetDBEnv());

function checkIfTestAndGetDBEnv() {
	const testPrefix = 'TEST_';
    const isTest = (process.env.NODE_ENV === 'test');

    const prefixize = name => (isTest ? (testPrefix + name) : name);

    return {
        DB_NAME: getenv(prefixize('DB_NAME'), 'raccoonApp'),
        DB_HOST: getenv(prefixize('DB_HOST'), 'localhost'),
        DB_PORT: getenv(prefixize('DB_PORT'), '27017'),
        DB_USER: getenv(prefixize('DB_USER'), ''),
        DB_PASSWORD: getenv(prefixize('DB_PASSWORD'), ''),
    }
}

module.exports = environment;


