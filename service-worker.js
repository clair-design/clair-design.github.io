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

var precacheConfig = [["/static/framework.9379a3fe.js","2aef6c885282678f7e14a99e09203336"],["/static/manifest.291e626a.js","2f064ff038ceb342017258fd1416eb5c"],["/static/page.003abb91.js","908cf46acd182689fcc058b722afdc47"],["/static/page.0fee119e.js","a49326609d013140458ce65d53ff322f"],["/static/page.1dc74aea.js","7d077606c6a14e8dbe7e1640d41c99f6"],["/static/page.1fd53eeb.js","d8f39e69fcebbc68388015170025900b"],["/static/page.203f5f89.js","05e78501b1a662a71ad8ed507d28ca8b"],["/static/page.35dec9f5.js","cb543889dbb9e3e0026a7015e1468d1c"],["/static/page.3fc6e4e2.js","dc2833a85c88716a2ce38cb604bfb18e"],["/static/page.40c210d7.js","e2a963de0abe0555f3019e6a4d2e632d"],["/static/page.40ea80cc.js","20833c7f88f407e85659ab8d55fb0844"],["/static/page.42e49297.js","9d5049f338e32041561b36ac4debf7f9"],["/static/page.4ea04318.js","76a6eb37a50bceb4b3e0dea65761eb50"],["/static/page.504d84da.js","9ccfa16b5145069ab4c610a9ec466773"],["/static/page.52539e64.js","e5bf3a821e624888c471d0b3e6b15627"],["/static/page.5258c0d6.js","f7d05a1f45038f63c2df17e84f75759a"],["/static/page.5efa67ba.js","11c2620d82ac190aab131965d62a54d6"],["/static/page.60985312.js","1e7c220393b776159abc7476cb952412"],["/static/page.60e5a922.js","bd0929f4b9fa48bbeb8153fab448913c"],["/static/page.627af6dd.js","b4cb60cfa9d4d2d9c7ecb86c3d4ab60c"],["/static/page.62853f3d.js","e65ee4c3678894392205f2deb9dad38a"],["/static/page.63b9959b.js","456dafda12f827006a4a04d86b3b837d"],["/static/page.699229d4.js","e5b4efd8a26835878c111527b9174d4e"],["/static/page.6b998286.js","02a06bb7406a23a5e6d45fd7d2e78fd4"],["/static/page.7001c0a9.js","990950a9ec89322dd7158549d1741365"],["/static/page.7a4f009a.js","d82bc9df7ec00cd277ad3c4d5a97352f"],["/static/page.7c2fb214.js","743c84a987ab6cc0dde6e85cb853edeb"],["/static/page.7f967a48.js","c480aea303abbfa0278605cec6b59923"],["/static/page.91950230.js","160b16e13405558498821e07d39fc582"],["/static/page.925d450a.js","67822678d2803f9d61f42c27f0b76a03"],["/static/page.96ae0902.js","91a921b2b9b61ff8c8d4bc5116470984"],["/static/page.9df7e6dc.js","7a4ee4f872fb7e7f83f57d6f1c06a339"],["/static/page.a4200f30.js","c84fac9f09a1e5f52b0a3fbf80ada8f9"],["/static/page.b334efe0.js","7f871bbb103f0e4bc5e1b0f8c1c56656"],["/static/page.baf1e374.js","9f9fb7da4f6b90cc02b870ab566a0a9c"],["/static/page.c1ee8a38.js","37a6788f954123efd58672e9502bc7eb"],["/static/page.c477bba4.js","1becadfdd1d8110e8197acd5a99210b4"],["/static/page.d73d5fc6.js","58b970214ac6a3491ed8f3440758c35e"],["/static/page.da5b31ee.js","6c16eab3fd7019756f839380be84bcad"],["/static/page.eb8a25c2.js","f30dcbf155171b7e3f4636577a4cfb5c"],["/static/page.f6072060.js","26c8d3a1f4cc8af4002a8182360635f2"],["/static/page.fc4a6a36.js","493f6ce2765f665f712bcfc166432696"],["/static/page.fca4e6e4.js","8a74ee0a3390bfbb5f99b84f6f16743c"],["/static/page.ff1774e6.js","2d6cd95bf28ba7f9f08ba23a5f9a411b"],["/static/styles.0141a802.css","eb3fe819363b8dab628321a1d5febf05"],["/static/vendor.54714c54.js","c747f9626a2e60959448d2a883fdf16b"]];
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







