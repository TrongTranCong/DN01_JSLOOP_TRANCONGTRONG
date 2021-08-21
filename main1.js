/**
 * Demo tính số nguyên dương chẵn/lẻ < 100
 * 
 * Block1: Inputs
 * 
 * 
 * 
 * Block2:
 * Khai báo biến và nhận giá trị từ Form
 * Sử dụng hàm và câu lệnh điều kiện If else
 * 
 
 * Block3: Outputs
 * tinhTien
 * 
 */

/**
 * Dùng vòng lặp FOR
 */
function timSoChanLeFor(){
    var soChan = " ";
    var soLe = " ";
    for (i=0; i<100;i++){
        if(i%2 == 0){
            soChan = soChan + " " + i;
        }else if(i%2==1){
            soLe = soLe + " " + i;
        }
    }
    document.getElementById("hienthi1").innerHTML = "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;

}
document.querySelector("#btnFor").onclick = timSoChanLeFor;
/**
 * Dùng vòng lặp WHILE 
 */
 function timSoChanLeWhile(){

    var count = 0;
    var soChan = " ";
    var soLe = " ";
    while (count <100){
        if(count%2 == 0){
            soChan = soChan + " " + count;
            count++
        }else if(count%2==1){
            soLe = soLe + " " + count;
            count++
        }
    }
    document.getElementById("hienthi2").innerHTML = "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;
}
document.querySelector("#btnWhile").onclick = timSoChanLeWhile;
