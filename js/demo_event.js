function demo_1(){
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
}
function demo_2(){
    console.log("Function demo 2...");
}
function demo_3(){
    console.log("Function demo 3...");
}
function demo_4(){
    alert("Double click");
}
function textInput(e){
    //console.log(e); // e la 1 object
    var v = e.value; // tra ve gia tri người dùng điền vào input
    console.log(v);
    // var k = event.keyCode;
    // if(k==13){
    //     console.log(msg+" ...., nhấn phím enter");
    // }
}
function copy(){
    console.log("Copy");
}
function cut(){
    console.log("Cut");
}
function paste(){
    console.log("Paste");
}
function changeSelect(e){
    console.log("Change..."+ e.value);
}
// nhập vào số phút cần đếm ngược từ input, sau đó cho chạy đồng hồ đếm ngược
function timerCountdown(e){
    var code = event.keyCode;
    if(code == 13){
        var v = e.value;
        if(v>=1){
            var min = v;
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

               // console.log(min_txt+":"+sec_txt);
                var box_min = document.getElementById("box-min");
                box_min.innerText = min_txt;
                var box_sec = document.getElementById("box-sec");
                box_sec.innerText = sec_txt;

                sec--;
                if(sec<0){
                    min--;
                    sec=59;
                }
                if(min <0){
                    clearInterval(timer);
                }
            },100);
        }
    }
}

var reward  = [
    "Lamboghini v8",
    "SH 150i",
    "Honda Dream",
    "Honda Dream",
    "Tủ lạnh Toshiba",
    "Tủ lạnh Toshiba",
    "Tủ lạnh Toshiba",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
]
//alert(reward[4]);
// cần tạo 1 button nhấn vào để chọn phần thưởng ngẫu nhiên trong các phần thưởng trên
// thời gian quay là 10s ( tức là khi nhấn vào nó sẽ đổi liên tục quà trong 10s, cái nào
// cuối cùng mới là phần quà chính thức
// Sau đó in ra thông báo trên 1 thẻ h2 ( span...) món quà nhận được

// Math.random()
function chonQua(){
    var count = 50;
    var timer = setInterval(function (){
        // chon qua ngau nhieu tu danh sach
        var i = Math.random()*40;
        i = parseInt(i);// 1 số ngẫu nhiên trong danh sach
        // in ra kết quả
        var kq = document.getElementById("ketqua");
        kq.innerText = "Món quà nhận được: "+reward[i];
        // chuyển đến lần chọn tiếp theo
        count--;
        if(count <=0){
            clearInterval(timer);
        }
    },50);
}