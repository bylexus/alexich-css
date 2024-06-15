## Media breakpoints

The framework uses a "mobile-first" or "bottom-up" approach. This means that the defined breakpoints
are applied when the minimim screen size is reached. The framework defines the following media breakpoints:

* Small screens (sm), e.g. phones: <= 480px
* Medium screens (md), e.g. tablets: > 480px, <= 768px
* Large screens (lg), e.g. laptops: > 768px, <= 1280px
* Very large screens (xl), e.g. big screens: > 1280px

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
