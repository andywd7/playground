module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        "dr-svg-sprites": {
            options: {
                template: "css/scss/icons/icon-sprite.hbs",
                cssPath: "css/scss/icons",
                cssSuffix: "scss",
                cssPrefix: "_i",
                cssSvgPrefix: "",
                prefix: "i",
                cssUnit: "",
                sizes: {
                    sm: 16
                },
                refSize: 32,
                unit: 0,
                layout: "horizontal",
                svgAttributes: {
                    baseProfile: false,
                    preserveAspectRatio: false,
                    version: "1.1"
                },
                map: function (filename) {
                    return filename.replace("m-", "");
                },
                selector: function (filename, tokens) {
                    var parts = [filename];
                    if (tokens.prefix) {
                        parts.unshift(tokens.prefix);
                    }
                    return "." + parts.join("-") + ":before";
                }
            },

            "icon": {
                options: {
                    spriteElementPath: "images/icons-svg/default",
                    spritePath: "images/sprites/sprite.svg"
                }
            },

            "icon-white": {
                options: {
                    spriteElementPath: "images/icons-svg/white",
                    spritePath: "images/sprites/sprite-white.svg",
                    template: "",
                    cssPath: "",
                    cssSuffix: "",
                    cssPrefix: "",
                    cssSvgPrefix: "",
                    prefix: ""
                }
            },

            "master": {
                options: {
                    spriteElementPath: "images/icons-svg/*/m-*",
                    spritePath: "images/sprites/sprite-master.svg"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-dr-svg-sprites');

    grunt.registerTask('default', ['dr-svg-sprites']);

};