# random-ip-generator

A JavaScript npm package for generating random fake IPv4, IPv6, and MAC addresses.

## Installation

You can install `random-ip-generator` via npm:

```bash
npm install random-ip-generator
```

## Usage

```js
const randomIPGenerator = require('random-ip-generator');

// Generate a random fake IPv4 address
const randomIPv4 = randomIPGenerator.randomIpv4(); //=> randomIpv4(min, max) | default value - (0, 256)
console.log(randomIPv4);

// Generate a random fake IPv6 address
const randomIPv6 = randomIPGenerator.randomIpv6();
console.log(randomIPv6);

// Generate a random fake MAC address
const randomMAC = randomIPGenerator.randomMac();
console.log(randomMAC);
```
