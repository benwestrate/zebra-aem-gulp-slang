var gulp            = require('gulp');
var slang           = require('gulp-slang');
var config          = require('./config.json');
var notify          = require('gulp-notify');
var watch           = require('gulp-watch');

var filesToWatch    = [ 
    config.jcr_location + "/**/*.html" , 
    config.jcr_location + "/**/*.jsp"  , 
    config.jcr_location + "/**/*.css"  , 
    config.jcr_location + "/**/*.less" ,
    config.jcr_location + "/**/*.js"   ,
    config.jcr_location + "/**/*.txt"   
];

function slangIt (e){
    notify("Found file");
    slang( e , { port : 4502 } );
    //slang( e , { port : 5001 } );
    
}


gulp.task('default',  function() {
  var fs = require("fs");
    
    console.log(fs.lstatSync("/Users/Ben/Dropbox/Sites/CITYTECH/repos/zebra/zebra-www/zebra-www-ui/src/main/content/jcr_root/etc/designs/zebra/").isDirectory())
    
    watch( filesToWatch , slangIt);
   
    
});