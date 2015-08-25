module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		watch: {
			files: ['public/lib/**/*.js', 'public/less/**/*.less', 'Gruntfile.js'],
			tasks: ['jshint', 'less']
		},

		less: {
			development: {
				options: {
					paths: ['public/less/**/*.less']
				},
				files: {
					'public/styles/main.css' : 'public/less/imports.less'
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'lib/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['less', 'jshint', 'watch']);

};