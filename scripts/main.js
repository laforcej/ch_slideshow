var _data;
var _activeSection;
var _activeSectionID;
var _activeSectionDiv;
var _activeNav;
var _section1;
var _indicatorDiv;
var _initialLoad = true; 

jQuery(document).ready(function(){
	jQuery.getJSON("data/data.json", function( json ){

		_data = json;
		_section = new Section(_data.config, _data.section.data, jQuery('#section-1'), jQuery('#section-1-slide-controls'), jQuery('#section-1-slide-container'), jQuery('#section-1-bg-container'));

		loadSection();
	});	
	
	$.fn.rotate = function(until, step, initial, elt) {
		var _until = (!until)?360:until;
		var _step = (!step)?1:step;
		var _initial = (!initial)?0:initial;
		var _elt = (!elt)?$(this):elt;
	
		var deg = _initial + _step;
	
		var browser_prefixes = ['-webkit', '-moz', '-o', '-ms'];
		for (var i=0, l=browser_prefixes.length; i<l; i++) {
		  var pfx = browser_prefixes[i]; 
		  _elt.css(pfx+'-transform', 'rotate('+deg+'deg)');
		}
	
		if(_until < 0) {
			if (deg > _until) {
			  setTimeout(function() {
				  $(this).rotate(_until, _step, deg, _elt); //recursive call
			  }, 10);
			}			
		} else {	
			if (deg < _until) {
			  setTimeout(function() {
				  $(this).rotate(_until, _step, deg, _elt); //recursive call
			  }, 10);
			}
		}
	};
});

function loadSection()
{
	this._section.ready();		
}

function adjustContentHeight()
{
    jQuery(".container").each(function() {
        var newHeight = 0, $this = $(this);
        jQuery.each($this.children(), function() {
            newHeight += $( this ).height();
        });
        $this.height( newHeight );
    });
}
