function HandleOnClick(obj) {
    var vid_elm = document.getElementById("vidwindow1");
    var chatpan = document.getElementById("chatpan1");
    var isPlaying;
                    
    if( (obj.id == "BBBButton") || (obj.id == "EDButton") ||(obj.id == "GDButton") ) {
        console.log("Handle URL!!");        
        switch(obj.id)
        {
            case "BBBButton":
                vid_elm = document.getElementById("vidwindow1");
                break;
            
            case "EDButton":
                vid_elm = document.getElementById("vidwindow2");
                break;
                
            case "GDButton":
                vid_elm = document.getElementById("vidwindow3");
                break;
        }
        isPlaying = vid_elm.currentTime > 0 && !vid_elm.paused && !vid_elm.ended && vid_elm.readyState > 2;
        if(isPlaying)
        {
            console.log("Already Playing! Pause it!!"); 
            vid_elm.pause();        
        }
        else
        {
            console.log("Not Playing, lets load first!!!!"); 
            vid_elm.load();
        }
        console.log("Play now!!"); 
        vid_elm.currentTime = 0;
        console.log("Video Element: " + vid_elm.id + " Source: " + vid_elm.src);
        vid_elm.play();
    }
}
