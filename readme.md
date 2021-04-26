![Image](https://img.shields.io/npm/v/useful-utils-typescript?color=%2351F9C0&label=useful-utils-typescript) 
![Image](https://img.shields.io/npm/dt/useful-utils-typescript.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/useful-utils-typescript.png?downloads=true&downloadRank=true&stars=true)
<br>

## Yüklemek İçin
```npm
npm install useful-utils-typescript
```

<br>

## Nasıl Kullanılır? 💫

# JS 
```js
const Useful = require("useful-utils-typescript");
const util = new Useful.Utils();

console.log(util.matematik(20, "+" ,11)) 
console.log(util.matematik(20, "-" ,11)) 
console.log(util.matematik(20, "*" ,11))
console.log(util.matematik(20, "/" ,11))
console.log(util.matematik(20, "%" ,11))

console.log(util.kufurKontrol("Selam")) // return false

let data = ["31","3150","31150","94994498"]

console.log(util.buyuktenKucuge(data))
console.log(util.kucuktenBuyuge(data))

console.log(util.esGec("Ab Meraba 31313131",5))
console.log(util.sondanEsGec("Ab Meraba 31313131",5))

 console.log(util.arrayKontrol(["arrayKontrol"])) // return true
 console.log(util.arrayKontrol("arrayKontrol")) // return false 

console.log(util.yukariYuvarla(1.9))
console.log(util.assagiYuvarla(1.5))
console.log(util.yuvarla(1.9))
console.log(util.kök(144))
let str = "144";
console.log(typeof util.numaraCevir(str))

```

Discord: Mert^^#2196
