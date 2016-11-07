function isMobile()
{
	var mobileInfo = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE',
	'SAMSUNG', 'LG', 'MOT', 'SonyEricsson','Symbian','Windows Phone','webOS','Opera Mini',
	'Opera Mobi','POLARIS','IEMobile');

	var mobile = false;
	// check browser and device information
	for (var info in mobileInfo){
		if (navigator.userAgent.match(mobileInfo[info]))
		{
			mobile = true;
			break;
		}
	}
	// check browser witch
	//if (document.body.clientWidth < 800) {
	//
	//}
	return mobile;
}

function printHeader(selectedIdx)
{
	var class0 = "menu";
	var class1 = "menu";
	var class2 = "menu";
	var class3 = "menu";
	switch (selectedIdx)
	{
	case 0:
		class0 = "menuselected";
		break;
	case 1:
		class1 = "menuselected";
		break;
	case 2:
		class2 = "menuselected";
		break;
	case 3:
		class3 = "menuselected";
		break;
	default:
		break;
	}
	document.write("\
<a href=\"index.html\"><img src=\"images/logo_image_normal.png\" \
onmouseover=\"this.src='images/logo_image_mouseover.png'\" \
onmouseout=\"this.src='images/logo_image_normal.png'\"><img src=\"images/logo_text.png\"></a>\
<br><br>\
<a href=\"index.html\" class=" + class0 + ">HOME</a>\
&nbsp;&nbsp;\
<a href=\"game.html\" class=" + class1 + ">GAME</a>\
</div>");
}

function printFooter()
{
	document.write("Copyright &#64; 2016 Busker Lab  |  All Rights Reserved.");
}
