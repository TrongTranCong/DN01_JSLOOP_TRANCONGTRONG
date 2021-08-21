/**
 * Demo tìm số nguyên tố
 * 
 * 

/**
 * Dùng vòng lặp FOR và Hàm
 */

function kiemTraSoNguyenTo(n){ 
    if(n<2){
        alert("Không tồn tại số nguyên tố");
    }  //Kiểm tra SNT khi n>=2
    for(i=2; i<=Math.sqrt(n);i++){
        if(n%i==0 && n >= 2){
            console.log(n);
            return 0;
        }
    }    
    return 1;
}

function lietKeSoNguyenTo(){
    var n = parseInt(document.querySelector("#inputN").value) ;
    var count = " ";
    for(i=3;i<=n;i++){
        if(kiemTraSoNguyenTo(i)){
            count = count + '' ;
            console.log(count);
        }
    }
    document.getElementById("hienthi").innerHTML ="Số nguyên tố: " + count;
}
document.getElementById("btnTim").onclick = lietKeSoNguyenTo;

