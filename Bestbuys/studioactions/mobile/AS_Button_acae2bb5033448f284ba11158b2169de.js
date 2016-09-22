function AS_Button_acae2bb5033448f284ba11158b2169de(eventobject, context) {
    flxRowCart.animate(kony.ui.createAnimation({
        100: {
            "centerX": "-50%",
            "stepConfig": {}
        }
    }), {
        delay: 0.1,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .40
    }, {
        animationEnd: function() {}
    });
    deleteItem.call(this);
}