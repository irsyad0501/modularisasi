export const arrayFunction = () => [
  (a, b) => a + b,      
  (a, b) => a - b,      
  (a, b) => a * b,      
  (a, b) => a / b,      
  (a, b) => a ** b      
];


export const objectFunction = () => ({
  sapa: (nama) => `Halo, ${nama}!`,
  hitungPanjang: (str) => str.length,
  keHurufBesar: (str) => str.toUpperCase(),
  keHurufKecil: (str) => str.toLowerCase(),
  cekGenap: (n) => n % 2 === 0
});

