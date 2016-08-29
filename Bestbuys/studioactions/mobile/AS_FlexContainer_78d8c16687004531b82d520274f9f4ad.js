function AS_FlexContainer_78d8c16687004531b82d520274f9f4ad(eventobject, context) {
    if (frmHome.lblBreadcrumbs.text != "Home") {
        frmProduct.show();
        getProduct.call(this);
    } else {
        getSubCategories.call(this);
        frmHome.btnBack.isVisible = true;
    }
}