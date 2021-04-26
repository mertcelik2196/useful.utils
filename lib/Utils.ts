import { EventEmitter } from "events";




export default class Utils extends EventEmitter {


  constructor(){super();};


    matematik(sayi1:number,islem:string,sayi2:number){
     if(!sayi1) throw new TypeError("1. Sayı Eksik!");
     if(!islem) throw new TypeError("Yapılacak İşlem Eksik!");
     if(!sayi2) throw new TypeError("2. Sayı Eksik!");
      switch(islem) {
       case "+":
        return (sayi1 + sayi2);
        break;
        case "-":
          return (sayi1 - sayi2);
          break;
          case "/":
          return (sayi1 / sayi2);
          break;
          case "*":
            return (sayi1 * sayi2);
            break;
            case "%":
              return (sayi1 % sayi2);
              break;
             default:
              throw new TypeError("Bir Hata İle Karşılaşıldı");
              break;
      };
    };

    kufurKontrol(kelime:string) {
     if(!kelime) throw new TypeError("Lütfen Kontrol Edeceğim Kelimeyi Yazın!");
     let küfürler  = require("../lib/helpers/badwords.json");
     let tüm = kelime.slice().split(/ +/g)
     if(!küfürler.some((kufur:string) => tüm.some((kelime:string) => kelime.toLowerCase() == kufur))) {
      return false;
   }else{  
       return true;
   }
    };

   buyuktenKucuge(data:any) {
    if(!data) throw new TypeError("Lütfen Büyükten Küçüğe Sıralayacağım Veriyi Yazın!");
     return data.sort((x:any,y:any) => y - x)
   }; 
                
   kucuktenBuyuge(data:any) {
    if(!data) throw new TypeError("Lütfen Küçükten Büyüğe Sıralayacağım Veriyi Yazın!");
    return data.sort((x:any,y:any) => x - y);
  }; 

   esGec(yazı:string,uzunluk:number) {
    if(!yazı) throw new TypeError("Es Geçilecek Metin Yazısını Yazmalısın!");
    if(!uzunluk) throw new TypeError("Es Geçilecek Uzunluğu Rakam Olarak Yazmalısın!"); 
    return yazı.substring(uzunluk, yazı.length);
   };

   sondanEsGec(yazı:string,uzunluk:number) {
    if(!yazı) throw new TypeError("Sondan Es Geçilecek Metin Yazısını Yazmalısın!");
    if(!uzunluk) throw new TypeError("Sondan Es Geçilecek Uzunluğu Rakam Olarak Yazmalısın!"); 
    return yazı.substring(0, yazı.length - uzunluk);
   };

   arrayKontrol(data:any) {
    if(!data) throw new TypeError("Lütfen Bir Veri Gir!"); 
    if(!Array.isArray(data)) {
      return false;
    }else{ 
      return true;
    };
   };
     

  numaraCevir(number:string) {
  if(!number) throw new TypeError("Numaraya Çevireceğim Veriyi Gir");
  if(typeof number == "number") throw new TypeError("Numaraya Çevireceğim Veriyi Gir, Bu Zaten Bir Numara");
  return Number(number);
  };

   assagiYuvarla(number:number) {
    if(!number) throw new TypeError("Aşşağıya Yuvarlayacağım Veriyi Gir");
    return Math.floor(number);
   };

   yukariYuvarla(number:number) {
    if(!number) throw new TypeError("Yukarıya Yuvarlayacağım Veriyi Gir");
    return Math.ceil(number);
   };

   yuvarla(number:number) {
    if(!number) throw new TypeError("Yuvarlayacağım Veriyi Gir");
    return Math.round(number);
   };

   kök(number:number) {
    if(!number) throw new TypeError("Karekök Verisini Gir");
    return Math.sqrt(number);
   };

};