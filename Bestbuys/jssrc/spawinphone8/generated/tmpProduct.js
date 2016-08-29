function initializetmpProduct() {
    FlexContainer0e6990cb8cc684a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "FlexContainer0e6990cb8cc684a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox09c5beba3d9b849"
    }, {}, {});
    FlexContainer0e6990cb8cc684a.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblFreeShipping = new kony.ui.Label({
        "id": "lblFreeShipping",
        "isVisible": true,
        "left": "136dp",
        "skin": "CopyslLabel0535c81602a4c4f",
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    flxHeader.add(lblFreeShipping);
    var flxImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85%",
        "id": "flxImg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "slFbox",
        "top": "25dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxImg.setDefaultUnit(kony.flex.DP);
    var lblSku = new kony.ui.Label({
        "id": "lblSku",
        "isVisible": false,
        "left": "5dp",
        "skin": "CopyslLabel0760fb2bb1ddb4c",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    var imgProduct = new kony.ui.Image2({
        "height": "70%",
        "id": "imgProduct",
        "imageWhenFailed": "bestbuy.png",
        "isVisible": true,
        "left": "15dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "15dp",
        "width": "90%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImg.add(lblSku, imgProduct);
    var flxDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85%",
        "id": "flxDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "143dp",
        "skin": "CopyslFbox0284374d232694a",
        "top": "25dp",
        "width": "60.00%",
        "zIndex": 1
    }, {}, {});
    flxDetail.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel0c49e2ded26bd4d",
        "text": "name",
        "top": "-20dp",
        "width": "89.07%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel091e5541c2fbd40",
        "top": "58dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    var lblAvg = new kony.ui.Label({
        "id": "lblAvg",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel06ab31d19263144",
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false
    });
    flxDetail.add(lblName, lblPrice, lblAvg);
    var FlexContainer05276bc9c08db4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer05276bc9c08db4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0613acb1eb38646",
        "top": "232dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer05276bc9c08db4d.setDefaultUnit(kony.flex.DP);
    FlexContainer05276bc9c08db4d.add();
    FlexContainer0e6990cb8cc684a.add(flxHeader, flxImg, flxDetail, FlexContainer05276bc9c08db4d);
}