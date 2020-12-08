var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(typeof(JSON.parse(this.responseText)));// checking if its an object
        //document.getElementById("data").innerHTML = this.responseText;// picking up data
        //console.log(JSON.parse(this.responseText)); //object logged to console
        //setData(json.parse(this.responseText))
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function(){
    console.log(data);
}, 500);