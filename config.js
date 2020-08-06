/**
 * Application configuration
 */
angular
    .module('config', [])
    .config(function ($provide) {
        $provide.constant('REPOSITORY_NAME', 'xepozz/xepozz')
        $provide.constant('DEBUG_ENABLED', true)
        $provide.constant('POST_REQUIRED_TAGS', ['published'])
    })
;
