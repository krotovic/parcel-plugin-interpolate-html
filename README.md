# parcel-plugin-interpolate-html

Parcel plugin that interpolates ENV in HTML files

## Installation

`yarn add --dev parcel-plugin-interpolate-html`  
or  
`npm i -d parcel-plugin-interpolate-html`

_Attention: parcel-bundler has to be installed_

## Usage

There is no need to enable the plugin in any configuration file. If you want to use it you can do so after installing.  
You have to escape the ENV with %% around it e.g. `%example%`.

### Example

_**index.html**_

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>%title%</title>
  </head>
</html>
```

_**.env**_

```
title=Example
```

_**run it**_  
`parcel index.html`

_**output**_

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
  </head>
</html>
```
