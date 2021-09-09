var ring = document.getElementById("ring")
// var ringstr = "3.1415926535897932"
var ringstr = "我的博客  ★☆★  欢迎来到"
window.addEventListener("mousemove",function(evt){
    ring.style.left=evt.x- ring.clientWidth/2 +"px"
    ring.style.top=evt.y -ring.clientHeight/2 +"px"
})
for(var i =0;i<ringstr.length;i++){
    var span = document.createElement("span")
    span.className ="ringtext"
    span.innerHTML=ringstr[i]
    span.setAttribute('style','--r:'+360/ringstr.length * i+';')
    ring.appendChild(span)
}