var tensinhviens = ["Lý Văn Hòa","Phạm Đức Minh"];
var diemthi = [6,8];

var obj1 = { // khai bao 1 doi tuong
    name: "Nguyễn Nhật Lễ",
    age: 19,
    mark:9,
    className:{
        nameOfClass:"T2104E",
        room:"B8"
    },
    subject:["LBEP","BNGW","DATABASE"],
    run: function (){ // phương thức: hành vi của đối tượng
        console.log(this.name+" Running....");// đối tượng nào đang chạy vào đây thì this sẽ đại diện cho đối tượng đó
    },
    chat: function (msg){
        console.log(msg);
    }
}
// obj1 là 1 biến có giá trị là 1 đối tượng
console.log(obj1.name);// lấy ra giá trị 1 thuộc tính của đối tượng
console.log(obj1.mark);// lấy ra giá trị 1 thuộc tính của đối tượng
obj1.mark = 10;
console.log(obj1.mark);// lấy ra giá trị 1 thuộc tính của đối tượng
obj1.chat("hello");
function showInfo(ob){
    console.log(ob.name);
    console.log(ob.age);
    console.log(ob.mark);
    console.log(ob.className.nameOfClass);
    console.log(ob.className.room);
    console.log("Danh sach môn học:");
    for(var i=0;i< ob.subject.length;i++){
        console.log(ob.subject[i]);
    }
}
showInfo(obj1);
obj1.run();// thực thi phương thức
obj1.name = "Lê Quang Anh";
obj1.run();
//run();// ko tồn tại
var obj2 = Object.create(obj1);
obj2.name = "Tô Huyền Trang";
obj2.run();
var obj3 = Object.create(obj1);

var humans = [];
for (var i=0;i<10;i++){
    humans.push(Object.create(obj1));
}
// http://cdn.23h.com.vn/image/dtvn.png
//  /images/dtvn.png
/*
 Định nghĩa 1 dạng object cho sản phẩm gồm các thông tin: tên, ảnh sp, mô tả, giá, số lượng, danh mục (đối tượng)
 và các hành vi:
 - thêm sp vao gio hàng ( có 1 biến cart là 1 array bên ngoài)
 - xóa sp khỏi giỏ hàng
 - tăng số lượng sản phẩm
 - điều chỉnh giá sp
 */

var cart = [];
var product = {
    id:1,
    name:"Product Name",
    image: "/images/product.png",
    description: "Product Description",
    price: 0,
    qty: 1,
    category:{
        name: "Category Name",
        image: "/images/category.png"
    },
    addToCart: function (){
        // can cho this vao trong cart
        // nếu sản phẩm đã có trong giỏ hàng thì sao
        // nếu sản phẩm hết hàng thì sao
        if(this.qty == 0){ // het hang
            console.log("Out of stock");
        }else{
            if(checkCart(this)){/// kt xem sp da co trong gio hang hay chua
                for(var i=0;i<cart.length;i++){
                    if(cart[i].id == this.id){
                        cart[i].qty++;
                        this.qty = this.qty -1;
                    }
                }
            }else{
                cart.push(this);
                this.qty = this.qty-1;
            }
        }
    },
    removeFromCart: function (){
        if(checkCart(this)){
            for(var i=0;i<cart.length;i++){
                if(cart[i].id == this.id){
                    this.qty = this.qty + cart[i].qty;
                    cart.splice(i,1);
                }
            }
        }
    },
    changeStock: function (num){
        this.qty += num;
        this.qty = this.qty > 0?this.qty:0; // để ko có chuyện số lượng bị âm
    },
    changePrice: function (change){
        this.price += change;
        this.price = this.price > 0? this.price:0;
    }
};

function checkCart(p){
    for(var i=0;i<cart.length;i++){
        if(cart[i].id == p.id) return true;
    }
    return false;
}