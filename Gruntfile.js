module.exports = function(grunt){

    grunt.initConfig({
	uglify: {
	    all_src : {
		options : {
		    sourceMap : true,
		    sourceMapName : 'public/js/sourceMap.map'
		},
		src : ['public/js/*.js','public/js/menus/*.js'],
		dest : 'public/js/code-editor.min.js'
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);

};
