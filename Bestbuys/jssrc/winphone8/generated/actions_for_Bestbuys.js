//actions.js file 
function AS_Button_098a04cd5254415d98da5153fb55512b(eventobject) {
    frmProductDetail.btnHide.isVisible = false;
    frmProductDetail.btnShow.isVisible = true;
    frmProductDetail.segReview.isVisible = false;
}

function AS_Button_0a58e71e24bd43fe97f8ba205dadef73(eventobject) {
    return menuToggleDetails.call(this);
}

function AS_Button_0d79ca1880d04b2d95c2cc4fb8e5f61c(eventobject) {
    frmHome.flxPopupSearch.isVisible = false
}

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
}

function AS_Button_0e6f858c333f420d9646f33e05f7c27f(eventobject) {
    return menuToggleProductList.call(this);
}

function AS_Button_17d5c6a659684557855ce1f78a4a2e75(eventobject) {
    frmHome.lblBreadcrumbs.text = "Home";
    frmHome.btnBack.isVisible = false;
    frmHome.segList.isVisible = true;
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_17e7c8baee994852ad84298b55786a7a(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_1c183a55237f47a899de357627289ffb(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_1cdcb0591c2e4013a6fce23d34d81787(eventobject) {
    frmCart.show();
}

function AS_Button_1f5d981b7d27494eb4f316cc67cec263(eventobject) {
    frmHome.show();
}

function AS_Button_22c3a48fb12a4aedafa67cce9fbd8d44(eventobject) {
    frmCart.show();
}

function AS_Button_23dba9ae9f9149ddbc22e9e31a923155(eventobject) {
    frmProductDetail.btnHide.isVisible = true;
    frmProductDetail.btnShow.isVisible = false;
    frmProductDetail.segReview.isVisible = true;
}

function AS_Button_2ab4b4cc27324fe1b8b19fe345b2e743(eventobject) {
    frmCart.show();
}

function AS_Button_2b92893dc52941c292855aebc74da19d(eventobject) {
    return addCart.call(this);
}

function AS_Button_2d6200af03ae425bbc4ac25f66c7e28d(eventobject) {
    return menuToggleProductList.call(this);
}

function AS_Button_3048d84b7bc24561a64483548d66fc3a(eventobject) {
    return menuToggle.call(this);
}

function AS_Button_317b3ef31487473c9e3b1c654e2f2e05(eventobject) {
    frmCart.show();
}

function AS_Button_32471b44f26c4a9f9f167eaf37edb606(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_36ef82d6d3944a22ada9ffae49e43ce2(eventobject) {
    frmHome.flxPopupSearch.isVisible = false
}

function AS_Button_3eb2397ff915405482aa20c430b565ef(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_3f8b1a4b9db24d59b109a9263ea00f76(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_404dd80bb6fe45daa53e18b302cd327e(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_43a29817b564455992920a38eb743a24(eventobject) {
    frmHome.flxPopupSearch.isVisible = false
}

function AS_Button_47a939b32a944387aeb66fcc3d01e11f(eventobject) {
    frmProductDetail.btnHide.isVisible = true;
    frmProductDetail.btnShow.isVisible = false;
    frmProductDetail.segReview.isVisible = true;
}

function AS_Button_4ade9fc9a809420a85b8798426fedc47(eventobject) {
    frmCart.show();
}

function AS_Button_4ae3d8baca644668a35e85aea1505dcc(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_4ed353e85ac14dd68c4353bc2094ec84(eventobject) {
    frmCart.show();
}

function AS_Button_4f428e6cd466443fb4591f379bb4dc69(eventobject) {
    return menuToggleStore.call(this);
}

function AS_Button_58e9fc71a21f4e5997f8d268259941fc(eventobject) {
    frmProductSearch.lblValue.text = "All";
    // frmProduct.btnBack.isVisible = false;
    // frmProduct.segList.isVisible = true;
    frmHome.segList.isVisible = true
    frmHome.show();
    frmProductSearch.destroy();
}

function AS_Button_5fae668439a5492d83ddebfa69afdcc4(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_69c8cdc8147d4656bbd06b66f837ab2f(eventobject) {
    frmHome.show();
}

function AS_Button_74b4730342644775ab181c73b717591a(eventobject) {
    frmCart.show();
}

function AS_Button_8400dfa307bd47f6bd4dc237fc67fafd(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_841e8ed5cdb646c0af9c7341651576e4(eventobject) {
    return menuToggle.call(this);
}

function AS_Button_8a34830e191c42f58bb113a80fc79f87(eventobject) {
    return findLocation.call(this);
}

function AS_Button_9381b71c56104795891b10171ddad0f2(eventobject) {
    if (frmCart.flxPopupSearch.isVisible == false) {
        frmCart.flxPopupSearch.isVisible = true
    } else {
        frmCart.flxPopupSearch.isVisible = false
    }
}

function AS_Button_963bf940c8fb4322b7da3488f7dda323(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_9b882dd213224e8d9ed374edcd6122a2(eventobject) {
    frmHome.show();
    frmCart.destroy();
}

function AS_Button_a6750738f7c34a98ac77fd85a23a1f8b(eventobject) {
    frmProductDetail.show();
    frmProductImage.destroy();
}

function AS_Button_a71f1b9a610c471ea2f50d2edcf5f77f(eventobject) {
    frmProductDetail.btnHide.isVisible = false;
    frmProductDetail.btnShow.isVisible = true;
    frmProductDetail.segReview.isVisible = false;
}

function AS_Button_acae2bb5033448f284ba11158b2169de(eventobject, context) {
    return deleteItem.call(this);
}

function AS_Button_c005e7af8ff24389a9b48173359bf693(eventobject) {
    frmCart.show();
}

function AS_Button_c2edaf24c9b1454a971de8274ca863a6(eventobject) {
    frmProduct.show();
    frmProductDetail.destroy();
}

function AS_Button_c5bc2c6485d84b1ea3019739c114dc99(eventobject) {
    if (frmProduct.flxPopupSearch.isVisible == false) {
        frmProduct.flxPopupSearch.isVisible = true
    } else {
        frmProduct.flxPopupSearch.isVisible = false
    }
}

function AS_Button_cf0fa5a833a145198f05e6a5d12a3ea3(eventobject) {
    return menuToggle.call(this);
}

function AS_Button_d43bc2f8617244918cb3ab4ec94dcb91(eventobject) {
    frmProduct.show();
    frmProductDetail.destroy();
}

function AS_Button_da77b6cb468946b39824e7f1b9c91d11(eventobject) {
    return menuToggleProductImage.call(this);
}

function AS_Button_db7510df26694d76adff64bff51ee1d3(eventobject) {
    frmHome.show();
}

function AS_Button_e1500e5336724f20b3d75317a2fdab06(eventobject) {
    frmHome.flxPopupSearch.isVisible = false
    frmHome.segList.isVisible = true
    frmStoreLocation.flxMain.isVisible = true
}

function AS_Button_e3734bc37f02472a9f942db39c717ce2(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_e510b794864b43639bf9f5e7996f6a3f(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_e67b530ad98b4f61ab1885d86ba61402(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_eceb85e775cf41e596b5612231993cf9(eventobject, context) {
    frmProductImage.show();
}

function AS_Button_ee84367e897c412bb67e5bc36b996256(eventobject) {
    return menuToggleDetails.call(this);
}

function AS_Button_f0e90b3d8ec14102bd8d497020970fe1(eventobject) {
    frmHome.flxPopupSearch.isVisible = false
}

function AS_Button_f24545b5e55d48b6a1d920dcc881ba6c(eventobject) {
    frmCart.show();
}

function AS_Button_f5aa5f697348490cbcaa8b3a8e25f77c(eventobject) {
    frmCart.show();
}

function AS_Button_f6789bbf4ced4c4389ac0c7c3b57f750(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_f6a9ca4b3c074185aeec6d05312f0168(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_f6dec3f98c754c5ea1f598051c70265e(eventobject) {
    frmCart.show();
}

function AS_Button_f757f413615e4cb2be7e12f365796732(eventobject) {
    frmStoreLocation.show();
}

function AS_Button_f79839156a8143b5a18a672daeeb512f(eventobject) {
    frmProduct.lblValue.text = "All";
    // frmProduct.btnBack.isVisible = false;
    // frmProduct.segList.isVisible = true;
    frmHome.show();
    frmProduct.destroy();
}

function AS_Button_fc7206b9684b41889f1d3db5f02a62da(eventobject) {
    return menuToggleCart.call(this);
}

function AS_Button_ffbbb223b07a4f03a839ad0ee9660fad(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_Button_ffd7c1b7f6de4d2088edd4bd4e56bce4(eventobject) {
    frmHome.destroy();
    frmHome.show();
}

function AS_FlexContainer_78d8c16687004531b82d520274f9f4ad(eventobject, context) {
    if (frmHome.lblBreadcrumbs.text != "Home") {
        frmProduct.show();
        getProduct.call(this);
    } else {
        getSubCategories.call(this);
        frmHome.btnBack.isVisible = true;
    }
}

function AS_Form_397c02a541d24ad8b72ca024c6fa2c64(eventobject) {
    return getCart.call(this);
}

function AS_Form_4d9e8bfcd8cd423da20b880afccdd91f(eventobject) {
    frmStoreLocation['Maps']['locationData'] = [{
        "lat": 36.209222,
        "lon": -115.196944,
        "name": "North Las Vegas Airport",
        "desc": "2730 Airport Dr, North Las Vegas, NV 89032, United States"
    }]
    frmStoreLocation.Maps.widgetDataMapForCallout = {
        lblMapCalloutCity: "lblName",
        lblMapCalloutAddress: "lblAddress",
        lblMapCalloutHours: "lblHours"
    };
}

function AS_Form_5fa7f37ab84d4c19b24b2783a943bddb(eventobject) {
    return getCategories.call(this);
}

function AS_Form_77928351a06b4dcf8bddf36fde73370b(eventobject) {
    return getImgProduct.call(this);
}

function AS_Form_7f9751d61a104e12875d0ce6feffc86b(eventobject) {
    return getProductDetail.call(this);
}

function AS_Form_e8e83a1590cd480d9d2c67e859682cab(eventobject) {
    return getProductSearch.call(this);
}

function AS_Image_62e34458d3734da8a1bfefd0e055a68b(eventobject, x, y) {
    frmProductImage.show();
}

function AS_ListBox_8df8bfa245ed47f0b0c2d4c2d4d855de(eventobject) {
    return selectedPage.call(this);
}

function AS_ListBox_dc222d4493234971b29a3ff76875e7c5(eventobject) {
    return selectedPage.call(this);
}

function AS_ListBox_e7535f39d7114d6f91532042e800aee9(eventobject) {
    return selectedImg.call(this);
}

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

function AS_Segment_68e34dcfac4c45408a3c3f5f71a2b9dd(eventobject, sectionNumber, rowNumber) {
    return getCartItem.call(this);
}

function AS_Segment_8488b47d6e6342c5997313bd182aa610(eventobject, sectionNumber, rowNumber) {
    return selectProduct.call(this);
}

function AS_TextField_e1c5c13132fb4fe7b1fd324e36646d0a(eventobject, changedtext) {
    return getProductSearch.call(this);
}