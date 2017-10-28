/**
 * Created by huantan on 17-10-24.
 */
'use strict';
var ColorTest = {
    image_src:['240x320_Black.bmp','240x320_Blue.bmp','240x320_Checker.bmp',
        '240x320_Green.bmp','240x320_Red.bmp','240x320_White.bmp'],
    showStep : function() {
        let oImg = document.getElementById('color_test_img');
        if(ColorTest.__proto__.imageIndex == 0){
            ColorTest.__proto__.imageIndex = this.image_src.length - 1;
            oImg.src = "/style/color-img/" + this.image_src[this.imageIndex]
        }else if(ColorTest.__proto__.imageIndex == 5){
            oImg.src = "/style/color-img/" + this.image_src[4]
            ColorTest.__proto__.imageIndex = this.image_src.length - 2;
        }else if(ColorTest.__proto__.imageIndex == 4){
            oImg.src = "/style/color-img/" + this.image_src[3]
            ColorTest.__proto__.imageIndex = this.image_src.length - 3;
        }else if(ColorTest.__proto__.imageIndex == 3){
            oImg.src = "/style/color-img/" + this.image_src[2]
            ColorTest.__proto__.imageIndex = this.image_src.length - 4;
        }else if(ColorTest.__proto__.imageIndex == 2){
            oImg.src = "/style/color-img/" + this.image_src[1]
            ColorTest.__proto__.imageIndex = this.image_src.length - 5;
        }else if(ColorTest.__proto__.imageIndex == 1){
            oImg.src = "/style/color-img/" + this.image_src[0]
            ColorTest.__proto__.imageIndex = 0;
        }
},

    onInit : function() {
        ColorTest.__proto__.imageIndex = 0;
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
                window.location = '/index.html';
                break;
            default:
                break;
        }
    }
};
window.onload = ColorTest.onInit.bind(ColorTest);
window.addEventListener('keydown', ColorTest.handleKeydown.bind(ColorTest));