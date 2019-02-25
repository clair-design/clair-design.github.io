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

var precacheConfig = [["/static/framework.9e318f8c.js","fb293f9cc2a96c556a645e81045da7ad"],["/static/manifest.169bbd6e.js","ddc1168dc439cb3dd56987f2b5cbd68d"],["/static/page.003abb91.js","908cf46acd182689fcc058b722afdc47"],["/static/page.0fee119e.js","fa3b62de5a87ac40f67241dd7a00a697"],["/static/page.112c21f4.js","3b4e672471f3eb84136c261b90cf39c5"],["/static/page.1582ec3a.js","3a06341f144888eb9e83b93b50f97fd4"],["/static/page.1dc74aea.js","e67d23b99f6bfd2ad9f98128f10cc503"],["/static/page.1fd53eeb.js","1e83ec9724323d259781986b25c1ad20"],["/static/page.2445d11c.js","5ca6dd95e07a755476335d2b410b13a9"],["/static/page.35dec9f5.js","cb543889dbb9e3e0026a7015e1468d1c"],["/static/page.3fc6e4e2.js","cf6d9bbffd2566106ba105c3d64cd4f7"],["/static/page.40c210d7.js","07c012c00c5c45baa027165ba48bb37f"],["/static/page.40ea80cc.js","aa5cf471ac83d4ed743fbb84449c533d"],["/static/page.42e49297.js","da9eb20ad595a7ed620bc24e0f3c93dc"],["/static/page.4ea04318.js","87b0725c0eda7a197d392cb6712ad2ad"],["/static/page.504d84da.js","a5731c817b45b7d6d62bb1165c5eaeef"],["/static/page.52539e64.js","19c4ccfba145ecae411e6db3e56a7861"],["/static/page.5258c0d6.js","f2cbf394db886a51bffe63c8a7ad0129"],["/static/page.5efa67ba.js","4449c89e392a45ecd4d6d0947ad71c36"],["/static/page.60e5a922.js","99f33af40a4557dd4d66bcfe4389c5bd"],["/static/page.627af6dd.js","b4cb60cfa9d4d2d9c7ecb86c3d4ab60c"],["/static/page.62853f3d.js","760331779ae60200e7c4fb22409eb036"],["/static/page.63b9959b.js","456dafda12f827006a4a04d86b3b837d"],["/static/page.699229d4.js","5d9bfe91a398848b72e65c8d424d8968"],["/static/page.6b998286.js","bc74728611d8a6ef4be451e25846eae5"],["/static/page.7001c0a9.js","9c662d659e54bf4f92deef727be0a4e9"],["/static/page.75af4bd1.js","cdd2c3494e8d252b0785e8fc27832ccf"],["/static/page.7c2fb214.js","bf3f1ed7f480bd4dc0336723dd1d0901"],["/static/page.7f967a48.js","afd39fa87e5994ad28199a27e61fb2ff"],["/static/page.91950230.js","160b16e13405558498821e07d39fc582"],["/static/page.925d450a.js","e6d33004061f67b11e0576cfcce80228"],["/static/page.96ae0902.js","0bf1f4b253e3bac3b0d73b7ca6caf8b4"],["/static/page.9df7e6dc.js","cd32a08764db9a67bf297be51dfb024b"],["/static/page.a4200f30.js","9bb6b52f64610396f491950371d6ea14"],["/static/page.b334efe0.js","18e7f668918371d1e37dbd90f2fc5789"],["/static/page.baf1e374.js","b5c403affbb9bb9b798578c7c92895b9"],["/static/page.c1ee8a38.js","9e1e846bccd37be7b2315e0415503ca3"],["/static/page.d9762ffe.js","cdfe615281494c3dddd12c947e2b2949"],["/static/page.da5b31ee.js","761aa74d79720a2c87c1ca44a34945e4"],["/static/page.eb8a25c2.js","079b7b868c1689e0f4d1918eddb9b944"],["/static/page.f6072060.js","387e191e3e81ef0c05f3307bf925d248"],["/static/page.fc4a6a36.js","a312167b1db2b5cf1aeb0c6772f263ae"],["/static/page.fca4e6e4.js","161431e4ea6487c42ef849a9c3f1cda2"],["/static/page.ff1774e6.js","11f3993d259d49c02e699267085f1cf2"],["/static/styles.48775c6a.css","86d1d7a77770cbdd1337ffdf34359e15"],["/static/vendor.170b94f4.js","552a23f337dd082775a5afcd8ff3457b"]];
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







