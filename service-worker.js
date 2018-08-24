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

var precacheConfig = [["/static/framework.76683776.js","d61ac3b3c4aa906faed2319af8a2fc22"],["/static/manifest.60c19c57.js","bc1d78a241080010d8e5efdc689ed00e"],["/static/page.003abb91.js","a79ce9d4e49e0dd16d23e9ca35238f81"],["/static/page.0a5ac0d5.js","6b25a85816eecc153bdfa7f6e1116cff"],["/static/page.0fee119e.js","990f3df68326de9f90bf444e2f3bfe61"],["/static/page.130e5702.js","ee054b03d41b4337dbe8423e4be3d86f"],["/static/page.186089f0.js","ae67056d7cb91f9986d95a513e2cc5b1"],["/static/page.1c67f3c9.js","717a91b0ea3e76d3a28b346a675911c3"],["/static/page.1d20cb5e.js","b90e26ca74d72f9b08f6a027c7d6717b"],["/static/page.1dc74aea.js","b88363501950af0f359758a1e02af9e5"],["/static/page.1fd53eeb.js","7be1bbaca7717ad656ec6992b57ff7eb"],["/static/page.25314fa1.js","e395cfa928a06a87fa71553d3df84c06"],["/static/page.2e697549.js","e5e00ee358701630077d6f648f021168"],["/static/page.35dec9f5.js","7c6f77fd540829911120017d17745581"],["/static/page.40c210d7.js","fb99b4c6a49a3e09e37e98a0b1dd877d"],["/static/page.42e49297.js","2910d1727d4fd93ecc2b30035734a37e"],["/static/page.4ea04318.js","1bba0a6924695b79ff1c3198c745e0d5"],["/static/page.52539e64.js","40a87af0d30d6d5794a4e3175577f1ab"],["/static/page.58ae277b.js","47f8f32a3641452356c5802b8e9e6871"],["/static/page.5e912d89.js","c30b31f3e880f3cc95af2d52400949b1"],["/static/page.60e5a922.js","d3eb07dab59eee9b431310cadb833ee0"],["/static/page.627af6dd.js","6df20214c8e612343cb107ae5d050205"],["/static/page.63b9959b.js","d692bd4d1571c19034c95f4600187fc5"],["/static/page.699229d4.js","5b0b1e9852c74eff416678ad26c62e60"],["/static/page.6b998286.js","e33207a18cbf01f36220393c9df8fce9"],["/static/page.7001c0a9.js","45613c272dd2c60ab219242e6a69943b"],["/static/page.7076e63f.js","3dd4bf6ac757fab7dd6d5764cfc2ddb9"],["/static/page.7a1fa122.js","36482094cb88813e1a30c75ae50c5c63"],["/static/page.7c935a71.js","dbaa3b36f5ec160903ca850d00cbed10"],["/static/page.7f2e9c7f.js","21a54d03d8abfcadd8e226be935bda7e"],["/static/page.8b741e60.js","456e4b2b1444e040857190f3dba7e775"],["/static/page.91950230.js","1539a671b95f8e55c5668ce52632084c"],["/static/page.96ae0902.js","24afaecf62c1c6bf0536e89afc908c49"],["/static/page.9b4f173a.js","c3229afe3250a92bee0569f18c69c8da"],["/static/page.9df7e6dc.js","ecc1121f8f9415583dbef073593375bb"],["/static/page.a4200f30.js","63eba41f5e53d39899bae7d6612e47c8"],["/static/page.b334efe0.js","4d8cdcd64129acd95bb014637c1bf0ed"],["/static/page.c1ee8a38.js","1432b6304f0bc99a24e6952d9605ad71"],["/static/page.da5b31ee.js","2910be034809fee82086ce5f1e26ec1c"],["/static/page.f6072060.js","15952390ec32d8a7fc07a0b28f50587c"],["/static/page.fca4e6e4.js","49ffa0d657ff258698a170cdbaf66336"],["/static/page.ff1774e6.js","7c0b2676678ecb987b979ce355cd7a24"],["/static/styles.03547d7a.css","dafdb7b34d8a876ef997ae4ff11bcdfa"],["/static/vendor.bd92cf2c.js","0e715a46724f3bdeb52aa3979e3f6dc1"]];
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







