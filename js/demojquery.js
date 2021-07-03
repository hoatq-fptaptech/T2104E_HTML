function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "data/products.json",
        method:"GET",
        success:function (rs){ // callback
            p = rs;
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + p[i].image + "\"/>\n" +
                    "            <h2>" + p[i].name + "</h2>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });

}