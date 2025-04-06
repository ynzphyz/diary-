a = int(input('masukan bilangan pertama mu:'));
b = int(input('masukan bilangan keduamu:'));
c=a+b
print('hasil dari penjumlahan bilangan pertam dan kedua mu adalha :',c);

a = float(input('masukan jari jari lingkaran:'));
import math
c = math.pi * (a ** 2);
print('hasil dari luas lingkaran mu adalah:',c);


# membuat bilangan yang ganjil dan yang genap

a = int(input('masukan bilangan apapun:'))
if {
    a % 2 == 0
} :
    print('bilangan mu adalah bilangan genap',a)
else :{
    print('bilangan mu adalah bilangan ganjil',a)
}



a = int(input('masukan bilangan:'));
if a % 2 == 0 :
    print('bilangan mu adalah bilangan genap',a)
else : {
    print('bilangan mu adalah bilangan ganjil',a)
}
    

import locale

locale.setlocale(locale.LC_ALL, 'id_ID.UTF-8');

nama = input('Masukkan nama kamu: ');   
gaji = 1500000;
hariKerja = int(input('Masukkan berapa hari kamu kerja: '));
sakit = int(input('Berapa hari kamu sakit: '));
gajiSebulan = gaji * hariKerja - sakit;


gajiFormatted = locale.currency(gajiSebulan, grouping=True, symbol=True);

print(f'Halo {nama}, jadi gaji lu sebulan adalah {gajiFormatted}');

for z in range(1,6):
    print('data ke-',z)


i = 0 
while i <= 5:
    print('data ke-',i)
    i=i+1





             

