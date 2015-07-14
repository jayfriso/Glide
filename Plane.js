//Variables

//Variables for paperplane Speeds
            var width = screen.width;
            var height = screen.height;
            var ypos = screen.height * 0.2; //Should Change this later to make more accurate
            var speed0 = -10;
            var speed1 = -5;
            var speed2 = 0;
            var speed3 = 5;
            var speed4 = 10;

            function paperplane(xpos, angle) {
                this.shape = new createjs.Bitmap();
                this.shape.x = xpos;
                this.shape.y = ypos;
                this.width = 118; //Used for COllision Detection
                this.height = 88; //Instead of Set Bounds 
                this.angle = angle; //angle is one of 0-6 different angle
                this.speed = 3;
                //Setting the Bird Images
                this.Bird1L = new Image();
                this.Bird1R = new Image();
                this.Bird2L = new Image();
                this.Bird2R = new Image();
                this.Bird3 = new Image();

            }
            //Updating the xposition of the plane
            paperplane.prototype.updatexpos = function () {
                if (this.angle == 0) { this.shape.x += speed0; }
                else if (this.angle == 1) { this.shape.x += speed1; }
                else if (this.angle == 2) { this.shape.x += speed2; }
                else if (this.angle == 3) { this.shape.x += speed3; }
                else if (this.angle == 4) { this.shape.x += speed4; }
                
            };
            //Updates the Speed of the Platforms as well as the Bird Image
            paperplane.prototype.changespeed = function () {
                createjs.Sound.play("Switch");
                if (this.angle == 0) {
                    this.speed = 3;
                    this.shape.image = this.Bird1L;
                } else if (this.angle == 4) {
                    this.speed = 3;
                    this.shape.image = this.Bird1R;
                } else if (this.angle == 1) {
                    this.speed = 8;
                    this.shape.image = this.Bird2L;
                } else if (this.angle == 3) {
                    this.speed = 8;
                    this.shape.image = this.Bird2R;
                } else if (this.angle == 2) {
                    this.speed = 13;
                    this.shape.image = this.Bird3;
                }
            }
                

            /// JUST TO TEST THE PLANE OBJECT
            function testplane() {
                var plane = new paperplane(100, 2);
                console.log("first xpos is:" + plane.shape.x);
                plane.updatexpos();
                console.log("new xpos is:" + plane.shape.x);

            }
           