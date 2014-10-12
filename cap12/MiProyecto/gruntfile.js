module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['scripts.js', 'script1.js', 'script2.js']
        },
        concat: {
        	dist: {
                src: ['scripts.js', 'script1.js', 'script2.js'],
                dest: 'unidos.js'
            }
        },
        uglify: {
        	dist: {
        		src: 'unidos.js',
        		dest: 'build/unidos.min.js'
        	}        	
        },
        shell: {
            multiple: {
                command: [
                    'rm unidos.js',
                    'mkdir deploy',
                    'mv build/unidos.min.js deploy/unidos.min.js'
                ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);
}