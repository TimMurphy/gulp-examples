# Gulp Examples

![Works on my machine](http://blog.codinghorror.com/content/images/uploads/2007/03/6a0120a85dcdae970b0128776ff992970c-pi.png "Works on my machine")  

- June 19, 2015
- Windows 10 Techincal Preview
 
## Machine Configuration

Install Chocolatey

	@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

Install npm

	choco install npm
	
Install Gulp
 
	npm install --global gulp

## Project Configuration

Initialize npm

	npm init
	
Initialize bower

	bower init
	
Install Gulp
 
	npm install --save-dev gulp
	
Add `gulpfile.js`

	var gulp = require('gulp');

	gulp.task('default', function() {
  		console.log('hello');	  
	});

## Examples

See `.\examples` directory.