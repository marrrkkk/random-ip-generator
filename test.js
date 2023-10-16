const { randomIpv4, randomIpv6, randomMac } = require('.')

console.log(`IPv4: ${randomIpv4()}`)
console.log(`IPv6: ${randomIpv6()}`)
console.log(`MAC: ${randomMac()}`)