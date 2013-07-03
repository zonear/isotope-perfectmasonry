PerfectMasonry extension for Isotope
========

**Extension for creating perfect masonry layouts with Isotope. Now even with pixel perfect liquid layouts!**


## Prerequisites

* jQuery javascript library (http://jquery.com/)
* Isotope jQuery plugin (http://isotope.metafizzy.co/)



## Usage

1. Include perfectMasonry just after jQuery and Isotope.
```html
<script src="js/jquery.isotope.perfectmasonry.js"></script>
```

2. Define Isotope's layout mode to perfectMasonry
```javascript
$('#tiles').isotope({
    layoutMode: "perfectMasonry"
});
```

3. You're all set


## Options
```javascript
    ....
    layoutMode: "perfectMasonry",
	perfectMasonry: {
        layout: "vertical",      // Set layout as vertical/horizontal (default: vertical)
        columnWidth: 200,        // Set/prefer specific column width (liquid layout tries to prefer said width)
        rowHeight: 200,          // Set/prefer specific row height (liquid layout tries to prefer said height)
        
        liquid: true,            // Set layout as liquid (default: false)
        cols: 3,                 // Force to have x columns (default: null)
        rows: 3,                 // Force to have y rows (default: null)
        minCols: 3,              // Set min col count (default: 1)
        minRows: 3,              // Set min row count (default: 1)
        maxCols: 5,              // Set max col count (default: 9999)
        maxRows: 4               // Set max row count (default: 9999)
    }
```


## Halp!

**There are huge gaps between my tiles**

The way Isotope works is that if you don't provide a desired column width/row height for it, it just grabs the first tile and assumes dimensions from that element. So,
if you end up with severe case of them gaps, the first element is probably bigger than the rest. In such cases providing the desired options should get
rid of the symptoms.

Like so:

```javascript
$('#tiles').isotope({
    layoutMode: "perfectMasonry",
    perfectMasonry: {
        columnWidth: 200,
        rowHeight: 200
    }
});
```


## Licensing

Use in commercial and personal applications is free.

**Note:** Isotope has it's own licesing. Read more at: http://isotope.metafizzy.co/



## Changelog

View the [commit history](https://github.com/zonear/isotope-perfectmasonry/commits/master) for a complete robust list of changes to the script.

+ **v1.3**
  [2013-03-07](https://github.com/zonear/isotope-perfectmasonry/commit/55b5e6528d3830c36dfcd0ad5f424ab9aaaef665)
  - Added the capability for horizontal layouts
  - Added liquid layouts with variable tile sizes, plus some extra options for liquid layouts


+ **v1.1**
  [2013-08-02](https://github.com/zonear/isotope-perfectmasonry/commit/92af3587f0a8da7f2957a6768c4c836c9b04d6fd)
  - Row height definitions for non-square tiles
  - Container now has width defined, so that it can be centered by CSS (margin auto)


+ **v1.0**
  [2012-11-13](https://github.com/zonear/isotope-perfectmasonry/commit/c6ee341a486e7b8688c6fb66dff2d079379c0932#jquery.isotope.perfectmasonry.js)
  - Public release

