/**
 * Demo tính tổng 
 * 
 * 

/**
 * Dùng vòng lặp FOR và Hàm
 */

 function tinhGiaiThua(){ 
    var x = Number(document.querySelector("#inputX").value);
    console.log(x);
    var giaiThua = 1;
    for (i=1;i<=x;i++){
            giaiThua = giaiThua*i;     
        }
    document.getElementById("hienthi").innerHTML = "Giai thừa: "+ giaiThua;
}

document.querySelector("#btnTinh").onclick = tinhGiaiThua;