function ChangingColor() {
	// initialisaties
	this.rood = 0.0;
	this.groen = 0.0;
	this.blauw = 0.0;
	this.stijgingRood = Math.random();
	this.stijgingGroen = Math.random();
	this.stijgingBlauw = Math.random();

	// Volgende kleur maken
	this.nextColor = function() {
		this.rood += this.stijgingRood;
		if (this.rood > 255 || this.rood <0) {
			this.stijgingRood *= -1;
			this.rood += this.stijgingRood;
		}
		this.blauw += this.stijgingBlauw;
		if (this.blauw > 255 || this.blauw <0) {
			this.stijgingBlauw *= -1;
			this.blauw += this.stijgingBlauw;
		}
		this.groen += this.stijgingGroen;
		if (this.groen > 255 || this.groen <0) {
			this.stijgingGroen *= -1;
			this.groen += this.stijgingGroen;
		} 
	}

	// rbgwaarde van de kleur teruggeven
	this.rbgColor = function() {
		return "rgb("+Math.floor(this.rood)+","+Math.floor(this.groen)+","+Math.floor(this.blauw)+")";
	}
}
