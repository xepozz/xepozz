/**
 * Application configuration
 */
angular
    .module('config', [])
    .config(function ($provide) {
        $provide.constant('REPOSITORY_NAME', 'xepozz/xepozz')
        $provide.constant('DEBUG_ENABLED', false)
        $provide.constant('POST_REQUIRED_TAGS', ['published'])
    })
;
