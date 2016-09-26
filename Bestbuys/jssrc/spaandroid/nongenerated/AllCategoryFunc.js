var lblHome = "Home";
var lblCategory = "";
var subCategory = "";
var city = "";
var selectedCateID = "";
var productID = "";
var srcPic = "";
var totalReview = 0;
var searchText = "";
var cartItems = [];
var imgMore = {};
var itemProduct = {};

function getProductID() {
    return productID;
}

function setProductID(id) {
    productID = id;
}

function getCartItems() {
    return cartItems;
}

function setCartItems(itemProduct) {
    cartItems.push(itemProduct);
}

function getItemProduct() {
    return itemProduct;
}

function setItemProduct(data) {
    itemProduct = data;
}

function getSelectedCatdID() {
    return selectedCateID;
}

function setSelectedCatdID(id) {
    selectedCateID = id;
}

function getPicRating() {
    return srcPic;
}

function setPicRating(src) {
    srcPic = src;
}

function getArrayPic() {
    return imgMore;
}

function setArrayPic(pic) {
    imgMore = pic;
}

function selectProduct() {
    setProductID(frmProduct.segList.selectedRowItems[0].lblSku.text);
    frmProductDetail.show();
}

function selectedImg() {
    var arrayImg = getArrayPic();
    //check selectedkey
    if (frmProductImage.listSize.selectedKey == "main") {
        frmProductImage.imgProduct.src = arrayImg.mediumImage;
        //     alert(arrayImg.mediumImage);
    } else if (frmProductImage.listSize.selectedKey == "large") {
        frmProductImage.imgProduct.src = arrayImg.largeImage;
        //     alert(arrayImg.largeImage);
    } else if (frmProductImage.listSize.selectedKey == "largeFront") {
        frmProductImage.imgProduct.src = arrayImg.largeFontImage;
        //     alert(arrayImg.largeFontImage);
    } else if (frmProductImage.listSize.selectedKey == "angleImage") {
        frmProductImage.imgProduct.src = arrayImg.angleImage;
        //     alert(arrayImg.angleImage);
    }
}
/*
//////////////////////////////
Product Image Screen
//////////////////////////////
*/
function getImgProduct() {
    //   var arrayPic = getArrayPic();
    var arrayImg = getArrayPic();
    //   alert(arrayPic.largeImage);
    //set master data
    frmProductImage.listSize.masterData = [
        ["main", "Main"],
        ["large", "Large"],
        ["largeFront", "LargeFront"],
        ["angle", "Angle"],
    ];
    //set defualt
    frmProductImage.listSize.selectedKeys = ["main"];
    //   frmProductImage.imgProduct.src = arrayPic.mediumImage; //mediumImage
    frmProductImage.imgProduct.src = arrayImg.mediumImage;
}

function getRacting(rating) {
    if (rating == 5) {
        setPicRating("ratings_star_5.png");
    } else if (rating >= 4) {
        setPicRating("ratings_star_4.png");
    } else if (rating >= 3) {
        setPicRating("ratings_star_3.png");
    } else if (rating >= 2) {
        setPicRating("ratings_star_2.png");
    } else {
        setPicRating("ratings_star_1.png");
    }
}
/*
//////////////////////////////
Shopping Cart Screen
//////////////////////////////
*/
function getCart() {
    var lists = [];
    var sumTotal = 0.00;
    var cartList = getCartItems();
    //   alert(cartList);
    if (cartList.length === 0) {
        frmCart.cartItems.isVisible = false;
        frmCart.lblTotal.isVisible = false;
        frmCart.lblText.isVisible = true;
    } else {
        for (var i in cartList) {
            lists.push({
                "lblName": {
                    "text": cartList[i].name
                },
                "lblPrice": {
                    "text": "$ " + cartList[i].price
                },
                "btnDelete": {
                    "src": "cartremoveitem.png"
                }
            });
            //       alert(cartList[i].price);
            sumTotal += parseFloat(cartList[i].price);
            //       alert(sumTotal);
        }
        frmCart.cartItems.setData(lists);
        frmCart.lblTotal.text = "Total: $ " + sumTotal;
        frmCart.cartItems.isVisible = true;
        frmCart.lblTotal.isVisible = true;
        frmCart.lblText.isVisible = false;
    }
}

function addCart() {
    setCartItems(getItemProduct());
    alert("add to cart success");
}

function deleteItem() {
    var cartList = getCartItems();
    var selectedRow = frmCart.cartItems.selectedIndex[1];
    //   frmCart.cartItems.flxRowCart.animate(
    //   kony.ui.createAnimation({100:{"centerX":"-50%","stepConfig":{}}}),
    //     {delay:0.1,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
    //     {animationEnd: function() {
    //     } 
    //     });
    cartItems.splice(selectedRow, 1);
    //   frmCart.cartItems.removeAt(selectedRow,1);
    getCart();
    alert("delete item success");
}

function hideBtnBack() {
    frmHome.btnBack.isVisible = false;
}

function menuSearch() {
    if (frmHome.flxSearch.isVisible === true) {
        frmHome.flxSearch.isVisible = false;
    } else {
        frmHome.flxSearch.isVisible = true;
    }
}
///////////////////////////////////////////////////////////////////////////////////
/*
//////////////////////////////
Home Screen
//////////////////////////////
*/
function getCategories() {
    function callback(status, getCategories) {
        var categories = [];
        var category = getCategories.category;
        for (var i in category) {
            categories.push({
                "lblName": {
                    "text": category[i].name
                },
                "lblID": {
                    "text": category[i].id
                },
            });
        }
        frmHome.segList.setData(categories);
    }
    frmHome.lblBreadcrumbs.text = lblHome;
    var getCategories_inputparam = {
        "serviceID": "BestBuyService$getCategoryList"
    };
    BestBuyService$getCategoryList = mfintegrationsecureinvokerasync(getCategories_inputparam, "BestBuyService", "getCategoryList", callback);
}

function getSubCategories() {
    function callback(status, getSubCategories) {
        if (getSubCategories.subCategories.length !== 0) {
            var subCategories = [];
            var subCategory = getSubCategories.subCategories;
            for (var i in subCategory) {
                subCategories.push({
                    "lblName": {
                        "text": subCategory[i].name
                    },
                    "lblID": {
                        "text": subCategory[i].id
                    },
                });
            }
            frmHome.segList.setData(subCategories);
            frmHome.lblBreadcrumbs.text = lblHome + " > " + lblCategory;
        } else {
            frmHome.lblBreadcrumbs.text = "No subcategories/products  found for the selected category";
            frmHome.segList.isVisible = false;
        }
    }
    lblCategory = frmHome.segList.selectedRowItems[0].lblName.text;
    setSelectedCatdID(frmHome.segList.selectedRowItems[0].lblID.text);
    var getSubCategories_inputparam = {
        "serviceID": "BestBuyService$getSubCategoryList",
        "catID": selectedCateID
    };
    BestBuyService$getSubCategoryList = mfintegrationsecureinvokerasync(getSubCategories_inputparam, "BestBuyService", "getSubCategoryList", callback);
}
/*
//////////////////////////////
Product Screen
//////////////////////////////
*/
function getProduct() {
    var id;
    setProductID(id);
    frmProduct.lblValue.text = frmHome.segList.selectedRowItems[0].lblName.text;
    var idCategories = getSelectedCatdID();

    function callback(status, getProduct) {
        var products = [];
        var product = getProduct.product;
        for (var i in product) {
            var freeShipping = "";
            var skinFreeShipping = "";
            var avgReview = 0.00;
            if (product[i].customerReviewAverage === "") {
                avgReview = 0.00;
            } else {
                avgReview = product[i].customerReviewAverage;
            }
            if (product[i].freeShipping === "true") {
                freeShipping = "!!! FreeShipping !!!";
                skinFreeShipping = "lblFreeShipping";
            } else {
                freeShipping = "";
                skinFreeShipping = "lblNoFreeShipping";
            }
            if (product[i].onSale === "true") {
                products.push({
                    "lblFreeShipping": {
                        "text": freeShipping,
                        "skin": skinFreeShipping
                    },
                    "imgProduct": {
                        "src": product[i].image
                    },
                    "lblName": {
                        "text": product[i].name
                    },
                    "lblPrice": {
                        "text": "$ " + product[i].salePrice
                    },
                    "lblSku": {
                        "text": product[i].sku
                    },
                    "lblAvg": {
                        "text": "Avg User Rating :" + avgReview
                    },
                    "lblNewProduct": {
                        "text": product[i].newItem
                    },
                    "lblFreeshipping": {
                        "text": product[i].freeShipping
                    },
                });
            } else {
                products.push({
                    "lblFreeShipping": {
                        "text": freeShipping,
                        "skin": skinFreeShipping
                    },
                    "imgProduct": {
                        "src": product[i].image
                    },
                    "lblName": {
                        "text": product[i].name
                    },
                    "lblPrice": {
                        "text": "$ " + product[i].regularPrice,
                        //             "skin": "lblRegularPrice"
                    },
                    "lblSku": {
                        "text": product[i].sku
                    },
                    "lblAvg": {
                        "text": "Avg User Rating :" + avgReview
                    },
                    "lblNewProduct": {
                        "text": product[i].newItem
                    },
                    "lblFreeshipping": {
                        "text": product[i].freeShipping
                    },
                });
            }
        }
        frmProduct.segList.setData(products);
        setListPage(products.length);
    }
    var getProduct_inputparam = {
        "serviceID": "BestBuyService$getProduct",
        "id": idCategories
    };
    BestBuyService$getProduct = mfintegrationsecureinvokerasync(getProduct_inputparam, "BestBuyService", "getProduct", callback);
}
/*
//////////////////////////////
Product Details Screen
//////////////////////////////
*/
function getProductDetail() {
    var sku = getProductID();
    var imgMore = {};
    var itemProduct = {};

    function callbackReview(status, getReviews) {
        var tmpReview = [];
        var reviews = getReviews.review;
        totalReview = getReviews.review.length;
        for (var i in reviews) {
            getRacting(reviews[i].rating);
            tmpReview.push({
                "lblTitle": {
                    "text": reviews[i].title
                },
                "lblReviewer": {
                    "text": reviews[i].reviewer
                },
                "imgRacting": {
                    "src": getPicRating()
                },
                "lblDetail": {
                    "text": reviews[i].comment
                },
            });
        }
        frmProductDetail.segReview.setData(tmpReview);
        if (totalReview === 0) {
            frmProductDetail.lblTotal.text = "No Reviews";
            frmProductDetail.btnShow.isVisible = false;
        } else {
            frmProductDetail.lblTotal.text = totalReview;
            frmProductDetail.btnShow.isVisible = true;
        }
    }

    function callbackDetail(status, getProductDetails) {
        var tmpProductDetail = [];
        var detail = getProductDetails.product;
        for (var i in detail) {
            getRacting(detail.customerReviewAverage);
            tmpProductDetail.push({
                "imgProduct": {
                    "src": detail.image
                },
                "lblSku": {
                    "text": detail.sku
                },
                "lblName": {
                    "text": detail.name
                },
                "lblPrice": {
                    "text": "$ " + detail.salePrice
                },
                "lblAvg": {
                    "text": "Avg User Rating : " + detail.customerReviewAverage
                },
                "imgRactingDetail": {
                    "src": getPicRating()
                },
                "lblDescription": {
                    "text": detail.description
                },
            });
            imgMore = {
                "largeFrontImage": detail.largeFrontImage,
                "mediumImage": detail.mediumImage,
                "largeImage": detail.largeImage,
                "angleImage": detail.angleImage
            };
            itemProduct = {
                "name": detail.name,
                "sku": detail.sku,
                "price": detail.salePrice
            };
        }
        setArrayPic(imgMore);
        setItemProduct(itemProduct);
        frmProductDetail.segProductDetail.setData(tmpProductDetail);
        getReviews_inputparam = {
            "serviceID": "BestBuyService$getReviews",
            "sku": sku
        };
        BestBuyService$getReviews = mfintegrationsecureinvokerasync(getReviews_inputparam, "BestBuyService", "getReviews", callbackReview);
    }
    getProductDetail_inputparam = {
        "serviceID": "BestBuyService$getProductDetails",
        "sku": sku
    };
    BestBuyService$getProductDetails = mfintegrationsecureinvokerasync(getProductDetail_inputparam, "BestBuyService", "getProductDetails", callbackDetail);
}
/*
//////////////////////////////
Store Location Screen
//////////////////////////////
*/
function findLocation() {
    function callback(status, getStoreLocation) {
        if (getStoreLocation.store.length === 0) {
            alert("No stores found for this city search");
        } else {
            var storeLocation = [];
            var location = getStoreLocation.store;
            for (var i in location) {
                //         alert(location[i].name);
                storeLocation.push({
                    lat: location[i].lat,
                    lon: location[i].lng,
                    name: location[i].name,
                    desc: location[i].address,
                    showCallout: true,
                    calloutData: {
                        imgCallout: "compass.png",
                        lblMapCalloutName: location[i].name,
                        lblMapCalloutAddress: location[i].address,
                        lblMapCalloutHours: location[i].hours,
                        template: flxMapCallout
                    }
                });
            }
            frmStoreLocation.Maps.zoomLevel = 12;
            frmStoreLocation.Maps.locationData = storeLocation;
            kony.application.dismissLoadingScreen();
        }
    }
    if (frmStoreLocation.txtSearchCity.text === null) {
        alert("Please enter search keyword");
    } else {
        var city = frmStoreLocation.txtSearchCity.text.toLowerCase();
        var getStoreLocation_inputparam = {
            "serviceID": "BestBuyService$getStoreLocation",
            "city": city
        };
        BestBuyService$getStoreLocation = mfintegrationsecureinvokerasync(getStoreLocation_inputparam, "BestBuyService", "getStoreLocation", callback);
    }
}
//ListPage
function setListPage(lengthProductList) {
    var totalPage = Math.ceil(lengthProductList / 10);
    if (totalPage === 1) {
        frmProduct.lblPage.isVisible = false;
        frmProduct.listBoxPage.isVisible = false;
    } else {
        frmProduct.lblPage.isVisible = true;
        frmProduct.lblPage.text = "Page 1 of " + totalPage;
        frmProduct.listBoxPage.isVisible = true;
        var listPage = [];
        for (i = 1; i <= totalPage; i++) {
            var valueList = parseInt(i);
            listPage.push([valueList, valueList]);
        }
        frmProduct.listBoxPage.masterData = listPage;
        frmProduct.listBoxPage.selectedKeys = ["1"];
    }
}
//selectePage
function selectedPage() {
    if (frmProduct.listBoxPage.selectedKey == "1") {
        frmProduct.lblPage.text = "Page 1 of " + totalPage;
    } else if (frmProduct.listBoxPage.selectedKey == "2") {
        frmProduct.lblPage.text = "Page 2 of " + totalPage;
    } else {
        frmProduct.lblPage.text = "Page 3 of " + totalPage;
    }
}
/*
//////////////////////////////
Search Function
//////////////////////////////
*/
function getProductSearch() {
    frmProduct.lblValue.text = frmHome.flxSearch.txtSearch.text;
    //   var textSearch = frmHome.flxSearch.txtSearch.text;
    function callback(status, getSearchItem) {
        var products = [];
        var product = getSearchItem.product;
        for (var i in product) {
            var freeShipping = "";
            var skinFreeShipping = "";
            var avgReview = 0.00;
            if (product[i].customerReviewAverage === "") {
                avgReview = 0.00;
            } else {
                avgReview = product[i].customerReviewAverage;
            }
            if (product[i].freeShipping === "true") {
                freeShipping = "!!! FreeShipping !!!";
                skinFreeShipping = "lblFreeShipping";
            } else {
                freeShipping = "";
                skinFreeShipping = "lblNoFreeShipping";
            }
            if (product[i].onSale === "true") {
                products.push({
                    "lblFreeShipping": {
                        "text": freeShipping,
                        "skin": skinFreeShipping
                    },
                    "imgProduct": {
                        "src": product[i].image
                    },
                    "lblName": {
                        "text": product[i].name
                    },
                    "lblPrice": {
                        "text": "$ " + product[i].salePrice
                    },
                    "lblSku": {
                        "text": product[i].sku
                    },
                    "lblAvg": {
                        "text": "Avg User Rating :" + avgReview
                    },
                    "lblNewProduct": {
                        "text": product[i].newItem
                    },
                    "lblFreeshipping": {
                        "text": product[i].freeShipping
                    },
                });
            } else {
                products.push({
                    "lblFreeShipping": {
                        "text": freeShipping,
                        "skin": skinFreeShipping
                    },
                    "imgProduct": {
                        "src": product[i].image
                    },
                    "lblName": {
                        "text": product[i].name
                    },
                    "lblPrice": {
                        "text": "$ " + product[i].regularPrice,
                        "skin": "lblRegularPrice"
                    },
                    "lblSku": {
                        "text": product[i].sku
                    },
                    "lblAvg": {
                        "text": "Avg User Rating :" + avgReview
                    },
                    "lblNewProduct": {
                        "text": product[i].newItem
                    },
                    "lblFreeshipping": {
                        "text": product[i].freeShipping
                    },
                });
            }
        }
        frmProduct.segList.setData(products);
        setListPage(products.length);
        frmProduct.lblValue.text = textSearch;
    }
    var textSearch = frmHome.txtSearch.text;
    if (textSearch === null) {
        alert("Please enter search keyword");
    } else if (!textSearch.match(/^[a-zA-Z0-9- ]*$/)) {
        alert("Please search for valid keyword..");
    } else {
        searchedTextInSearchBox = textSearch;
        textSearch = textSearch.replace(/ /g, "+");
        frmHome.txtSearch.text = "";
        var getSearchItem_inputparam = {
            "serviceID": "BestBuyService$getSearchItem",
            "search": textSearch
        };
        BestBuyService$getSearchItem = mfintegrationsecureinvokerasync(getSearchItem_inputparam, "BestBuyService", "getSearchItem", callback);
        frmProduct.show();
    }
}