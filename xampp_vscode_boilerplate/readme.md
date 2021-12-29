# xampp vscode php vue - boilerplate

This repo created to have ready to use :  

* VSCode [felixfbecker.php-debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) config - allows to debug PHP files
* Batch file for quick backup : 
   * Vue Project files
   * MySQL database schema
   * PHP API files  

<p align="center">
  <img src="https://user-images.githubusercontent.com/3852762/147659793-4ab3f10b-5b3b-485b-9a53-1d4754e14ee6.png">
</p>


The idea is to have the `PHP API files` and `Vue Project files` sitting on `htdocs` folder. Then we end up with one instance of VSCode and browsing the `htdocs` folder. From there you can start the `Vue Project` and also debug the `PHP files`. 

Additionally there is a batch file `backup folder_with_date_stamp.bat` when the user drag & drop a folder backups, PHP + Vue + MySQL dbase schema using RAR command line.  

<div align="center">
  <img src="https://user-images.githubusercontent.com/3852762/147659872-804354ea-19cd-4aa2-a68b-be77724b72d8.png">
  <br><br>
  <img src="https://user-images.githubusercontent.com/3852762/147659933-af0b69d9-9bef-45f0-b0e5-52ba08ee1721.png">
  <br><br>
  <img src="https://user-images.githubusercontent.com/3852762/147659963-ebc14bf4-dcf5-4465-9e57-eb5a3b6d036f.png">
</div>
  
&nbsp;  
&nbsp;  
ps : User has to modify the batch file `backup folder_with_date_stamp.bat` at lines 18 / 34 / 35.  
ps2 : when saying VSCode means [VSCodium](https://github.com/VSCodium/vscodium)  
