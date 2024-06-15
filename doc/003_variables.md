## Customization: CSS variables

The library makes heavy use of CSS custom properties, aka "variables". You can
override them as needed to make changes to the defaults:

```css
:root {
  --container-max-width: 800px;
}
```

### defined variables


| Variable                | Default value                                              | Description                                                      |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| `--container-max-width` | sm: `unset`<br>md: `960px`<br>lg: `1024px`<br>xl: `1280px` | Sets the maximum width of the `.container` element               |
| `--grid-gap`            | sm: `8px`<br>lg: `12px`<br>xl: `16px`                      | The gap between cols of the grid layout system                   |
| `--gap-base`            | 0.25rem                                                    | base size for the `gap-*` classes (`.gap-1` uses the base value) |
| `--icon-size`           | 1rem                                                       | The standard svg icon size used with the `.ic` class             |
| `--icon-color`          | black                                                      | The standard svg icon color used with the `.ic` class            |
| `--font-family`         | sans-serif                                                 | standard document font family                                    |
| `--font-size`         | 1em                                                 | default body font size |
| `--line-height`         | 1.5em                                                 | default line-height for all elements |
