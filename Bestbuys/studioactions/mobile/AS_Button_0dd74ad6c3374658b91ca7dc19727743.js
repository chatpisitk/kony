function AS_Button_0dd74ad6c3374658b91ca7dc19727743(eventobject) {
    if (frmHome.flxPopupSearch.isVisible == false) {
        frmHome.flxPopupSearch.isVisible = true
        frmHome.segList.isVisible = false
        frmStoreLocation.flxMain.isVisible = false
    } else {
        frmHome.flxPopupSearch.isVisible = false
        frmHome.segList.isVisible = true
        frmStoreLocation.flxMain.isVisible = true
    }
    if (frmHome.flxMenu.isVisible == true) {
        if (typeof menuLeftPos === 'undefined') menuLeftPos = "85%";
        else if (menuLeftPos === "85%") menuLeftPos = "0%";
        // 	else if(menuLeftPos==="0%")
        // 		menuLeftPos="85%";
        kony.print("\n--in menu toggle-->" + menuLeftPos);
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
        frmHome.flxMenu.isVisible = false
    }
}