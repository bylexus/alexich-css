## Text helper classes

### Text alignment

| CSS Class      | Description                           | Example                                        |
| -------------- | ------------------------------------- | ---------------------------------------------- |
| `.text-left`   | Align text to the left                | `<p class="text-left">...</p>`                 |
| `.text-center` | Align text to the center              | `<p class="text-center">...</p>`               |
| `.text-right`  | Align text to the right               | `<p class="text-right">...</p>`                |

#### Example

```html
<div class="text-left">left aligned</div>
<div class="text-center">center aligned</div>
<div class="text-right">right aligned</div>
```

<div class="example">
<div class="text-left border-1 border-grey-200 my-1 px-1 py-1">left aligned</div>
<div class="text-center border-1 border-grey-200 my-1 px-1 py-1">center aligned</div>
<div class="text-right border-1 border-grey-200 my-1 px-1 py-1">right aligned</div>
</div>

### Out-of-band floating

| CSS Class      | Description                           | Example                                        |
| -------------- | ------------------------------------- | ---------------------------------------------- |
| `.float-left`  | out-of-band floating left             | `<p><img class="float-left" src="...">...</p>` |
| `.float-clear` | pushes content below floating element | `<div class="float-clear">...</div>`           |

#### Example

```html
<p>
<div class="float-right background-red mx-2" style="width:100px; height:100px"></div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo id massa dictum luctus. 
Nam at efficitur justo. Sed quis libero et libero eleifend dictum. 
Nunc et magna auctor, sagittis elit nec, vehicula velit. 
Quisque auctor nisl et mauris scelerisque, in lacinia libero placerat. 
Sed bibendum, erat ac fermentum ultrices, risus ante egestas lorem, vitae pellentesque lacus velit a dolor. 
Nam in sapien sit amet purus facilisis suscipit. Maecenas eget sapien eget nisl commodo porta.</p>
<p class="float-clear">Below the float</p>
```

<div class="example">
<p>
<div class="float-right background-red mx-2" style="width:100px; height:100px"></div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo id massa dictum luctus. Nam at efficitur justo. Sed quis libero et libero eleifend dictum. Nunc et magna auctor, sagittis elit nec, vehicula velit. Quisque auctor nisl et mauris scelerisque, in lacinia libero placerat. Sed bibendum, erat ac fermentum ultrices, risus ante egestas lorem, vitae pellentesque lacus velit a dolor. Nam in sapien sit amet purus facilisis suscipit. Maecenas eget sapien eget nisl commodo porta.</p>
<p class="float-clear">Below the float</p>
</div>