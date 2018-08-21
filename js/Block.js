/*class Block{
	constructor(game){
		this.game = game;
		this.type = _.sample(["L","S","Z","T","I","J","O"]);
		this.directionAmount = blocktypes[this.type].length;
		this.direction = _.random(0,this.directionAmount-1);
		this.code = blocktypes[this.type][this.direction];

		this.row = 0;
		this.col = 4;
	}

	render(){
		for(let i = 0 ; i < 4 ; i++){
			for(let j = 0 ; j < 4 ; j++){
				if(this.code[i][j] != 0){
					this.game.setClass(this.row + i , this.col + j ,"c"+this.code[i][j])
				}
			}
		}
	}

	goDown(){
		this.row++;
	}

	goLeft(){
		this.col--;
	}

	goRight(){
		this.col++;
	}

	rotate(){
		this.direction++;
		if(this.direction >= this.directionAmount){
			this.direction = 0
		}
		this.code = blocktypes[this.type][this.direction];

	}
}*/