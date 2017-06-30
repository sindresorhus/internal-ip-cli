#!/usr/bin/env node
'use strict';
const meow = require('meow');
const internalIp = require('internal-ip');

const cli = meow(`
	Usage
	  $ internal-ip

	Options
	  --ipv6 -6  Return the IPv6 address (Default)
	  --ipv4 -4  Return the IPv4 address

	Examples
	  $ internal-ip
	  fe80::1
	  $ internal-ip --ipv4
	  10.0.0.79
`, {
	boolean: [
		'ipv6',
		'ipv4'
	],
	alias: {
		6: 'ipv6',
		4: 'ipv4'
	}
});

const fn = cli.flags.ipv4 ? 'v4' : 'v6';
internalIp[fn]().then(console.log);
