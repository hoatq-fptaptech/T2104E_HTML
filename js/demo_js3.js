var t = document.getElementById("title");
// t.innerText = "Noi dung gi do";
t.style.color = "red";
t.style.fontSize = "35px";// object.style.property ( font-size -> fontSize, background-color -> backgroundColor )
// t.innerHTML = "<i><img src='images/dtvn.jpg'/></i>";// nạp vào 1 đoạn mã html để nhúng thông qua js
var row = document.getElementById("row");
var p = [
    {
        image:"images/dtvn.jpg",
        name: "Product 1"
    },
    {
        image:"images/dtvn.jpg",
        name: "Product 2"
    },
    {
        image:"images/dtvn.jpg",
        name: "Product 3"
    },
    {
        image:"images/dtvn.jpg",
        name: "Product 4"
    },
    {
        image:"images/dtvn.jpg",
        name: "Product 5"
    },
    {
        image:"images/dtvn.jpg",
        name: "Product 6"
    }
]; // frontend =  building UI/UX + binding data => code xai dc
for(var i=0;i<p.length;i++){
    var ct = "<div class=\"item\">\n" +
        "            <img src=\""+p[i].image+"\"/>\n" +
        "            <h2>"+p[i].name+"</h2>\n" +
        "        </div>";
    row.innerHTML += ct;
}
