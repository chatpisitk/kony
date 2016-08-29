function initializetmpProductDetail() {
    FlxDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "100%",
        "id": "FlxDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox00cc57c142c2d40"
    }, {}, {});
    FlxDetail.setDefaultUnit(kony.flex.PERCENTAGE);
    var FlexContainer0d68742bfce3341 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "100%",
        "id": "FlexContainer0d68742bfce3341",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox08b0e19edaa2342",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    FlexContainer0d68742bfce3341.setDefaultUnit(kony.flex.DP);
    var flxImgProduct = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "60%",
        "id": "flxImgProduct",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox08bd6a6c348074e",
        "top": "0dp",
        "width": "40%",
        "zIndex": 5
    }, {}, {});
    flxImgProduct.setDefaultUnit(kony.flex.DP);
    var lblSku = new kony.ui.Label({
        "enableCache": false,
        "id": "lblSku",
        "isVisible": false,
        "left": "10dp",
        "skin": "CopyslLabel047a05cf2af4446",
        "text": "aaa",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgProduct = new kony.ui.Image2({
        "enableCache": false,
        "height": "80%",
        "id": "imgProduct",
        "isVisible": true,
        "left": "10dp",
        "onTouchStart": AS_Image_62e34458d3734da8a1bfefd0e055a68b,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "5dp",
        "width": "85%",
        "zIndex": 4
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 5, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnMore = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "slButtonGlossRed",
        "height": "20%",
        "id": "BtnMore",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_eceb85e775cf41e596b5612231993cf9,
        "skin": "CopyslButtonGlossBlue0872c2fc28b964c",
        "text": "More .....",
        "top": "312dp",
        "width": "100%",
        "zIndex": 4
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgProduct.add(lblSku, imgProduct, BtnMore);
    var flxDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "enableCache": false,
        "height": "60%",
        "id": "flxDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "143dp",
        "skin": "CopyslFbox0e6f864afb1ce4c",
        "top": "0dp",
        "width": "60%",
        "zIndex": 4
    }, {}, {});
    flxDetails.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "enableCache": false,
        "id": "lblName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c79b52a7da746",
        "text": "N/A",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 3, 3, 0],
        "paddingInPixel": false
    }, {});
    var lblPrice = new kony.ui.Label({
        "enableCache": false,
        "id": "lblPrice",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c79b52a7da746",
        "text": "$100",
        "top": "78dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAvg = new kony.ui.Label({
        "enableCache": false,
        "id": "lblAvg",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c79b52a7da746",
        "text": "Avg Review : 4.0",
        "top": "94dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgRactingDetail = new kony.ui.Image2({
        "enableCache": false,
        "id": "imgRactingDetail",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "112dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetails.add(lblName, lblPrice, lblAvg, imgRactingDetail);
    FlexContainer0d68742bfce3341.add(flxImgProduct, flxDetails);
    var lblDescription = new kony.ui.Label({
        "enableCache": false,
        "height": "40%",
        "id": "lblDescription",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04a586763da8a44",
        "text": "N/A",
        "top": "60.02%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    FlxDetail.add(FlexContainer0d68742bfce3341, lblDescription);
}