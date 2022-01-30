Webcam.set({
    width: 350,
    height:350,
    image_format: 'png',
    png_quality: 90
    });
    
    var photo = document.getElementById("weirdo");
    Webcam.attach(photo);
    
    function capture(){
     Webcam.snap(function(data_uri){
    document.getElementById("blabla").innerHTML = '<img id = "captured_meme_bleh" src = "'+data_uri+'"/>';
     }) ; 
    }
    
    console.log('ml5 version', ml5.version);