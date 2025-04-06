//for(statment 1, statment 2, statment 3)

//contoh implementasi pada statment nya

// for(let z = 0; z < 10; z++)
    //let z = 0 itu statment 1,z < 10 itu statment 2,z++ itu statment 3
//bahasanya gini:nilai z atau let z itu nilai nya 0, z kurang dari 10 maka z++ atau z=z+1 atau bertambah nilainya
//contoh pengimplementasian yang tepat:

for ( let z = 1; z <= 5; z++) {
    console.log('data ke -', z)
}
    //pengecualian jika mau sampai ke 10, for(let z = 0; z < 10; z++) ini akan menlooping sebanyak 9 kali kenapa karena mulai dari 0 dan z itu kurang dari 10
    //kalau mau barisannya ada 10 alias data ke - 10 maka:
    //for ( let z = 0; z <= 10; z++) ini artinya z itu kurang atau sama dengan sepuluh dimulai dari z itu nilainya 0 lalu dia akan bertambah ++

    //penjelasan tentang z dimulai dari 1 dan secara urut

    // data ke - 1 ---------------------- z = 2
    // data ke - 2 ---------------------- z = 3
    // data ke - 3 ---------------------- z = 4
    // data ke - 4 ---------------------- z = 5
    // data ke - 5 ---------------------- z - 6

    // z = 6 karena z sudah lebih dari  sama dengan 5 maka end of loop tidak akan masuk

    //kombinasi kan dengan pengondisian modulus

    // for (let z = 5; z >= 1; z--) {
    //     if( z % 2 == 0) console.log('data ke-',z)
    // }

    //ini artinya nilai z itu 5, z >= 1 artinya selama variabel z itu masih besar atau sama dengan 1 maka looping tetap jalan
    //if di sini bertujuan atau memiliki arti z % 2 == 0,artinya ketika z habis dibagi 2(bil genap) artinya yang habis dibagi oleh bilangan 2 tanpa sisa(modulus)
    //maka hasil true nya adalah data ke - 4 dan data ke - 2 saja,mengapa?
    //karena data ke 4 adalah bilangan yang habis dibagi 2 dan menjadi == 0,begitu pula dengan 2 yang habis di bagi dengan 0 == 0
    //selain itu karena tadi z >= 1 lebih besar dari 1 begitu juga dengan bilangan ke 4 dan ke 2,mereka lebih besar dari 1.
    //selain itu ketika !== 0 ini artinya tidak sama dengan 0 maka yang keluar nanti yang ganjil ketika % 2 atau pembagian sisa 2,tidak sama dengan 0 alias tidak habis
    //maka yang muncul nilai ganjil yang lebih besar atau sama dengan 1 contohnya 5,3,1

    //looping dengan menggunakan while:
    //  let x = 1
    //  while(x <= 10) {
    //     if(x % 2 == 0) {
    //     console.log('data ke -', x)
    //     }
    //     x++
    //  }
     //jadi ini bacanya gini: 
     //x diawal nilainya 1 lalu jika x kurang atau sama dengan 10 maka x++
     //selebihnya sama pengertiannya pada bagian if

     //looping dengan menggunakan do-while (lakukan dulu):
    //  let y = 1
    //  do {
    //     if(y % 2 !== 0) {
    //     console.log('data y ke-', y)
    //  }
    //     y++
    //  } while(y <= 10)
        //kurang lebih penjelasannya sama hanya membedakan ini melakukan console.log dulu baru while alias do-while

        //perbedaan dari for,while,do-while
        //1.perbedaan antara do-while dan while itu sangat signifikan,
    
        //contoh while
        // let x = 10
        //while (x <= 5 ) {
        // console.log('data x ke -',x)
        // x++
        // }

        //ini akan tidak mengeluarkan output nya karena let x nya itu 10 dan while nya itu x kurang atau sama dengan 5,sementara variabel x di atasnya itu nilainya sudah 10 maka tidak akan keluar.
        //contoh pembacaan nya,apakah 10 kurang atau sama dengan 5 tentu kan tidak makanya tidak keluar ini yang dinamakan kondisi nya tidak matching

        //contoh do-while
        //let y = 10
        //do {
        // console.log('data y ke-',y)
        //y++
        // } while (y <= 5)
        
        //disini do-while akan mengeluarkan 1 kali meskipun tidak matching.
        //contoh disini let y = 10 sama seperti while di atas kan,tetapi bedanya while tidak akann mengeluarkan output apa apa karena tidak matching.
        //sedangkan do -while akan mengeluarkan 1 yaitu, 10 karena let y = 10 lalu do console.log yang artinya y nilai nya 10 langsung di suruh console.log walaupun,y kurang atau sama dengan 5(tidak matching)
        //jika mau muncul while ( y <= 5 ) maka let y harus di bawah 5 dan matching

        //1.for map
        //2.for of
        //3.for in
        //4.for each

        //2.for of
        //mendapatkan value nya langsung artinya langsung 1 baris pada array nya,contoh:

        // const namaSekolah = ['SMKN7', 'SMKN8','SMAN2', 'SMKN4']

        // for (let sekolah of namaSekolah) {
        //     console.log(sekolah)
        // }

        //ini artinya tetap memunculkan semua nilai atau value yang ada pada array nya alias memunculkan value nya
        //berbeda jika secara langsung console.log(namaSekolah)
        //itu akan memunculkan array nya beserta [] '' dan , akan muncul semua makanya di sini gunakan for of agar value nya terlooping satu per satu

        //3.for in

        // const namaSekolah = ['SMKN7', 'SMKN8','SMAN2', 'SMKN4']

        // for (let sekolah in namaSekolah) {
        //     console.log(sekolah)
        // }

        //kalau di sini for in itu untuk memunculkan nomor atau angka dari index yang berada di dalam array tersebut 
        //contoh SMKN7 itu index ke 0,SMKN8 itu index ke 1
        //seperti itu dia akan memunculkan hanya angka index nya tanpa memunculkan value nya
        
        //4.for each

        // const namaSekolah = ['SMKN7', 'SMKN8','SMAN2', 'SMKN4']

        // namaSekolah.forEach((sekolah, index) => {
        //     console.log(sekolah,index)
        // });

        //ini akan tetap sama dengan for of bedanya ini bisa sekaligus memunculkan value beserta index nya
        //berbeda dengan for of dan for in yang masing masing dari mereka hanya bisa mengeluarkan 1 antara value(of) atau index(in)
        //contoh output pada penggunaan forEach:
        //SMKN 7 0
        //SMKN 8 1
        //dan seterusnya kalau ingin index dimulai dari satu alias SMKN 7 1
        //tambahkan + 1 pada bagian console.log di indexnya

        //1.for map
    //     const namaSekolah = ['SMKN7', 'SMKN8','SMAN2', 'SMKN4']

    // namaSekolah.map((sekolah,index) => {
    //     console.log(sekolah,index + 1)
    //   });


      //ini tetap sama output nya seperti for each
      //perbedaan yang signifikan di sini adalah
      //1.pada forEach tidak bisa menghasilkan array baru alias hanya array asli tidak bisa di modifikasi berbeda dengan map
      //2.forEach tidak bisa mengembalikan nilai sedangkan map bisa (return)
      //3.tidak bisa kombinasikan dengan syntax lain contoh .filter() dan sebagainya sedangkan map bisa

      //contoh jika ingin memodifikasi seriap elemen pada array dengan .map

      const angka = ['1','2','3','4','5'];

      let hasil = angka.map((value,index) => {
        return value * 2
      });

      console.log(hasil)

      //ya maka output nya setiap value dari let angka akan dikali 2
      //contoh 1 pada index ke 0 akan di kali 2 hasilnya 2,lalu 2 pada index ke 1 akan di kali 2 maka hasilnya 4 dan begitu seterusnya
