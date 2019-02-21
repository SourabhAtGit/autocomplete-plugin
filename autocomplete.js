function echoServer(inputText){
    var suggestion = inputText;
    var suggestions = [];
    for(var i = 0; i < 7; i++){
        suggestions[i] = suggestion ;
        for(var j =0; j<=i; j++){
            suggestions[i] += ' ' + suggestion;
        }
    } 
    return suggestions; 
}


console.log(echoServer('hello'));