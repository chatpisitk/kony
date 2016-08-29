function addWidgetsfrmProduct() {
    frmProduct.setDefaultUnit(kony.flex.DP);
    var FlexContainer040ca78b215b846 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "580dp",
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
        "enableCache": false,
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
        "enableCache": false,
        "height": "70%",
        "id": "btnHamburger",
        "isVisible": true,
        "onClick": AS_Button_2d6200af03ae425bbc4ac25f66c7e28d,
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
        "enableCache": false,
        "height": "70%",
        "id": "btnBack",
        "isVisible": true,
        "onClick": AS_Button_f79839156a8143b5a18a672daeeb512f,
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
    flxbar.add(btnHamburger, btnBack, imgLogo);
    var flxMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
        "height": "50dp",
        "id": "btnHome",
        "isVisible": true,
        "left": "1dp",
        "onClick": AS_Button_e3734bc37f02472a9f942db39c717ce2,
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
        "top": "48dp",
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
        "top": "107dp",
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
        "onClick": AS_Button_3f8b1a4b9db24d59b109a9263ea00f76,
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
        "onClick": AS_Button_22c3a48fb12a4aedafa67cce9fbd8d44,
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
        "clipBounds": true,
        "enableCache": false,
        "height": "2dp",
        "id": "lineHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02be66182aab447",
        "top": "55dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    lineHeader.setDefaultUnit(kony.flex.DP);
    lineHeader.add();
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
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
    var segList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgProduct": "",
            "lblAvg": "",
            "lblFreeShipping": "",
            "lblName": "",
            "lblPrice": "",
            "lblSku": ""
        }],
        "enableCache": false,
        "groupCells": false,
        "height": "80%",
        "id": "segList",
        "isVisible": true,
        "left": "16dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_8488b47d6e6342c5997313bd182aa610,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "Copyseg00d13994925754a",
        "rowTemplate": FlexContainer0e6990cb8cc684a,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "47dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer05276bc9c08db4d": "FlexContainer05276bc9c08db4d",
            "FlexContainer0e6990cb8cc684a": "FlexContainer0e6990cb8cc684a",
            "flxDetail": "flxDetail",
            "flxHeader": "flxHeader",
            "flxImg": "flxImg",
            "imgProduct": "imgProduct",
            "lblAvg": "lblAvg",
            "lblFreeShipping": "lblFreeShipping",
            "lblName": "lblName",
            "lblPrice": "lblPrice",
            "lblSku": "lblSku"
        },
        "width": "90.03%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblResult = new kony.ui.Label({
        "enableCache": false,
        "id": "lblResult",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0a8305610461b48",
        "text": "Result For : ",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblValue = new kony.ui.Label({
        "enableCache": false,
        "id": "lblValue",
        "isVisible": true,
        "left": "110dp",
        "skin": "CopyslLabel0e2acbcf2464b4d",
        "text": "All",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listBoxPage = new kony.ui.ListBox({
        "enableCache": false,
        "id": "listBoxPage",
        "isVisible": true,
        "left": "269dp",
        "onSelection": AS_ListBox_8df8bfa245ed47f0b0c2d4c2d4d855de,
        "skin": "slListBox",
        "top": "478dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPage = new kony.ui.Label({
        "enableCache": false,
        "id": "lblPage",
        "isVisible": true,
        "left": "166dp",
        "skin": "CopyslLabel0a58a3fb1906240",
        "text": "N/A",
        "top": "490dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(segList, lblResult, lblValue, listBoxPage, lblPage);
    FlexContainer040ca78b215b846.add(flxHeader, lineHeader, flxMain);
    frmProduct.add(FlexContainer040ca78b215b846);
};

function frmProductGlobals() {
    frmProduct = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProduct,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmProduct",
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
        "directChildrenIDs": ["btnBack", "btnCart", "btnHamburger", "btnHome", "btnStore", "FlexContainer040ca78b215b846", "flxbar", "flxBtnOne", "flxBtnThree", "flxBtnTwo", "flxHeader", "flxMain", "flxMenu", "imgLogo", "imgMenuCart", "imgMenuHome", "imgMenuStore", "lblCart", "lblHome", "lblPage", "lblResult", "lblStore", "lblValue", "Line1", "Line2", "Line3", "lineHeader", "listBoxPage", "segList"],
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmProduct.info = {
        "kuid": "e398d0e4897842ca80dcbbc627ad3e05"
    };
};