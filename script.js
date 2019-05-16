$('document').ready(function () {
getData();
});


function getData() {
    var settings = {
        method: 'GET',
        dataType: 'jsonp',
        success: successFn,
        error: errorFn,
        complete: oncomplete
    };
    
    $.ajax('https://api.waqi.info/search/?token=3e57783b6a0794e5a93e1c2575b04ba0c3c4aca1'+'&keyword=' + 'city', settings);
}
function successFn(data) {
 console.log(data)
    
}
function errorFn(){
    console.log('Oops! There is an error');
}
function oncomplete(){
    console.log('Operation complete');
}