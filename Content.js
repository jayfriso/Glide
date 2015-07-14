// Used to download all needed resources from our
// webserver
function ContentManager() {
    // Method called back once all elements
    // have been downloaded
    var ondownloadcompleted;
    // Number of elements to download
    var NUM_ELEMENTS_TO_DOWNLOAD = 22;

    // setting the callback method
    this.SetDownloadCompleted = function (callbackMethod) {
        ondownloadcompleted = callbackMethod;
    };

    // 6 Branches, 5 Birds, 1 Background, 1 Game Over Screen, 3 sound
    this.branch1L = new Image(); //Branches
    this.branch1R = new Image();
    this.branch2L = new Image();
    this.branch2R = new Image();
    this.branch3L = new Image();
    this.branch3R = new Image();
    this.background = new Image(); //Background
    this.bird1L = new Image(); //Birds
    this.bird1R = new Image();
    this.bird2L = new Image();
    this.bird2R = new Image();
    this.bird3 = new Image();
    this.ScoreBackground = new Image();
    this.GameOver = new Image();
    this.HighScore = new Image();
    this.NewHighScore = new Image();
    this.Restart = new Image();
    this.StartScreen = new Image();
    // the background can be created with 3 different layers
    // those 3 layers exist in 3 versions
    var numImagesLoaded = 0;

    // public method to launch the download process
    this.StartDownload = function () {
        //Loading Images
        SetDownloadParameters(this.branch1L, "images/Branch1L.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.branch1R, "images/Branch1R.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.branch2L, "images/Branch2L.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.branch2R, "images/Branch2R.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.branch3L, "images/Branch3L.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.branch3R, "images/Branch3R.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.background, "images/Background.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.bird1L, "images/Bird1L.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.bird1R, "images/Bird1R.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.bird2L, "images/Bird2L.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.bird2R, "images/Bird2R.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.bird3, "images/Bird3.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.GameOver, "images/GameOver.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.HighScore, "images/HighScore.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.NewHighScore, "images/NewHighScore.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.Restart, "images/Restart.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.ScoreBackground, "images/ScoreBackground.png", handleImageLoad, handleImageError);
        SetDownloadParameters(this.StartScreen, "images/StartScreen.jpg", handleImageLoad, handleImageError);
        //Loading Sounds
        createjs.Sound.addEventListener("fileload", handleImageLoad); //Adding a fileload event listener
        createjs.Sound.registerSound({id:"Point", src:"sound/Point.wav"});
        createjs.Sound.registerSound({id:"Lose", src:"sound/Lose.wav"});
        createjs.Sound.registerSound({id:"Switch", src:"sound/Switch.wav"});
        createjs.Sound.registerSound({id:"StartSound", src:"sound/StartSound.wav"});
    }
        

    function SetDownloadParameters(imgElement, url, loadedHandler, errorHandler) {
        imgElement.src = url;
        imgElement.onload = loadedHandler;
        imgElement.onerror = errorHandler;
    }

    // our global handler 
    function handleImageLoad(e) {
        numImagesLoaded++

        // If all elements have been downloaded
        if (numImagesLoaded == NUM_ELEMENTS_TO_DOWNLOAD) {
            console.log("all items downloaded")
            numImagesLoaded = 0;
            // we're calling back the method set by SetDownloadCompleted
            ondownloadcompleted();
        }
    }

    //called if there is an error loading the image (usually due to a 404)
    function handleImageError(e) {
        console.log("Error Loading Image : " + e.target.src);
    }
}