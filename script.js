function sdSearch(){
	var sr = document.getElementById("sdId");
	var casenumber = sr.value.trim();
	sr.value = "";
	if(casenumber.length==0)
	{
		alert("Search cannot be empty!")
	}	
	else
	{
		if(casenumber.match(/^[0-9]+$/))
		{
			if(casenumber.length==9)
			{
				window.open("https://portal.microsofticm.com/imp/v3/incidents/details/"+casenumber+"/home");
			}
			else if(casenumber.length==15)
			{
				if(document.getElementById("ascCheckbox").checked)
				{
					window.open("https://azuresupportcenter.msftcloudes.com/tenantexplorer/?srId="+casenumber);
				}
				else{
					window.open("https://servicedesk.microsoft.com/#/customer/case/"+casenumber);
				}
			}
			else if(casenumber.length==8)
			{
				window.open("https://rave.office.net/search?query="+casenumber);
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
	var searchInput = document.getElementById("devops");
	var inputValue = searchInput.value;
	searchInput.value="";
	window.open("https://dev.azure.com/Supportability/Power%20BI/_search?text="+inputValue+"%2A&type=wiki&lp=dashboard-Project&pageSize=25");
}

function icmSearch(){
	var searchInput = document.getElementById("icmSearch");
	var inputValue = searchInput.value;
	searchInput.value = "";
	window.open("https://portal.microsofticm.com/imp/v3/incidents/omnisearch?searchString=s:%22Power%20BI%22%20ti:%22"+inputValue+"%22");
}


function pbiOfficialDocsSearch(){
	var searchInput = document.getElementById("pbioffdocsearch");
	var inputValue = searchInput.value;
	searchInput.value = "";
	window.open("https://docs.microsoft.com/en-us/search/?scope=Power%20BI&category=Documentation&terms="+inputValue);
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
