/**
 * Demo tìm số nguyên tố
 * 
 * 

/**
 * Dùng vòng lặp FOR và Hàm
 */

function kiemTraSoNguyenTo(n){ 
    if(n<2){
        return false;
    }  //Kiểm tra SNT khi n>=2
    for(var i=2; i<=Math.sqrt(n);i++){
        if(n%i==0 && n >= 2){
            return false;
        }
    }    
    return true;
}

function lietKeSoNguyenTo(){
    var n = parseInt(document.querySelector("#inputN").value);
    var count = " ";
    for(i=2;i<=n;i++){
        if(kiemTraSoNguyenTo(i)){
            count = count + i+ ' '
        }
    }
    document.getElementById("hienthi").innerHTML ="Số nguyên tố: " + count;
}
document.getElementById("btnTim").onclick = lietKeSoNguyenTo;

