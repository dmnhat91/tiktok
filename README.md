# Requirements

1. Install library [customize cra](https://github.com/arackaf/customize-cra) to override webpack config

`npm i customize-cra react-app-rewired -D`

2. Install library [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) to import easier

For example:

```
// Use this:
import MyUtilFn from 'utils/MyUtilFn';
// Instead of that:
import MyUtilFn from '../../../../utils/MyUtilFn';

// And it also work with require calls
// Use this:
const MyUtilFn = require('utils/MyUtilFn');
// Instead of that:
const MyUtilFn = require('../../../../utils/MyUtilFn');
```

`npm install --save-dev babel-plugin-module-resolver`

For autocompletion inside jsconfig.json, we have the syntax `"@/*": ["src/*"]` this means, whenever you press @ it will be mapped to src, the asterisk wildcard represents all files.

3. Install library sass

`npm i -D sass`

4. Install [normalize.css](https://necolas.github.io/normalize.css/)

`npm install --save normalize.css`

5. Install React Router DOM

`npm i react-router-dom`
