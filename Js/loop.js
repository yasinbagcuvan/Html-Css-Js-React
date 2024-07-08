// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)
let baslangic = (Number)(prompt("başlangic sayisi giriniz"))
let bitis = (Number)(prompt("bitis sayisi giriniz"))
let toplam = 0;
if (baslangic< bitis) {
    for (baslangic; baslangic <= bitis; baslangic++) {

        toplam = ((baslangic) + (toplam))
   }
   console.log(toplam);
}
else{
    for (bitis; bitis <= baslangic; bitis++) {

        toplam = ((bitis) + (toplam))
   }
   console.log(toplam);
}


// // -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// // Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenci1 = (Number)(prompt("Ogrenci1 için not giriniz"))
// let ogrenci2 = (Number)(prompt("Ogrenci2 için not giriniz"))
// let ogrenci3 = (Number)(prompt("Ogrenci3 için not giriniz"))
// let ogrenci4 = (Number)(prompt("Ogrenci4 için not giriniz"))
// let ogrenci5 = (Number)(prompt("Ogrenci5 için not giriniz"))
// let ogrenciler = [ogrenci1,ogrenci2,ogrenci3,ogrenci4,ogrenci5]

// let ogrenciToplam = 0;
// ogrenciler.forEach(element => {
//     ogrenciToplam = ogrenciToplam+ element
// });
//     let ortalama = (ogrenciToplam)/(ogrenciler.length)
//     console.log(ortalama);
//     let sayac = 0;
//     ogrenciler.forEach(element => {
//         if (element >= 60) {
//             console.log(element + "dersi geçmiştir");
//             sayac++;
//         }
//         else{
//             console.log(element + "dersi geçememiştir");
//         }
//     });
//     console.log(sayac + "öğrenci dersi geçmiştir");

    // -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.
// let random = Math.floor(Math.random() * 10) + 1;
// let sayacTahmin = 3;
// for (let index = 0; index < 3; index++) {
//     let tahmin = (Number)(prompt("Sayi tahmin ediniz"))
//     if (random ==  tahmin) {
//         console.log("Tahmininiz doğru! Random sayı"+ random );
//     }
//     else{
//         sayacTahmin--;
//         console.log("Kalan hakkınız: "+ sayacTahmin);
//         if (sayacTahmin == 0) {
//             console.log("Kaybetttiniz"+ random );
//         }
//     } 
// }

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
// let toplamFiyat = 0;
// let control = true;
// while (control) {
//     let alici = prompt("Almak istediğiniz ürünü yaziniz")
//     if (alici.toLowerCase != "onayla" ) {
//         let fiyat = (Number)(prompt("Ürünün fiyatını giriniz"))
//         toplamFiyat = (toplamFiyat)+(fiyat)
//     }
//     else{
//         control = false;
//     }
// }
// console.log("Alişveriniz tutariniz" + toplamFiyat);