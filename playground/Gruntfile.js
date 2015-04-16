var svgo = require('imagemin-svgo');

module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // SCSS
      sass: {
        options: {
          precision: 3,
          style: 'compressed'
        },
        docs: {
          options: {
            quiet: true,
            sourcemap: 'none'
          },
          files: {
            'css/docs/docs.css': 'css/docs/docs.scss'
          }
        },
        dev: {
          files: {
            'css/style.css': 'css/style.scss',
            'css/style.ie-old.css': 'css/style.ie-old.scss'
          }
        }
      },

      // Autoprefixer
      autoprefixer: {
        base: {
          options: {
            browsers: ['last 2 versions', 'ie 9', 'Android 4'],
            map: true // Update source map (creates one if it can't find an existing map)
          },
          files: {
            'css/style.css': 'css/style.css'
          }
        },
        ieold: {
          options: {
            browsers: ['ie 8'],
            map: true // Update source map (creates one if it can't find an existing map)
          },
          files: {
            'css/style.ie-old.css': 'css/style.ie-old.css'
          }
        }
      },

      // Watch all files
      watch: {
        sass: {
          files: 'css/**/*.scss',
          tasks: ['sass:dev', 'autoprefixer']
        }
      },

      // Optimize images
      imagemin: {
        default: {
          options: {
            optimizationLevel: 5,
            use: [svgo()]
          },
          files: [{
            expand: true,
            cwd: 'images/',                   // Src
            src: ['**/*.{png,jpg,gif,svg}'],  // Actual patterns to match
            dest: 'images/'                   // Destination
          }]
        },
        icons: {
          options: {
            optimizationLevel: 7,
            use: [svgo()]
          },
          files: [{
            expand: true,
            cwd: 'images/icons/',
            src: ['*.{png,svg}'],
            dest: 'images/icons/'
          }]
        }
      },

      // SVG ICONS TASKS -------------------------------------------------------
      // Create SVG icon sprite
      svgstore: {
        options: {
          prefix: '', // This will prefix each ID
          cleanup: true,
          //includeTitleElement: false,
          svg: {
            viewBox: '0 0 32 32',
            style: 'display: none;',
            xmlns: 'http://www.w3.org/2000/svg'
          },
        },
        default: {
          files: {
            'images/icons/svg-defs.svg': ['images/icons/svg/*.svg'],
          }
        }
      },

      // Convert SVGs to PNGs
      svg2png: {
        all: {
          files: [
            {
              cwd: 'images/icons/svg/',
              src: ['**/*.svg'],
              dest: 'images/icons/svg/'
            }
          ]
        }
      },

      // Copy and rename .png icons
      copy: {
        main : {
          files : [
            {
              expand: true,
              cwd : 'images/icons/svg/',
              src : ['*.png'],
              dest: 'images/icons/',
              rename: function (dest, src) {
                var path = require('path');
                return path.join(dest, 'svg-defs.svg.' + path.basename(src));
              }
            }
          ]
        }
      },

      // Deletes all .png files in icons folder as only needed for renaming
      clean: {
        png: ["images/icons/svg/*png"]
      }
      // End - SVG ICONS TASKS -------------------------------------------------


    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svg2png');
    
    grunt.registerTask('icons', ['svgstore', 'svg2png', 'copy', 'clean:png', 'imagemin:icons']);
    //grunt.registerTask('icons', ['svgstore', 'svg2png', 'copy', 'clean:png']);
    grunt.registerTask('w', ['sass', 'autoprefixer', 'watch']);
    grunt.registerTask('default', ['imagemin']);

};
