/**
 * Created by huantan on 17-10-24.
 */
'use strict';
var FlickerTest = {
    image_src:['flicker.PNG'],
    showStep : function() {
        let oImg = document.getElementById('flicker_test_img');
        if(FlickerTest.__proto__.imageIndex == 0){
            FlickerTest.__proto__.imageIndex = this.image_src.length - 1;
            oImg.src = "/style/flicker-img" + this.image_src[this.imageIndex];
            dump("tanhuan1");
        }else if(FlickerTest.__proto__.imageIndex == 6){
            oImg.src = "/style/flicker-img/" + this.image_src[5];
            FlickerTest.__proto__.imageIndex = this.image_src.length - 2;
        } else if(FlickerTest.__proto__.imageIndex == 5){
            oImg.src = "/style/flicker-img/" + this.image_src[4];
            FlickerTest.__proto__.imageIndex = this.image_src.length - 3;
        }else if(FlickerTest.__proto__.imageIndex == 4){
            oImg.src = "/style/flicker-img/" + this.image_src[3];
            FlickerTest.__proto__.imageIndex = this.image_src.length - 4;
        }else if(FlickerTest.__proto__.imageIndex == 3){
            oImg.src = "/style/flicker-img/" + this.image_src[2];
            FlickerTest.__proto__.imageIndex = this.image_src.length - 5;
        }else if(FlickerTest.__proto__.imageIndex == 2){
            oImg.src = "/style/flicker-img/" + this.image_src[1];
            FlickerTest.__proto__.imageIndex = this.image_src.length - 6;
        }else if(FlickerTest.__proto__.imageIndex == 1){
            oImg.src = "/style/flicker-img/" + this.image_src[0];
            FlickerTest.__proto__.imageIndex = 0;
        }
    },

    onInit : function() {
        FlickerTest.__proto__.imageIndex = 0;
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
window.onload = FlickerTest.onInit.bind(FlickerTest);
window.addEventListener('keydown', FlickerTest.handleKeydown.bind(FlickerTest));