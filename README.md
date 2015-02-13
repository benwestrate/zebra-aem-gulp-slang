# zebra-aem-gulp-slang
Make it easier to do front end dev with AEM

##How To use Zebra AEM Gulp Slang
1) Clone this repo into a seperate directory from you AEM working directory 
```
    git clone https://github.com/benwestrate/zebra-aem-gulp-slang.git
```
2) Find the absolute path to your working jcr_root folder put that in the config.json file
```json
    {
        "jcr_location" : "/path/to/your/jcr_root"
    }
```
3) Install all dependencies
```javascript
    npm install
```
4) Run the default gulp task 
```javascript
    gulp
```
