const randomIPGenerator = require('random-ip-generator');

// Generate a random fake IPv4 address
const randomIPv4 = randomIPGenerator.randomIpv4(); //radomIpv4(min, max) | default value - (0, 256)
console.log(randomIPv4);

// Generate a random fake IPv6 address
const randomIPv6 = randomIPGenerator.randomIpv6();
console.log(randomIPv6);

// Generate a random fake MAC address
const randomMAC = radomIPGenerator.randomMac();
console.log(randomMAC);