/**
 * Dùng vòng lặp FOR
 */
function taoTheDiv(){
    var content= "";


    // su dung chon het cac tu giong nhau vi du

    // var element = 0;

    // const x = element + element * 2
    // // su dung ctr + D


    for (i=0; i<10;i++){
        if(i%2 == 1){
            content =  content + '<div id="div-xanh" class="mx-5" style="background: red">Div chẵn</div>';
        }
        else if(i%2==0){    
            content =  content + '<div id="div-do" class="mx-5" style="background: blue">Div lẻ</div>';
        }
    }
    document.getElementById("hienthi").innerHTML = content;
}
document.querySelector("#btnTao").onclick = taoTheDiv;