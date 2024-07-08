// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.




// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim = (a, b) => a * b;

// Örnek kullanım
console.log(carpim(4, 5)); 
console.log(carpim(7, 3)); 

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
const kelimeSayisi = (cumle) => cumle.split(' ').length;

// Örnek kullanım
console.log(kelimeSayisi("Bugün JavaScript yaziyorum")); 
console.log(kelimeSayisi("JavaScript ile programlama yapmak eğlencelidir.")); 

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
function faktoriyel(n) {
    if (n < 0) return "Negatif sayi olamaz, çünkü faktoriyeli yoktur";
    if (n === 0 || n === 1) return 1;
    return n * faktoriyel(n - 1);
}
console.log( faktoriyel(3));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
function asalmi(n){
    if (n <= 1) return false; // 1 ve daha küçük sayılar asal değildir
    if (n === 2) return true; // 2 asaldır
    if (n % 2 === 0) return false; // 2'den büyük çift sayılar asal değildir

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false; // n, i'ye tam bölünüyorsa asal değildir
    }
    return true; // Hiçbir böleni yoksa asaldır
}
console.log(asalmi(21));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
const enBuyukSayi = function(dizi) {
    if (dizi.length === 0) {
        return "Dizi boş"; 
    }

    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
};
let dizi = [1,2,3,4,5,6]

console.log(enBuyukSayi(dizi));

