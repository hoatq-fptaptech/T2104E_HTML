// code javascript (js) viet tai day
var x;// khai bao bien x
// nhom du lieu: Number, string, array, object
x = 15.14; // x la 1 number
console.log(x);
x = "xin chao";
console.log(x);
x = x + 5;// xin chao5
console.log(x);
var y = 20;
y = y + 5; // 25
console.log(y);
/*
    number +number -> number
    number + string -> string
    string + string -> string
 */
console.log("Xin chao, day la lop T2104E, so hoc sinh:"+25+" hoc sinh");

if(y>20){
    console.log("y > 20");
}else{
    console.log("y < 20");
}
for(var i=0;i<20;i++){
    console.log("gia tri cua i la: "+i); // print
}

var arr = []; // khai bao 1 mang - ko giới hạn số lượng phần tử
arr[0] =1001;
arr[1]= "xin chao"; // ko ràng buộc kiểu dữ liệu các phần tử
arr[2] = "12";// nguy hiểm -> đây là string chứ ko phải number
arr[2]+= 15;// 27 -> "1215"
console.log(arr[0]);
console.log(arr[2]);
console.log(arr);
arr[3] = [1,2,3,4];// ko giới hạn các chiều của mảng ( mảng 2 chiều)
arr[4] = ["xin chao",1,2, [1,2,3]];// mang 3 chiều

var arr2 = [];
for(var i=0;i<20;i++){
    // arr2[i] = i*i;
    arr2.push(17);// them 1 phan tu co gia tri i*i vao mang
}
arr2.push(555);// cho pt vào cuối danh sách // chi muc 20
arr2[22] = 99;// ok
arr2.push(777); // chi muc: 23
console.log(arr2);
console.log(arr2[21]);//undefined - chua dinh nghia
var c = tinhtong(5,6);
var d = tinhtong("aaa",6);
console.log("c = "+c);
function tinhtong(a,b){
    return a+b;
}
var h = hamgido("aa",7);
function hamgido(a,b){ // a b la kieu du lieu gi ko biet
    /*
    day la code logic cua ham
    return cai gi do
     */
    // muon hieu dc thi
    // 1, phai la nguoi viet
    // 2, doc ca doan code dai de hieu logic
}

function binhphuong(a){
    console.log(a*a);
}

// alert("Cấm trẻ em dưới 18 tuổi vào trang web, chúng tôi không chịu trách nhiệm về nội dung!");

// var kt = confirm("Bạn chắc chắn đồng ý nộp bài thi?"); // true -> nhấn ok   false  -> nhấn cancel
// if(kt){
//     alert("chucs mừng, bạn đã vượt qua kỳ thi!");
// }else{
//     alert("Rất tiếc, vui lòng sang A4 đăng ký thi lại!");
// }

// var s = prompt("Nhập tuổi của bạn vào đây:");// tra ve 1 string
// var t = parseInt(s); //parseFloat
/*
    18 -> 18
    18A8 -> 18 // dừng lại khi gặp ký tự
    A188 -> not a number (NAN)
 */
// if(t != NaN && t<18 ){
//     window.location.href = "https://24h.com.vn";
// }else{
//     alert("Vui long tiep tuc vao trang web")
// }
// console.log(t);

// thực thi 1 lần sau 5s
// setTimeout(function (){
//     alert("xin chao");
// },5000)// 5000 ms


// cứ sau 5s sẽ thực hiện 1 lần ( mai mai)
// var k  =0;
// var si = setInterval(function (){
//    alert("hello");
//    k++;
//    if(k>2){
//        clearInterval(si);// loại bỏ setInterval
//    }
// },5000);

// var count = 5;
// var random = Math.random()* 100; // Math.random() tạo ra 1 số ngẫu nhiên từ 0 -> 1
// random = parseInt(random); // 1 so nguyen ngau nhien tu 0 ->99
// console.log("lucky: "+random);
//
// var loto = setInterval(function (){
//     var n = prompt("Nhập con số may mắn của bạn:");
//     n = parseInt(n);
//     // isNaN(n) -> kiểm tra n == NaN hay ko
//     if(!isNaN(n)){
//
//         if(random == n){
//             alert("Chúc mừng! Bạn đã trúng 10 tỷ.");
//             clearInterval(loto);
//         }else{
//             alert("Chúc bạn may mắn lần sau!");
//         }
//         count--;
//     }else{
//         alert("vui lòng nhập lại số:");
//     }
//     if(count<=0){
//         clearInterval(loto);
//     }
// },3000);

// console.log("10:00")
// console.log("09:59")
// console.log("09:58")
// console.log("09:57")
//....
// console.log("00:00")
var min = 10;
var sec = 0;
var timer = setInterval(function (){
    var min_txt = min>=10?min:"0"+min; // toán tử 3 ngôi
    //   var sec_txt = sec>=10?sec:"0"+sec;
    // tương đương đoạn sau
    if(sec>=10){
        var sec_txt = sec;
    }else{
        var sec_txt = "0"+sec;
    }

    console.log(min_txt+":"+sec_txt);
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min <0){
        clearInterval(timer);
    }
},100);