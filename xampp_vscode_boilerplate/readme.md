# xampp vscode php vue - boilerplate

This repo created to have ready to use :  

* VSCode [felixfbecker.php-debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) config - allows to debug PHP files
* Batch file for quick backup : 
   * Vue Project files
   * MySQL database schema
   * PHP API files  

The idea is to have the `PHP API files` and `Vue Project files` sitting on `htdocs` folder. We end with one instance of VSCode and browsing the `htdocs` folder. From there you can start the `Vue Project` and also debug the `PHP files`. 


Additionally there is a batch file `backup folder_with_date_stamp.bat` when the user drag & drop a folder backups PHP + Vue + MySQL dbase schema using RAR command line.