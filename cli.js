#!/usr/bin/env node
import meow from 'meow';
import {internalIpV6Sync, internalIpV4Sync} from 'internal-ip';

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
	importMeta: import.meta,
	flags: {
		ipv6: {
			type: 'boolean',
			default: true,
			alias: '6',
		},
		ipv4: {
			type: 'boolean',
			alias: '4',
		},
	},
});

const getIp = cli.flags.ipv4 ? internalIpV4Sync : internalIpV6Sync;

console.log(getIp());
