function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/today-special", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data; // chúng ta cần 1 array
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + p[i].image + "\"/>\n" +
                    "            <h2>" + p[i].name + "</h2>\n" +
                    "            <h3>" + p[i].price + "</h3>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });

}