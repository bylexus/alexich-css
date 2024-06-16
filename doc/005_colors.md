## Colors

The library defines a set of color shades. I have not invented the colors by myself,
I took the inspiration from  [Pico CSS ✨](https://picocss.com).

All the color values are defined as CSS custom properties, and a set of text- and background color classes:

* Custom color properties naming scheme: Each color consists of a base name, and shade, ranging from 50 to 950 (50-step increment):
  * variable naming Scheme: `--color-base(-shade)`
  * Examples: `--color-slate`, `--color-slate-350`
* Each color also has a text color class:
  * class naming Scheme: `.color-base(-shade)`
  * Examples: `.color-slate`, `.color-slate-350`
* Each color also has a background color class:
  * class naming Scheme: `.background-base(-shade)`
  * Examples: `.background-slate`, `.background-slate-350`

### Usage example

in HTML:

```html
<div class="background-slate-350">...</div>
```

in CSS:

```css
.error {
    background-color: var(--color-red-500);
}
```

### Available colors

<table>
<thead>
<tr>
<th>Color</th>
<th>base</th>
<th>50</th>
<th>100</th>
<th>150</th>
<th>200</th>
<th>250</th>
<th>300</th>
<th>350</th>
<th>400</th>
<th>450</th>
<th>500</th>
<th>550</th>
<th>600</th>
<th>650</th>
<th>700</th>
<th>750</th>
<th>800</th>
<th>850</th>
<th>900</th>
<th>950</th>

</tr>
</thead>
<tbody>
<tr>
    <td>red</td>
    <td><div class="colorprev" style="background-color:var(--color-red)" title="--color-red"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-50)" title="--color-red-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-100)" title="--color-red-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-150)" title="--color-red-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-200)" title="--color-red-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-250)" title="--color-red-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-300)" title="--color-red-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-350)" title="--color-red-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-400)" title="--color-red-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-450)" title="--color-red-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-500)" title="--color-red-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-550)" title="--color-red-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-600)" title="--color-red-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-650)" title="--color-red-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-700)" title="--color-red-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-750)" title="--color-red-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-800)" title="--color-red-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-850)" title="--color-red-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-900)" title="--color-red-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-red-950)" title="--color-red-950"></div></td>
</tr>
<tr>
    <td>pink</td>
    <td><div class="colorprev" style="background-color:var(--color-pink)" title="--color-pink"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-50)" title="--color-pink-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-100)" title="--color-pink-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-150)" title="--color-pink-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-200)" title="--color-pink-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-250)" title="--color-pink-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-300)" title="--color-pink-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-350)" title="--color-pink-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-400)" title="--color-pink-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-450)" title="--color-pink-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-500)" title="--color-pink-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-550)" title="--color-pink-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-600)" title="--color-pink-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-650)" title="--color-pink-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-700)" title="--color-pink-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-750)" title="--color-pink-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-800)" title="--color-pink-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-850)" title="--color-pink-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-900)" title="--color-pink-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pink-950)" title="--color-pink-950"></div></td>
</tr>
<tr>
    <td>fuchsia</td>
    <td><div class="colorprev" style="background-color:var(--color-fuchsia)" title="--color-fuchsia"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-50)" title="--color-fuchsia-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-100)" title="--color-fuchsia-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-150)" title="--color-fuchsia-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-200)" title="--color-fuchsia-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-250)" title="--color-fuchsia-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-300)" title="--color-fuchsia-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-350)" title="--color-fuchsia-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-400)" title="--color-fuchsia-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-450)" title="--color-fuchsia-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-500)" title="--color-fuchsia-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-550)" title="--color-fuchsia-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-600)" title="--color-fuchsia-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-650)" title="--color-fuchsia-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-700)" title="--color-fuchsia-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-750)" title="--color-fuchsia-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-800)" title="--color-fuchsia-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-850)" title="--color-fuchsia-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-900)" title="--color-fuchsia-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-fuchsia-950)" title="--color-fuchsia-950"></div></td>
</tr>
<tr>
    <td>purple</td>
    <td><div class="colorprev" style="background-color:var(--color-purple)" title="--color-purple"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-50)" title="--color-purple-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-100)" title="--color-purple-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-150)" title="--color-purple-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-200)" title="--color-purple-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-250)" title="--color-purple-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-300)" title="--color-purple-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-350)" title="--color-purple-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-400)" title="--color-purple-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-450)" title="--color-purple-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-500)" title="--color-purple-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-550)" title="--color-purple-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-600)" title="--color-purple-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-650)" title="--color-purple-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-700)" title="--color-purple-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-750)" title="--color-purple-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-800)" title="--color-purple-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-850)" title="--color-purple-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-900)" title="--color-purple-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-purple-950)" title="--color-purple-950"></div></td>
</tr>
<tr>
    <td>violet</td>
    <td><div class="colorprev" style="background-color:var(--color-violet)" title="--color-violet"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-50)" title="--color-violet-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-100)" title="--color-violet-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-150)" title="--color-violet-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-200)" title="--color-violet-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-250)" title="--color-violet-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-300)" title="--color-violet-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-350)" title="--color-violet-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-400)" title="--color-violet-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-450)" title="--color-violet-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-500)" title="--color-violet-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-550)" title="--color-violet-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-600)" title="--color-violet-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-650)" title="--color-violet-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-700)" title="--color-violet-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-750)" title="--color-violet-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-800)" title="--color-violet-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-850)" title="--color-violet-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-900)" title="--color-violet-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-violet-950)" title="--color-violet-950"></div></td>
</tr>
<tr>
    <td>indigo</td>
    <td><div class="colorprev" style="background-color:var(--color-indigo)" title="--color-indigo"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-50)" title="--color-indigo-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-100)" title="--color-indigo-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-150)" title="--color-indigo-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-200)" title="--color-indigo-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-250)" title="--color-indigo-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-300)" title="--color-indigo-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-350)" title="--color-indigo-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-400)" title="--color-indigo-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-450)" title="--color-indigo-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-500)" title="--color-indigo-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-550)" title="--color-indigo-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-600)" title="--color-indigo-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-650)" title="--color-indigo-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-700)" title="--color-indigo-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-750)" title="--color-indigo-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-800)" title="--color-indigo-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-850)" title="--color-indigo-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-900)" title="--color-indigo-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-indigo-950)" title="--color-indigo-950"></div></td>
</tr>
<tr>
    <td>blue</td>
    <td><div class="colorprev" style="background-color:var(--color-blue)" title="--color-blue"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-50)" title="--color-blue-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-100)" title="--color-blue-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-150)" title="--color-blue-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-200)" title="--color-blue-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-250)" title="--color-blue-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-300)" title="--color-blue-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-350)" title="--color-blue-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-400)" title="--color-blue-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-450)" title="--color-blue-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-500)" title="--color-blue-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-550)" title="--color-blue-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-600)" title="--color-blue-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-650)" title="--color-blue-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-700)" title="--color-blue-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-750)" title="--color-blue-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-800)" title="--color-blue-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-850)" title="--color-blue-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-900)" title="--color-blue-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-blue-950)" title="--color-blue-950"></div></td>
</tr>
<tr>
    <td>azure</td>
    <td><div class="colorprev" style="background-color:var(--color-azure)" title="--color-azure"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-50)" title="--color-azure-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-100)" title="--color-azure-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-150)" title="--color-azure-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-200)" title="--color-azure-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-250)" title="--color-azure-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-300)" title="--color-azure-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-350)" title="--color-azure-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-400)" title="--color-azure-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-450)" title="--color-azure-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-500)" title="--color-azure-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-550)" title="--color-azure-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-600)" title="--color-azure-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-650)" title="--color-azure-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-700)" title="--color-azure-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-750)" title="--color-azure-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-800)" title="--color-azure-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-850)" title="--color-azure-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-900)" title="--color-azure-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-azure-950)" title="--color-azure-950"></div></td>
</tr>
<tr>
    <td>cyan</td>
    <td><div class="colorprev" style="background-color:var(--color-cyan)" title="--color-cyan"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-50)" title="--color-cyan-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-100)" title="--color-cyan-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-150)" title="--color-cyan-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-200)" title="--color-cyan-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-250)" title="--color-cyan-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-300)" title="--color-cyan-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-350)" title="--color-cyan-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-400)" title="--color-cyan-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-450)" title="--color-cyan-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-500)" title="--color-cyan-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-550)" title="--color-cyan-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-600)" title="--color-cyan-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-650)" title="--color-cyan-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-700)" title="--color-cyan-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-750)" title="--color-cyan-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-800)" title="--color-cyan-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-850)" title="--color-cyan-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-900)" title="--color-cyan-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-cyan-950)" title="--color-cyan-950"></div></td>
</tr>
<tr>
    <td>jade</td>
    <td><div class="colorprev" style="background-color:var(--color-jade)" title="--color-jade"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-50)" title="--color-jade-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-100)" title="--color-jade-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-150)" title="--color-jade-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-200)" title="--color-jade-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-250)" title="--color-jade-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-300)" title="--color-jade-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-350)" title="--color-jade-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-400)" title="--color-jade-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-450)" title="--color-jade-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-500)" title="--color-jade-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-550)" title="--color-jade-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-600)" title="--color-jade-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-650)" title="--color-jade-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-700)" title="--color-jade-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-750)" title="--color-jade-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-800)" title="--color-jade-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-850)" title="--color-jade-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-900)" title="--color-jade-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-jade-950)" title="--color-jade-950"></div></td>
</tr>
<tr>
    <td>green</td>
    <td><div class="colorprev" style="background-color:var(--color-green)" title="--color-green"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-50)" title="--color-green-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-100)" title="--color-green-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-150)" title="--color-green-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-200)" title="--color-green-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-250)" title="--color-green-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-300)" title="--color-green-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-350)" title="--color-green-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-400)" title="--color-green-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-450)" title="--color-green-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-500)" title="--color-green-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-550)" title="--color-green-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-600)" title="--color-green-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-650)" title="--color-green-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-700)" title="--color-green-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-750)" title="--color-green-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-800)" title="--color-green-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-850)" title="--color-green-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-900)" title="--color-green-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-green-950)" title="--color-green-950"></div></td>
</tr>
<tr>
    <td>lime</td>
    <td><div class="colorprev" style="background-color:var(--color-lime)" title="--color-lime"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-50)" title="--color-lime-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-100)" title="--color-lime-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-150)" title="--color-lime-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-200)" title="--color-lime-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-250)" title="--color-lime-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-300)" title="--color-lime-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-350)" title="--color-lime-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-400)" title="--color-lime-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-450)" title="--color-lime-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-500)" title="--color-lime-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-550)" title="--color-lime-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-600)" title="--color-lime-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-650)" title="--color-lime-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-700)" title="--color-lime-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-750)" title="--color-lime-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-800)" title="--color-lime-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-850)" title="--color-lime-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-900)" title="--color-lime-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-lime-950)" title="--color-lime-950"></div></td>
</tr>
<tr>
    <td>yellow</td>
    <td><div class="colorprev" style="background-color:var(--color-yellow)" title="--color-yellow"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-50)" title="--color-yellow-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-100)" title="--color-yellow-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-150)" title="--color-yellow-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-200)" title="--color-yellow-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-250)" title="--color-yellow-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-300)" title="--color-yellow-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-350)" title="--color-yellow-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-400)" title="--color-yellow-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-450)" title="--color-yellow-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-500)" title="--color-yellow-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-550)" title="--color-yellow-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-600)" title="--color-yellow-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-650)" title="--color-yellow-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-700)" title="--color-yellow-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-750)" title="--color-yellow-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-800)" title="--color-yellow-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-850)" title="--color-yellow-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-900)" title="--color-yellow-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-yellow-950)" title="--color-yellow-950"></div></td>
</tr>
<tr>
    <td>amber</td>
    <td><div class="colorprev" style="background-color:var(--color-amber)" title="--color-amber"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-50)" title="--color-amber-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-100)" title="--color-amber-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-150)" title="--color-amber-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-200)" title="--color-amber-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-250)" title="--color-amber-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-300)" title="--color-amber-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-350)" title="--color-amber-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-400)" title="--color-amber-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-450)" title="--color-amber-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-500)" title="--color-amber-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-550)" title="--color-amber-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-600)" title="--color-amber-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-650)" title="--color-amber-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-700)" title="--color-amber-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-750)" title="--color-amber-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-800)" title="--color-amber-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-850)" title="--color-amber-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-900)" title="--color-amber-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-amber-950)" title="--color-amber-950"></div></td>
</tr>
<tr>
    <td>pumpkin</td>
    <td><div class="colorprev" style="background-color:var(--color-pumpkin)" title="--color-pumpkin"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-50)" title="--color-pumpkin-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-100)" title="--color-pumpkin-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-150)" title="--color-pumpkin-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-200)" title="--color-pumpkin-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-250)" title="--color-pumpkin-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-300)" title="--color-pumpkin-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-350)" title="--color-pumpkin-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-400)" title="--color-pumpkin-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-450)" title="--color-pumpkin-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-500)" title="--color-pumpkin-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-550)" title="--color-pumpkin-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-600)" title="--color-pumpkin-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-650)" title="--color-pumpkin-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-700)" title="--color-pumpkin-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-750)" title="--color-pumpkin-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-800)" title="--color-pumpkin-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-850)" title="--color-pumpkin-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-900)" title="--color-pumpkin-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-pumpkin-950)" title="--color-pumpkin-950"></div></td>
</tr>
<tr>
    <td>orange</td>
    <td><div class="colorprev" style="background-color:var(--color-orange)" title="--color-orange"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-50)" title="--color-orange-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-100)" title="--color-orange-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-150)" title="--color-orange-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-200)" title="--color-orange-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-250)" title="--color-orange-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-300)" title="--color-orange-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-350)" title="--color-orange-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-400)" title="--color-orange-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-450)" title="--color-orange-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-500)" title="--color-orange-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-550)" title="--color-orange-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-600)" title="--color-orange-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-650)" title="--color-orange-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-700)" title="--color-orange-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-750)" title="--color-orange-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-800)" title="--color-orange-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-850)" title="--color-orange-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-900)" title="--color-orange-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-orange-950)" title="--color-orange-950"></div></td>
</tr>
<tr>
    <td>sand</td>
    <td><div class="colorprev" style="background-color:var(--color-sand)" title="--color-sand"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-50)" title="--color-sand-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-100)" title="--color-sand-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-150)" title="--color-sand-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-200)" title="--color-sand-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-250)" title="--color-sand-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-300)" title="--color-sand-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-350)" title="--color-sand-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-400)" title="--color-sand-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-450)" title="--color-sand-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-500)" title="--color-sand-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-550)" title="--color-sand-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-600)" title="--color-sand-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-650)" title="--color-sand-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-700)" title="--color-sand-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-750)" title="--color-sand-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-800)" title="--color-sand-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-850)" title="--color-sand-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-900)" title="--color-sand-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-sand-950)" title="--color-sand-950"></div></td>
</tr>
<tr>
    <td>grey</td>
    <td><div class="colorprev" style="background-color:var(--color-grey)" title="--color-grey"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-50)" title="--color-grey-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-100)" title="--color-grey-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-150)" title="--color-grey-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-200)" title="--color-grey-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-250)" title="--color-grey-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-300)" title="--color-grey-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-350)" title="--color-grey-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-400)" title="--color-grey-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-450)" title="--color-grey-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-500)" title="--color-grey-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-550)" title="--color-grey-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-600)" title="--color-grey-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-650)" title="--color-grey-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-700)" title="--color-grey-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-750)" title="--color-grey-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-800)" title="--color-grey-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-850)" title="--color-grey-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-900)" title="--color-grey-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-grey-950)" title="--color-grey-950"></div></td>
</tr>
<tr>
    <td>zinc</td>
    <td><div class="colorprev" style="background-color:var(--color-zinc)" title="--color-zinc"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-50)" title="--color-zinc-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-100)" title="--color-zinc-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-150)" title="--color-zinc-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-200)" title="--color-zinc-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-250)" title="--color-zinc-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-300)" title="--color-zinc-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-350)" title="--color-zinc-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-400)" title="--color-zinc-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-450)" title="--color-zinc-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-500)" title="--color-zinc-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-550)" title="--color-zinc-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-600)" title="--color-zinc-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-650)" title="--color-zinc-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-700)" title="--color-zinc-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-750)" title="--color-zinc-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-800)" title="--color-zinc-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-850)" title="--color-zinc-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-900)" title="--color-zinc-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-zinc-950)" title="--color-zinc-950"></div></td>
</tr>
<tr>
    <td>slate</td>
    <td><div class="colorprev" style="background-color:var(--color-slate)" title="--color-slate"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-50)" title="--color-slate-50"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-100)" title="--color-slate-100"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-150)" title="--color-slate-150"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-200)" title="--color-slate-200"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-250)" title="--color-slate-250"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-300)" title="--color-slate-300"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-350)" title="--color-slate-350"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-400)" title="--color-slate-400"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-450)" title="--color-slate-450"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-500)" title="--color-slate-500"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-550)" title="--color-slate-550"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-600)" title="--color-slate-600"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-650)" title="--color-slate-650"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-700)" title="--color-slate-700"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-750)" title="--color-slate-750"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-800)" title="--color-slate-800"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-850)" title="--color-slate-850"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-900)" title="--color-slate-900"></div></td>
<td><div class="colorprev" style="background-color:var(--color-slate-950)" title="--color-slate-950"></div></td>
</tr>
<tr>
    <td>light</td>
    <td><div class="colorprev" style="background-color:var(--color-light)" title="--color-light"></div></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td></tr>
<tr>
    <td>dark</td>
    <td><div class="colorprev" style="background-color:var(--color-dark)" title="--color-dark"></div></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td></tr>
</tbody>
</table>
