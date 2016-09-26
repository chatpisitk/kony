//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Bestbuys",
    appName: "Bestbuys",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.108.2",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Bestbuys",
    isturlbase: "http://192.168.30.84:8081/services",
    isMFApp: true,
    appKey: "6e4b97d191ca255ebcc267cad1e57c53",
    appSecret: "e024ede6240dc0b79295a642ae724f43",
    serviceUrl: "http://192.168.30.84:8081/authService/100000002/appconfig",
    svcDoc: {
        "appId": "dff18a12-02a5-456f-a9c5-51c40447aad2",
        "baseId": "8b134f75-9f68-4cb7-be44-421169c0c39e",
        "name": "BestBuy",
        "selflink": "http://192.168.30.84:8081/authService/100000002/appconfig",
        "integsvc": {
            "BestBuyService": "http://192.168.30.84:8081/services/BestBuyService"
        },
        "reportingsvc": {
            "custom": "http://192.168.30.84:8081/services/CMS",
            "session": "http://192.168.30.84:8081/services/IST"
        },
        "Webapp": {
            "url": "http://192.168.30.84:8081/Bestbuys"
        },
        "services_meta": {
            "BestBuyService": {
                "version": "1.0",
                "url": "http://192.168.30.84:8081/services/BestBuyService",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "http://192.168.30.84:8081/Bestbuys/MWServlet",
    secureurl: "http://192.168.30.84:8081/Bestbuys/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeCopyFBox006c04f53049b4e();
    initializeCopyFBox05307b1d2c0344d();
    initializeCopyFBox06997e92cf2554f();
    initializeCopyFBox06e1ddc757e2145();
    initializeCopyFBox0e9b2045a4e8342();
    initializeCopyFBox0fbf4c638ece049();
    initializeFBox0147413d7d84d4a();
    initializeFBox01baf8cf2320841();
    initializeFBox0218591fb26474d();
    initializeFBox09997202d61e445();
    initializetmpProduct();
    initializetmpProductDetail();
    initializetmpReview();
    initializetmpRowCart();
    initializetmpMap();
    frmCartGlobals();
    frmHomeGlobals();
    frmProductGlobals();
    frmProductDetailGlobals();
    frmProductImageGlobals();
    frmProductSearchGlobals();
    frmStoreLocationGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;
kony.print = function() {
    return;
};