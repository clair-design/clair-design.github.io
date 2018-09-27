/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/framework.52242e52.js","46b16f3e48a7e6fc95a68f3a55e1099f"],["/static/manifest.9bfa618e.js","3d9c4363c4b65cb9e327014d4c5bf63c"],["/static/page.003abb91.js","908cf46acd182689fcc058b722afdc47"],["/static/page.0fee119e.js","cee8e22d972e4e3a733f29d659cb9171"],["/static/page.1c67f3c9.js","fcaa6c8e2f0b8a963ec28f743ab57538"],["/static/page.1d20cb5e.js","c74f7ec94b3cc6b3a3a9c48d05d6df28"],["/static/page.1dc74aea.js","7d077606c6a14e8dbe7e1640d41c99f6"],["/static/page.1fd53eeb.js","a0734fdbc665551987947481f92c78da"],["/static/page.2bffee7c.js","959cd38da890f2f2564f100e5a45a9ed"],["/static/page.2e697549.js","509d020217ae2130ac3019169295d0ec"],["/static/page.35dec9f5.js","cb543889dbb9e3e0026a7015e1468d1c"],["/static/page.40c210d7.js","04cef49b97e1ac6158fa18db7f64436b"],["/static/page.42e49297.js","b131b54918dd4806b2a1a9e9af716b87"],["/static/page.4ea04318.js","a15fc28f6c98d4ae155fe20ce31ec60f"],["/static/page.52539e64.js","b0104a221811e725b77fd4e49ddfd119"],["/static/page.58ae277b.js","c04e5c43138e30172068ce9635078e95"],["/static/page.58de2771.js","494ce0aa016633ece13a41c6af4c9ea1"],["/static/page.5e912d89.js","fcd073ba9cf7be0f4c422b26d9ce8add"],["/static/page.5efa67ba.js","9db6aa941cf4c7c97b8af03eb7dc8a7e"],["/static/page.60e5a922.js","0b79354f05f9b5c4d906cc6ead029cb8"],["/static/page.627af6dd.js","b4cb60cfa9d4d2d9c7ecb86c3d4ab60c"],["/static/page.63b9959b.js","456dafda12f827006a4a04d86b3b837d"],["/static/page.699229d4.js","cd6f3316666cd1ca8e1025c51f163756"],["/static/page.6b998286.js","98857238736f4feb71a8311bd9ead7c5"],["/static/page.7001c0a9.js","c76c9b64e97999ff4e45c1bf0e662a27"],["/static/page.7076e63f.js","a7389f8baf8b5aee717db4425ae40c08"],["/static/page.7a1fa122.js","e4cbe20b4f86f234c00cd91edda5df63"],["/static/page.7f2e9c7f.js","507f187f6f8ec75a127ecc12a93cd2fd"],["/static/page.7f967a48.js","ae991e2bf22ed8cda029dd65508e70ef"],["/static/page.91950230.js","160b16e13405558498821e07d39fc582"],["/static/page.96ae0902.js","ca2c3569ed37e8f6cd822bacfb69e374"],["/static/page.9df7e6dc.js","592ed8c6da243e37a58d2f166e87c0a9"],["/static/page.a4200f30.js","c84fac9f09a1e5f52b0a3fbf80ada8f9"],["/static/page.b334efe0.js","b71c25c71c3843ba59fdc0edce2a5ea4"],["/static/page.c1ee8a38.js","5603db7c9a3e17450678eabb4044d9dd"],["/static/page.c477bba4.js","f04ae2fafd88583c112a350f5bcad18c"],["/static/page.da5b31ee.js","34ea7b78e70aa8ee55a0bde7c33e071f"],["/static/page.dfa072f8.js","34c9cc64e509b538ece91968e0c626d3"],["/static/page.eb8a25c2.js","eb6b2e5e3887678e9488a12a354dfe3a"],["/static/page.f6072060.js","111081522de5c1ab13d9a35e11131599"],["/static/page.fca4e6e4.js","e3160dffcd7b8a1bd2e9ad0f4bf0f98a"],["/static/page.ff1774e6.js","3d92a3e12325f23fc8adc5808febf186"],["/static/styles.6d876937.css","8917fac62555b4959e56b04d40b600c6"],["/static/vendor.31308abe.js","d65479b9e4732562c67ba81c511f7a3e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







