/**
 * Demo tìm số nguyên dương nhỏ nhất sao cho 1+2+...+n > 10000
 * 
 * 

/**
 * Dùng vòng lặp FOR
 */


function soNguyenDuongMin(){
    var sum = 0;
    var min = 0;
    for (i=1; sum < 10000 ;i++){
        sum = sum + i;
        min = i
        console.log(i);
    }
    document.getElementById("hienthi").innerHTML = "Số nguyên dương có GTNN: " + min;
}
document.querySelector("#btnKQua").onclick = soNguyenDuongMin;