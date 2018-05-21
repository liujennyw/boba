var offset = 80;
var boba_height = 350;
var boba_top = 275;
var boba_bottom = 190;
var boba_ellipse = 50;
var boba_color = '#ffffff';
var boba_topping = 'empty';
var background = '#ffdeda';

// boba colors
var boba_caps = ['#57e8e0','#ff748e','#ff7d26','#33ad5c','#8533ff'];
var boba_cap = boba_caps[Math.floor(Math.random() * boba_caps.length)]
var straw_color = boba_caps[Math.floor(Math.random() * boba_caps.length)]


$(document).ready(function(){
	draw_boba();
});

function draw_boba() {
	var canvas = document.getElementById("boba-canvas");
	function resizeCanvas() {
	    canvas.style.width ='100%';
		canvas.style.height='100%';
		canvas.width  = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    var offset_width = (canvas.width - boba_top)/2;
    var offset_height = (canvas.height - boba_height)/2;

	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// boba bottom
	ctx.fillStyle = boba_color;
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.ellipse(boba_top/2 + offset_width, boba_height + offset_height, boba_bottom/2, boba_ellipse, 0, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// boba cup color
	ctx.fillStyle = boba_color;
	ctx.beginPath();
	ctx.moveTo(offset_width, offset_height);
	ctx.lineTo(boba_top+offset_width,offset_height);
	ctx.lineTo(boba_bottom + offset_width + (boba_top-boba_bottom)/2, boba_height + offset_height);
	ctx.lineTo((boba_top-boba_bottom)/2 + offset_width, boba_height + offset_height);
	ctx.closePath();
	ctx.fill();

	// boba cup outline
	ctx.beginPath();
	ctx.moveTo(boba_top+offset_width,offset_height);
	ctx.lineTo(boba_bottom + offset_width + (boba_top-boba_bottom)/2, boba_height + offset_height);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo((boba_top-boba_bottom)/2 + offset_width, boba_height + offset_height);
	ctx.lineTo(offset_width,offset_height);
	ctx.stroke();

	// boba cap
	ctx.fillStyle = boba_cap;
	// ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.ellipse(boba_top/2 + offset_width, offset_height, 1.05*boba_top/2, boba_ellipse, 0, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// straw
	ctx.fillStyle = straw_color;
	ctx.lineWidth = 4;

	ctx.beginPath();
	ctx.ellipse(boba_top/2 + offset_width, offset_height, .08*boba_top, .15*boba_ellipse,0,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(boba_top/2 + offset_width-.08*boba_top,offset_height-120);
	ctx.lineTo(boba_top/2 + offset_width-.08*boba_top,offset_height);
	ctx.lineTo(boba_top/2 + offset_width+.08*boba_top,offset_height);
	ctx.lineTo(boba_top/2 + offset_width+.08*boba_top,offset_height-120);
	ctx.closePath();
	ctx.fill();
	// ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(boba_top/2 + offset_width-.08*boba_top,offset_height-120);
	ctx.lineTo(boba_top/2 + offset_width-.08*boba_top,offset_height);
	ctx.moveTo(boba_top/2 + offset_width+.08*boba_top,offset_height);
	ctx.lineTo(boba_top/2 + offset_width+.08*boba_top,offset_height-120);
	ctx.stroke();

	ctx.fillStyle = background;
	ctx.beginPath();
	ctx.ellipse(boba_top/2 + offset_width, offset_height-120, .08*boba_top, .15*boba_ellipse,0,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	// eyes
	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.ellipse(offset_width + boba_top/3, .8*boba_height+offset_height, boba_height/35,boba_height/35,0,0,2*Math.PI);
	ctx.ellipse(offset_width + 2*boba_top/3, .8*boba_height+offset_height, boba_height/35,boba_height/35,0,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();

	// mouth
	// ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.ellipse(offset_width + boba_top/2, .85*boba_height+offset_height,boba_top/10,boba_top/20,0,0,Math.PI);
	ctx.stroke();

	// draw topping
	if (boba_topping!='empty') {
		console.log('drawing');
		var image = document.getElementById(boba_topping + '_image');
		console.log(image);
		ctx.drawImage(image,(boba_top-boba_bottom)/2 + offset_width,offset_height + boba_height - boba_ellipse*1.5, boba_bottom,100);
		console.log('drawn');
	}
}

function teasize(size) {
	// [height, top, bottom, ellipse,offset]
	var sizes = {'0':[300,250,175,45,90], '1':[350,275,190,50,80], '2':[400,300,200,55,70]}

	tea_buttons = document.getElementsByClassName('size');

	for (i=0; i<tea_buttons.length; i++) {
		if (tea_buttons[i].id != size) {
			tea_buttons[i].classList.remove('active');
		}
		else {
			tea_buttons[i].classList.add('active');
		}
	}
	boba_height = sizes[size][0];
	boba_top = sizes[size][1];
	boba_bottom = sizes[size][2];
	boba_ellipse = sizes[size][3];
	offset = sizes[size][4];
	draw_boba();

}

function flavor(flavor_name) {
	var flavors = {'empty':'white', 'black':'#ffda8b', 'jasmine':'#e8ffd1', 'taro':'#f0d1ff', 'oolong':'#ffc773', 'thai':'#ffa347'};
 	tea_buttons = document.getElementsByClassName('flavor');
 	for (i=0; i<tea_buttons.length; i++) {
		if (tea_buttons[i].id != flavor_name) {
			tea_buttons[i].classList.remove('active');
		}
		else {
			tea_buttons[i].classList.add('active');
		}
	}
    if (flavor_name in flavors) {
	    boba_color = flavors[flavor_name];
	    draw_boba();
	    console.log('boba color' + boba_color);
	}
}

function topping(topping_name) {
	// tea_topping = document.getElementById('topping');
	tea_buttons = document.getElementsByClassName('topping');
	for (i=0; i<tea_buttons.length; i++) {
		if (tea_buttons[i].id != topping_name) {
			tea_buttons[i].classList.remove('active');
		}
		else {
			tea_buttons[i].classList.toggle('active');
			if (tea_buttons[i].classList.contains('active')) {
				boba_topping = topping_name;
			}
			else {
				boba_topping = 'empty';
			}
		}
	}	
	draw_boba();
}

function ice(ice_level) {
	tea_buttons = document.getElementsByClassName('ice');
 	for (i=0; i<tea_buttons.length; i++) {
		if (tea_buttons[i].id != ice_level) {
			tea_buttons[i].classList.remove('active');
		}
		else {
			tea_buttons[i].classList.add('active');
		}
	}
}

function sugar(sugar_level) {
	tea_buttons = document.getElementsByClassName('sugar');
 	for (i=0; i<tea_buttons.length; i++) {
		if (tea_buttons[i].id != sugar_level) {
			tea_buttons[i].classList.remove('active');
		}
		else {
			tea_buttons[i].classList.add('active');
		}
	}
}