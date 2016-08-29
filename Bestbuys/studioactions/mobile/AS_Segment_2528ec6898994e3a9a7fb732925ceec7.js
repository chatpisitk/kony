function AS_Segment_2528ec6898994e3a9a7fb732925ceec7(eventobject, sectionNumber, rowNumber) {
    if (frmHome.lblBreadcrumbs.text != "Home") {
        //   getProduct();
        frmProduct.show();
        getProduct.call(this);
    } else {
        getSubCategories.call(this);
        frmHome.btnBack.isVisible = true;
    }
}