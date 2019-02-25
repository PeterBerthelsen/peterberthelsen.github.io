
document.getElementById("getRecipe").addEventListener("click", ()=>{
    let recipeURL = document.getElementById("url").value;
    console.log("button pressed, skimming: \n" + recipeURL);

    fetch(recipeURL)
        .then(response=>{
            return response.json();
        })
        .then(recipeJSON=>{
            console.log(myJSON);
        })
});





    // let request = ()=> {
    //     try {return new XMLHttpRequest();}
    //     catch (err) {}
    //     try {return new ActiveXObject("Msxml2.XMLHTTP");}
    //     catch (err) {}
    //     try {return new ActiveXObject("Microsoft.XMLHTTP");}
    //     catch (err) {}
        
    //     throw new Error("Could not create HTTP Object!")
    // }
    // request.open("GET", recipeURL, true);
    // request.send(nul);
    // request.onreadystatechange = function() {
    //     if (request.readyState == 4) {
    //         console.log(request.responseText)
    //     }
    // }


        // let iframe = document.createElement('iframe');
    // let html = '';
    // iframe.src = recipeURL;
    // document.body.appendChild(iframe); //for testing only....
    // var iframeDoc; 
    // if (iframe.contentDocument) {
    //     iframeDoc = iframe.contentDocument.getElementsByTagName('body')[0];
    // } 
    // else if (iframe.contentWindow) {
    //     iframeDoc = iframe.contentWindow.document.getElementsByTagName('body')[0];
    // }
    // html = iframeDoc.innerHTML;
    // console.log(html);