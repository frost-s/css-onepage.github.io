function sdSearch(){
	var casenumber = document.getElementById("sdId");
	if(casenumber.value.length==0)
	{
		alert("Search cannot be empty!")
	}	
	else
	{
		if(casenumber.value.match(/^[0-9]+$/))
		{
			if(casenumber.value.length==9)
			{
				window.open("https://portal.microsofticm.com/imp/v3/incidents/details/"+casenumber.value+"/home");
			}
			else if(casenumber.value.length==15)
			{
				window.open("https://servicedesk.microsoft.com/#/customer/case/"+casenumber.value);
			}
			else if(casenumber.value.length==8)
			{
				window.open("https://rave.office.net/search?query="+casenumber.value);
			}
			else
				alert("Enter a valid SR / IcM / Rave number!");
		}
		else
			alert("Enter only numerical values!");
	}	
}

function adeExplorer(){
	window.open("https://dataexplorer.azure.com/clusters");
}

function devopsSearch(){
	var searchInput = document.getElementById("devops").value;
	window.open("https://dev.azure.com/Supportability/Power%20BI/_search?text="+searchInput+"%2A&type=wiki&lp=dashboard-Project&pageSize=25");
}

function pbiOfficialDocsSearch(){
	var searchInput = document.getElementById("pbioffdocsearch").value;
	window.open("https://docs.microsoft.com/en-us/search/?scope=Power%20BI&category=Documentation&terms="+searchInput);
}

function cssSupportabilityWiki(){
	window.open("https://dev.azure.com/Supportability/Power%20BI/_wiki/wikis/Wiki/122231/Home-Page");
}

function sdHome(){
	window.open("https://servicedesk.microsoft.com/#/home");
}

function icmHome(){
	window.open("https://portal.microsofticm.com/imp/v3/incidents/search/advanced");
}

function raveHome(){
	window.open("https://rave.office.net/");
}

function pbiWiki(){
	window.open("https://pbiwiki.com/");
}

function azureErrorCode(){
	window.open("https://login.microsoftonline.com/error");
}

function jarvis(){
	window.open("https://jarvis-west.dc.ad.msft.net/logs/dgrep");
}

function oneTrace(){
	window.open("https://onetrace.azurewebsites.net/");
}

function sdQueueSearch(){
	window.open("https://msaas.support.microsoft.com/queue");
}

 function show(elementId) { 
	 document.getElementById("tools").style.display="none";
	 document.getElementById("search-pbioffdoc").style.display="none";
	 document.getElementById("search-azure-devops").style.display="none";
	 document.getElementById("service-desk-container").style.display="none";
	 document.getElementById(elementId).style.display="";
}
