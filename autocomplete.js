console.log("sourah");
function echoServer(inputText){
    var suggestionArray = [];
    for(var i = 0; i < 5; i++){
        var suggestion = inputText;
        for(var j = 0; j <= i; j++){
            suggestion + ' ' + inputText;
        }
        suggestionArray.push(suggestion);
    }
    return suggestionArray;
}