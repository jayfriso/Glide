// The File for creating the platforms the plane must avoid

//PLATFORM VARIABLES
var p1w = 576;
var p2w = 382;
var p3w = 768;
var ph = 90;

var barwidth = 160;
//Will Create a function to Scale the Variables

//VARIABLES
var width = 1600;
var height = 900;

function platforms() {
    this.container = [];
    this.branch1L = new Image();
    this.branch1R = new Image();
    this.branch2L = new Image();
    this.branch2R = new Image();
    this.branch3L = new Image();
    this.branch3R = new Image();

    this.scale = 1;
    this.p1w = 0;
    this.p2w = 0;
    this.p3w = 0;
    this.ph = 0;
    this.width = 0;
}

//Function for Adding a new platform, takes out first platform (most top) and adds new at bottom of screen
platforms.prototype.addnewplatform = function (b) { //Where b is the boolean value for the side
    this.container.shift();
    var example = 1;
    //CREATING A NEW PLATFORM
    var randomnum = Math.random();
    var platform = new createjs.Container();
    ////Branch1 45% of the Screen (appears 30% of the time)
    if (randomnum <= 0.3) {
        if (b) {
            var platform1 = new createjs.Bitmap(this.branch1L);
            platform1.x = barwidth;
        }
        else {
            var platform1 = new createjs.Bitmap(this.branch1R);
            platform1.x = width - p1w - barwidth;
        }
        platform1.setBounds(0, 0, p1w, ph);
        platform.addChild(platform1);
    }
    ////Branch2 30% of the screen (appears 20% of the time)
    else if (randomnum > 0.3 && randomnum <= 0.5) {
        if (b) {
            var platform2 = new createjs.Bitmap(this.branch2L);
            platform2.x = barwidth;
        }
        else {
            var platform2 = new createjs.Bitmap(this.branch2R);
            platform2.x = width - p2w - barwidth;
        }
        platform2.setBounds(0, 0, p2w, ph);
        platform.addChild(platform2);
    }
    ////Branch3 55% of screen (appears 20% of the time)
    else if (randomnum > 0.5 && randomnum <= 0.7) {
        if (b) {
            var platform3 = new createjs.Bitmap(this.branch3L);
            platform3.x = barwidth;
        }
        else {
            var platform3 = new createjs.Bitmap(this.branch3R);
            platform3.x = width - p3w - barwidth;
        }
        platform3.setBounds(0, 0, p3w, ph);
        platform.addChild(platform3);
    }
    ////Branch 4 45% and 30% (appears 15% of time)
    else if (randomnum > 0.7 && randomnum <= 0.85) {
        if (b) {
            var platform41 = new createjs.Bitmap(this.branch2R);
            platform41.x =  width - p2w - barwidth;
            var platform42 = new createjs.Bitmap(this.branch1L);
            platform42.x = barwidth;
        } else {
            var platform41 = new createjs.Bitmap(this.branch2L);
            platform41.x = barwidth;
            var platform42 = new createjs.Bitmap(this.branch1R);
            platform42.x = width - p1w - barwidth;
        }
        platform41.setBounds(0, 0, p2w, ph);
        platform42.setBounds(0, 0, p1w, ph);
        platform.addChild(platform41, platform42);
    }
    ////Branch5 45% but opposite
    else if (randomnum > 0.85) {
        if (b) {
            var platform5 = new createjs.Bitmap(this.branch1R);
            platform5.x = width - barwidth - p1w;
        } else {
            var platform5 = new createjs.Bitmap(this.branch1L);
            platform5.x = barwidth;
        }
        platform5.setBounds(0, 0, p1w, ph);
        platform.addChild(platform5);
    }

    platform.y = height;

    this.container.push(platform);


    //images
}

/*
platforms.prototype.scaleplatforms = function (s) {
    this.scale = s;
    this.p1w = p1w * s;
    this.p2w = p2w * s;
    this.p3w = p3w * s;
    this.ph = ph * s;
    barwidth = barwidth * s;
    this.width = width * s;
    height = height * s;
} */

//Will form the new platform at the VERY BOTTOM of the screen
//This means the platform will form when the last platform reaches half of the screen
//Changes the y positions of all platforms according to the speed
platforms.prototype.updateplatforms = function (speed) {
                    for (i = 0; i < 3; i++) {
                        this.container[i].y -= speed;
                    }
                }