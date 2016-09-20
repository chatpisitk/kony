function menuToggle()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmHome.flxMenu.isVisible = true;
  frmHome.flxMain.animate(
    kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
    {animationEnd: function() {
    } 
    });
}

function menuToggleStore()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmStoreLocation.flxMenu.isVisible = true;
  frmStoreLocation.flxMain.animate(
    kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
    {animationEnd: function() {
    } 
    });
}

function menuToggleDetails()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmProductDetail.flxMenu.isVisible = true;
  frmProductDetail.flxMain.animate(
    kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
    {animationEnd: function() {
    } 
    });
}

function menuToggleCart()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmCart.flxMenu.isVisible = true;
   frmCart.flxMain.animate(
			  kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() {
			  } 
		});
}

function menuToggleProductList()
{

	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmProduct.flxMenu.isVisible = true;
  frmProduct.flxMain.animate(
    kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
    {animationEnd: function() {
    } 
    });
}

function menuToggleProductImage()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="85%";
	else if(menuLeftPos==="85%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="85%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  frmProductImage.flxMenu.isVisible = true;
  frmProductImage.flxMain.animate(
			  kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() {
			  } 
		});
}