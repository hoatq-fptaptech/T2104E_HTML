function nav() {
    var ct = "<div class=\"container\">\n" +
        "        <ul class=\"menu\">\n" +
        "            <li><a href=\"home.html\">Category #1</a> </li>\n" +
        "            <li><a href=\"category.html\">Category #2</a> </li>\n" +
        "            <li><a href=\"#\">Category #3</a> </li>\n" +
        "            <li><a href=\"#\">Category #4</a> </li>\n" +
        "            <li><a href=\"#\">Category #5</a> </li>\n" +
        "        </ul>\n" +
        "        <div class=\"mernu-right\">\n" +
        "            <a href=\"#\">Get Genesis now</a>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("nav").innerHTML = ct;
}
nav();