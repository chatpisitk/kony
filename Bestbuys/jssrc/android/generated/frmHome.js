function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0a626e892eda840",
        "top": 0,
        "width": "100%"
    }, {}, {});
    flxHome.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0ae3298fe7e3f43",
        "top": 0,
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var flxbar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxbar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01cd7b62b08e44b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flxbar.setDefaultUnit(kony.flex.DP);
    var btnHamburger2 = new kony.ui.Image2({
        "centerX": "7%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnHamburger2",
        "isVisible": true,
        "skin": "slImage",
        "src": "humburger.png",
        "width": "12%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnHamburger = new kony.ui.Button({
        "centerX": "7%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnHamburger",
        "isVisible": true,
        "onClick": AS_Button_3048d84b7bc24561a64483548d66fc3a,
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
        "isVisible": false,
        "onClick": AS_Button_17d5c6a659684557855ce1f78a4a2e75,
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
    var btnSearch2 = new kony.ui.Image2({
        "centerX": "90%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnSearch2",
        "isVisible": true,
        "skin": "slImage",
        "src": "search.png",
        "width": "12%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSearch = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "height": "70%",
        "id": "btnSearch",
        "isVisible": true,
        "onClick": AS_Button_0dd74ad6c3374658b91ca7dc19727743,
        "skin": "CopyslButtonGlossBlue06efed98cdc0741",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxbar.add(btnHamburger2, btnHamburger, btnBack, imgLogo, btnSearch2, btnSearch);
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
        "zIndex": 5
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
        "onClick": AS_Button_f6a9ca4b3c074185aeec6d05312f0168,
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
        "onClick": AS_Button_f757f413615e4cb2be7e12f365796732,
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
        "onClick": AS_Button_f24545b5e55d48b6a1d920dcc881ba6c,
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
    var segList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblID": "",
            "lblName": ""
        }],
        "groupCells": false,
        "height": "453dp",
        "id": "segList",
        "isVisible": true,
        "left": "15dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_2528ec6898994e3a9a7fb732925ceec7,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0218591fb26474d,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ebe1eb00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "45dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer083d5303614db4a": "FlexContainer083d5303614db4a",
            "lblID": "lblID",
            "lblName": "lblName"
        },
        "width": "91.97%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblBreadcrumbs = new kony.ui.Label({
        "id": "lblBreadcrumbs",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0a8305610461b48",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxPopupSearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPopupSearch",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f8dd2d37c54d",
        "top": "0%",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flxPopupSearch.setDefaultUnit(kony.flex.DP);
    var flxSearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxSearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d9dd3d91756740",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var txtSearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "35%",
        "centerY": "20%",
        "height": "20%",
        "id": "txtSearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onDone": AS_TextField_e1c5c13132fb4fe7b1fd324e36646d0a,
        "placeholder": "Search",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0f49e07307c5b4e",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "65%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0784329d964c849",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnCancel = new kony.ui.Button({
        "centerX": "83%",
        "centerY": "20%",
        "height": "20%",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_e1500e5336724f20b3d75317a2fdab06,
        "skin": "CopyslButtonGlossBlue0ed4000ec2afd4b",
        "text": "Cancel",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFilterbyText = new kony.ui.Label({
        "id": "lblFilterbyText",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0c3e8ef4409024d",
        "text": "Filter By : ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "36%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lstFilter = new kony.ui.ListBox({
        "centerX": "50%",
        "height": "20%",
        "id": "lstFilter",
        "isVisible": true,
        "masterData": [
            ["keyDefalut", "< Select a Value >"],
            ["onSale", "On Sale"],
            ["notOnsale", "Not On Sale"],
            ["new", "New "],
            ["notNew", "Not New"],
            ["freeShipping", "Free Shipping"],
            ["nofreeShipping", "No Free Shipping"]
        ],
        "selectedKey": "keyDefalut",
        "selectedKeyValue": ["keyDefalut", "< Select a Value >"],
        "skin": "CopyslListBox0c69793e3fc8d4a",
        "top": "50%",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholderSkin": "CopyslListBox08aa9f051c02442",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flxSearch.add(txtSearch, btnCancel, lblFilterbyText, lstFilter);
    flxPopupSearch.add(flxSearch);
    flxMain.add(segList, lblBreadcrumbs, flxPopupSearch);
    flxHome.add(flxHeader, lineHeader, flxMain);
    frmHome.add(flxHome);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "init": AS_Form_5fa7f37ab84d4c19b24b2783a943bddb,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm07440dd27c6714b"
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
    frmHome.info = {
        "kuid": "8c8fa32e932c493dba97f7a1f6b0bed6"
    };
};