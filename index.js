const randomIp = {
    randomIpv4(min = 0, max = 256){
        if(max > 256) throw console.log("Maximum is 256 value");
        const randomIpGenerator = () => Math.floor(Math.random() * (max - min) + min);
        return `${randomIpGenerator()}.${randomIpGenerator()}.${randomIpGenerator()}.${randomIpGenerator()}`;
    },

    randomIpv6(){
        const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
        let ipv6 = "";

        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 4; j++){
                const index = Math.floor(Math.random() * characters.length);
                ipv6 += characters[index];
            };
            if(i !== 7) {
                ipv6 += ':';
            };
        };
        return ipv6;
    },

    randomMac(){
        const characters = "0123456789ABCDEF";
        let mac = "";
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 2; j++){
                const index = Math.floor(Math.random() * characters.length);
                mac += characters[index];
            }
            if(i !== 5) {
                mac += '-';
            }
        }
        return mac;
    }
};

module.exports = randomIp;