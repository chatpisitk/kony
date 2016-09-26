function addWidgetsfrmStoreLocation() {
    frmStoreLocation.setDefaultUnit(kony.flex.DP);
    var flxFindStore = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxFindStore",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a626e892eda840",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxFindStore.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ae3298fe7e3f43",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
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
        "centerX": "7%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnHamburger",
        "isVisible": true,
        "onClick": AS_Button_4f428e6cd466443fb4591f379bb4dc69,
        "skin": "CopyslButtonGlossBlue0e53cc5d7d3314f",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnBack = new kony.ui.Button({
        "centerX": "22%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnBack",
        "isVisible": true,
        "onClick": AS_Button_db7510df26694d76adff64bff51ee1d3,
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
        "height": "100%",
        "id": "flxMenu",
        "isVisible": false,
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
    var btnHome = new kony.ui.Button({
        "height": "50dp",
        "id": "btnHome",
        "isVisible": true,
        "left": "1dp",
        "onClick": AS_Button_404dd80bb6fe45daa53e18b302cd327e,
        "skin": "CopyslButtonGlossBlue0085c82aefee64a",
        "top": "-1dp",
        "width": "315dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Line1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "2dp",
        "id": "Line1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 3
    }, {}, {});
    Line1.setDefaultUnit(kony.flex.DP);
    Line1.add();
    var imgMenuHome = new kony.ui.Image2({
        "centerX": "13%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgMenuHome",
        "isVisible": true,
        "skin": "slImage",
        "src": "appmenuhome.png",
        "width": "13%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHome = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHome",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxBtnOne.add(btnHome, Line1, imgMenuHome, lblHome);
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
    var btnStore = new kony.ui.Button({
        "height": "50dp",
        "id": "btnStore",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e510b794864b43639bf9f5e7996f6a3f,
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
    var Line2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "98%",
        "clipBounds": true,
        "height": "3dp",
        "id": "Line2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0fc472fdc537a4d",
        "width": "84.04%",
        "zIndex": 2
    }, {}, {});
    Line2.setDefaultUnit(kony.flex.DP);
    Line2.add();
    var imgMenuStore = new kony.ui.Image2({
        "centerX": "13%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgMenuStore",
        "isVisible": true,
        "left": 25,
        "skin": "slImage",
        "src": "appmenustore.png",
        "width": "13%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblStore = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblStore",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxBtnTwo.add(btnStore, Line2, imgMenuStore, lblStore);
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
    var imgMenuCart = new kony.ui.Image2({
        "centerX": "13%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgMenuCart",
        "isVisible": true,
        "skin": "slImage",
        "src": "appmenucart.png",
        "width": "13%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Line3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "97%",
        "clipBounds": true,
        "height": "3dp",
        "id": "Line3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0fc472fdc537a4d",
        "width": "84.04%",
        "zIndex": 4
    }, {}, {});
    Line3.setDefaultUnit(kony.flex.DP);
    Line3.add();
    var btnCart = new kony.ui.Button({
        "height": "50dp",
        "id": "btnCart",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_2ab4b4cc27324fe1b8b19fe345b2e743,
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
    var lblCart = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCart",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxBtnThree.add(imgMenuCart, Line3, btnCart, lblCart);
    flxMenu.add(flxBtnOne, flxBtnTwo, flxBtnThree);
    flxHeader.add(flxbar, flxMenu);
    var lineHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "10%",
        "clipBounds": true,
        "height": "2dp",
        "id": "lineHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox02be66182aab447",
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
        "top": "10%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var txtSearchCity = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "35%",
        "centerY": "8%",
        "height": "40dp",
        "id": "txtSearchCity",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10dp",
        "placeholder": "Enter City Name ....",
        "secureTextEntry": false,
        "skin": "CopyslTextBox092ce59558a5d4d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "17dp",
        "width": "237dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var btnCancel = new kony.ui.Button({
        "centerX": "83%",
        "centerY": "8%",
        "height": "40dp",
        "id": "btnCancel",
        "isVisible": true,
        "left": "257dp",
        "onClick": AS_Button_8a34830e191c42f58bb113a80fc79f87,
        "skin": "CopyslButtonGlossBlue03b4748e9900c43",
        "text": "Search",
        "top": "17dp",
        "width": "97dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Maps = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pin_yellow.png",
        "height": "85%",
        "id": "Maps",
        "isVisible": true,
        "left": "0dp",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "15%",
        "width": "100%"
    }, {}, {
        "mapSource": constants.MAP_SOURCE_NATIVE,
        "mode": constants.MAP_VIEW_MODE_NORMAL
    });
    flxMain.add(txtSearchCity, btnCancel, Maps);
    flxFindStore.add(flxHeader, lineHeader, flxMain);
    frmStoreLocation.add(flxFindStore);
};

function frmStoreLocationGlobals() {
    frmStoreLocation = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStoreLocation,
        "enabledForIdleTimeout": false,
        "id": "frmStoreLocation",
        "init": AS_Form_4d9e8bfcd8cd423da20b880afccdd91f,
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
    frmStoreLocation.info = {
        "kuid": "6d0b63228b6f4aab89c83a13b34a4538"
    };
};