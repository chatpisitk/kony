function initializetmpMap() {
    flxMapCallout = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "50%",
        "id": "flxMapCallout",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0975a9fecaae54c",
        "width": "80%"
    }, {}, {});
    flxMapCallout.setDefaultUnit(kony.flex.DP);
    var imgCallout = new kony.ui.Image2({
        "enableCache": false,
        "height": "70dp",
        "id": "imgCallout",
        "isVisible": true,
        "left": "6dp",
        "skin": "slImage",
        "src": "compass.png",
        "top": "18dp",
        "width": "79dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMapCalloutName = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblMapCalloutName",
        "isVisible": true,
        "left": "97dp",
        "skin": "CopyslLabel02b98e4e5ebef44",
        "text": "city",
        "top": "28dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAddressText = new kony.ui.Label({
        "enableCache": false,
        "id": "lblAddressText",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel02432d1ae4b9948",
        "text": "Address:",
        "top": "96dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMapCalloutAddress = new kony.ui.Label({
        "enableCache": false,
        "id": "lblMapCalloutAddress",
        "isVisible": true,
        "left": "19dp",
        "skin": "CopyslLabel00ba38662e81645",
        "text": "address",
        "top": "122dp",
        "width": "88.38%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHourText = new kony.ui.Label({
        "enableCache": false,
        "id": "lblHourText",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel067d0da2ec27747",
        "text": "Hours:",
        "top": "141dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMapCalloutHours = new kony.ui.Label({
        "enableCache": false,
        "id": "lblMapCalloutHours",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel02dd0cb0cf5e14e",
        "text": "hours",
        "top": "167dp",
        "width": "88.77%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMapCallout.add(imgCallout, lblMapCalloutName, lblAddressText, lblMapCalloutAddress, lblHourText, lblMapCalloutHours);
}