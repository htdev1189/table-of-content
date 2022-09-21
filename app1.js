
var s = "<h1>fsfs,fsff</h1><h2>sdsdsd</h2><p>ddsdddddd dsds dsd sds ds dds ds ds ddddd dsd</p>"


var h = ["h1", "h2", "h3", "h4", "h5", "h6"];
var hkt_tag = [];
const regex = new RegExp("<h[1-6]>(?<TagText>.*?)</h[1-6]>", 'mg');
const str1 = document.getElementById('content').innerHTML;
let m;


while ((m = regex.exec(str1)) !== null) {
    hkt_tag.push(m[0]);
}


var div = document.getElementById('result');
var x = 0 ;
let modifiedArr = hkt_tag.map(function(element,index){
    var doc = new DOMParser().parseFromString(element, "text/html");
    h.forEach((tag,id) => {
        if(element.includes(`${tag}`)){
            const para = document.createElement("p");
            para.setAttribute("class",`hkt hkt${id+1}`);
            para.setAttribute("to",`hkt-${x}`);
            x++;
            para.style.margin = `0px 0px 10px ${id*10}px`;
            para.innerText = doc.body.firstChild.innerHTML;
            div.appendChild(para);
        }
    });
});


const noidung = document.getElementById('content');
var temp = noidung.innerHTML;
var new_tag = [];
var reg = /(<h[1-6])(>)(.*<\/h[1-6]>)/;

let mang;
while((mang = regex.exec(temp)) !== null){
    new_tag.push(mang[0]);
}
new_tag.forEach((item,index) => {
    temp = temp.replace(item,item.replace(reg,"$1 id='hkt-"+index+"' from='hkt-"+index+"'$2$3"));
});
noidung.innerHTML = temp ;


var hktList = document.querySelectorAll(".hkt");
hktList.forEach((item) => {
    item.addEventListener("click",function(){
      var to = item.getAttribute("to");
      document.getElementById(to).scrollIntoView();
    });
});
