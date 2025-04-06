//1.buat perulangan dari suatu variabel bertipe array
//contoh:
//const x = [3,5,12]
//loop data...
//total nilai adalah 20 karena 3 + 5 + 12 = 20

//looping data tersebut menggunakan for,while,do-while
//dan munculkan juga jumlah hasil penambahan semua angka
//yang ada di dalam array tersebut seperti pada contoh


//1.menggunakan for
// const y = [4,6,14,16]
// let total = 0

// for(let x = 0; x < y.length; x++) {
//     total += y[x];
// }
// console.log('total nilai adalah ' + total);

//2.menggunakan while

// const y = [4, 6, 14, 16];
// let total = 0;
// let x = 0;
// while (x < y.length) {
//     total += y[x];
//     x++;
// }
// console.log('total nilai adalah ' +total);

//3.menggunakan do-while

const y = [3,5,7,9,11];
let total = 0;
let i = 0;
 do {
    total += y[i];
    i++;
  } while (i < y.length);
    console.log('total nilai adalah ' +total)