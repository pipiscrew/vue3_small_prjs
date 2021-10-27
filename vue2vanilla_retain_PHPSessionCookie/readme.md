# Vue 2 vanilla with PHP API

Basically is a replica of [Vue 2 with PHP API](https://github.com/pipiscrew/vue3_small_prjs/tree/main/vue2_retain_PHPSessionCookie), with the exception no `webpack` or `nodejs` required.  



main ingregrient is [httpVueLoader](https://github.com/FranckFreiburger/http-vue-loader) (10.6kb). allowing us to load vue files.   

**general.js** - contains common functions  

**router.js**  - contains the routes, any view has the property `requiresAuth: true`, the **event** included on the same file `router.beforeEach` validate on each view navigation through the server if the user is logged in, by calling a **general.js** function.

&nbsp;  

#vue2 #vanilla #barebones #php #api #login  

&nbsp;  

# This project uses the following 3rd-party dependencies :<br>
-[FranckFreiburger.httpVueLoader](https://github.com/FranckFreiburger/http-vue-loader)  
-[BootstrapCSS](https://getbootstrap.com/)  
-[VueJS](https://vuejs.org/)  

&nbsp;  

-----  

&nbsp; 
## This project is no longer maintained  

Copyright (c) 2021 [PipisCrew](http://pipiscrew.com)

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).