# Vue 2 with PHP API

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
### proxy  
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
### deploy to real server, sub folder  
Most of the times, on server, uploading the compiled project to a **subfolder**. This subfolder has to be declared to `.env.production`, underneath this variable used at :
* router.js - `base: process.env.VUE_APP_BASE_URL`  
* vue.config.js - `publicPath: process.env.VUE_APP_BASE_URL`

attention when you adjusting the **.env files** most possible is when you going for **build** or **serve**, you end up with an error :  
```js
\router.js - 30:9  error  'process' is not defined  no-undef
```

the **workaround** is to close the DOS window, reopen it, re execute the same command, no erorrs will appear.

the **permanent fix** is to use `vue-cli-service build --mode production`  

&nbsp;  
### use sub folder for API

The solution is to **hardcode** the host, on the following files,  

`.env`  
`.env.production`  

should add the a new **key** example `VUE_APP_ROOT_API`  

```ts
//FOR DEBUG (.env)
VUE_APP_BASE_URL=/
VUE_APP_ROOT_API=http://localhost:8080/

//FOR PROD (.env.production)
VUE_APP_BASE_URL=/vas/
VUE_APP_ROOT_API=http://domain.com/vas/
```

the above configuration instract :  
* when **debug** to use the **htdocs** (proxy to localhost will continue work)   
* when **PROD** to use folder **vas**  

then on Vue files all **API calls** should be adjusted from  

```ts
GetData("/api/xxxxAPI.php", formData);
```

to 

```ts
GetData(process.env.VUE_APP_ROOT_API + "api/xxxxAPI.php", formData);
```



&nbsp; 

-----  

&nbsp;  

# PHP Session expiration setup

The configuration primarly should be done on php.ini, we can use `ini_set` function to set it on runtime.

```php
<?php

//prior v7
//https://stackoverflow.com/a/24350918/1320686
ini_set('session.cookie_lifetime', 86400);
ini_set('session.gc_maxlifetime', 86400);

sesion_start(); //https://www.php.net/manual/en/function.session-start.php


//v7 and later
//https://stackoverflow.com/a/53485125/1320686
session_start([
    'cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400
]);
```

&nbsp;  
86400 = represents 24h, value is in seconds.  
&nbsp;  
[session.cookie_lifetime](https://www.php.net/manual/en/session.configuration.php#ini.session.cookie-lifetime) specifies the lifetime of the cookie in seconds which is sent to the browser.  

&nbsp;  
[session.gc_maxlifetime](https://www.php.net/manual/en/session.configuration.php#ini.session.gc-maxlifetime) specifies the number of seconds after which data will be seen as 'garbage' and potentially cleaned up. Garbage collection may occur during session start  

&nbsp;  

-----  

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
 
same idea for [angular8](https://github.com/pipiscrew/angular2_small_prjs/tree/master/angular8_simplified_retain_PHPSessionCookie)  

same idea by [Nicolas Tinte](https://medium.com/neocoast/vue-protect-your-routes-from-intruders-2b77b0d10571)  

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
vue add vuetify

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

//.eslintrc.js (not required, I think after that the serve is going faster)
https://dev.to/ferasdawod/setting-up-eslint-for-a-vuejs-project-using-vs-code-i54

//if you like to load a local js file, sits on assets folder
import BootstrapTable from '../assets/bootstrap-table-vue.min.js';
//must include as - https://vuejs.github.io/vetur/guide/setup.html#project-setup


//(not recommended) if for any reason you like to include jQuery (not recommended)
-use the casual HTML way with <script> tag at public\index.html
-edit .eslintrc.js add 
module.exports = {
  globals: {
    "$": true,
    "jQuery": true
  },

//typescript support with vueCLI support vue v2.x - choose the "Manually select features" option
vue create my-project-name
https://vuejs.org/v2/guide/typescript.html
 

 

~~ fac3b00k.yarn ~~
--https://codemegeek.com/2018/10/14/npm-yarn-babel-and-webpack/
--https://blog.logrocket.com/why-you-dont-need-babel/
--https://stackshare.io/stackups/babel-vs-yarn
npm install --global yarn

--avoid 'Found incompatible module'
yarn config set ignore-engines true

--yarn evolved
vue add vuetify
yarn add vue-router

--serve
yarn serve

--build 
--https://roots.io/docs/sage/9.x/compiling-assets/#available-build-commands
yarn build

``` 

&nbsp;  

-----  

&nbsp; 
## This project is no longer maintained  

Copyright (c) 2021 [PipisCrew](http://pipiscrew.com)

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
