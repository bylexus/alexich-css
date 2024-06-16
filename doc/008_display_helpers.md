## Display helpers

| CSS Class          | Description                                                         | Example                                  |
| ------------------ | ------------------------------------------------------------------- | ---------------------------------------- |
| `.w-full`          | width 100% for an element                                           | `<div class="w-full">...</div>`          |
| `.h-full`          | height 100% for an element                                          | `<div class="h-full">...</div>`          |
| `.w-initial`       | sets `width` to its initial value for an element                    | `<div class="w-initial">...</div>`       |
| `.h-initial`       | sets `height` to its initial value for an element                   | `<div class="h-initial">...</div>`       |
| `.overflow-hidden` | hides the overflow of an element's content                          | `<div class="overflow-hidden">...</div>` |
| `.overflow-auto`   | auto-hides scrollbars based on the overflow of an element's content | `<div class="overflow-auto">...</div>`   |
| `.d-none`          | hides an element, and does not use the space in the parent element  | `<div class="d-none">...</div>`          |
| `.d-block`         | sets `display:block` for an element                                 | `<div class="d-block">...</div>`         |
| `.d-inline`        | sets `display:inline` for an element                                | `<div class="d-inline">...</div>`        |
| `.d-inline-block`  | sets `display:inline-block` for an element                          | `<div class="d-inline-block">...</div>`  |
| `.d-inline-grid`  | sets `display:inline-grid` for an element                          | `<div class="d-inline-grid">...</div>`  |
| `.display`         | sets  the `display` value to its initial value for an element       | `<div class="display">...</div>`         |

### Responsive display values

For (most of) the above classes, the library offers breakpoint-depending pendants so you can flexibly set a value depending on the
actual breakpoint:

* `.w-full`: `w-md-full`, `w-lg-full`, `w-xl-full`
* `.w-initial`: `w-md-initial`, `w-lg-initial`, `w-xl-initial`
* `.h-full`: `h-md-full`, `h-lg-full`, `h-xl-full`
* `.h-initial`: `h-md-initial`, `h-lg-initial`, `h-xl-initial`
* `.d-none`: `d-md-none`, `d-lg-none`, `d-xl-none`
* `.d-block`: `d-md-block`, `d-lg-block`, `d-xl-block`
* `.d-inline`: `d-md-inline`, `d-lg-inline`, `d-xl-inline`
* `.d-inline-block`: `d-md-inline-block`, `d-lg-inline-block`, `d-xl-inline-block`
* `.d-inline-grid`: `d-md-inline-grid`, `d-lg-inline-grid`, `d-xl-inline-grid`
* `.display`: `display-md`, `display-lg`, `display-xl`

### Example

```html
<div>
	<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
	<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
	<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
</div>
```

<div class="example">
<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
<div class="d-block d-lg-inline-block w-full w-lg-initial border-1 border-grey-200 my-1 px-1 py-1">some content</div>
</div>


