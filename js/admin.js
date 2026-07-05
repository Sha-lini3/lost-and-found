let reports = JSON.parse(localStorage.getItem("lostFoundItems")) || [];

const tbody = document.querySelector("#reportsTable tbody");

function save(){

localStorage.setItem("lostFoundItems",JSON.stringify(reports));

}

function render(data){

tbody.innerHTML="";

data.forEach((report,index)=>{

const row=document.createElement("tr");

row.innerHTML=`

<td>${report.type}</td>

<td>${report.itemName}</td>

<td>${report.itemDescription}</td>

<td>${report.location}</td>

<td>

<span class="status ${report.status==="Returned"?"returned":"pending"}">

${report.status || "Pending"}

</span>

</td>

<td>

<img src="${report.imageBase64}" width="60">

</td>

<td>

<button class="action-btn edit" onclick="editReport(${index})">

Edit

</button>

<button class="action-btn done" onclick="markReturned(${index})">

Done

</button>

<button class="action-btn delete" onclick="deleteReport(${index})">

Delete

</button>

</td>

`;

tbody.appendChild(row);

});

}

render(reports);

function deleteReport(i){

if(confirm("Delete this report?")){

reports.splice(i,1);

save();

render(reports);

}

}

function markReturned(i){

reports[i].status="Returned";

save();

render(reports);

}

function editReport(i){

let item=prompt("Edit Item Name",reports[i].itemName);

if(item!==null){

reports[i].itemName=item;

save();

render(reports);

}

}

document.getElementById("searchInput").addEventListener("keyup",(e)=>{

let value=e.target.value.toLowerCase();

render(

reports.filter(r=>

r.itemName.toLowerCase().includes(value)

)

);

});

document.getElementById("filterType").addEventListener("change",(e)=>{

let value=e.target.value;

if(value==="All"){

render(reports);

}else{

render(

reports.filter(r=>r.type===value)

);

}

});

document.getElementById("totalReports").innerText=reports.length;

document.getElementById("lostReports").innerText=

reports.filter(r=>r.type==="Lost").length;

document.getElementById("foundReports").innerText=

reports.filter(r=>r.type==="Found").length;