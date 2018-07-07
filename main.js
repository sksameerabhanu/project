function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
var data = JSON.parse(text);
console.log(data);
career(data.career);
education(data.education);
})
var childtwo=document.querySelector(".childtwo");
function career(careerInfo){
  console.log(careerInfo);
  var careerHeading=document.createElement("h3");
  childtwo.appendChild(careerHeading);
  careerHeading.textContent="Career Objective";
  var careerHr=document.createElement("hr");
  childtwo.appendChild(careerHr);
var ch=document.createElement("p");
ch.textContent=careerInfo.info;
childtwo.appendChild(ch);
}
function education(edu){
var eduHeading=document.createElement("h3");
eduHeading.textContent="Educational Qualifications";
childtwo.appendChild(eduHeading);
var careerHr=document.createElement("Hr");
childtwo.appendChild(careerHr);
var eduTable=document.createElement("table");
eduTable.border="1";
var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
eduTable.innerHTML=tr1;
childtwo.appendChild(eduTable);
}
