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
        frmHome.flxMenu.isVisible = false
    }
    menuToggle.call(this);
}