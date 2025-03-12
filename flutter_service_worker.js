'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "704dcb8a355e23f6642b503d5b467c83",
"assets/AssetManifest.bin.json": "1dd7338aa6e4ba5e3861c3ce995b3deb",
"assets/AssetManifest.json": "eb07d35ecef8af0aae1f60c20445e086",
"assets/assets/icons/133390-hotel-pop-up.json": "ba41581ed25a84def61a53402dda9531",
"assets/assets/icons/135803-loader.json": "dfb57876a80c3855e7b8ff574e01f532",
"assets/assets/icons/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/icons/136901-scale-loop-animation.json": "cddde2b3d95203469ea9b6d498d4055c",
"assets/assets/icons/137519-hotel.json": "7add03442cd4909a201bd0141ed6a6f9",
"assets/assets/icons/2523-loading.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/assets/icons/29765-cheetah-loader.json": "b78658e1a11ccfe8dc037a9dbd65f6dc",
"assets/assets/icons/31071-jiggling-giraffe.json": "381d897fb71de47621a87feda431fe97",
"assets/assets/icons/355-grid-list-view.json": "8cf28830395f19f06adb70b12fd43c51",
"assets/assets/icons/36352-lion-running.json": "e32b415cf5aa17587e979b50fc8323e6",
"assets/assets/icons/53484-digital-clouds-rain.json": "a08bd09575cfb494c0d72629e485017f",
"assets/assets/icons/64705-elephant.json": "9ab3005134254f83f64a0708d5df3378",
"assets/assets/icons/71133-hotel-colors.json": "17258cae4fddce775fd9ca04d387daf5",
"assets/assets/icons/72236-humidly.json": "83ede7a02fba46f80472b3f7c184e85a",
"assets/assets/icons/73387-tourist-travel.json": "df8479900467dc895d9872a20ec3f690",
"assets/assets/icons/74973-charles-law-calculation-of-volume-of-air-ballon-if-the-temperature-drops.json": "201dd4775cee5dff3ca25a35997090c7",
"assets/assets/icons/76908-travel-for-girl.json": "209b1645b0a5420022fc3624bb8c4134",
"assets/assets/icons/90656-traditional-hotel.json": "492357e9c827961e4f98b31680726f0e",
"assets/assets/icons/90724-travel-world-usa.json": "aabf5e418d0da98b15ed7128445184c0",
"assets/assets/icons/90770-traveller.json": "0750407bbeccb57d2d4d51f5524ca61c",
"assets/assets/icons/92138-qr-scan-successful.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/assets/icons/92893-man-waiting-car.json": "eb5612a3731e08869059b714a1a2b0d4",
"assets/assets/icons/95751-hot-air-balloon.json": "baa8b0cb65e0dee9e03a353954a49935",
"assets/assets/icons/96833-login.json": "ed87bde50063ef58974c928f9adcd479",
"assets/assets/icons/978-walking-deer.json": "c0483e030109b4bf642d1dcfbf4f80f5",
"assets/assets/icons/99193-rainy.json": "7211f4497ac2730b004add1c1d536b19",
"assets/assets/icons/airbnb.png": "929890a9db72248b30bf949d480da92b",
"assets/assets/icons/air_ticketing.png": "f4347cb05dba1b407e56dee02faf9e65",
"assets/assets/icons/badge.json": "a0fe82170a993805b42c2b34e9f852f6",
"assets/assets/icons/beach_vacation.png": "bc8acff7430a839a233668af302966ca",
"assets/assets/icons/bird.json": "e67064c83157f0e830b596e8381ace05",
"assets/assets/icons/birdy.json": "32ee00e387b6497e7df74f2f2e861245",
"assets/assets/icons/budgetone.json": "830a6a3f7caca9137da778828f234c74",
"assets/assets/icons/calc.json": "b15a6c521aacd281fea0fcd108c6e754",
"assets/assets/icons/calmwind.json": "70788941f099794f44091bc506cbc2c8",
"assets/assets/icons/charter_flights.png": "a612e2c2c6fc319c9d37aa59fa1ca3bb",
"assets/assets/icons/ehsop.json": "886a111a23b4cce076600cb2d4f01387",
"assets/assets/icons/flight_booking.png": "773be70f6c4c0c5f62de7632bd163087",
"assets/assets/icons/honeymoon_packages.png": "0594efd42eaf8b1c6b4b22a29d36ea02",
"assets/assets/icons/hotel_booking.png": "2d6019ea9af4d8d64dc6a0f2b2a831e9",
"assets/assets/icons/like.json": "a10a4053da533e255a4bc8dcdb762f6e",
"assets/assets/icons/likess.json": "9203cf258eb55048df93957a2946ff34",
"assets/assets/icons/logo.jpg": "bdca0aca74ef24dc2dc1832d3b1d1f41",
"assets/assets/icons/moderatewind.json": "035fdcd36eacad3ba13c14502975c4a8",
"assets/assets/icons/nowind.json": "4c954401c8bf178b0b7d34f45110a3bc",
"assets/assets/icons/passport_application.png": "c82c152077c665212ad173dbac63a7b5",
"assets/assets/icons/pressure.json": "675d4d22bd4ac8a0ef459e5404cbd07b",
"assets/assets/icons/profile.json": "e31a81c80ed52cd279502314d8edb39f",
"assets/assets/icons/qrcode.json": "b7ecff6605964e654843a59b0d663e3e",
"assets/assets/icons/safari_booking.png": "bc0ccbc59d39bcca6e6a361f37dc8e95",
"assets/assets/icons/settings.json": "cded69172c914f01be8f8ca2ebc3d418",
"assets/assets/icons/strongwind.json": "227670cfc222f6d306297b544a2f9170",
"assets/assets/icons/team_building.png": "ab890d3f90be7042c52e0a143e567804",
"assets/assets/icons/temp.json": "d32ba2efef6e495b3f1738053da35d0f",
"assets/assets/icons/tick.json": "fb8ddc39b952ced0a0521e6a40bf517d",
"assets/assets/icons/translator.json": "6c7837c566ce9e500babd0cf0a6d9be5",
"assets/assets/icons/travelone.json": "3f4563d60aa0d7ed6a2dfbef51d238a4",
"assets/assets/icons/traveltwo.json": "e1fc870fa72195c14212bda19f1e60ef",
"assets/assets/icons/travel_insurance.png": "a8acd6b90333103db68da425559c2174",
"assets/assets/icons/trophy.json": "fcc630bb9f68ff91d35625c4fc6c0d4a",
"assets/assets/icons/visa_processing.png": "4f43803964c7b97b033d729cf90696d3",
"assets/assets/icons/wallpaper.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"assets/assets/icons/wishlist.json": "7dac0ebc043225c41c4531fac4ac119c",
"assets/assets/icons/worldjump.json": "a4e5f48b8220673bda292ce4a804bb4e",
"assets/assets/images/admin%2520(1).sql": "3025003496ebfaa50da7d7c4f2589184",
"assets/assets/images/admin.sql": "288295413309918325c9c19507905392",
"assets/assets/images/bmw.jpg": "a08973296ccc366b8a9000b8557f5ae1",
"assets/assets/images/bufallo.jpg": "02acc9f7cbd35db6e698ab2bcb2695e6",
"assets/assets/images/bushire.jpg": "c6cd72aefc7ca5b230eb42c76c07c0d3",
"assets/assets/images/cheetah.jpg": "75e406483fcbed0c7d55c8458f2c8101",
"assets/assets/images/elephant.jpg": "90b1fbbc81a54d3a413d56ef17caf651",
"assets/assets/images/fourpoints.jpg": "42e0fdb9e288bf400a5ba8871ecb2f8f",
"assets/assets/images/gondola.jpg": "689ae95c953be8371a3c997302cf688d",
"assets/assets/images/hotel0.jpg": "c5737b99f507741f5f36e8db10c0e9d8",
"assets/assets/images/hotel1.jpg": "bc9826c3d7c3c5128c62b916baa59aed",
"assets/assets/images/hotel2.jpg": "07a77366730e5997e096c7eac049c787",
"assets/assets/images/hoteli.jpg": "9ad50618afeeaa41d85b85458294575b",
"assets/assets/images/kenyacomfort3.jpg": "20df7b13b6f857ada96ed37771b8f6d5",
"assets/assets/images/kozi3.jpg": "b12eb6823ff8004ff2d2f04602720a19",
"assets/assets/images/lion.jpg": "86b373bf8f9c2e7d6efeef95991b5003",
"assets/assets/images/mercedes.jpeg": "fab9022239c587170c1473f203d5ea38",
"assets/assets/images/mistubishi.jpeg": "a2b28dda127ee932374dfce303fa5159",
"assets/assets/images/murano.jpg": "74851df25b8f4bca02afcfe05a0b7169",
"assets/assets/images/newdelhi.jpg": "56450a1054fcf15bab1f51af0fa90281",
"assets/assets/images/newyork.jpg": "0b02b13a33b63100c799a803b51a748f",
"assets/assets/images/olesereni.jpg": "c280d47b4ad08f53a316288915b18515",
"assets/assets/images/pajero.jpeg": "be571e385635febba468f09df22e2f12",
"assets/assets/images/paris.jpg": "6f5ad05e3583bfcdb378690cab52c4c7",
"assets/assets/images/prado.jpeg": "b1ea13188a59c643a1cabdd051fdb153",
"assets/assets/images/radissonblu.jpg": "a14931636b8abb0f1e4611bc15bce30c",
"assets/assets/images/rhino.jpg": "5236234cad0f7af61cc39098810c5821",
"assets/assets/images/room.jpg": "b4b0801f68a38c6c3d085f2c8cc6b7de",
"assets/assets/images/santorini.jpg": "d26bfc72030a1f0eac63ef62b9d2182a",
"assets/assets/images/saopaulo.jpg": "ffd521b1a80910a94c21ffe39a664268",
"assets/assets/images/sarovastanley.jpg": "ab15875bfe841ed712340bc38ed2dc24",
"assets/assets/images/stmarksbasilica.jpg": "d9dfdeebfc0b8d65bf8e519867838247",
"assets/assets/images/subaru.jpeg": "eeb8a87a8cdde1103d6cc9071cb32d18",
"assets/assets/images/tl.png": "9571875984173b4170c83202973b8eac",
"assets/assets/images/toyoavoxy.jpeg": "1ae5c784a44190b8909c8619ee285034",
"assets/assets/images/toyotaallion.jpeg": "128497292246b599f0c23c45adf7864c",
"assets/assets/images/toyotaaxio.jpg": "93d3eeae19aa41b95b3937ea67ba716e",
"assets/assets/images/toyotahiace.jpeg": "ceeda0316166affefb91a0951a2bfdbb",
"assets/assets/images/toyotahilux.jpg": "b7c8b7cbbe0b0aa35fa7f6c9b5457488",
"assets/assets/images/toyotamarkx.jpg": "292bd7de7b0dc42dd9856099820636a6",
"assets/assets/images/toyotaprius.jpg": "aa1f944dc8fc42d9b69e88bd89b83b3a",
"assets/assets/images/toyotax.jpeg": "dc33efb9bcbfcaab420206b1eb4b8f5a",
"assets/assets/images/users.sql": "202233b94215bf423f275b0636739a5a",
"assets/assets/images/venice.jpg": "10346f88226e7c8892e95033ba5430c0",
"assets/assets/images/weather.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b738e5a92ec69445fefa5870bd4eeb52",
"assets/NOTICES": "d0b14dcaa00601e383d67bd88591b1c3",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0e0a8e471fda560e94bce961e29efb4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a289445228482aa2eebf151c7cd2b7c2",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "da68bfde63c549e011db22e3a5c45ae8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8e20cc3b07eaaf98fc7b79197026c99b",
"/": "8e20cc3b07eaaf98fc7b79197026c99b",
"main.dart.js": "2856e093200d4b668f696cbad3e2b1ce",
"manifest.json": "b108923969a0c36f75c3a8566c335ff0",
"version.json": "075a5ea68ecea27c7cb01c75bda113ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
