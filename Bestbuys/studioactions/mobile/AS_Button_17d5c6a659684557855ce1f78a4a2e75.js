function AS_Button_17d5c6a659684557855ce1f78a4a2e75(eventobject) {
    frmHome.lblBreadcrumbs.text = "Home";
    frmHome.btnBack.isVisible = false;
    frmHome.segList.isVisible = true;
    frmHome.flxMenu.isVisible = false;
    frmHome.destroy();
    frmHome.show();
    if (typeof menuLeftPos === 'undefined') menuLeftPos = "85%";
    else if (menuLeftPos === "85%") menuLeftPos = "0%";
    // 	else if(menuLeftPos==="0%")
    // 		menuLeftPos="85%";
    kony.print("\n--in menu toggle-->" + menuLeftPos);
    frmHome.flxMenu.isVisible = true;
    frmHome.flxMain.animate(kony.ui.createAnimation({
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