/**
 * Demo tính tổng 
 * 
 * 

/**
 * Dùng vòng lặp FOR và Hàm
 */

function tinhTong(){ 
    var x = Number(document.querySelector("#inputX").value);
    console.log(x);
    var n = Number(document.querySelector("#inputN").value);
    console.log(n);
    var sum = 0;
    var tong = 0;
    // var x = 0;
    // var n = 0;
    for (i=0;i<=sum ;i++){
        sum = (x**(n+1) - x)/(x-1);
        console.log(sum);
    }
    document.getElementById("hienthi").innerHTML = "Tổng: "+ sum;
}
   

document.querySelector("#btnTinhTong").onclick = tinhTong;