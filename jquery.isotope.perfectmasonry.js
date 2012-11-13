/*!
 * PerfectMasonry extension for Isotope
 * 
 * Does similar things as the Isotopes "masonry" layoutmode, except that this one will actually go back and plug the holes
 * left by bigger elements, thus making a perfect brick wall. Profit!
 * 
 * 
 * @author Zonear Ltd. <contact@zonear.com>
 */
;(function($) {

	$.extend($.Isotope.prototype, {
		
		/**
		 * Reset layout properties
		 * --------------------------------------------------------------
		 * 
		 * Runs before any layout change
		 */
		_perfectMasonryReset: function() {
			
			// layout-specific props
			var properties = this.perfectMasonry = {};
			
			// FIXME: shouldn't have to call this again
			this._getSegments();
			  
			// Create top row of the grid
			properties.grid = new Array(this.perfectMasonry.cols);
			
			// Set maximun height of the container
			properties.maxHeight = 0;
	    },
	
	    
	    
	    /**
		 * Create layout
		 * --------------------------------------------------------------
		 */
		_perfectMasonryLayout: function($elems) {
			var instance = this,
				properties = instance.perfectMasonry;
			
			// Loop each element
			$elems.each(function() {
				var $this  = $(this);
				
				// Element width & height
				var width = $this.outerWidth(true),
					height = $this.outerHeight(true),
					
					// How many columns/rows does the tile span
					colSpan = Math.ceil(width / properties.columnWidth),
					colSpan = Math.min(colSpan, properties.cols),
					rowSpan = Math.ceil(height / properties.columnWidth),
					rowSpan = Math.min(rowSpan, properties.cols);
				
				
				// Wider tiles can't fit into the last column
				var maxCol = properties.cols + 1 - colSpan;
				
				// Loop through rows
				var y = -1;
				while(true) {
					y++;
					
					// Add new rows as we go
					properties.grid[y] = properties.grid[y] || [];
					
					// Go through the cells in the row (columns)
					for (var x = 0; x < maxCol; x++) {
						
						// Does the tile fit here or not
						var doesFit = true;
						
						// If the tile is not free, move to the next one immediately
						var tile = properties.grid[y][x];
						if(tile) { continue; }
						
						
						// Tiles spanning to multiple rows/columns - Check if it'll fit
						if(colSpan > 1 || rowSpan > 1) {
							for (var i = 0; i < rowSpan; i++) {
								for (var j = 0; j < colSpan; j++) {
									
									// If the row below is empty (undefined), we're alright
									if(!properties.grid[y+i]) { continue; }
									
									// Check if the cell is occupied - If yes, set doesFit to false and break
									if(properties.grid[y+i][x+j]) { doesFit = false; break; }								
								}
								
								// If it doesn't fit, don't waste our time here
								if(!doesFit) { break; }
							}
						}
						
						
						// If the shoe fits...
						if(doesFit) {
							
							// Fill the cells (handle elements that span multiple rows & columns)
							for (var i = 0; i < rowSpan; i++) {
								for (var j = 0; j < colSpan; j++) {
									
									// Make sure the rows below current row are there
									properties.grid[y+i] = properties.grid[y+i] || [];
									
									// Set the item into the cell
									properties.grid[y+i][x+j] = true;
								}
							}
							
							// Set max height
							var max = y * properties.columnWidth + height;
							if(max > properties.maxHeight) { properties.maxHeight = max; }
							
							// Push element into the document and GTFO
							instance._pushPosition($this, x*properties.columnWidth, y*properties.columnWidth);
							return;
						}
					}
				}
				
				// If we got all the way down to here, the element can't fit - Hide it
				instance._pushPosition($this, -9999, -9999);
			});
		},
	
		
	    
	    /**
		 * Get container size
		 * --------------------------------------------------------------
		 * 
		 * For resizing the container
		 */
	    _perfectMasonryGetContainerSize: function() {
			return {
				height: this.perfectMasonry.maxHeight
			};
	    },
	
	    
	    
	    /**
		 * Resize changed
		 * --------------------------------------------------------------
		 * 
		 * Did the layout change? (???)
		 */
	    _perfectMasonryResizeChanged: function() {
	    	return this._checkIfSegmentsChanged();
	    }
	});
	

})(jQuery);

