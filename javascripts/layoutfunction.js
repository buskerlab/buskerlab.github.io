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
<img src=\"images/web_logo.png\" border=0><br><br>\
<a href=\"index.html\" class=" + class0 + ">HOME</a>\
&nbsp;&nbsp;\
<a href=\"mission.html\" class=" + class1 + ">MISSION</a>\
&nbsp;&nbsp;\
<a href=\"vision.html\" class=" + class2 + ">VISION</a>\
&nbsp;&nbsp;\
<a href=\"contact.html\" class=" + class3 + ">CONTACT</a>\
</div>");
}

function printFooter()
{
	document.write("Copyright &#64; 2014 BuskerLab  |  All Rights Reserved.");
}
