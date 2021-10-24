# Vue 3 with PHP API

This repo comes to give the ability to have PHP language as API. The logic is, once user **logged in**, at server side, API sets a `$_SESSION` variable  

```php
$_SESSION['user'] = 'admin';
```

and response **true** to client. The logic on PHP files is a skeleton, developer has to implement his logic involving database and users.  

At client side nothing stored, always at **router** on `router.beforeEach` event, asking the API if the user is valid as :

```php
if (isset($_SESSION['user'])) {
    $status = true;
} else {
    $status = false;
}
```

Of course this validation has to be carried to all PHP project files.  

&nbsp;  

## instructions
-----  

for development purposes, to have simultaneously the 
* Node development server
* Apache  

talking together, aka **Vue calls** going to **Apache server**. Vue has a **proxy** feature, by declaring it to `vue.config.js` (is near `package.json`).  So here we have said, any call made to **api path** redirect it to **localhost** (80).
```ts
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost',
      }
    }
  }
}
```
with this configuration if Vue asks `'api/auth.php'`, will go to `http://localhost:80/api/auth.php`.  

**Not working** with PHP debug server `php.exe -S localhost:80 -t ../htdocs/` needs apache / nginx, the latter is not tested.  

&nbsp;  

# This project uses the following nodeJS dependencies :
```
[global]
+-- @vue/cli@4.5.14
`-- npm@6.14.12

[local]
+-- @vue/cli-plugin-babel@4.5.14
+-- @vue/cli-plugin-eslint@4.5.14
+-- @vue/cli-service@4.5.14
+-- babel-eslint@10.1.0
+-- bootstrap@5.1.3
+-- core-js@3.18.3
+-- eslint@6.8.0
+-- eslint-plugin-vue@6.2.2
+-- vue@2.6.14
+-- vue-router@3.5.2
`-- vue-template-compiler@2.6.14
```
&nbsp;  
PROD compilation (`dist` folder) - 324kb

&nbsp;  
### new to vue ?  
* [John Papa – Getting Started](http://pluralsight.pxf.io/1Qrod)  
* [John Papa – Fundamentals and Best Practices](https://www.youtube.com/watch?v=KkbcoUrHBZw)  

&nbsp;  

-----  

&nbsp;  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

&nbsp;  

-----  

&nbsp;  

```js
node-v10.24.1-win-x64

//install to global | guide - https://cli.vuejs.org/guide/
npm install -g @vue/cli

//create a project with defaults
vue create sagiko -d

//go to project dir and execute
npm run serve
http://localhost:8080/

//install dependencies
npm install bootstrap
npm install vue-router

//build for PROD
npm run build

//VSCODE - Vetur extension (must have)
https://code.visualstudio.com/docs/nodejs/vuejs-tutorial

//list packages installed
	//global
		npm list -g --depth=0
	//current dir
		npm list --depth=0

========================INDICATORS
https://www.npmjs.com/package/vue-loading-overlay
https://www.npmjs.com/package/vue-spinner (REACT replica)

error  'v-model' directives require no argument  vue/valid-v-model
https://stackoverflow.com/q/65032715


uninstall with 
npm uninstall vue-loading-overlay
========================

//tsconfig.json (not required)
https://vuejs.github.io/vetur/guide/setup.html#project-setup

//.eslintrc.js (not required, I think after that the server is going faster)
https://dev.to/ferasdawod/setting-up-eslint-for-a-vuejs-project-using-vs-code-i54

//if you like to load a local js file, sits on assets folder
import BootstrapTable from '../assets/bootstrap-table-vue.min.js';

//(not recommended) if for any reason you like to include jQuery (not recommended)
-use the casual HTML way with <script> tag at public\index.html
-edit .eslintrc.js add 
module.exports = {
  globals: {
    "$": true,
    "jQuery": true
  },
```

&nbsp;  
 
same idea for [angular2](https://github.com/pipiscrew/angular2_small_prjs/tree/master/angular8_simplified_retain_PHPSessionCookie)  

&nbsp;  

-----  

&nbsp; 
## This project is no longer maintained  

Copyright (c) 2021 [PipisCrew](http://pipiscrew.com)

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).