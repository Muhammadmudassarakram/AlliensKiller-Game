// --- objects --- //
class Objects {
	constructor() {
	}
	
	/*ufoCanvas(ufoanvas_img , level){

		this.ufocanvas_img = ufoanvas_img;
		this.level = level;
		this.ufocanvas_img.src = (this.level % 2== 0)? "images/field-background.jpg" : "images/desert-BG.png" ;
		this.width = 900;
		this.height = 750;
		return this;
		
	}*/
	
	
	spaceship(x, y, spaceship_image, level) {
		this.x = x;
		this.y = y;
		this.width = 34;
		this.height = 28;
		this.spaceship_image = spaceship_image;
		this.level = level;
		//below will display : immage if remainder is 0 otherwisw ?
		this.spaceship_image.src =(this.level % 2== 0) ?  "images/ship.png" :"images/Spacex3.jpg";
		return this;
	}
	bullet(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	ufo(x, y, line, column, ufo_image, level) {
		this.x = x;
		this.y = y;
		this.line = line;
		this.column = column;
		this.width = 32;
		this.height = 24;
		this.ufo_image = ufo_image;
		this.level = level;
		//even-odd level selector		 
		this.ufo_image.src = (this.level % 2 == 0) ? "images/ufo2.png" : "images/ufo.png";
		return this;
	}
	bomb(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
}
;




