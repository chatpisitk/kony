function AS_Button_9b882dd213224e8d9ed374edcd6122a2(eventobject) {
    frmHome.show();
    frmCart.flxMenu.isVisible = false;
    frmCart.destroy();
    // if(typeof menuLeftPos==='undefined')
    // 		menuLeftPos="85%";
    // 	else if(menuLeftPos==="85%")
    // 		menuLeftPos="0%";
    // 	else if(menuLeftPos==="0%")
    menuLeftPos = "85%";
    kony.print("\n--in menu toggle-->" + menuLeftPos);
    frmCart.flxMenu.isVisible = true;
    frmCart.flxMain.animate(kony.ui.createAnimation({
        100: {
            left: menuLeftPos,
            "stepConfig": {}
        }
    }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .40
    }, {
        animationEnd: function() {}
    });
}