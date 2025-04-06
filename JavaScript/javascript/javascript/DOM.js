document.title = 'kelazz'
const body = document.body

// const h1 = document.createElement('h1') //<h1></h1>
// h1.textContent = '<marquee>halo lurd!</marquee>' //<h1>halo lurd!</h1>

// const namaSaya = document.createElement('p') //<p></p>
// namaSaya.innerHTML = '<marquee>Sebastian</marquee>' //<p>Sebastian</p>

// const jenisLaptop = document.createElement('b') //<b></b>
// jenisLaptop.innerText = '<marquee>Asus Tuf</marquee>' //<b>Asus TUf</b>

// body.append(h1) 
// body.append(namaSaya)
// body.append(jenisLaptop)


// const btn1 = document.getElementById('btn1')
// const btn = document.querySelector('button')

// btn1.style.border = 'none'
// btn1.style.padding = '5px'
// btn1.style.fontSize = '20px'
// btn1.style.background = 'red'

//onclick

// function gantiWarna() {
//     btn1.style.background ='aqua'
//     const newText = document.createElement('p')
//     newText.textContent = 'halo dek'
//     body.append(newText)
// }

//onmouseover

// function ubahText() {
//     btn1.textContent = 'bang halo'
// }

//1.memunculkkan sebuah element HTML  baru dengan isi teks bertuliskan nama kalian
//tapi bukan ketika di klik,tapi ketika mouse masuk di area,lalu ketika mouse keluar element teks harus berubah warnanya.

function buttonText() {
    const textBaru = document.createElement('p')
    textBaru.textContent = "Sebastian"
    textBaru.id = 'berubahWarna'
    body.append(textBaru)
}

function keluarGaris() {
    const gantiWarna = document.getElementById('berubahWarna')
    gantiWarna.style.color = 'red'
    document.body.append(gantiWarna)
}

