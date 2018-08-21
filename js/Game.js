class Game{
	constructor(){
		this.init();
		this.b = new Block(this);
		this.m = new Map(this);
		this.eventBind();
		this.start();
		console.log(this.b)
	}

	init(){
		this.dom = document.createElement("table");
		for(let i = 0 ; i < 20 ; i++){
			var tr = document.createElement("tr");
			for(let j = 0 ; j < 12 ; j++){
				var td = document.createElement("td");
				tr.appendChild(td)
			}
			this.dom.appendChild(tr)
		}
		document.body.appendChild(this.dom)
	}

	setClass( row , col , className){
		document.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].className = className
	}
	clear(){
		for(let i = 0 ; i < 20 ; i++){
			for(let j = 0 ; j < 12 ; j++){
				this.setClass(i , j ,"");
			}
		}
	}

	chackCanDown(){
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i +1][this.b.col + j] != 0){
					return false
				}
			}
		}
		return true
	}

	chackCanLeft(){
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i ][this.b.col + j-1] != 0){
					return false
				}
			}
		}
		return true
	}

	chackCanRight(){
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i ][this.b.col + j+1] != 0){
					return false
				}
			}
		}
		return true
	}

	chackCanRotate(){
		var _direction = this.b.direction + 1;
		if(_direction >= this.b.directionAmount){
			_direction = 0;
		}
		var _code = blocktypes[this.b.type][_direction];
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(_code[i][j] != 0 && this.m.code[this.b.row + i ][this.b.col + j+1] != 0){
					return false
				}
			}
		}
		return true
	}

	setB2M(){
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(this.b.code[i][j] != 0){
					this.m.code[this.b.row+i][this.b.col+j] = this.b.code[i][j];
				}
			}
		}
	}

	start(){
		var self = this;
		this.f = 0;
		this.timer=setInterval(function(){
			self.f++;
			self.clear();
			if(self.f % 20 == 0){
				if(self.chackCanDown()){
					self.b.goDown();
					if(!self.chackCanDown()){
						clearInterval(self.timer);
					}
				}else{
					self.setB2M();
					self.b = new Block(self);
				}
				self.m.xiaohang();
			}
			
			self.b.render();
			self.m.render();
		},20)
	}

	eventBind(){
		var self = this;
		document.onkeydown = function(e){
			if(e.keyCode == 37 && self.chackCanLeft()){
				self.b.goLeft()
			}else if(e.keyCode == 39 && self.chackCanRight()){
				self.b.goRight()
			}else if(e.keyCode == 38 && self.chackCanRotate()){
				self.b.rotate()
			}else if(e.keyCode == 32){
				while(self.chackCanDown()){
					self.b.goDown()
				}
			}
		}
	}
}

