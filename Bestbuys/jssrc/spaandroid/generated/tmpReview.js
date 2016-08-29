function initializetmpReview() {
    FlexContainer07855de611e7843 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "120dp",
        "id": "FlexContainer07855de611e7843",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0f104ddcf2ab643"
    }, {}, {});
    FlexContainer07855de611e7843.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c04030b52c746",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblReviewer = new kony.ui.Label({
        "id": "lblReviewer",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c04030b52c746",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgRacting = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgRacting",
        "isVisible": true,
        "left": "7dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "28dp",
        "width": "93dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDetail = new kony.ui.Label({
        "height": "56.93%",
        "id": "lblDetail",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05c04030b52c746",
        "top": "53dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer07855de611e7843.add(lblTitle, lblReviewer, imgRacting, lblDetail);
}