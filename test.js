import {isIPv4, isIPv6} from 'node:net';
import test from 'ava';
import execa from 'execa';

test('IPv6', async t => {
	const {stdout} = await execa('./cli.js', ['--ipv6']);
	t.true(isIPv6(stdout));
});

test('IPv4', async t => {
	const {stdout} = await execa('./cli.js', ['--ipv4']);
	t.true(isIPv4(stdout));
});
