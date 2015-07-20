/*!
 * 
 * HorizontalPerfectMasonry extension for Isotope 
 *
 * Almost the same thing as PerfectMasonry extension for Isotope
 * but also works with Horizontal layout
 *
 */
;(function($, undefined) {
  $.extend($.Isotope.prototype, {
    _perfectMasonryHorizontalReset: function() {
      var properties = this.perfectMasonryHorizontal = {};

      this._getSegments();
      this._getSegments(true);
      this._perfectMasonryHorizontalGetSegments();

      properties.grid = new Array(this.perfectMasonryHorizontal.rows);
      properties.containerHeight = 0;
      properties.containerWidth = 0;
    },

    _perfectMasonryHorizontalLayout: function($elems) {
      var instance = this,
        properties = this.perfectMasonryHorizontal;

      $elems.each(function() {
        var $this  = $(this);

        var width = $this.outerWidth(true),
            height = $this.outerHeight(true),

        colSpan = Math.ceil(width / properties.columnWidth),
        rowSpan = Math.ceil(height / properties.rowHeight);

        var maxRow = Math.max(properties.rows + 1 - rowSpan, 1);

        var x = -1;
        while(true) {
          x++;

          properties.grid[x] = properties.grid[x] || [];

          for (var y = 0; y < maxRow; y++) {
            var doesFit = true;
            var tile = null;
            
            if(typeof properties.grid[y] !== "undefined" && properties.grid[y].length > 0) { tile = properties.grid[y][x]; }
            
            if(tile) { continue; }

            if(colSpan > 1 || rowSpan > 1) {
              for (var i = 0; i < rowSpan; i++) {
                for (var j = 0; j < colSpan; j++) {
                  if(!properties.grid[y+i]) { continue; }
                  if(properties.grid[y+i][x+j]) { doesFit = false; break; }
                }
                if(!doesFit) { break; }
              }
            }

            if(doesFit) {
              for (var i = 0; i < rowSpan; i++) {
                for (var j = 0; j < colSpan; j++) {
                  properties.grid[y+i] = properties.grid[y+i] || [];
                  properties.grid[y+i][x+j] = true;
                }
              }

              var newWidth = x * properties.columnWidth + width;
              if(newWidth > properties.containerWidth) { properties.containerWidth = newWidth; }
              
              var newHeight = y * properties.rowHeight + height;
              if(newHeight > properties.containerHeight) { properties.containerHeight = newHeight; }

              instance._pushPosition($this, x*properties.columnWidth, y*properties.rowHeight);
              return;
            }
          }
        }

        instance._pushPosition($this, -9999, -9999);
      });
    },

    _perfectMasonryHorizontalGetContainerSize: function() {
      return {
        width: this.perfectMasonryHorizontal.containerWidth,
        height: this.perfectMasonryHorizontal.containerHeight
      };
    },

    _perfectMasonryHorizontalResizeChanged: function() {
      var properties = this.perfectMasonryHorizontal;
      var oldCols = properties.rows;
      this._perfectMasonryHorizontalGetSegments();
      if(oldCols !== properties.rows) { return true; }
      return false;
    },

    _perfectMasonryHorizontalGetSegments: function() {
      var properties = this.perfectMasonryHorizontal;
      var parentWidth = this.element.parent().width();
      properties.cols = Math.floor(parentWidth / properties.columnWidth) || 1;
      var parentHeight = this.element.parent().height();
      properties.rows = Math.floor(parentHeight / properties.rowHeight) || 1;
    }
  });


})(jQuery);

