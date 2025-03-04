//function adlah sebuah block code yang dapat digunakan kembali atau sebagai return

//contoh function:

// function addName() {
//     'sebastian'
// }

// alert(addName())

//contoh lain jika mengembalikan nilai yang diinput oleh user:

// function addName(fullname) {
//     return fullname
// }

// addName('sebastian')

//artinya function addName dipanggil dikasih nilai Sebastian dari pemanggilnya langsung,
// lalu functionnya ditangkap lewat satu variabel bernama fullname dan pengembalian return fullname nya

//1.passing parameter 
//berarti mengirim data ke dalam function melalui parameter

//contoh:
// function tambahNama (firstName,lastName) {
//     console.log('nama depan:',firstName)
//     console.log('nama marga:', lastName)

//     addName('sebastian' ,'cahyana')
// }

//menggunakan arguments

// function namaSaya() {
//     console.log('nama depan :', arguments[1])
//         console.log('nama marga:' ,arguments[0])
// }

// namaSaya('sebastian' , 'cahyana')

//kalau misal tidak tau argument nya apa saja gunakan for 

// function namaMu() {
//     for (let i = 0; i < arguments.length; i++)
//         console.log('nama lengkap:',arguments[i])
// }

// namaMu('sebastian','alexander','cahyana','eka')

//kalau pakai cara argument akan sedikit ribet dan hanya digunakandi kasus kasus tertentu
//kita pakai cara umum saja,contoh:

// const fullname = function addName(firstName, lastName)
// {
//     console.log(firstName,lastName)}
// fullname('sebastian','cahyana')

//selain itu ada menggunakan keyword new,contoh:

// const fullname = new Function(
//     'firstName',
//     'lastName',
//     'console.log(firstName, lastName)',
// )

//  fullname('sebastian','cahyana')

//kelebihan memakai new function adaalah:

// const number = new Function(
//     'x','y',
//     'return x+y',
// )

// console.log(number(1,3)) 

//bisa juga sederhananya:
// const number = new Function('x','y', 'console.log(x+y)')
// number(1,2)

//menggunakan new function untuk membuat teks atau string

// const nama = new Function('console.log("ini saya")')

//contoh lainnya atau standart function itu seperti ini:


// function sum2(x, y) {
// console.log(x+y)
// }

// sum(2,5)

//artinya 2 itu x nya 5 itu y nya jadi 2 + 5

//pada javaScript terdapaat namanya itu hoisting,hoisting adalah variabelnya bisa tereksekusi sebelum di declar/dideklarasikan

//contoh

// console.log(data)
// var data = 2

//ini akan muncul undefined,kenapa undifined karena console.log atau sebagai eksekutor nya itu berada di atas variabel data nya 

//jika menggunakan const:

// console.log(barisan)
// const barisan = 2

// ini akan menjadi error karena variabel const itu tidak bisa baca pada console.log karena urutannya dari atas ke bawah jadi si const itu menolak.

//penggunaan if else pada function:

function randomNumber() {
    const acakAngka =  (Math.random() * 1000 ).toFixed(0)
    if(acakAngka > 300) {
        console.log('wow lebih dari 300 angkanya',acakAngka)
    } else{
        console.log(acakAngka)
    }
}

randomNumber();
//disini maksud dari code ini adalah
//function randomNumber,lalu const acak angka Math.random adalah sebuah angka yang di acak oleh sistem setiap kali merefresh maka dia akan berubah setiap satu kali refresh
//if,disini jika variabel acakAngka itu lebih dari 300 maka console.log akan tunjukan tulisan wow lebih dari 300 angkanya,maksudnya ketika Math.ranom * 1000 dia lebih 300 maka muncul lah di console.log
//else,disini jika acakAngka itu tidak lebih dari 300 atau 300 pas maka hanya munculnya angka dari Math.random * 1000 itu tadi