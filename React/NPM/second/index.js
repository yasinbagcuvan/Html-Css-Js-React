import slugify from "slugify";
import randomColorRGB from "random-color-rgb";

console.log("Using Second");
// es6 ile import kullanmak için type:"module" yazılmalıdır.
console.log(slugify("bilge adam akademi eğitimi"));
console.log(slugify("bilge adam akademi eğitimi","*"));
console.log(slugify("bilge adam akademi eğitimi","_"));

console.log(randomColorRGB());
console.log(randomColorRGB());
console.log(randomColorRGB());
console.log(randomColorRGB());