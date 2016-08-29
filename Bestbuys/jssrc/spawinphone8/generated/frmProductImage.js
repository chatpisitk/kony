function addWidgetsfrmProductImage() {
    frmProductImage.setDefaultUnit(kony.flex.DP);
    var flxProImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxProImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a626e892eda840",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxProImage.setDefaultUnit(kony.flex.DP);
    var Header = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "580dp",
        "id": "Header",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ae3298fe7e3f43",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    Header.setDefaultUnit(kony.flex.DP);
    var flxbar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxbar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01cd7b62b08e44b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    flxbar.setDefaultUnit(kony.flex.DP);
    var btnHamburger = new kony.ui.Button({
        "centerX": "5%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnHamburger",
        "isVisible": true,
        "onClick": AS_Button_da77b6cb468946b39824e7f1b9c91d11,
        "skin": "CopyslButtonGlossBlue0e53cc5d7d3314f",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnBack = new kony.ui.Button({
        "centerX": "20%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnBack",
        "isVisible": true,
        "onClick": AS_Button_a6750738f7c34a98ac77fd85a23a1f8b,
        "skin": "CopyslButtonGlossBlue0b4245489e9494f",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "bestbuy.png",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxbar.add(btnHamburger, btnBack, imgLogo);
    var flxMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "570dp",
        "id": "flxMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox019c5e90c8b344a",
        "top": "0dp",
        "width": "87.04%",
        "zIndex": 4
    }, {}, {});
    flxMenu.setDefaultUnit(kony.flex.DP);
    var flxBtnOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxBtnOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-1dp",
        "skin": "CopyslFbox0800cafe54def4d",
        "top": "58dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxBtnOne.setDefaultUnit(kony.flex.DP);
    var CopybtnHome0bd0a56cd0f8743 = new kony.ui.Button({
        "height": "50dp",
        "id": "CopybtnHome0bd0a56cd0f8743",
        "isVisible": true,
        "left": "1dp",
        "onClick": AS_Button_32471b44f26c4a9f9f167eaf37edb606,
        "skin": "CopyslButtonGlossBlue0085c82aefee64a",
        "top": "-1dp",
        "width": "315dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLine0209a0b3a3f694f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "CopyLine0209a0b3a3f694f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "26dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "47dp",
        "width": "84.04%",
        "zIndex": 3
    }, {}, {});
    CopyLine0209a0b3a3f694f.setDefaultUnit(kony.flex.DP);
    CopyLine0209a0b3a3f694f.add();
    var CopyimgMenuHome014f96276b6ce4d = new kony.ui.Image2({
        "height": "37dp",
        "id": "CopyimgMenuHome014f96276b6ce4d",
        "isVisible": true,
        "left": "26dp",
        "skin": "slImage",
        "src": "appmenuhome.png",
        "top": "4dp",
        "width": "37dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblHome0565aa5731ac442 = new kony.ui.Label({
        "id": "CopylblHome0565aa5731ac442",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "HOME",
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    flxBtnOne.add(CopybtnHome0bd0a56cd0f8743, CopyLine0209a0b3a3f694f, CopyimgMenuHome014f96276b6ce4d, CopylblHome0565aa5731ac442);
    var flxBtnTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxBtnTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07ec4815b99804f",
        "top": "107dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxBtnTwo.setDefaultUnit(kony.flex.DP);
    var CopybtnStore06a963db0302f48 = new kony.ui.Button({
        "height": "50dp",
        "id": "CopybtnStore06a963db0302f48",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f6789bbf4ced4c4389ac0c7c3b57f750,
        "skin": "CopyslButtonGlossBlue0f7e3daa0b7ee49",
        "top": "0dp",
        "width": "315dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLine0de23077841dc47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "CopyLine0de23077841dc47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "25dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 2
    }, {}, {});
    CopyLine0de23077841dc47.setDefaultUnit(kony.flex.DP);
    CopyLine0de23077841dc47.add();
    var CopyimgMenuStore059d8c5a94e4848 = new kony.ui.Image2({
        "height": "37dp",
        "id": "CopyimgMenuStore059d8c5a94e4848",
        "isVisible": true,
        "left": "25dp",
        "skin": "slImage",
        "src": "appmenustore.png",
        "top": "6dp",
        "width": "37dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblStore048b8330674774f = new kony.ui.Label({
        "id": "CopylblStore048b8330674774f",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "STORE",
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    flxBtnTwo.add(CopybtnStore06a963db0302f48, CopyLine0de23077841dc47, CopyimgMenuStore059d8c5a94e4848, CopylblStore048b8330674774f);
    var flxBtnThree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxBtnThree",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02764b9d08fe247",
        "top": "157dp",
        "width": "100.00%",
        "zIndex": 2
    }, {}, {});
    flxBtnThree.setDefaultUnit(kony.flex.DP);
    var CopyimgMenuCart05b087a39fc0644 = new kony.ui.Image2({
        "height": "37dp",
        "id": "CopyimgMenuCart05b087a39fc0644",
        "isVisible": true,
        "left": "24dp",
        "skin": "slImage",
        "src": "appmenucart.png",
        "top": "3dp",
        "width": "37dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLine07c03258f69a045 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "CopyLine07c03258f69a045",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 2
    }, {}, {});
    CopyLine07c03258f69a045.setDefaultUnit(kony.flex.DP);
    CopyLine07c03258f69a045.add();
    var CopybtnCart0041c33aad4f648 = new kony.ui.Button({
        "height": "50dp",
        "id": "CopybtnCart0041c33aad4f648",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_1cdcb0591c2e4013a6fce23d34d81787,
        "skin": "CopyslButtonGlossBlue0562c61fb224646",
        "top": "0dp",
        "width": "315dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCart047a5dd49cd5a44 = new kony.ui.Label({
        "id": "CopylblCart047a5dd49cd5a44",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "CART",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    flxBtnThree.add(CopyimgMenuCart05b087a39fc0644, CopyLine07c03258f69a045, CopybtnCart0041c33aad4f648, CopylblCart047a5dd49cd5a44);
    flxMenu.add(flxBtnOne, flxBtnTwo, flxBtnThree);
    Header.add(flxbar, flxMenu);
    var lineHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "lineHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02be66182aab447",
        "top": "10%",
        "width": "100%",
        "zIndex": 4
    }, {}, {});
    lineHeader.setDefaultUnit(kony.flex.DP);
    lineHeader.add();
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c81a2fb3933d4b",
        "top": "9.50%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30%",
        "id": "imgProduct",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "20%",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listSize = new kony.ui.ListBox({
        "height": "10%",
        "id": "listSize",
        "isVisible": true,
        "left": "47dp",
        "onSelection": AS_ListBox_e7535f39d7114d6f91532042e800aee9,
        "skin": "CopyslListBox09ccb4058bc8746",
        "top": "60%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(imgProduct, listSize);
    flxProImage.add(Header, lineHeader, flxMain);
    frmProductImage.add(flxProImage);
};

function frmProductImageGlobals() {
    frmProductImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductImage,
        "enabledForIdleTimeout": false,
        "id": "frmProductImage",
        "init": AS_Form_77928351a06b4dcf8bddf36fde73370b,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmProductImage.info = {
        "kuid": "ca9a97a79aad47e1b3c73a58d562cdf7"
    };
};