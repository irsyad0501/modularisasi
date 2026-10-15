import { arrayFunction, objectFunction } from './config.mjs';


const daftarFunction = arrayFunction();


console.log(daftarFunction[0](10, 5)); 
console.log(daftarFunction[1](10, 5)); 
console.log(daftarFunction[2](10, 5)); 
console.log(daftarFunction[3](10, 5)); 
console.log(daftarFunction[4](2, 3));  


const kumpulanFunction = objectFunction();


console.log(kumpulanFunction.sapa('Budi'));          
console.log(kumpulanFunction.hitungPanjang('Kopi'));  
console.log(kumpulanFunction.keHurufBesar('halo'));   
console.log(kumpulanFunction.keHurufKecil('WORLD'));  
console.log(kumpulanFunction.cekGenap(8));      