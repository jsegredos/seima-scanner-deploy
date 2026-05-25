import*as e from"https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.16/dist/main.js";import{BarcodeDetectorPolyfill as t}from"https://cdn.jsdelivr.net/npm/@undecaf/barcode-detector-polyfill@0.9.23/dist/main.js";import n from"https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/modular/sortable.esm.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),window.zbarWasm=e,window.barcodeDetectorPolyfill={BarcodeDetectorPolyfill:t},window.polyfillReady=!0,console.log(`✅ Polyfill modules loaded and exposed to window`);var r={VERSION:`4.6.1`,ROOMS:{PREDEFINED:[{name:`Bath 1`,icon:`🛁`},{name:`Bath 2`,icon:`🛁`},{name:`Bath 3`,icon:`🛁`},{name:`Ensuite`,icon:`🚿`},{name:`Powder`,icon:`🚽`},{name:`Kitchen`,icon:`🍽️`},{name:`Butlers`,icon:`👨‍🍳`},{name:`Laundry`,icon:`🧺`},{name:`Alfresco`,icon:`🍽️`}]},SCANNER:{DEFAULT_ENGINE:`detector`,ENGINES:[`detector`]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:[`Description`,`ProductName`,`OrderCode`,`BARCODE`]},CSV:{URL:`https://docs.google.com/spreadsheets/d/e/2PACX-1vQw5X0aAe5yYbfqfTlgBIdNqnDIjs-YFhNh1IQ8lIB5RfjBl5VBRwQAMKIwlXz6L6oXI8ittrQD91Ob/pub?gid=114771048&single=true&output=csv`},STORAGE_KEYS:{CUSTOM_ROOMS:`customRooms`,SELECTED_PRODUCTS:`selectedProducts`,PRODUCT_CATALOG:`productCatalog`,USER_PREFERENCES:`userPreferences`,ROOM_ASSIGNMENTS:`roomAssignments`,STAFF_CONTACT:`staffContactDetails`},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10]},CSV_CONFIG:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[`.csv`,`.xlsx`],REQUIRED_COLUMNS:[`OrderCode`],OPTIONAL_COLUMNS:[`Description`,`RRP_INCGST`,`Image_URL`,`Room`,`Quantity`,`Notes`]},CATALOG_URL:`https://docs.google.com/spreadsheets/d/e/2PACX-1vT_zdHuh36ubrchDnG8GyaH6bSEAarJ68ypAlNjsKHWs8a-_BgJCEm-bNiTRhUp5Au8-P-ofkpp4fTw/pub?gid=0&single=true&output=csv`,PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100,SCANNER_TIMEOUT:3e4,BARCODE_SCAN_INTERVAL:100},OCR:{SCAN_INTERVAL:1500,MIN_TEXT_LENGTH:3,MIN_CONFIDENCE:60,CENTER_REGION_RATIO:.6,FUZZY_MATCH_TOLERANCE:1,PROCESSING_TIMEOUT:3e4,PREFER_WEB_WORKER:!0,PREPROCESSING:{CONTRAST:1.5,USE_THRESHOLD:!0}},EMAIL:{PROVIDER:`seimaEmail`,PUBLIC_KEY:`MHAEjvnc_xx8DIRCA`,SERVICE_ID:`service_rblizfg`,TEMPLATE_ID:`template_8st9fhk`,SEIMA_EMAIL_API_URL:`https://seima-email.seima.workers.dev/send-email`,SEIMA_EMAIL_API_KEY:``,FROM_EMAIL:`selections@seima.com.au`,FROM_NAME:`Seima Team`,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,REQUIRED_FEATURES:[`localStorage`,`fileReader`,`blob`,`createObjectURL`],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8,SAMSUNG_OPTIMIZATIONS:!0,EXTENDED_TIMEOUTS_FOR_SAMSUNG:!0},SELECTION_RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:`https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec`,RETRY_ATTEMPTS:3,RETRY_DELAY:1e3}},i={ROOMS:{PREDEFINED:[{name:`Bath 1`,icon:`🛁`},{name:`Bath 2`,icon:`🛁`},{name:`Bath 3`,icon:`🛁`},{name:`Ensuite`,icon:`🚿`},{name:`Powder`,icon:`🚽`},{name:`Kitchen`,icon:`🍽️`},{name:`Butlers`,icon:`👨‍🍳`},{name:`Laundry`,icon:`🧺`},{name:`Alfresco`,icon:`🍽️`}]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:[`Description`,`ProductName`,`OrderCode`,`BARCODE`]},CATALOG:{URL:`https://docs.google.com/spreadsheets/d/e/2PACX-1vT_zdHuh36ubrchDnG8GyaH6bSEAarJ68ypAlNjsKHWs8a-_BgJCEm-bNiTRhUp5Au8-P-ofkpp4fTw/pub?gid=0&single=true&output=csv`,CACHE_DURATION:3600*1e3,FORCE_FRESH:!1},STORAGE_KEYS:{CUSTOM_ROOMS:`customRooms`,SELECTED_PRODUCTS:`selectedProducts`,PRODUCT_CATALOG:`productCatalog`,USER_PREFERENCES:`userPreferences`,ROOM_ASSIGNMENTS:`roomAssignments`,STAFF_CONTACT:`staffContactDetails`,PDF_FORM_SETTINGS:`pdfFormSettings`},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10],MAX_QUANTITY:999},IMPORT:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[`.csv`,`.xlsx`,`.xls`,`.json`],PRODUCT_CODE:{VALIDATION_REGEX:`^\\d{6}$`,ALLOW_ANY_NON_EMPTY:!1,SKIP_VALIDATION:!1},COLUMN_PATTERNS:{productCode:[`code`,`ordercode`,`productcode`,`sku`,`order code`,`product code`,`item code`,`article`],productName:[`product name`,`description`,`name`,`item name`,`title`],quantity:[`quantity`,`qty`,`min order quantity`,`orderquantity`,`count`,`amount`],priceIncGst:[`price ea inc gst`,`price inc gst`,`priceincgst`,`rrp inc gst`,`inc gst`,`price incl gst`],priceExGst:[`price per unit`,`price ex gst`,`rrp ex gst`,`ex gst`,`price excl gst`,`unit price`],room:[`room`,`location`,`area`,`zone`],notes:[`notes`,`note`,`comments`,`comment`,`remarks`,`annotation`],productsJson:[`products json`,`productsjson`,`products_json`],customerName:[`customer name`,`customername`,`client name`,`buyer name`],customerEmail:[`customer email`,`customeremail`,`client email`,`email`],customerPhone:[`customer phone`,`customerphone`,`phone`,`telephone`,`mobile`],customerAddress:[`customer address`,`customeraddress`,`address`,`delivery address`],customerProject:[`customer project`,`customerproject`,`project`,`project name`],customerType:[`customer type`,`customertype`,`client type`],builderName:[`builder name`,`buildername`,`builder`],merchantName:[`merchant name`,`merchantname`,`merchant`],staffName:[`staff name`,`staffname`,`salesperson`,`rep name`],staffEmail:[`staff email`,`staffemail`,`rep email`],projectNotes:[`project notes`,`projectnotes`,`about notes`],roomsList:[`rooms list`,`roomslist`,`rooms`],estimateValue:[`estimate value`,`estimatevalue`,`total value`,`estimate`]}},EMAIL:{SEIMA_EMAIL_API_URL:`https://seima-email.seima.workers.dev/send-email`,SEIMA_EMAIL_API_KEY:``,FROM_EMAIL:`selections@seima.com.au`,FROM_NAME:`Seima Team`,MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3},RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:`https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec`,RETRY_ATTEMPTS:3,RETRY_DELAY:1e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,MIN_EDGE_VERSION:80,REQUIRED_FEATURES:[`localStorage`,`fileReader`,`blob`,`createObjectURL`],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8},PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100,DEBOUNCE_DELAY:300}},a=class e{static loadScript(e){return new Promise((t,n)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let r=document.createElement(`script`);r.src=e,r.onload=t,r.onerror=()=>n(Error(`Failed to load script: ${e}`)),document.head.appendChild(r)})}static loadImage(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`Failed to load image: ${e}`)),r.src=e})}static loadImageAsDataURL(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=function(){let e=document.createElement(`canvas`),r=e.getContext(`2d`);e.width=n.width,e.height=n.height,r.drawImage(n,0,0);try{t(e.toDataURL(`image/png`),n.width,n.height)}catch{t(null,0,0)}},n.onerror=()=>t(null,0,0),n.src=e}static formatPrice(e){if(!e||e===``)return``;let t=parseFloat(e.toString().replace(/[^\d.-]/g,``));return isNaN(t)?``:`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e===``)return``;let n=parseFloat(e.toString().replace(/[^\d.-]/g,``));if(isNaN(n))return``;let r=n.toLocaleString(`en-AU`,{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${r}`:r}static sanitizeInput(e,t=null){if(typeof e!=`string`)return``;let n=e.trim();return t&&n.length>t&&(n=n.substring(0,t)),n}static escapeHtml(e){return typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}static debounce(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}static throttle(e,t){let n;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.warn(`Failed to parse localStorage item: ${e}`,n),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(t){return console.warn(`Failed to set localStorage item: ${e}`,t),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){let n=new Date(e);if(isNaN(n.getTime()))return``;let r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=n.getFullYear();return t?`${r}/${i}/${a} ${String(n.getHours()).padStart(2,`0`)}:${String(n.getMinutes()).padStart(2,`0`)}`:`${r}/${i}/${a}`}static generateFilename(e,t){let n=new Date,r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=String(n.getFullYear()).slice(-2),o=String(n.getHours()).padStart(2,`0`),s=String(n.getMinutes()).padStart(2,`0`);return`${(e||`file`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}${i}${a}.${o}${s}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}static async fetchWithRetry(t,{retries:n=2,backoff:r=1e3,timeout:i=15e3,...a}={}){let o;for(let s=0;s<=n;s++){let c=new AbortController,l=setTimeout(()=>c.abort(),i);try{let e=await fetch(t,{...a,signal:c.signal});if(clearTimeout(l),!e.ok&&s<n)throw Error(`HTTP ${e.status}`);return e}catch(t){clearTimeout(l),o=t,s<n&&await e.sleep(r*2**s)}}throw o}},o={CUSTOM_ROOMS:`customRooms`,SELECTED_PRODUCTS:`selectedProducts`,PRODUCT_CATALOG:`productCatalog`,USER_PREFERENCES:`userPreferences`,ROOM_ASSIGNMENTS:`roomAssignments`,STAFF_CONTACT:`staffContactDetails`,PDF_FORM_SETTINGS:`pdfFormSettings`},s=class e{static keys={...o};static configure(t){e.keys={...o,...t}}static getCustomRooms(){return a.getStorageItem(e.keys.CUSTOM_ROOMS,[])}static setCustomRooms(t){return a.setStorageItem(e.keys.CUSTOM_ROOMS,t)}static addCustomRoom(t,n=[]){let r=e.getCustomRooms(),i=a.sanitizeInput(t,50);return!i||[...n.map(e=>e.name),...r.map(e=>e.name)].includes(i)?!1:(r.push({name:i}),e.setCustomRooms(r))}static removeCustomRoom(t){let n=e.getCustomRooms();return t>=0&&t<n.length?(n.splice(t,1),e.setCustomRooms(n)):!1}static getSelectedProducts(){return a.getStorageItem(e.keys.SELECTED_PRODUCTS,[])}static setSelectedProducts(t){return a.setStorageItem(e.keys.SELECTED_PRODUCTS,t)}static addProductToSelection(t,{notes:n=``,room:r=``,quantity:i=1,planCode:o=``,maxAnnotationLength:s=140}={}){try{let c=e.getSelectedProducts(),l={id:a.generateId(),product:a.deepClone(t),notes:a.sanitizeInput(n,s),room:a.sanitizeInput(r,50),planCode:a.sanitizeInput(o,32),quantity:Math.max(1,Math.min(999,parseInt(i)||1)),timestamp:Date.now()};return c.push(l),e.setSelectedProducts(c)?l.id:!1}catch(e){return console.error(`Error adding product to selection:`,e),!1}}static updateProductQuantity(t,n){let r=e.getSelectedProducts(),i=r.findIndex(e=>e.id===t);return i===-1?!1:(r[i].quantity=Math.max(1,Math.min(999,parseInt(n)||1)),e.setSelectedProducts(r))}static updateProductRoom(t,n){let r=e.getSelectedProducts(),i=r.findIndex(e=>e.id===t);return i===-1?!1:(r[i].room=a.sanitizeInput(n,50),e.setSelectedProducts(r))}static updateProductNotes(t,n,r=140){let i=e.getSelectedProducts(),o=i.findIndex(e=>e.id===t);return o===-1?!1:(i[o].notes=a.sanitizeInput(n,r),e.setSelectedProducts(i))}static updateProductPrice(t,n){let r=e.getSelectedProducts(),i=r.findIndex(e=>e.id===t);return i===-1?!1:(r[i].product.UserEditedPrice=n,e.setSelectedProducts(r))}static updateProductDetails(t,n={},r=140){let i=e.getSelectedProducts(),o=i.findIndex(e=>e.id===t);if(o===-1)return!1;let s={...i[o],...n};return n.notes!==void 0&&(s.notes=a.sanitizeInput(n.notes,r)),n.room!==void 0&&(s.room=a.sanitizeInput(n.room,50)),n.planCode!==void 0&&(s.planCode=a.sanitizeInput(n.planCode,32)),n.quantity!==void 0&&(s.quantity=Math.max(1,Math.min(999,parseInt(n.quantity)||1))),n.product&&(s.product=a.deepClone(n.product)),i[o]=s,e.setSelectedProducts(i)}static removeProductFromSelection(t){let n=e.getSelectedProducts().filter(e=>e.id!==t);return e.setSelectedProducts(n)}static clearAllSelections(){return e.setSelectedProducts([])&&e.setCustomRooms([])}static getSelectionCount(){return e.getSelectedProducts().length}static getStaffContactDetails(){try{let t=localStorage.getItem(e.keys.STAFF_CONTACT);return t?JSON.parse(t):null}catch(e){return console.error(`Error getting staff contact details:`,e),null}}static setStaffContactDetails(t){try{return localStorage.setItem(e.keys.STAFF_CONTACT,JSON.stringify(t)),!0}catch(e){return console.error(`Error saving staff contact details:`,e),!1}}static getUserSettings(){return a.getStorageItem(e.keys.USER_PREFERENCES,{})}static saveUserSettings(t){return a.setStorageItem(e.keys.USER_PREFERENCES,t)}static getPdfFormSettings(){return a.getStorageItem(e.keys.PDF_FORM_SETTINGS,{})}static savePdfFormSettings(t){return a.setStorageItem(e.keys.PDF_FORM_SETTINGS,t)}static getCachedCatalog(){return a.getStorageItem(e.keys.PRODUCT_CATALOG,null)}static saveCatalogCache(t){return a.setStorageItem(e.keys.PRODUCT_CATALOG,{products:t,timestamp:Date.now()})}static clearCatalogCache(){return a.removeStorageItem(e.keys.PRODUCT_CATALOG)}},c=new class{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){let e=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(e),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(e),isDesktop:!/Mobi|Android|iPad/i.test(e),isIOS:/iPad|iPhone|iPod/.test(e),isAndroid:/Android/i.test(e),isWindows:/Windows/i.test(e),isMacOS:/Macintosh|Mac OS X/i.test(e),isIPhone:/iPhone/i.test(e),isIPad:/iPad/i.test(e),isWebView:this.detectWebView(e),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:e}}detectBrowser(){let e=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(e),version:this.getBrowserVersion(e),engine:this.getBrowserEngine(e),isChrome:/Chrome/i.test(e)&&!/Edge|Edg/i.test(e),isFirefox:/Firefox/i.test(e),isSafari:/Safari/i.test(e)&&!/Chrome|Chromium/i.test(e),isEdge:/Edge|Edg/i.test(e),isOpera:/Opera|OPR/i.test(e),chromeVersion:this.getChromeVersion(e),safariVersion:this.getSafariVersion(e),firefoxVersion:this.getFirefoxVersion(e)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:`indexedDB`in window,fileAPI:`File`in window,fileReader:`FileReader`in window,fileSystemAccess:`showSaveFilePicker`in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:`mediaDevices`in navigator&&`getUserMedia`in navigator.mediaDevices,webRTC:`RTCPeerConnection`in window,canvas:`HTMLCanvasElement`in window,webGL:this.checkWebGL(),fetch:`fetch`in window,xhr:`XMLHttpRequest`in window,serviceWorker:`serviceWorker`in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:`WebAssembly`in window,createObjectURL:`URL`in window&&`createObjectURL`in URL,revokeObjectURL:`URL`in window&&`revokeObjectURL`in URL,blob:`Blob`in window,touchEvents:`ontouchstart`in window,deviceMotion:`DeviceMotionEvent`in window,deviceOrientation:`DeviceOrientationEvent`in window,clipboard:`clipboard`in navigator,onlineStatus:`onLine`in navigator,connection:`connection`in navigator||`mozConnection`in navigator||`webkitConnection`in navigator}}checkMemoryLimitations(){this.memoryInfo={jsHeapSizeLimit:performance.memory?.jsHeapSizeLimit||null,totalJSHeapSize:performance.memory?.totalJSHeapSize||null,usedJSHeapSize:performance.memory?.usedJSHeapSize||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener(`online`,()=>{this.networkStatus.isOnline=!0,this.onNetworkChange(`online`)}),window.addEventListener(`offline`,()=>{this.networkStatus.isOnline=!1,this.onNetworkChange(`offline`)}),navigator.connection&&navigator.connection.addEventListener(`change`,()=>{this.updateNetworkStatus(),this.onNetworkChange(`connection`)})}calculateCompatibilityScore(){let e=100,t=[];this.features.localStorage||(e-=20,t.push(`Local storage not supported`)),this.features.fileReader||(e-=15,t.push(`File reading not supported`)),this.features.blob||(e-=15,t.push(`Blob creation not supported`)),this.features.createObjectURL||(e-=15,t.push(`Object URL creation not supported`)),this.features.fetch||(e-=10,t.push(`Modern fetch API not available`)),this.features.modules||(e-=10,t.push(`ES6 modules not supported`)),this.features.getUserMedia||(e-=8,t.push(`Camera access limited`)),this.deviceInfo.isWebView&&(e-=5,t.push(`WebView compatibility concerns`)),this.memoryInfo.memoryPressure===`high`&&(e-=8,t.push(`High memory pressure detected`)),this.networkStatus.isOnline||(e-=5,t.push(`Currently offline`)),this.compatibilityScore=Math.max(0,e),this.compatibilityIssues=t}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),`PerformanceObserver`in window)try{new PerformanceObserver(e=>{for(let t of e.getEntries())t.entryType===`measure`&&this.onPerformanceMeasure(t)}).observe({entryTypes:[`measure`]})}catch(e){console.warn(`Performance observer not fully supported:`,e)}}detectWebView(e){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(e)||/Android/i.test(e)&&/Version\/\d\.\d/i.test(e)&&!/ Chrome\//.test(e)||/FB_IAB|FBAN|FBAV/i.test(e)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?`portrait`:`landscape`}getBrowserName(e){return/SamsungBrowser/i.test(e)?`Samsung Internet`:/Chrome/i.test(e)&&!/Edge|Edg/i.test(e)?`Chrome`:/Firefox/i.test(e)?`Firefox`:/Safari/i.test(e)&&!/Chrome|Chromium/i.test(e)?`Safari`:/Edge|Edg/i.test(e)?`Edge`:/Opera|OPR/i.test(e)?`Opera`:`Unknown`}getBrowserVersion(e){let t=e.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return t?t[2]:`Unknown`}getBrowserEngine(e){return/WebKit/i.test(e)?`WebKit`:/Gecko/i.test(e)?`Gecko`:/Trident/i.test(e)?`Trident`:/EdgeHTML/i.test(e)?`EdgeHTML`:`Unknown`}getChromeVersion(e){let t=e.match(/Chrome\/([0-9.]+)/i);return t?parseInt(t[1]):null}getSafariVersion(e){let t=e.match(/Version\/([0-9.]+).*Safari/i);return t?parseFloat(t[1]):null}getFirefoxVersion(e){let t=e.match(/Firefox\/([0-9.]+)/i);return t?parseInt(t[1]):null}checkLocalStorage(){try{let e=`compatibilityTest`;return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}checkSessionStorage(){try{let e=`compatibilityTest`;return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch{return!1}}checkDownloadAttribute(){return`download`in document.createElement(`a`)}checkWebGL(){try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl`)||e.getContext(`experimental-webgl`))}catch{return!1}}checkESModules(){try{return typeof Symbol<`u`&&typeof Promise<`u`&&typeof Map<`u`}catch{return!1}}checkAsyncAwait(){try{return typeof(async function(){}).constructor==`function`}catch{return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return`unknown`;let e=performance.memory.usedJSHeapSize/performance.memory.jsHeapSizeLimit;return e>.8?`high`:e>.6?`medium`:`low`}estimateMaxBlobSize(){return this.deviceInfo.browser?.isChrome?500*1024*1024:this.deviceInfo.browser?.isFirefox?200*1024*1024:this.deviceInfo.browser?.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){return this.deviceInfo.browser?.isChrome?2*1024*1024:this.deviceInfo.browser?.isFirefox?1*1024*1024:(this.deviceInfo.browser?.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:`unknown`}getEffectiveConnectionType(){return navigator.connection?.effectiveType||`unknown`}getDownlink(){return navigator.connection?.downlink||null}getRTT(){return navigator.connection?.rtt||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(e){console.log(`Network status changed: ${e}`,this.networkStatus)}onPerformanceMeasure(e){e.duration>1e3&&console.warn(`Performance concern: ${e.name} took ${e.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){let e=[];return this.compatibilityScore<70&&e.push({type:`critical`,message:`Browser compatibility issues detected. Consider updating your browser.`,action:`update_browser`}),this.memoryInfo.memoryPressure===`high`&&e.push({type:`warning`,message:`High memory usage detected. Close other browser tabs for better performance.`,action:`reduce_memory`}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&e.push({type:`info`,message:`Modern file saving features available in newer browsers.`,action:`update_browser`}),this.networkStatus.isOnline||e.push({type:`error`,message:`Internet connection required for full functionality.`,action:`check_connection`}),e}isFeatureSupported(e){return this.features[e]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?`fileSystemAPI`:this.features.downloadAttribute?`downloadAttribute`:this.features.createObjectURL?`objectURL`:`manual`}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group(`Browser Compatibility Report`),console.log(`Score:`,this.compatibilityScore),console.log(`Device:`,this.deviceInfo),console.log(`Features:`,this.features),console.log(`Issues:`,this.compatibilityIssues),console.log(`Recommendations:`,this.getRecommendations()),console.groupEnd()}};new class{constructor(e=i){this.config=e,this.products=[],this.isLoaded=!1,this.isLoading=!1,this.lastLoadTime=null,this.loadPromise=null}async init(e={}){let t=e.forceFresh||this.config.CATALOG?.FORCE_FRESH||!1;if(this.isLoading)return this.loadPromise;this.isLoading=!0,this.loadPromise=this._loadCatalog(t);try{return await this.loadPromise,this.isLoaded=!0,console.log(`✅ Data service initialized with ${this.products.length} products`),!0}catch(e){return console.error(`❌ Failed to initialize data service:`,e),!1}finally{this.isLoading=!1}}async _loadCatalog(e=!1){let t=this.config.CATALOG?.URL||this.config.CSV?.URL||this.config.CATALOG_URL;if(!t)throw Error(`Catalog URL not configured`);if(!e){let e=s.getCachedCatalog(),t=this.config.CATALOG?.CACHE_DURATION||3600*1e3;if(e&&e.products&&e.timestamp&&Date.now()-e.timestamp<t){this.products=e.products,this.lastLoadTime=new Date(e.timestamp),console.log(`📦 Loaded ${this.products.length} products from cache`);return}}console.log(`🌐 Fetching product catalog from server...`);try{let e=await fetch(t);if(!e.ok)throw Error(`HTTP ${e.status}: ${e.statusText}`);let n=await e.text();this.products=this._parseCSV(n),this.lastLoadTime=new Date,s.saveCatalogCache(this.products),console.log(`✅ Loaded ${this.products.length} products from server`)}catch(e){let t=s.getCachedCatalog();if(t&&t.products)this.products=t.products,this.lastLoadTime=new Date(t.timestamp),console.warn(`⚠️ Using cached catalog due to network error:`,e.message);else throw e}}_parseCSV(e){let t=e.split(`
`).filter(e=>e.trim());if(t.length<2)return[];let n=this._parseCSVLine(t[0]),r=[];for(let e=1;e<t.length;e++){let i=this._parseCSVLine(t[e]);if(i.length===n.length){let e={};n.forEach((t,n)=>{e[t.trim()]=i[n]}),e.OrderCode&&r.push(e)}}return r}_parseCSVLine(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i],o=e[i+1];a===`"`&&!r?r=!0:a===`"`&&r?o===`"`?(n+=`"`,i++):r=!1:a===`,`&&!r?(t.push(n.trim()),n=``):n+=a}return t.push(n.trim()),t}getAllProducts(){return this.products}searchProducts(e,t=null){if(!e||!this.isLoaded)return[];let n=e.toLowerCase().trim(),r=t||this.config.SEARCH?.MAX_RESULTS||8,i=this.config.SEARCH?.SEARCH_FIELDS||[`Description`,`ProductName`,`OrderCode`,`BARCODE`];return this.products.map(e=>{let t=0;for(let r of i){let i=(e[r]||``).toString().toLowerCase();i===n?t+=100:i.startsWith(n)?t+=50:i.includes(n)&&(t+=25)}return{product:e,score:t}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,r).map(e=>e.product)}findProductByOrderCode(e){if(!e||!this.isLoaded)return null;let t=e.toString().trim();return this.products.find(e=>(e.OrderCode||``).toString().trim()===t)||null}findProductByBarcode(e){if(!e||!this.isLoaded)return null;let t=e.toString().trim();return this.products.find(e=>(e.BARCODE||e.Barcode||``).toString().trim()===t)||null}getSelection(){return s.getSelectedProducts()}addProduct(e,{notes:t=``,room:n=`Blank`,quantity:r=1}={}){return s.addProductToSelection(e,{notes:t,room:n,quantity:r})}removeProduct(e){return s.removeProductFromSelection(e)}clearSelection(){return s.clearAllSelections()}getSelectionStats(){let e=this.getSelection(),t=0,n=0,r=new Set;for(let i of e){t+=i.quantity||1,r.add(i.room||`Unassigned`);let e=i.product,a=0;if(e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null)a=parseFloat(e.UserEditedPrice.toString().replace(/[^\d.-]/g,``))||0;else{let t=e.RRP_INCGST||e.RRP_EX||e.Price||0;a=parseFloat(t.toString().replace(/[^\d.-]/g,``))||0}n+=a*(i.quantity||1)}return{totalProducts:t,totalItems:e.length,totalValue:n,roomCount:r.size,rooms:Array.from(r)}}getProductsLegacyFormat(){return this.getSelection().map(e=>({...e.product,Room:e.room,Notes:e.notes,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()}))}getStaffContact(){return s.getStaffContactDetails()}async refreshCatalog(){return s.clearCatalogCache(),this.init({forceFresh:!0})}},new class{constructor(e=i.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log(`✅ Email service initialized`),!0}catch(e){return console.error(`❌ Failed to initialize email service:`,e),!1}}async _loadEmailJS(){if(!window.emailjs)return a.loadScript(`https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`)}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw Error(`EmailJS not loaded`);let t={to_email:e.to_email,to_name:e.to_name||e.customer_name||`Customer`,from_name:this.config.FROM_NAME||`Seima Team`,subject:e.subject||`Your Seima Product Selection`,message:e.message||``,customer_name:e.customer_name||``,customer_project:e.customer_project||``,customer_address:e.customer_address||``,customer_telephone:e.customer_telephone||``,total_products:e.total_products||``,total_rooms:e.total_rooms||``,file_info:e.file_info||``,...this._sanitizeAttachment(e)},n=this.config.RETRY_ATTEMPTS||3,r=this.config.RETRY_DELAY||2e3;for(let e=1;e<=n;e++)try{let n=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${e})`),{success:!0,result:n}}catch(t){if(console.warn(`❌ Email attempt ${e} failed:`,t),e<n)await a.sleep(r);else throw t}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith(`data:`)&&(t=t.split(`,`)[1]||t),{attachment:t,attachment_name:e.attachment_name||`attachment.pdf`}}async sendWithAttachments(e,t,n,r){let i=await this._blobToBase64(t),o=(e.project||`Selection`).replace(/[^a-zA-Z0-9\s]/g,``),s=a.generateFilename(o,`pdf`),c=this._buildEmailMessage(e,r),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:r.totalProducts.toString(),total_rooms:r.roomCount.toString(),message:c,attachment:i,attachment_name:s,file_info:`PDF: ${s} (${(t.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onloadend=()=>{let e=r.result.split(`,`)[1];t(e)},r.onerror=n,r.readAsDataURL(e)})}_buildEmailMessage(e,t){let n=[`Thank you for your Seima product selection.`,``,`Your selection summary:`,`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&n.push(`• Estimated value: ${a.formatPriceLocale(t.totalValue)}`),n.push(``,`Please find your product selection attached as a PDF document.`,``,`If you have any questions, please contact your Seima representative.`,``,`Kind regards,`,`The Seima Team`,`www.seima.com.au`),n.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}};var l=`authSession`,u=10080*60*1e3,d=720*60*60*1e3,f=new class{constructor(){this.baseUrl=``,this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log(`🔐 Auth service configured`)}loadSession(){try{let e=localStorage.getItem(l);if(e){let t=JSON.parse(e);t.expiry&&Date.now()<t.expiry?(this.session=t,console.log(`✅ Session restored`)):(console.log(`⏰ Session expired, clearing...`),this.clearSession())}}catch(e){console.warn(`Failed to load session:`,e),this.clearSession()}}saveSession(e){try{localStorage.setItem(l,JSON.stringify(e)),this.session=e}catch(e){console.error(`Failed to save session:`,e)}}clearSession(){localStorage.removeItem(l),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){return this.session?.user||null}getUserRole(){let e=this.getCurrentUser();if(!e)return`user`;let t=String(e.role||``).toLowerCase().trim(),n=e.email&&String(e.email).toLowerCase().endsWith(`@seima.com.au`),r=e.emailVerified!==!1;return t===`admin`&&(!n||r)?`admin`:t===`staff`&&(!n||r)||n&&r?`staff`:t===`power`?`power`:`user`}isPowerUser(){let e=this.getUserRole();return e===`power`||e===`staff`||e===`admin`}isStaffMode(){let e=this.getUserRole();return e===`staff`||e===`admin`}isAdmin(){return this.getUserRole()===`admin`}getSession(){return this.session}getSessionToken(){return this.session?.token||null}getAuthHeaders(){let e=this.getSessionToken();return e?{Authorization:`Bearer ${e}`}:{}}handleUnauthorizedResponse(e,t=``){if(!e||e.status!==401)return!1;if(this.session){let e=t?` (${t})`:``;console.warn(`🔐 Session unauthorized${e}; clearing local session`),this.clearSession()}return!0}async apiRequest(e,t){if(!this.baseUrl)throw Error(`Google Sheets URL not configured. Call authService.configure() first.`);let n=new URLSearchParams;n.append(`action`,e);for(let[e,r]of Object.entries(t))r!=null&&n.append(e,typeof r==`object`?JSON.stringify(r):r);let r=await fetch(this.baseUrl,{method:`POST`,body:n});if(!r.ok)throw Error(`HTTP ${r.status}: ${r.statusText}`);return await r.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:`Password must be at least 8 characters`}:/\d/.test(e)?{valid:!0}:{valid:!1,error:`Password must contain at least one number`}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,n,r=``,i=``){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};let a=this.validatePassword(t);if(!a.valid)return{success:!1,error:a.error};if(!n||n.trim().length<2)return{success:!1,error:`Please enter your name`};try{let a=await this.apiRequest(`userRegister`,{email:e.trim().toLowerCase(),password:t,name:n.trim(),position:r.trim(),phone:String(i||``).trim()});return a.success&&a.verifyToken&&this.sendVerificationEmail(e.trim().toLowerCase(),n.trim(),a.verifyToken),a}catch(e){return console.error(`Registration error:`,e),{success:!1,error:`Registration failed. Please try again.`}}}async login(e,t,n=!1){if(!e||!t)return{success:!1,error:`Please enter email and password`};try{let r=await this.apiRequest(`userLogin`,{email:e.trim().toLowerCase(),password:t});if(r.success){let e=Date.now()+(n?d:u),t={user:r.user,token:r.sessionToken,expiry:e,rememberMe:n};this.saveSession(t),this.onAuthChange&&this.onAuthChange(r.user),console.log(`✅ Logged in`)}return r}catch(e){return console.error(`Login error:`,e),{success:!1,error:`Login failed. Please try again.`}}}async logout(){let e=this.getSessionToken();if(e&&this.baseUrl)try{await this.apiRequest(`userLogout`,{sessionToken:e})}catch{}this.clearSession(),console.log(`👋 Logged out`)}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};try{let t=await this.apiRequest(`userRequestPasswordReset`,{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:`If this email exists, a reset code has been sent`}}catch(e){return console.error(`Password reset request error:`,e),{success:!1,error:`Failed to request password reset. Please try again.`}}}async sendPasswordResetEmail(e,t,n){if(!this.emailConfig){console.warn(`Email config not set, cannot send password reset email`);return}let r=this.emailConfig.SEIMA_EMAIL_API_URL;if(!r){console.error(`SEIMA_EMAIL_API_URL not configured, cannot send password reset email`);return}let i=t||`User`,a=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${i},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">We received a request to reset your password. Use the code below to complete the process. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${n}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">If you didn't request this, you can safely ignore this email. Your password will remain unchanged.</p>
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">© ${new Date().getFullYear()} Seima · Build with Confidence · <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{let t={"Content-Type":`application/json`,...this.getAuthHeaders()};!t.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(t[`X-Api-Key`]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log(`📧 Sending password reset email`);let n=await fetch(r,{method:`POST`,headers:t,body:JSON.stringify({to:e,toName:i,subject:`Your Seima Password Reset Code`,html:a,fromName:this.emailConfig.FROM_NAME||`Seima Team`})}),o=await n.json().catch(()=>({}));n.ok?console.log(`✅ Password reset email sent`):console.error(`Password reset email failed:`,n.status,o)}catch(e){console.error(`Failed to send password reset email:`,e)}}async sendVerificationEmail(e,t,n){if(!this.emailConfig){console.warn(`Email config not set, cannot send verification email`);return}let r=this.emailConfig.SEIMA_EMAIL_API_URL;if(!r){console.error(`SEIMA_EMAIL_API_URL not configured, cannot send verification email`);return}let i=t||`there`,a=new Date().getFullYear(),o=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${i},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">Welcome to the Seima Product Presenter! Verify your email address using the code below. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${n}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">Sign in at <a href="https://presenter.seima.com.au" style="color:#a09484;text-decoration:none;font-weight:600;">presenter.seima.com.au</a> and enter this code when prompted to verify your email and access staff features.</p>
    ${e.toLowerCase().endsWith(`@seima.com.au`)?`<p style="margin:16px 0 0;color:#166534;font-size:14px;line-height:1.6;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:12px 16px;">
          <strong>Staff access:</strong> Once verified, you will have access to staff features including competitor cross-referencing.</p>`:``}
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">\u00a9 ${a} Seima \u00b7 Build with Confidence \u00b7 <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{let t={"Content-Type":`application/json`,...this.getAuthHeaders()};!t.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(t[`X-Api-Key`]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log(`📧 Sending verification email`);let n=await fetch(r,{method:`POST`,headers:t,body:JSON.stringify({to:e,toName:i,subject:`Verify your email — Seima Product Presenter`,html:o,fromName:this.emailConfig.FROM_NAME||`Seima Team`})}),a=await n.json().catch(()=>({}));n.ok?console.log(`✅ Verification email sent`):console.error(`Verification email failed:`,n.status,a)}catch(e){console.error(`Failed to send verification email:`,e)}}async resetPassword(e,t,n){if(!e||!t||!n)return{success:!1,error:`All fields are required`};let r=this.validatePassword(n);if(!r.valid)return{success:!1,error:r.error};try{return await this.apiRequest(`userResetPassword`,{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:n})}catch(e){return console.error(`Password reset error:`,e),{success:!1,error:`Failed to reset password. Please try again.`}}}async verifyEmail(e,t){if(!e||!t)return{success:!1,error:`Email and verification code are required`};try{let n=await this.apiRequest(`userVerifyEmail`,{email:e.trim().toLowerCase(),token:t.trim().toUpperCase()});return n.success&&this.isLoggedIn()&&this.session.user.email.toLowerCase()===e.trim().toLowerCase()&&(this.session.user.emailVerified=!0,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(this.session.user)),n}catch(e){return console.error(`Email verification error:`,e),{success:!1,error:`Verification failed. Please try again.`}}}async requestEmailVerification(e){if(!e||!this.validateEmail(e))return{success:!1,error:`Please enter a valid email address`};try{let t=await this.apiRequest(`userRequestEmailVerification`,{email:e.trim().toLowerCase()});return t.success&&t.verifyToken&&await this.sendVerificationEmail(t.userEmail,t.userName,t.verifyToken),{success:!0,message:`If this email exists, a verification code has been sent`}}catch(e){return console.error(`Request verification error:`,e),{success:!1,error:`Failed to send verification code. Please try again.`}}}isEmailVerified(){let e=this.getCurrentUser();return e?e.emailVerified!==!1:!1}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};let n=this.validatePassword(t);if(!n.valid)return{success:!1,error:n.error};try{let n=await this.apiRequest(`userChangePassword`,{email:this.session.user.email,currentPassword:e,newPassword:t,sessionToken:this.getSessionToken()});return n.success&&n.sessionToken&&(this.session.token=n.sessionToken,this.saveSession(this.session)),n}catch(e){return console.error(`Change password error:`,e),{success:!1,error:`Failed to change password. Please try again.`}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};try{let t=await this.apiRequest(`userUpdateProfile`,{email:this.session.user.email,updates:JSON.stringify(e),sessionToken:this.getSessionToken()});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(e){return console.error(`Update profile error:`,e),{success:!1,error:`Failed to update profile. Please try again.`}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:`Please log in first`};try{let t=await this.apiRequest(`userDeleteAccount`,{email:this.session.user.email,password:e,sessionToken:this.getSessionToken()});return t.success&&this.clearSession(),t}catch(e){return console.error(`Delete account error:`,e),{success:!1,error:`Failed to delete account. Please try again.`}}}},p=new class{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:`assets/seima-logo.png`,brandName:`Seima`,appName:`Product App`},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById(`auth-ui-styles`))return;let e=document.createElement(`style`);e.id=`auth-ui-styles`,e.textContent=`
      /* Auth Modal Overlay */
      .auth-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.85);
        backdrop-filter: blur(8px);
        z-index: 200000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: authFadeIn 0.2s ease;
      }
      
      @keyframes authFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      /* Auth Modal Container */
      .auth-modal {
        background: #fff;
        border-radius: 16px;
        max-width: 420px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        animation: authSlideUp 0.3s ease;
      }
      
      @keyframes authSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Auth Header */
      .auth-header {
        padding: 32px 32px 0;
        text-align: center;
      }
      
      .auth-logo {
        height: 36px;
        margin-bottom: 8px;
      }
      
      .auth-brand {
        font-size: 11px;
        color: #9ca3af;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 24px;
      }
      
      .auth-title {
        font-family: var(--font-display, 'Fraunces', serif);
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 8px 0;
      }
      
      .auth-subtitle {
        font-size: 0.9375rem;
        color: #6b7280;
        margin: 0;
      }
      
      /* Auth Form */
      .auth-form {
        padding: 32px;
      }
      
      .auth-field {
        margin-bottom: 20px;
      }
      
      .auth-field label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 6px;
      }
      
      .auth-field input {
        width: 100%;
        padding: 12px 14px;
        font-size: 0.9375rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        background: #fff;
        color: #1a1a1a;
        transition: all 0.15s ease;
        box-sizing: border-box;
      }
      
      .auth-field input:focus {
        outline: none;
        border-color: var(--color-copper, #b87333);
        box-shadow: 0 0 0 3px rgba(184, 115, 51, 0.15);
      }
      
      .auth-field input.error {
        border-color: #ef4444;
      }
      
      .auth-field .field-hint {
        font-size: 0.75rem;
        color: #9ca3af;
        margin-top: 4px;
      }
      
      .auth-field .field-error {
        font-size: 0.75rem;
        color: #ef4444;
        margin-top: 4px;
      }
      
      /* Remember Me / Forgot Password Row */
      .auth-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      
      .auth-remember {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      
      .auth-remember input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--color-copper, #b87333);
      }
      
      .auth-remember span {
        font-size: 0.875rem;
        color: #4b5563;
      }
      
      .auth-forgot {
        font-size: 0.875rem;
        color: var(--color-copper, #b87333);
        text-decoration: none;
        cursor: pointer;
      }
      
      .auth-forgot:hover {
        text-decoration: underline;
      }
      
      /* Auth Buttons */
      .auth-btn {
        width: 100%;
        padding: 14px;
        font-size: 0.9375rem;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .auth-btn-primary {
        background: var(--color-charcoal, #1a1a1a);
        color: #fff;
      }
      
      .auth-btn-primary:hover {
        background: #2d2d2d;
        transform: translateY(-1px);
      }
      
      .auth-btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }
      
      .auth-btn-secondary {
        background: transparent;
        color: #4b5563;
        border: 1px solid #d1d5db;
        margin-top: 12px;
      }
      
      .auth-btn-secondary:hover {
        background: #f3f4f6;
      }
      
      /* Auth Footer Links */
      .auth-footer {
        padding: 0 32px 32px;
        text-align: center;
      }
      
      .auth-footer-text {
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .auth-footer-link {
        color: var(--color-copper, #b87333);
        font-weight: 600;
        cursor: pointer;
      }
      
      .auth-footer-link:hover {
        text-decoration: underline;
      }
      
      /* Auth Divider */
      .auth-divider {
        display: flex;
        align-items: center;
        margin: 24px 0;
        color: #9ca3af;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .auth-divider::before,
      .auth-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #e5e7eb;
      }
      
      .auth-divider span {
        padding: 0 16px;
      }
      
      /* Auth Message */
      .auth-message {
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 0.875rem;
      }
      
      .auth-message.error {
        background: #fef2f2;
        color: #b91c1c;
        border: 1px solid #fecaca;
      }
      
      .auth-message.success {
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #bbf7d0;
      }
      
      /* Auth Close Button */
      .auth-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        color: #9ca3af;
        cursor: pointer;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      
      .auth-close:hover {
        background: #f3f4f6;
        color: #4b5563;
      }
      
      /* User Menu (logged in state) */
      .user-menu-trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        background: rgba(255,255,255,0.1);
        border: none;
        border-radius: 6px;
        color: rgba(255,255,255,0.9);
        font-size: 0.8125rem;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .user-menu-trigger:hover {
        background: rgba(255,255,255,0.15);
      }
      
      .user-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-copper, #b87333);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6875rem;
        font-weight: 600;
      }
      
      .user-menu-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 8px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        min-width: 220px;
        overflow: hidden;
        z-index: 100;
        animation: dropdownFadeIn 0.15s ease;
      }
      
      @keyframes dropdownFadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .user-menu-header {
        padding: 16px;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .user-menu-name {
        font-weight: 600;
        color: #1a1a1a;
        font-size: 0.9375rem;
      }
      
      .user-menu-email {
        font-size: 0.75rem;
        color: #6b7280;
        margin-top: 2px;
      }
      
      .user-menu-items {
        padding: 8px;
      }
      
      .user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .user-menu-item.danger {
        color: #b91c1c;
      }
      
      .user-menu-item.danger:hover {
        background: #fef2f2;
      }
      
      .user-menu-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 4px 8px;
      }
      
      .user-menu-footer {
        padding: 10px 16px;
        border-top: 1px solid #e5e7eb;
        font-size: 0.6875rem;
        color: #9ca3af;
        text-align: center;
        cursor: pointer;
        transition: color 0.15s ease;
      }
      
      .user-menu-footer:hover {
        color: #6b7280;
      }
      
      /* Loading Spinner */
      .auth-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: authSpin 0.8s linear infinite;
        display: inline-block;
        margin-right: 8px;
      }
      
      @keyframes authSpin {
        to { transform: rotate(360deg); }
      }
      
      /* Reset Code Input */
      .reset-code-input {
        font-family: 'SF Mono', 'Consolas', monospace;
        font-size: 1.5rem !important;
        text-align: center;
        letter-spacing: 0.3em;
        text-transform: uppercase;
      }
      
      /* User Menu (Mobile-friendly) */
      .auth-user-menu {
        position: fixed;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        min-width: 260px;
        max-width: 320px;
        z-index: 200001;
        overflow: hidden;
        animation: authSlideUp 0.2s ease;
      }
      
      .auth-user-menu-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
        color: #fff;
      }
      
      .auth-user-menu-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
      }
      
      .auth-user-menu-info {
        flex: 1;
        min-width: 0;
      }
      
      .auth-user-menu-name {
        font-weight: 600;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-email {
        font-size: 0.8rem;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-items {
        padding: 8px;
      }
      
      .auth-user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 14px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.9375rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .auth-user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .auth-user-menu-item svg {
        flex-shrink: 0;
        color: #6b7280;
      }
      
      .auth-user-menu-item-danger {
        color: #b91c1c;
      }
      
      .auth-user-menu-item-danger:hover {
        background: #fef2f2;
      }
      
      .auth-user-menu-item-danger svg {
        color: #b91c1c;
      }
      
      .auth-user-menu-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 8px 0;
      }
      
      /* Mobile adjustments */
      @media (max-width: 480px) {
        .auth-user-menu {
          left: 16px !important;
          right: 16px !important;
          max-width: none;
        }
      }
      
      /* Verify email banner (when logged in but not verified) */
      .verify-email-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 10px 20px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-bottom: 1px solid #f59e0b;
        color: #92400e;
        font-size: 0.875rem;
      }
      .verify-email-btn {
        padding: 6px 14px;
        background: #f59e0b;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.8125rem;
        cursor: pointer;
      }
      .verify-email-btn:hover {
        background: #d97706;
      }
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null;let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Login</h2>
            <p class="auth-subtitle">Sign in to create PDF and other features</p>
          </div>
          
          <form class="auth-form" id="login-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="login-email">Email</label>
              <input type="email" id="login-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="login-password">Password</label>
              <input type="password" id="login-password" placeholder="Enter your password" required>
            </div>
            
            <div class="auth-options">
              <label class="auth-remember">
                <input type="checkbox" id="login-remember">
                <span>Remember me</span>
              </label>
              <a class="auth-forgot" id="show-forgot">Forgot password?</a>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="login-submit">
              Sign In
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Don't have an account? 
              <span class="auth-footer-link" id="show-register">Create one</span>
            </p>
            <p class="auth-footer-text" style="margin-top:8px;">
              Need to verify your email? 
              <span class="auth-footer-link" id="show-verify">Verify now</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(t),this.setupLoginHandlers(e)}showRegister(){let e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Create Account</h2>
            <p class="auth-subtitle">Register for staff access</p>
          </div>
          
          <form class="auth-form" id="register-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="register-name">Full Name *</label>
              <input type="text" id="register-name" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="register-email">Email *</label>
              <input type="email" id="register-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="register-password">Password *</label>
              <input type="password" id="register-password" placeholder="Create a password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="register-position">Position</label>
              <input type="text" id="register-position" placeholder="e.g. Sales Consultant">
            </div>
            
            <div class="auth-field">
              <label for="register-phone">Phone</label>
              <input type="tel" id="register-phone" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="register-submit">
              Create Account
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Already have an account? 
              <span class="auth-footer-link" id="show-login">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(e),this.setupRegisterHandlers()}showForgotPassword(){let e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Reset Password</h2>
            <p class="auth-subtitle">Enter your email to receive a reset code</p>
          </div>
          
          <form class="auth-form" id="forgot-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="forgot-email">Email</label>
              <input type="email" id="forgot-email" placeholder="you@example.com" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="forgot-submit">
              Send Reset Code
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(e),this.setupForgotHandlers()}showResetPassword(e=``){let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Enter Reset Code</h2>
            <p class="auth-subtitle">Check your email for the 6-character code</p>
          </div>
          
          <form class="auth-form" id="reset-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="reset-email">Email</label>
              <input type="email" id="reset-email" value="${this._escapeAttr(e)}" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-code">Reset Code</label>
              <input type="text" id="reset-code" class="reset-code-input" placeholder="ABC123" maxlength="6" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-new-password">New Password</label>
              <input type="password" id="reset-new-password" placeholder="Create a new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="reset-submit">
              Reset Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(t),this.setupResetHandlers()}showVerifyEmail(e=``,t=null){let n=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Verify Your Email</h2>
            <p class="auth-subtitle">Enter the 6-character code we sent to your email</p>
          </div>
          
          <form class="auth-form" id="verify-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="verify-email">Email</label>
              <input type="email" id="verify-email" value="${this._escapeAttr(e)}" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="verify-code">Verification Code</label>
              <input type="text" id="verify-code" class="reset-code-input" placeholder="ABC123" maxlength="6" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="verify-submit">
              Verify Email
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="verify-resend">
              Resend Code
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="verify-to-login">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(n),this.setupVerifyEmailHandlers(t)}_escapeAttr(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}showEditProfile(e=null){let t=f.getCurrentUser();if(!t){console.warn(`Cannot edit profile: not logged in`);return}let n=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Edit Profile</h2>
            <p class="auth-subtitle">Update your contact information</p>
          </div>
          
          <form class="auth-form" id="edit-profile-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="profile-email">Email</label>
              <input type="email" id="profile-email" value="${this._escapeAttr(t.email||``)}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${this._escapeAttr(t.name||``)}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${this._escapeAttr(t.position||``)}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${this._escapeAttr(t.phone||``)}" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="profile-submit">
              Save Changes
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="profile-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(n),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){document.getElementById(`edit-profile-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`profile-name`)?.value?.trim(),r=document.getElementById(`profile-position`)?.value?.trim()||``,i=document.getElementById(`profile-phone`)?.value?.trim()||``;if(!n){this.showMessage(`Name is required`);return}this.setLoading(`profile-submit`,!0);let a=await f.updateProfile({name:n,position:r,phone:i});this.setLoading(`profile-submit`,!1),a.success?(this.showMessage(`Profile updated successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e(a.user)},1e3)):this.showMessage(a.error)}),document.getElementById(`profile-cancel`)?.addEventListener(`click`,()=>this.closeModal())}showChangePassword(e=null){if(!f.isLoggedIn()){console.warn(`Cannot change password: not logged in`);return}let t=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Change Password</h2>
            <p class="auth-subtitle">Enter your current and new password</p>
          </div>
          
          <form class="auth-form" id="change-password-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="current-password">Current Password</label>
              <input type="password" id="current-password" placeholder="Enter current password" required>
            </div>
            
            <div class="auth-field">
              <label for="new-password">New Password</label>
              <input type="password" id="new-password" placeholder="Enter new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="confirm-password">Confirm New Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm new password" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="password-submit">
              Change Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="password-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(t),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){document.getElementById(`change-password-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`current-password`)?.value,r=document.getElementById(`new-password`)?.value;if(r!==document.getElementById(`confirm-password`)?.value){this.showMessage(`New passwords do not match`);return}if(r.length<8){this.showMessage(`New password must be at least 8 characters`);return}if(!/\d/.test(r)){this.showMessage(`New password must contain at least one number`);return}this.setLoading(`password-submit`,!0);let i=await f.changePassword(n,r);this.setLoading(`password-submit`,!1),i.success?(this.showMessage(`Password changed successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(i.error)}),document.getElementById(`password-cancel`)?.addEventListener(`click`,()=>this.closeModal())}showUserMenu(e,t={}){let n=f.getCurrentUser();if(!n)return;let r=document.getElementById(`auth-user-menu`);if(r){r.remove();return}let i=`
      <div id="auth-user-menu" class="auth-user-menu">
        <div class="auth-user-menu-header">
          <div class="auth-user-menu-avatar">${this.getInitials(n.name)}</div>
          <div class="auth-user-menu-info">
            <div class="auth-user-menu-name">${n.name||`User`}</div>
            <div class="auth-user-menu-email">${n.email||``}</div>
          </div>
        </div>
        <div class="auth-user-menu-items">
          <button class="auth-user-menu-item" id="user-menu-profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Edit Profile
          </button>
          <button class="auth-user-menu-item" id="user-menu-password">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Change Password
          </button>
          <div class="auth-user-menu-divider"></div>
          <button class="auth-user-menu-item auth-user-menu-item-danger" id="user-menu-logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.getElementById(`auth-user-menu`);if(e){let t=e.getBoundingClientRect();a.style.position=`fixed`,a.style.top=t.bottom+8+`px`,a.style.right=window.innerWidth-t.right+`px`}document.getElementById(`user-menu-profile`)?.addEventListener(`click`,()=>{a.remove(),this.showEditProfile()}),document.getElementById(`user-menu-password`)?.addEventListener(`click`,()=>{a.remove(),this.showChangePassword()}),document.getElementById(`user-menu-logout`)?.addEventListener(`click`,()=>{a.remove(),f.logout(),t.onLogout&&t.onLogout()}),setTimeout(()=>{let t=n=>{!a.contains(n.target)&&n.target!==e&&(a.remove(),document.removeEventListener(`click`,t))};document.addEventListener(`click`,t)},10)}showModal(e){this.closeModal();let t=document.createElement(`div`);t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById(`auth-modal`),document.getElementById(`auth-close`)?.addEventListener(`click`,()=>this.closeModal()),document.addEventListener(`keydown`,this.escHandler=e=>{e.key===`Escape`&&this.closeModal()})}closeModal(){this.currentModal&&=(this.currentModal.remove(),null),this.escHandler&&document.removeEventListener(`keydown`,this.escHandler)}showMessage(e,t=`error`){let n=document.getElementById(`auth-message`);if(n){let r=document.createElement(`div`);r.className=`auth-message ${t}`,r.textContent=e,n.innerHTML=``,n.appendChild(r)}}setLoading(e,t){let n=document.getElementById(e);n&&(t?(n.disabled=!0,n.dataset.originalText=n.textContent,n.innerHTML=`<span class="auth-spinner"></span>Please wait...`):(n.disabled=!1,n.textContent=n.dataset.originalText||`Submit`))}setupLoginHandlers(e){document.getElementById(`login-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`login-email`)?.value,r=document.getElementById(`login-password`)?.value,i=document.getElementById(`login-remember`)?.checked||!1;this.setLoading(`login-submit`,!0);let a=await f.login(n,r,i);this.setLoading(`login-submit`,!1),a.success?(this.closeModal(),e&&e(a.user),this.pendingAction?.callback&&(this.pendingAction.callback(a.user),this.pendingAction=null)):this.showMessage(a.error)}),document.getElementById(`show-register`)?.addEventListener(`click`,()=>this.showRegister()),document.getElementById(`show-forgot`)?.addEventListener(`click`,()=>this.showForgotPassword()),document.getElementById(`show-verify`)?.addEventListener(`click`,()=>this.showVerifyEmail())}setupRegisterHandlers(){document.getElementById(`register-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`register-name`)?.value,n=document.getElementById(`register-email`)?.value,r=document.getElementById(`register-password`)?.value,i=document.getElementById(`register-position`)?.value||``,a=document.getElementById(`register-phone`)?.value||``;this.setLoading(`register-submit`,!0);let o=await f.register(n,r,t,i,a);this.setLoading(`register-submit`,!1),o.success?(this.closeModal(),this.showVerifyEmail(n.trim(),()=>{})):this.showMessage(o.error)}),document.getElementById(`show-login`)?.addEventListener(`click`,()=>this.showLogin())}setupForgotHandlers(){document.getElementById(`forgot-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`forgot-email`)?.value;this.setLoading(`forgot-submit`,!0);let n=await f.requestPasswordReset(t);this.setLoading(`forgot-submit`,!1),n.success?(this.showMessage(`If this email exists, a reset code has been sent.`,`success`),setTimeout(()=>this.showResetPassword(t),2e3)):this.showMessage(n.error)}),document.getElementById(`show-login-back`)?.addEventListener(`click`,()=>this.showLogin())}setupResetHandlers(){document.getElementById(`reset-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`reset-email`)?.value,n=document.getElementById(`reset-code`)?.value,r=document.getElementById(`reset-new-password`)?.value;this.setLoading(`reset-submit`,!0);let i=await f.resetPassword(t,n,r);this.setLoading(`reset-submit`,!1),i.success?(this.showMessage(`Password reset successfully! You can now sign in.`,`success`),setTimeout(()=>this.showLogin(),1500)):this.showMessage(i.error)}),document.getElementById(`show-login-back`)?.addEventListener(`click`,()=>this.showLogin())}setupVerifyEmailHandlers(e){document.getElementById(`verify-form`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`verify-email`)?.value,r=document.getElementById(`verify-code`)?.value;this.setLoading(`verify-submit`,!0);let i=await f.verifyEmail(n,r);this.setLoading(`verify-submit`,!1),i.success?(this.showMessage(`Email verified successfully!`,`success`),setTimeout(()=>{this.closeModal(),e&&e(),this.showLogin()},1500)):this.showMessage(i.error)}),document.getElementById(`verify-resend`)?.addEventListener(`click`,async()=>{let e=document.getElementById(`verify-email`)?.value;if(!e){this.showMessage(`Please enter your email first`);return}this.setLoading(`verify-resend`,!0);let t=await f.requestEmailVerification(e);this.setLoading(`verify-resend`,!1),this.showMessage(t.success?`Verification code sent! Check your email.`:t.error,t.success?`success`:`error`)}),document.getElementById(`verify-to-login`)?.addEventListener(`click`,()=>this.showLogin())}getInitials(e){if(!e)return`?`;let t=e.split(` `);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t=`continue`){f.isLoggedIn()?e(f.getCurrentUser()):this.showLogin(e)}};function m(e){return Array.isArray?Array.isArray(e):w(e)===`[object Array]`}function h(e){if(typeof e==`string`)return e;let t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function g(e){return e==null?``:h(e)}function _(e){return typeof e==`string`}function v(e){return typeof e==`number`}function y(e){return e===!0||e===!1||x(e)&&w(e)==`[object Boolean]`}function b(e){return typeof e==`object`}function x(e){return b(e)&&e!==null}function S(e){return e!=null}function C(e){return!e.trim().length}function w(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}var ee=`Incorrect 'index' type`,T=e=>`Invalid value for key ${e}`,te=e=>`Pattern length exceeds max of ${e}.`,ne=e=>`Missing ${e} property in key`,E=e=>`Property 'weight' in key '${e}' must be a positive integer`,D=Object.prototype.hasOwnProperty,O=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=k(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function k(e){let t=null,n=null,r=null,i=1,a=null;if(_(e)||m(e))r=e,t=A(e),n=re(e);else{if(!D.call(e,`name`))throw Error(ne(`name`));let o=e.name;if(r=o,D.call(e,`weight`)&&(i=e.weight,i<=0))throw Error(E(o));t=A(o),n=re(o),a=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:a}}function A(e){return m(e)?e:e.split(`.`)}function re(e){return m(e)?e.join(`.`):e}function ie(e,t){let n=[],r=!1,i=(e,t,a)=>{if(S(e))if(!t[a])n.push(e);else{let o=e[t[a]];if(!S(o))return;if(a===t.length-1&&(_(o)||v(o)||y(o)))n.push(g(o));else if(m(o)){r=!0;for(let e=0,n=o.length;e<n;e+=1)i(o[e],t,a+1)}else t.length&&i(o,t,a+1)}};return i(e,_(t)?t.split(`.`):t,0),r?n:n[0]}var ae={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},oe={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},se={location:0,threshold:.6,distance:100},ce={useExtendedSearch:!1,getFn:ie,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},j={...oe,...ae,...se,...ce},le=/[^ ]+/g;function ue(e=1,t=3){let n=new Map,r=10**t;return{get(t){let i=t.match(le).length;if(n.has(i))return n.get(i);let a=1/i**(.5*e),o=parseFloat(Math.round(a*r)/r);return n.set(i,o),o},clear(){n.clear()}}}var de=class{constructor({getFn:e=j.getFn,fieldNormWeight:t=j.fieldNormWeight}={}){this.norm=ue(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();_(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)--this.records[t].i}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!S(e)||C(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((t,r)=>{let i=t.getFn?t.getFn(e):this.getFn(e,t.path);if(S(i)){if(m(i)){let e=[],t=[{nestedArrIndex:-1,value:i}];for(;t.length;){let{nestedArrIndex:n,value:r}=t.pop();if(S(r))if(_(r)&&!C(r)){let t={v:r,i:n,n:this.norm.get(r)};e.push(t)}else m(r)&&r.forEach((e,n)=>{t.push({nestedArrIndex:n,value:e})})}n.$[r]=e}else if(_(i)&&!C(i)){let e={v:i,n:this.norm.get(i)};n.$[r]=e}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}};function fe(e,t,{getFn:n=j.getFn,fieldNormWeight:r=j.fieldNormWeight}={}){let i=new de({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(k)),i.setSources(t),i.create(),i}function pe(e,{getFn:t=j.getFn,fieldNormWeight:n=j.fieldNormWeight}={}){let{keys:r,records:i}=e,a=new de({getFn:t,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function M(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=j.distance,ignoreLocation:a=j.ignoreLocation}={}){let o=t/e.length;if(a)return o;let s=Math.abs(r-n);return i?o+s/i:s?1:o}function me(e=[],t=j.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let o=e.length;a<o;a+=1){let o=e[a];o&&r===-1?r=a:!o&&r!==-1&&(i=a-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}var N=32;function he(e,t,n,{location:r=j.location,distance:i=j.distance,threshold:a=j.threshold,findAllMatches:o=j.findAllMatches,minMatchCharLength:s=j.minMatchCharLength,includeMatches:c=j.includeMatches,ignoreLocation:l=j.ignoreLocation}={}){if(t.length>N)throw Error(te(N));let u=t.length,d=e.length,f=Math.max(0,Math.min(r,d)),p=a,m=f,h=s>1||c,g=h?Array(d):[],_;for(;(_=e.indexOf(t,m))>-1;){let e=M(t,{currentLocation:_,expectedLocation:f,distance:i,ignoreLocation:l});if(p=Math.min(e,p),m=_+u,h){let e=0;for(;e<u;)g[_+e]=1,e+=1}}m=-1;let v=[],y=1,b=u+d,x=1<<u-1;for(let r=0;r<u;r+=1){let a=0,s=b;for(;a<s;)M(t,{errors:r,currentLocation:f+s,expectedLocation:f,distance:i,ignoreLocation:l})<=p?a=s:b=s,s=Math.floor((b-a)/2+a);b=s;let c=Math.max(1,f-s+1),_=o?d:Math.min(f+s,d)+u,S=Array(_+2);S[_+1]=(1<<r)-1;for(let a=_;a>=c;--a){let o=a-1,s=n[e.charAt(o)];if(h&&(g[o]=+!!s),S[a]=(S[a+1]<<1|1)&s,r&&(S[a]|=(v[a+1]|v[a])<<1|1|v[a+1]),S[a]&x&&(y=M(t,{errors:r,currentLocation:o,expectedLocation:f,distance:i,ignoreLocation:l}),y<=p)){if(p=y,m=o,m<=f)break;c=Math.max(1,2*f-m)}}if(M(t,{errors:r+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:l})>p)break;v=S}let S={isMatch:m>=0,score:Math.max(.001,y)};if(h){let e=me(g,s);e.length?c&&(S.indices=e):S.isMatch=!1}return S}function ge(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}var P=String.prototype.normalize?(e=>e.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,``)):(e=>e),_e=class{constructor(e,{location:t=j.location,threshold:n=j.threshold,distance:r=j.distance,includeMatches:i=j.includeMatches,findAllMatches:a=j.findAllMatches,minMatchCharLength:o=j.minMatchCharLength,isCaseSensitive:s=j.isCaseSensitive,ignoreDiacritics:c=j.ignoreDiacritics,ignoreLocation:l=j.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:s,ignoreDiacritics:c,ignoreLocation:l},e=s?e:e.toLowerCase(),e=c?P(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;let u=(e,t)=>{this.chunks.push({pattern:e,alphabet:ge(e),startIndex:t})},d=this.pattern.length;if(d>N){let e=0,t=d%N,n=d-t;for(;e<n;)u(this.pattern.substr(e,N),e),e+=N;if(t){let e=d-N;u(this.pattern.substr(e),e)}}else u(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=n?P(e):e,this.pattern===e){let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:i,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:l}=this.options,u=[],d=0,f=!1;this.chunks.forEach(({pattern:t,alphabet:n,startIndex:p})=>{let{isMatch:m,score:h,indices:g}=he(e,t,n,{location:i+p,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});m&&(f=!0),d+=h,m&&g&&(u=[...u,...g])});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=u),p}},F=class{constructor(e){this.pattern=e}static isMultiMatch(e){return ve(e,this.multiRegex)}static isSingleMatch(e){return ve(e,this.singleRegex)}search(){}};function ve(e,t){let n=e.match(t);return n?n[1]:null}var ye=class extends F{constructor(e){super(e)}static get type(){return`exact`}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:+!t,indices:[0,this.pattern.length-1]}}},be=class extends F{constructor(e){super(e)}static get type(){return`inverse-exact`}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern)===-1;return{isMatch:t,score:+!t,indices:[0,e.length-1]}}},xe=class extends F{constructor(e){super(e)}static get type(){return`prefix-exact`}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:+!t,indices:[0,this.pattern.length-1]}}},Se=class extends F{constructor(e){super(e)}static get type(){return`inverse-prefix-exact`}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:+!t,indices:[0,e.length-1]}}},Ce=class extends F{constructor(e){super(e)}static get type(){return`suffix-exact`}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:+!t,indices:[e.length-this.pattern.length,e.length-1]}}},we=class extends F{constructor(e){super(e)}static get type(){return`inverse-suffix-exact`}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:+!t,indices:[0,e.length-1]}}},Te=class extends F{constructor(e,{location:t=j.location,threshold:n=j.threshold,distance:r=j.distance,includeMatches:i=j.includeMatches,findAllMatches:a=j.findAllMatches,minMatchCharLength:o=j.minMatchCharLength,isCaseSensitive:s=j.isCaseSensitive,ignoreDiacritics:c=j.ignoreDiacritics,ignoreLocation:l=j.ignoreLocation}={}){super(e),this._bitapSearch=new _e(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:s,ignoreDiacritics:c,ignoreLocation:l})}static get type(){return`fuzzy`}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}},Ee=class extends F{constructor(e){super(e)}static get type(){return`include`}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n,r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+i,r.push([n,t-1]);let a=!!r.length;return{isMatch:a,score:+!a,indices:r}}},De=[ye,Ee,xe,Se,we,Ce,be,Te],Oe=De.length,ke=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ae=`|`;function je(e,t={}){return e.split(Ae).map(e=>{let n=e.trim().split(ke).filter(e=>e&&!!e.trim()),r=[];for(let e=0,i=n.length;e<i;e+=1){let i=n[e],a=!1,o=-1;for(;!a&&++o<Oe;){let e=De[o],n=e.isMultiMatch(i);n&&(r.push(new e(n,t)),a=!0)}if(!a)for(o=-1;++o<Oe;){let e=De[o],n=e.isSingleMatch(i);if(n){r.push(new e(n,t));break}}}return r})}var Me=new Set([Te.type,Ee.type]),Ne=class{constructor(e,{isCaseSensitive:t=j.isCaseSensitive,ignoreDiacritics:n=j.ignoreDiacritics,includeMatches:r=j.includeMatches,minMatchCharLength:i=j.minMatchCharLength,ignoreLocation:a=j.ignoreLocation,findAllMatches:o=j.findAllMatches,location:s=j.location,threshold:c=j.threshold,distance:l=j.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:a,location:s,threshold:c,distance:l},e=t?e:e.toLowerCase(),e=n?P(e):e,this.pattern=e,this.query=je(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r,ignoreDiacritics:i}=this.options;e=r?e:e.toLowerCase(),e=i?P(e):e;let a=0,o=[],s=0;for(let r=0,i=t.length;r<i;r+=1){let i=t[r];o.length=0,a=0;for(let t=0,r=i.length;t<r;t+=1){let r=i[t],{isMatch:c,indices:l,score:u}=r.search(e);if(c){if(a+=1,s+=u,n){let e=r.constructor.type;Me.has(e)?o=[...o,...l]:o.push(l)}}else{s=0,a=0,o.length=0;break}}if(a){let e={isMatch:!0,score:s/a};return n&&(e.indices=o),e}}return{isMatch:!1,score:1}}},Pe=[];function Fe(...e){Pe.push(...e)}function Ie(e,t){for(let n=0,r=Pe.length;n<r;n+=1){let r=Pe[n];if(r.condition(e,t))return new r(e,t)}return new _e(e,t)}var I={AND:`$and`,OR:`$or`},Le={PATH:`$path`,PATTERN:`$val`},Re=e=>!!(e[I.AND]||e[I.OR]),ze=e=>!!e[Le.PATH],Be=e=>!m(e)&&b(e)&&!Re(e),Ve=e=>({[I.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function He(e,t,{auto:n=!0}={}){let r=e=>{let i=Object.keys(e),a=ze(e);if(!a&&i.length>1&&!Re(e))return r(Ve(e));if(Be(e)){let r=a?e[Le.PATH]:i[0],o=a?e[Le.PATTERN]:e[r];if(!_(o))throw Error(T(r));let s={keyId:re(r),pattern:o};return n&&(s.searcher=Ie(o,t)),s}let o={children:[],operator:i[0]};return i.forEach(t=>{let n=e[t];m(n)&&n.forEach(e=>{o.children.push(r(e))})}),o};return Re(e)||(e=Ve(e)),r(e)}function Ue(e,{ignoreFieldNorm:t=j.ignoreFieldNorm}){e.forEach(e=>{let n=1;e.matches.forEach(({key:e,norm:r,score:i})=>{let a=e?e.weight:null;n*=(i===0&&a?2**-52:i)**+((a||1)*(t?1:r))}),e.score=n})}function We(e,t){let n=e.matches;t.matches=[],S(n)&&n.forEach(e=>{if(!S(e.indices)||!e.indices.length)return;let{indices:n,value:r}=e,i={indices:n,value:r};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)})}function Ge(e,t){t.score=e.score}function Ke(e,t,{includeMatches:n=j.includeMatches,includeScore:r=j.includeScore}={}){let i=[];return n&&i.push(We),r&&i.push(Ge),e.map(e=>{let{idx:n}=e,r={item:t[n],refIndex:n};return i.length&&i.forEach(t=>{t(e,r)}),r})}var L=class{constructor(e,t={},n){this.options={...j,...t},this.options.useExtendedSearch,this._keyStore=new O(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof de))throw Error(ee);this._myIndex=t||fe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){S(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let n=0,r=this._docs.length;n<r;n+=1){let i=this._docs[n];e(i,n)&&(this.removeAt(n),--n,--r,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:n,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:o}=this.options,s=_(e)?_(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Ue(s,{ignoreFieldNorm:o}),i&&s.sort(a),v(t)&&t>-1&&(s=s.slice(0,t)),Ke(s,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){let t=Ie(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:e,i:n,n:i})=>{if(!S(e))return;let{isMatch:a,score:o,indices:s}=t.searchIn(e);a&&r.push({item:e,idx:n,matches:[{score:o,value:e,norm:i,indices:s}]})}),r}_searchLogical(e){let t=He(e,this.options),n=(e,t,r)=>{if(!e.children){let{keyId:n,searcher:i}=e,a=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:i});return a&&a.length?[{idx:r,item:t,matches:a}]:[]}let i=[];for(let a=0,o=e.children.length;a<o;a+=1){let o=e.children[a],s=n(o,t,r);if(s.length)i.push(...s);else if(e.operator===I.AND)return[]}return i},r=this._myIndex.records,i={},a=[];return r.forEach(({$:e,i:r})=>{if(S(e)){let o=n(t,e,r);o.length&&(i[r]||(i[r]={idx:r,item:e,matches:[]},a.push(i[r])),o.forEach(({matches:e})=>{i[r].matches.push(...e)}))}}),a}_searchObjectList(e){let t=Ie(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:e,i:r})=>{if(!S(e))return;let a=[];n.forEach((n,r)=>{a.push(...this._findMatches({key:n,value:e[r],searcher:t}))}),a.length&&i.push({idx:r,item:e,matches:a})}),i}_findMatches({key:e,value:t,searcher:n}){if(!S(t))return[];let r=[];if(m(t))t.forEach(({v:t,i,n:a})=>{if(!S(t))return;let{isMatch:o,score:s,indices:c}=n.searchIn(t);o&&r.push({score:s,key:e,value:t,idx:i,norm:a,indices:c})});else{let{v:i,n:a}=t,{isMatch:o,score:s,indices:c}=n.searchIn(i);o&&r.push({score:s,key:e,value:i,norm:a,indices:c})}return r}};L.version=`7.1.0`,L.createIndex=fe,L.parseIndex=pe,L.config=j,L.parseQuery=He,Fe(Ne);var qe={keys:[{name:`OrderCode`,weight:1},{name:`ProductName`,weight:.8},{name:`Range`,weight:.5},{name:`Group`,weight:.5},{name:`SubGroup`,weight:.5},{name:`Description`,weight:.4},{name:`Finish`,weight:.35},{name:`Colour`,weight:.35},{name:`LongDescription`,weight:.2}],threshold:.4,includeScore:!0,ignoreLocation:!0,minMatchCharLength:2};function Je(e){return{...e,ProductName:e.ProductName||e[`Product Name`]||``,LongDescription:e.LongDescription||e[`Long Description`]||``,SubGroup:e.SubGroup||e.Subgroup||``,Colour:e.Colour||e.Color||``,Barcode:(e.BARCODE||e.Barcode||``).toString()}}var Ye=class{constructor(e={}){this._getSynonyms=e.getSynonyms||(e=>[e]),this._products=[],this._normalised=[],this._fuse=null,this._codeIndex=new Map,this._termIndex=new Map}buildIndex(e){this._products=e,this._normalised=e.map(Je),this._fuse=new L(this._normalised,qe),this._codeIndex.clear(),this._termIndex.clear();for(let t=0;t<e.length;t++){let n=e[t];n.OrderCode&&(this._codeIndex.set(n.OrderCode.toString().toLowerCase().trim(),t),this._codeIndex.set(n.OrderCode.toString().toLowerCase().trim().replace(/[-\s]/g,``),t));let r=(n.BARCODE||n.Barcode||``).toString().trim();r&&(this._codeIndex.set(r.toLowerCase(),t),this._codeIndex.set(r.toLowerCase().replace(/[-\s]/g,``),t));let i=this._normalised[t],a=[i.OrderCode,i.ProductName,i.Description,i.Range,i.Group,i.SubGroup,i.Finish,i.Colour,i.LongDescription].join(` `).toLowerCase().split(/\s+/).filter(e=>e.length>=2),o=new Set;for(let e of a){if(o.has(e))continue;o.add(e);let n=this._termIndex.get(e);n||(n=[],this._termIndex.set(e,n)),n.push(t)}}}findByCode(e){if(!e)return null;let t=e.toString().toLowerCase().trim(),n=this._codeIndex.get(t)??this._codeIndex.get(t.replace(/[-\s]/g,``));return n==null?null:this._products[n]}search(e,t=50,{fuzzy:n=!1}={}){return!e||e.length<2?[]:n?this._searchFuzzy(e,t):this._searchExact(e,t)}_searchExact(e,t){let n=e.toLowerCase().trim().split(/\s+/).filter(e=>e.length>=2);if(n.length===0)return[];let r=null;if(this._termIndex.size>0){let e=n[0],t=this._getSynonyms(e),i=new Set;for(let e of t)for(let[t,n]of this._termIndex)if(t.includes(e))for(let e of n)i.add(e);i.size>0&&i.size<this._normalised.length*.7&&(r=i)}let i=[],a=r?[...r].map(e=>this._normalised[e]):this._normalised;for(let e of a){let t=n.map(t=>this._scoreExact(e,t));if(t.some(e=>e===0))continue;let r=t.reduce((e,t)=>e+t,0)/t.length;i.push({product:e,score:r})}return i.sort((e,t)=>t.score-e.score),i.slice(0,t).map(e=>e.product)}_scoreExact(e,t){let n=0,r=(e.OrderCode||``).toString().toLowerCase().trim(),i=(e.Barcode||``).toString().toLowerCase().trim(),a=(e.ProductName||``).toLowerCase().trim(),o=(e.Description||``).toLowerCase().trim(),s=(e.LongDescription||``).toLowerCase().trim(),c=(e.Range||``).toLowerCase().trim(),l=(e.Group||``).toLowerCase().trim(),u=(e.SubGroup||``).toLowerCase().trim(),d=(e.Finish||``).toLowerCase().trim(),f=(e.Colour||``).toLowerCase().trim(),p=/^\d+$/.test(t),m=this._getSynonyms(t);if(m.some(e=>e!==t)){let e=[a,o,l,u,c,s].join(` `);for(let t of m)if(e.includes(t)){n=Math.max(n,45);break}}return r===t||i===t?100:(r.includes(t)&&(n=Math.max(n,90)),!p&&i.includes(t)&&(n=Math.max(n,90)),a===t?n=Math.max(n,80):a.startsWith(t)?n=Math.max(n,70):a.includes(t)&&(n=Math.max(n,60)),u===t||l===t?n=Math.max(n,62):c===t?n=Math.max(n,56):(c.includes(t)||l.includes(t)||u.includes(t))&&(n=Math.max(n,50)),o.includes(t)&&(n=Math.max(n,40)),(d.includes(t)||f.includes(t))&&(n=Math.max(n,30)),s.includes(t)&&(n=Math.max(n,20)),n)}_searchFuzzy(e,t){if(!this._fuse)return[];let n=e.toLowerCase().trim().split(/\s+/).filter(e=>e.length>=2);if(n.length===0)return[];let r=new Map;for(let e of n){let n=this._getSynonyms(e);for(let i of n){let n=this._fuse.search(i,{limit:t*2});for(let t of n){let n=t.item.OrderCode;if(!n)continue;let i=r.get(n);(!i||t.score<i.score)&&r.set(n,{product:t.item,score:t.score,matchedTerms:i?i.matchedTerms:new Set}),r.get(n).matchedTerms.add(e)}}}let i=[...r.values()];return i.sort((e,t)=>{let n=t.matchedTerms.size-e.matchedTerms.size;return n===0?e.score-t.score:n}),i.slice(0,t).map(e=>e.product)}};function Xe(e){let t=String(e??``).trim();if(!t)return``;let n=t.match(/^=HYPERLINK\s*\(\s*"([^"]+)"/i);if(n)return n[1].trim();let r=t.match(/^=HYPERLINK\s*\(\s*'([^']+)'/i);return r?r[1].trim():((t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`))&&(t=t.slice(1,-1).trim()),t)}function Ze(e){let t=Xe(e);return!t||t===`#`?``:t.startsWith(`http://`)||t.startsWith(`https://`)?t:t.startsWith(`//`)?`https:${t}`:/^www\./i.test(t)||/^(pages\.)?seima\.com\.au(\/|$)/i.test(t)?`https://${t}`:t}function Qe(e){if(!e||typeof e!=`string`)return[];let t=e.trim();return t.startsWith(`//`)&&(t=`https:${t}`),t.startsWith(`data:`)?[t]:!t.startsWith(`http://`)&&!t.startsWith(`https://`)?[]:[`https://wsrv.nl/?url=${encodeURIComponent(t)}`,`https://images.weserv.nl/?url=${encodeURIComponent(t)}`,`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(t)}`,t]}function $e(e,t){let n=String(e??``).trim();if(!n)return``;if(/^https?:\/\//i.test(n))return n;if(n.startsWith(`//`))return`https:${n}`;if(/^www\./i.test(n))return n;let r=n.replace(/^\/+/,``);return r?/^(datasheets|images|diagrams)\//i.test(r)?`https://pages.seima.com.au/${r}`:`https://pages.seima.com.au/${t}/${r}`:``}function et(e,t){let n=Xe(e).trim();return!n||n===`#`?``:Ze($e(n,t))}function tt(e,t){let n=e||{},r=t===`diagram`?n.Diagram_URL||n.diagramUrl||n[`Diagram URL`]||n[`Web Diagram`]||n[`Web diagram`]||n.X_WEB_DIAG||n.X_WEB_DIAG||n.LineDrawing_URL||n[`Line Drawing URL`]||``:n.Image_URL||n.imageUrl||n[`Image URL`]||n.X_WEB_IMAGE||n.X_IMAGE_WEB||n.X_IMAGE_WEB||n.X_WEB_IMAGE||``,i=t===`diagram`?`diagrams`:`images`;return $e(String(r||``).trim(),i)}function nt(e){try{if(typeof localStorage>`u`||localStorage.getItem(`seimaPdfDebug`)!==`1`)return;let t=e||{},n=String(t.OrderCode||t.Code||``).trim();console.warn(`[seimaPdfDebug]`,n||`(no code)`,{Image_URL:t.Image_URL||``,Diagram_URL:t.Diagram_URL||``,Datasheet_URL:t.Datasheet_URL||``,Website_URL:t.Website_URL||``})}catch{}}function rt(e){if(!e||typeof e!=`object`)return e;let t={...e},n=t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||t.X_WEB_DSHEET||t.X_WEB_DSHEET||``,r=typeof t.URL==`string`&&/^https?:|^www\.|^\/\/|pages\.seima\.com\.au/i.test(t.URL.trim())?t.URL.trim():``,i=t.Website_URL||t.websiteUrl||t[`Website URL`]||t.product_url||t.productUrl||t[`Product URL`]||t.Product_URL||t[`Web URL`]||r||``;return t.Image_URL=tt(t,`image`),t.Diagram_URL=tt(t,`diagram`),t.Datasheet_URL=et(String(n||``).trim(),`datasheets`),t.Website_URL=Ze(String(i||``).trim()),t}function R(e){if(!e||typeof e!=`string`)return!0;let t=e.trim();return!t||(t.startsWith(`//`)&&(t=`https:${t}`),t.length<10)||!t.startsWith(`http://`)&&!t.startsWith(`https://`)&&!t.startsWith(`data:`)||/\/images\/\d+$/.test(t)||t.endsWith(`/0`)?!0:t.startsWith(`data:`)?!1:/\.pdf(\?|#|$)/i.test(t)?!0:!(/\.(jpe?g|png|gif|webp|svg|bmp|tif{1,2}|avif)(\?.*)?$/i.test(t)||/^https?:\/\/pages\.seima\.com\.au\/(images|diagrams)\//i.test(t)||t.startsWith(`https://`)||t.startsWith(`http://`))}function it(e,t){try{let n=Math.min(100,e.width),r=Math.min(100,e.height),i=t.getImageData(0,0,n,r).data,a=new Set;for(let e=0;e<i.length;e+=4){let t=`${i[e]},${i[e+1]},${i[e+2]}`;if(a.add(t),a.size>1e3)return!1}return a.size<1e3}catch(e){return console.warn(`Could not analyze image for diagram detection:`,e),!1}}function at(e,t){try{let n=t.getImageData(0,0,e.width,e.height).data;for(let e=3;e<n.length;e+=4)if(n[e]<255)return!0;return!1}catch(e){return console.warn(`Could not detect transparency:`,e),!1}}var z=new Set;async function ot(e,t=400,n=.8,r=null){let i=typeof e==`string`?e.trim():``;if(i.startsWith(`//`)&&(i=`https:${i}`),z.has(i)||!i||typeof i!=`string`||!i.startsWith(`http://`)&&!i.startsWith(`https://`)&&!i.startsWith(`data:`))return{url:`assets/no-image.png`,format:`PNG`};if(R(i))return console.warn(`Skipping malformed image URL:`,i?.substring(0,50)+`...`),z.add(i),{url:`assets/no-image.png`,format:`PNG`};let a=r&&r.length?[...r.map(e=>e+encodeURIComponent(i))]:Qe(i);return a.length?new Promise(e=>{let r=0,o=!1,s=()=>{if(o)return;if(r>=a.length){o=!0,console.warn(`All image fetch attempts failed for:`,i.substring(0,60)),z.add(i),e({url:`assets/no-image.png`,format:`PNG`});return}let c=a[r];r+=1;let l=new Image;l.crossOrigin=`Anonymous`;let u=null;l.onload=function(){if(!o){u&&clearTimeout(u);try{let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0}),a=Math.min(t,400),s=Math.min(t,400);l.width>l.height?s=Math.round(a*l.height/l.width):a=Math.round(s*l.width/l.height),(l.width>100||l.height>100)&&(a=Math.max(a,200),s=Math.max(s,200)),r.width=a,r.height=s,i.imageSmoothingEnabled=!0,i.imageSmoothingQuality=`high`,i.drawImage(l,0,0,a,s);let c,u,d=at(r,i),f=it(r,i);if(d||f)c=r.toDataURL(`image/png`,.9),u=`PNG`;else{let e=Math.max(n,.7);c=r.toDataURL(`image/jpeg`,e),u=`JPEG`}o=!0,e({url:c,format:u})}catch(e){console.warn(`Image optimization failed:`,e),setTimeout(s,150)}}},l.onerror=function(){o||(u&&clearTimeout(u),setTimeout(s,150))},u=setTimeout(()=>{o||(l.src=``,l.onload=null,l.onerror=null,setTimeout(s,50))},3e3),l.src=c};s()}):(z.add(i),{url:`assets/no-image.png`,format:`PNG`})}function st(e){let t=String(e||``).replace(/^\.\/+/,``).replace(/^\/+/,``);return`/`.endsWith(`/`)?`/${t}`:`//${t}`}async function ct(){return new Promise((e,t)=>{if(window.jsPDF||window.jspdf){e();return}let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js`,n.onload=()=>{console.log(`✅ jsPDF loaded`),e()},n.onerror=()=>t(Error(`Failed to load jsPDF`)),document.head.appendChild(n)})}var B={headerBackground:`#8B6C2B`,footerBackground:`#9B9184`,textPrimary:`#222`,textSecondary:`#444`,textMuted:`#888`,textSubtle:`#666`,linkColor:[0,102,204],white:`#fff`,headerText:`#f4f4f4`},V={margins:{left:32,right:32,top:20,bottom:30},footerHeight:28,headerHeight:33.7,maxRowsPerPage:4,rowPadding:8,imageWidth:90,imagePadding:12,welsColumnWidth:50,codeColumnOffset:85,coverLogoWidth:250},H=new Map;async function lt(e,t={}){let{batchSize:n=10,maxWidth:r=400,quality:i=.8}=t;H.clear();let a=e=>{if(!e||typeof e!=`string`)return``;let t=e.trim();return t.startsWith(`//`)&&(t=`https:${t}`),t},o=new Set;e.forEach(e=>{let t=a(e.Image_URL||``),n=a(e.Diagram_URL||``);t.length>10&&o.add(t),n.length>10&&o.add(n)});let s=Array.from(o);if(s.length===0)return console.log(`📷 No images to preload`),0;console.log(`📷 Preloading ${s.length} images in parallel...`);let c=Date.now(),l=0,u=0;for(let e=0;e<s.length;e+=n){let t=s.slice(e,e+n);(await Promise.allSettled(t.map(e=>ut(e,r,i)))).forEach((e,n)=>{let r=t[n];e.status===`fulfilled`&&e.value?(H.set(r,e.value),l++):u++});let a=document.getElementById(`preload-progress`);a&&(a.textContent=`Loading images: ${Math.min(100,Math.round((e+t.length)/s.length*100))}%`)}let d=((Date.now()-c)/1e3).toFixed(1);return console.log(`✅ Preloaded ${l}/${s.length} images in ${d}s (${u} failed)`),l}async function ut(e,t=400,n=.8){let r=typeof e==`string`?e.trim():``;if(r.startsWith(`//`)&&(r=`https:${r}`),H.has(r))return H.get(r);if(R(r))return console.warn(`Skipping malformed image URL:`,e?.substring(0,50)+`...`),null;let i=Qe(r);for(let e=0;e<i.length;e++){let r=await dt(i[e],t,n);if(r)return r}return console.warn(`All image fetch attempts failed for preload:`,r.substring(0,60)),null}function dt(e,t,n){return new Promise(r=>{let i=new Image;i.crossOrigin=`anonymous`;let a=setTimeout(()=>{i.src=``,r(null)},3e3);i.onload=function(){clearTimeout(a);try{let e=document.createElement(`canvas`),a=e.getContext(`2d`,{willReadFrequently:!0}),o=i.width,s=i.height;o>t&&(s=s*t/o,o=t),e.width=o,e.height=s,a.imageSmoothingEnabled=!0,a.imageSmoothingQuality=`high`,a.drawImage(i,0,0,o,s);let c=at(e,a),l=it(e,a),u=c||l?`PNG`:`JPEG`,d=l?.9:n;r({dataUrl:e.toDataURL(`image/${u.toLowerCase()}`,d),width:o,height:s,format:u})}catch{console.warn(`Failed to optimize preloaded image:`,e.substring(0,50)),r(null)}},i.onerror=()=>{clearTimeout(a),r(null)},i.src=e})}function ft(e){return H.get(e)}function pt(){H.clear()}new class{constructor(){this.isInitialized=!1,this.imageAliasCache=new Map}async init(){try{return await ct(),this.isInitialized=!0,console.log(`✅ PDF Core initialized`),!0}catch(e){return console.error(`❌ PDF Core initialization failed:`,e),!1}}async preloadImages(e,t){return lt(e,t)}getCachedImage(e){return ft(e)}clearCaches(){this.imageAliasCache.clear(),pt()}};function mt(e){let t=e[`WELS STAR`]||e.WELS_STAR||e.WELS_STAR||e.WelsStar||``;return t&&t.toString().trim()!==``}function ht(e,t={}){let{leftMargin:n=V.margins.left,rightMargin:r=V.margins.right,showRrp:i=!1,showPrice:a=!0,showQty:o=!0,showTotal:s=!0}=t,c=V.imageWidth,l=V.imagePadding,u=V.welsColumnWidth,d=n+c*2+l*2,f=d+V.codeColumnOffset,p,m,h;if(i&&a&&o&&s){let t=e-280,r=t-u,i=e-200,a=e-120,o=e-60;p=[n,d,f,r,t,i,a,o],m=[c,c,r-f-10,u,i-t,a-i,o-a,60],h=[`Code`,`Description`,`WELS`,`RRP`,`Price`,`Qty`,`Total`]}else if(a&&o&&s){let t=e-200,r=t-u,i=e-120,a=e-60;p=[n,d,f,r,t,i,a],m=[c,c,r-f-10,u,i-t,a-i,60],h=[`Code`,`Description`,`WELS`,`Price`,`Qty`,`Total`]}else if(a&&!o)if(i){let t=e-180,r=t-u,i=e-90;p=[n,d,f,r,t,i],m=[c,c,r-f-10,u,i-t,90],h=[`Code`,`Description`,`WELS`,`RRP`,`Price`]}else{let t=e-90,r=t-u;p=[n,d,f,r,t],m=[c,c,r-f-10,u,90],h=[`Code`,`Description`,`WELS`,`Price`]}else if(!a&&o){let t=e-80,r=t-u;p=[n,d,f,r,t],m=[c,c,r-f-10,u,80],h=[`Code`,`Description`,`WELS`,`Qty`]}else{let t=e-r-u;p=[n,d,f,t],m=[c,c,t-f-10,u],h=[`Code`,`Description`,`WELS`]}return{colX:p,colW:m,headers:h,imgW:c,imgPad:l}}function gt(e,t={}){let{pageWidth:n,colX:r,colW:i,leftMargin:a=V.margins.left,footerHeight:o=V.footerHeight,logoDataUrl:s,logoNaturalW:c,logoNaturalH:l,headers:u=[],userDetails:d={},skipWelsHeader:f=!1,showRefAboveCode:p=!1,headerColor:m=B.headerBackground}=t,h=o+5.7;if(e.setFillColor(m),e.rect(0,0,n,h,`F`),s&&c&&l){let t=c/l,n=h*.6,r=n*t,i=n;r>80&&(r=80,i=r/t);let o=(h-i)/2;e.addImage(s,`PNG`,a,o,r,i)}e.setFontSize(10),e.setTextColor(B.headerText),e.setFont(`helvetica`,`normal`);let g=h-8;u.forEach((t,n)=>{if(t===`WELS`&&f)return;let a=n+1;if(a<r.length){let n=r[a]+i[a]/2;if(t===`Price`&&!d.excludePrice){e.setFont(`helvetica`,`normal`);let t=d.includeGst?`INC GST`:`EX GST`,r=`Price ${t}`,i=e.getTextWidth(`Price `),a=n-e.getTextWidth(r)/2;e.text(`Price `,a,g),e.setFont(`helvetica`,`bold`),e.text(t,a+i,g),e.setFont(`helvetica`,`normal`)}else if(t===`RRP`){let t=d.includeGst?`INC`:`EX`;e.text(`RRP ${t}`,n,g,{align:`center`})}else t===`Code`&&p?(e.setFontSize(7.5),e.text(`Ref`,n,g-9,{align:`center`}),e.setFontSize(10),e.text(`Code`,n,g,{align:`center`})):e.text(t,n,g,{align:`center`})}})}function U(e,t={}){let{pageWidth:n,pageHeight:r,leftMargin:i=V.margins.left,footerHeight:a=V.footerHeight,pageNumber:o,totalPages:s,footerColor:c=B.footerBackground}=t;e.setFillColor(c),e.rect(0,r-a,n,a,`F`),e.setTextColor(B.white),e.setFontSize(11);let l=r-a/2+3;e.text(`www.seima.com.au`,n-140,l),o!==void 0&&s!==void 0&&e.text(`Page ${o} of ${s}`,i,l)}function _t(e,t={}){let{pageWidth:n,pageHeight:r,seimaLogoDataUrl:i,seimaLogoNaturalW:a,seimaLogoNaturalH:o,customerLogoDataUrl:s,userDetails:c={},staffContact:l,footerHeight:u=V.footerHeight}=t,d=n/2,f=(n-320)/2;if(s){e.setFillColor(255,255,255),e.rect(f,70,320,90,`F`);try{let t=new Image;t.src=s;let n=t.width/t.height||2,r=300,i=300/n;i>70&&(i=70,r=70*n);let a=f+(320-r)/2,o=70+(90-i)/2;e.addImage(s,`PNG`,a,o,r,i,void 0,`FAST`)}catch(e){console.warn(`Failed to draw customer logo:`,e)}}let p=V.coverLogoWidth,m=o&&a?p*o/a:65,h=(n-p)/2;i&&e.addImage(i,`PNG`,h,240,p,m,void 0,`FAST`);let g=`Build with Confidence`,_=240+m+28;e.setFont(`helvetica`,`normal`),e.setFontSize(18),e.setTextColor(`#333`);let v=g.split(``),y=(p-e.getTextWidth(g))/(v.length-1),b=h;v.forEach(t=>{e.text(t,b,_),b+=e.getTextWidth(t)+y}),e.setFontSize(15),e.setTextColor(B.textSecondary);let x=_+50,S=[];c?.name&&c.name.trim()&&S.push({label:`Name:`,value:c.name.trim(),bold:!0}),c?.project&&c.project.trim()&&S.push({label:`Project:`,value:c.project.trim(),bold:!0}),c?.address&&c.address.trim()&&S.push({label:`Address:`,value:c.address.trim(),bold:!0}),c?.email&&c.email.trim()&&S.push({label:`Email:`,value:c.email.trim(),bold:!0});let C=c?.telephone||c?.phone||``;C&&C.trim()&&S.push({label:`Telephone:`,value:C.trim(),bold:!0});let w=S.length*26,ee=r-u-40-x;w<ee&&(x+=(ee-w)/3);let T=0,te=S.map(t=>{e.setFont(`helvetica`,`normal`),e.setFontSize(15);let n=e.getTextWidth(t.label+` `);e.setFont(`helvetica`,t.bold?`bold`:`normal`);let r=n+e.getTextWidth(t.value);return r>T&&(T=r),{...t,labelWidth:n}}),ne=d-T/2;te.forEach(t=>{e.setFont(`helvetica`,`normal`),e.setFontSize(15),e.setTextColor(B.textSecondary),e.text(t.label,ne,x),t.bold&&e.setFont(`helvetica`,`bold`),e.text(t.value,ne+t.labelWidth,x),x+=26});let E=``,D=l?.name||l?.staffName||``,O=l?.phone||l?.mobile||l?.staffPhone||``,k=l?.email||l?.staffEmail||``,A=l?.position||l?.staffPosition||``;D&&O&&k?E=`For more information, please contact ${A?`${D}, ${A}`:D} on ${O} or email ${k}`:D&&k?E=`For more information, please contact ${A?`${D}, ${A}`:D} at ${k}`:D?E=`For more information, please contact ${A?`${D}, ${A}`:D}`:O?E=`For more information, please call ${O}`:k&&(E=`For more information, please email ${k}`),E||=`For more information, please contact your Seima representative or email info@seima.com.au`,e.setFont(`helvetica`,`normal`),e.setFontSize(14),e.setTextColor(`#111`),e.text(E,d,r-u-18,{align:`center`}),U(e,{pageWidth:n,pageHeight:r,footerHeight:u})}function vt(e,t,n,r,i){e.setFontSize(12),e.setFont(`helvetica`,`bold`),e.setTextColor(`#333`),e.text(`${t} (${n})`,r,i+10),e.setFont(`helvetica`,`normal`)}function yt(e,t,n,r){let i=r,a=t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||t.X_WEB_DSHEET||t.X_WEB_DSHEET||``,o=et(String(a).trim(),`datasheets`);if(o&&o.startsWith(`http`)){e.setFont(`helvetica`,`normal`),e.setFontSize(9),e.setTextColor(...B.linkColor);let t=`Datasheet`,r=e.getTextWidth(t),a=n-r/2;e.textWithLink(t,a,i,{url:o}),e.setDrawColor(...B.linkColor),e.setLineWidth(.3),e.line(a,i+1.5,a+r,i+1.5),i+=16}let s=t.Website_URL||t.websiteUrl||t[`Website URL`]||t.product_url||t.productUrl||t[`Product URL`]||t.Product_URL||t[`Web URL`]||t.URL||``,c=Ze(String(s).trim());if(c&&c.startsWith(`http`)){e.setFont(`helvetica`,`normal`),e.setFontSize(9),e.setTextColor(...B.linkColor);let t=`Website`,r=e.getTextWidth(t),a=n-r/2;e.textWithLink(t,a,i,{url:c}),e.setDrawColor(...B.linkColor),e.setLineWidth(.3),e.line(a,i+1.5,a+r,i+1.5),i+=16}return i}function bt(e,t,n,r,i,a=!1){let o=r;e.setFontSize(10),e.setTextColor(B.textPrimary);let s=e.splitTextToSize(String(t.Description||``),i);e.text(s,n+5,o),o+=s.length*12;let c=t.LongDescription||t[`Long Description`]||t.longDescription||``;if(!a&&c){e.setFontSize(9),e.setTextColor(B.textSecondary);let t=e.splitTextToSize(String(c),i);e.text(t,n+5,o),o+=t.length*11}if(t.Notes){e.setFont(`helvetica`,`italic`),e.setFontSize(9),e.setTextColor(B.textSecondary);let r=e.splitTextToSize(`Notes: `+String(t.Notes),i);e.text(r,n+5,o),e.setFont(`helvetica`,`normal`),o+=r.length*11}return o}function xt(e,t,n,r){let i=t[`WELS STAR`]||t.WELS_STAR||t.WELS_STAR||t.WelsStar||``;if(i&&i.toString().trim()){let t=i.toString().replace(/[^\d.]/g,``).trim();t&&(e.setFontSize(9),e.setTextColor(B.textSubtle),e.text(`${t} star`,n,r,{align:`center`}))}}function St(e){return!e||isNaN(e)||e<=0?``:`$`+e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,`,`)}function Ct(e,t,n,r,i,a,o={}){let{excludePrice:s=!1,includeGst:c=!1}=o;e.setFontSize(10),e.setTextColor(B.textPrimary);let l=i.indexOf(`RRP`)+1,u=e=>e&&e!==`0`&&parseFloat(String(e).replace(/,/g,``))>0?e:``;if(l>0&&n[l]){let i=NaN,o=u(t.RRP_EX)||u(t[`RRP EX GST`])||u(t.RRP_EX)||u(t.RRP_EXGST)||u(t[`PL1 - RRP EX GST`]);o&&(i=parseFloat(o.toString().replace(/,/g,``)),c&&!isNaN(i)&&(i*=1.1));let s=St(i);if(s){let t=n[l]+r[l]/2;e.text(s,t,a,{align:`center`})}}let d=i.indexOf(`Price`)+1,f=NaN;if(d>0&&n[d]){if(t.UserEditedPrice!==void 0&&t.UserEditedPrice!==null&&t.UserEditedPrice!==``)f=parseFloat(t.UserEditedPrice.toString().replace(/,/g,``));else{let e=u(t.RRP_EX)||u(t[`RRP EX GST`])||u(t.RRP_EX)||u(t.RRP_EXGST)||u(t[`PL1 - RRP EX GST`]);e&&(f=parseFloat(e.toString().replace(/,/g,``)))}c&&!isNaN(f)&&(f*=1.1);let i=St(f);if(i){let t=n[d]+r[d]/2;e.text(i,t,a,{align:`center`})}}let p=i.indexOf(`Qty`)+1;if(p>0&&n[p]){let i=n[p]+r[p]/2;e.text(String(t.Quantity||1),i,a,{align:`center`})}let m=i.indexOf(`Total`)+1;if(m>0&&n[m]){let i=St((isNaN(f)?0:f)*(t.Quantity||1));if(i){let t=n[m]+r[m]/2;e.text(i,t,a,{align:`center`})}}}new class{constructor(){this.headerDrawn=!1}drawHeader(e,t){gt(e,t),this.headerDrawn=!0}drawFooter(e,t){U(e,t)}drawCoverPage(e,t){_t(e,t)}calculateColumns(e,t){return ht(e,t)}};var W=new class{constructor(){this.storageKeys={LEGACY_SELECTION:`selection`,PRODUCTS:r.STORAGE_KEYS.SELECTED_PRODUCTS,CATALOG:r.STORAGE_KEYS.PRODUCT_CATALOG,CUSTOM_ROOMS:r.STORAGE_KEYS.CUSTOM_ROOMS,STAFF_CONTACT:r.STORAGE_KEYS.STAFF_CONTACT},this.productCatalog=[],this.isLoaded=!1,this._productSearch=new Ye}async init(){try{return console.log(`🔄 Initializing DataService...`),await this.loadProductCatalog(),this._productSearch.buildIndex(this.productCatalog),this.isLoaded=!0,console.log(`✅ DataService initialized with ${this.productCatalog.length} products`),!0}catch(e){throw console.error(`❌ DataService initialization failed:`,e),this.isLoaded=!1,e}}async loadProductCatalog(){try{let e=localStorage.getItem(`productCatalogCsv`),t=[];e&&(t=this.parseCSV(e),this.productCatalog=t,console.log(`📦 Loaded ${t.length} products from cache`));let n=r.CATALOG_URL+(r.CATALOG_URL.includes(`?`)?`&`:`?`)+`t=`+Date.now();if(fetch(n).then(e=>e.ok?e.text():Promise.reject(`Failed to fetch catalog`)).then(n=>{if(!e||n!==e){localStorage.setItem(`productCatalogCsv`,n);let e=this.parseCSV(n);JSON.stringify(e)!==JSON.stringify(t)&&(this.productCatalog=e,window.location.reload())}}).catch(e=>console.warn(`Background catalog update failed:`,e)),!t.length)throw Error(`No product data available`);return t}catch(e){throw console.error(`❌ Failed to load product catalog:`,e),this.productCatalog=[],e}}parseCSV(e){let t=this.parseCSVRows(e);if(t.length===0)return[];let n=t[0].map(e=>e.replace(/[\r\n]+\s*/g,` `).trim()),r=e=>e.toLowerCase().replace(/[\s_]+/g,``),i=n.findIndex(e=>r(e)===`ordercode`);if(i===-1)return[];let a=[];for(let e=1;e<t.length;e++){let r=t[e];if(r.length<=i)continue;let o=r[i]?r[i].trim():``;if(!o)continue;let s={};n.forEach((e,t)=>{s[e]=r[t]||``}),s.OrderCode=o,s[`Product Name`]=s[`Product Name`]||s[`Parent Code`]||``,s.Description=s.Description||``,s.LongDescription=s[`Long Description`]||s.LongDescription||``,s.RRP_EXGST=s[`RRP EX GST`]||s.RRP_EXGST||``,s.RRP_INCGST=s[`RRP INC GST`]||s.RRP_INCGST||``,s.BARCODE=(s.BARCODE||``).toString().trim(),s[`WELS NO`]=s[`WELS NO`]||``,s[`WELS STAR`]=s[`WELS STAR`]||``,s[`WELS CONSUMPTION`]=s[`WELS CONSUMPTION`]||``,s[`WELS Expiry`]=s[`WELS Expiry`]||``,a.push(s)}return a}parseCSVRows(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=e[a+1];o===`"`?i&&s===`"`?(r+=`"`,a++):i=!i:o===`,`&&!i?(n.push(r),r=``):(o===`\r`||o===`
`)&&!i?(o===`\r`&&s===`
`&&a++,n.push(r),n.length>0&&n.some(e=>e.trim())&&t.push(n),n=[],r=``):r+=o}return(r||n.length>0)&&(n.push(r),n.some(e=>e.trim())&&t.push(n)),t}parseCSVLine(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];a===`"`?r=!r:a===`,`&&!r?(t.push(n.trim()),n=``):n+=a}return t.push(n.trim()),t}getAllProducts(){return this.productCatalog}searchProducts(e,t=50){return this._productSearch.search(e,t,{fuzzy:!1})}findProductByCode(e){if(!e)return null;let t=e.toString().trim();return this.productCatalog.find(e=>(e.OrderCode||e.orderCode||``).toString().trim()===t)}findProductByBarcode(e){if(!e)return null;let t=e.toString().trim();return this.productCatalog.find(e=>e.BARCODE&&e.BARCODE.toString().trim()===t)||null}getSelectedProducts(){try{let e=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||`[]`);if(e.length>0)return this._validateSelectionFormat(e);let t=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||`[]`);return this._convertLegacyFormat(t)}catch(e){return console.error(`Error loading selected products:`,e),[]}}addProduct(e,t=``,n=``,i=1){if(!this._validateProduct(e))throw Error(`Invalid product data`);let o=this.getSelectedProducts(),s={id:a.generateId(),product:a.deepClone(e),notes:a.sanitizeInput(t,r.UI.ANNOTATION_MAX_LENGTH),room:a.sanitizeInput(n,50),quantity:Math.max(1,Math.min(999,parseInt(i)||1)),timestamp:Date.now()};return o.push(s),this._saveSelectedProducts(o),console.log(`✅ Added ${e.OrderCode||`product`} to selection`),s}removeProduct(e){let t=this.getSelectedProducts().filter(t=>t.id!==e);return this._saveSelectedProducts(t),console.log(`✅ Removed product from selection`),t}updateProduct(e,t){let n=this.getSelectedProducts(),i=n.findIndex(t=>t.id===e);if(i===-1)throw Error(`Product not found in selection`);let o=n[i];return n[i]={...o,...t,id:e,timestamp:o.timestamp,notes:t.notes?a.sanitizeInput(t.notes,r.UI.ANNOTATION_MAX_LENGTH):o.notes,room:t.room?a.sanitizeInput(t.room,50):o.room,quantity:t.quantity?Math.max(1,Math.min(999,parseInt(t.quantity)||1)):o.quantity},this._saveSelectedProducts(n),console.log(`✅ Updated product in selection`),n[i]}clearSelection(){localStorage.removeItem(this.storageKeys.PRODUCTS),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION),console.log(`✅ Cleared all selected products`)}getProductsByRoom(){let e=this.getSelectedProducts(),t={};return e.forEach(e=>{let n=e.room||`Unassigned`;t[n]||(t[n]=[]),t[n].push(e)}),t}getSelectionStats(){let e=this.getSelectedProducts(),t=this.getProductsByRoom();return{totalProducts:e.length,totalRooms:Object.keys(t).length,roomBreakdown:Object.entries(t).map(([e,t])=>({room:e,count:t.length}))}}getProductsLegacyFormat(){return this.getSelectedProducts().map(e=>({...e.product,Room:e.room,Notes:e.notes,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()}))}getStaffContact(){try{let e=localStorage.getItem(this.storageKeys.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.warn(`Error loading staff contact:`,e),null}}setStaffContact(e){try{localStorage.setItem(this.storageKeys.STAFF_CONTACT,JSON.stringify(e)),console.log(`✅ Staff contact saved`)}catch(e){throw console.error(`Error saving staff contact:`,e),e}}getCustomRooms(){try{return JSON.parse(localStorage.getItem(this.storageKeys.CUSTOM_ROOMS)||`[]`)}catch(e){return console.warn(`Error loading custom rooms:`,e),[]}}addCustomRoom(e){let t=this.getCustomRooms();t.find(t=>t.name===e)||(t.push({name:e,timestamp:Date.now()}),localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(t)),console.log(`✅ Added custom room: ${e}`))}removeCustomRoom(e){let t=this.getCustomRooms().filter(t=>t.name!==e);localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(t)),console.log(`✅ Removed custom room: ${e}`)}getProductCatalog(){try{let e=localStorage.getItem(this.storageKeys.CATALOG);return e?JSON.parse(e):[]}catch(e){return console.warn(`Error loading product catalog from storage:`,e),[]}}setProductCatalog(e){try{localStorage.setItem(this.storageKeys.CATALOG,JSON.stringify(e)),console.log(`✅ Cached ${e.length} products to storage`)}catch(e){console.warn(`Error caching product catalog:`,e)}}_convertLegacyFormat(e){return Array.isArray(e)?e.map(e=>({id:a.generateId(),product:{...e},room:e.Room||``,notes:e.Notes||``,quantity:e.Quantity||1,timestamp:e.Timestamp?new Date(e.Timestamp).getTime():Date.now()})):[]}_validateSelectionFormat(e){return Array.isArray(e)?e.filter(e=>e&&typeof e==`object`&&e.product&&typeof e.product==`object`):[]}_validateProduct(e){return e&&typeof e==`object`&&(e.OrderCode||e.Description)}_saveSelectedProducts(e){try{localStorage.setItem(this.storageKeys.PRODUCTS,JSON.stringify(e)),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION)}catch(e){throw console.error(`Error saving selected products:`,e),e}}migrateLegacyData(){let e=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||`[]`),t=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||`[]`);if(e.length>0&&t.length===0){console.log(`📦 Migrating legacy selection data...`);let t=this._convertLegacyFormat(e);return this._saveSelectedProducts(t),console.log(`✅ Migrated ${t.length} products to new format`),!0}return!1}},G=new class{constructor(){this.isEnabled=r.SELECTION_RECORDING?.ENABLED||!0,this.googleSheetsUrl=r.SELECTION_RECORDING?.GOOGLE_SHEETS_URL||null,this.retryAttempts=r.SELECTION_RECORDING?.RETRY_ATTEMPTS||3,this.retryDelay=r.SELECTION_RECORDING?.RETRY_DELAY||1e3}configure(e){this.googleSheetsUrl=e,console.log(`📊 Selection recorder configured with Google Sheets URL`)}async recordSelection(e,t,n={}){if(!this.isEnabled||!this.googleSheetsUrl)return console.log(`📊 Selection recording disabled or not configured`),{success:!1,reason:`not_configured`};try{let r=this.prepareSelectionData(e,t,n),i=await this.sendToGoogleSheets(r);if(i.success)return console.log(`✅ Selection recorded successfully`),{success:!0,data:r};throw Error(i.error||`Failed to record selection`)}catch(e){return console.error(`❌ Failed to record selection:`,e),{success:!1,error:e.message}}}prepareSelectionData(e,t,n){let i=new Date,a=e.staffContact||{},o=f.getCurrentUser(),s=f.isStaffMode(),c,l,u;s?(c=a.name||o?.name||``,l=a.email||o?.email||``,u=a.mobile||o?.phone||``):(c=`Self-Service`,l=``,u=``);let d=o?.email||``,p=t.length,m=t.reduce((e,t)=>e+(t.quantity||1),0),h=this.calculateEstimatedValue(t),g=[...new Set(t.map(e=>e.room).filter(Boolean))],_=e.leadData||{};return{date:i.toLocaleDateString(`en-AU`),time:i.toLocaleTimeString(`en-AU`),appVersion:r.VERSION,loggedInAs:d,staffName:c,staffEmail:l,staffMobile:this.formatPhoneNumber(u),customerName:e.name||``,customerEmail:e.email||``,customerPhone:this.formatPhoneNumber(e.phone),customerProject:e.project||``,customerAddress:e.address||``,customerType:_.customerType||``,hearAboutUs:this.formatHearAboutUs(_),projectNotes:_.projectNotes||``,builderName:_.builderName||``,merchantName:_.merchantName||``,referralBuilder:_.referralBuilder||``,referralMerchant:_.referralMerchant||``,totalProducts:p,totalQuantity:m,totalRooms:g.length,roomsList:g.join(`, `),estimatedValue:h,emailSent:n.success||!1,pdfGenerated:n.pdfGenerated||!1,csvGenerated:n.csvGenerated||!1,pdfSize:n.pdfSize||``,productsJson:JSON.stringify(t.map(e=>({orderCode:e.product?.OrderCode||e.product?.orderCode||``,description:e.product?.Description||e.product?.description||``,room:e.room||``,quantity:e.quantity||1,notes:e.notes||``,priceIncGst:e.product?.RRP_INCGST||e.product?.rrpIncGst||`0.00`})))}}formatHearAboutUs(e){if(!e||!e.hearAboutUs)return``;if(Array.isArray(e.hearAboutUs)){let t=[...e.hearAboutUs];if(t.includes(`Other`)&&e.hearAboutUsOther){let n=t.indexOf(`Other`);t[n]=`Other (${e.hearAboutUsOther})`}return t.join(`, `)}return e.hearAboutUs||``}calculateEstimatedValue(e){let t=0;return e.forEach(e=>{let n=e.quantity||1,r=e.product?.RRP_INCGST||e.product?.rrpIncGst||`0`,i=parseFloat(r.toString().replace(/[^0-9.]/g,``))||0;t+=i*n}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return``;let t=String(e).trim();return t.startsWith(`'`)&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t=`0`+t),`'`+t}async sendToGoogleSheets(e,t=1){try{let t=new URLSearchParams;t.append(`data`,JSON.stringify(e));let n=await fetch(this.googleSheetsUrl,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:t});if(!n.ok)throw Error(`HTTP ${n.status}: ${n.statusText}`);return{success:!0,result:await n.json()}}catch(n){return console.error(`📊 Attempt ${t} failed:`,n),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(e=>setTimeout(e,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:n.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:`No Google Sheets URL configured`};let e={date:new Date().toLocaleDateString(`en-AU`),time:new Date().toLocaleTimeString(`en-AU`),staffName:`Test User`,customerName:`Test Customer`,totalProducts:1,test:!0};return await this.sendToGoogleSheets(e)}setEnabled(e){this.isEnabled=e,console.log(`📊 Selection recording ${e?`enabled`:`disabled`}`)}},K=class{constructor(){this.brandColors={primary:`#a09484`,primaryDark:`#8b7a6e`,background:`#f8f8fa`,cardBackground:`#ffffff`,textPrimary:`#222`,textSecondary:`#4b5563`,textMuted:`#6b7280`,success:`#10b981`,warning:`#f59e0b`,border:`#e5e7eb`}}generateEmailHTML(e,t={}){let{includeLogo:n=!0,includeAttachmentInfo:r=!1,includeFeaturesList:i=!1,customMessage:a=null,theme:o=`default`}=t,s=this.prepareEmailData(e);return`
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SEIMA Product Selection - ${s.customerName}</title>
          ${this.generateEmailCSS(o)}
      </head>
      <body>
          <div class="email-container">
              ${this.generateHeader(s,n)}
              ${this.generateContent(s,a)}
              ${this.generateSummaryCard(s)}
              ${r?this.generateAttachmentsCard(s):``}
              ${i?this.generateFeaturesList():``}
              ${this.generateContactSection()}
              ${this.generateFooter(s)}
          </div>
      </body>
      </html>
    `}prepareEmailData(e){return{customerName:e.name||`Customer`,customerEmail:e.email||``,customerProject:e.project||``,customerAddress:e.address||``,customerPhone:e.phone||``,totalProducts:this.getProductCount(),totalRooms:this.getRoomCount(),appVersion:r.VERSION||`1.7.0`,currentDate:new Date().toLocaleDateString(`en-AU`,{year:`numeric`,month:`long`,day:`numeric`}),pdfFilename:this.generateFileName(e,`pdf`),csvFilename:this.generateFileName(e,`csv`)}}generateEmailCSS(e=`default`){return`
      <style>
          * { box-sizing: border-box; }
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #ffffff;
              color: #1f2937;
              line-height: 1.6;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
          }
          .header {
              background: #1f2937;
              color: #ffffff;
              padding: 32px 30px;
              text-align: center;
              border-bottom: 3px solid ${this.brandColors.primary};
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: 2px;
          }
          .header .subtitle {
              margin: 0;
              font-size: 16px;
              opacity: 0.9;
              font-weight: 400;
          }
          .content {
              padding: 40px 30px;
          }
          .greeting {
              font-size: 16px;
              margin-bottom: 20px;
              color: #1f2937;
              font-weight: 500;
          }
          .intro-text {
              font-size: 15px;
              margin-bottom: 30px;
              color: #4b5563;
              line-height: 1.7;
          }
          .card {
              border: 1px solid #e5e7eb;
              padding: 24px;
              margin: 24px 0;
          }
          .summary-card {
              background: #fafafa;
          }
          .summary-title {
              margin: 0 0 20px 0;
              font-size: 18px;
              font-weight: 600;
              color: #1f2937;
              padding-bottom: 12px;
              border-bottom: 2px solid ${this.brandColors.primary};
          }
          .summary-title::before {
              content: '';
              margin-right: 0;
          }
          .summary-table {
              display: table;
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
          }
          .summary-row {
              display: table-row;
              border-bottom: 1px solid #e5e7eb;
          }
          .summary-row:last-child {
              border-bottom: none;
          }
          .summary-label {
              display: table-cell;
              font-weight: 600;
              color: #374151;
              padding: 12px 24px 12px 0;
              width: 40%;
              vertical-align: top;
              font-size: 14px;
          }
          .summary-value {
              display: table-cell;
              color: #6b7280;
              padding: 12px 0;
              width: 60%;
              vertical-align: top;
              font-size: 14px;
          }
          .attachments-card {
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-left: 3px solid ${this.brandColors.success};
          }
          .attachments-title {
              margin: 0 0 16px 0;
              font-size: 18px;
              font-weight: 600;
              color: #065f46;
              display: flex;
              align-items: center;
          }
          .attachments-title::before {
              content: '📎';
              margin-right: 8px;
          }
          .attachment-item {
              display: flex;
              align-items: center;
              padding: 12px 0;
              border-bottom: 1px solid rgba(16, 185, 129, 0.1);
          }
          .attachment-item:last-child {
              border-bottom: none;
          }
          .attachment-icon {
              width: 24px;
              height: 24px;
              margin-right: 12px;
              font-size: 18px;
          }
          .attachment-details {
              flex: 1;
          }
          .attachment-name {
              font-weight: 600;
              color: #065f46;
              margin: 0;
          }
          .attachment-description {
              font-size: 14px;
              color: #047857;
              margin: 4px 0 0 0;
          }
          .features-list {
              background: ${this.brandColors.cardBackground};
              border: 1px solid ${this.brandColors.border};
              border-radius: 8px;
              padding: 20px;
              margin: 24px 0;
          }
          .features-list h4 {
              margin: 0 0 12px 0;
              color: #374151;
              font-weight: 600;
          }
          .features-list ul {
              margin: 0;
              padding-left: 20px;
              list-style: none;
          }
          .features-list li {
              margin-bottom: 8px;
              position: relative;
              padding-left: 24px;
              color: ${this.brandColors.textSecondary};
          }
          .features-list li::before {
              content: '✅';
              position: absolute;
              left: 0;
              top: 0;
          }
          .contact-section {
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-left: 3px solid ${this.brandColors.primary};
              padding: 20px;
              margin: 30px 0;
          }
          .contact-title {
              margin: 0 0 12px 0;
              font-weight: 600;
              color: #1f2937;
              font-size: 16px;
          }
          .contact-info {
              margin: 8px 0;
              color: #4b5563;
              font-size: 14px;
              line-height: 1.6;
          }
          .contact-link {
              color: ${this.brandColors.primary};
              text-decoration: none;
              font-weight: 500;
          }
          .footer {
              background: #f9fafb;
              color: #6b7280;
              padding: 24px 30px;
              text-align: center;
              border-top: 1px solid #e5e7eb;
          }
          .footer-links {
              margin: 12px 0;
          }
          .footer-link {
              color: #374151;
              text-decoration: none;
              margin: 0 12px;
              font-weight: 500;
              font-size: 14px;
          }
          .footer-link:hover {
              color: ${this.brandColors.primary};
          }
          .footer-copyright {
              font-size: 12px;
              color: #9ca3af;
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px solid #e5e7eb;
          }
          @media (max-width: 600px) {
              body { padding: 10px; }
              .header, .content, .footer {
                  padding: 20px 16px;
              }
              .summary-grid {
                  grid-template-columns: 1fr;
              }
              .header h1 {
                  font-size: 24px;
              }
          }
      </style>
    `}generateHeader(e,t=!0){return`
      <div class="header">
                        <h1>SEIMA Product Selection</h1>
      </div>
    `}generateContent(e,t=null){let n=t||`
      Thank you for choosing SEIMA for your project. We're pleased to provide your personalised product selection for your review.
    `;return`
      <div class="content">
          <p class="greeting">Dear ${e.customerName},</p>
          <p class="intro-text">${n}</p>
      </div>
    `}generateSummaryCard(e){return`
      <div class="content">
          <div class="card summary-card">
              <h3 class="summary-title">Project Summary</h3>
              <div class="summary-table">
                  <div class="summary-row">
                      <span class="summary-label">Name:</span>
                      <span class="summary-value">${e.customerName}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Email:</span>
                      <span class="summary-value">${e.customerEmail}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Project:</span>
                      <span class="summary-value">${e.customerProject||`Not specified`}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Address:</span>
                      <span class="summary-value">${e.customerAddress||`Not specified`}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Phone:</span>
                      <span class="summary-value">${e.customerPhone||`Not provided`}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Total Products:</span>
                      <span class="summary-value">${e.totalProducts}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Rooms:</span>
                      <span class="summary-value">${e.totalRooms}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Generated:</span>
                      <span class="summary-value">${e.currentDate}</span>
                  </div>
              </div>
          </div>
      </div>
    `}generateAttachmentsCard(e){return`
      <div class="content">
          <div class="card attachments-card">
              <h3 class="attachments-title">Attached Documents</h3>
              <div class="attachment-item">
                  <span class="attachment-icon">📄</span>
                  <div class="attachment-details">
                      <p class="attachment-name">${e.pdfFilename}</p>
                      <p class="attachment-description">Complete product selection with images, specifications, and pricing</p>
                  </div>
              </div>
              <div class="attachment-item">
                  <span class="attachment-icon">📊</span>
                  <div class="attachment-details">
                      <p class="attachment-name">${e.csvFilename}</p>
                      <p class="attachment-description">Structured data file for easy import into your systems</p>
                  </div>
              </div>
          </div>
      </div>
    `}generateFeaturesList(){return`
      <div class="content">
          <div class="features-list">
              <h4>Your selection includes:</h4>
              <ul>
                  <li>Professional product specifications and high-resolution images</li>
                  <li>Room-by-room organisation for easy project management</li>
                  <li>Current pricing information (where applicable)</li>
                  <li>Direct links to product datasheets and installation guides</li>
                  <li>Structured CSV data for seamless system integration</li>
              </ul>
          </div>
      </div>
    `}generateContactSection(){return`
      <div class="content">
          <div class="contact-section">
              <h3 class="contact-title">Questions or Need Assistance?</h3>
              <div class="contact-info">
                  <p style="margin: 8px 0;">Email: <a href="mailto:sales@seima.com.au" class="contact-link">sales@seima.com.au</a></p>
                  <p style="margin: 8px 0;">Website: <a href="https://www.seima.com.au" class="contact-link">www.seima.com.au</a></p>
              </div>
          </div>
          
          <p style="margin-top: 24px; color: #374151;">
              Best regards,<br>
              <strong>The SEIMA Team</strong>
          </p>
      </div>
    `}generateFooter(e){return`
      <div class="footer">
          <div class="footer-links">
              <a href="https://www.seima.com.au" class="footer-link">Visit Website</a>
              <a href="https://www.seima.com.au/products" class="footer-link">Products</a>
              <a href="https://www.seima.com.au/support" class="footer-link">Support</a>
              <a href="mailto:info@seima.com.au" class="footer-link">Contact</a>
          </div>
          <div class="footer-copyright">
              © ${new Date().getFullYear()} SEIMA. All rights reserved.
          </div>
      </div>
    `}generateTextEmail(e){let t=this.prepareEmailData(e);return`Dear ${t.customerName},

Thank you for choosing SEIMA for your project. Your product selection is attached.

PROJECT SUMMARY:
Customer: ${t.customerName}
Email: ${t.customerEmail}
Project: ${t.customerProject}
Address: ${t.customerAddress}
Phone: ${t.customerPhone}
Total Products: ${t.totalProducts}
Total Rooms: ${t.totalRooms}
Generated: ${t.currentDate}

ATTACHMENTS:
- ${t.pdfFilename} (Complete product selection)
- ${t.csvFilename} (Structured data file)

If you have any questions about these products, please contact us:
Email: info@seima.com.au
Website: www.seima.com.au

Best regards,
The Seima Team

© 2024 Seima | Generated by Seima Scanner v${t.appVersion}`}getProductCount(){return JSON.parse(localStorage.getItem(`selectedProducts`)||`[]`).length}getRoomCount(){let e=JSON.parse(localStorage.getItem(`selectedProducts`)||`[]`);return new Set(e.map(e=>e.room).filter(Boolean)).size||1}generateFileName(e,t){let n=new Date,r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=String(n.getFullYear()).slice(-2),o=String(n.getHours()).padStart(2,`0`),s=String(n.getMinutes()).padStart(2,`0`);return`${(e.project||`seima-selection`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}${i}${a}.${o}${s}.${t}`}};function wt(){console.log(`🧪 Testing cleaned up email template...`);let e={name:`cleaned`,email:`test@example.com`,project:`cleaned`,address:`Seima Pty Ltd`,phone:`0400000000`};try{let t=new K().generateEmailHTML(e),n=window.open(``,`_blank`,`width=800,height=600`);return n.document.write(t),n.document.close(),console.log(`✅ Cleaned up email template preview opened in new window`),console.log(`🎨 Changes applied:`),console.log(`   • Header: Removed house icon and subtitle, changed to gold/brown background`),console.log(`   • Sections: Removed "Attached Documents" and "Your selection includes" sections`),console.log(`   • Footer: Removed top two lines`),!0}catch(e){return console.error(`❌ Template test failed:`,e),!1}}window.testCleanedUpTemplate=wt,new K;var Tt=class{constructor(){this.providers={emailjs:new Dt,seimaEmail:new Et},this.currentProvider=null,this.isInitialized=!1,this.templateGenerator=new K}async init(e=`emailjs`,t=null){try{let n=this.providers[e];if(!n)throw Error(`Unknown email provider: ${e}`);let r=t||this._getProviderConfig(e);return await n.init(r),this.currentProvider=n,this.isInitialized=!0,console.log(`✅ Email service initialized with ${e}`),!0}catch(t){return console.error(`❌ Failed to initialize email service with ${e}:`,t),!1}}async sendEmail(e,t,n=null){if(!this.isInitialized||!this.currentProvider)throw Error(`Email service not initialized`);try{let r=W.getStaffContact(),i={...e,staffContact:r},a=this._generateEmailContent(i,t,n);console.log(`📧 Attempting email send (no size restrictions)...`);let o=await this.currentProvider.sendEmail(a);if(o.success)return console.log(`✅ Email sent successfully!`),this.recordSelection(i,t,n,o),o;throw Error(o.error||`Email sending failed`)}catch(r){return console.error(`📧 Email sending failed, using fallback:`,r),this._handleEmailFailure(e,t,n,r)}}async sendNotificationEmail(e){if(!this.isInitialized||!this.currentProvider)throw Error(`Email service not initialized`);try{let t=W.getStaffContact(),n={...e,staffContact:t},r=this._generateEmailContent(n,null,null),i=await this.currentProvider.sendEmail(r);if(i.success)return this._showSuccess(`✅ Notification email sent successfully!`),i;throw Error(i.error||`Notification email failed`)}catch(e){return console.error(`📧 Notification email failed:`,e),{success:!1,error:e.message}}}async testEmail(e=null){let t=e||{name:`Test User`,email:`test@example.com`,project:`Test Project`,address:`Test Address`,phone:`Test Phone`},n=new Blob([`%PDF-1.4
Test PDF Content
%%EOF`],{type:`application/pdf`});return console.log(`🧪 Testing email service...`),await this.sendEmail(t,n,`Code,Description,Quantity
TEST001,"Test Product",1`)}_generateEmailContent(e,t,n){return{to:e.email,toName:e.name||e.email,from:r.EMAIL.FROM_EMAIL||`noreply@seima.com.au`,fromName:`Seima Team`,subject:`Seima Product Selection - ${e.name||`Customer`}`,html:this.templateGenerator.generateEmailHTML(e),text:this.templateGenerator.generateTextEmail(e),bcc:e.staffContact?.email||null,attachments:this._prepareAttachments(e,t,n)}}_prepareAttachments(e,t,n){let r=[];return t&&r.push({filename:this._generateFileName(e,`pdf`),content:t,type:`application/pdf`}),n&&r.push({filename:this._generateFileName(e,`csv`),content:new Blob([n],{type:`text/csv;charset=utf-8`}),type:`text/csv`}),r}_generateFileName(e,t){let n=new Date,r=`${String(n.getDate()).padStart(2,`0`)}${String(n.getMonth()+1).padStart(2,`0`)}${String(n.getFullYear()).slice(-2)}`,i=`${String(n.getHours()).padStart(2,`0`)}${String(n.getMinutes()).padStart(2,`0`)}`;return`${(e.project||`Selection`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}.${i}.${t}`}_handleEmailFailure(e,t,n,r){console.error(`📧 Email failed, providing download fallback:`,r);let i=[];try{if(t){let n=this._generateFileName(e,`pdf`);this._downloadFile(t,n),i.push(`PDF`),console.log(`✅ PDF downloaded as fallback`)}}catch(e){console.error(`❌ Failed to download PDF:`,e)}try{if(n){let t=new Blob([n],{type:`text/csv;charset=utf-8`}),r=this._generateFileName(e,`csv`);this._downloadFile(t,r),i.push(`CSV`),console.log(`✅ CSV downloaded as fallback`)}}catch(e){console.error(`❌ Failed to download CSV:`,e)}return i.length>0?this._showError(`Unable to send email. Files have been downloaded to your device.`):this._showError(`Email sending failed and file download failed. Please try again.`),{success:!1,method:`download_fallback`,error:r.message,downloadedFiles:i}}_downloadFile(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.style.display=`none`,r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}_getProviderConfig(e){switch(e){case`emailjs`:return{publicKey:r.EMAIL.PUBLIC_KEY,serviceId:r.EMAIL.SERVICE_ID,templateId:r.EMAIL.TEMPLATE_ID};case`seimaEmail`:return{apiUrl:r.EMAIL.SEIMA_EMAIL_API_URL,apiKey:r.EMAIL.SEIMA_EMAIL_API_KEY||null,fromEmail:r.EMAIL.FROM_EMAIL,fromName:r.EMAIL.FROM_NAME};default:return{}}}_showSuccess(e){window.showSuccessMessage?window.showSuccessMessage(e):console.log(e)}_showError(e){window.showErrorMessage?window.showErrorMessage(e):console.error(e)}async recordSelection(e,t,n,r){try{let i=this.getSelectedProducts();if(i.length===0){console.log(`📊 No products to record`);return}let a={success:!0,pdfGenerated:!!t,csvGenerated:!!n,pdfSize:t?`${(t.size/1024/1024).toFixed(2)}MB`:``,method:r.provider||`email`},o={...e};e.leadData?o.leadData=e.leadData:window.currentLeadData&&(o.leadData=window.currentLeadData);let s=await G.recordSelection(o,i,a);s.success?console.log(`📊 Selection recorded successfully`):console.warn(`📊 Selection recording failed:`,s.error||s.reason)}catch(e){console.error(`📊 Error recording selection:`,e)}}getSelectedProducts(){try{let e=JSON.parse(localStorage.getItem(r.STORAGE_KEYS.SELECTED_PRODUCTS)||`[]`);return e.length>0?e:JSON.parse(localStorage.getItem(`selection`)||`[]`).map(e=>({product:e,room:e.Room||``,notes:e.Notes||``,quantity:e.Quantity||1}))}catch(e){return console.error(`Error getting selected products:`,e),[]}}},Et=class{constructor(){this.isInitialized=!1,this.config=null,this.MAX_ATTACHMENT_BYTES=3*1024*1024}async init(e){if(!e||!e.apiUrl)throw Error(`Seima Email requires SEIMA_EMAIL_API_URL in CONFIG.EMAIL`);this.config=e,this.isInitialized=!0,console.log(`✅ Seima Email provider initialized`)}async _blobToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onloadend=()=>{let e=r.result.split(`,`)[1];t(e||``)},r.onerror=()=>n(r.error),r.readAsDataURL(e)})}async sendEmail(e){if(!this.isInitialized||!this.config)return{success:!1,provider:`seimaEmail`,error:`Seima Email provider not initialized`};try{let t=[];for(let n of e.attachments||[]){let e=n.content instanceof Blob?n.content:new Blob([n.content]);if(e.size>this.MAX_ATTACHMENT_BYTES)return{success:!1,provider:`seimaEmail`,error:`Attachment "${n.filename}" exceeds 3 MB limit. Use EmailJS or download instead.`};let r=await this._blobToBase64(e);t.push({filename:n.filename,contentType:n.type||`application/octet-stream`,contentBase64:r})}let n={"Content-Type":`application/json`,...f.getAuthHeaders()};!n.Authorization&&this.config.apiKey&&(n[`X-Api-Key`]=this.config.apiKey);let r=await fetch(this.config.apiUrl,{method:`POST`,headers:n,body:JSON.stringify({to:e.to,toName:e.toName,subject:e.subject,html:e.html,text:e.text,bcc:e.bcc||null,fromName:this.config.fromName,attachments:t})}),i=await r.json().catch(()=>({}));if(r.ok&&(r.status===200||r.status===202))return{success:!0,provider:`seimaEmail`,result:i};r.status===401&&f.handleUnauthorizedResponse(r,`seima-email`);let a=i.details||i.error||`Request failed ${r.status}`;return console.warn(`📧 Seima Email worker error:`,r.status,i),{success:!1,provider:`seimaEmail`,error:a}}catch(e){return{success:!1,provider:`seimaEmail`,error:e.message||String(e)}}}},Dt=class{constructor(){this.isInitialized=!1}async init(e){window.emailjs||await this._loadEmailJS(),emailjs.init({publicKey:e.publicKey}),this.config=e,this.isInitialized=!0,console.log(`✅ EmailJS provider initialized`)}async sendEmail(e){try{let t={to_email:e.to,from_name:e.fromName,subject:e.subject,email_html:e.html,message_text:e.text,bcc_email:e.bcc||``};for(let n of e.attachments)n.type===`application/pdf`?(t.pdf_attachment=await this._blobToBase64(n.content),t.pdf_filename=n.filename):(n.type===`text/plain`||n.type===`text/csv`)&&(t.csv_attachment=await this._blobToBase64(n.content),t.csv_filename=n.filename);let n=await emailjs.send(this.config.serviceId,this.config.templateId,t,this.config.publicKey);if(n.status===200)return{success:!0,provider:`emailjs`,result:n};throw Error(`EmailJS returned status ${n.status}`)}catch(e){return{success:!1,provider:`emailjs`,error:e.message}}}async _loadEmailJS(){return new Promise((e,t)=>{let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`,n.onload=e,n.onerror=t,document.head.appendChild(n)})}async _blobToBase64(e){return new Promise((t,n)=>{let r=new FileReader;r.onloadend=()=>{try{let e=r.result.split(`,`)[1];t(e)}catch(e){console.error(`❌ Base64 conversion failed:`,e),n(e)}},r.onerror=()=>{console.error(`❌ FileReader error:`,r.error),n(r.error)},r.readAsDataURL(e)})}},Ot=new Tt;function kt(){let e=new K().generateEmailHTML({name:`45`,email:`test@example.com`,project:`345`,address:`house address`,mobile:`55432`}),t=window.open(``,`_blank`,`width=800,height=600`);t.document.write(e),t.document.close(),console.log(`✅ Email template preview opened in new window`)}function At(){console.log(`🧪 Testing consolidated email templates...`);let e={name:`Test User`,email:`test@example.com`,project:`Test Project`,address:`Test Address`,phone:`1234567890`};try{let t=new K,n=t.generateEmailHTML(e),r=t.generateTextEmail(e);console.log(`✅ Standalone EmailTemplateGenerator works correctly`),console.log(`📄 HTML content length:`,n.length),console.log(`📝 Text content length:`,r.length);let i=new Tt()._generateEmailContent(e,null,null);return console.log(`✅ EmailService integration works correctly`),console.log(`📧 Email content generated:`,{to:i.to,subject:i.subject,htmlLength:i.html.length,textLength:i.text.length}),!0}catch(e){return console.error(`❌ Template consolidation test failed:`,e),!1}}window.testEmailTemplate=kt,window.testConsolidatedTemplates=At;var jt=new class{constructor(){this.isInitialized=!1,this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache=new Map,this.preloadedImageCache=new Map}_generateImageHash(e){let t=0;if(!e||e.length===0)return t.toString();for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}_isTechnicalDiagram(e,t){try{let n=Math.min(100,e.width),r=Math.min(100,e.height),i=t.getImageData(0,0,n,r).data,a=new Set;for(let e=0;e<i.length;e+=4){let t=`${i[e]},${i[e+1]},${i[e+2]}`;if(a.add(t),a.size>1e3)return!1}return a.size<1e3}catch(e){return console.warn(`Could not analyze image for diagram detection:`,e),!1}}_detectTransparency(e,t){try{let n=t.getImageData(0,0,e.width,e.height).data;for(let e=3;e<n.length;e+=4)if(n[e]<255)return!0;return!1}catch(e){return console.warn(`Could not detect transparency:`,e),!1}}async _preloadAllImages(e){this.preloadedImageCache.clear();let t=new Set;e.forEach(e=>{e.Image_URL&&e.Image_URL.length>10&&t.add(e.Image_URL),e.Diagram_URL&&e.Diagram_URL.length>10&&t.add(e.Diagram_URL)});let n=Array.from(t);if(n.length===0)return console.log(`📷 No images to preload`),0;console.log(`📷 Preloading ${n.length} images in parallel...`);let r=Date.now(),i=0,a=0;for(let e=0;e<n.length;e+=10){let t=n.slice(e,e+10);(await Promise.allSettled(t.map(e=>this._preloadSingleImage(e)))).forEach((e,n)=>{let r=t[n];e.status===`fulfilled`&&e.value?(this.preloadedImageCache.set(r,e.value),i++):a++});let r=document.getElementById(`preload-progress`);r&&(r.textContent=`Loading images: ${Math.min(100,Math.round((e+t.length)/n.length*100))}%`)}let o=((Date.now()-r)/1e3).toFixed(1);return console.log(`✅ Preloaded ${i}/${n.length} images in ${o}s (${a} failed)`),i}async _preloadSingleImage(e){if(this.preloadedImageCache.has(e))return this.preloadedImageCache.get(e);if(R(e))return null;try{let t=await this._optimizeImageForPDF(e,400,.8);return t&&t.url!==`assets/no-image.png`?t:null}catch{return console.warn(`Failed to preload image: ${e.substring(0,50)}...`),null}}async init(){try{await this._loadJSPDF(),this.isInitialized=!0,console.log(`✅ PDF service initialized`)}catch(e){throw console.error(`❌ PDF service initialization failed:`,e),e}}async generatePDF(e){if(!this.isInitialized)throw Error(`PDF service not initialized`);try{console.log(`📄 Generating PDF for ${W.getSelectionStats().totalProducts} products...`),this._ensurePdfSpinner();let t=document.getElementById(`pdf-spinner`);return t&&(t.style.display=`flex`),this._resetImageOptimizationStats(),this._showProcessingNotification(e),await this._generatePDFWithOriginalLogic(e)}catch(e){throw console.error(`❌ PDF generation failed:`,e),e}}async _generatePDFWithOriginalLogic(e){let t=JSON.parse(localStorage.getItem(`selection`)||`[]`),n=JSON.parse(localStorage.getItem(r.STORAGE_KEYS.SELECTED_PRODUCTS)||`[]`),i=[];if(i=n.length>0?n.map(e=>{let t=e.product||{};return rt({...t,Image_URL:t.Image_URL||t.imageUrl||t[`Image URL`]||``,Diagram_URL:t.Diagram_URL||t.diagramUrl||t[`Diagram URL`]||``,Datasheet_URL:t.Datasheet_URL||t.datasheetUrl||t[`Datasheet URL`]||``,Website_URL:t.Website_URL||t.websiteUrl||t[`Website URL`]||``,Room:e.room,Notes:e.notes,Quantity:e.quantity,Timestamp:new Date(e.timestamp).toISOString()})}):t,!i.length){alert(`No products selected.`);let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`none`);return}if(this.preloadedImageCache.size>0)console.log(`📷 Using ${this.preloadedImageCache.size} pre-cached images (skipping duplicate preload)`);else{let e=document.getElementById(`pdf-processing-notification`);if(e){let t=document.createElement(`span`);t.id=`preload-progress`,t.style.cssText=`display: block; font-size: 12px; margin-top: 4px; color: #1e40af;`,t.textContent=`Loading images: 0%`,e.querySelector(`p`)?.appendChild(t)}console.log(`📷 Starting image preload for`,i.length,`products`);let t=await this._preloadAllImages(i);if(console.log(`📷 Image preloading complete: ${t} images cached`),e){let e=document.getElementById(`preload-progress`);e&&(e.textContent=`✓ ${t} images ready`)}}let a={};i.forEach(e=>{a[e.Room]||(a[e.Room]=[]),a[e.Room].push(e)});let{jsPDF:o}=window.jspdf,s=new o({orientation:`landscape`,unit:`pt`,format:`a4`,compress:!0,putOnlyUsedFonts:!0,precision:16,floatPrecision:16}),c=s.internal.pageSize.getWidth(),l=s.internal.pageSize.getHeight();return new Promise((t,n)=>{this._loadImageAsDataURL(st(`assets/seima-logo.png`),(n,r,i)=>{n&&console.log(`🔍 Debug - Cover logo size: ${(n.length/1024).toFixed(1)} KB (${r}x${i})`),_t(s,{pageWidth:c,pageHeight:l,seimaLogoDataUrl:n,seimaLogoNaturalW:r,seimaLogoNaturalH:i,userDetails:e,staffContact:W.getStaffContact(),footerHeight:V.footerHeight}),s.addPage(),this._loadImageAsDataURL(st(`assets/seima-logo-white.png`),(n,r,i)=>{let o=V.margins.left,u=V.footerHeight,d=!e.excludePrice,{colX:f,colW:p,headers:m,imgW:h,imgPad:g}=ht(c,{showRrp:!1,showPrice:d,showQty:!0,showTotal:d}),_=[];Object.keys(a).forEach(e=>{let t=a[e];t.forEach((n,r)=>{_.push({item:n,room:e,roomCount:t.length,isFirstInRoom:r===0})})});let v=V.maxRowsPerPage,y=V.rowPadding,b=Math.floor((l-80)/v),x=u+8,S=0,C=0,w=()=>{if(C>=_.length){let a=s.internal.getNumberOfPages()-1;for(let t=2;t<=a+1;t++){s.setPage(t);let d=(t-2)*v,h=Math.min(d+v,_.length),g=!1;for(let e=d;e<h;e++)if(_[e]&&_[e].item&&mt(_[e].item)){g=!0;break}gt(s,{pageWidth:c,colX:f,colW:p,leftMargin:o,footerHeight:u,logoDataUrl:n,logoNaturalW:r,logoNaturalH:i,headers:m,userDetails:{...e,includeGst:!0},skipWelsHeader:!g}),U(s,{pageWidth:c,pageHeight:l,leftMargin:o,footerHeight:u,pageNumber:t-1,totalPages:a})}let d=this._generatePDFFilename(e),h=s.output(`blob`);this._removeNotifications(),this._showImageOptimizationSummary(e.emailCompatible),console.log(`✅ PDF generated successfully: ${d} (${(h.size/1024/1024).toFixed(2)} MB)`),t(h);return}S>=v&&(s.addPage(),x=u+8,S=0);let a=_[C];if(!a||!a.item){console.warn(`⚠️ Skipping invalid row at index ${C}:`,a),C++,w();return}let d=x+b*S;a.isFirstInRoom&&vt(s,a.room,a.roomCount,o,d),nt(a.item),this._drawImage(s,a.item.Image_URL||``,f[0],d+y+8,h,b-y*2,e.emailCompatible,()=>{this._drawImage(s,a.item.Diagram_URL||``,f[0]+h+g,d+y+8,h,b-y*2,e.emailCompatible,()=>{s.setFontSize(10),s.setTextColor(B.textPrimary);let t=d+32,n=f[1]+p[1]/2;s.text(String(a.item.OrderCode||``),n,t+10,{align:`center`}),yt(s,a.item,n,t+38);let r=m.indexOf(`WELS`)+1,i=p[2];if(bt(s,a.item,f[2],t+10,i),r>0&&f[r]){let e=f[r]+p[r]/2;xt(s,a.item,e,t+10)}Ct(s,a.item,f,p,m,t+10,{excludePrice:e.excludePrice,includeGst:!0}),C++,S++,setTimeout(w,10)})})};w()})})})}async _loadJSPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}let n=document.createElement(`script`);n.src=`https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`,n.onload=e,n.onerror=t,document.head.appendChild(n)})}_loadImageAsDataURL(e,t){let n=new Image;n.crossOrigin=`Anonymous`,n.onload=function(){let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=n.width,a=n.height;if(i>400||a>150){let e=400/i,t=150/a,n=Math.min(e,t);i=Math.round(i*n),a=Math.round(a*n)}e.width=i,e.height=a,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality=`high`,r.drawImage(n,0,0,i,a);let o=e.toDataURL(`image/png`);console.log(`🖼️ Logo optimized: ${n.width}x${n.height} -> ${i}x${a} (${(o.length/1024).toFixed(1)}KB)`),t(o,i,a)},n.onerror=()=>t(null,0,0),n.src=e}_drawImage(e,t,n,r,i,a,o,s){if(!t||typeof t!=`string`||t.length<10){s&&s();return}if(this.imageOptimizationStats.totalImages++,o){console.log(`📧 Email mode: Skipping image for smaller file size`),this.imageOptimizationStats.failedImages++,s&&s();return}let c=this,l=`img_${this._generateImageHash(t)}`,u=this.preloadedImageCache.get(t);if(!u){let e=ft(t);e&&e.dataUrl&&(u={url:e.dataUrl,format:e.format||`JPEG`})}if(u){this._addImageToPDF(e,u,n,r,i,a,l,s);return}this._optimizeImageForPDF(t,400,.8).then(t=>{if(!t||t.url===`assets/no-image.png`){c.imageOptimizationStats.failedImages++,s&&s();return}c._addImageToPDF(e,t,n,r,i,a,l,s)}).catch(e=>{console.warn(`Image optimization failed:`,e),c.imageOptimizationStats.failedImages++,s&&s()})}_addImageToPDF(e,t,n,r,i,a,o,s){let c=this,{url:l,format:u}=t;if(!l.startsWith(`data:`)){c.imageOptimizationStats.failedImages++,s&&s();return}let d=l.split(`,`)[1],f=d?d.length*.75:0;if(f>1048576){console.warn(`🚫 Image too large: ${Math.round(f/1024)} KB, skipping`),c.imageOptimizationStats.failedImages++,s&&s();return}let p=new Image;p.onload=function(){try{let t=p.naturalWidth/p.naturalHeight,s=Math.min(i,120),d=Math.min(a,120);t>1?(d=s/t,d>120&&(d=120,s=d*t)):(s=d*t,s>120&&(s=120,d=s/t)),e.addImage(l,u,n,r,s,d,o,`FAST`),c.imageOptimizationStats.optimizedImages++}catch(t){console.warn(`Failed to add image with aspect ratio:`,t),e.addImage(l,u,n,r,Math.min(i,120),Math.min(a,120),o,`FAST`),c.imageOptimizationStats.optimizedImages++}s&&s()},p.onerror=function(){console.warn(`Failed to load image for aspect ratio calculation`),e.addImage(l,u,n,r,Math.min(i,120),Math.min(a,120),o,`FAST`),c.imageOptimizationStats.optimizedImages++,s&&s()},p.src=l}_optimizeImageForPDF(e,t=400,n=.8){return ot(e,t,n)}_generatePDFFilename(e){let t=new Date,n=String(t.getDate()).padStart(2,`0`),r=String(t.getMonth()+1).padStart(2,`0`),i=String(t.getFullYear()).slice(-2),a=String(t.getHours()).padStart(2,`0`),o=String(t.getMinutes()).padStart(2,`0`);return`${(e.project||`Selection`).replace(/[^a-zA-Z0-9\s]/g,``)}-${n}${r}${i}.${a}${o}.pdf`}_ensurePdfSpinner(){if(!document.getElementById(`pdf-spinner`)){let e=document.createElement(`div`);if(e.id=`pdf-spinner`,e.style.cssText=`
        display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 9999; background: rgba(255,255,255,0.7); align-items: center; justify-content: center;
      `,e.innerHTML=`<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>`,document.body.appendChild(e),!document.getElementById(`pdf-spinner-style`)){let e=document.createElement(`style`);e.id=`pdf-spinner-style`,e.innerHTML=`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`,document.head.appendChild(e)}}}_showProcessingNotification(e){let t=document.createElement(`div`);t.id=`pdf-processing-notification`,t.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 6px;
      padding: 16px; max-width: 320px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;let n=e.emailCompatible;t.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${n?`📧`:`📄`}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${n?`Creating text-only PDF without images for optimal email delivery.`:`This may take a moment.`}
      </p>
    `,document.body.appendChild(t)}_removeNotifications(e=!1){if(e){let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`none`)}let t=document.getElementById(`pdf-processing-notification`);t&&t.remove()}_resetImageOptimizationStats(){this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache.clear()}_showImageOptimizationSummary(e=!1){let t=this.imageOptimizationStats;t.totalImages>0&&(console.log(`🖼️ Image Optimization Summary:`),console.log(`   Total images: ${t.totalImages}`),console.log(`   Optimized: ${t.optimizedImages}`),console.log(`   Failed: ${t.failedImages}`),console.log(`   Success rate: ${(t.optimizedImages/t.totalImages*100).toFixed(1)}%`),console.log(`   Email compatible mode: ${e}`))}generateCSV(e){try{let t=W.getProductsLegacyFormat();if(!t.length)return console.warn(`⚠️ No products found for CSV generation`),null;let n=t.map(t=>{let n=(t.RRP_INCGST||``).toString().replace(/,/g,``),r=parseFloat(n),i=isNaN(r)?``:(r*(t.Quantity||1)).toFixed(2),a=e.excludePrice,o=t[`WELS STAR`]||t.WELS_STAR||t.WELS_STAR||t.WelsStar||``,s=o&&o.toString().trim()?o.toString().replace(/[^\d.]/g,``).trim():``;return{Code:this._sanitizeCSVField(t.OrderCode||``),Description:this._sanitizeCSVField(t.Description||``),"WELS Star":this._sanitizeCSVField(s),Quantity:t.Quantity||1,"Price ea inc GST":a?`0.00`:t.RRP_INCGST||``,"Price Total inc GST":a?`0.00`:i,Notes:this._sanitizeCSVField(t.Notes||``),Room:this._sanitizeCSVField(t.Room||``),"Image URL":this._sanitizeCSVField(t.Image_URL||``),"Diagram URL":this._sanitizeCSVField(t.Diagram_URL||``),"Datasheet URL":this._sanitizeCSVField(t.Datasheet_URL||``),"Website URL":this._sanitizeCSVField(t.Website_URL||``)}}),r=window.Papa.unparse(n,{quotes:!0,quoteChar:`"`,delimiter:`,`,header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:`"`}),i=this._buildCustomerMetadata(e,t),a=r+this._formatMetadataForCSV(i),o=this._sanitizeCSVForEmail(a);return console.log(`✅ CSV generated successfully (${o.length} characters, includes customer metadata)`),o}catch(e){throw console.error(`❌ CSV generation failed:`,e),e}}_buildCustomerMetadata(e,t){let n=e.leadData||window.currentLeadData||{},r=JSON.parse(localStorage.getItem(`seimaStaffContact`)||`{}`),i=new Date,a=f.getCurrentUser(),o=a?.name||r.name||``,s=a?.email||r.email||``,c=a?.phone||r.mobile||``;return{_metadata:{date:i.toLocaleDateString(`en-AU`),time:i.toLocaleTimeString(`en-AU`,{hour:`2-digit`,minute:`2-digit`})},customer:{name:e.name||n.customerName||``,email:e.email||n.customerEmail||``,phone:n.customerPhone||``,type:n.customerType||``,builderName:n.builderName||``,merchantName:n.merchantName||``},project:{name:n.projectName||``,address:n.projectAddress||``,notes:n.projectNotes||``},staff:{name:o,email:s,mobile:c}}}_formatMetadataForCSV(e){return`\r
\r
"---METADATA---"\r
"${JSON.stringify(e).replace(/"/g,`""`)}"`}_sanitizeCSVField(e){return typeof e==`string`?e.replace(/"/g,`""`).replace(/[\r\n]/g,` `):String(e||``)}_sanitizeCSVForEmail(e){return e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,``).replace(/[^\x00-\x7F]/g,function(e){return{"€":`EUR`,"£":`GBP`,"¥":`YEN`,"©":`(c)`,"®":`(r)`,"™":`TM`,"…":`...`,"“":`"`,"”":`"`,"‘":`'`,"’":`'`,"–":`-`,"—":`-`}[e]||`?`}).replace(/\r?\n/g,`\r
`).replace(/\0/g,``)}generateFileName(e,t){let n=new Date,r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=String(n.getFullYear()).slice(-2),o=String(n.getHours()).padStart(2,`0`),s=String(n.getMinutes()).padStart(2,`0`);return`${(e.project||`Selection`).replace(/[^a-zA-Z0-9\s]/g,``)}-${r}${i}${a}.${o}${s}.${t}`}},Mt=class{constructor(){this.isInitialized=!1,this.services={data:W,email:Ot,pdf:jt},this.errorHandler=new Nt,this.isGeneratingPDF=!1}async init(){try{console.log(`🚀 Initializing Seima Scanner services...`),this.services.data.migrateLegacyData();let e=r.EMAIL.PROVIDER||`emailjs`;return await this.services.email.init(e),await this.services.pdf.init(),this.isInitialized=!0,console.log(`✅ All services initialized successfully`),!0}catch(e){return console.error(`❌ Service initialization failed:`,e),this.errorHandler.handleError(e,`Service initialization`),!1}}addProduct(e,t=``,n=``,r=1){try{return this.services.data.addProduct(e,t,n,r)}catch(e){throw this.errorHandler.handleError(e,`Adding product`),e}}removeProduct(e){try{return this.services.data.removeProduct(e)}catch(e){throw this.errorHandler.handleError(e,`Removing product`),e}}updateProduct(e,t){try{return this.services.data.updateProduct(e,t)}catch(e){throw this.errorHandler.handleError(e,`Updating product`),e}}getSelectedProducts(){return this.services.data.getSelectedProducts()}getSelectionStats(){return this.services.data.getSelectionStats()}clearSelection(){try{this.services.data.clearSelection()}catch(e){throw this.errorHandler.handleError(e,`Clearing selection`),e}}async generateAndSendPDF(e){if(this.isGeneratingPDF)return console.warn(`⚠️ PDF generation already in progress, ignoring duplicate request`),{success:!1,message:`PDF generation already in progress`};this.isGeneratingPDF=!0,this.isInitialized||await this.init();try{if(console.log(`📄 Starting PDF generation and email process...`),!this.services.data.getSelectedProducts().length)throw Error(`No products selected`);let t=await this.services.pdf.generatePDF(e);console.log(`✅ PDF generated successfully (${(t.size/1024/1024).toFixed(2)} MB)`);let n=null;if(e.exportCsv===!0&&(console.log(`📊 Generating CSV file...`),n=this.services.pdf.generateCSV(e),n?console.log(`✅ CSV generated successfully (${n.length} characters)`):console.warn(`⚠️ CSV generation returned no data`)),e.sendEmail&&e.email){console.log(`📧 Sending email with attachments...`);let r=await this.services.email.sendEmail(e,t,n);return r.success?{success:!0,method:`email`,pdfSize:t.size,message:`Email sent successfully with PDF attachment`}:{success:!1,method:`download_fallback`,pdfSize:t.size,message:`Email failed, files downloaded instead`,error:r.error}}else{if(console.log(`💾 Starting direct file downloads...`),this._downloadFile(t,this.services.pdf.generateFileName(e,`pdf`)),console.log(`✅ PDF download initiated`),n){let t=new Blob([n],{type:`text/csv;charset=utf-8`});this._downloadFile(t,this.services.pdf.generateFileName(e,`csv`)),console.log(`✅ CSV download initiated`)}else console.log(`ℹ️ No CSV data to download`);return{success:!0,method:`download`,pdfSize:t.size,message:n?`PDF and CSV files downloaded successfully`:`PDF file downloaded successfully`}}}catch(e){throw this.errorHandler.handleError(e,`PDF generation and sending`),e}finally{this.isGeneratingPDF=!1}}async testEmail(e=null){this.isInitialized||await this.init();try{return await this.services.email.testEmail(e)}catch(e){throw this.errorHandler.handleError(e,`Email testing`),e}}async switchEmailProvider(e,t=null){try{console.log(`🔄 Switching email provider to ${e}...`);let n=await this.services.email.init(e,t);return n?console.log(`✅ Email provider switched to ${e}`):console.error(`❌ Failed to switch to ${e}`),n}catch(e){throw this.errorHandler.handleError(e,`Email provider switching`),e}}getHealthStatus(){return{initialized:this.isInitialized,dataService:this.services.data?`ready`:`not ready`,emailService:this.services.email?.isInitialized?`ready`:`not ready`,pdfService:this.services.pdf?.isInitialized?`ready`:`not ready`,selectedProducts:this.services.data.getSelectedProducts().length,timestamp:new Date().toISOString()}}getMigrationReadiness(){let e=this.getSelectionStats();return{ready:this.isInitialized,currentProvider:r.EMAIL.PROVIDER,seimaEmailConfigured:!!r.EMAIL.SEIMA_EMAIL_API_URL,testingRecommended:e.totalProducts>0,migrationSteps:[`1. Deploy the Seima email worker and set secrets (see EMAIL-MICROSOFT-365.md)`,`2. Set CONFIG.EMAIL.SEIMA_EMAIL_API_URL and optional SEIMA_EMAIL_API_KEY`,`3. Set CONFIG.EMAIL.PROVIDER to "seimaEmail"`,`4. Remove or keep EmailJS as fallback`]}}getMigrationReadinessStatus(){return this.getMigrationReadiness()}getDebugAPI(){return{getHealthStatus:()=>this.getHealthStatus(),getMigrationReadiness:()=>this.getMigrationReadiness(),getMigrationReadinessStatus:()=>this.getMigrationReadiness(),switchToMicrosoftGraph:()=>this.switchEmailProvider(`seimaEmail`),testEmail:e=>this.testEmail(e),getErrorLog:()=>JSON.parse(localStorage.getItem(`seimaErrorLog`)||`[]`),clearErrorLog:()=>localStorage.removeItem(`seimaErrorLog`),getSystemStatus:()=>this.getHealthStatus(),validateConfiguration:()=>({valid:this.isInitialized,details:this.getHealthStatus()})}}downloadWithFallback(e,t){try{this._downloadFile(e,t),console.log(`✅ Downloaded ${t}`)}catch(t){console.error(`Download failed:`,t);let n=URL.createObjectURL(e);window.open(n,`_blank`),setTimeout(()=>URL.revokeObjectURL(n),1e4)}}_downloadFile(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.style.display=`none`,r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}get emailService(){return this.services.email}get dataService(){return this.services.data}get pdfService(){return this.services.pdf}},Nt=class{handleError(e,t=`Unknown`){let n={message:e.message||`Unknown error`,context:t,timestamp:new Date().toISOString(),stack:e.stack};console.error(`❌ Error in ${t}:`,n),this._showUserError(e,t),this._trackError(n)}_showUserError(e,t){let n=``;switch(t){case`PDF generation and sending`:n=`Failed to generate or send PDF. Please check your selections and try again.`;break;case`Email sending`:n=`Failed to send email. Files will be downloaded instead.`;break;case`Adding product`:n=`Failed to add product to selection. Please try again.`;break;case`Service initialization`:n=`Failed to initialize application services. Please refresh the page.`;break;default:n=`An error occurred: ${e.message}`}window.showErrorMessage?window.showErrorMessage(n):alert(n)}_trackError(e){try{let t=JSON.parse(localStorage.getItem(`seimaErrorLog`)||`[]`);t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem(`seimaErrorLog`,JSON.stringify(t))}catch(e){console.warn(`Could not store error log:`,e)}}};new Mt;var q=new class{constructor(){this.tesseractWorker=null,this.isInitialized=!1,this.isScanning=!1,this.scanInterval=null,this.isProcessing=!1,this.preprocessOptions={contrast:1.5,threshold:`auto`,adaptive:!0,adaptiveOffset:0},this.ocrWorker=null,this.useWebWorker=!1,this.workerReady=!1,this.pendingRequests=new Map,this.requestId=0,this.canvas=null,this.ctx=null}get helpers(){let e=globalThis&&globalThis.ocrUtils||{};if(!e.cleanOcrText||!e.preprocessCanvasForOCR||!e.dedupeTextData)throw Error(`OCR utilities not loaded`);return e}setPreprocessOptions(e={}){this.preprocessOptions={...this.preprocessOptions,...e}}getCanvas(e,t){return this.canvas||(this.canvas=document.createElement(`canvas`),this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!0})),this.canvas.width=e,this.canvas.height=t,{canvas:this.canvas,ctx:this.ctx}}async initialize(e=!0){if(this.isInitialized)return!0;if(e&&typeof Worker<`u`)try{return await this.initializeWebWorker(),this.useWebWorker=!0,this.isInitialized=!0,console.log(`✅ OCR initialized with Web Worker (off-main-thread)`),!0}catch(e){console.warn(`⚠️ Web Worker initialization failed, falling back to direct mode:`,e.message)}return await this.initializeDirect(),this.useWebWorker=!1,this.isInitialized=!0,console.log(`✅ OCR initialized in direct mode`),!0}async initializeWebWorker(){return new Promise((e,t)=>{try{this.ocrWorker=new Worker(`./js/ocr-worker.js`);let n=setTimeout(()=>{t(Error(`Web Worker initialization timeout`))},1e4);this.ocrWorker.onmessage=r=>{let{type:i,id:a,results:o,error:s,success:c}=r.data;if(i===`ready`)this.ocrWorker.postMessage({type:`init`,id:`init`});else if(i===`init_complete`)clearTimeout(n),this.workerReady=!0,e(!0);else if(i===`result`){let e=this.pendingRequests.get(a);e&&(e.resolve(o),this.pendingRequests.delete(a))}else if(i===`error`)if(a===`init`)clearTimeout(n),t(Error(s));else{let e=this.pendingRequests.get(a);e&&(e.reject(Error(s)),this.pendingRequests.delete(a))}},this.ocrWorker.onerror=e=>{clearTimeout(n),t(e)}}catch(e){t(e)}})}async initializeDirect(){if(this.tesseractWorker)return this.tesseractWorker;try{if(console.log(`🔍 Initializing Tesseract directly...`),typeof Tesseract>`u`)throw Error(`Tesseract.js not loaded. Please ensure the script is included.`);return this.tesseractWorker=await Tesseract.createWorker(`eng`),await this.tesseractWorker.setParameters({tessedit_char_whitelist:`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -.,()`,preserve_interword_spaces:`0`,tessedit_pageseg_mode:`6`}),this.tesseractWorker}catch(e){throw console.error(`❌ Failed to initialize Tesseract:`,e),e}}canvasToBase64(e){return e.toDataURL(`image/png`)}async processWithWorker(e,t,n){return new Promise((r,i)=>{let a=`req_${++this.requestId}`,o=setTimeout(()=>{this.pendingRequests.delete(a),i(Error(`OCR processing timeout`))},3e4);this.pendingRequests.set(a,{resolve:e=>{clearTimeout(o),r(e)},reject:e=>{clearTimeout(o),i(e)}}),this.ocrWorker.postMessage({type:`process`,id:a,data:{imageBase64:e,width:t,height:n}})})}async startScanning(e,t,n=1500){if(this.isScanning){console.warn(`OCR scanning already in progress`);return}if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw Error(`Video element not ready for OCR scanning`);this.isScanning=!0,this.runScanLoop(e,t,n),console.log(`✅ OCR scanning started`+(this.useWebWorker?` (Web Worker mode)`:` (direct mode)`))}runScanLoop(e,t,n){this.isScanning&&(this.scanInterval&&clearTimeout(this.scanInterval),this.scanInterval=setTimeout(async()=>{if(this.isScanning){if(this.isProcessing||!e||e.paused||e.ended||e.readyState<2){this.runScanLoop(e,t,n);return}this.isProcessing=!0;try{let r=e.videoWidth||640,i=e.videoHeight||480;if(r===0||i===0){this.isProcessing=!1,this.runScanLoop(e,t,n);return}let{canvas:a,ctx:o}=this.getCanvas(r,i);o.drawImage(e,0,0,r,i);let{preprocessCanvasForOCR:s,dedupeTextData:c}=this.helpers,l=this.preprocessOptions,u;if(this.useWebWorker&&this.workerReady){s(a,l);let e=this.canvasToBase64(a);u=await this.processWithWorker(e,r,i)}else{s(a,l);let e=await this.tesseractWorker.recognize(a);u=this.extractTextData(e,r,i)}let d=c(u);d.length>0&&(this.isScanning=!1,console.log(`📝 OCR detected text with spatial data:`,d.length,`items`),t(d))}catch(e){(!e.message||!e.message.includes(`too small`)&&!e.message.includes(`cannot be recognized`))&&console.warn(`OCR recognition error:`,e)}finally{this.isProcessing=!1,this.isScanning&&this.runScanLoop(e,t,n)}}},n))}stopScanning(){this.scanInterval&&=(clearTimeout(this.scanInterval),null),this.isScanning=!1,this.isProcessing=!1,console.log(`🛑 OCR scanning stopped`)}async captureAndProcessImage(e){if(this.isProcessing)return console.warn(`OCR processing already in progress`),[];if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw Error(`Video element not ready for OCR capture`);if(e.readyState<2)throw Error(`Video not ready - please wait a moment`);this.isProcessing=!0;try{let t=e.videoWidth||640,n=e.videoHeight||480;if(t===0||n===0)throw Error(`Video dimensions not available`);let{canvas:r,ctx:i}=this.getCanvas(t,n);i.drawImage(e,0,0,t,n);let a,{preprocessCanvasForOCR:o,dedupeTextData:s}=this.helpers;if(this.useWebWorker&&this.workerReady){o(r,this.preprocessOptions);let e=this.canvasToBase64(r);a=await this.processWithWorker(e,t,n)}else{o(r,this.preprocessOptions);let e=await this.tesseractWorker.recognize(r);a=this.extractTextData(e,t,n)}let c=s(a);return console.log(`📝 OCR detected text with spatial data:`,c.length,`items`),console.log(`📋 OCR Raw Data:`,c.map(e=>({text:e.text,centerX:Math.round(e.centerX),centerY:Math.round(e.centerY),bbox:e.bbox}))),c}catch(e){throw console.error(`OCR capture error:`,e),e}finally{this.isProcessing=!1}}async captureAndProcessCanvas(e){if(this.isProcessing)return console.warn(`OCR processing already in progress`),[];if(this.isInitialized||await this.initialize(),!e)throw Error(`No canvas provided for OCR processing`);this.isProcessing=!0;try{let t=e.width,n=e.height;if(t===0||n===0)throw Error(`Canvas dimensions not available`);let r,{preprocessCanvasForOCR:i,dedupeTextData:a}=this.helpers;if(this.useWebWorker&&this.workerReady){i(e,this.preprocessOptions);let a=this.canvasToBase64(e);r=await this.processWithWorker(a,t,n)}else{i(e,this.preprocessOptions);let a=await this.tesseractWorker.recognize(e);r=this.extractTextData(a,t,n)}let o=a(r);return console.log(`📝 OCR detected text with spatial data:`,o.length,`items`),console.log(`📋 OCR Raw Data:`,o.map(e=>({text:e.text,centerX:Math.round(e.centerX),centerY:Math.round(e.centerY),bbox:e.bbox}))),o}catch(e){throw console.error(`OCR canvas processing error:`,e),e}finally{this.isProcessing=!1}}extractTextData(e,t,n){let{cleanOcrText:r}=this.helpers;return e.data.lines.map(e=>{let i=r(e.text);if(!i||i.length<3&&!/^19\d{4}$/.test(i))return null;let a=e.bbox||{x0:0,y0:0,x1:t,y1:n};return{text:i,bbox:a,centerX:(a.x0+a.x1)/2,centerY:(a.y0+a.y1)/2,width:t,height:n,confidence:e.confidence}}).filter(e=>e!==null&&e.text&&e.text.length>0)}getModeInfo(){return{initialized:this.isInitialized,mode:this.useWebWorker?`webworker`:`direct`,workerReady:this.workerReady}}async destroy(){if(this.stopScanning(),this.ocrWorker){try{this.ocrWorker.postMessage({type:`terminate`,id:`terminate`}),this.ocrWorker.terminate()}catch{}this.ocrWorker=null,this.workerReady=!1}this.tesseractWorker&&=(await this.tesseractWorker.terminate(),null),this.canvas=null,this.ctx=null,this.isInitialized=!1,this.pendingRequests.clear(),console.log(`🧹 OCR service destroyed`)}},J=new class{constructor(){this.byOrderCode=new Map,this.byBarcode=new Map,this.byNameExact=new Map,this.byNameWords=new Map,this.catalog=[],this.isBuilt=!1}build(e){if(!e||e.length===0){console.warn(`CatalogIndex: Empty catalog provided`);return}console.log(`🔨 Building catalog index for ${e.length} products...`);let t=performance.now();this.byOrderCode.clear(),this.byBarcode.clear(),this.byNameExact.clear(),this.byNameWords.clear(),this.catalog=e;for(let t of e){let e=(t.OrderCode||``).toString().trim().toUpperCase();e&&this.byOrderCode.set(e,t);let n=(t.BARCODE||t.Barcode||``).toString().trim();n&&this.byBarcode.set(n,t);let r=(t[`Product Name`]||t.productName||``).toUpperCase().trim();if(r){this.byNameExact.set(r,t);let e=this.extractSignificantWords(r);for(let n of e)this.byNameWords.has(n)||this.byNameWords.set(n,new Set),this.byNameWords.get(n).add(t)}}this.isBuilt=!0;let n=(performance.now()-t).toFixed(2);console.log(`✅ Catalog index built in ${n}ms`),console.log(`   - OrderCodes: ${this.byOrderCode.size}`),console.log(`   - Barcodes: ${this.byBarcode.size}`),console.log(`   - Product Names: ${this.byNameExact.size}`),console.log(`   - Word Index: ${this.byNameWords.size} unique words`)}extractSignificantWords(e){return e.replace(/[^\w\s]/g,` `).split(/\s+/).filter(e=>e.length>2).map(e=>e.toUpperCase())}getByOrderCode(e){if(!e)return null;let t=e.toString().trim().toUpperCase();return this.byOrderCode.get(t)||null}getByBarcode(e){if(!e)return null;let t=e.toString().trim();return this.byBarcode.get(t)||null}getByNameExact(e){if(!e)return null;let t=e.toString().toUpperCase().trim();return this.byNameExact.get(t)||null}findByNameWords(e){if(!e)return[];let t=this.extractSignificantWords(e);if(t.length===0)return[];let n=t.map(e=>this.byNameWords.get(e)||new Set);if(n.length===0)return[];let r=new Set(n[0]);for(let e=1;e<n.length;e++)r=new Set([...r].filter(t=>n[e].has(t)));return Array.from(r)}fuzzyMatchOrderCode(e,t=1){if(!e)return null;let n=e.toString().trim().toUpperCase(),r=this.byOrderCode.get(n);if(r)return{product:r,distance:0,confidence:`high`};if(!/^19\d{4}$/.test(n))return null;let i=null,a=t+1;for(let[e,r]of this.byOrderCode){if(e.length!==n.length||!e.startsWith(`19`))continue;let o=this.levenshteinDistance(n,e);o<=t&&o<a&&(a=o,i={product:r,distance:o,confidence:o===0?`high`:`medium`,originalCode:e})}return i}levenshteinDistance(e,t){if(e===t)return 0;if(e.length===0)return t.length;if(t.length===0)return e.length;let n=[];for(let e=0;e<=t.length;e++)n[e]=[e];for(let t=0;t<=e.length;t++)n[0][t]=t;for(let r=1;r<=t.length;r++)for(let i=1;i<=e.length;i++)t.charAt(r-1)===e.charAt(i-1)?n[r][i]=n[r-1][i-1]:n[r][i]=Math.min(n[r-1][i-1]+1,n[r][i-1]+1,n[r-1][i]+1);return n[t.length][e.length]}findSimilarOrderCodes(e,t=3){if(!e)return[];let n=e.toString().trim().toUpperCase(),r=[];for(let[e,t]of this.byOrderCode){if(e.length!==n.length)continue;let i=this.levenshteinDistance(n,e);i<=2&&r.push({code:e,product:t,distance:i})}return r.sort((e,t)=>e.distance-t.distance).slice(0,t)}fuzzyMatchProductName(e,t=1){if(!e||e.length<5)return[];let n=e.toUpperCase().trim(),r=[],i=[],a=n.match(/([A-Z]{4,})\s*(\d{3,4})/g);if(a&&a.forEach(e=>{let t=e.match(/([A-Z]{4,})\s*(\d{3,4})/);t&&i.push({name:t[1],number:t[2],full:`${t[1]} ${t[2]}`})}),i.length===0)return[];let o=new Map;for(let e of this.catalog){let t=(e[`Product Name`]||e.productName||``).toUpperCase().trim();if(!t)continue;let n=t.match(/^([A-Z]+)\s+(\d{3,4})/);if(n){let t=`${n[1]} ${n[2]}`;o.has(t)||o.set(t,[]),o.get(t).push(e)}}for(let e of i)for(let[n,i]of o){let a=n.split(/\s+/),o=a[0],s=a[1];if(e.number!==s)continue;let c=this.levenshteinDistance(e.name,o);c<=t&&i.forEach(t=>{let i=r.find(e=>e.product.OrderCode===t.OrderCode);(!i||i.distance>c)&&(i&&r.splice(r.indexOf(i),1),r.push({product:t,distance:c,matchedFamily:n,ocrText:e.full,confidence:c===0?`high`:`medium`}))})}return console.log(`🔍 Fuzzy name matching: "${e}" → found ${r.length} products`),r}getCatalog(){return this.catalog}isReady(){return this.isBuilt&&this.catalog.length>0}},Y=null,Pt=null,Ft=class{static ensureIndexBuilt(e){(!J.isReady()||J.getCatalog()!==e)&&J.build(e),(!Y||Pt!==e)&&(Y=new Ye,Y.buildIndex(e),Pt=e)}static findProductsByOcrTexts(e,t){if(console.log(`🔍 findProductsByOcrTexts called with`,e.length,`items`),console.log(`🔍 First item type:`,e.length>0?typeof e[0]:`empty`),console.log(`🔍 First item sample:`,e.length>0?typeof e[0]==`string`?e[0].substring(0,50):JSON.stringify(e[0]).substring(0,100):`N/A`),this.ensureIndexBuilt(t),e.length>0&&typeof e[0]==`string`){console.log(`⚠️  Using legacy format (array of strings)`);let n=e;return this.findProductsByOcrTextsLegacy(n,t)}console.log(`✅ Using new format (array of objects with spatial data)`),e.map(e=>e.text);let n=e[0]?.width||640,r=e[0]?.height||480,i=n*.2,a=n*.8,o=r*.2,s=r*.8,c=[];for(let t=0;t<e.length;t++){let n=e[t],r=n.text;console.log(`🔎 Processing OCR text [${t+1}/${e.length}]: "${r}"`);let l=r.trim().toUpperCase();l=l.replace(/\s+/g,` `).trim();let u=n.centerX>=i&&n.centerX<=a&&n.centerY>=o&&n.centerY<=s?1:.3,d=l.replace(/\s/g,``).match(/\d{6}/g)||[],f=l.match(/\d[\d\s]{5,8}\d/g);if(f)for(let e of f){let t=e.replace(/\s/g,``);/^\d{6}$/.test(t)&&!d.includes(t)&&d.push(t)}let p=!1;for(let e of d){let t=J.getByOrderCode(e);if(t||=Y.findByCode(e),t){console.log(`✅ OrderCode match: "${r}" → ${t.OrderCode} (${(t[`Product Name`]||t.Description||``).substring(0,40)})`),c.push({text:r,type:`OrderCode`,confidence:`high`,product:t,centerX:n.centerX,centerY:n.centerY,centerScore:u}),p=!0;break}if(/^19\d{4}$/.test(e)){let t=J.fuzzyMatchOrderCode(e,1);if(t){console.log(`✅ Fuzzy OrderCode match: "${r}" → ${t.product.OrderCode} (distance: ${t.distance})`),c.push({text:r,type:`OrderCode`,confidence:t.distance===0?`high`:`medium`,product:t.product,centerX:n.centerX,centerY:n.centerY,centerScore:u,fuzzyMatch:t.distance>0}),p=!0;break}}console.log(`❌ Code "${e}" from "${r}" not found in catalog`)}if(p)continue;let m=l.replace(/[^\w\s]/g,``).trim();if(m.length<5){console.log(`⏭️  Skipping product name match for short text: "${r}"`),console.log(`❌ No match for: "${r}"`);continue}if(!/^[A-Z]{4,}(\s+[A-Z]+)?(\s+\d{2,4})?$/.test(m)){console.log(`⏭️  Skipping - doesn't look like a product name: "${r}"`);continue}let h=Y.search(m,5,{fuzzy:!0});if(h.length>0){console.log(`📝 Fuse.js fuzzy match: "${r}" → ${h.length} products`),h.forEach(e=>{c.push({text:r,type:`ProductName`,confidence:`medium`,product:e,centerX:n.centerX,centerY:n.centerY,centerScore:u,fuzzyMatch:!0})});continue}console.log(`❌ No match for: "${r}"`)}let l=[],u=new Set;for(let e of c){let t=(e.product.OrderCode||``).toString().trim();t&&!u.has(t)&&(u.add(t),l.push(e))}console.log(`🔍 Total unique matches found:`,l.length),console.log(`📦 Matched Products:`,l.map(e=>({orderCode:e.product.OrderCode,name:(e.product[`Product Name`]||e.product.Description||``).substring(0,50),type:e.type,confidence:e.confidence,centerScore:e.centerScore})));let d=l.filter(e=>e.type===`OrderCode`&&e.confidence===`high`),f=new Set(d.map(e=>e.product.OrderCode));if(f.size>1)return console.log(`✅ Multiple distinct OrderCodes detected:`,Array.from(f)),console.log(`📋 Showing all OrderCode matches (`,d.length,`products)`),d.sort((e,t)=>t.centerScore-e.centerScore);let p=this.groupByProductFamily(l);if(console.log(`👥 Product Families Detected:`,p.map(e=>({familyName:e.familyName,matchCount:e.matches.length,orderCodes:e.matches.map(e=>e.product.OrderCode).slice(0,5)}))),p.length===1)return console.log(`✅ Single product family detected:`,p[0].familyName),p[0].matches;let m=p.map(e=>{let t=e.matches.filter(e=>e.centerScore>=.7),n=t.length/Math.max(e.matches.length,1),r=e.matches.length/l.length,i=n*.7+r*.3;return console.log(`📊 Family "${e.familyName}":`,{totalMatches:e.matches.length,centerMatches:t.length,centerScore:n.toFixed(2),frequencyScore:r.toFixed(2),totalScore:i.toFixed(2)}),{...e,centerScore:n,frequencyScore:r,totalScore:i}});return m.sort((e,t)=>t.totalScore-e.totalScore),m.length>1&&m[0].totalScore>.7?(console.log(`🎯 Auto-selecting dominant product family:`,m[0].familyName,`with score:`,m[0].totalScore.toFixed(2)),m[0].matches):(console.log(`🔀 Multiple product families detected:`,m.map(e=>`${e.familyName} (${e.matches.length} products, score: ${e.totalScore.toFixed(2)})`)),console.log(`📋 Families array:`,m),{families:m,requiresSelection:!0})}static groupByProductFamily(e){let t=new Map;for(let n of e){let e=n.product,r=(e[`Product Name`]||e.productName||e.Description||``).toUpperCase().trim(),i=r.match(/^([A-Z]+(?:\s+[A-Z]+)?)\s*(\d+)/),a=r;if(i)a=`${i[1]} ${i[2]}`.trim();else{let e=r.split(/\s+/).filter(e=>e.length>2);e.length>=2?a=`${e[0]} ${e[1]}`:e.length===1&&(a=e[0])}console.log(`🏷️  Product "${r.substring(0,40)}..." → Family: "${a}" (OrderCode: ${e.OrderCode})`),t.has(a)||t.set(a,[]),t.get(a).push(n)}let n=Array.from(t.entries()).map(([e,t])=>({familyName:e,matches:t.sort((e,t)=>{let n={high:3,medium:2,low:1};return n[t.confidence]===n[e.confidence]?t.centerScore-e.centerScore:n[t.confidence]-n[e.confidence]})}));return console.log(`👨‍👩‍👧‍👦 Grouped into`,n.length,`families:`,n.map(e=>`${e.familyName} (${e.matches.length})`)),n}static findProductsByOcrTextsLegacy(e,t){this.ensureIndexBuilt(t);let n=[];for(let t of e){let e=t.trim().toUpperCase();e=e.replace(/\s+/g,` `).trim();let r=e.replace(/\s/g,``).match(/\d{6}/g)||[],i=e.match(/\d[\d\s]{5,8}\d/g);if(i)for(let e of i){let t=e.replace(/\s/g,``);/^\d{6}$/.test(t)&&!r.includes(t)&&r.push(t)}let a=!1;for(let e of r){let r=J.getByOrderCode(e);if(r||=Y.findByCode(e),r){n.push({text:t,type:`OrderCode`,confidence:`high`,product:r}),a=!0;break}if(/^19\d{4}$/.test(e)){let r=J.fuzzyMatchOrderCode(e,1);if(r){n.push({text:t,type:`OrderCode`,confidence:`medium`,product:r.product,fuzzyMatch:!0}),a=!0;break}}}if(a)continue;let o=e.replace(/[^\w\s]/g,``).trim();if(o.length<5||!/^[A-Z]{4,}(\s+[A-Z]+)?(\s+\d{2,4})?$/.test(o))continue;let s=Y.search(o,5,{fuzzy:!0});if(s.length>0){s.forEach(e=>{n.push({text:t,type:`ProductName`,confidence:`medium`,product:e,fuzzyMatch:!0})});continue}}let r=[],i=new Set;for(let e of n){let t=(e.product.OrderCode||``).toString().trim();t&&!i.has(t)&&(i.add(t),r.push(e))}return r.sort((e,t)=>{let n={high:3,medium:2,low:1};return n[t.confidence]-n[e.confidence]}),r}},X=class{static getCustomRooms(){return a.getStorageItem(r.STORAGE_KEYS.CUSTOM_ROOMS,[])}static setCustomRooms(e){return a.setStorageItem(r.STORAGE_KEYS.CUSTOM_ROOMS,e)}static addCustomRoom(e){let t=this.getCustomRooms(),n=a.sanitizeInput(e,50);return!n||[...r.ROOMS.PREDEFINED.map(e=>e.name),...t.map(e=>e.name)].includes(n)?!1:(t.push({name:n}),this.setCustomRooms(t))}static removeCustomRoom(e){let t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return a.getStorageItem(r.STORAGE_KEYS.SELECTED_PRODUCTS,[])}static setSelectedProducts(e){return a.setStorageItem(r.STORAGE_KEYS.SELECTED_PRODUCTS,e)}static addProductToSelection(e,{notes:t=``,room:n=``,quantity:i=1}={}){let o=this.getSelectedProducts(),s={id:a.generateId(),product:a.deepClone(e),notes:a.sanitizeInput(t,r.UI.ANNOTATION_MAX_LENGTH),room:a.sanitizeInput(n,50),quantity:Math.max(1,Math.min(999,parseInt(i)||1)),timestamp:Date.now()};return o.push(s),this.setSelectedProducts(o)?s.id:!1}static updateProductQuantity(e,t){let n=this.getSelectedProducts(),r=n.findIndex(t=>t.id===e);return r===-1?!1:(n[r].quantity=Math.max(1,Math.min(999,parseInt(t)||1)),this.setSelectedProducts(n))}static updateProductDetails(e,t={}){let n=this.getSelectedProducts(),i=n.findIndex(t=>t.id===e);if(i===-1)return!1;let o={...n[i],...t};return t.notes!==void 0&&(o.notes=a.sanitizeInput(t.notes,r.UI.ANNOTATION_MAX_LENGTH)),t.room!==void 0&&(o.room=a.sanitizeInput(t.room,50)),t.quantity!==void 0&&(o.quantity=Math.max(1,Math.min(999,parseInt(t.quantity)||1))),t.product&&(o.product=a.deepClone(t.product)),n[i]=o,this.setSelectedProducts(n)}static removeProductFromSelection(e){let t=this.getSelectedProducts().filter(t=>t.id!==e);return this.setSelectedProducts(t)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getStaffContactDetails(){try{let e=localStorage.getItem(r.STORAGE_KEYS.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.error(`Error getting staff contact details:`,e),null}}static setStaffContactDetails(e){try{return localStorage.setItem(r.STORAGE_KEYS.STAFF_CONTACT,JSON.stringify(e)),!0}catch(e){return console.error(`Error saving staff contact details:`,e),!1}}static clearStaffContactDetails(){try{return localStorage.removeItem(r.STORAGE_KEYS.STAFF_CONTACT),!0}catch(e){return console.error(`Error clearing staff contact details:`,e),!1}}},It=class{constructor(){this.isScanning=!1,this.scannerEngine=`detector`,this.onScanCallback=null,this.lastScannedCode=null,this.scanTimeout=null,this.videoElement=null,this.barcodeDetector=null,this.streamRef=null,this.scanningRef=!1,this.detectorReady=!1}async initialize(){try{if(`BarcodeDetector`in window)console.log(`Using native Barcode Detection API`);else{console.log(`Using WebAssembly polyfill for iOS/Safari`);let e=0;for(;!window.polyfillReady&&e<50;)await new Promise(e=>setTimeout(e,100)),e++;if(window.barcodeDetectorPolyfill&&window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill)window.BarcodeDetector=window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill,console.log(`✅ Polyfill assigned to window.BarcodeDetector`);else throw console.error(`Polyfill not available after waiting. polyfillReady:`,window.polyfillReady),console.error(`Available barcode keys:`,Object.keys(window).filter(e=>e.toLowerCase().includes(`barcode`))),Error(`BarcodeDetector polyfill not loaded`)}this.barcodeDetector=new window.BarcodeDetector({formats:[`ean_13`]}),this.detectorReady=!0,console.log(`✅ Scanner initialized successfully`)}catch(e){throw console.error(`Error initializing barcode detector:`,e),this.detectorReady=!1,e}}setOnScanCallback(e){this.onScanCallback=e}async startScanning(e=`barcode`){if(!(this.isScanning&&e===`barcode`)){if(!document.getElementById(`scanner-viewport`)){console.error(`Scanner viewport not found`);return}try{if(this.isScanning&&this.streamRef&&(this.streamRef.getTracks().forEach(e=>e.stop()),this.streamRef=null,this.videoElement=null),e===`barcode`&&!this.detectorReady&&(console.log(`Initializing scanner...`),await this.initialize()),e===`barcode`&&!this.detectorReady){console.error(`Scanner not ready after initialization`),this.showCameraError();return}this.isScanning=!0,this.scanningRef=e===`barcode`,this.lastScannedCode=null,await this.startDetectorScanning(e)}catch(e){console.error(`Failed to start scanner:`,e),console.error(`Error details:`,e.name,e.message),this.showCameraError(),this.isScanning=!1,this.scanningRef=!1}}}async startDetectorScanning(e=`barcode`){let t=document.getElementById(`scanner-viewport`);this.videoElement=document.createElement(`video`),this.videoElement.style.width=`100%`,this.videoElement.style.height=`100%`,this.videoElement.style.objectFit=`cover`,t.innerHTML=``,t.appendChild(this.videoElement);try{let t={facingMode:`environment`};e===`text`?(t.width={ideal:1920,min:1280},t.height={ideal:1080,min:720},t.focusMode=`continuous`,t.advanced=[{focusMode:`continuous`},{exposureMode:`continuous`}]):(t.width={ideal:1280},t.height={ideal:720});let n=await navigator.mediaDevices.getUserMedia({video:t});this.streamRef=n,this.videoElement.srcObject=n,this.videoElement.setAttribute(`playsinline`,`true`),await this.videoElement.play(),e===`text`?console.log(`📷 Camera started in text capture mode (higher resolution)`):this.scanBarcodes()}catch(t){if(console.error(`Error starting scanner:`,t),e===`text`)try{let e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1920},height:{ideal:1080}}});this.streamRef=e,this.videoElement.srcObject=e,await this.videoElement.play(),console.log(`📷 Camera started with fallback settings`)}catch{this.showCameraError(`Camera access denied or unavailable`),this.isScanning=!1}else this.showCameraError(`Camera access denied or unavailable`),this.isScanning=!1}}async scanBarcodes(){if(!(!this.scanningRef||!this.videoElement)){if(this.videoElement.readyState<2){this.scanningRef&&setTimeout(()=>this.scanBarcodes(),200);return}try{let e=await this.barcodeDetector.detect(this.videoElement);if(e&&e.length>0){let t=e[0];if(t.format===`ean_13`){let e=t.rawValue;this.stopScanning(),navigator.vibrate&&navigator.vibrate(200),this.onScanCallback&&this.onScanCallback(e,null);return}}this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}catch(e){console.error(`Detection error:`,e),this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}}}stopScanning(){this.isScanning&&(this.isScanning=!1,this.scanningRef=!1,this.streamRef&&=(this.streamRef.getTracks().forEach(e=>e.stop()),null),this.videoElement&&=(this.videoElement.srcObject&&(this.videoElement.srcObject=null),null),this.scanTimeout&&=(clearTimeout(this.scanTimeout),null))}isValidBarcode(e){return/^\d{8}$|^\d{12,13}$/.test(e)}provideHapticFeedback(){navigator.vibrate&&navigator.vibrate(50)}showCameraError(){let e=document.getElementById(`scanner-viewport`);e&&(e.innerHTML=`
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; text-align: center; padding: 20px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
          <h3>Camera Access Required</h3>
          <p>Please allow camera access to scan barcodes, or use manual entry below.</p>
          <button onclick="window.scannerController.startScanning()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer;">Try Again</button>
        </div>
      `)}setManualBarcode(e){e&&this.isValidBarcode(e)&&(this.lastScannedCode=e,this.stopScanning(),this.provideHapticFeedback(),this.onScanCallback&&this.onScanCallback(e,null))}setScannerEngine(e){console.log(`setScannerEngine is deprecated - using BarcodeDetector automatically`)}getScannerInfo(){return{engine:this.scannerEngine,isNative:`BarcodeDetector`in window&&!window.barcodeDetectorPolyfill,hasNativeSupport:`BarcodeDetector`in window,detectorReady:this.detectorReady}}playScanSound(){try{let e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.frequency.value=800,t.type=`sine`,n.gain.setValueAtTime(.1,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),t.start(e.currentTime),t.stop(e.currentTime+.1)}catch{}}destroy(){this.stopScanning()}},Lt=class{constructor(){this.currentScreen=`welcome`,this.selectedRoom=null,this.scannerController=new It,this.dataService=W,this.reviewSortables=[],this.currentEditSelectionId=null,this.setupScannerCallback()}setupScannerCallback(){this.scannerController.setOnScanCallback(e=>{if(!this.dataService.isLoaded){this.showScanFeedback(`Product data loading, please wait...`);return}this.showScanFeedback(`Detected: ${e}`);let t=this.dataService.findProductByBarcode(e);t?this.showProductDetailsScreen(t,{scannedCode:e}):(this.showScanFeedback(`Barcode not found: ${e}`),setTimeout(()=>{this.scannerController&&this.scannerController.startScanning()},1500))})}async init(){try{await this.dataService.init()}catch(e){console.error(`Failed to load product catalog:`,e)}this.setupWelcomeScreen(),this.updateSelectionCount(),setTimeout(()=>{console.log(`🚀 Initializing scanner...`),this.scannerController.initialize().then(()=>{console.log(`✅ Scanner pre-initialized and ready`)}).catch(e=>{console.error(`❌ Scanner pre-initialization failed:`,e)})},100)}setupWelcomeScreen(){let e=document.getElementById(`start-btn`),t=document.getElementById(`view-selection-btn`),n=document.getElementById(`clear-selection-btn`),i=document.getElementById(`settings-btn`);e&&(e.onclick=()=>this.showRoomSelection()),t&&(t.onclick=()=>this.showReviewScreen()),n&&(n.onclick=()=>this.showClearConfirmModal()),i&&(i.onclick=()=>this.showSeimaContactModal()),this.setupSeimaContactModal();let a=document.getElementById(`version-number`);a&&(a.textContent=r.VERSION)}async showRoomSelection(){try{let e=await(await fetch(`screens/room-selection.html`)).text();document.body.innerHTML=e,this.currentScreen=`room-selection`,this.renderRoomGrid();let t=document.getElementById(`back-to-welcome`),n=document.getElementById(`add-custom-room`);t&&(t.onclick=()=>location.reload()),n&&(n.onclick=()=>this.handleAddCustomRoom())}catch(e){console.error(`Failed to load room selection screen:`,e)}}renderRoomGrid(){let e=document.getElementById(`room-grid`);e&&(e.innerHTML=``,r.ROOMS.PREDEFINED.forEach(t=>{let n=document.createElement(`button`);n.className=`room-btn`,n.innerHTML=`<span class="room-icon">${a.escapeHtml(t.icon)}</span>${a.escapeHtml(t.name)}`,n.onclick=()=>this.selectRoom(t.name),e.appendChild(n)}),X.getCustomRooms().forEach((t,n)=>{let r=document.createElement(`button`);r.className=`room-btn`,r.innerHTML=`<span class="room-icon">📝</span>${a.escapeHtml(t.name)}`,r.onclick=()=>this.selectRoom(t.name),r.ondblclick=()=>this.handleRemoveCustomRoom(n),r.title=`Double-click to remove`,e.appendChild(r)}))}selectRoom(e){this.selectedRoom=e,this.showScannerScreen()}async showScannerScreen(){if(this._loadingScannerScreen){console.log(`Scanner screen already loading`);return}this._loadingScannerScreen=!0;let e=null;try{this.scannerController.stopScanning(),console.log(`🎥 Requesting camera permission...`);try{if(navigator.permissions&&navigator.permissions.query)try{let t=await navigator.permissions.query({name:`camera`});console.log(`Camera permission status:`,t.state),t.state===`granted`?console.log(`✅ Camera permission already granted, skipping temp stream`):(e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1280},height:{ideal:720}}}),console.log(`✅ Camera permission granted`),e&&=(e.getTracks().forEach(e=>{e.stop()}),null))}catch{console.log(`Permissions API query failed, requesting stream directly`),e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1280},height:{ideal:720}}}),console.log(`✅ Camera permission granted`),e&&=(e.getTracks().forEach(e=>{e.stop()}),null)}else e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1280},height:{ideal:720}}}),console.log(`✅ Camera permission granted`),e&&=(e.getTracks().forEach(e=>{e.stop()}),null)}catch(e){console.error(`❌ Camera permission denied:`,e),this._loadingScannerScreen=!1;let t=`Camera access denied or unavailable.`;e.name===`NotAllowedError`?t=`Camera access denied. Please enable camera permissions in your browser settings.`:e.name===`NotFoundError`?t=`No camera found on this device.`:e.name===`NotReadableError`&&(t=`Camera is already in use by another application.`),alert(t);return}let t=await(await fetch(`screens/scanner.html`)).text();document.body.innerHTML=t,this.currentScreen=`scanner`;let n=document.getElementById(`current-room-badge`);n&&(n.textContent=this.selectedRoom),this.setupScannerScreenHandlers(),this.showBarcodeScanOverlay(),this.scannerController.startScanning().catch(e=>{console.error(`Failed to start scanner:`,e)}),this.updateSelectionCount()}catch(e){console.error(`Failed to load scanner screen:`,e),alert(`Failed to load scanner. Please try again.`)}finally{e&&e.getTracks().forEach(e=>e.stop()),this._loadingScannerScreen=!1}}setupScannerScreenHandlers(){let e=document.getElementById(`back-to-rooms`),t=document.getElementById(`review-btn`),n=document.getElementById(`text-scan-btn`),r=document.getElementById(`scanner-engine-toggle`);e&&(e.onclick=()=>{this.scannerController.stopScanning(),q.stopScanning(),this.showRoomSelection()}),t&&(t.onclick=()=>{this.scannerController.stopScanning(),q.stopScanning(),this.showReviewScreen()}),n&&(n.onclick=()=>this.startTextScanMode()),r&&(r.value=this.scannerController.scannerEngine,r.onchange=()=>{this.scannerController.setScannerEngine(r.value),this.scannerController.stopScanning(),setTimeout(()=>{this.currentScreen===`scanner`&&this.scannerController.startScanning()},100)}),this.setupProductSearch()}setupProductSearch(){let e=document.getElementById(`product-search-input`),t=document.getElementById(`product-search-dropdown`);if(!e||!t)return;let n=[],r=a.debounce(e=>{this.performProductSearch(e,t,n)},300);e.addEventListener(`focus`,()=>{this.scannerController.stopScanning(),setTimeout(()=>{e.scrollIntoView({behavior:`smooth`,block:`center`})},100)}),e.addEventListener(`blur`,()=>{setTimeout(()=>{this.currentScreen===`scanner`&&this.scannerController.startScanning()},100)}),e.addEventListener(`input`,()=>{let n=e.value.trim();n?r(n):(t.innerHTML=``,t.classList.remove(`visible`))}),t.onclick=r=>{let i=r.target.closest(`li[data-idx]`);if(!i)return;let a=parseInt(i.getAttribute(`data-idx`),10);!isNaN(a)&&n[a]&&this.showProductDetailsScreen(n[a]),t.classList.remove(`visible`),e.value=``,setTimeout(()=>{this.currentScreen===`scanner`&&this.scannerController.startScanning()},100)},document.addEventListener(`click`,n=>{!t.contains(n.target)&&n.target!==e&&t.classList.remove(`visible`)})}performProductSearch(e,t,n){if(!this.dataService.isLoaded){t.innerHTML=`<li>Loading catalog...</li>`,t.classList.add(`visible`);return}n.length=0,n.push(...this.dataService.searchProducts(e)),n.length===0?t.innerHTML=`<li>No products found</li>`:t.innerHTML=n.map((e,t)=>`<li data-idx="${t}">${this.escapeHtml(String(e.OrderCode||``))} - ${this.escapeHtml(String(e.Description||``))}</li>`).join(``),t.classList.add(`visible`)}async showProductDetailsScreen(e,t={}){try{let n=await(await fetch(`screens/product-details.html`)).text();document.body.innerHTML=n,this.currentScreen=`product-details`,this.currentEditSelectionId=t.mode===`edit`&&t.selectionId||null,this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e,t)}catch(e){console.error(`Failed to load product details screen:`,e)}}populateProductDetails(e,t){let n=document.getElementById(`product-image`);n&&(n.src=e.Image_URL||`assets/no-image.png`,n.onerror=function(){this.src=`assets/no-image.png`}),document.getElementById(`product-name`).textContent=e.Description||``,document.getElementById(`product-code`).textContent=e.OrderCode?`Code: `+e.OrderCode:``;let r=``,i=NaN;if(e.RRP_INCGST&&(i=parseFloat(e.RRP_INCGST.toString().replace(/,/g,``))),r=!isNaN(i)&&i>0?`$${i.toFixed(2)} inc GST`:`Price unavailable`,document.getElementById(`product-price-inline`).textContent=r,document.getElementById(`product-description`).textContent=e.LongDescription||``,this.setLink(`datasheet-link`,e.Datasheet_URL),this.setLink(`diagram-link`,e.Diagram_URL),this.setLink(`website-link`,e.Website_URL),[document.getElementById(`diagram-link`),document.getElementById(`datasheet-link`),document.getElementById(`website-link`)].forEach(e=>{e&&(e.setAttribute(`target`,`_blank`),e.setAttribute(`rel`,`noopener noreferrer`))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantityInput(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.room){let e=document.getElementById(`room-select`);if(e){if(!Array.from(e.options).some(e=>e.value===t.room)){let n=document.createElement(`option`);n.value=t.room,n.textContent=t.room,e.appendChild(n)}e.value=t.room}}if(t.quantity){let e=document.getElementById(`product-quantity`);e&&(e.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}async restartTextCamera(e=`Ready to capture`){try{await this.scannerController.startScanning(`text`),e&&this.showScanFeedback(e)}catch(e){console.error(`Failed to restart camera:`,e),this.showScanFeedback(`Camera error - please try again`)}}populateRoomSelect(){let e=document.getElementById(`room-select`);if(!e)return;e.innerHTML=``,r.ROOMS.PREDEFINED.forEach(t=>{let n=document.createElement(`option`);n.value=t.name,n.textContent=t.name,t.name===this.selectedRoom&&(n.selected=!0),e.appendChild(n)}),X.getCustomRooms().forEach(t=>{let n=document.createElement(`option`);n.value=t.name,n.textContent=t.name,t.name===this.selectedRoom&&(n.selected=!0),e.appendChild(n)});let t=document.createElement(`option`);t.value=`__add_new_room__`,t.textContent=`+ Add New Room / Group...`,t.style.fontStyle=`italic`,e.appendChild(t),e.removeEventListener(`change`,this._roomSelectHandler),this._roomSelectHandler=e=>this.handleRoomSelectChange(e),e.addEventListener(`change`,this._roomSelectHandler)}handleRoomSelectChange(e){let t=e.target;t.value===`__add_new_room__`&&(t.selectedIndex=0,this.showAddRoomModal(e=>{let n=e.trim();if(Array.from(t.options).map(e=>e.value.toLowerCase()).includes(n.toLowerCase())){alert(`This room already exists.`);let e=Array.from(t.options).find(e=>e.value.toLowerCase()===n.toLowerCase());e&&(t.value=e.value);return}X.addCustomRoom(n);let r=document.createElement(`option`);r.value=n,r.textContent=n,t.insertBefore(r,t.options[t.options.length-1]),t.value=n,this.selectedRoom=n}))}setupQuantityInput(){let e=document.getElementById(`product-quantity`);e&&(e.addEventListener(`blur`,()=>{let t=parseInt(e.value,10);(isNaN(t)||t<1)&&(t=1),t>999&&(t=999),e.value=t}),e.addEventListener(`focus`,()=>{e.select()}))}setLink(e,t){let n=document.getElementById(e);t&&t!==`#`?(n.href=t,n.style.display=``):n.style.display=`none`}setupVariantDropdown(e,t){let n=document.getElementById(`variant-select-row`),r=document.getElementById(`variant-select`);if(n&&r){let i=e.ProductName||e[`Product Name`]||``;typeof i==`string`&&(i=i.trim());let a=[];i&&(a=this.dataService.getAllProducts().filter(e=>{let t=e.ProductName||e[`Product Name`]||``;return typeof t==`string`&&(t=t.trim()),t&&t===i})),a.length>1?(a.sort((e,t)=>(e.Description||``).localeCompare(t.Description||``)),n.style.display=``,r.innerHTML=a.map(t=>`<option value="${this.escapeHtml(String(t.OrderCode||``))}"${t.OrderCode===e.OrderCode?` selected`:``}>${this.escapeHtml(String(t.Description||``))}</option>`).join(``),r.onchange=()=>{let n=r.value,i=a.find(e=>e.OrderCode===n);if(i&&i.OrderCode!==e.OrderCode){let e=document.getElementById(`product-annotation`)?.value||t.notes||``,n=document.getElementById(`product-quantity`),r=1;n&&n.value?r=Math.max(1,parseInt(n.value,10)||1):t.quantity&&(r=t.quantity);let a=document.getElementById(`room-select`),o=a?a.value:t.room;this.showProductDetailsScreen(i,{...t,notes:e,quantity:r,room:o})}}):n.style.display=`none`}}setupAnnotationCharacterCount(e){let t=document.getElementById(`product-annotation`),n=document.getElementById(`annotation-char-count`);t&&n&&(t.addEventListener(`input`,function(){t.value=t.value.replace(/\r?\n|\r/g,` `),n.textContent=t.value.length+`/140`}),t.addEventListener(`keydown`,function(e){e.key===`Enter`&&e.preventDefault()}),n.textContent=t.value.length+`/140`,e.notes&&(t.value=e.notes,n.textContent=t.value.length+`/140`))}setupAnnotationField(){}setupProductDetailsHandlers(e,t={}){let n=document.getElementById(`back-to-scanner`),r=document.getElementById(`add-to-room-btn`),i=document.getElementById(`delete-selection-btn`);n&&(n.onclick=()=>{t.mode===`edit`?this.showReviewScreen():this.showScannerScreen()}),r&&(t.mode===`edit`&&t.selectionId?(r.textContent=`Save`,r.onclick=()=>this.saveEditedProduct(e,t)):(r.textContent=`Add to Group`,r.onclick=()=>this.addProductToSelection(e))),i&&(t.mode===`edit`&&t.selectionId?(i.style.display=`block`,i.onclick=()=>this.showDeleteModal(e,t)):(i.style.display=`none`,i.onclick=null))}saveEditedProduct(e,t){if(!t.selectionId)return;let n=document.getElementById(`room-select`),r=document.getElementById(`product-quantity`),i=document.getElementById(`product-annotation`),o=n?n.value:``,s=r?Math.max(1,parseInt(r.value,10)||1):1,c=i?i.value:``;if(!X.updateProductDetails(t.selectionId,{product:a.deepClone(e),room:o,quantity:s,notes:c})){alert(`Unable to save changes. Please try again.`);return}this.currentEditSelectionId=null,this.showReviewScreen()}showDeleteModal(e,t){let n=document.getElementById(`delete-confirm-modal`);if(!n||!t.selectionId)return;let r=document.getElementById(`delete-confirm-message`);r&&(r.textContent=`Confirm delete`);let i=document.getElementById(`delete-cancel-btn`),a=document.getElementById(`delete-confirm-btn`);i&&(i.onclick=()=>{n.style.display=`none`}),a&&(a.onclick=()=>{let e=X.removeProductFromSelection(t.selectionId);if(n.style.display=`none`,!e){alert(`Unable to remove this product. Please try again.`);return}this.currentEditSelectionId=null,this.showReviewScreen()}),n.onclick=e=>{e.target===n&&(n.style.display=`none`)},n.style.display=`flex`}escapeHtml(e){return typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}addProductToSelection(e){let t=document.getElementById(`room-select`),n=document.getElementById(`product-quantity`),r=document.getElementById(`product-annotation`),i=t?t.value:this.selectedRoom,a=n?parseInt(n.value):1,o=r?r.value:``;X.addProductToSelection(e,{notes:o,room:i,quantity:a})?this.showReviewScreen():alert(`Failed to add product to selection`)}async showReviewScreen(){try{let e=await(await fetch(`screens/review.html`)).text();document.body.innerHTML=e,this.currentScreen=`review`,this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error(`Failed to load review screen:`,e)}}setupReviewScreenHandlers(){let e=document.getElementById(`back-to-scanner`),t=document.getElementById(`add-more-btn`),n=document.getElementById(`quick-pdf-btn`);e&&(e.onclick=()=>this.showScannerScreen()),t&&(t.onclick=()=>this.showScannerScreen()),n&&(console.log(`📧 Email button available - lead wizard integration will handle it`),window.leadWizardIntegration||(console.log(`⚠️ Lead wizard integration not available, using fallback`),n.onclick=()=>this.showPdfFormModal()))}renderReviewList(){let e=document.getElementById(`review-list`),t=document.getElementById(`review-empty`);if(!e)return;let n=X.getSelectedProducts();if(n.length===0){e.innerHTML=``,t&&(t.style.display=`block`),this.destroyReviewSortables();return}t&&(t.style.display=`none`);let r=this.groupProductsByRoom(n),i=e=>{let t=String(e||``).trim();return/^(https?:|data:image\/|assets\/)/i.test(t)?this.escapeHtml(t):`assets/no-image.png`};e.innerHTML=Object.entries(r).map(([e,t])=>{let n=this.escapeHtml(String(e));return`
      <div class="review-room-group" data-room="${n}">
        <div class="review-room-header">${n} <span class="room-count">(${t.length})</span></div>
        <div class="review-room-items" data-room="${n}">
        ${t.map(e=>{let t=e.product,r=t.Description||t.description||t.productName||t[`Product Name`]||`Product`,a=t.OrderCode||t.orderCode||``,o=i(t.Image_URL||t.imageUrl||`assets/no-image.png`),s=t.RRP_INCGST||t.rrpIncGst||t.price||``,c=e.quantity||1,l=s?parseFloat(s.toString().replace(/[^0-9.-]/g,``)):NaN,u=isNaN(l)?``:`$${l.toFixed(2)} ea`,d=e.notes?`Notes: ${e.notes}`:``,f=this.escapeHtml(r),p=this.escapeHtml(a),m=d?this.escapeHtml(d):``,h=a?`Code: ${p}`:`Code: —`,g=`Qty: ${c}`,_=u||`—`;return`
          <div class="review-product-card" data-id="${this.escapeHtml(String(e.id||``))}" data-room="${n}" aria-label="Selected product card">
            <div class="review-drag-handle" aria-label="Drag to reorder">
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
            </div>
            <div class="review-card-content" data-id="${e.id}">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${o}" alt="Product" onerror="this.src='assets/no-image.png';">
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${f}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${h}</span>
                  <span class="review-product-qty">${g}</span>
                  <span class="review-product-price">${_}</span>
                </div>
                ${m?`<div class="review-product-notes">${m}</div>`:``}
              </div>
            </div>
          </div>
          `}).join(``)}
        </div>
      </div>
    `}).join(``),this.setupReviewInteractions()}groupProductsByRoom(e){return e.reduce((e,t)=>{let n=t.room||`Unassigned`;return e[n]||(e[n]=[]),e[n].push(t),e},{})}setupReviewInteractions(){this.setupReviewCardTaps(),this.setupDragAndDrop(),this.updateRoomEmptyStates()}destroyReviewSortables(){this.reviewSortables&&this.reviewSortables.length&&this.reviewSortables.forEach(e=>e.destroy()),this.reviewSortables=[]}setupDragAndDrop(){let e=Array.from(document.querySelectorAll(`.review-room-items`));if(!e.length){this.destroyReviewSortables();return}this.destroyReviewSortables(),this.reviewSortables=e.map(e=>new n(e,{group:{name:`review-rooms`,pull:!0,put:!0},animation:160,draggable:`.review-product-card`,handle:`.review-drag-handle`,delay:0,delayOnTouchOnly:!1,touchStartThreshold:3,fallbackTolerance:5,fallbackOnBody:!0,ghostClass:`review-card-ghost`,chosenClass:`review-card-chosen`,dragClass:`review-card-dragging`,onEnd:()=>this.persistReorderedProducts()}))}persistReorderedProducts(){let e=X.getSelectedProducts();if(!e.length)return;let t=new Map(e.map(e=>[e.id,e])),n=[];if(document.querySelectorAll(`.review-room-group`).forEach(e=>{let r=e.getAttribute(`data-room`)||`Unassigned`;e.querySelectorAll(`.review-product-card`).forEach(e=>{let i=e.getAttribute(`data-id`),a=t.get(i);a&&(n.push({...a,room:r}),t.delete(i))})}),t.forEach(e=>n.push(e)),!X.setSelectedProducts(n)){alert(`Unable to save the new order. Please try again.`);return}this.renderReviewList(),this.updateSelectionCount()}setupReviewCardTaps(){document.querySelectorAll(`.review-card-content`).forEach(e=>{let t=0,n=0,r=0,i=!1;e.addEventListener(`touchstart`,e=>{t=e.touches[0].clientY,n=e.touches[0].clientX,r=Date.now(),i=!0},{passive:!0}),e.addEventListener(`touchmove`,e=>{if(!i)return;let r=Math.abs(e.touches[0].clientY-t),a=Math.abs(e.touches[0].clientX-n);(r>10||a>10)&&(i=!1)},{passive:!0}),e.addEventListener(`touchend`,t=>{let n=Date.now()-r;if(i&&n<300){t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-id`);n&&this.showProductQuickView(n)}i=!1},{passive:!1}),e.addEventListener(`click`,t=>{if(t.pointerType===`mouse`||!(`ontouchstart`in window)){t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-id`);n&&this.showProductQuickView(n)}})})}showProductQuickView(e){let t=X.getSelectedProducts().find(t=>t.id===e);if(!t){console.warn(`Product not found for quick view:`,e);return}let{product:n,notes:r,quantity:i,room:a}=t,o=document.getElementById(`product-quick-view-modal`);o||(o=document.createElement(`div`),o.id=`product-quick-view-modal`,o.className=`modal`,document.body.appendChild(o));let s=n.Description||n.description||n.productName||`Product`,c=n.OrderCode||n.orderCode||``,l=n.Image_URL||n.imageUrl||`assets/no-image.png`,u=n.Diagram_URL||n.diagramUrl||``,d=n.Datasheet_URL||n.datasheetUrl||``,f=n.Website_URL||n.websiteUrl||``,p=n.RRP_INCGST||n.rrpIncGst||n.price||``,m=p?parseFloat(p.toString().replace(/[^0-9.-]/g,``)):NaN,h=!isNaN(m)&&m>0?`$${m.toFixed(2)} inc GST`:`Price unavailable`;o.innerHTML=`
      <div class="modal-content quick-view-content">
        <button class="quick-view-close" aria-label="Close">&times;</button>
        <div class="quick-view-image-section">
          <img class="quick-view-product-image" src="${this.escapeHtml(l)}" alt="${this.escapeHtml(s)}" onerror="this.src='assets/no-image.png';">
        </div>
        <div class="quick-view-details">
          <h3 class="quick-view-title">${this.escapeHtml(s)}</h3>
          <div class="quick-view-meta">
            <span class="quick-view-code">${c?`Code: `+this.escapeHtml(c):``}</span>
            <span class="quick-view-price">${h}</span>
          </div>
          <div class="quick-view-selection-info">
            <span class="quick-view-room"><strong>Room:</strong> ${this.escapeHtml(a||`Unassigned`)}</span>
            <span class="quick-view-qty"><strong>Qty:</strong> ${i||1}</span>
          </div>
          ${r?`<div class="quick-view-notes"><strong>Notes:</strong> ${this.escapeHtml(r)}</div>`:``}
        </div>
        <div class="quick-view-actions">
          ${u?`<button class="quick-view-btn diagram-btn" data-url="${this.escapeHtml(u)}">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 5.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3z"/></svg>
            Diagram
          </button>`:``}
          ${d?`<a href="${this.escapeHtml(d)}" target="_blank" rel="noopener noreferrer" class="quick-view-btn datasheet-btn">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 15h8v2H8v-2zm0-4h8v2H8v-2z"/></svg>
            Datasheet
          </a>`:``}
          ${f?`<a href="${this.escapeHtml(f)}" target="_blank" rel="noopener noreferrer" class="quick-view-btn website-btn">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            Website
          </a>`:``}
        </div>
        <div class="quick-view-footer">
          <button class="primary-btn quick-view-edit-btn" data-selection-id="${e}">Edit Selection</button>
          <button class="secondary-btn quick-view-back-btn">Back</button>
        </div>
      </div>
    `,o.style.display=`flex`;let g=o.querySelector(`.quick-view-close`),_=o.querySelector(`.quick-view-edit-btn`),v=o.querySelector(`.quick-view-back-btn`),y=o.querySelector(`.diagram-btn`),b=()=>{o.style.display=`none`};g.addEventListener(`click`,b),v.addEventListener(`click`,b),o.addEventListener(`click`,e=>{e.target===o&&b()}),_.addEventListener(`click`,()=>{b(),this.handleEditSelection(e)}),y&&y.addEventListener(`click`,e=>{e.preventDefault();let t=y.getAttribute(`data-url`);t&&this.showDiagramLightbox(t,s)})}showDiagramLightbox(e,t){let n=document.getElementById(`diagram-lightbox`);n||(n=document.createElement(`div`),n.id=`diagram-lightbox`,n.className=`diagram-lightbox`,document.body.appendChild(n)),n.innerHTML=`
      <div class="diagram-lightbox-content">
        <div class="diagram-lightbox-header">
          <span class="diagram-lightbox-title">${this.escapeHtml(t||`Diagram`)}</span>
          <button class="diagram-lightbox-close" aria-label="Close">&times;</button>
        </div>
        <div class="diagram-lightbox-body">
          <img class="diagram-lightbox-image" src="${this.escapeHtml(e)}" alt="Product Diagram" onerror="this.parentElement.innerHTML='<p class=\\'diagram-error\\'>Unable to load diagram</p>';">
        </div>
        <div class="diagram-lightbox-footer">
          <a href="${this.escapeHtml(e)}" target="_blank" rel="noopener noreferrer" class="secondary-btn">Open in New Tab</a>
        </div>
      </div>
    `,n.style.display=`flex`,n.querySelector(`.diagram-lightbox-close`).addEventListener(`click`,()=>{n.style.display=`none`}),n.addEventListener(`click`,e=>{e.target===n&&(n.style.display=`none`)});let r=n.querySelector(`.diagram-lightbox-image`);r&&r.addEventListener(`load`,()=>{r.style.opacity=`1`})}handleEditSelection(e){let t=X.getSelectedProducts().find(t=>t.id===e);if(!t){alert(`Unable to find product in selection.`);return}this.currentEditSelectionId=e;let{product:n,notes:r,quantity:i,room:a}=t;this.showProductDetailsScreen(n,{mode:`edit`,selectionId:e,notes:r,quantity:i,room:a})}updateRoomEmptyStates(){document.querySelectorAll(`.review-room-items`).forEach(e=>{e.children.length===0?e.classList.add(`is-empty`):e.classList.remove(`is-empty`)})}showPdfFormModal(){let e=document.getElementById(`pdf-email-modal`);if(e){e.style.display=`flex`;let t=document.getElementById(`pdf-email-form`),n=document.getElementById(`pdf-email-cancel`);n&&(n.onclick=()=>{e.style.display=`none`}),t&&(t.onsubmit=t=>{t.preventDefault(),this.handlePdfFormSubmit(),e.style.display=`none`})}}handlePdfFormSubmit(){let e=document.getElementById(`pdf-email-form`);if(!e)return;let t=new FormData(e),n={name:t.get(`user-name`),project:t.get(`user-project`),address:t.get(`user-address`),email:t.get(`user-email`),telephone:t.get(`user-telephone`),excludePrice:t.get(`exclude-price`)===`on`,exportCsv:t.get(`export-csv`)===`on`,sendEmail:!0};if(!n.email){alert(`Please enter an email address.`);return}window.dispatchEvent(new CustomEvent(`generatePdf`,{detail:n}))}handleAddCustomRoom(){this.showAddRoomModal(e=>{X.addCustomRoom(e.trim())?this.renderRoomGrid():alert(`Room name already exists or is invalid`)})}showAddRoomModal(e,t){let n=document.getElementById(`add-room-modal`);n&&n.remove();let r=document.createElement(`div`);r.id=`add-room-modal`,r.className=`modal`,r.style.display=`flex`,r.innerHTML=`
      <div class="modal-content add-room-modal-content">
        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 1.25rem;">Add New Room / Group</h3>
        <p style="margin: 0 0 16px 0; color: #666; font-size: 0.9rem;">Enter a name for your custom room or group:</p>
        <input type="text" id="new-room-input" class="add-room-input" placeholder="e.g., Master Bath, Pool Area..." maxlength="30" autofocus>
        <div class="modal-actions" style="margin-top: 20px;">
          <button id="add-room-cancel-btn" class="secondary-btn">Cancel</button>
          <button id="add-room-confirm-btn" class="primary-btn">Add</button>
        </div>
      </div>
    `,document.body.appendChild(r);let i=r.querySelector(`#new-room-input`),a=r.querySelector(`#add-room-cancel-btn`),o=r.querySelector(`#add-room-confirm-btn`);setTimeout(()=>i.focus(),100);let s=()=>{r.remove()},c=()=>{let t=i.value.trim();t?(s(),e&&e(t)):(i.focus(),i.style.borderColor=`#e53e3e`,setTimeout(()=>i.style.borderColor=``,1500))};a.addEventListener(`click`,()=>{s(),t&&t()}),o.addEventListener(`click`,c),i.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(s(),t&&t())}),r.addEventListener(`click`,e=>{e.target===r&&(s(),t&&t())})}handleRemoveCustomRoom(e){confirm(`Remove this custom room?`)&&(X.removeCustomRoom(e),this.renderRoomGrid())}showClearConfirmModal(){let e=document.getElementById(`clear-selection-modal`);if(e){e.style.display=`flex`;let t=document.getElementById(`modal-cancel-btn`),n=document.getElementById(`modal-confirm-btn`);t&&(t.onclick=()=>{e.style.display=`none`}),n&&(n.onclick=()=>{X.clearAllSelections(),window.leadWizardIntegration&&(window.leadWizardIntegration.clearCurrentLeadData(),console.log(`🧹 Lead data cleared with selection clear`)),e.style.display=`none`,this.updateSelectionCount()})}}showScanFeedback(e){let t=document.getElementById(`scanner-feedback`);t&&(t.innerHTML=`
        <div style="color: #16a34a; background: #f0f9ff; padding: 8px; border-radius: 6px; margin: 4px 0;">
          ${a.escapeHtml(String(e||``))}
        </div>
      `,setTimeout(()=>{t.innerHTML=``},3e3))}updateSelectionCount(){let e=document.getElementById(`selection-count`);e&&(e.textContent=X.getSelectionCount().toString())}setupSeimaContactModal(){let e=document.getElementById(`seima-contact-modal`);if(!e)return;let t=document.getElementById(`staff-contact-cancel-btn`),n=document.getElementById(`staff-contact-save-btn`),r=document.getElementById(`staff-mode-lock`);document.getElementById(`app-mode-input`),document.getElementById(`staff-code-submit`);let i=document.getElementById(`staff-code-input-container`);t&&(t.onclick=()=>{e.style.display=`none`,i&&(i.style.display=`none`)}),n&&(n.onclick=()=>this.handleSeimaContactSave()),r&&(r.onclick=()=>this.handleLockClick()),i&&(i.style.display=`none`),this.loadSeimaContactDetails()}showSeimaContactModal(){let e=document.getElementById(`seima-contact-modal`);e&&(e.style.display=`flex`,this.loadSeimaContactDetails())}loadSeimaContactDetails(){let e=X.getStaffContactDetails(),t=document.getElementById(`staff-name`),n=document.getElementById(`staff-position`),r=document.getElementById(`staff-mobile`),i=document.getElementById(`staff-email`),a=document.getElementById(`lock-icon`),o=document.getElementById(`staff-mode-lock`),s=document.getElementById(`logged-in-profile-section`),c=document.getElementById(`profile-avatar`),l=document.getElementById(`profile-display-name`),u=document.getElementById(`profile-display-email`),d=document.getElementById(`edit-profile-btn`),m=f.isLoggedIn(),h=f.getCurrentUser();if(e&&(e.name||e.email)?(t&&e.name&&(t.value=e.name),n&&e.position&&(n.value=e.position),r&&e.mobile&&(r.value=e.mobile),i&&e.email&&(i.value=e.email)):h&&(t&&h.name&&(t.value=h.name),n&&h.position&&(n.value=h.position),i&&h.email&&(i.value=h.email),r&&h.phone&&(r.value=h.phone)),h){s&&(s.style.display=`block`),l&&(l.textContent=h.name||``),u&&(u.textContent=h.email||``),c&&(c.textContent=this.getInitials(h.name)),d&&(d.onclick=()=>this.showEditProfileModal());let e=document.getElementById(`change-password-btn`);e&&(e.onclick=()=>{p.showChangePassword(()=>{console.log(`📱 Password changed`)})})}else s&&(s.style.display=`none`);a&&(a.textContent=m?`🔓`:`🔒`),o&&(m?o.classList.add(`unlocked`):o.classList.remove(`unlocked`))}getInitials(e){if(!e)return`?`;let t=e.trim().split(` `);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}showEditProfileModal(){p.showEditProfile(()=>{X.clearStaffContactDetails(),this.loadSeimaContactDetails()})}handleLockClick(){f.isLoggedIn()?this.showExitStaffModeModal():p.showLogin(()=>{this.updateLockUI(!0),this.loadSeimaContactDetails(),window.dispatchEvent(new CustomEvent(`staffModeChanged`,{detail:{mode:`staff`,user}}))})}showExitStaffModeModal(){let e=document.getElementById(`exit-staff-mode-modal`);if(!e)return;e.style.display=`flex`;let t=document.getElementById(`exit-staff-cancel-btn`),n=document.getElementById(`exit-staff-confirm-btn`);if(t){let n=t.cloneNode(!0);t.parentNode.replaceChild(n,t),n.onclick=()=>{e.style.display=`none`}}if(n){let t=n.cloneNode(!0);n.parentNode.replaceChild(t,n),t.onclick=()=>{e.style.display=`none`,this.exitStaffMode()}}}handleCodeSubmit(){console.warn(`handleCodeSubmit is deprecated - use authUI.showLogin() instead`)}exitStaffMode(){f.logout(),console.log(`📱 Staff logged out`),X.clearStaffContactDetails(),this.updateLockUI(!1),window.dispatchEvent(new CustomEvent(`staffModeChanged`,{detail:{mode:`customer`}}))}updateLockUI(e){let t=document.getElementById(`lock-icon`),n=document.getElementById(`staff-mode-lock`);t&&(t.textContent=e?`🔓`:`🔒`),n&&(e?n.classList.add(`unlocked`):n.classList.remove(`unlocked`))}handleSeimaContactSave(){let e=document.getElementById(`staff-name`),t=document.getElementById(`staff-position`),n=document.getElementById(`staff-mobile`),r=document.getElementById(`staff-email`),i=document.getElementById(`staff-code-input-container`);if(!e||!n||!r)return;let a=e.value.trim(),o=t?.value.trim()||``,s=n.value.trim(),c=r.value.trim();if(!a||!s||!c){this.showStaffContactStatus(`Please fill in all required fields.`,`error`);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){this.showStaffContactStatus(`Please enter a valid email address.`,`error`);return}let l={name:a,position:o,mobile:s,email:c};X.setStaffContactDetails(l),this.showStaffContactStatus(`Contact details saved!`,`success`),setTimeout(()=>{let e=document.getElementById(`seima-contact-modal`);e&&(e.style.display=`none`,i&&(i.style.display=`none`))},1500)}showStaffContactStatus(e,t){let n=document.getElementById(`staff-details-status`);n&&(n.style.display=`block`,n.textContent=e,t===`success`?(n.style.background=`#d1fae5`,n.style.border=`1px solid #10b981`,n.style.color=`#065f46`):t===`error`&&(n.style.background=`#fee2e2`,n.style.border=`1px solid #ef4444`,n.style.color=`#991b1b`),setTimeout(()=>{n.style.display=`none`},5e3))}async startTextScanMode(){try{this.scannerController.stopScanning();let e=this.scannerController.videoElement;if(!e||e.paused||e.ended?(await this.scannerController.startScanning(`text`),await new Promise(e=>setTimeout(e,800)),e=this.scannerController.videoElement):console.log(`📷 Using existing camera stream for text mode`),!e)throw Error(`Camera not available for Text Scan`);this.showTextCaptureOverlay(),this.showScanFeedback(`Position product label in the center area and tap Capture`);let t=document.getElementById(`text-scan-btn`),n=document.getElementById(`ocr-capture-btn`);t&&(t.textContent=`Stop Text Scan`,t.onclick=()=>this.stopTextScanMode()),n&&(n.style.display=`block`,n.onclick=()=>this.captureTextScan())}catch(e){console.error(`Failed to start Text Scan mode:`,e),this.showScanFeedback(`Text Scan failed: `+e.message)}}async captureTextScan(){let e=this.scannerController.videoElement;if(!e){this.showScanFeedback(`Camera not available`);return}let t=document.getElementById(`ocr-capture-btn`);t&&(t.disabled=!0,t.textContent=`Processing...`);try{let n=e.videoWidth||640,r=e.videoHeight||480,i=document.createElement(`canvas`);i.width=n,i.height=r,i.getContext(`2d`).drawImage(e,0,0,n,r),this.scannerController.stopScanning(),this.showScanFeedback(`Processing image...`);let a=await q.captureAndProcessCanvas(i);if(a.length===0){this.showScanFeedback(`No text detected. Try better lighting or angle.`),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent=`Capture`);return}await this.handleOcrResults(a),t&&(t.disabled=!1,t.textContent=`Capture`)}catch(e){console.error(`OCR capture error:`,e),this.showScanFeedback(`Error: `+e.message),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent=`Capture`)}}stopTextScanMode(){q.stopScanning(),this.showBarcodeScanOverlay(),this.scannerController.videoElement&&!this.scannerController.videoElement.paused&&(this.scannerController.stopScanning(),setTimeout(()=>{this.scannerController.startScanning(`barcode`).catch(e=>{console.warn(`Failed to restart barcode scanning:`,e)})},300));let e=document.getElementById(`text-scan-btn`),t=document.getElementById(`ocr-capture-btn`);e&&(e.textContent=`Text Scan`,e.onclick=()=>this.startTextScanMode()),t&&(t.style.display=`none`,t.disabled=!1,t.textContent=`Capture`),this.showScanFeedback(`Text Scan stopped`)}showTextCaptureOverlay(){let e=document.getElementById(`scanner-overlay`);if(!e)return;let t=e.querySelector(`.scan-area`),n=e.querySelector(`.scan-line`);t&&(t.style.display=`none`),n&&(n.style.display=`none`);let r=e.querySelector(`.text-capture-area`);r||(r=document.createElement(`div`),r.className=`text-capture-area`,e.appendChild(r)),r.style.display=`block`;let i=e.querySelector(`.text-capture-corners`);i||(i=document.createElement(`div`),i.className=`text-capture-corners`,e.appendChild(i)),i.style.display=`block`;let a=e.querySelector(`.text-capture-instruction`);a||(a=document.createElement(`div`),a.className=`text-capture-instruction`,a.textContent=`Position product label with Order Code here`,e.appendChild(a)),a.style.display=`block`}showBarcodeScanOverlay(){let e=document.getElementById(`scanner-overlay`);if(!e)return;let t=e.querySelector(`.scan-area`),n=e.querySelector(`.scan-line`);t&&(t.style.display=`block`),n&&(n.style.display=`block`);let r=e.querySelector(`.text-capture-area`),i=e.querySelector(`.text-capture-corners`),a=e.querySelector(`.text-capture-instruction`);r&&(r.style.display=`none`),i&&(i.style.display=`none`),a&&(a.style.display=`none`)}async handleOcrResults(e){let t=document.getElementById(`ocr-confirmation-modal`);if(t&&t.style.display!==`none`){console.log(`OCR modal already open, ignoring new detection`);return}if(!this.dataService.isLoaded){this.showScanFeedback(`Product data loading, please wait...`);return}let n=this.dataService.getAllProducts(),r=Ft.findProductsByOcrTexts(e,n);if(r&&r.requiresSelection&&r.families)this.showProductFamilySelectionModal(r.families,e);else{let t=Array.isArray(r)?r:[];this.showOcrConfirmationModal(t,e)}}showOcrConfirmationModal(e,t){let n=document.getElementById(`ocr-confirmation-modal`),r=document.getElementById(`ocr-candidates-list`),i=document.getElementById(`ocr-no-matches`),a=document.getElementById(`ocr-confirm-btn`),o=document.getElementById(`ocr-cancel-btn`);if(!n||!r||!a||!o){console.error(`OCR confirmation modal elements not found`);return}r.innerHTML=``;let s=new Set;e.length===0?(i.style.display=`block`,r.style.display=`none`,a.style.display=`none`):(i.style.display=`none`,r.style.display=`block`,e.forEach((e,t)=>{let n=e.product,i=n.OrderCode||`N/A`,o=n.Description||n[`Product Description`]||n[`Product Name`]||`No description`,c=String(n.Image_URL||n[`Image URL`]||`assets/no-image.png`).trim(),l=/^(https?:|data:image\/|assets\/)/i.test(c)?this.escapeHtml(c):`assets/no-image.png`,u=this.escapeHtml(String(i)),d=this.escapeHtml(String(o)),f=document.createElement(`div`);f.style.cssText=`display: flex; align-items: center; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px; cursor: pointer;`,f.innerHTML=`
          <input type="checkbox" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;" 
                 data-product-index="${t}">
          <img src="${l}" alt="${d}"
               style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
               onerror="this.src='assets/no-image.png'">
          <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 4px;">${u}</div>
            <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${this.escapeHtml(o.substring(0,60))}${o.length>60?`...`:``}</div>
            <div style="font-size: 0.85em; color: #888;">
              <span style="background: ${e.confidence===`high`?`#d1fae5`:`#fef3c7`}; 
                           padding: 2px 6px; border-radius: 4px;">
                ${e.confidence===`high`?`High`:`Medium`} confidence
              </span>
            </div>
          </div>
        `;let p=f.querySelector(`input[type="checkbox"]`);p.onclick=e=>{e.stopPropagation(),p.checked?s.delete(n):s.add(n),a.disabled=s.size===0},p.onchange=e=>{e.stopPropagation(),p.checked?s.add(n):s.delete(n),a.disabled=s.size===0},f.onclick=e=>{e.target!==p&&e.target!==p.parentElement&&(p.checked=!p.checked,p.checked?s.add(n):s.delete(n),a.disabled=s.size===0)},r.appendChild(f)}),a.style.display=`block`,a.disabled=!0),a.textContent=`Add Selected`,a.onclick=()=>{if(s.size===0)return;let e=Array.from(s);if(n.style.display=`none`,e.length===1){let t=e[0];this.showProductDetailsScreen(t,{scannedCode:t.OrderCode,fromOcr:!0})}else e.forEach(e=>{this.dataService.addProduct(e,``,this.selectedRoom||`Blank`,1)}),this.showScanFeedback(`Added ${e.length} product(s) to selection`),this.updateSelectionCount(),this.showReviewScreen()},o.onclick=async()=>{n.style.display=`none`,await this.restartTextCamera()},o.disabled=!1,n.style.display=`flex`}showProductFamilySelectionModal(e,t){let n=document.getElementById(`ocr-confirmation-modal`),r=document.getElementById(`ocr-candidates-list`),i=document.getElementById(`ocr-no-matches`),a=document.getElementById(`ocr-confirm-btn`),o=document.getElementById(`ocr-cancel-btn`);if(!n||!r||!a||!o){console.error(`OCR confirmation modal elements not found`);return}if(!e||e.length===0){console.error(`❌ No families provided to selection modal!`),i.style.display=`block`,r.style.display=`none`,a.style.display=`none`,o.onclick=async()=>{n.style.display=`none`;try{await this.scannerController.startScanning(`text`),this.showScanFeedback(`Ready to capture`)}catch(e){console.error(`Failed to restart camera:`,e),this.showScanFeedback(`Camera error - please try again`)}},o.disabled=!1,n.style.display=`flex`;return}let s=n.querySelector(`h3`),c=n.querySelector(`p`);s&&(s.textContent=`Multiple Products Detected`),c&&(c.textContent=`Select which product you're looking for:`),r.innerHTML=``,i.style.display=`none`,r.style.display=`block`,a.style.display=`block`;let l=null;e.forEach((e,t)=>{let n=document.createElement(`div`);n.style.cssText=`display: flex; align-items: center; padding: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 12px; cursor: pointer; transition: all 0.2s;`;let i=e.matches.length,o=e.matches[0],s=String(o?.product?.Image_URL||o?.product?.[`Image URL`]||`assets/no-image.png`).trim(),c=/^(https?:|data:image\/|assets\/)/i.test(s)?this.escapeHtml(s):`assets/no-image.png`,u=this.escapeHtml(String(e.familyName||`Product family`));n.innerHTML=`
        <input type="radio" name="product-family" value="${t}" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;">
        <img src="${c}" alt="${u}"
             style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
             onerror="this.src='assets/no-image.png'">
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px; font-size: 1.1em;">${u}</div>
          <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${i} variant${i===1?``:`s`} found</div>
          <div style="font-size: 0.85em; color: #888;">
            <span style="background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">
              ${Math.round(e.totalScore*100)}% match
            </span>
          </div>
        </div>
      `;let d=n.querySelector(`input[type="radio"]`);d.onclick=t=>{t.stopPropagation(),l=e,a.disabled=!1,document.querySelectorAll(`input[name="product-family"]`).forEach(e=>{e.closest(`div`).style.borderColor=`#ddd`,e.closest(`div`).style.backgroundColor=``}),n.style.borderColor=`#1e40af`,n.style.backgroundColor=`#eff6ff`},n.onclick=e=>{e.target!==d&&(d.checked=!0,d.onclick(e))},r.appendChild(n)}),a.onclick=()=>{l&&(n.style.display=`none`,this.showOcrConfirmationModal(l.matches,t))},o.onclick=async()=>{n.style.display=`none`,await this.restartTextCamera()},a.disabled=!0,a.textContent=`Select Product Family`,n.style.display=`flex`}},Rt=class{constructor(){this.selectedFile=null,this.importMode=`append`,this.processedData=[],this.notFoundProducts=[],this.dataService=W}async init(){this.setupEventHandlers(),console.log(`FileImportManager initialized`)}setupEventHandlers(){let e=document.getElementById(`import-file-btn`);e&&(e.onclick=()=>this.showImportModal());let t=document.getElementById(`file-drop-zone`),n=document.getElementById(`file-input`);t&&n&&(t.onclick=()=>n.click(),t.ondragover=e=>{e.preventDefault(),t.style.borderColor=`#059669`,t.style.background=`#f0fdf4`},t.ondragleave=e=>{e.preventDefault(),t.style.borderColor=`#ccc`,t.style.background=`#fafafa`},t.ondrop=e=>{e.preventDefault(),t.style.borderColor=`#ccc`,t.style.background=`#fafafa`;let n=e.dataTransfer.files;n.length>0&&this.handleFileSelection(n[0])},n.onchange=e=>{e.target.files.length>0&&this.handleFileSelection(e.target.files[0])});let r=document.getElementById(`import-cancel-btn`),i=document.getElementById(`import-next-btn`),a=document.getElementById(`import-back-btn`),o=document.getElementById(`import-process-btn`),s=document.getElementById(`import-close-btn`);r&&(r.onclick=()=>this.closeModal()),i&&(i.onclick=()=>this.showImportModeStep()),a&&(a.onclick=()=>this.showFileSelectionStep()),o&&(o.onclick=()=>this.processImport()),s&&(s.onclick=()=>this.closeModal()),document.querySelectorAll(`input[name="import-mode"]`).forEach(e=>{e.onchange=()=>{this.importMode=e.value;let t=document.getElementById(`override-warning`);t&&(t.style.display=this.importMode===`override`?`block`:`none`)}})}showImportModal(){let e=document.getElementById(`file-import-modal`);e&&(e.style.display=`flex`,this.resetModal())}closeModal(){let e=document.getElementById(`file-import-modal`);e&&(e.style.display=`none`,this.resetModal())}resetModal(){this.selectedFile=null,this.importMode=`append`,this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();let e=document.getElementById(`file-input`);e&&(e.value=``);let t=document.getElementById(`selected-file-info`);t&&(t.style.display=`none`);let n=document.getElementById(`import-next-btn`);n&&(n.disabled=!0);let r=document.querySelector(`input[name="import-mode"][value="append"]`);r&&(r.checked=!0);let i=document.getElementById(`override-warning`);i&&(i.style.display=`none`)}showFileSelectionStep(){this.hideAllSteps();let e=document.getElementById(`file-selection-step`);e&&(e.style.display=`block`)}showImportModeStep(){this.hideAllSteps();let e=document.getElementById(`import-mode-step`);e&&(e.style.display=`block`)}showProcessingStep(){this.hideAllSteps();let e=document.getElementById(`import-processing-step`);e&&(e.style.display=`block`)}showResultsStep(){this.hideAllSteps();let e=document.getElementById(`import-results-step`);e&&(e.style.display=`block`)}hideAllSteps(){[`file-selection-step`,`import-mode-step`,`import-processing-step`,`import-results-step`].forEach(e=>{let t=document.getElementById(e);t&&(t.style.display=`none`)})}handleFileSelection(e){console.log(`File selected:`,e.name,e.type,e.size);let t=[`text/csv`,`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`],n=e.name.toLowerCase().endsWith(`.csv`)||e.name.toLowerCase().endsWith(`.xlsx`);if(!t.includes(e.type)&&!n){alert(`Please select a CSV or Excel (.xlsx) file.`);return}this.selectedFile=e;let r=document.getElementById(`selected-file-info`),i=document.getElementById(`selected-file-name`),a=document.getElementById(`import-next-btn`);r&&i&&a&&(i.textContent=e.name,r.style.display=`block`,a.disabled=!1)}async processImport(){if(!this.selectedFile){alert(`No file selected`);return}console.log(`Starting import process with mode:`,this.importMode),this.showProcessingStep();try{let e;e=this.selectedFile.name.toLowerCase().endsWith(`.csv`)?await this.parseCSV(this.selectedFile):await this.parseExcel(this.selectedFile),console.log(`Parsed data:`,e),this.importMode===`override`&&(X.clearAllSelections(),console.log(`Cleared all existing data for override mode`)),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error(`Import failed:`,e),alert(`Import failed: `+e.message),this.showFileSelectionStep()}}async parseCSV(e){return new Promise((t,n)=>{if(typeof Papa>`u`){n(Error(`Papa Parse library not loaded`));return}this.doPapaParseCSV(e,t,n)})}doPapaParseCSV(e,t,n){Papa.parse(e,{header:!0,skipEmptyLines:!0,complete:e=>{console.log(`CSV parsing complete:`,e),t(e.data)},error:e=>{console.error(`CSV parsing error:`,e),n(e)}})}async parseExcel(e){return new Promise((t,n)=>{if(typeof XLSX>`u`){n(Error(`XLSX library not loaded`));return}let r=new FileReader;r.onload=e=>{try{let r=new Uint8Array(e.target.result),i=XLSX.read(r,{type:`array`}),a=i.SheetNames[0],o=i.Sheets[a],s=XLSX.utils.sheet_to_json(o,{header:1,defval:``});if(s.length===0){n(Error(`Excel file is empty`));return}let c=s[0],l=s.slice(1).map(e=>{let t={};return c.forEach((n,r)=>{t[n]=e[r]||``}),t});console.log(`Excel parsing complete:`,l),t(l)}catch(e){console.error(`Excel parsing error:`,e),n(e)}},r.onerror=()=>{n(Error(`Failed to read Excel file`))},r.readAsArrayBuffer(e)})}async processDataChunked(e){if(e.length===0)throw Error(`No data to process`);let t=this.detectColumns(e[0]);if(console.log(`Detected column mapping:`,t),!t.productCode)throw Error(`Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", or "SKU".`);this.processedData=[],this.notFoundProducts=[];for(let n=0;n<e.length;n+=50){let r=e.slice(n,n+50);await this.processChunk(r,t),await new Promise(e=>setTimeout(e,10))}console.log(`Processing complete. Processed:`,this.processedData.length,`Not found:`,this.notFoundProducts.length)}detectColumns(e){let t=Object.keys(e);return console.log(`Available headers:`,t),{productCode:this.findColumnByPatterns(t,[`ordercode`,`productcode`,`sku`,`order code`,`product code`]),productName:this.findColumnByPatterns(t,[`product name`,`description`,`name`]),quantity:this.findColumnByPatterns(t,[`min order quantity`,`quantity`,`qty`,`orderquantity`]),price:t.find(e=>e.toLowerCase()===`price per unit`)}}findColumnByPatterns(e,t){for(let n of t){let t=e.find(e=>e.toLowerCase().includes(n.toLowerCase()));if(t)return t}return null}async processChunk(e,t){for(let n of e)await this.processRow(n,t)}async processRow(e,t){let n=t.productCode?e[t.productCode]:``,r=t.productName?e[t.productName]:``,i=t.quantity?e[t.quantity]:`1`,a=t.price?e[t.price]:``;if(!n||String(n).trim().toLowerCase()===`n/a`){console.log(`Excluding row with N/A or missing product code`);return}let o=String(n).trim();if(!/^\d{6}$/.test(o)){console.log(`Excluding row - product code is not 6 digits:`,o);return}let s=parseInt(i)||1,c=0;if(a){let e=String(a).replace(/[^\d.-]/g,``);c=parseFloat(e)||0,c>0&&(c*=1.1)}console.log(`Processing valid 6-digit product code:`,{productCode:o,productName:r,quantity:s,price:c});let l=await this.findProductInCatalog(o,r),u={OrderCode:o,orderCode:o,productName:r||(l?l.productName:`Unknown Product`),"Product Name":r||(l?l[`Product Name`]:`Unknown Product`),Description:r||(l?l.Description:`Unknown Product`),description:r||(l?l.description:`Unknown Product`),price:c>0?c.toFixed(2):l?l.price:`0.00`,Image_URL:l?l.Image_URL||l.imageUrl:`assets/no-image.png`,imageUrl:l?l.Image_URL||l.imageUrl:`assets/no-image.png`,Website_URL:l?l.Website_URL||l.websiteUrl:``,websiteUrl:l?l.Website_URL||l.websiteUrl:``,Diagram_URL:l?l.Diagram_URL||l.diagramUrl:``,diagramUrl:l?l.Diagram_URL||l.diagramUrl:``,Datasheet_URL:l?l.Datasheet_URL||l.datasheetUrl:``,datasheetUrl:l?l.Datasheet_URL||l.datasheetUrl:``,RRP_EXGST:c>0?(c/1.1).toFixed(2):l?l.RRP_EXGST||l.rrpExGst:`0.00`,rrpExGst:c>0?(c/1.1).toFixed(2):l?l.RRP_EXGST||l.rrpExGst:`0.00`,RRP_INCGST:c>0?c.toFixed(2):l?l.RRP_INCGST||l.rrpIncGst:`0.00`,rrpIncGst:c>0?c.toFixed(2):l?l.RRP_INCGST||l.rrpIncGst:`0.00`};l?console.log(`Found product in catalog, using imported data with catalog fallbacks:`,o):(console.log(`Product not found in catalog, creating with imported data:`,o),this.notFoundProducts.push({orderCode:o,productName:r||`Unknown Product`,quantity:s,price:c>0?c.toFixed(2):`N/A`})),X.addProductToSelection(u,{room:`Blank`,quantity:s}),this.processedData.push({...u,quantity:s,notes:``,room:`Blank`})}async findProductInCatalog(e,t){let n=this.dataService.getAllProducts();if(e){let t=String(e).trim(),r=n.find(e=>[e.OrderCode,e.orderCode,e[`Order Code`],e.order_code].some(e=>e&&String(e).trim().toLowerCase()===t.toLowerCase()));if(r)return console.log(`Found product in catalog by code:`,t,r),r}if(t){let e=String(t).trim().toLowerCase(),r=n.find(t=>[t.productName,t[`Product Name`],t.description,t.Description,t.LongDescription].some(t=>t&&String(t).trim().toLowerCase()===e));if(r)return console.log(`Found product in catalog by name:`,t,r),r}return console.log(`Product not found in catalog:`,{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();let e=document.getElementById(`import-summary`),t=document.getElementById(`not-found-products`),n=document.getElementById(`not-found-list`);if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&n)if(this.notFoundProducts.length>0){let e=t.querySelector(`h5`);e&&(e.textContent=`Products added with placeholder information:`,e.style.color=`#2563eb`);let r=e=>a.escapeHtml(String(e||``));n.innerHTML=`<ul>${this.notFoundProducts.map(e=>`<li><strong>${r(e.orderCode)}</strong> - ${r(e.productName)} (Qty: ${r(e.quantity)}, Price: ${r(e.price)})</li>`).join(``)}</ul>`,t.style.display=`block`,t.style.borderColor=`#2563eb`,t.style.backgroundColor=`#eff6ff`}else t.style.display=`none`;let r=document.getElementById(`import-close-btn`);r&&this.processedData.length>0&&(r.textContent=`View Products`,r.onclick=()=>{this.closeModal(),window.navigationManager&&window.navigationManager.showReviewScreen&&window.navigationManager.showReviewScreen()}),console.log(`Import results displayed`)}};function zt(e){return e?(G.configure(e),r.SELECTION_RECORDING.GOOGLE_SHEETS_URL=e,console.log(`✅ Selection recorder configured successfully`),console.log(`📊 URL:`,e),!0):(console.error(`❌ Google Sheets URL is required`),!1)}async function Bt(){console.log(`🧪 Testing selection recorder connection...`);try{let e=await G.testConnection();return e.success?(console.log(`✅ Selection recorder test successful!`),console.log(`📊 Your Google Sheets integration is working correctly`),!0):(console.error(`❌ Selection recorder test failed:`,e.error),!1)}catch(e){return console.error(`❌ Selection recorder test error:`,e),!1}}function Vt(){let e={enabled:G.isEnabled,configured:!!G.googleSheetsUrl,url:G.googleSheetsUrl?`Set`:`Not set`,retryAttempts:G.retryAttempts,retryDelay:G.retryDelay};return console.log(`📊 Selection Recorder Status:`,e),e}function Ht(e=!0){return G.setEnabled(e),console.log(`📊 Selection recording ${e?`enabled`:`disabled`}`),e}function Ut(){console.log(`
🚀 SEIMA SELECTION RECORDER SETUP
================================

Follow these steps to set up selection recording:

1. Create a Google Sheet with the column headers from SELECTION-RECORDING-SETUP.md
2. Create a Google Apps Script (Extensions > Apps Script)
3. Deploy as a Web App with "Anyone" access
4. Copy the deployment URL
5. Run: configureSelectionRecorder('YOUR_URL_HERE')
6. Test with: testSelectionRecorder()

Current status:
`),Vt(),console.log(`
Need help? Check SELECTION-RECORDING-SETUP.md for detailed instructions.
  `)}typeof window<`u`&&(window.configureSelectionRecorder=zt,window.testSelectionRecorder=Bt,window.getSelectionRecorderStatus=Vt,window.toggleSelectionRecording=Ht,window.setupSelectionRecorder=Ut);var Z=new class{constructor(){this.googleSheetsUrl=r.SELECTION_RECORDING.GOOGLE_SHEETS_URL,this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:300*1e3}}isCacheValid(){return this.cache.lastFetch?Date.now()-this.cache.lastFetch<this.cache.cacheTimeout:!1}async getBuilders(e=!0){if(e&&this.isCacheValid()&&this.cache.builders.length>0)return console.log(`🏗️ Using cached builders list`),this.cache.builders;try{let e=`${this.googleSheetsUrl}?action=getBuilders`,t=await(await fetch(e)).json();if(t.success)return this.cache.builders=t.builders||[],this.cache.builders.sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏗️ Fetched ${this.cache.builders.length} builders from server`),this.cache.builders;throw Error(t.error||`Failed to fetch builders`)}catch(e){return console.error(`❌ Error fetching builders:`,e),this.cache.builders.length>0?(console.log(`🏗️ Using stale cached builders due to error`),this.cache.builders):[]}}async getMerchants(e=!0){if(e&&this.isCacheValid()&&this.cache.merchants.length>0)return console.log(`🏪 Using cached merchants list`),this.cache.merchants;try{let e=`${this.googleSheetsUrl}?action=getMerchants`,t=await(await fetch(e)).json();if(t.success)return this.cache.merchants=t.merchants||[],this.cache.merchants.sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏪 Fetched ${this.cache.merchants.length} merchants from server`),this.cache.merchants;throw Error(t.error||`Failed to fetch merchants`)}catch(e){return console.error(`❌ Error fetching merchants:`,e),this.cache.merchants.length>0?(console.log(`🏪 Using stale cached merchants due to error`),this.cache.merchants):[]}}async searchBuilders(e){if(!e||e.trim()===``)return await this.getBuilders();try{let t=`${this.googleSheetsUrl}?action=searchBuilders&query=${encodeURIComponent(e)}`,n=await(await fetch(t)).json();if(n.success){let t=n.builders||[];return t.sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())),console.log(`🔍 Found ${t.length} builders matching "${e}"`),t}else throw Error(n.error||`Failed to search builders`)}catch(t){console.error(`❌ Error searching builders:`,t);let n=await this.getBuilders(),r=e.toLowerCase();return n.filter(e=>e.toLowerCase().includes(r)).sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))}}async searchMerchants(e){if(!e||e.trim()===``)return await this.getMerchants();try{let t=`${this.googleSheetsUrl}?action=searchMerchants&query=${encodeURIComponent(e)}`,n=await(await fetch(t)).json();if(n.success){let t=n.merchants||[];return t.sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())),console.log(`🔍 Found ${t.length} merchants matching "${e}"`),t}else throw Error(n.error||`Failed to search merchants`)}catch(t){console.error(`❌ Error searching merchants:`,t);let n=await this.getMerchants(),r=e.toLowerCase();return n.filter(e=>e.toLowerCase().includes(r)).sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))}}async addBuilder(e){if(!e||e.trim()===``)return{success:!1,error:`Builder name is required`};try{let t=`${this.googleSheetsUrl}?action=addBuilder&name=${encodeURIComponent(e.trim())}`,n=await(await fetch(t)).json();return n.success?(this.cache.lastFetch=null,console.log(`✅ Builder "${n.name}" added successfully`),n):(console.log(`⚠️ Builder add failed: ${n.error}`),n.existing&&console.log(`💡 Suggested existing: "${n.existing}"`),n)}catch(e){return console.error(`❌ Error adding builder:`,e),{success:!1,error:e.message}}}async addMerchant(e){if(!e||e.trim()===``)return{success:!1,error:`Merchant name is required`};try{let t=`${this.googleSheetsUrl}?action=addMerchant&name=${encodeURIComponent(e.trim())}`,n=await(await fetch(t)).json();return n.success?(this.cache.lastFetch=null,console.log(`✅ Merchant "${n.name}" added successfully`),n):(console.log(`⚠️ Merchant add failed: ${n.error}`),n.existing&&console.log(`💡 Suggested existing: "${n.existing}"`),n)}catch(e){return console.error(`❌ Error adding merchant:`,e),{success:!1,error:e.message}}}clearCache(){this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:300*1e3},console.log(`🧹 Builder/Merchant cache cleared`)}getCacheStatus(){return{builders:this.cache.builders.length,merchants:this.cache.merchants.length,lastFetch:this.cache.lastFetch?new Date(this.cache.lastFetch).toLocaleString():`Never`,isValid:this.isCacheValid()}}};window.testBuilderMerchantService=async()=>{console.log(`🧪 Testing Builder/Merchant Service...`);try{let e=await Z.getBuilders();console.log(`✅ Builders:`,e);let t=await Z.getMerchants();return console.log(`✅ Merchants:`,t),console.log(`✅ Builder/Merchant Service test completed`),!0}catch(e){return console.error(`❌ Builder/Merchant Service test failed:`,e),!1}},window.clearBuilderMerchantCache=()=>(Z.clearCache(),`Cache cleared successfully`),window.getBuilderMerchantStatus=()=>{let e=Z.getCacheStatus();return console.log(`📊 Builder/Merchant Service Status:`,e),e};var Q=new class{constructor(){this.leadData={customerName:``,customerEmail:``,customerPhone:``,projectName:``,projectAddress:``,projectNotes:``,excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:``,builderName:``,merchantName:``,hearAboutUs:[],hearAboutUsOther:``,referralBuilder:``,referralMerchant:``},this.builderList=[],this.merchantList=[],this.currentStep=1,this.totalSteps=3}getLeadData(){return{...this.leadData}}updateLeadData(e){this.leadData={...this.leadData,...e}}clearLeadData(){this.leadData={customerName:``,customerEmail:``,customerPhone:``,projectName:``,projectAddress:``,projectNotes:``,excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:``,builderName:``,merchantName:``,hearAboutUs:[],hearAboutUsOther:``,referralBuilder:``,referralMerchant:``},this.currentStep=1}validateStep(e){switch(e){case 1:return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName;case 2:return this.leadData.customerType!==null;case 3:return this.leadData.hearAboutUs.length>0;default:return!1}}validateForm(){let e=f.isStaffMode();return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName?e?this.leadData.customerType!==null&&this.leadData.hearAboutUs.length>0:!0:!1}getFormattedLeadData(){let e=this.leadData,t=e.customerType;e.customerType===`Other`&&e.customerTypeOther&&(t=e.customerTypeOther);let n=[...e.hearAboutUs];if(e.hearAboutUs.includes(`Other`)&&e.hearAboutUsOther){let t=n.indexOf(`Other`);n[t]=`Other (${e.hearAboutUsOther})`}return{customerType:t,hearAboutUs:n.join(`, `),customerTypeRaw:e.customerType,hearAboutUsArray:e.hearAboutUs,builderName:e.builderName,merchantName:e.merchantName,referralBuilder:e.referralBuilder,referralMerchant:e.referralMerchant,projectNotes:e.projectNotes||``}}getBuilderList(){return[...this.builderList]}getMerchantList(){return[...this.merchantList]}async getBuilderList(){return await Z.getBuilders()}async getMerchantList(){return await Z.getMerchants()}async searchBuilders(e){return await Z.searchBuilders(e)}async searchMerchants(e){return await Z.searchMerchants(e)}async addCustomBuilder(e){return await Z.addBuilder(e)}async addCustomMerchant(e){return await Z.addMerchant(e)}loadCustomLists(){try{let e=localStorage.getItem(`customBuilders`);e&&(this.builderList=JSON.parse(e));let t=localStorage.getItem(`customMerchants`);t&&(this.merchantList=JSON.parse(t))}catch(e){console.error(`Error loading custom lists:`,e)}}clearCustomLists(){this.builderList=[],this.merchantList=[],localStorage.removeItem(`customBuilders`),localStorage.removeItem(`customMerchants`),console.log(`🧹 Cleared all custom builder and merchant lists`)}};Q.loadCustomLists(),window.clearBuilderMerchantLists=()=>(Q.clearCustomLists(),`Builder and merchant lists cleared. Refresh the page to see empty lists.`);var $=new class{constructor(){this.googleSheetsUrl=r.SELECTION_RECORDING?.GOOGLE_SHEETS_URL||null,this.cachedSelections=null,this.cachedDeletedSelections=null,this.cacheTimestamp=null,this.deletedCacheTimestamp=null,this.cacheDuration=300*1e3}isStaffMode(){return f.isStaffMode()}async fetchSelections(e=!1){if(!this.googleSheetsUrl)return console.error(`❌ Google Sheets URL not configured`),[];if(e){if(this.cachedDeletedSelections&&this.deletedCacheTimestamp&&Date.now()-this.deletedCacheTimestamp<this.cacheDuration)return console.log(`📊 Using cached deleted selections`),this.cachedDeletedSelections}else if(this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log(`📊 Using cached selections`),this.cachedSelections;try{let t=f.getCurrentUser()?.email||``;console.log(`📊 Fetching ${e?`deleted `:``}selections...`);let n=new URL(this.googleSheetsUrl);n.searchParams.append(`action`,`getSelections`),n.searchParams.append(`monthsBack`,`0`),e&&n.searchParams.append(`deletedOnly`,`true`),t&&n.searchParams.append(`staffEmail`,t);let r=f.getSessionToken();r&&n.searchParams.append(`sessionToken`,r);let i=await fetch(n.toString(),{method:`GET`,headers:{Accept:`application/json`}});if(!i.ok)throw Error(`HTTP ${i.status}: ${i.statusText}`);let a=await i.json();if(a.success&&a.selections)return console.log(`✅ Fetched ${a.selections.length} ${e?`deleted `:``}selections`),e?(this.cachedDeletedSelections=a.selections,this.deletedCacheTimestamp=Date.now()):(this.cachedSelections=a.selections,this.cacheTimestamp=Date.now()),a.selections;throw Error(a.error||`Failed to fetch selections`)}catch(e){return console.error(`❌ Error fetching selections:`,e),[]}}searchSelections(e,t){if(!t||t.trim()===``)return e;let n=t.toLowerCase().trim();return e.filter(e=>{let t=(e.customerName||``).toLowerCase(),r=(e.customerProject||``).toLowerCase(),i=(e.date||``).toLowerCase();return t.includes(n)||r.includes(n)||i.includes(n)})}sortByDateDescending(e){return[...e].sort((e,t)=>{try{let n=this.parseDateValue(e.date,e.time);return this.parseDateValue(t.date,t.time)-n}catch{return 0}})}parseDateValue(e,t){if(!e)return new Date(0);let n=String(e),r=null,i=n.split(`/`);if(i.length===3&&i[0].length<=2)r=new Date(parseInt(i[2]),parseInt(i[1])-1,parseInt(i[0]));else if(r=new Date(n),isNaN(r.getTime())||r.getFullYear()<=1900)return new Date(0);if(t){let e=this.extractTimeString(t);if(e){let t=e.split(`:`);t.length>=2&&(r.setHours(parseInt(t[0])||0),r.setMinutes(parseInt(t[1])||0))}}return r}extractTimeString(e){if(!e)return``;let t=String(e),n=t.match(/^(\d{1,2}:\d{2})(:\d{2})?$/);if(n)return n[1];let r=t.match(/(\d{1,2}:\d{2}):\d{2}/);if(r)return r[1];let i=t.match(/(\d{1,2}:\d{2})/);return i?i[1]:``}async loadSelection(e){try{console.log(`📦 Loading selection:`,e);let t=[];if(e.productsJson)try{t=JSON.parse(e.productsJson)}catch(e){return console.error(`❌ Failed to parse products JSON:`,e),{success:!1,error:`Failed to parse saved products`}}if(t.length===0)return{success:!1,error:`No products found in this selection`};let n=[],r=W.getAllProducts(),i=[];for(let e of t){let t=r.find(t=>t.OrderCode===e.orderCode||t.orderCode===e.orderCode),a;t?a=t:(console.warn(`⚠️ Product ${e.orderCode} not found in catalog, using saved data`),i.push(e.orderCode),a={OrderCode:e.orderCode,Description:e.description||`Product no longer in catalogue`,RRP_INCGST:e.priceIncGst||`0.00`,Image_URL:`assets/no-image.png`,_notInCatalog:!0});let o={id:this.generateId(),product:a,notes:e.notes||``,room:e.room||`Blank`,quantity:e.quantity||1,timestamp:Date.now()};n.push(o)}X.setSelectedProducts(n),console.log(`✅ Loaded ${n.length} products`),this.loadCustomerDetails(e);let a={success:!0,productsLoaded:n.length,notFoundProducts:i};return i.length>0&&(a.warning=`${i.length} product(s) are no longer in the catalogue`),a}catch(e){return console.error(`❌ Error loading selection:`,e),{success:!1,error:e.message}}}loadCustomerDetails(e){let t={customerName:e.customerName||``,customerEmail:e.customerEmail||``,customerPhone:this.cleanPhoneNumber(e.customerPhone),projectName:e.customerProject||``,projectAddress:e.customerAddress||``,projectNotes:e.projectNotes||``,customerType:e.customerType||null,builderName:e.builderName||``,merchantName:e.merchantName||``,hearAboutUs:e.hearAboutUs?e.hearAboutUs.split(`, `).filter(e=>e):[],referralBuilder:e.referralBuilder||``,referralMerchant:e.referralMerchant||``};Q.updateLeadData(t);try{localStorage.setItem(`loadedSelectionCustomerData`,JSON.stringify(t)),console.log(`✅ Customer details saved to localStorage`)}catch(e){console.warn(`⚠️ Could not save customer data to localStorage:`,e)}console.log(`✅ Customer details loaded into lead tracker`)}generateId(){return`sel_`+Date.now().toString(36)+`_`+Math.random().toString(36).substr(2,9)}cleanPhoneNumber(e){if(!e)return``;let t=String(e).trim();return t.startsWith(`'`)&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t=`0`+t),t}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,this.cachedDeletedSelections=null,this.deletedCacheTimestamp=null}async deleteSelections(e){if(!this.googleSheetsUrl)return console.error(`❌ Google Sheets URL not configured`),{success:!1,error:`Google Sheets URL not configured`};if(!e||e.length===0)return{success:!1,error:`No selections provided`};try{console.log(`🗑️ Deleting ${e.length} selection(s)...`);let t=e.map(e=>({date:e.date||``,time:e.time||``,customerName:e.customerName||``,customerEmail:e.customerEmail||``})),n=new URL(this.googleSheetsUrl),r=await fetch(n.toString(),{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:new URLSearchParams({data:JSON.stringify({action:`deleteSelections`,selections:t})})});if(!r.ok)throw Error(`HTTP ${r.status}: ${r.statusText}`);let i=await r.json();if(i.success)return console.log(`✅ Deleted ${i.deletedCount||e.length} selection(s)`),this.clearCache(),{success:!0,deletedCount:i.deletedCount||e.length};throw Error(i.error||`Failed to delete selections`)}catch(e){return console.error(`❌ Error deleting selections:`,e),{success:!1,error:e.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return console.error(`❌ Google Sheets URL not configured`),{success:!1,error:`Google Sheets URL not configured`};if(!e||e.length===0)return{success:!1,error:`No selections provided`};try{console.log(`♻️ Restoring ${e.length} selection(s)...`);let t=e.map(e=>({date:e.date||``,time:e.time||``,customerName:e.customerName||``,customerEmail:e.customerEmail||``})),n=new URL(this.googleSheetsUrl),r=await fetch(n.toString(),{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:new URLSearchParams({data:JSON.stringify({action:`restoreSelections`,selections:t})})});if(!r.ok)throw Error(`HTTP ${r.status}: ${r.statusText}`);let i=await r.json();if(i.success)return console.log(`✅ Restored ${i.restoredCount||e.length} selection(s)`),this.clearCache(),{success:!0,restoredCount:i.restoredCount||e.length};throw Error(i.error||`Failed to restore selections`)}catch(e){return console.error(`❌ Error restoring selections:`,e),{success:!1,error:e.message}}}formatDisplayDateShort(e){let t=this.formatDisplayDate(e);if(!t)return``;let n=t.split(`/`);return n.length===3&&n[2].length===4?`${n[0]}/${n[1]}/${n[2].substring(2)}`:t}formatDisplayTime(e){let t=this.extractTimeString(e);if(!t)return``;let n=t.split(`:`);return n.length>=2?`${n[0].padStart(2,`0`)}:${n[1].padStart(2,`0`)}`:t}formatDisplayDate(e){if(!e)return``;let t=String(e);try{let e=t.split(`/`);if(e.length===3&&e[0].length<=2)return`${e[0].padStart(2,`0`)}/${e[1].padStart(2,`0`)}/${e[2]}`;let n=new Date(t);if(!isNaN(n.getTime())){let e=n.getFullYear();if(e>1900&&e<2100)return`${String(n.getDate()).padStart(2,`0`)}/${String(n.getMonth()+1).padStart(2,`0`)}/${e}`}let r=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],i=t.match(/(\w{3})\s+(\d{1,2})\s+(\d{4})/);if(i){let e=r.indexOf(i[1]);if(e!==-1)return`${i[2].padStart(2,`0`)}/${String(e+1).padStart(2,`0`)}/${i[3]}`}}catch(e){console.warn(`Date parsing error:`,e)}return t}};typeof window<`u`&&(window.selectionLoader=$);var Wt=new class{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery=``,this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}isStaffMode(){return f.isStaffMode()}async show(e){this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,this.setLoadingState(!0),await this.fetchAndRenderSelections()}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await $.fetchSelections(this.showDeletedMode),this.allSelections=$.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error(`Error fetching selections:`,e),this.showError(`Failed to load selections. Please try again.`)}finally{this.setLoadingState(!1)}}hide(){let e=document.getElementById(`selection-picker-modal`);e&&e.remove(),this.isVisible=!1}createModalHTML(){let e=document.getElementById(`selection-picker-modal`);e&&e.remove();let t=this.isStaffMode(),n=t?`<th class="col-checkbox"><input type="checkbox" id="selection-select-all" title="Select all"></th>`:``,r=t?`<label class="show-deleted-toggle">
           <input type="checkbox" id="selection-show-deleted" ${this.showDeletedMode?`checked`:``}>
           <span>Show deleted</span>
         </label>`:``,i=`
      <div id="selection-picker-modal" class="modal selection-picker-fullpage" style="display: flex; z-index: 1000;">
        <div class="modal-content selection-picker-content${this.showDeletedMode?` showing-deleted`:``}">
          <div class="selection-picker-header">
            <h3>${this.showDeletedMode?`Deleted Selections (Bin)`:`Load Previous Selection`}</h3>
            <button type="button" class="modal-close-btn" id="selection-picker-close">&times;</button>
          </div>

          <div class="selection-picker-filters">
            <div class="selection-picker-search">
              <input type="text" 
                     id="selection-search-input" 
                     class="form-input" 
                     placeholder="Search customer, project or date..."
                     autocomplete="off">
              <div class="selection-search-icon">🔍</div>
            </div>
            <!-- Staff filter removed - users only see their own selections -->
          </div>

          <div class="selection-picker-info">
            <span id="selection-count-info">Loading...</span>
            ${r}
          </div>

          <div class="selection-picker-body">
            <div id="selection-picker-loading" class="selection-picker-loading">
              <div class="spinner"></div>
              <p>Loading previous selections...</p>
            </div>

            <div id="selection-picker-error" class="selection-picker-error" style="display: none;">
              <p id="selection-error-message"></p>
              <button type="button" class="secondary-btn" id="selection-retry-btn">Retry</button>
            </div>

            <div id="selection-picker-empty" class="selection-picker-empty" style="display: none;">
              <p>No selections found.</p>
            </div>

            <div id="selection-picker-table-container" class="selection-picker-table-container" style="display: none;">
              <table class="selection-picker-table${t?` staff-mode`:``}">
                <thead>
                  <tr>
                    ${n}
                    <th class="col-datetime">Date/Time</th>
                    <th class="col-customer-project">Customer / Project</th>
                  </tr>
                </thead>
                <tbody id="selection-picker-tbody">
                  <!-- Rows will be inserted here -->
                </tbody>
              </table>
            </div>
          </div>

          <div class="selection-picker-footer">
            <button type="button" id="selection-picker-cancel" class="secondary-btn">Cancel</button>
            ${t&&!this.showDeletedMode?`<button type="button" id="selection-delete-btn" class="danger-btn-text" style="display: none;">Delete (0)</button>`:``}
            ${t&&!this.showDeletedMode?`<button type="button" id="selection-load-btn" class="primary-btn" style="display: none;">Load Selection</button>`:``}
            ${t&&this.showDeletedMode?`<button type="button" id="selection-restore-btn" class="restore-btn" style="display: none;">Restore Selected (0)</button>`:``}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i)}attachEventListeners(){let e=document.getElementById(`selection-picker-modal`),t=document.getElementById(`selection-picker-close`),n=document.getElementById(`selection-picker-cancel`),r=document.getElementById(`selection-search-input`),i=document.getElementById(`selection-retry-btn`),a=document.getElementById(`selection-select-all`),o=document.getElementById(`selection-delete-btn`),s=document.getElementById(`selection-restore-btn`),c=document.getElementById(`selection-show-deleted`);t&&(t.onclick=()=>this.hide()),n&&(n.onclick=()=>this.hide()),e&&(e.onclick=t=>{t.target===e&&this.hide()}),r&&(r.oninput=e=>{this.currentSearchQuery=e.target.value,this.selectedItems.clear(),this.filterAndRender()}),i&&(i.onclick=()=>{$.clearCache(),this.show(this.onLoadCallback)}),a&&(a.onchange=e=>{this.toggleSelectAll(e.target.checked)}),o&&(o.onclick=()=>{this.confirmDeleteSelected()});let l=document.getElementById(`selection-load-btn`);l&&(l.onclick=()=>{this.loadSelectedItem()}),s&&(s.onclick=()=>{this.confirmRestoreSelected()}),c&&(c.onchange=async e=>{this.showDeletedMode=e.target.checked;let t=this.currentSearchQuery;$.clearCache(),this.createModalHTML(),this.attachEventListeners();let n=document.getElementById(`selection-search-input`);n&&(n.value=t),this.currentSearchQuery=t,await this.fetchAndRenderSelections()})}setLoadingState(e){let t=document.getElementById(`selection-picker-loading`),n=document.getElementById(`selection-picker-table-container`),r=document.getElementById(`selection-picker-error`),i=document.getElementById(`selection-picker-empty`);t&&(t.style.display=e?`flex`:`none`),n&&(n.style.display=e?`none`:`block`),r&&(r.style.display=`none`),i&&(i.style.display=`none`)}showError(e){let t=document.getElementById(`selection-picker-loading`),n=document.getElementById(`selection-picker-table-container`),r=document.getElementById(`selection-picker-error`),i=document.getElementById(`selection-error-message`),a=document.getElementById(`selection-picker-empty`);t&&(t.style.display=`none`),n&&(n.style.display=`none`),r&&(r.style.display=`flex`),i&&(i.textContent=e),a&&(a.style.display=`none`)}filterAndRender(){let e=[...this.allSelections],t=f.getCurrentUser();if(t&&t.email){let n=t.email.toLowerCase();e=e.filter(e=>{let t=(e.loggedInAs||``).toLowerCase(),r=(e.staffEmail||``).toLowerCase();return t===n||r===n})}this.currentSearchQuery&&(e=$.searchSelections(e,this.currentSearchQuery)),this.filteredSelections=e,this.renderSelectionTable()}renderSelectionTable(){let e=document.getElementById(`selection-picker-tbody`),t=document.getElementById(`selection-picker-table-container`),n=document.getElementById(`selection-picker-empty`),r=document.getElementById(`selection-count-info`),i=this.isStaffMode();if(!e)return;if(r){let e=this.filteredSelections.length;this.currentSearchQuery?r.textContent=`Showing ${e} selection${e===1?``:`s`}`:r.textContent=`${e} selection${e===1?``:`s`} found`}if(this.filteredSelections.length===0){t&&(t.style.display=`none`),n&&(n.style.display=`block`,this.currentSearchQuery?n.querySelector(`p`).textContent=`No selections found matching "${this.currentSearchQuery}"`:n.querySelector(`p`).textContent=`No selections found.`),this.updateActionButton();return}t&&(t.style.display=`block`),n&&(n.style.display=`none`);let a=this.selectedItems.size;e.innerHTML=this.filteredSelections.map((e,t)=>{let n=$.formatDisplayDateShort(e.date),r=$.formatDisplayTime(e.time),o=this.escapeHtml(e.customerName||`Unknown`),s=this.escapeHtml(e.customerProject||``),c=this.selectedItems.has(t),l=this.showDeletedMode,u=i?`<td class="col-checkbox"><input type="checkbox" class="selection-checkbox" data-index="${t}" ${c?`checked`:``}></td>`:``,d=`selection-row`;return c&&(this.showDeletedMode?d+=` selected-for-restore`:a===1?d+=` selected-for-load`:d+=` selected-for-deletion`),l&&(d+=` deleted-item`),`
        <tr class="${d}" data-index="${t}">
          ${u}
          <td class="col-datetime">${n} ${r}</td>
          <td class="col-customer-project">
            <div class="customer-name">${o}</div>
            ${s?`<div class="project-name">${s}</div>`:``}
          </td>
        </tr>
      `}).join(``),e.querySelectorAll(`.selection-row`).forEach(e=>{e.onclick=t=>{if(t.target.type===`checkbox`||this.showDeletedMode)return;let n=parseInt(e.getAttribute(`data-index`),10);!isNaN(n)&&this.filteredSelections[n]&&this.confirmAndLoadSelection(this.filteredSelections[n])}}),i&&e.querySelectorAll(`.selection-checkbox`).forEach(e=>{e.onchange=t=>{let n=parseInt(e.getAttribute(`data-index`),10);this.toggleSelection(n,t.target.checked)}}),this.updateActionButton(),this.updateSelectAllCheckbox()}loadSelectedItem(){if(this.selectedItems.size!==1)return;let e=[...this.selectedItems][0],t=this.filteredSelections[e];t&&this.confirmAndLoadSelection(t)}confirmAndLoadSelection(e){let t=X.getSelectedProducts(),n=t.length>0,r=e.customerName||`Unknown`,i=e.totalProducts||0,a=$.formatDisplayDateShort(e.date);this.showConfirmationModal(r,a,i,n,t.length,e)}showConfirmationModal(e,t,n,r,i,a){let o=r?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">WARNING: This will replace your current selection of ${i} product(s).</span>
         </div>`:``,s=`
      <div id="selection-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Confirm Load Selection</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Load selection for <strong>"${this.escapeHtml(e)}"</strong> from ${t}?
          </p>
          <p style="margin-bottom: 0; color: #666;">
            This selection contains ${n} product${n===1?``:`s`}.
          </p>
          ${o}
          <div class="modal-actions" style="margin-top: 24px;">
            <button type="button" id="confirm-cancel-btn" class="secondary-btn">Cancel</button>
            <button type="button" id="confirm-load-btn" class="primary-btn">Load Selection</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,s);let c=document.getElementById(`selection-confirm-modal`),l=document.getElementById(`confirm-cancel-btn`),u=document.getElementById(`confirm-load-btn`);l.onclick=()=>{c.remove()},u.onclick=async()=>{u.disabled=!0,u.textContent=`Loading...`;try{let e=await $.loadSelection(a);c.remove(),this.hide(),e.success?this.showResultModal(!0,e.productsLoaded,e.warning):this.showResultModal(!1,0,e.error)}catch(e){console.error(`Error loading selection:`,e),c.remove(),this.showResultModal(!1,0,e.message)}},c.onclick=e=>{e.target===c&&c.remove()}}showResultModal(e,t,n){let r=`
      <div id="selection-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${e?`✅`:`❌`}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${e?`Selection Loaded`:`Load Failed`}</h3>
          <p style="margin-bottom: 0; color: #555;">${e?`Successfully loaded ${t} product${t===1?``:`s`}.`:`Failed to load selection.`}</p>
          ${n&&e?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">${this.escapeHtml(n)}</span>
         </div>`:``}
          ${n&&!e?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(n)}</p>`:``}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,r);let i=document.getElementById(`selection-result-modal`),a=document.getElementById(`result-ok-btn`);a.onclick=()=>{i.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t})},i.onclick=n=>{n.target===i&&(i.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t}))}}toggleSelection(e,t){let n=this.selectedItems.size;t?this.selectedItems.add(e):this.selectedItems.delete(e);let r=this.selectedItems.size;n===1&&r!==1||n!==1&&r===1?this.updateSelectedRowStyles():this.updateRowStyle(e,t),this.updateActionButton(),this.updateSelectAllCheckbox()}updateRowStyle(e,t){let n=document.querySelector(`.selection-row[data-index="${e}"]`);if(n&&(n.classList.remove(`selected-for-load`,`selected-for-deletion`,`selected-for-restore`),t)){let e=this.selectedItems.size;this.showDeletedMode?n.classList.add(`selected-for-restore`):e===1?n.classList.add(`selected-for-load`):n.classList.add(`selected-for-deletion`)}}updateSelectedRowStyles(){let e=this.selectedItems.size;document.querySelectorAll(`.selection-row`).forEach(t=>{let n=parseInt(t.getAttribute(`data-index`),10),r=this.selectedItems.has(n);t.classList.remove(`selected-for-load`,`selected-for-deletion`,`selected-for-restore`),r&&(this.showDeletedMode?t.classList.add(`selected-for-restore`):e===1?t.classList.add(`selected-for-load`):t.classList.add(`selected-for-deletion`))})}toggleSelectAll(e){this.selectedItems.clear(),e&&this.filteredSelections.forEach((e,t)=>{this.selectedItems.add(t)}),this.renderSelectionTable()}updateActionButton(){let e=document.getElementById(`selection-delete-btn`),t=document.getElementById(`selection-load-btn`),n=document.getElementById(`selection-restore-btn`),r=this.selectedItems.size;e&&(r>0?(e.style.display=`inline-flex`,e.textContent=`Delete (${r})`):e.style.display=`none`),t&&(r>0?(t.style.display=`inline-flex`,r===1?(t.disabled=!1,t.textContent=`Load Selection`):(t.disabled=!0,t.textContent=`Load Selection`)):t.style.display=`none`),n&&(r>0?(n.style.display=`inline-flex`,n.textContent=`Restore (${r})`):n.style.display=`none`)}updateSelectAllCheckbox(){let e=document.getElementById(`selection-select-all`);if(!e)return;let t=this.filteredSelections.length,n=this.selectedItems.size;t===0||n===0?(e.checked=!1,e.indeterminate=!1):n===t?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=!0)}confirmDeleteSelected(){let e=this.selectedItems.size;if(e===0)return;let t=[];this.selectedItems.forEach(e=>{this.filteredSelections[e]&&t.push(this.filteredSelections[e])});let n=t.map(e=>e.customerName||`Unknown`).slice(0,3).join(`, `),r=t.length>3?` and ${t.length-3} more...`:``,i=`
      <div id="selection-delete-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Move to Bin</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Are you sure you want to delete <strong>${e}</strong> selection${e===1?``:`s`}?
          </p>
          <p style="margin-bottom: 0; color: #666; font-size: 14px;">
            ${this.escapeHtml(n)}${r}
          </p>
          <div style="background: #e0f2fe; border: 1px solid #0284c7; border-radius: 8px; padding: 12px; margin-top: 16px;">
            <span style="font-size: 16px; margin-right: 8px;">🗑️</span>
            <span style="color: #0369a1;">This selection will be moved to the bin and permanently removed in 30 days.</span>
          </div>
          <div class="modal-actions" style="margin-top: 24px;">
            <button type="button" id="delete-cancel-btn" class="secondary-btn">Cancel</button>
            <button type="button" id="delete-confirm-btn" class="danger-btn">Move to Bin</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.getElementById(`selection-delete-confirm-modal`),o=document.getElementById(`delete-cancel-btn`),s=document.getElementById(`delete-confirm-btn`);o.onclick=()=>{a.remove()},s.onclick=async()=>{s.disabled=!0,s.textContent=`Deleting...`;try{let e=await $.deleteSelections(t);if(a.remove(),e.success){this.selectedItems.clear(),$.clearCache();let n=new Set(t);this.allSelections=this.allSelections.filter(e=>!n.has(e)),this.filteredSelections=this.filteredSelections.filter(e=>!n.has(e)),this.renderSelectionTable(),this.showActionResultModal(`delete`,!0,e.deletedCount)}else this.showActionResultModal(`delete`,!1,0,e.error)}catch(e){console.error(`Error deleting selections:`,e),a.remove(),this.showActionResultModal(`delete`,!1,0,e.message)}},a.onclick=e=>{e.target===a&&a.remove()}}confirmRestoreSelected(){let e=this.selectedItems.size;if(e===0)return;let t=[];this.selectedItems.forEach(e=>{this.filteredSelections[e]&&t.push(this.filteredSelections[e])});let n=t.map(e=>e.customerName||`Unknown`).slice(0,3).join(`, `),r=t.length>3?` and ${t.length-3} more...`:``,i=`
      <div id="selection-restore-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Restore Selections</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Restore <strong>${e}</strong> selection${e===1?``:`s`} from the bin?
          </p>
          <p style="margin-bottom: 0; color: #666; font-size: 14px;">
            ${this.escapeHtml(n)}${r}
          </p>
          <div style="background: #dcfce7; border: 1px solid #16a34a; border-radius: 8px; padding: 12px; margin-top: 16px;">
            <span style="font-size: 16px; margin-right: 8px;">♻️</span>
            <span style="color: #166534;">These selections will be restored and visible again.</span>
          </div>
          <div class="modal-actions" style="margin-top: 24px;">
            <button type="button" id="restore-cancel-btn" class="secondary-btn">Cancel</button>
            <button type="button" id="restore-confirm-btn" class="restore-btn">Restore</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.getElementById(`selection-restore-confirm-modal`),o=document.getElementById(`restore-cancel-btn`),s=document.getElementById(`restore-confirm-btn`);o.onclick=()=>{a.remove()},s.onclick=async()=>{s.disabled=!0,s.textContent=`Restoring...`;try{let e=await $.restoreSelections(t);if(a.remove(),e.success){this.selectedItems.clear(),$.clearCache();let n=new Set(t);this.allSelections=this.allSelections.filter(e=>!n.has(e)),this.filteredSelections=this.filteredSelections.filter(e=>!n.has(e)),this.renderSelectionTable(),this.showActionResultModal(`restore`,!0,e.restoredCount)}else this.showActionResultModal(`restore`,!1,0,e.error)}catch(e){console.error(`Error restoring selections:`,e),a.remove(),this.showActionResultModal(`restore`,!1,0,e.message)}},a.onclick=e=>{e.target===a&&a.remove()}}showActionResultModal(e,t,n,r){let i=e===`delete`,a=`
      <div id="selection-action-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${t?`✅`:`❌`}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${t?i?`Moved to Bin`:`Restored Successfully`:i?`Deletion Failed`:`Restore Failed`}</h3>
          <p style="margin-bottom: 0; color: #555;">${t?i?`Successfully moved ${n} selection${n===1?``:`s`} to the bin.`:`Successfully restored ${n} selection${n===1?``:`s`}.`:i?`Failed to delete selections.`:`Failed to restore selections.`}</p>
          ${r?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(r)}</p>`:``}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="action-result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,a);let o=document.getElementById(`selection-action-result-modal`),s=document.getElementById(`action-result-ok-btn`);s.onclick=()=>{o.remove()},o.onclick=e=>{e.target===o&&o.remove()}}escapeHtml(e){if(typeof e!=`string`)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}};typeof window<`u`&&(window.selectionPicker=Wt);var Gt=new class{constructor(){this.isVisible=!1,this.onCompleteCallback=null,this.onCancelCallback=null,this.isStaffMode=!1}checkStaffMode(){return this.isStaffMode=f.isStaffMode(),console.log(`📱 Staff mode: ${this.isStaffMode}`),this.isStaffMode}show(e,t){window.leadWizardInstance=this,this.onCompleteCallback=e,this.onCancelCallback=t,this.checkStaffMode(),this.createFormHTML(),this.attachFormListeners(),this.loadFormData(),this.loadBuilderMerchantOptions(),this.isVisible=!0}hide(){let e=document.getElementById(`lead-wizard-modal`);e&&e.remove(),this.isVisible=!1}createFormHTML(){let e=document.getElementById(`lead-wizard-modal`);e&&e.remove();let t=`
      <div id="lead-wizard-modal" class="modal" style="display: block; z-index: 1000;">
        <div class="modal-content lead-wizard-content lead-form-single ${this.isStaffMode?`staff-mode`:``}">
          <div class="lead-wizard-scroll-area" style="flex: 1 1 auto; overflow-y: auto; min-height: 0; -webkit-overflow-scrolling: touch;">
            <div class="lead-wizard-header">
              <div class="wizard-logo-container">
                <img src="assets/seima-logo.png" alt="Seima" class="wizard-logo">
              </div>
              <p class="wizard-subtitle">Complete details to receive your selection details.</p>
              <p class="required-note"><span class="required-asterisk">*</span> required input</p>
            </div>

            <div class="lead-wizard-body">
              <div id="wizard-form-content" class="wizard-form-content">
                ${this.getFormHTML()}
              </div>
            </div>
          </div>

          <div class="lead-wizard-footer" style="flex-shrink: 0;">
            <button type="button" id="wizard-cancel-btn" class="secondary-btn" onclick="window.leadWizardInstance && window.leadWizardInstance.cancel();">Cancel</button>
            <button type="button" id="wizard-send-btn" class="primary-btn" onclick="window.leadWizardInstance && window.leadWizardInstance.submitForm();">Send Email</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,t)}getFormHTML(){return`
      <!-- Section 1: Customer Details (always visible) -->
      <div class="form-section">
        <div class="section-title">Customer Details</div>

        <div class="form-row-2col">
          <div class="form-field">
            <label class="form-label">Name <span class="required-asterisk">*</span></label>
            <input type="text" id="customer-name" class="form-input" required maxlength="60" placeholder="Customer name">
          </div>
          <div class="form-field">
            <label class="form-label">Email <span class="required-asterisk">*</span></label>
            <input type="email" id="customer-email" class="form-input" required maxlength="80" placeholder="Email address">
          </div>
        </div>

        <div class="form-row-2col">
          <div class="form-field">
            <label class="form-label">Phone <span class="optional">(optional)</span></label>
            <input type="tel" id="customer-phone" class="form-input" maxlength="20" placeholder="Phone number">
          </div>
          <div class="form-field">
            <label class="form-label">Project <span class="required-asterisk">*</span></label>
            <input type="text" id="project-name" class="form-input" required maxlength="60" placeholder="Project name">
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Address <span class="optional">(optional)</span></label>
          <input type="text" id="project-address" class="form-input" maxlength="100" placeholder="Project address">
        </div>

        <div class="form-field">
          <label class="form-label">Notes <span class="optional">(optional)</span></label>
          <textarea id="project-notes" class="form-input" rows="2" maxlength="500" placeholder="Additional details..."></textarea>
        </div>
      </div>

      <!-- Section 2: Customer Type (staff-only) -->
      <div class="form-section" data-staff-only>
        <div class="section-title">Customer Type <span class="required-asterisk">*</span></div>

        <div class="radio-grid" id="customer-type-grid">
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Builder">
            <span>Builder</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Merchant">
            <span>Merchant</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Client of Builder/Merchant">
            <span>Client of B/M</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Architect">
            <span>Architect</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Designer">
            <span>Designer</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Plumber">
            <span>Plumber</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Developer">
            <span>Developer</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Consumer">
            <span>Consumer</span>
          </label>
          <label class="radio-item">
            <input type="radio" name="customer-type" value="Other">
            <span>Other</span>
          </label>
        </div>

        <div id="customer-type-conditional" class="conditional-fields">
          <div id="builder-dropdown" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Builder Name</label>
            <div class="select-with-add">
              <select id="builder-name-select" class="form-input">
                <option value="">Select builder...</option>
                <option value="Other">Other (specify below)</option>
              </select>
              <button type="button" id="add-builder-btn" class="add-btn" title="Add new builder">+</button>
            </div>
            <div id="builder-other-input" class="form-field" style="display: none; margin-top: 8px;">
              <input type="text" id="builder-other-name" class="form-input" placeholder="Enter builder name..." maxlength="50">
            </div>
          </div>

          <div id="merchant-dropdown" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Merchant Name</label>
            <div class="select-with-add">
              <select id="merchant-name-select" class="form-input">
                <option value="">Select merchant...</option>
                <option value="Other">Other (specify below)</option>
              </select>
              <button type="button" id="add-merchant-btn" class="add-btn" title="Add new merchant">+</button>
            </div>
            <div id="merchant-other-input" class="form-field" style="display: none; margin-top: 8px;">
              <input type="text" id="merchant-other-name" class="form-input" placeholder="Enter merchant name..." maxlength="50">
            </div>
          </div>

          <div id="other-type-input" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Please specify</label>
            <input type="text" id="customer-type-other" class="form-input" placeholder="Enter customer type..." maxlength="50">
          </div>
        </div>
      </div>

      <!-- Section 3: How They Found Us (staff-only) -->
      <div class="form-section" data-staff-only>
        <div class="section-title">How did you hear about us? <span class="required-asterisk">*</span></div>

        <div class="checkbox-grid-compact">
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Builder Referral" class="hear-about-checkbox">
            <span>Builder Referral</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Merchant Referral" class="hear-about-checkbox">
            <span>Merchant Referral</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Architect/Designer Referral" class="hear-about-checkbox">
            <span>Architect/Designer</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Google Search" class="hear-about-checkbox">
            <span>Google Search</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Social Media" class="hear-about-checkbox">
            <span>Social Media</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Trade Show/Exhibition" class="hear-about-checkbox">
            <span>Trade Show</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Website" class="hear-about-checkbox">
            <span>Website</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Word of Mouth/Friend" class="hear-about-checkbox">
            <span>Word of Mouth</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Previous Customer" class="hear-about-checkbox">
            <span>Previous Customer</span>
          </label>
          <label class="checkbox-item-compact">
            <input type="checkbox" value="Other" class="hear-about-checkbox">
            <span>Other</span>
          </label>
        </div>

        <div id="hear-about-conditional" class="conditional-fields">
          <div id="builder-referral-dropdown" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Which Builder?</label>
            <div class="select-with-add">
              <select id="referral-builder-select" class="form-input">
                <option value="">Select builder...</option>
                <option value="Other">Other (specify below)</option>
              </select>
              <button type="button" id="add-referral-builder-btn" class="add-btn" title="Add new builder">+</button>
            </div>
            <div id="referral-builder-other-input" class="form-field" style="display: none; margin-top: 8px;">
              <input type="text" id="referral-builder-other-name" class="form-input" placeholder="Enter builder name..." maxlength="50">
            </div>
          </div>

          <div id="merchant-referral-dropdown" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Which Merchant?</label>
            <div class="select-with-add">
              <select id="referral-merchant-select" class="form-input">
                <option value="">Select merchant...</option>
                <option value="Other">Other (specify below)</option>
              </select>
              <button type="button" id="add-referral-merchant-btn" class="add-btn" title="Add new merchant">+</button>
            </div>
            <div id="referral-merchant-other-input" class="form-field" style="display: none; margin-top: 8px;">
              <input type="text" id="referral-merchant-other-name" class="form-input" placeholder="Enter merchant name..." maxlength="50">
            </div>
          </div>

          <div id="hear-about-other-input" class="form-field conditional-field" style="display: none;">
            <label class="form-label">Please specify</label>
            <input type="text" id="hear-about-other" class="form-input" placeholder="How did you hear about us?" maxlength="100">
          </div>
        </div>
      </div>

      <!-- Section 4: Options (always visible) -->
      <div class="form-section form-section-options">
        <div class="options-row">
          <label class="checkbox-label-inline">
            <input type="checkbox" id="exclude-price-checkbox">
            <span>Exclude pricing</span>
          </label>
          <label class="checkbox-label-inline">
            <input type="checkbox" id="export-csv-checkbox" checked>
            <span>Include CSV</span>
          </label>
        </div>
      </div>

      <div id="form-error" class="form-error" style="display: none;"></div>
    `}attachFormListeners(){console.log(`📧 Attaching form listeners...`);let e=document.getElementById(`wizard-send-btn`),t=document.getElementById(`wizard-cancel-btn`),n=document.getElementById(`lead-wizard-modal`);console.log(`📧 Send button found:`,!!e),console.log(`📧 Cancel button found:`,!!t),console.log(`📧 Modal found:`,!!n),e?(e.onclick=e=>(e.preventDefault(),e.stopPropagation(),console.log(`📧 Send button clicked`),this.submitForm(),!1),console.log(`✅ Send button handler attached`)):console.error(`❌ Send button not found`),t&&(t.onclick=e=>(e.preventDefault(),e.stopPropagation(),console.log(`📧 Cancel button clicked`),this.cancel(),!1),console.log(`✅ Cancel button handler attached`)),n&&n.addEventListener(`click`,e=>{e.target===n&&this.cancel()}),this.attachCustomerDetailsListeners(),this.isStaffMode&&(this.attachCustomerTypeListeners(),this.attachHearAboutListeners()),this.attachOptionsListeners(),this.updateSendButtonState(),console.log(`✅ All form listeners attached`)}attachCustomerDetailsListeners(){[{id:`customer-name`,key:`customerName`},{id:`customer-email`,key:`customerEmail`},{id:`customer-phone`,key:`customerPhone`},{id:`project-name`,key:`projectName`},{id:`project-address`,key:`projectAddress`},{id:`project-notes`,key:`projectNotes`}].forEach(({id:e,key:t})=>{let n=document.getElementById(e);n&&n.addEventListener(`input`,e=>{Q.updateLeadData({[t]:e.target.value}),this.updateSendButtonState()})})}attachCustomerTypeListeners(){let e=document.querySelectorAll(`input[name="customer-type"]`),t=document.getElementById(`builder-dropdown`),n=document.getElementById(`merchant-dropdown`),r=document.getElementById(`other-type-input`);e.forEach(e=>{e.addEventListener(`change`,e=>{let i=e.target.value;t.style.display=`none`,n.style.display=`none`,r.style.display=`none`,i===`Builder`?t.style.display=`block`:i===`Merchant`?n.style.display=`block`:i===`Client of Builder/Merchant`?(t.style.display=`block`,n.style.display=`block`):i===`Other`&&(r.style.display=`block`),Q.updateLeadData({customerType:i}),this.updateSendButtonState()})});let i=document.getElementById(`builder-name-select`);i&&i.addEventListener(`change`,e=>{let t=e.target.value,n=document.getElementById(`builder-other-input`);t===`Other`?n.style.display=`block`:(n.style.display=`none`,Q.updateLeadData({builderName:t}))});let a=document.getElementById(`merchant-name-select`);a&&a.addEventListener(`change`,e=>{let t=e.target.value,n=document.getElementById(`merchant-other-input`);t===`Other`?n.style.display=`block`:(n.style.display=`none`,Q.updateLeadData({merchantName:t}))});let o=document.getElementById(`builder-other-name`);o&&o.addEventListener(`input`,e=>{Q.updateLeadData({builderName:e.target.value})});let s=document.getElementById(`merchant-other-name`);s&&s.addEventListener(`input`,e=>{Q.updateLeadData({merchantName:e.target.value})});let c=document.getElementById(`customer-type-other`);c&&c.addEventListener(`input`,e=>{Q.updateLeadData({customerTypeOther:e.target.value})});let l=document.getElementById(`add-builder-btn`);l&&l.addEventListener(`click`,()=>this.showAddBuilderModal());let u=document.getElementById(`add-merchant-btn`);u&&u.addEventListener(`click`,()=>this.showAddMerchantModal())}attachHearAboutListeners(){let e=document.querySelectorAll(`.hear-about-checkbox`),t=document.getElementById(`builder-referral-dropdown`),n=document.getElementById(`merchant-referral-dropdown`),r=document.getElementById(`hear-about-other-input`);e.forEach(i=>{i.addEventListener(`change`,()=>{let i=Array.from(e).filter(e=>e.checked).map(e=>e.value);t&&(t.style.display=i.includes(`Builder Referral`)?`block`:`none`),n&&(n.style.display=i.includes(`Merchant Referral`)?`block`:`none`),r&&(r.style.display=i.includes(`Other`)?`block`:`none`),Q.updateLeadData({hearAboutUs:i}),this.updateSendButtonState()})});let i=document.getElementById(`referral-builder-select`);i&&i.addEventListener(`change`,e=>{let t=e.target.value,n=document.getElementById(`referral-builder-other-input`);t===`Other`?n.style.display=`block`:(n.style.display=`none`,Q.updateLeadData({referralBuilder:t}))});let a=document.getElementById(`referral-merchant-select`);a&&a.addEventListener(`change`,e=>{let t=e.target.value,n=document.getElementById(`referral-merchant-other-input`);t===`Other`?n.style.display=`block`:(n.style.display=`none`,Q.updateLeadData({referralMerchant:t}))});let o=document.getElementById(`referral-builder-other-name`);o&&o.addEventListener(`input`,e=>{Q.updateLeadData({referralBuilder:e.target.value})});let s=document.getElementById(`referral-merchant-other-name`);s&&s.addEventListener(`input`,e=>{Q.updateLeadData({referralMerchant:e.target.value})});let c=document.getElementById(`hear-about-other`);c&&c.addEventListener(`input`,e=>{Q.updateLeadData({hearAboutUsOther:e.target.value})});let l=document.getElementById(`add-referral-builder-btn`);l&&l.addEventListener(`click`,()=>this.showAddBuilderModal(`referral`));let u=document.getElementById(`add-referral-merchant-btn`);u&&u.addEventListener(`click`,()=>this.showAddMerchantModal(`referral`))}attachOptionsListeners(){let e=document.getElementById(`exclude-price-checkbox`),t=document.getElementById(`export-csv-checkbox`);e&&e.addEventListener(`change`,e=>{let t=!!e.target.checked;Q.updateLeadData({excludePrice:t}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({excludePrice:t})}),t&&t.addEventListener(`change`,e=>{let t=!!e.target.checked;Q.updateLeadData({exportCsv:t}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({exportCsv:t})})}loadFormData(){let e=Q.getLeadData();try{let t=localStorage.getItem(`loadedSelectionCustomerData`);if(t){let n=JSON.parse(t);n&&typeof n==`object`&&(Q.updateLeadData(n),e={...e,...n},console.log(`📦 Loaded saved customer data from previous selection`))}}catch(e){console.warn(`⚠️ Could not load saved customer data:`,e)}let t=document.getElementById(`customer-name`),n=document.getElementById(`customer-email`),r=document.getElementById(`customer-phone`),i=document.getElementById(`project-name`),a=document.getElementById(`project-address`),o=document.getElementById(`project-notes`),s=document.getElementById(`exclude-price-checkbox`),c=document.getElementById(`export-csv-checkbox`);if(t&&e.customerName&&(t.value=e.customerName),n&&e.customerEmail&&(n.value=e.customerEmail),r&&e.customerPhone&&(r.value=e.customerPhone),i&&e.projectName&&(i.value=e.projectName),a&&e.projectAddress&&(a.value=e.projectAddress),o&&e.projectNotes&&(o.value=e.projectNotes),s&&e.excludePrice!==void 0&&(s.checked=e.excludePrice),c&&e.exportCsv!==void 0&&(c.checked=e.exportCsv),this.isStaffMode){if(e.customerType){let t=document.querySelector(`input[name="customer-type"][value="${e.customerType}"]`);t&&(t.checked=!0,t.dispatchEvent(new Event(`change`)))}if(e.builderName){let t=document.getElementById(`builder-name-select`);t&&setTimeout(()=>{t.querySelector(`option[value="${e.builderName}"]`)&&(t.value=e.builderName)},500)}if(e.merchantName){let t=document.getElementById(`merchant-name-select`);t&&setTimeout(()=>{t.querySelector(`option[value="${e.merchantName}"]`)&&(t.value=e.merchantName)},500)}if(e.hearAboutUs&&e.hearAboutUs.length>0){e.hearAboutUs.forEach(e=>{let t=document.querySelector(`.hear-about-checkbox[value="${e}"]`);t&&(t.checked=!0)});let t=document.querySelector(`.hear-about-checkbox:checked`);t&&t.dispatchEvent(new Event(`change`))}if(e.referralBuilder){let t=document.getElementById(`referral-builder-select`);t&&setTimeout(()=>{t.querySelector(`option[value="${e.referralBuilder}"]`)&&(t.value=e.referralBuilder)},500)}if(e.referralMerchant){let t=document.getElementById(`referral-merchant-select`);t&&setTimeout(()=>{t.querySelector(`option[value="${e.referralMerchant}"]`)&&(t.value=e.referralMerchant)},500)}}this.updateSendButtonState()}updateSendButtonState(){let e=document.getElementById(`wizard-send-btn`);if(!e)return;let t=this.validateForm();e.classList.toggle(`btn-invalid`,!t),console.log(`📧 Send button valid: ${t}`)}validateForm(){let e=Q.getLeadData();return!(!e.customerName||!e.customerEmail||!e.projectName||this.isStaffMode&&(!e.customerType||!e.hearAboutUs||e.hearAboutUs.length===0))}submitForm(){if(console.log(`📧 submitForm called`),!this.validateForm()){console.log(`❌ Form validation failed`),this.showValidationError();return}console.log(`✅ Form validation passed`);let e=document.getElementById(`exclude-price-checkbox`),t=document.getElementById(`export-csv-checkbox`);e&&Q.updateLeadData({excludePrice:!!e.checked}),t&&Q.updateLeadData({exportCsv:!!t.checked});let n=Q.getLeadData();console.log(`📧 Lead data ready to submit`),this.onCompleteCallback?(console.log(`📧 Calling completion callback`),this.onCompleteCallback(n)):console.error(`❌ No completion callback set`),this.hide()}showValidationError(){let e=document.getElementById(`form-error`);if(!e)return;let t=Q.getLeadData(),n=``;!t.customerName||!t.customerEmail||!t.projectName?n=`Please fill in all required fields (Name, Email, Project)`:this.isStaffMode&&!t.customerType?n=`Please select a customer type`:this.isStaffMode&&(!t.hearAboutUs||t.hearAboutUs.length===0)&&(n=`Please select how they heard about us`),e.textContent=n,e.style.display=`block`,setTimeout(()=>{e.style.display=`none`},3e3)}cancel(){this.onCancelCallback&&this.onCancelCallback(),this.hide()}async loadBuilderMerchantOptions(){if(this.isStaffMode)try{let[e,t]=await Promise.all([Q.getBuilderList(),Q.getMerchantList()]);this.updateBuilderDropdowns(e),this.updateMerchantDropdowns(t),console.log(`📋 Loaded ${e.length} builders and ${t.length} merchants`)}catch(e){console.error(`❌ Error loading builder/merchant options:`,e)}}updateBuilderDropdowns(e){let t=e=>String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`),n=e.map(e=>`<option value="${t(e)}">${t(e)}</option>`).join(``);[`builder-name-select`,`referral-builder-select`].forEach(e=>{let t=document.getElementById(e);if(t){let e=t.value;t.innerHTML=`<option value="">Select builder...</option>`+n+`<option value="Other">Other (specify below)</option>`,e&&e!==`Loading...`&&(t.value=e)}})}updateMerchantDropdowns(e){let t=e=>String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`),n=e.map(e=>`<option value="${t(e)}">${t(e)}</option>`).join(``);[`merchant-name-select`,`referral-merchant-select`].forEach(e=>{let t=document.getElementById(e);if(t){let e=t.value;t.innerHTML=`<option value="">Select merchant...</option>`+n+`<option value="Other">Other (specify below)</option>`,e&&e!==`Loading...`&&(t.value=e)}})}async refreshBuilderDropdowns(){try{let e=await Q.getBuilderList();this.updateBuilderDropdowns(e)}catch(e){console.error(`❌ Error refreshing builder dropdowns:`,e)}}async refreshMerchantDropdowns(){try{let e=await Q.getMerchantList();this.updateMerchantDropdowns(e)}catch(e){console.error(`❌ Error refreshing merchant dropdowns:`,e)}}showAddBuilderModal(e=`customer`){this.createAddModal(`Builder`,async t=>{let n=await Q.addCustomBuilder(t);if(n.success){await this.refreshBuilderDropdowns();let r=e===`referral`?`referral-builder-select`:`builder-name-select`,i=document.getElementById(r);i&&(i.value=n.name||t,i.dispatchEvent(new Event(`change`)))}else if(n.error===`Builder already exists`)return this.showDuplicateModal(`Builder`,n.existing,()=>{let t=e===`referral`?`referral-builder-select`:`builder-name-select`,r=document.getElementById(t);r&&(r.value=n.existing,r.dispatchEvent(new Event(`change`)))}),!1})}showAddMerchantModal(e=`customer`){this.createAddModal(`Merchant`,async t=>{let n=await Q.addCustomMerchant(t);if(n.success){await this.refreshMerchantDropdowns();let r=e===`referral`?`referral-merchant-select`:`merchant-name-select`,i=document.getElementById(r);i&&(i.value=n.name||t,i.dispatchEvent(new Event(`change`)))}else if(n.error===`Merchant already exists`)return this.showDuplicateModal(`Merchant`,n.existing,()=>{let t=e===`referral`?`referral-merchant-select`:`merchant-name-select`,r=document.getElementById(t);r&&(r.value=n.existing,r.dispatchEvent(new Event(`change`)))}),!1})}createAddModal(e,t){let n=`
      <div id="add-${e.toLowerCase()}-modal" class="modal" style="display: block; z-index: 1100;">
        <div class="modal-content" style="max-width: 400px;">
          <h3 style="margin: 0 0 16px 0;">Add New ${e}</h3>
          <div class="form-field">
            <label class="form-label">${e} Name *</label>
            <input type="text" id="new-${e.toLowerCase()}-name" class="form-input"
                   placeholder="Enter ${e.toLowerCase()} name..." maxlength="50" required>
          </div>
          <div class="modal-actions">
            <button type="button" id="cancel-add-${e.toLowerCase()}" class="secondary-btn">Cancel</button>
            <button type="button" id="save-add-${e.toLowerCase()}" class="primary-btn">Add ${e}</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.getElementById(`add-${e.toLowerCase()}-modal`),i=document.getElementById(`new-${e.toLowerCase()}-name`),a=document.getElementById(`cancel-add-${e.toLowerCase()}`),o=document.getElementById(`save-add-${e.toLowerCase()}`);setTimeout(()=>i.focus(),100);let s=async()=>{let n=i.value.trim();if(n){o.disabled=!0,o.textContent=`Adding...`;try{await t(n)===!1?(o.disabled=!1,o.textContent=`Add ${e}`):r.remove()}catch(t){console.error(`❌ Error adding ${e.toLowerCase()}:`,t),o.disabled=!1,o.textContent=`Add ${e}`}}else i.focus()};return o.addEventListener(`click`,s),a.addEventListener(`click`,()=>r.remove()),i.addEventListener(`keypress`,e=>{e.key===`Enter`&&(e.preventDefault(),s())}),r.addEventListener(`click`,e=>{e.target===r&&r.remove()}),r}showDuplicateModal(e,t,n){let r=`
      <div id="duplicate-${e.toLowerCase()}-modal" class="modal" style="display: block; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 36px; color: #ff9800; margin-bottom: 12px;">⚠️</div>
          <h3 style="margin: 0 0 12px 0;">${e} Already Exists</h3>
          <p style="margin: 0 0 16px 0; color: #666;">
            <strong>"${t}"</strong> is already in the list.
          </p>
          <div class="modal-actions">
            <button type="button" id="duplicate-try-again" class="secondary-btn">Try Again</button>
            <button type="button" id="duplicate-use-existing" class="primary-btn">Use Existing</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML(`beforeend`,r);let i=document.getElementById(`duplicate-${e.toLowerCase()}-modal`),a=document.getElementById(`duplicate-try-again`),o=document.getElementById(`duplicate-use-existing`);a.onclick=()=>i.remove(),o.onclick=()=>{i.remove();let t=document.querySelector(`[id*="add-${e.toLowerCase()}-modal"]`);t&&t.remove(),n&&n()},i.addEventListener(`click`,e=>{e.target===i&&i.remove()}),setTimeout(()=>o.focus(),100)}},Kt=new class{constructor(){this.originalEmailHandler=null,this.isIntegrated=!1,this.cachedOptions={excludePrice:!1,exportCsv:!0}}init(){this.isIntegrated||=(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>this.setupIntegration()):this.setupIntegration(),!0)}setupIntegration(){console.log(`🔍 Setting up lead wizard integration...`),document.addEventListener(`click`,e=>{if(!document.getElementById(`lead-wizard-modal`)&&e.target.closest(`#quick-pdf-btn`))return console.log(`🧙‍♂️ Lead wizard intercepted email button click via event delegation!`),e.preventDefault(),e.stopPropagation(),this.showLeadWizardFlow(),!1},!0),console.log(`✅ Lead wizard integrated with event delegation`),setTimeout(()=>this.setupDirectIntegration(),1e3)}setupDirectIntegration(){let e=document.getElementById(`quick-pdf-btn`);e?(console.log(`📧 Email button found - ensuring direct integration`),e.onclick=e=>{if(document.getElementById(`lead-wizard-modal`)){console.log(`📧 Wizard already open, ignoring click`);return}return console.log(`🧙‍♂️ Lead wizard direct handler triggered!`),e.preventDefault(),e.stopPropagation(),this.showLeadWizardFlow(),!1},console.log(`✅ Direct integration set up successfully`)):console.log(`📧 Email button not found - event delegation will handle it`)}showLeadWizardFlow(){console.log(`🧙‍♂️ Starting lead wizard flow...`),console.log(`📧 Integration status:`,{isIntegrated:this.isIntegrated,timestamp:new Date().toISOString()}),this.startImagePreloading(),console.log(`📝 Showing lead form...`),Gt.show(e=>this.onLeadWizardComplete(e),()=>this.onLeadWizardCancel())}startImagePreloading(){let e=X.getSelectedProducts();if(!e||e.length===0){console.log(`📷 No products to preload`);return}let t=e.map(e=>{let t=e.product||{};return rt({...t,Image_URL:t.Image_URL||t.imageUrl||t[`Image URL`]||``,Diagram_URL:t.Diagram_URL||t.diagramUrl||t[`Diagram URL`]||``})});console.log(`📷 Starting background preload for ${t.length} products...`),jt._preloadAllImages(t).then(e=>{console.log(`✅ Preloaded ${e} images - ready for PDF generation`)}).catch(e=>{console.warn(`Image preloading error:`,e)})}hasCompleteLeadData(e){let t=f.isStaffMode(),n=e.customerName&&e.customerEmail&&e.projectName;return t?n&&e.customerType&&e.hearAboutUs&&e.hearAboutUs.length>0:n}onLeadWizardComplete(e){console.log(`📊 Lead data collected`),window.currentLeadData=e;let t=!!e.excludePrice,n=!!e.exportCsv,r={name:e.customerName,email:e.customerEmail,phone:e.customerPhone,project:e.projectName,address:e.projectAddress,excludePrice:t,exportCsv:n,sendEmail:!0,leadData:e};console.log(`📧 Proceeding directly to PDF generation and email`),this.generateAndSendPDFDirectly(r)}onLeadWizardCancel(){console.log(`📊 Lead wizard cancelled`)}proceedToEmailForm(){console.log(`📧 proceedToEmailForm called - this should not happen anymore`),console.log(`📧 Wizard should go directly to PDF generation instead`),console.warn(`⚠️ proceedToEmailForm was called - this indicates a code path that needs updating`)}showEmailModalDirectly(){console.log(`📧 showEmailModalDirectly called - this should not happen anymore`),console.warn(`⚠️ Email modal should not be shown - wizard goes directly to PDF generation`)}populateEmailFormWithLeadData(){let e=Q.getLeadData();if(console.log(`📧 Populating email form with lead data`),e.customerName){let t=document.getElementById(`user-name`);t&&(t.value=e.customerName)}if(e.customerEmail){let t=document.getElementById(`user-email`);t&&(t.value=e.customerEmail)}if(e.customerPhone){let t=document.getElementById(`user-telephone`);t&&(t.value=e.customerPhone)}if(e.projectName){let t=document.getElementById(`user-project`);t&&(t.value=e.projectName)}if(e.projectAddress){let t=document.getElementById(`user-address`);t&&(t.value=e.projectAddress)}if(e.excludePrice!==void 0){let t=document.getElementById(`exclude-price-checkbox`);t&&(t.checked=e.excludePrice)}if(e.exportCsv!==void 0){let t=document.getElementById(`export-csv-checkbox`);t&&(t.checked=e.exportCsv)}console.log(`✅ Email form populated with lead data`)}setupEmailFormIntegration(){let e=document.getElementById(`pdf-email-form`);if(!e||e.hasLeadIntegration)return;e.hasLeadIntegration=!0,e.onsubmit,e.onsubmit=t=>{t.preventDefault();let n=new FormData(e),r={name:n.get(`user-name`),project:n.get(`user-project`),address:n.get(`user-address`),email:n.get(`user-email`),phone:n.get(`user-telephone`),excludePrice:n.has(`exclude-price`),exportCsv:n.has(`export-csv`),sendEmail:!0};window.currentLeadData&&(r.leadData=window.currentLeadData);let i=document.getElementById(`pdf-email-modal`);i&&(i.style.display=`none`),this.generatePDFWithLeadData(r)};let t=document.getElementById(`pdf-email-cancel`);t&&(t.onclick=()=>{let e=document.getElementById(`pdf-email-modal`);e&&(e.style.display=`none`)})}async generateAndSendPDFDirectly(e){try{if(console.log(`📄 Starting direct PDF generation and email...`),this.showSpinner(),window.appService){let t=await window.appService.generateAndSendPDF(e);t.success&&t.method===`email`?(console.log(`✅ PDF generated and email sent successfully`),this.saveCustomerDataToStorage(),window.app&&window.app.showEmailSentModal?window.app.showEmailSentModal():this.showEmailSentFallbackModal()):(console.warn(`⚠️ Email not sent; fallback or alternate method used`),this.hideSpinner())}else throw Error(`App service not available`)}catch(e){console.error(`❌ Error in direct PDF generation:`,e),this.hideSpinner(),alert(`There was an error generating and sending your PDF. Please try again.`)}}showSpinner(){let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`flex`)}hideSpinner(){let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`none`)}async generatePDFWithLeadData(e){if(window.appService)try{this.showSpinner();let t=await window.appService.generateAndSendPDF(e);t.success&&t.method===`email`?(this.saveCustomerDataToStorage(),window.app&&window.app.showEmailSentModal?window.app.showEmailSentModal():this.showEmailSentFallbackModal()):this.hideSpinner()}catch(e){this.hideSpinner(),console.error(`Error generating PDF:`,e),alert(`PDF generation failed. Please try again.`)}else console.error(`Error: App service not available for PDF generation`),alert(`PDF generation service is not available. Please refresh the page and try again.`)}saveCustomerDataToStorage(){let e=Q.getLeadData();e&&(e.customerName||e.customerEmail||e.projectName)&&(localStorage.setItem(`loadedSelectionCustomerData`,JSON.stringify(e)),console.log(`💾 Customer data saved to localStorage for persistence`))}getCurrentLeadData(){return window.currentLeadData||null}clearCurrentLeadData(){window.currentLeadData=null,this.cachedOptions={excludePrice:!1,exportCsv:!0},Q.clearLeadData(),localStorage.removeItem(`loadedSelectionCustomerData`),console.log(`🧹 Customer data cleared from memory and storage`)}showEmailSentFallbackModal(){this.hideSpinner();let e=document.createElement(`div`);e.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.5); z-index: 10001;
      display: flex; align-items: center; justify-content: center;
    `,e.innerHTML=`
      <div style="
        background: white; border-radius: 16px; padding: 32px;
        max-width: 320px; width: 90%; text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 64px; height: 64px; margin: 0 auto 20px;
          background: #10b981; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        ">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 style="margin: 0 0 12px; color: #1a1a1a; font-size: 1.5rem;">Email Sent!</h2>
        <p style="margin: 0 0 24px; color: #666;">Your product selection has been sent successfully.</p>
        <button onclick="this.closest('div').parentElement.remove(); location.reload();" style="
          width: 100%; padding: 14px; border: none; border-radius: 8px;
          background: #b87333; color: white; font-size: 1rem; font-weight: 600; cursor: pointer;
        ">OK</button>
      </div>
    `,document.body.appendChild(e),e.onclick=t=>{t.target===e&&(e.remove(),location.reload())}}setOptions(e={}){this.cachedOptions={...this.cachedOptions,...e}}showLeadWizard(){Gt.show(e=>{console.log(`📊 Manual lead data entry`),window.currentLeadData=e},()=>{console.log(`📊 Manual lead entry cancelled`)})}setupOnReviewScreen(){console.log(`📧 Setting up integration for review screen...`),this.tryDirectIntegration()}};Kt.init(),typeof window<`u`&&(window.leadWizardIntegration=Kt);var qt=new class{constructor(){this.appService=new Mt,this.navigationManager=null,this.fileImportManager=new Rt}async init(){try{console.log(`🚀 Initializing Seima Scanner with refactored services...`),f.configure({googleSheetsUrl:r.SELECTION_RECORDING?.GOOGLE_SHEETS_URL,email:r.EMAIL}),p.configure({logoSrc:`assets/seima-logo.png`,brandName:`Seima`,appName:`Product Scanner`}),console.log(`Browser Compatibility Report:`,c.getCompatibilityReport()),c.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning();let e=await this.appService.init();console.log(`App service initialization result:`,e),this.navigationManager=new Lt,await this.navigationManager.init(),await this.fileImportManager.init(),this.setupGlobalEventListeners(),this.setupGlobalAPI(),console.log(`✅ Seima Scanner initialized successfully`),this.setupLoadSelectionButton();let t=this.appService.getMigrationReadinessStatus();console.log(`🔄 Microsoft Graph Migration Status:`,t)}catch(e){console.error(`❌ Failed to initialize Seima Scanner:`,e),await this.initializeLegacyFallback()}}async initializeLegacyFallback(){console.error(`❌ Service initialization failed - no fallback available`),alert(`Failed to initialize the application. Please refresh the page and try again.`)}setupGlobalAPI(){window.seimaApp=this,window.seimaDebug=this.appService.getDebugAPI(),window.scannerController=this.navigationManager?.scannerController,window.navigationManager=this.navigationManager,window.browserCompatibility=c,window.appService=this.appService,window.dataService=this.appService.dataService,window.emailService=this.appService.emailService,window.pdfService=this.appService.pdfService,window.downloadWithFallback=(e,t)=>{this.appService.downloadWithFallback(e,t)}}setupLoadSelectionButton(){let e=document.getElementById(`load-selection-btn`);if(!e)return;let t=()=>{let t=f.isStaffMode();e.style.display=t?`inline-flex`:`none`,console.log(`📦 Load Selection button: ${t?`visible`:`hidden`}`)};t(),e.onclick=()=>{console.log(`📦 Load Previous Selection clicked`),Wt.show(e=>{console.log(`✅ Selection loaded:`,e),location.reload()})},window.addEventListener(`staffModeChanged`,()=>{t()}),window.addEventListener(`focus`,t)}showCompatibilityWarning(){let e=c.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;let n=document.createElement(`div`);n.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `;let i=t.filter(e=>e.type===`critical`),a=e.score<r.COMPATIBILITY.MIN_COMPATIBILITY_SCORE;i.length===0&&!a||(n.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${i.length>0?i[0].message:`Some features may not work optimally`}
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button onclick="window.browserCompatibility.logCompatibilityInfo()" style="
            padding: 4px 8px; border: 1px solid #d97706; background: transparent;
            color: #d97706; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Details</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
            padding: 4px 8px; border: none; background: #f59e0b;
            color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Dismiss</button>
        </div>
      </div>
    `,document.body.insertBefore(n,document.body.firstChild))}setupGlobalEventListeners(){window.addEventListener(`generatePdf`,async e=>{let t=e.detail;try{this.showSpinner();let e=await this.appService.generateAndSendPDF(t);if(e.success&&e.method===`email`)this.showEmailSentModal();else if(e.success&&e.method===`download`)this.hideSpinner(),this.showSuccess(`Files downloaded successfully!`);else if(e.success)this.hideSpinner();else throw Error(e.error||`Operation failed`)}catch(e){console.error(`PDF generation failed:`,e),this.hideSpinner(),this.showError(`Failed to generate PDF. Please try again.`)}}),window.addEventListener(`sendEmail`,async e=>{let{userDetails:t,pdfBlob:n,csvBlob:r}=e.detail;try{await this.handleEmailRequest(t,n,r)}catch(e){console.error(`Email sending failed:`,e)}}),window.addEventListener(`beforeunload`,()=>{this.navigationManager?.scannerController&&this.navigationManager.scannerController.stopScanning()}),document.addEventListener(`visibilitychange`,()=>{this.navigationManager?.scannerController&&(document.hidden?this.navigationManager.scannerController.stopScanning():this.navigationManager.currentScreen===`scanner`&&this.navigationManager.scannerController.startScanning())}),c.features.memoryAPI&&setInterval(()=>{let e=c.memoryInfo;e&&e.usedJSHeapSize>100*1024*1024&&console.warn(`High memory usage detected:`,e)},3e4)}async handleEmailRequest(e,t,n=null){try{let r=await this.appService.emailService.sendEmail({email:e.email,name:e.name,phone:e.mobile||``,project:e.project||``,address:e.address||``,message:e.message||`Please find attached product selection.`},t,n);if(r.success)this.showEmailSentModal();else throw Error(r.error||`Email sending failed`)}catch(e){console.error(`Email request failed:`,e),this.showError(`Failed to send email. Please try again.`)}}showSpinner(){let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`flex`)}hideSpinner(){let e=document.getElementById(`pdf-spinner`);e&&(e.style.display=`none`)}showSuccess(e){this.showNotification(e,`success`)}showError(e){this.showNotification(e,`error`)}showNotification(e,t=`info`){let n=document.createElement(`div`);n.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10000;
      padding: 16px 20px; border-radius: 8px; max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-size: 14px; font-weight: 500;
      background: ${t===`success`?`#10b981`:t===`error`?`#ef4444`:`#3b82f6`};
      color: white; animation: slideIn 0.3s ease-out;
    `,n.textContent=e,document.body.appendChild(n);let r=document.createElement(`style`);r.textContent=`
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,document.head.appendChild(r),setTimeout(()=>{n.parentElement&&n.remove()},5e3)}showEmailSentModal(){this.hideSpinner();let e=document.createElement(`div`);e.id=`email-sent-modal`,e.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.5); z-index: 10001;
      display: flex; align-items: center; justify-content: center;
    `,e.innerHTML=`
      <div style="
        background: white; border-radius: 16px; padding: 32px;
        max-width: 320px; width: 90%; text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: scaleIn 0.3s ease-out;
      ">
        <div style="
          width: 64px; height: 64px; margin: 0 auto 20px;
          background: #10b981; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        ">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 style="margin: 0 0 12px; color: #1a1a1a; font-size: 1.5rem;">Email Sent!</h2>
        <p style="margin: 0 0 24px; color: #666; font-size: 0.95rem;">
          Your product selection has been sent successfully.
        </p>
        <button id="email-sent-ok-btn" style="
          width: 100%; padding: 14px 24px; border: none; border-radius: 8px;
          background: #b87333; color: white; font-size: 1rem; font-weight: 600;
          cursor: pointer; transition: background 0.2s;
        ">OK</button>
      </div>
    `;let t=document.createElement(`style`);t.textContent=`
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `,document.head.appendChild(t),document.body.appendChild(e);let n=document.getElementById(`email-sent-ok-btn`);n&&(n.onclick=()=>{e.remove(),location.reload()}),e.onclick=t=>{t.target===e&&(e.remove(),location.reload())}}getSelectedProducts(){return this.appService.dataService.getSelectedProducts()}clearSelection(){return this.appService.dataService.clearSelection()}addProduct(e,t,n,r){return this.appService.dataService.addProduct(e,n,t,r)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{qt.init()}):qt.init();