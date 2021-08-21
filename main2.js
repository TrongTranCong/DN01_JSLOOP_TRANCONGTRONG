/**
 * Demo tính số nguyên dương chẵn/lẻ < 100
 * 
 * 

/**
 * Dùng vòng lặp FOR
 */
 function timSoChiaHetCho3For(){
    var count = 0;
    for (i=0; i<1000;i++){
        if(i%3 == 0){
           count++;
            // console.log(count);
        }          
    }
    document.getElementById("hienthi1").innerHTML = "Số chia hết cho 3 từ 0-1000: " + count + " số";
}

document.querySelector("#btnFor").onclick = timSoChiaHetCho3For;
/**
*    Dùng vòng lặp WHILE 
*/
function timSoChiaHetCho3While(){
    var count = 0;
    var soChiaHet = 0;
    while (count < 1000){
        if(count%3 == 0){
            soChiaHet++;
        }
        count++;
    }   
    document.getElementById("hienthi2").innerHTML = "Số chia hết cho 3 từ 0-1000: " + soChiaHet + " số";
}
document.querySelector("#btnWhile").onclick = timSoChiaHetCho3While;
