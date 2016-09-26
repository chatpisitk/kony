function initializeCopyFBox06e1ddc757e2145() {
    CopyFBox06e1ddc757e2145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "CopyFBox06e1ddc757e2145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox06e1ddc757e2145.setDefaultUnit(kony.flex.PERCENTAGE);
    var flxRowCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRowCart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "CopyslFbox09c5beba3d9b849",
        "top": "0",
        "width": "100%"
    }, {}, {});
    flxRowCart.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "height": "80%",
        "id": "lblName",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0b082c004c15d40",
        "text": "name",
        "width": "55%"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPrice = new kony.ui.Label({
        "centerX": "70%",
        "centerY": "50%",
        "id": "lblPrice",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0503b1e7faebb47",
        "text": "$100",
        "width": "23%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnDelete = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "60%",
        "id": "btnDelete",
        "isVisible": true,
        "onClick": AS_Button_3e0849e5dabb40b3abecf693f94f7745,
        "skin": "CopyslButtonGlossBlue0831aef13279b49",
        "width": "12%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "showProgressIndicator": true
    });
    flxRowCart.add(lblName, lblPrice, btnDelete);
    CopyFBox06e1ddc757e2145.add(flxRowCart);
}