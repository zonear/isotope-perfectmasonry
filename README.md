PerfectMasonry extension for Isotope
========

**Extension for creating perfect masonry layouts with Isotope.**


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


## Halp!

**There are huge gaps between my tiles**

The way Isotope works is that if you don't provide a desired column width for it, it just grabs the first tile and assumes that as the column width. So,
if you end up with severe case of them gaps, the first element is probably bigger than the rest. In such cases providing the desired width should get
rid of the symptoms. 

Like so:

```javascript
$('#tiles').isotope({
    layoutMode: "perfectMasonry",
    perfectMasonry: {
        columnWidth: 200
    }
});
```

## Licensing

Use in commercial and personal applications is free.

**Note:** Isotope has it's own licesing. Read more at: http://isotope.metafizzy.co/



## Changelog

View the [commit history](https://github.com/zonear/isotope-perfectmasonry/commits/master) for a complete robust list of changes to the script.

+ **v1.0**
  [2012-11-13](https://github.com/zonear/isotope-perfectmasonry/commit/c6ee341a486e7b8688c6fb66dff2d079379c0932#jquery.isotope.perfectmasonry.js)
  - Public release