function addWidgetsfrmProductDetail() {
    frmProductDetail.setDefaultUnit(kony.flex.DP);
    var FlexContainer040ca78b215b846 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "100%",
        "id": "FlexContainer040ca78b215b846",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a626e892eda840",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer040ca78b215b846.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
        "height": "70%",
        "id": "btnHamburger",
        "isVisible": true,
        "onClick": AS_Button_0a58e71e24bd43fe97f8ba205dadef73,
        "skin": "CopyslButtonGlossBlue0e53cc5d7d3314f",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "enableCache": false,
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
    var btnBack = new kony.ui.Button({
        "centerX": "20%",
        "centerY": "50%",
        "enableCache": false,
        "height": "70%",
        "id": "btnBack",
        "isVisible": true,
        "onClick": AS_Button_c2edaf24c9b1454a971de8274ca863a6,
        "skin": "CopyslButtonGlossBlue0b4245489e9494f",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxbar.add(btnHamburger, imgLogo, btnBack);
    var flxMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "99.78%",
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
        "enableCache": false,
        "height": "50dp",
        "id": "flxBtnOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-1dp",
        "skin": "CopyslFbox0800cafe54def4d",
        "top": "60dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxBtnOne.setDefaultUnit(kony.flex.DP);
    var btnHome = new kony.ui.Button({
        "enableCache": false,
        "height": "50dp",
        "id": "btnHome",
        "isVisible": true,
        "left": "1dp",
        "onClick": AS_Button_5fae668439a5492d83ddebfa69afdcc4,
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
        "enableCache": false,
        "height": "3dp",
        "id": "Line1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "26dp",
        "skin": "CopyslFbox0fc472fdc537a4d",
        "top": "47dp",
        "width": "84.04%",
        "zIndex": 3
    }, {}, {});
    Line1.setDefaultUnit(kony.flex.DP);
    Line1.add();
    var imgMenuHome = new kony.ui.Image2({
        "enableCache": false,
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
        "enableCache": false,
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
    }, {});
    flxBtnOne.add(btnHome, Line1, imgMenuHome, lblHome);
    var flxBtnTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "50dp",
        "id": "flxBtnTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07ec4815b99804f",
        "top": "106dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxBtnTwo.setDefaultUnit(kony.flex.DP);
    var btnStore = new kony.ui.Button({
        "enableCache": false,
        "height": "50dp",
        "id": "btnStore",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e67b530ad98b4f61ab1885d86ba61402,
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
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
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
    }, {});
    flxBtnTwo.add(btnStore, Line2, imgMenuStore, lblStore);
    var flxBtnThree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
        "height": "50dp",
        "id": "btnCart",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f5aa5f697348490cbcaa8b3a8e25f77c,
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
        "enableCache": false,
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
    }, {});
    flxBtnThree.add(imgMenuCart, Line3, btnCart, lblCart);
    flxMenu.add(flxBtnOne, flxBtnTwo, flxBtnThree);
    flxHeader.add(flxbar, flxMenu);
    var lineHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "10%",
        "clipBounds": true,
        "enableCache": false,
        "height": "2dp",
        "id": "lineHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02be66182aab447",
        "top": "10%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    lineHeader.setDefaultUnit(kony.flex.DP);
    lineHeader.add();
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "91%",
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
    var flxDetailProducts = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "60%",
        "id": "flxDetailProducts",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox04b8fa7b64a154f",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxDetailProducts.setDefaultUnit(kony.flex.DP);
    var segProductDetail = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "BtnMore": "",
            "imgProduct": "",
            "imgRactingDetail": "",
            "lblAvg": "",
            "lblDescription": "",
            "lblName": "",
            "lblPrice": "",
            "lblSku": ""
        }],
        "enableCache": false,
        "groupCells": false,
        "height": "80%",
        "id": "segProductDetail",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "Copyseg08692b451f6f945",
        "rowTemplate": FlxDetail,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "BtnMore": "BtnMore",
            "FlexContainer0d68742bfce3341": "FlexContainer0d68742bfce3341",
            "FlxDetail": "FlxDetail",
            "flxDetails": "flxDetails",
            "flxImgProduct": "flxImgProduct",
            "imgProduct": "imgProduct",
            "imgRactingDetail": "imgRactingDetail",
            "lblAvg": "lblAvg",
            "lblDescription": "lblDescription",
            "lblName": "lblName",
            "lblPrice": "lblPrice",
            "lblSku": "lblSku"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnAddCart = new kony.ui.Button({
        "centerX": "50%",
        "enableCache": false,
        "height": "50dp",
        "id": "BtnAddCart",
        "isVisible": true,
        "onClick": AS_Button_2b92893dc52941c292855aebc74da19d,
        "skin": "CopyslButtonGlossBlue0360d9ccd9dd040",
        "text": "Add To Cart",
        "top": "82%",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetailProducts.add(segProductDetail, BtnAddCart);
    var flxLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "2dp",
        "id": "flxLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ca65f8824be745",
        "top": "60%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLine.setDefaultUnit(kony.flex.DP);
    flxLine.add();
    var flxReviewDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "40%",
        "id": "flxReviewDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxReviewDetail.setDefaultUnit(kony.flex.DP);
    var llblTotalText = new kony.ui.Label({
        "enableCache": false,
        "id": "llblTotalText",
        "isVisible": true,
        "left": "4dp",
        "skin": "CopyslLabel057a09546969d43",
        "text": "Total Number Of Reviews : ",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTotal = new kony.ui.Label({
        "centerX": "60%",
        "enableCache": false,
        "id": "lblTotal",
        "isVisible": true,
        "left": "177dp",
        "skin": "CopyslLabel057a09546969d43",
        "text": "0",
        "top": "8dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnHide = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "17%",
        "enableCache": false,
        "height": "13%",
        "id": "btnHide",
        "isVisible": false,
        "onClick": AS_Button_098a04cd5254415d98da5153fb55512b,
        "skin": "CopyslButtonGlossBlue03585a9a99d7741",
        "width": "8%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segReview = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "54%",
        "data": [{
            "imgRacting": "",
            "lblDetail": "",
            "lblReviewer": "",
            "lblTitle": ""
        }],
        "enableCache": false,
        "groupCells": false,
        "height": "60%",
        "id": "segReview",
        "isVisible": false,
        "left": "13dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer07855de611e7843,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "57dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "FlexContainer07855de611e7843": "FlexContainer07855de611e7843",
            "imgRacting": "imgRacting",
            "lblDetail": "lblDetail",
            "lblReviewer": "lblReviewer",
            "lblTitle": "lblTitle"
        },
        "width": "91.82%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnShow = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "90%",
        "enableCache": false,
        "height": "13%",
        "id": "btnShow",
        "isVisible": true,
        "onClick": AS_Button_23dba9ae9f9149ddbc22e9e31a923155,
        "skin": "CopyslButtonGlossBlue0f33ee9510c1146",
        "width": "8%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxReviewDetail.add(llblTotalText, lblTotal, btnHide, segReview, btnShow);
    flxMain.add(flxDetailProducts, flxLine, flxReviewDetail);
    FlexContainer040ca78b215b846.add(flxHeader, lineHeader, flxMain);
    frmProductDetail.add(FlexContainer040ca78b215b846);
};

function frmProductDetailGlobals() {
    frmProductDetail = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductDetail,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmProductDetail",
        "init": AS_Form_7f9751d61a104e12875d0ce6feffc86b,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["BtnAddCart", "btnBack", "btnCart", "btnHamburger", "btnHide", "btnHome", "btnShow", "btnStore", "FlexContainer040ca78b215b846", "flxbar", "flxBtnOne", "flxBtnThree", "flxBtnTwo", "flxDetailProducts", "flxHeader", "flxLine", "flxMain", "flxMenu", "flxReviewDetail", "imgLogo", "imgMenuCart", "imgMenuHome", "imgMenuStore", "lblCart", "lblHome", "lblStore", "lblTotal", "Line1", "Line2", "Line3", "lineHeader", "llblTotalText", "segProductDetail", "segReview"],
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmProductDetail.info = {
        "kuid": "d47722272e5c41888a62c196cb12885d"
    };
};