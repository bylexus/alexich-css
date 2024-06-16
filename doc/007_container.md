## Page Positioning

### responsive max width container

On large screens, it is sometimes necessary to limit the width of the page to a certain max width, for better readability.
The `.container` class can be used to achieve that: It limits the max width of a container element based on the screen size.

#### Usage example

```html
<div class="container">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo id massa dictum luctus. 
		Nam at efficitur justo. Sed quis libero et libero eleifend dictum. Nunc et magna auctor, 
		sagittis elit nec, vehicula velit. Quisque auctor nisl et mauris scelerisque, in lacinia libero placerat. 
		Sed bibendum, erat ac fermentum ultrices, risus ante egestas lorem, vitae pellentesque lacus velit a dolor.
		 Nam in sapien sit amet purus facilisis suscipit. Maecenas eget sapien eget nisl commodo porta.
	</p>
</div>
```
<div class=" example container">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo id massa dictum luctus. 
		Nam at efficitur justo. Sed quis libero et libero eleifend dictum. Nunc et magna auctor, 
		sagittis elit nec, vehicula velit. Quisque auctor nisl et mauris scelerisque, in lacinia libero placerat. 
		Sed bibendum, erat ac fermentum ultrices, risus ante egestas lorem, vitae pellentesque lacus velit a dolor.
		 Nam in sapien sit amet purus facilisis suscipit. Maecenas eget sapien eget nisl commodo porta.
	</p>
</div>

### Sticky Element fixation

To keep an element in-sight, e.g. a navigation bar, you can use the `.sticky-top` and `.sticky-bottom` classes.

| CSS Class        | Description                                           | Example                                |
| ---------------- | ----------------------------------------------------- | -------------------------------------- |
| `.sticky-top`    | keeps the element in the page, at minimum at top 0    | `<div class="sticky-top">...</div>`    |
| `.sticky-bottom` | keeps the element in the page, at maximum at bottom 0 | `<div class="sticky-bottom">...</div>` |
