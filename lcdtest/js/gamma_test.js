/**
 * Created by huantan on 17-10-24.
 */
'use strict';
var GammaTest = {
    image_src:['1-0.png','2-4.png','3-8.png','4-12.png','5-16.png','6-20.png',
    '7-24.png','8-28.png','9-32.png','10-36.png','11-40.png','12-44.png','13-48.png',
    '14-52.png','15-56.png','16-60.png','17-64.png','18-68.png','19-72.png',
    '20-76.png','21-80.png','22-84.png','23-88.png','24-92.png','25-96.png',
    '26-100.png','27-104.png','28-108.png','29-112.png','30-116.png','31-120.png',
    '32-124.png','33-128.png','34-132.png','35-136.png','36-140.png','37-144.png',
    '38-148.png','39-152.png','40-156.png','41-160.png','42-164.png','43-168.png',
    '44-172.png','45-176.png','46-180.png','47-184.png','48-188.png','49-192.png',
    '50-196.png','51-200.png','52-204.png','53-208.png','54-212.png','55-216.png',
    '56-220.png','57-224.png','58-228.png','59-232.png','60-236.png','61-240.png',
    '62-244.png','63-248.png','64-252.png','65-255.png'],
    showStep : function() {
        let oImg = document.getElementById('gamma_test_img');
        if(GammaTest.__proto__.imageIndex == 0){
            GammaTest.__proto__.imageIndex = this.image_src.length - 1;
            oImg.src = "/style/gamma-img" + this.image_src[this.imageIndex];
        }else if(GammaTest.__proto__.imageIndex == 64){
            oImg.src = "/style/gamma-img/" + this.image_src[63];
            GammaTest.__proto__.imageIndex = this.image_src.length - 2;
        }else if(GammaTest.__proto__.imageIndex == 63){
            oImg.src = "/style/gamma-img/" + this.image_src[62];
            GammaTest.__proto__.imageIndex = this.image_src.length - 3;
        }else if(GammaTest.__proto__.imageIndex == 62){
            oImg.src = "/style/gamma-img/" + this.image_src[61];
            GammaTest.__proto__.imageIndex = this.image_src.length - 4;
        }else if(GammaTest.__proto__.imageIndex == 61){
            oImg.src = "/style/gamma-img/" + this.image_src[60];
            GammaTest.__proto__.imageIndex = this.image_src.length - 5;
        }else if(GammaTest.__proto__.imageIndex == 60){
            oImg.src = "/style/gamma-img/" + this.image_src[59];
            GammaTest.__proto__.imageIndex = this.image_src.length - 6;
        }else if(GammaTest.__proto__.imageIndex == 59){
            oImg.src = "/style/gamma-img/" + this.image_src[58];
            GammaTest.__proto__.imageIndex = this.image_src.length - 7;
        }else if(GammaTest.__proto__.imageIndex == 58){
            oImg.src = "/style/gamma-img/" + this.image_src[57];
            GammaTest.__proto__.imageIndex = this.image_src.length - 8;
        }else if(GammaTest.__proto__.imageIndex == 57){
            oImg.src = "/style/gamma-img/" + this.image_src[56];
            GammaTest.__proto__.imageIndex = this.image_src.length - 9;
        }else if(GammaTest.__proto__.imageIndex == 56){
            oImg.src = "/style/gamma-img/" + this.image_src[55];
            GammaTest.__proto__.imageIndex = this.image_src.length - 10;
        }else if(GammaTest.__proto__.imageIndex == 55){
            oImg.src = "/style/gamma-img/" + this.image_src[54];
            GammaTest.__proto__.imageIndex = this.image_src.length - 11;
        }else if(GammaTest.__proto__.imageIndex == 54){
            oImg.src = "/style/gamma-img/" + this.image_src[53];
            GammaTest.__proto__.imageIndex = this.image_src.length - 12;
        }else if(GammaTest.__proto__.imageIndex == 53){
            oImg.src = "/style/gamma-img/" + this.image_src[52];
            GammaTest.__proto__.imageIndex = this.image_src.length - 13;
        }else if(GammaTest.__proto__.imageIndex == 52){
            oImg.src = "/style/gamma-img/" + this.image_src[51];
            GammaTest.__proto__.imageIndex = this.image_src.length - 14;
        }else if(GammaTest.__proto__.imageIndex == 51){
            oImg.src = "/style/gamma-img/" + this.image_src[50];
            GammaTest.__proto__.imageIndex = this.image_src.length - 15;
        }else if(GammaTest.__proto__.imageIndex == 50){
            oImg.src = "/style/gamma-img/" + this.image_src[49];
            GammaTest.__proto__.imageIndex = this.image_src.length - 16;
        }else if(GammaTest.__proto__.imageIndex == 49){
            oImg.src = "/style/gamma-img/" + this.image_src[48];
            GammaTest.__proto__.imageIndex = this.image_src.length - 17;
        }else if(GammaTest.__proto__.imageIndex == 48){
            oImg.src = "/style/gamma-img/" + this.image_src[47];
            GammaTest.__proto__.imageIndex = this.image_src.length - 18;
        }else if(GammaTest.__proto__.imageIndex == 47){
            oImg.src = "/style/gamma-img/" + this.image_src[46];
            GammaTest.__proto__.imageIndex = this.image_src.length - 19;
        }else if(GammaTest.__proto__.imageIndex == 46){
            oImg.src = "/style/gamma-img/" + this.image_src[45];
            GammaTest.__proto__.imageIndex = this.image_src.length - 20;
        }else if(GammaTest.__proto__.imageIndex == 45){
            oImg.src = "/style/gamma-img/" + this.image_src[44];
            GammaTest.__proto__.imageIndex = this.image_src.length - 21;
        }else if(GammaTest.__proto__.imageIndex == 44){
            oImg.src = "/style/gamma-img/" + this.image_src[43];
            GammaTest.__proto__.imageIndex = this.image_src.length - 22;
        }else if(GammaTest.__proto__.imageIndex == 43){
            oImg.src = "/style/gamma-img/" + this.image_src[42];
            GammaTest.__proto__.imageIndex = this.image_src.length - 23;
        }else if(GammaTest.__proto__.imageIndex == 42){
            oImg.src = "/style/gamma-img/" + this.image_src[41];
            GammaTest.__proto__.imageIndex = this.image_src.length - 24;
        }else if(GammaTest.__proto__.imageIndex == 41){
            oImg.src = "/style/gamma-img/" + this.image_src[40];
            GammaTest.__proto__.imageIndex = this.image_src.length - 25;
        }else if(GammaTest.__proto__.imageIndex == 40){
            oImg.src = "/style/gamma-img/" + this.image_src[39];
            GammaTest.__proto__.imageIndex = this.image_src.length - 26;
        }else if(GammaTest.__proto__.imageIndex == 39){
            oImg.src = "/style/gamma-img/" + this.image_src[38];
            GammaTest.__proto__.imageIndex = this.image_src.length - 27;
        }else if(GammaTest.__proto__.imageIndex == 38){
            oImg.src = "/style/gamma-img/" + this.image_src[37];
            GammaTest.__proto__.imageIndex = this.image_src.length - 28;
        }else if(GammaTest.__proto__.imageIndex == 37){
            oImg.src = "/style/gamma-img/" + this.image_src[36];
            GammaTest.__proto__.imageIndex = this.image_src.length - 29;
        }else if(GammaTest.__proto__.imageIndex == 36){
            oImg.src = "/style/gamma-img/" + this.image_src[35];
            GammaTest.__proto__.imageIndex = this.image_src.length - 30;
        }else if(GammaTest.__proto__.imageIndex == 35){
            oImg.src = "/style/gamma-img/" + this.image_src[34];
            GammaTest.__proto__.imageIndex = this.image_src.length - 31;
        }else if(GammaTest.__proto__.imageIndex == 34){
            oImg.src = "/style/gamma-img/" + this.image_src[33];
            GammaTest.__proto__.imageIndex = this.image_src.length - 32;
        }else if(GammaTest.__proto__.imageIndex == 33){
            oImg.src = "/style/gamma-img/" + this.image_src[32];
            GammaTest.__proto__.imageIndex = this.image_src.length - 33;
        }else if(GammaTest.__proto__.imageIndex == 32){
            oImg.src = "/style/gamma-img/" + this.image_src[31];
            GammaTest.__proto__.imageIndex = this.image_src.length - 34;
        }else if(GammaTest.__proto__.imageIndex == 31){
            oImg.src = "/style/gamma-img/" + this.image_src[30];
            GammaTest.__proto__.imageIndex = this.image_src.length - 35;
        }else if(GammaTest.__proto__.imageIndex == 30){
            oImg.src = "/style/gamma-img/" + this.image_src[29];
            GammaTest.__proto__.imageIndex = this.image_src.length - 36;
        }else if(GammaTest.__proto__.imageIndex == 29){
            oImg.src = "/style/gamma-img/" + this.image_src[28];
            GammaTest.__proto__.imageIndex = this.image_src.length - 37;
        }else if(GammaTest.__proto__.imageIndex == 28){
            oImg.src = "/style/gamma-img/" + this.image_src[27];
            GammaTest.__proto__.imageIndex = this.image_src.length - 38;
        }else if(GammaTest.__proto__.imageIndex == 27){
            oImg.src = "/style/gamma-img/" + this.image_src[26];
            GammaTest.__proto__.imageIndex = this.image_src.length - 39;
        }else if(GammaTest.__proto__.imageIndex == 26){
            oImg.src = "/style/gamma-img/" + this.image_src[25];
            GammaTest.__proto__.imageIndex = this.image_src.length - 40;
        }else if(GammaTest.__proto__.imageIndex == 25){
            oImg.src = "/style/gamma-img/" + this.image_src[24];
            GammaTest.__proto__.imageIndex = this.image_src.length - 41;
        }else if(GammaTest.__proto__.imageIndex == 24){
            oImg.src = "/style/gamma-img/" + this.image_src[23];
            GammaTest.__proto__.imageIndex = this.image_src.length - 42;
        }else if(GammaTest.__proto__.imageIndex == 23){
            oImg.src = "/style/gamma-img/" + this.image_src[22];
            GammaTest.__proto__.imageIndex = this.image_src.length - 43;
        }else if(GammaTest.__proto__.imageIndex == 22){
            oImg.src = "/style/gamma-img/" + this.image_src[21];
            GammaTest.__proto__.imageIndex = this.image_src.length - 44;
        }else if(GammaTest.__proto__.imageIndex == 21){
            oImg.src = "/style/gamma-img/" + this.image_src[20];
            GammaTest.__proto__.imageIndex = this.image_src.length - 45;
        }else if(GammaTest.__proto__.imageIndex == 20){
            oImg.src = "/style/gamma-img/" + this.image_src[19];
            GammaTest.__proto__.imageIndex = this.image_src.length - 46;
        }else if(GammaTest.__proto__.imageIndex == 19){
            oImg.src = "/style/gamma-img/" + this.image_src[18];
            GammaTest.__proto__.imageIndex = this.image_src.length - 47;
        }else if(GammaTest.__proto__.imageIndex == 18){
            oImg.src = "/style/gamma-img/" + this.image_src[17];
            GammaTest.__proto__.imageIndex = this.image_src.length - 48;
        }else if(GammaTest.__proto__.imageIndex == 17){
            oImg.src = "/style/gamma-img/" + this.image_src[16];
            GammaTest.__proto__.imageIndex = this.image_src.length - 49;
        }else if(GammaTest.__proto__.imageIndex == 16){
            oImg.src = "/style/gamma-img/" + this.image_src[15];
            GammaTest.__proto__.imageIndex = this.image_src.length - 50;
        }else if(GammaTest.__proto__.imageIndex == 15){
            oImg.src = "/style/gamma-img/" + this.image_src[14];
            GammaTest.__proto__.imageIndex = this.image_src.length - 51;
        }else if(GammaTest.__proto__.imageIndex == 14){
            oImg.src = "/style/gamma-img/" + this.image_src[13];
            GammaTest.__proto__.imageIndex = this.image_src.length - 52;
        }else if(GammaTest.__proto__.imageIndex == 13){
            oImg.src = "/style/gamma-img/" + this.image_src[12];
            GammaTest.__proto__.imageIndex = this.image_src.length - 53;
        }else if(GammaTest.__proto__.imageIndex == 12){
            oImg.src = "/style/gamma-img/" + this.image_src[11];
            GammaTest.__proto__.imageIndex = this.image_src.length - 54;
        }else if(GammaTest.__proto__.imageIndex == 11){
            oImg.src = "/style/gamma-img/" + this.image_src[10];
            GammaTest.__proto__.imageIndex = this.image_src.length - 55;
        }else if(GammaTest.__proto__.imageIndex == 10){
            oImg.src = "/style/gamma-img/" + this.image_src[9];
            GammaTest.__proto__.imageIndex = this.image_src.length - 56;
        }else if(GammaTest.__proto__.imageIndex == 9){
            oImg.src = "/style/gamma-img/" + this.image_src[8];
            GammaTest.__proto__.imageIndex = this.image_src.length - 57;
        }else if(GammaTest.__proto__.imageIndex == 8){
            oImg.src = "/style/gamma-img/" + this.image_src[7];
            GammaTest.__proto__.imageIndex = this.image_src.length - 58;
        }else if(GammaTest.__proto__.imageIndex == 7){
            oImg.src = "/style/gamma-img/" + this.image_src[6];
            GammaTest.__proto__.imageIndex = this.image_src.length - 59;
        }
        else if(GammaTest.__proto__.imageIndex == 6){
            oImg.src = "/style/gamma-img/" + this.image_src[5];
            GammaTest.__proto__.imageIndex = this.image_src.length - 60;
        } else if(GammaTest.__proto__.imageIndex == 5){
            oImg.src = "/style/gamma-img/" + this.image_src[4];
            GammaTest.__proto__.imageIndex = this.image_src.length - 61;
        }else if(GammaTest.__proto__.imageIndex == 4){
            oImg.src = "/style/gamma-img/" + this.image_src[3];
            GammaTest.__proto__.imageIndex = this.image_src.length - 62;
        }else if(GammaTest.__proto__.imageIndex == 3){
            oImg.src = "/style/gamma-img/" + this.image_src[2];
            GammaTest.__proto__.imageIndex = this.image_src.length - 63;
        }else if(GammaTest.__proto__.imageIndex == 2){
            oImg.src = "/style/gamma-img/" + this.image_src[1];
            GammaTest.__proto__.imageIndex = this.image_src.length - 64;
        }else if(GammaTest.__proto__.imageIndex == 1){
            oImg.src = "/style/gamma-img/" + this.image_src[0];
            GammaTest.__proto__.imageIndex = 0;
        }
    },

    onInit : function() {
        GammaTest.__proto__.imageIndex = 0;
        this.step = 1;
        dump("tanhuan");
    },

    handleKeydown: function ut_handleKeydown(evt) {
        evt.preventDefault();
        var target = evt.target;
        switch (evt.key) {
            case 'ArrowLeft':
                this.showStep();
                break;
            case 'ArrowRight':
                this.showStep();
                break;
            case 'Backspace':
                window.location = '../index.html';
                window.close();
                break;
            default:
                break;
        }
    }
};
window.onload = GammaTest.onInit.bind(GammaTest);
window.addEventListener('keydown', GammaTest.handleKeydown.bind(GammaTest));