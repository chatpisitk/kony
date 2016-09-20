function AS_Button_23dba9ae9f9149ddbc22e9e31a923155(eventobject) {
    frmProductDetail.btnHide.isVisible = true;
    // frmProductDetail.segReview.isVisible = true;
    frmProductDetail.btnShow.isVisible = false;
    frmProductDetail.segReview.animate(kony.ui.createAnimation({
        100: {
            "centerY": "54%",
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