module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/css/application.css' : 'app/sass/application.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'sync']
      },
      scripts: {
        files: 'app/js/**/*.js',
        tasks: ['sync']
      },
      html: {
        files: 'app/**/*.html',
        tasks: ['sync']
      }
    },
    sync: {
      main: {
        files: [{
          cwd: 'app',
          src: [
            '**',
            '!**/node_modules/**'
          ],
          dest: 'public',
        }],
        verbose: true // Display log messages when copying files
      }
    },
    connect: {
      server: {
        options: {
          livereload: false,
        }
      }
    }
  });
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', [
    'connect:server',
    'watch',
    'sync'
  ]);
}