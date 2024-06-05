// // 1-masala **Masala 1**: Bo'sh massiv yarating va unga ketma-ket 5 ta element qo'shing. Massivning uzunligi 5 dan katta bo'lguncha elementlarni qo'shishda davom eting.
// // function blankAr(arg) {
// //     let a = [] ;
// //     for (let i = 0 ; i < arg.length ; i++ ) {
// //         if(a.length <= 5){
// //         a.push(arg[i])
// //         }
// //     }
// //     return a ;
// // }
// // console.log(blankAr([1,2,3,4,5,6,7]));


// // 2-masala **Masala 2**: Bo'sh massiv yarating va `push` metodi yordamida unga 3 ta element qo'shing. So'ng, `pop` metodi yordamida oxirgi elementni o'chirib tashlang va qolgan elementlarni birlashtirib string ko'rinishiga o'tkazing.
// // function newArr(arg){
// // let a = [] ;
// // for(let i = 0  ; i < arg.length ; i++ ){
// // if(a.length < 3){
// // a.push(arg[i])
// // }
// // }
// // a.pop() ;
// // return a ;
// // }
// // console.log(newArr([4,5,6,7,8,9]));


// // 3-masala   **Masala 3**: Bo'sh massiv yarating va `unshift` metodi yordamida unga 4 ta element qo'shing. Keyin, har bir elementni teskari tartibda joylashtiring va natijaviy massivning uzunligini toping.
// // function newReverseArr (arg){
// // let a = [] ;
// // for(let i = 0 ; i < 4 ; i++ ){
// // a.unshift(arg[i])
// // }
// // for(let g = a.length-1 ; g >= 0 ; g--){
// // a.unshift(a[g])
// // }
// // return a.length ;
// // }
// // console.log(newReverseArr([1,2,3,4,5,6,7]));


// // 4-masala   **Masala 4**: Bo'sh massiv yarating va `unshift` metodi yordamida unga 2 ta element qo'shing. So'ng, `shift` metodi yordamida birinchi elementni o'chirib tashlang va qolgan elementlarni vergul bilan ajratilgan string ko'rinishiga o'tkazing.
// // function newBlankArr(arg){
// // let a = [] ;
// // for(let i = 0 ; i < 2 ; i++){
// // a.unshift(arg[i])
// // }
// // a.shift();
// // let b = a.toString(",");
// //     return a ;
// // }
// // console.log(newBlankArr([1,2,3,4,5,66]));


// // 5-masala   **Masala 5**: Berilgan massivdan `pop` metodi yordamida oxirgi elementni o'chiring. So'ng, qolgan elementlarning sonini va birinchi elementning qiymatini aniqlang.
// function a(arg) {
//     let b = arg ;
//     b.pop()
//     let sum = b.length ;
//     console.log(sum);
//     console.log(b[1]);
//     return b ;
// }
// console.log(a([1,2,3,4,5,6,7,8]));


// // 6-masala   **Masala 6**: Berilgan massivga `push` metodi yordamida yangi element qo'shing. Massivning oxirgi elementini `at` metodi yordamida olib, string ko'rinishida qaytaring.
// function m6 (arg){
//     let a = arg ;
// a.push(true);
// let b =  a.at(-1)
// console.log(toString.b);
// return b ;
// }
// console.log(m6([1,2,3,4,5,6,7,8,9]));


// // 7-masala   **Masala 7**: Berilgan massivga `unshift` metodi yordamida yangi element qo'shing va yangi massivning har bir elementini teskari tartibda joylashtiring. Natijaviy massivning uzunligini toping.
// function reverse7 (arg){
// let a = [];
// for (let i = 0 ; i<arg.length ; i++){
// a.push(arg[i])
// }
// a.reverse() ;
// return a ;
// }
// console.log(reverse7([1,2,3,4,5,6,7]));


// // 8-masala   **Masala **: Berilgan massivdan `shift` metodi yordamida birinchi elementni o'chiring va qolgan elementlarning sonini toping. Keyin, qolgan elementlarni `join` metodi yordamida string ko'rinishiga o'tkazing.
// function m8 (arg){
// let a = arg ;
// a.shift();
// console.log(a.length++);
// a.join(", ")
// return a ;
// }
// console.log(m8([1,2,3,4,5,6,7,8,9]));


// // 9-masala    **Masala 9**: Berilgan massivga `push` va `unshift` metodlari yordamida 3 ta yangi element qo'shing va natijaviy massivning uzunligini toping. Keyin, massivni teskari tartibda joylashtirib string ko'rinishiga o'tkazing.
// function m9 (arg){
// let a = arg ;
// a.push('hayr');
// a.unshift("salom")
// a.reverse();
// let b = a.join(', ')
// return b ;
// }
// console.log(m9([1,2,3,4,5,6]));


// // 10-masala  **Masala 10**: Berilgan massivdan `pop` va `shift` metodlari yordamida birinchi va oxirgi elementlarni o'chiring. Qolgan elementlarning uzunligini va teskari tartibda joylashtirilgan massivni toping.
// function m10(arg) {
//     let a = arg ;
//     a.pop();
//     a.shift();
//     a.reverse();
//     return a ;
// }
// console.log(m10([1,2,3,4,5,6,7,8]));


// // 11-masala   **Masala 11**: Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `toString` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// function m11 (arg){
// let a = arg ;
// a.reverse();
// let b = a.toString();
// console.log(a.length );
// return b ;
// }
// console.log(m11([1,2,3,4,5,6,7,8]));
// // 12-masala  **Masala 12**: Berilgan ikki massivni `concat` metodi yordamida birlashtiring va yangi massivdan har ikkinchi elementni `slice` metodi yordamida olib, natijaviy massivning uzunligini toping.
// function m12 (arg){
// let a = arg;
// let b = [5,6,7,8];
// let c = a.concat(b)
// return c ;
// }
// console.log(m12([1,2,3,4]));
// // 13-masala  **Masala 13**: Berilgan massivni `splice` metodi yordamida ikkinchi indeksdan boshlab uchta elementni o'chiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// function m13 (arg){
// let a = arg ;
// a.splice(2,3)
// let b = a.join(" , ")
// console.log(a.length);
// return b ;
// }
// console.log(m13([1,2,3,4,5,6]));
// // 14-masala  **Masala 14**: Berilgan massivni `slice` metodi yordamida uchinchi indeksdan boshlab oxirgi indeksgacha kesib oling. So'ng, natijaviy massivni `reverse` metodi yordamida teskari tartibda joylashtirib chiqaring.
// function m14 (arg){
// let a = arg ;
// let b = a.slice(3,a.length);
// b.reverse();
// return b ;
// }
// console.log(m14([1,2,3,4,5,6,7,8]));
// // 15-masala  **Masala 15**: Berilgan massivni `flat` metodi yordamida bir qatlamga tushiring va natijaviy massivning oxirgi elementini `at` metodi yordamida olib, natijani chiqaring.
// function m15(arg){
// let a = arg ;
// let b = a.flat()
// let c = b.at(-1)
// return c ;
// }
// console.log(m15([1,2,3,[4,5,6],[7,8,9]]));
// // 16-masala  **Masala 16**: Berilgan massivdan `at` metodi yordamida uchinchi elementni oling. So'ng, ushbu elementni massivning boshiga `unshift` metodi yordamida qo'shing va natijaviy massivning uzunligini toping.

// // 17-masala  **Masala 17**: Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, stringning oxirgi elementini aniqlang.

// // 18-masala  **Masala 18**: Berilgan massivdan `slice` metodi yordamida birinchi ikkita elementni kesib oling. So'ng, qolgan elementlarni `splice` metodi yordamida to'rtinchi indeksdan boshlab olib tashlang va natijaviy massivni chiqaring.

// // 19-masala  **Masala 19**: Berilgan massivdan `splice` metodi yordamida uchinchi indeksdan boshlab ikkita elementni kesib oling. Qolgan elementlarni `reverse` metodi yordamida teskari tartibda joylashtirib, natijaviy massivni chiqaring.

// // 20-masala  **Masala 20**: Berilgan massivni `join` metodi yordamida vergul bilan ajratilgan string ko'rinishiga o'tkazing. Keyin, stringni `split` metodi yordamida qayta massivga aylantirib, natijani chiqaring.



