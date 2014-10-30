function SlideControls($controller, $hidePreviousOnFirst, $hideNextOnLast){
	this._controller = $controller;
	this._prevArrow;
	this._nextArrow;
	this._slideNavContainer;
	this._curSlide = 0;
	this._hidePreviousOnFirst = $hidePreviousOnFirst;
	this._hideNextOnLast = $hideNextOnLast;
	this._slideDirection;
}

SlideControls.prototype = {	
	init: function()
	{
		this.draw();
		this.updateNav();
	},
	
	updateNav: function()
	{
		var scope = this;
		
		/*jQuery('#' + this._controller._slideControlsID + ' ul li').each(function(){
			if(parseInt(jQuery(this).attr('data-id')) == scope._curSlide) {
				jQuery(this).css({cursor: 'default'});
				jQuery(this).animate({
					opacity: 1
				});
			} else {
				jQuery(this).css({cursor: 'pointer'});
				jQuery(this).animate({
					opacity: 0.5
				});
			}
		});*/
		
		jQuery('#slide-controls-current-slide').html(this._curSlide + 1);
		
		if(this._curSlide == 0) {
			jQuery('#' + this._controller._slideControlsID + ' .arrow-left').css({opacity: 0, cursor: 'default', 'background-position': 0});
			jQuery('#' + this._controller._slideControlsID + ' .arrow-right').css({opacity: 1, cursor: 'pointer'});
		} else if(this._curSlide == this._controller._numSlides - 1) {
			jQuery('#' + this._controller._slideControlsID + ' .arrow-right').css({opacity: 0, cursor: 'default', 'background-position': 0});	
			jQuery('#' + this._controller._slideControlsID + ' .arrow-left').css({opacity: 1, cursor: 'pointer'});
		} else {
			jQuery('#' + this._controller._slideControlsID + ' .arrow-left').css({opacity: 1, cursor: 'pointer'});
			jQuery('#' + this._controller._slideControlsID + ' .arrow-right').css({opacity: 1, cursor: 'pointer'});			
		}
	},
	
	changeSlide: function($id)
	{	
		if($id == 'section2' || $id == 'section3') {
			jQuery('body').trigger('onChangeSection', $id);
		} else {
			if (isNaN($id)) {
				if($id == "left") {
					this._curSlide--;
					this._slideDirection = "back";	
				} else {
					this._curSlide++;	
					this._slideDirection = "next";
				}
			} else {
				this._curSlide = $id;
			}
		
			this._controller.gotoSlide(this._curSlide);
			this.updateNav();
		}
	},
	
	draw: function()
	{
		this.drawArrows();
		//this.drawNav();	
	},
	
	drawArrows: function()
	{
		var scope = this;	
		
		//left arrow
		this._controller._slideControlsDiv.append('<div class="arrow-left slide-arrow" data-direction="left"></div>');		
		this._prevArrow = jQuery('#' + this._controller._slideControlsID + ' .arrow-left');
		
		this.drawNav();

		//right arrow
		this._controller._slideControlsDiv.append('<div class="arrow-right slide-arrow" data-direction="right"></div>');		
		this._nextArrow = jQuery('#' + this._controller._slideControlsID + ' .arrow-right');
	
		//Mouse over event
		this._prevArrow.mouseover(function(){
			jQuery(this).css('background-position', 0);	
		});
		
		this._nextArrow.mouseover(function(){
			jQuery(this).css('background-position', 0);	
		});
		
		//Mouse out event
		this._prevArrow.mouseout(function(){
			jQuery(this).css('background-position', 0);	
		});
		
		this._nextArrow.mouseout(function(){
			jQuery(this).css('background-position', 0);	
		});
		
		//Click event
		this._prevArrow.click(function(){		
			var allowClick = false;
			var direction = jQuery(this).attr('data-direction');

			//if(scope._controller._uiBusy) return;
		
			if(scope._curSlide > 0) {
				scope.changeSlide(direction);
			}
		});
		
		this._nextArrow.click(function(){		
			var allowClick = false;
			var direction = jQuery(this).attr('data-direction')
			
			//if(scope._controller._uiBusy) return;
			
			if(scope._curSlide < scope._controller._numSlides -1) {
				scope.changeSlide(direction);
			}
		});
	},
	
	drawNav: function()
	{
		var scope = this;
		var tmp;
		
		tmp =  '<div id="slide-controls-current-slide" class="slide-controls-number"></div>';
		tmp += '<div class="slide-controls-number-of">of</div>';
		tmp += '<div id="slide-controls-total-slides" class="slide-controls-number">' + this._controller._numSlides + '</div>';
		
		this._controller._slideControlsDiv.append(tmp);
	},
	
	show: function($div)
	{
		$div.animate({
			opacity: 1
		}, 'easeOut');
	},
	
	reset: function()
	{
		this._curSlide = 0;	
		this.updateNav();		
	}
}