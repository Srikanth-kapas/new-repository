let apiData=[];

function getsData(){
  fetch("https://jsonplaceholder.typicode.com/users")
.then(srikanth=srikanth.json())
.then(Data=>{
  apiData=Data;

  displayData(apiData)
})
}
function