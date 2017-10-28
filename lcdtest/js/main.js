/**
 * Created by huantan on 17-10-24.
 */
'use strict';
var LCDTest = {
    get iframe() {
        return document.getElementById('test-iframe');
    },

    get manuList() {
        return document.getElementById('manuList');
    },

    get manuPanel() {
        return document.getElementById('manu-panel');
    },

    get testPanel() {
        return document.getElementById('test-panel');
    },

    openTest: function ut_openTest(name) {
        this.testPanel.classList.remove('hidden');
        this.manuPanel.classList.add('hidden');
        this.iframe.src =  "panel/" +name + '.html';
        dump('tanhuan : '+ this.iframe.src);
        this.iframe.focus();

        this.currentTest = name;
    },

    initManuList:function  () {

        let list = [{'htmlId':"color_test","itemName":"Color Test","autoTest": {"isHidden": false}, "manuTest": {"isHidden": false}},{'htmlId':"crosstalk_test","itemName":"Crosstalk Test","autoTest": {"isHidden": false}, "manuTest": {"isHidden": false}},
            {'htmlId':"flicker_test","itemName":"Flicker Test","autoTest": {"isHidden": false}, "manuTest": {"isHidden": false}},{'htmlId':"gamma_test","itemName":"Gamma Test","autoTest": {"isHidden": false}, "manuTest": {"isHidden": false}}]
        let container = document.getElementById('manuList');
        let ul = document.createElement('ul');
        function createListItem(name, info) {
            let li = document.createElement('li');
            let p = document.createElement('p');
            p.textContent = info;
            li.setAttribute('data-name', name);
            li.appendChild(p);
            li.classList.add('focusable');
            li.tabIndex = 0;
            ul.appendChild(li);
        };

        for (let i = 0; i < list.length; i++) {
            dump('initManuList : list.length' + list.length);
            let item = list[i];
            dump('initManuList: ' + item.htmlId + "    " + item.itemName);
            createListItem(item.htmlId, item.itemName);
        }
        dump('initManuList2');
        container.appendChild(ul);
        this.navigator = new SimpleNavigationHelper('.focusable', container);
        container.focus();

    },
    handleKeydown: function ut_handleKeydown(evt) {
        // evt.preventDefault();
        var target = evt.target;
        switch (evt.key) {
            case 'Enter':
                if (target.dataset.name) {
                    dump('tanhuan: '+target.dataset.name);
                    this.openTest(target.dataset.name);
                }
                break;
            case 'Backspace':
                window.close();
            case 'EndCall':
                window.close();
            default:
                break;
        }
    }

};
window.onload = LCDTest.initManuList.bind(LCDTest);
window.addEventListener('keydown', LCDTest.handleKeydown.bind(LCDTest));