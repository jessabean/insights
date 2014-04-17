module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/application.css' : 'sass/application.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
        }
      }
    }
  });
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', [
    'connect:server',
    'watch'
  ]);
}