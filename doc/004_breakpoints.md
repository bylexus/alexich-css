## Media breakpoints

The framework uses a "mobile-first" or "bottom-up" approach. This means that the defined breakpoints
are applied when the minimim screen size is reached. The framework defines the following media breakpoints:

| Breakpoint Name                  | Shortcut | min-width | max-width |
| -------------------------------- | -------- | --------- | --------- |
| Small screens (phones)           | sm       | 0         | 480px     |
| Medium screens (tablets)         | md       | 481px     | 768px     |
| Large screens (laptops)          | lg       | 769px     | 1280px    |
| Very large screens (big screens) | xl       | 1281px    | Infinity  |


Unfortunately, media queries do not yet support CSS variables (yet), so if you want to use the breakpoint
values in media queries, you have to duplicate the values:

```css
/* Instead of (because not yet possible with CSS): */
@media screen and (min-width: var(--breakpoint-md)) {
  /* ...... */
}
/* you need to explicitely use the pixel value: */
/* medium size screen: */
@media screen and (min-width: 481px) {
  /* ...... */
}
```
