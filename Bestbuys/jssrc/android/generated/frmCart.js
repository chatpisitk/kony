function addWidgetsfrmCart() {
    frmCart.setDefaultUnit(kony.flex.DP);
    var flxCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "573dp",
        "id": "flxCart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a626e892eda840",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxCart.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "580dp",
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
        "height": "57dp",
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
        "onClick": AS_Button_fc7206b9684b41889f1d3db5f02a62da,
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
        "onClick": AS_Button_9b882dd213224e8d9ed374edcd6122a2,
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
        "height": "580dp",
        "id": "flxMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox019c5e90c8b344a",
        "top": "0dp",
        "width": "86.11%",
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
        "onClick": AS_Button_ffd7c1b7f6de4d2088edd4bd4e56bce4,
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
        "clipBounds": true,
        "height": "3dp",
        "id": "Line1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "26dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 3
    }, {}, {});
    Line1.setDefaultUnit(kony.flex.DP);
    Line1.add();
    var imgMenuHome = new kony.ui.Image2({
        "height": "37dp",
        "id": "imgMenuHome",
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
    var lblHome = new kony.ui.Label({
        "id": "lblHome",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "HOME",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
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
        "onClick": AS_Button_17e7c8baee994852ad84298b55786a7a,
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
        "clipBounds": true,
        "height": "3dp",
        "id": "Line2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "25dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 2
    }, {}, {});
    Line2.setDefaultUnit(kony.flex.DP);
    Line2.add();
    var imgMenuStore = new kony.ui.Image2({
        "height": "37dp",
        "id": "imgMenuStore",
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
    var lblStore = new kony.ui.Label({
        "id": "lblStore",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "STORE",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
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
        "height": "37dp",
        "id": "imgMenuCart",
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
    var Line3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "Line3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "48dp",
        "width": "84.04%",
        "zIndex": 2
    }, {}, {});
    Line3.setDefaultUnit(kony.flex.DP);
    Line3.add();
    var btnCart = new kony.ui.Button({
        "height": "50dp",
        "id": "btnCart",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_74b4730342644775ab181c73b717591a,
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
        "id": "lblCart",
        "isVisible": true,
        "left": "77dp",
        "skin": "CopyslLabel00f0a982c5c9b48",
        "text": "CART",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBtnThree.add(imgMenuCart, Line3, btnCart, lblCart);
    flxMenu.add(flxBtnOne, flxBtnTwo, flxBtnThree);
    flxHeader.add(flxbar, flxMenu);
    var lineHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "lineHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02be66182aab447",
        "top": "53dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    lineHeader.setDefaultUnit(kony.flex.DP);
    lineHeader.add();
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "523dp",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c81a2fb3933d4b",
        "top": "57dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var cartItems = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnDelete": "",
            "lblName": "",
            "lblPrice": ""
        }],
        "groupCells": false,
        "height": "80.31%",
        "id": "cartItems",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_68e34dcfac4c45408a3c3f5f71a2b9dd,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer02f75fc28eea24a,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ede6ed00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer02f75fc28eea24a": "CopyFlexContainer02f75fc28eea24a",
            "btnDelete": "btnDelete",
            "lblName": "lblName",
            "lblPrice": "lblPrice"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblText = new kony.ui.Label({
        "id": "lblText",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel06a641d08adaf40",
        "text": "Shopping Cart is Empty. Please browse Products and add them to your Cart.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "100.03%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTotal = new kony.ui.Label({
        "id": "lblTotal",
        "isVisible": true,
        "left": "227dp",
        "skin": "CopyslLabel087b52578c5ae4c",
        "text": "Total : ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "428dp",
        "width": "33.33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMain.add(cartItems, lblText, lblTotal);
    flxCart.add(flxHeader, lineHeader, flxMain);
    frmCart.add(flxCart);
};

function frmCartGlobals() {
    frmCart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCart,
        "enabledForIdleTimeout": false,
        "id": "frmCart",
        "init": AS_Form_397c02a541d24ad8b72ca024c6fa2c64,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm01c3593b9d74448"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmCart.info = {
        "kuid": "90ecaf67da764bf7bae7331c1756bd56"
    };
};