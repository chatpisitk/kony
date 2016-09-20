function AS_Button_098a04cd5254415d98da5153fb55512b(eventobject) {
    frmProductDetail.btnHide.isVisible = false;
    // frmProductDetail.segReview.isVisible = false;
    frmProductDetail.btnShow.isVisible = true;
    frmProductDetail.segReview.animate(kony.ui.createAnimation({
        100: {
            "centerY": "130%",
            "stepConfig": {}
        }
    }), {
        delay: 0.1,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .40
    }, {
        animationEnd: function() {}
    });
}