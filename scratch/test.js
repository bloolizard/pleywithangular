window.addEventListener('load', function(){


});


// get first column
var tbody = document.getElementsByTagName('tbody');
var search = tbody[0].children;
var links = [];
for (var i in search){
    try {
        var name = search[i].firstElementChild.firstElementChild.innerHTML;
        if (typeof name != null || name == '') {
            links.push(name);
        }


    }
    catch (e) {
        console.log(e);
    }
}
var data = {};