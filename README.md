# Bootstrap 5 

## Notable changes
### Breaking Changes
1. Renaming of all `left` & `right` classes to `start` & `end` respectively
    - This means `ml`, `mr` becomes `ms`, `me`
    - `text-left`, `text-right` becomes `text-start`, `text-end`
    - `pl`, `pr` becomes `ps`, `pe`
    - breakpoint-specific variants are also renamed, `text-md-left` becomes `text-md-start`
    - **IMPORTANT**
        - means that even dropdown menus are affected
        - `.dropleft` becomes `.dropstart`
        - `.dropright` becomes `.dropend`

2. Some classes have been renamed to become more succinct
    - `font-weight-*` becomes `fw-*`
    - `font-style-*` becomes `fst-*`

3. Close buttons
    - Important because htis 
    - renamed `.close` to `.btn-close` for less generic name    
  
So sometimes when you try to apply a class in BS5 that previously worked in BS4, there is high chance that the class name has changed.  
Good news is that the BS5 documentation is a lot better so it's not difficult to search up the appropriate class for what you're trying to do.  

4. Forms
    - `.form-group` is now dropped. It will no longer be in use in favor of spacing utility classes like mb-3, etc.

```
<!-- // Bootstrap 4 -->
<div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="...">
</div>

<!-- // Bootstrap 5 -->
<div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="...">
</div>
```

    - `.input-group-append` and `.input-group-prepend` removed.
    - so now we can just add buttons and `.input-group-text` as children of the input-groups

For example, previously to create this:
/Users/xianjinseow/Desktop/Screenshot 2021-01-26 at 2.46.16 PM.png

<!-- // Bootstrap 4 -->
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>

<!-- // Bootstrap 5 -->
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

5. Navbars
- Navbar needs a `.container` now
- From Bootstrap 5, All navbars now require a container within. This drastically simplifies spacing requirements and removes the need for extensive CSS overrides we added for responsive containers in v4

<!-- // Bootstrap 4 -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>

<!-- // Bootstrap 5 -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

6. Namespaced data attributes
- Bootstrap HTML attributes to enable javacsript behaviors.
- In BS5, all attributes renamed from `data-*` to `data-bs-*`
    - so this will break any `data-toggle"`, `data-target`, `data-dismiss` attributes on our 
        - modals
        - accordians 
        - navbars (when screen width becomes to small and navbar becomes a vertical collapsible button instead)
        - nav-tab & tab-content, etc.
    - this is quite a huge breaking change but moving foward this will keep attribute-naming of Bootstrap separate from any other libraries that we want to use


### Welcome changes
1. New`.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

2. Way more updated things in the BS5 document. Not everythinig is covered here, just the signficant ones of which we might use on a day-to-day basis.
    - So for more specific cases, please refer to BS5 documentation.





## Jala-specific changes
### Buttons
Jala now has customized styled buttons, including their disabled states. 
The three main buttons used and how they look can be found in the following <a href="https://www.figma.com/file/9xr58onGz7aG9bs03zJ8SJ/Developers-Admin-3.0?node-id=382%3A36365">figma link</a>


1. Primary buttons
<button class="btn btn-primary">
<button class="btn btn-primary disabled">


2. Secondary buttons
<button class="btn btn-outline-dark">
<button class="btn btn-outline-dark disabled">


3. Tertiary buttons
<button class="btn btn-link">
<button class="btn btn-link disabled">


### Custom Icons
There are custom icons that jala admin uses because fontawesome is not shippped with these icons.  
They are webfonts so we can use them as per how fontawesome icons are used (can be colored, styled, change size via font-size).  

- All these icons can be found in the figma file: https://www.figma.com/file/9xr58onGz7aG9bs03zJ8SJ/Developers-Admin-3.0?node-id=1299%3A123637   
- All these icons' classes can be found in the folder (jala-v2/jala-admin/src/sass/_custom-icons.scss), and the class names are similar to the names of the icons in the figma file above.

Note: 
Must use `<span></span>`, instead of our usual `<i></i>` elements

Example usage:
<span class="icon-ji-unflag"></span>


Some of these icons have disabled versions, of which we will append a `-disabled` to the end of the base icon class, as demonstrated below.
<span class="icon-ji-comment"></span>
<span class="icon-ji-comment-disabled"></span>

### Spacing Utilities
To facilitate a more intuitive use of spacing utilities as per typical padding / margin spacings in jala, the number appended to the padding / margin class has been changed to reflect the actual pixel value to be applied.

Previously:
ml-5 -> margin-left: 30px;

Currently
ms-30 -> margin-left: 30px;  

These pixel values increase in multiples of 5 all the way to 100, and these classes can be customized (should it be necessary) by simply changing the `$custom-padding-margin-spacers` map in jala-v2/jala-admin/src/sass/_custom-variables.scss


### Cursor Classes
Classes are named using the format `{property}-{propertyValue}` for xs and `{property}-{breakpoint}-{propertyValue}` for sm, md, lg, xl and xxl.
Where _property_ is:
- cursor for applying cursor properties

Where _propertyValue_ is one of:
`$cursor-values: alias all-scroll auto cell context-menu col-resize copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize ns-resize nw-resize nwse-resize no-drop none not-allowed pointer progress row-resize s-resize se-resize sw-resize text url w-resize wait zoom-in zoom-out`

This variable can be found in `jala-v2/jala-admin/src/sass/_custom-variables.scss`


<div class="cursor-pointer"> Click me! </div>
<div class="cursor-grab"> I can be grabbed! </div>

These cursor classes also come with responsive variations.  

<div class="cursor-md-pointer"> I'm only a pointer at above md: 768px screen sizes! </div>
<div class="cursor-xxl-grab"> I'm only a grab cursor at above xxl: 1400px screen sizes! </div>



### Overflow Classes
Classes are named using the format `{property}-{propertyValue}` for xs and `{property}-{breakpoint}-{propertyValue}` for sm, md, lg, xl and xxl.
Where _property_ is:
- of for applying overflow 
- of-x for applying overflow in x-direction
- of-y for applying overflow in y-direction

Where _propertyValue_ is one of:
`$overflow-values: scroll hidden auto visible initial inherit;`

This variable can be found in `jala-v2/jala-admin/src/sass/_custom-variables.scss`

Example Usage:
**Overflow**

<div class="of-scroll" style="width: 100px; height: 100px;"> Scroll <br><br><br><br><br> is enabled if content overflows </div>
<div class="of-hidden" style="width: 100px; height: 100px;"> You can see this <br><br><br><br><br> but not this </div>

These overflow classes also come with responsive variations.

<div class="of-lg-scroll" style="width: 100px; height: 100px;"> Scroll <br><br><br><br><br> is enabled if content overflows </div>
<div class="of-xxl-hidden" style="width: 100px; height: 100px;"> You can see this <br><br><br><br><br> but not this </div>


**Overflow-x / Overflow-y**

<div class="of-x-scroll" style="width: 100px; height: 100px;"> Scroll <br><br><br><br><br> is enabled if content overflows </div>
<div class="of-x-xxl-hidden" style="width: 100px; height: 100px;"> You can see this <br><br><br><br><br> but not this </div>

<div class="of-y-scroll" style="width: 100px; height: 100px;"> Scroll <br><br><br><br><br> is enabled if content overflows </div>
<div class="of-y-xxl-hidden" style="width: 100px; height: 100px;"> You can see this <br><br><br><br><br> but not this </div>


### Object Fit Classes
Classes are named using the format `{property}-{propertyValue}` for xs and `{property}-{breakpoint}-{propertyValue}` for sm, md, lg, xl and xxl.
Where _property_ is:
- o-f for applying object-fit 

Where _propertyValue_ is one of:
- `$object-fit-values: fill contain cover scale-down none;`

Example usage:

<img [src]="project.bannerImageUrl" class="o-f-cover" onError="this.src='../../assets/images/fallback_image_blog.svg'" />

These Object-Fit classes also come with responsive variations.

<img [src]="project.bannerImageUrl" class="o-f-lg-cover" onError="this.src='../../assets/images/fallback_image_blog.svg'" />



### Sizing 
#### Width and Height classes
Classes are named using the format `{property}-{size}` for xs and `{property}-{breakpoint}-{size}` for sm, md, lg, xl and xxl.
Where _property_ is one of:
- h - for classes that set height
- w - for classes that set width

Where _size_ represents percentage which ranges from:
- 5 to 100, increments of 5

Example usage:

<div class="w-25">There is some content here</div>
<div class="w-100">There is some content here</div>
<div class="w-md-50">There is some content here</div>

<div class="h-25">There is some content here</div>
<div class="h-100">There is some content here</div>
<div class="h-md-50">There is some content here</div>


### Whitespace
Classes are named using the format `{property}-{propertyValue}`. There are no breakpoint responsive classes for whitespace
Where _property_ is:
- w-s for classes that set white-space

Where _propertyValue_ is:
`$white-space-values: normal nowrap pre pre-line pre-wrap initial inherit;`



## Future Classes and changes to be done
1. Font-sizing utility classes customized to jala layout
2. Line-height utility classes customized to jala layout
3. Custom styling for 
    - input:text
    - modal padding and margins
    - custom toasts