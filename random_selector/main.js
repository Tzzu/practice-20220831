var images = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    "https://img.ltn.com.tw/Upload/food/page/2020/07/15/200715-10980-0-WClGQ.jpg",
    "random_selector/images/ham.jpg"

];

$(function(){
    //確認能夠知道使用者按了按鈕
    // $("input") => document.getElementsByTagname("input")[0]
    // on => addEventListener
    $("input").on("click",function(){
        // alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);
        //  
    });
});