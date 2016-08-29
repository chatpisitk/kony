function initializeFBox0218591fb26474d() {
    FBox0218591fb26474d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "enableCache": false,
        "height": "40dp",
        "id": "FBox0218591fb26474d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0218591fb26474d.setDefaultUnit(kony.flex.DP);
    var FlexContainer083d5303614db4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "40dp",
        "id": "FlexContainer083d5303614db4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_78d8c16687004531b82d520274f9f4ad,
        "skin": "CopyslFbox04d6efcef990f4d",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer083d5303614db4a.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "enableCache": false,
        "id": "lblName",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0fed8f15ee3a44f",
        "text": "Label",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE
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
    }, {});
    var lblID = new kony.ui.Label({
        "enableCache": false,
        "id": "lblID",
        "isVisible": false,
        "left": "287dp",
        "skin": "CopyslLabel0af77bd7732ed4d",
        "text": "Label",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
    }, {});
    FlexContainer083d5303614db4a.add(lblName, lblID);
    FBox0218591fb26474d.add(FlexContainer083d5303614db4a);
}