function initializetmpRowCart() {
    CopyFlexContainer02f75fc28eea24a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "CopyFlexContainer02f75fc28eea24a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox09c5beba3d9b849"
    }, {}, {});
    CopyFlexContainer02f75fc28eea24a.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "height": "80%",
        "id": "lblName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0b082c004c15d40",
        "text": "name",
        "top": "8dp",
        "width": "50.67%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblPrice = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPrice",
        "isVisible": true,
        "left": "202dp",
        "skin": "CopyslLabel0503b1e7faebb47",
        "text": "$100",
        "top": "40dp",
        "width": "23%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnDelete = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnDelete",
        "isVisible": true,
        "left": "296dp",
        "onClick": AS_Button_acae2bb5033448f284ba11158b2169de,
        "skin": "CopyslButtonGlossBlue0831aef13279b49",
        "top": "23dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer02f75fc28eea24a.add(lblName, lblPrice, btnDelete);
}