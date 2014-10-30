var Section = AbstractSlideSection.extend({	

	_slideContainerBgDiv: null,
	_webpageBrowser: null,
	_webpageMask: null,
	_webpageContainer: null,
	_webpageSection1: null,
	_webpageSection2: null,
	_webpageSection3: null,
	_webpageSection4: null,
	_webpageSection5: null,
	_webpageSection6: null,	
	_webpagePopup1: null,
	_webpagePopup2: null,
	_webpagePopup3: null,
	_webpageCursor: null,
	_webpageSortPopup: null,

	constructor: function($config, $data, $sectionDiv, $slideControlsDiv, $slideContainerDiv, $slideContainerBgDiv)
	{
		this._sectionID = 'section-1';		
		this._slideContainerBgDiv = $slideContainerBgDiv;
		this.inherit($config, $data, $sectionDiv, $slideControlsDiv, $slideContainerDiv);
	},
	
	create: function()
	{
		this.inherit();
	},
	
	destroy: function()
	{
		this.inherit();
		clearTimeout(this._timer);
	},	
	
	draw: function()
	{
		this.inherit();		
		this.drawBrowserBackground();
	},

	sectionLoaded: function()
	{
		this.inherit();
		
		this._slideControls = new SlideControls(this, true, false);
		this._slideControls.init();
		this._slideControls.show(this._slideControlsDiv);
		this._slideControls._curSlide = 0;
		
		this.gotoSlide(0);
	},
	
	resize: function($width, $height)
	{
		this.inherit();
	},
	
	showSlide: function($id)
	{
		this.inherit($id);
		console.log('Draw slide: ' + $id);
		switch($id) {
			case 0:
				//if(this._slidesRendered[this._sectionID + '-slide-0'] == undefined) {
					this.drawSlide0();
				//} 
				break;
			case 1:
				//if(this._slidesRendered[this._sectionID + '-slide-1'] == undefined) {
					this.drawSlide1();
				//}
				break;
			case 2:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide2();
				//}
				break;
			case 3:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide3();
				//}
				break;
			case 4:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide4();
				//}
				break;
			case 5:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide5();
				//}
				break;
			case 6:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide6();
				//}
				break;
			case 7:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide7();
				//}
				break;
			case 8:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide8();
				//}
				break;
			case 9:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide9();
				//}
				break;
			case 10:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide10();
				//}
				break;
			case 11:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide11();
				//}
				break;
			case 12:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide12();
				//}
				break;
			case 13:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide13();
				//}
				break;
			case 14:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide14();
				//}
				break;
			case 15:
				//if(this._slidesRendered[this._sectionID + '-slide-2'] == undefined) {
					this.drawSlide15();
				//}
				break;	
						
		}
	},
	
	drawSlide0: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;					
		
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
				
				tmpDiv1 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});
				
				tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-1');
				tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', opacity: 0});
					
				tmpDiv1.animate({
					opacity: 1
				}, 'easeOut');
				tmpDiv2.animate({
					opacity: 1
				}, 'easeOut', function(){
					scope._uiBusy = false;	
				});			
	
		//	}
		//});
	},
	
	drawSlide1: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var tmpDiv4;
		var tmpDiv5;
		var tmpDiv6;
		var tmpDiv7;
		var tmpDiv8;
		var tmpDiv9;
		var tmpDiv10;
		var tmpDiv11;
		var tmpDiv12;
		var tmpDiv13;
		var tmpDiv14;
		var tmpDiv15;
		var tmpDiv16;		
				
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;
		
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-1"></div>');				
				tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-1');
				tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-2"></div>');
				tmpDiv3 = jQuery('#' + this._curSlideDivID + '-image-2');
				tmpDiv3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[2].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-3"></div>');
				tmpDiv4 = jQuery('#' + this._curSlideDivID + '-image-3');
				tmpDiv4.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[3].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-4"></div>');
				tmpDiv5 = jQuery('#' + this._curSlideDivID + '-image-4');
				tmpDiv5.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[4].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-5"></div>');
				tmpDiv6 = jQuery('#' + this._curSlideDivID + '-image-5');
				tmpDiv6.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[5].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-6"></div>');
				tmpDiv7 = jQuery('#' + this._curSlideDivID + '-image-6');
				tmpDiv7.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[6].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-7"></div>');
				tmpDiv8 = jQuery('#' + this._curSlideDivID + '-image-7');
				tmpDiv8.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[7].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-8"></div>');
				tmpDiv9 = jQuery('#' + this._curSlideDivID + '-image-8');
				tmpDiv9.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[8].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-9"></div>');
				tmpDiv10 = jQuery('#' + this._curSlideDivID + '-image-9');
				tmpDiv10.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[9].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-10"></div>');
				tmpDiv11 = jQuery('#' + this._curSlideDivID + '-image-10');
				tmpDiv11.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[10].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-11"></div>');
				tmpDiv12 = jQuery('#' + this._curSlideDivID + '-image-11');
				tmpDiv12.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[11].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-12"></div>');
				tmpDiv13 = jQuery('#' + this._curSlideDivID + '-image-12');
				tmpDiv13.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[12].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-13"></div>');				
				tmpDiv14 = jQuery('#' + this._curSlideDivID + '-image-13');
				tmpDiv14.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[13].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-14"></div>');
				tmpDiv15 = jQuery('#' + this._curSlideDivID + '-image-14');
				tmpDiv15.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[14].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-15"></div>');
				tmpDiv16 = jQuery('#' + this._curSlideDivID + '-image-15');
				tmpDiv16.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[15].src + ')', opacity: 0});
						
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				tmpDiv1 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});
				tmpDiv1.append('<div id="section-1-slide-1-text-0">' + this._curSlideData.text[0] + '</div>');			
				
				for(var i=1; i<=16; i++) {
					jQuery('#' + this._curSlideDivID + '-image-' + i).delay((i - 1) * (1000 - (i * 35))).animate({
						opacity: 1	
					}, 'easeOut');
				}				
				
				var top = parseInt(tmpDiv1.css('top').split('px'));
				tmpDiv1.css({top: top + 50});
				tmpDiv1.delay((i - 1) * (1000 - (i * 35)) + 1000).animate({
					opacity: 1,
					top: top
				}, 'easeOut', function(){
					scope._uiBusy = false;	
				});
		//	}
		//});		
	},

	drawSlide2: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var xhr;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		//xhr = $.ajax(src, {
		//	success: function (){
				scope._slidesRendered[this._curSlideDivID] = true;

				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});
				
				var top = parseInt(tmpDiv2.css('top').split('px'));
				tmpDiv2.css({top: top + 50});
				tmpDiv2.animate({
					opacity: 1,
					top: top
				}, 'easeOut', function(){
					var top = parseInt(tmpDiv1.css('top').split('px'));
					tmpDiv1.css({top: top + 50});
					tmpDiv1.animate({
						opacity: 1,
						top: top
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
		//	}
		//});
	},
	
	drawSlide3: function()
	{
		var scope = this;
		var tmpDiv1;
		var xhr;
		var newX = 122;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');		
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		//xhr = $.ajax(src, {
		//	success: function (){
				scope._slidesRendered[this._curSlideDivID] = true;

				tmpDiv1.animate({
					opacity: 1,
					top: '-=100px'
				}, function(){
					for(var i=0; i<=3; i++) {
						scope._curSlideDiv.append('<div id="' + this._curSlideDivID + '-circle-' + i + '" class="section-1-slide-3-circle"></div>'); 							
						var tmpDiv = jQuery('#' + this._curSlideDivID + '-circle-' + i);
						
						tmpDiv.append('<div id="' + scope._curSlideDivID + '-circle-icon-' + i + '"><img src="' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[i].src  + '"/></div>');
						tmpDiv.append('<div id="' + scope._curSlideDivID + '-circle-text-' + i + '">' + scope._curSlideData.text[i + 1]  + '</div>');
						tmpDiv.css({left: newX, opacity: 0, 'background-image': 'url("' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[4].src + '")', 'z-index': (4-i)});
						tmpDiv.delay(((i+1) - 1) * 1000).animate({
							top: '-=100px',
							opacity: 1	
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
						
						newX += (tmpDiv.width() - 25);
					}				
				});
		//	}
		//});
	},
	
	drawSlide4: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var tmpDiv4;
		var tmpDiv5;
		var tmpDivContainer;						
		var xhr;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});

		scope._slidesRendered[this._curSlideDivID] = true;
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-animation-container"></div>');
		tmpDivContainer = jQuery('#' + this._curSlideDivID + '-animation-container');
		
		tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
		tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-0');
		tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')'});
		
		tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
		tmpDiv3 = jQuery('#' + this._curSlideDivID + '-image-1');
		tmpDiv3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')'});
		
		tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-2"></div>');
		tmpDiv4 = jQuery('#' + this._curSlideDivID + '-image-2');
		tmpDiv4.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[2].src + ')'});
		
		tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-3"></div>');
		tmpDiv5 = jQuery('#' + this._curSlideDivID + '-image-3');
		tmpDiv5.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[3].src + ')'});


		//xhr = $.ajax(src, {
		//	success: function (data){
		if(scope._slideControls._slideDirection == "back") {
			console.log('TODO: animate under next scenario');	
			scope._webpageBrowser.animate({
				top:'+=540px'
			}, 'easeOut', function(){
				scope._webpageCursor.css({display:'none', top:441, left:200});
				scope._webpageBrowser.css({display:'none', top:140});
				tmpDiv1.animate({
					opacity: 1,
					top: '-=100px'
				}, 'easeOut', function(){
					tmpDivContainer.animate({
						top: '-=100px',
						opacity: 1
					}, 'easeOut', function(){
						tmpDiv2.rotate(-180, -1, 0);
						tmpDiv3.rotate(180, 1, 0);
						tmpDiv4.rotate(180, 1, 0);
						scope._uiBusy = false;	
					});
				});
			});

		} else {
			tmpDiv1.animate({
				opacity: 1,
				top: '-=100px'
			}, 'easeOut', function(){
				tmpDivContainer.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut', function(){
					tmpDiv2.rotate(-180, -1, 0);
					tmpDiv3.rotate(180, 1, 0);
					tmpDiv4.rotate(180, 1, 0);
					scope._uiBusy = false;	
				});
			});
		}
		//	}
		//});
	},
	
	drawSlide5: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[8].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');	
		
		this._webpageSection1.animate({opacity:1});
		this._webpageSection2.animate({opacity:1});
		this._webpageSection3.animate({opacity:1});
		this._webpageSection4.animate({opacity:1});
		this._webpageSection5.animate({opacity:1});
		this._webpageSection6.animate({opacity:1});
	
		if(scope._slideControls._slideDirection == "back") {
			this._webpageCursor.css({display:'none'});
			this._webpagePopup1.animate({
				opacity: 0
			}, 'easeOut');
			
			tmpDiv1.animate({
				opacity: 1,
				top: '-=100px'
			}, 'easeOut', function(){
				scope._uiBusy = false;	
			});
		} else {				
			this._webpageBrowser.css({display:'block', opacity:0, top:140});
			this._webpageBrowser.animate({
				top: '-=100px',
				opacity: 1
			}, 'easeOut', function(){
				scope._webpageContainer.delay(800).animate({
					top: '-=310px'
				}, 2000, function(){
					scope._webpageContainer.delay(1000).animate({
						top: '+=310px'
					}, 2000, function(){
						tmpDiv1.animate({
							opacity: 1,
							top: '-=100px'
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
					})	
				})
			});
		}
	},
	
	drawSlide6: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var tmpDiv4;
		
		scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + scope._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[2].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + scope._curSlideDivID + '-text-0">' + scope._curSlideData.text[0] + '</div>');	

		
		this._webpageSection1.animate({opacity:.2});
		this._webpageSection2.animate({opacity:.2});
		this._webpageSection3.animate({opacity:.2});
		this._webpageSection4.animate({opacity: 1});
		this._webpageSection5.animate({opacity:.2});
		this._webpageSection6.animate({opacity:.2});
			
		if(scope._slideControls._slideDirection == "back") {
			console.log('TODO: animate under back scenario');	
			this._webpageContainer.animate({
				top: 0	
			}, 'easeOut', function(){						
				scope._webpagePopup1.css({display:'block'});
				scope._webpagePopup1.animate({
					opacity: 1
				}, 'easeOut', function(){
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
			this._webpagePopup2.animate({
				opacity: 0
			}, 'easeOut');
		} else {		
			scope._webpageCursor.css('display', 'block');
			scope._webpageCursor.delay(500).animate({
				opacity: 1,
				top: 291,
				left: 150
			}, 1000, function(){
				scope._webpagePopup1.css({display:'block'});
				scope._webpagePopup1.animate({
					opacity: 1
				}, 'easeOut', function(){
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
		}
	},
	
	drawSlide7: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		
		this._webpageSection1.animate({opacity:.2});
		this._webpageSection2.animate({opacity:.2});
		this._webpageSection3.animate({opacity:.2});
		this._webpageSection4.animate({opacity:.2});
		this._webpageSection5.animate({opacity: 1});
		this._webpageSection6.animate({opacity:.2});
		
		scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + scope._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[2].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + scope._curSlideDivID + '-text-0">' + scope._curSlideData.text[0] + '</div>');	
		
		if(scope._slideControls._slideDirection == "back") {
			console.log('TODO: animate under back scenario');	
			this._webpageContainer.animate({
				top: -200	
			}, 'easeOut', function(){						
				scope._webpageCursor.delay(500).animate({
					top: 291,
					left: 150
				}, 'easeOut', function(){
					scope._webpagePopup2.css({display:'block'});
					scope._webpagePopup2.animate({
						opacity: 1
					}, 'easeOut', function(){
						tmpDiv1.animate({
							opacity: 1,
							top: '-=100px'
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
					});
				});
			});
			this._webpagePopup3.animate({
				opacity: 0
			}, 'easeOut');

		} else {
			console.log('TODO: animate under next scenario');	
			this._webpageContainer.animate({
				top: -200	
			}, 'easeOut', function(){						
				scope._webpagePopup2.css({display:'block'});
				scope._webpagePopup2.animate({
					opacity: 1
				}, 'easeOut', function(){
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
			this._webpagePopup1.animate({
				opacity: 0
			}, 'easeOut');
		}
	},
	
	drawSlide8: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		
		this._webpageSection1.animate({opacity:.2});
		this._webpageSection2.animate({opacity:.2});
		this._webpageSection3.animate({opacity:.2});
		this._webpageSection4.animate({opacity:.2});
		this._webpageSection5.animate({opacity:.2});
		this._webpageSection6.animate({opacity: 1});
		
		scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + scope._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[2].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + scope._curSlideDivID + '-text-0">' + scope._curSlideData.text[0] + '</div>');	
		
		if(scope._slideControls._slideDirection == "back") {
			console.log('TODO: animate under back scenario');	
			scope._webpageContainer.animate({
				top: '-375px'	
			}, 'easeOut', function(){						
				scope._webpageCursor.animate({
					opacity: 1,
					top: 340,
					left: 140
				}, 500, function(){
					scope._webpagePopup3.css({display:'block'});
					scope._webpagePopup3.animate({
						opacity: 1
					}, 'easeOut', function(){
						tmpDiv1.animate({
							opacity: 1,
							top: '-=100px'
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
					});
				});
			});

		} else {
			console.log('TODO: animate under next scenario');	
			this._webpageContainer.animate({
				top: '-375px'	
			}, 'easeOut', function(){						
				scope._webpageCursor.css('display', 'block');
				scope._webpageCursor.animate({
					opacity: 1,
					top: 340,
					left: 140
				}, 500, function(){
					scope._webpagePopup3.css({display:'block'});
					scope._webpagePopup3.animate({
						opacity: 1
					}, 'easeOut', function(){
						tmpDiv1.animate({
							opacity: 1,
							top: '-=100px'
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
					});
				});
			});
			this._webpagePopup2.animate({
				opacity: 0
			}, 'easeOut');
		}
	},
	
	drawSlide9: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		
		this._webpageSection1.animate({opacity:.2});
		this._webpageSection2.animate({opacity:.2});
		this._webpageSection3.animate({opacity: 1});
		this._webpageSection4.animate({opacity:.2});
		this._webpageSection5.animate({opacity:.2});
		this._webpageSection6.animate({opacity:.2});
		
		scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + scope._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[0].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + scope._curSlideDivID + '-text-0">' + scope._curSlideData.text[0] + '</div>');	
		
		if(scope._slideControls._slideDirection == "back") {
			console.log('TODO: Slide 9: animate under back scenario');	
			scope._webpageSortPopup.animate({
				opacity: 0
			}, 'easeOut', function(){
				scope._webpageSortPopup.css({display:'none', 'background-position':0});
				scope._webpageCursor.animate({
					top: 115,
					left: 105
				}, 800, function(){
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
		} else {
			console.log('TODO: animate under next scenario');	
			this._webpageContainer.animate({
				top: 0	
			}, 'easeOut', function(){
				scope._webpageCursor.css('display', 'block');
				scope._webpageCursor.animate({
					opacity: 1,
					top: 115,
					left: 105
				}, 1000, function(){
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
			this._webpagePopup3.animate({
				opacity: 0
			}, 'easeOut');
		}
	},
	
	drawSlide10: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		
		this._webpageSection1.animate({opacity:.2});
		this._webpageSection2.animate({opacity: 1});
		this._webpageSection3.animate({opacity:.2});
		this._webpageSection4.animate({opacity:.2});
		this._webpageSection5.animate({opacity:.2});
		this._webpageSection6.animate({opacity:.2});
		
		scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + scope._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + scope._config.images_folder + '/' + scope._data.images_folder + '/' + scope._curSlideData.images[2].src + ')', opacity: 0});
		tmpDiv1.append('<div id="' + scope._curSlideDivID + '-text-0">' + scope._curSlideData.text[0] + '</div>');	

		if(scope._slideControls._slideDirection == "back") {
			scope._webpageBrowser.css({display:'block'});
			scope._webpageBrowser.animate({
				top: 40,
				opacity: 1
			}, 'easeOut', function(){
				scope._webpageCursor.css({display:'block'});
				scope._webpageCursor.animate({
					opacity: 1,
					top: 109,
					left: 536
				}, 1000, function(){
					scope._webpageSortPopup.css({display:'block'});
					scope._webpageCursor.delay(200).animate({
						top: 165
					}, 'easeOut', function(){
						scope._webpageSortPopup.css({'background-position':'-179px'});
						scope._webpageSortPopup.animate({
							opacity: 1
						}, 'easeOut', function(){
							tmpDiv1.animate({
								opacity: 1,
								top: '-=100px'
							}, 'easeOut', function(){
								scope._uiBusy = false;	
							});
						});
					});
				});	
			});
		} else {
			console.log('TODO: animate under next scenario');	
			scope._webpageCursor.css('display', 'block');
			scope._webpageCursor.animate({
				opacity: 1,
				top: 109,
				left: 536
			}, 1000, function(){
				scope._webpageSortPopup.css({display:'block', opacity:1});
				scope._webpageCursor.delay(400).animate({
					top: 165
				}, 'easeOut', function(){
					scope._webpageSortPopup.css({'background-position':'-179px'});
					tmpDiv1.animate({
						opacity: 1,
						top: '-=100px'
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				});
			});
		}
	},
	
	drawSlide11: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var xhr;
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-image-0');
		tmpDiv1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
		tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-1');
		tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', opacity: 0});
		
		tmpDiv2.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv3 = jQuery('#' + this._curSlideDivID + '-text-0');
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;	
	
				if(this._slideControls._slideDirection == "back") {
					tmpDiv1.animate({
						top: '-=100px',
						opacity: 1
					}, 'easeOut');
					tmpDiv2.delay(1800).animate({
						top: '-=100px',
						opacity: 1
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});
				} else {
					console.log('TODO: animate under next scenario');	
					scope._webpageCursor.css({display:'none'});
					scope._webpageSortPopup.css({display:'none', 'background-position':0});
					scope._webpageBrowser.animate({
						top:'-=540px'
					}, 'easeOut', function(){
						scope._webpageBrowser.css({display:'none', top:140});
						tmpDiv1.animate({
							top: '-=100px',
							opacity: 1
						}, 'easeOut');
						
						tmpDiv2.delay(1800).animate({
							top: '-=100px',
							opacity: 1
						}, 'easeOut', function(){
							scope._uiBusy = false;	
						});
					});
				}
		//	}
		//});	
	},
	
	drawSlide12: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var tmpDiv4;
		var tmpDiv5;
		var tmpDiv6;
		var tmpDiv7;								
		var xhr;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-1">' + this._curSlideData.text[1] + '</div>');
		tmpDiv2 = jQuery('#' + this._curSlideDivID + '-text-1');
		tmpDiv2.css({opacity: 0});
		
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-cart-container"></div>');
				tmpDivContainer = jQuery('#' + this._curSlideDivID + '-cart-container');
				
				tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				tmpDiv3 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')'});
				
				tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
				tmpDiv4 = jQuery('#' + this._curSlideDivID + '-image-1');
				tmpDiv4.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', opacity: 0});
				
				tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-2"></div>');
				tmpDiv5 = jQuery('#' + this._curSlideDivID + '-image-2');
				tmpDiv5.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[2].src + ')', opacity: 0});
				
				tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-3"></div>');
				tmpDiv6 = jQuery('#' + this._curSlideDivID + '-image-3');
				tmpDiv6.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[3].src + ')', opacity: 0});	
				
				tmpDivContainer.append('<div id="' + this._curSlideDivID + '-image-4"></div>');
				tmpDiv7 = jQuery('#' + this._curSlideDivID + '-image-4');
				tmpDiv7.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[4].src + ')', opacity: 0});															
				
				tmpDiv1.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv2.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut');
				
				tmpDivContainer.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut', function(){
					tmpDivContainer.delay(500).animate({
						left: '+=200px'
					}, 2000);	
				});
				
				tmpDiv4.delay(1200).animate({
					top: '+=20px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv5.delay(1500).animate({
					top: '+=20px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv6.delay(1800).animate({
					top: '+=20px',
					opacity: 1
				}, 'easeOut');		
				
				tmpDiv7.delay(2100).animate({
					top: '+=20px',
					opacity: 1
				}, 'easeOut', function(){
					scope._uiBusy = false;	
				});
		//	}
		//});	
	},
	
	drawSlide13: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var xhr;
		var tmp;

		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
				tmpDiv3 = jQuery('#' + this._curSlideDivID + '-image-1');
				tmpDiv3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', left: 325, display: 'none'});

				tmpDiv1.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv2.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv3.delay(1000).animate({
					opacity: 1
				}, 'easeOut', function(){
					var newX = 290;
					var newY = 291;
					var charArray = scope._curSlideData.search_box_text.split('');
					var i = 0;
					
					tmpDiv3.css({left:50, display: 'block'});
					
					scope._timer = setInterval(function(){
						if(charArray.length == 0) {
							clearInterval(scope._timer);	
							tmpDiv3.animate({
								opacity: 0
							}, 'fast', function(){
								scope._uiBusy = false;	
							});
						} else {
							var char = charArray.shift();
	
							if(char == ' ') char = '&nbsp;';
							
							scope._curSlideDiv.append('<div id="' + scope._curSlideDivID + '-letter-' + i + '" class="search-box-letter">' + char + '</div>');
	
							tmp = jQuery('#' + scope._curSlideDivID + '-letter-' + i);
							tmp.css({top: newY, left: newX});
	
							newX += tmp.width();
							
							tmpDiv3.css({left: newX});
							i++;
						}
					}, 80);
				});
		//	}
		//	
	},
	
	drawSlide14: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		var tmpDiv3;
		var tmpDiv4;
		var tmpDiv5;
		var tmpDiv6;
		var xhr;
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		//xhr = $.ajax(src, {
		//	success: function (data){
				scope._slidesRendered[this._curSlideDivID] = true;
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-0"></div>');
				tmpDiv2 = jQuery('#' + this._curSlideDivID + '-image-0');
				tmpDiv2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[0].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-1"></div>');
				tmpDiv3 = jQuery('#' + this._curSlideDivID + '-image-1');
				tmpDiv3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[1].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-2"></div>');
				tmpDiv4 = jQuery('#' + this._curSlideDivID + '-image-2');
				tmpDiv4.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[2].src + ')', opacity: 0});
				
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-3"></div>');
				tmpDiv5 = jQuery('#' + this._curSlideDivID + '-image-3');
				tmpDiv5.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[3].src + ')', opacity: 0});	
			
				this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-image-4"></div>');
				tmpDiv6 = jQuery('#' + this._curSlideDivID + '-image-4');
				tmpDiv6.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._curSlideData.images[4].src + ')', opacity: 0});															
				
				tmpDiv1.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut');
				
				tmpDiv2.animate({
					top: '-=100px',
					opacity: 1
				}, 'easeOut', function(){					
					tmpDiv3.delay(1100).animate({
						opacity: 1
					}, 'easeOut');
					
					tmpDiv4.delay(1200).animate({
						opacity: 1
					}, 'easeOut');
					
					tmpDiv5.delay(1300).animate({
						opacity: 1
					}, 'easeOut');
					
					tmpDiv6.delay(1400).animate({
						opacity: 1
					}, 'easeOut', function(){
						scope._uiBusy = false;	
					});									
				});
	},
	
	drawSlide15: function()
	{
		var scope = this;
		var tmpDiv1;
		var tmpDiv2;
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-0">' + this._curSlideData.text[0] + '</div>');
		tmpDiv1 = jQuery('#' + this._curSlideDivID + '-text-0');
		tmpDiv1.css({opacity: 0});
		
		this._curSlideDiv.append('<div id="' + this._curSlideDivID + '-text-1">' + this._curSlideData.text[1] + '</div>');
		tmpDiv2 = jQuery('#' + this._curSlideDivID + '-text-1');
		tmpDiv2.css({opacity: 0});
		
		tmpDiv1.animate({
			top: '-=100px',
			opacity: 1
		}, 'easeOut');
		
		tmpDiv2.delay(400).animate({
			top: '-=100px',
			opacity: 1
		}, 'easeOut', function(){
			scope._uiBusy = false;	
		});
	},
	
	drawBrowserBackground: function()
	{
		var scope = this;
		var tmpDiv1;
		
		this._slideContainerBgDiv.append('<div id="section-1-webpage-browser"><div id="section-1-webpage-mask"><div id="section-1-webpage-container"></div></div></div>');
		this._webpageBrowser = jQuery('#section-1-webpage-browser');
		this._webpageBrowser.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[0].src + ')'});
		
		this._webpageContainer = jQuery('#section-1-webpage-container');
		
		this._webpageContainer.append('<div id="section-1-webpage-section-1"></div>');
		this._webpageSection1 = jQuery('#section-1-webpage-section-1');
		this._webpageSection1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[1].src + ')'});
		
		this._webpageContainer.append('<div id="section-1-webpage-section-2"></div>');
		this._webpageSection2 = jQuery('#section-1-webpage-section-2');
		this._webpageSection2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[2].src + ')'});
		
		this._webpageContainer.append('<div id="section-1-webpage-section-3"></div>');
		this._webpageSection3 = jQuery('#section-1-webpage-section-3');
		this._webpageSection3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[3].src + ')'});
		
		this._webpageContainer.append('<div id="section-1-webpage-section-4"></div>');
		this._webpageSection4 = jQuery('#section-1-webpage-section-4');
		this._webpageSection4.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[4].src + ')'});
		
		this._webpageContainer.append('<div id="section-1-webpage-section-5"></div>');
		this._webpageSection5 = jQuery('#section-1-webpage-section-5');
		this._webpageSection5.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[5].src + ')'});
		
		this._webpageContainer.append('<div id="section-1-webpage-section-6"></div>');
		this._webpageSection6 = jQuery('#section-1-webpage-section-6');
		this._webpageSection6.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[6].src + ')'});	

		this._webpageBrowser.append('<div id="section-1-webpage-popup-1"></div>');
		this._webpagePopup1 = jQuery('#section-1-webpage-popup-1');
		this._webpagePopup1.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide6.images[0].src + ')', opacity: 0});	

		this._webpageBrowser.append('<div id="section-1-webpage-popup-2"></div>');
		this._webpagePopup2 = jQuery('#section-1-webpage-popup-2');
		this._webpagePopup2.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide7.images[0].src + ')', opacity: 0});	

		this._webpageBrowser.append('<div id="section-1-webpage-popup-3"></div>');
		this._webpagePopup3 = jQuery('#section-1-webpage-popup-3');
		this._webpagePopup3.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide8.images[0].src + ')', opacity: 0});	
		
		this._webpageBrowser.append('<div id="section-1-webpage-sort-popup"></div>');
		this._webpageSortPopup = jQuery('#section-1-webpage-sort-popup');
		this._webpageSortPopup.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide10.images[0].src + ')', display:'none'});					
		
		this._webpageBrowser.append('<div id="section-1-webpage-cursor"></div>');
		this._webpageCursor = jQuery('#section-1-webpage-cursor');
		this._webpageCursor.css({background: 'url(' + this._config.images_folder + '/' + this._data.images_folder + '/' + this._data.slides.slide5.images[7].src + ')', display:'none'});	
		
	}
});