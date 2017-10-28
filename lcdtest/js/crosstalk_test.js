/**
 * Created by huantan on 17-10-24.
 */
'use strict';
var CrossTalkTest = {
    image_src:['a.png','b.png','c.png', 'd.png','e.png','f.png','g.png'],
    showStep : function() {
        let oImg = document.getElementById('crosstalk_test_img');
        if(CrossTalkTest.__proto__.imageIndex == 0){
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 1;
            oImg.src = "/style/crosstalk-img/" + this.image_src[this.imageIndex];
            dump("tanhuan1");
        }else if(CrossTalkTest.__proto__.imageIndex == 6){
            oImg.src = "/style/crosstalk-img/" + this.image_src[5];
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 2;
        } else if(CrossTalkTest.__proto__.imageIndex == 5){
            oImg.src = "/style/crosstalk-img/" + this.image_src[4];
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 3;
        }else if(CrossTalkTest.__proto__.imageIndex == 4){
            oImg.src = "/style/crosstalk-img/" + this.image_src[3];
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 4;
        }else if(CrossTalkTest.__proto__.imageIndex == 3){
            oImg.src = "/style/crosstalk-img/" + this.image_src[2];
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 5;
        }else if(CrossTalkTest.__proto__.imageIndex == 2){
            oImg.src = "/style/crosstalk-img/" + this.image_src[1];
            CrossTalkTest.__proto__.imageIndex = this.image_src.length - 6;
        }else if(CrossTalkTest.__proto__.imageIndex == 1){
            oImg.src = "/style/crosstalk-img/" + this.image_src[0];
            CrossTalkTest.__proto__.imageIndex = 0;
        }
    },

    onInit : function() {
        CrossTalkTest.__proto__.imageIndex = 0;
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
window.onload = CrossTalkTest.onInit.bind(CrossTalkTest);
window.addEventListener('keydown', CrossTalkTest.handleKeydown.bind(CrossTalkTest));