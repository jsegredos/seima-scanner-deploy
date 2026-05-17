import*as zbarWasm from"https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.16/dist/main.js";import{BarcodeDetectorPolyfill}from"https://cdn.jsdelivr.net/npm/@undecaf/barcode-detector-polyfill@0.9.23/dist/main.js";import Sortable from"https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/modular/sortable.esm.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();window.zbarWasm=zbarWasm;window.barcodeDetectorPolyfill={BarcodeDetectorPolyfill};window.polyfillReady=!0;console.log("✅ Polyfill modules loaded and exposed to window");const CONFIG={VERSION:"4.6.0",ROOMS:{PREDEFINED:[{name:"Bath 1",icon:"🛁"},{name:"Bath 2",icon:"🛁"},{name:"Bath 3",icon:"🛁"},{name:"Ensuite",icon:"🚿"},{name:"Powder",icon:"🚽"},{name:"Kitchen",icon:"🍽️"},{name:"Butlers",icon:"👨‍🍳"},{name:"Laundry",icon:"🧺"},{name:"Alfresco",icon:"🍽️"}]},SCANNER:{DEFAULT_ENGINE:"detector",ENGINES:["detector"]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:["Description","ProductName","OrderCode","BARCODE"]},CSV:{URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQw5X0aAe5yYbfqfTlgBIdNqnDIjs-YFhNh1IQ8lIB5RfjBl5VBRwQAMKIwlXz6L6oXI8ittrQD91Ob/pub?gid=114771048&single=true&output=csv"},STORAGE_KEYS:{CUSTOM_ROOMS:"customRooms",SELECTED_PRODUCTS:"selectedProducts",PRODUCT_CATALOG:"productCatalog",USER_PREFERENCES:"userPreferences",ROOM_ASSIGNMENTS:"roomAssignments",STAFF_CONTACT:"staffContactDetails"},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10]},CSV_CONFIG:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx"],REQUIRED_COLUMNS:["OrderCode"],OPTIONAL_COLUMNS:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},CATALOG_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_zdHuh36ubrchDnG8GyaH6bSEAarJ68ypAlNjsKHWs8a-_BgJCEm-bNiTRhUp5Au8-P-ofkpp4fTw/pub?gid=0&single=true&output=csv",PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100,SCANNER_TIMEOUT:3e4,BARCODE_SCAN_INTERVAL:100},OCR:{SCAN_INTERVAL:1500,MIN_TEXT_LENGTH:3,MIN_CONFIDENCE:60,CENTER_REGION_RATIO:.6,FUZZY_MATCH_TOLERANCE:1,PROCESSING_TIMEOUT:3e4,PREFER_WEB_WORKER:!0,PREPROCESSING:{CONTRAST:1.5,USE_THRESHOLD:!0}},EMAIL:{PROVIDER:"seimaEmail",PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",SEIMA_EMAIL_API_URL:"https://seima-email.seima.workers.dev/send-email",SEIMA_EMAIL_API_KEY:"",FROM_EMAIL:"selections@seima.com.au",FROM_NAME:"Seima Team",RETRY_ATTEMPTS:3,RETRY_DELAY:2e3},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,REQUIRED_FEATURES:["localStorage","fileReader","blob","createObjectURL"],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8,SAMSUNG_OPTIMIZATIONS:!0,EXTENDED_TIMEOUTS_FOR_SAMSUNG:!0},SELECTION_RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec",RETRY_ATTEMPTS:3,RETRY_DELAY:1e3}},CONFIG_BASE={EMAIL:{SEIMA_EMAIL_API_URL:"https://seima-email.seima.workers.dev/send-email",SEIMA_EMAIL_API_KEY:"",FROM_EMAIL:"selections@seima.com.au",FROM_NAME:"Seima Team",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3}};class Utils{static loadScript(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const s=document.createElement("script");s.src=e,s.onload=t,s.onerror=()=>o(new Error(`Failed to load script: ${e}`)),document.head.appendChild(s)})}static loadImage(e){return new Promise((t,o)=>{const s=new Image;s.onload=()=>t(s),s.onerror=()=>o(new Error(`Failed to load image: ${e}`)),s.src=e})}static loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="anonymous",o.onload=function(){const s=document.createElement("canvas"),r=s.getContext("2d");s.width=o.width,s.height=o.height,r.drawImage(o,0,0);try{const n=s.toDataURL("image/png");t(n,o.width,o.height)}catch{t(null,0,0)}},o.onerror=()=>t(null,0,0),o.src=e}static formatPrice(e){if(!e||e==="")return"";const t=parseFloat(e.toString().replace(/[^\d.-]/g,""));return isNaN(t)?"":`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e==="")return"";const o=parseFloat(e.toString().replace(/[^\d.-]/g,""));if(isNaN(o))return"";const s=o.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${s}`:s}static sanitizeInput(e,t=null){if(typeof e!="string")return"";let o=e.trim();return t&&o.length>t&&(o=o.substring(0,t)),o}static escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}static debounce(e,t){let o;return function(...s){clearTimeout(o),o=setTimeout(()=>e.apply(this,s),t)}}static throttle(e,t){let o;return function(...s){o||(e.apply(this,s),o=!0,setTimeout(()=>o=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{const o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.warn(`Failed to parse localStorage item: ${e}`,o),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(o){return console.warn(`Failed to set localStorage item: ${e}`,o),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){const o=new Date(e);if(isNaN(o.getTime()))return"";const s=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),n=o.getFullYear();if(!t)return`${s}/${r}/${n}`;const c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${s}/${r}/${n} ${c}:${i}`}static generateFilename(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e||"file").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${r}${n}.${c}${i}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}static async fetchWithRetry(e,{retries:t=2,backoff:o=1e3,timeout:s=15e3,...r}={}){let n;for(let c=0;c<=t;c++){const i=new AbortController,l=setTimeout(()=>i.abort(),s);try{const d=await fetch(e,{...r,signal:i.signal});if(clearTimeout(l),!d.ok&&c<t)throw new Error(`HTTP ${d.status}`);return d}catch(d){clearTimeout(l),n=d,c<t&&await Utils.sleep(o*Math.pow(2,c))}}throw n}}class BrowserCompatibilityManager{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){const a=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(a),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(a),isDesktop:!/Mobi|Android|iPad/i.test(a),isIOS:/iPad|iPhone|iPod/.test(a),isAndroid:/Android/i.test(a),isWindows:/Windows/i.test(a),isMacOS:/Macintosh|Mac OS X/i.test(a),isIPhone:/iPhone/i.test(a),isIPad:/iPad/i.test(a),isWebView:this.detectWebView(a),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:a}}detectBrowser(){const a=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(a),version:this.getBrowserVersion(a),engine:this.getBrowserEngine(a),isChrome:/Chrome/i.test(a)&&!/Edge|Edg/i.test(a),isFirefox:/Firefox/i.test(a),isSafari:/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a),isEdge:/Edge|Edg/i.test(a),isOpera:/Opera|OPR/i.test(a),chromeVersion:this.getChromeVersion(a),safariVersion:this.getSafariVersion(a),firefoxVersion:this.getFirefoxVersion(a)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fileAPI:"File"in window,fileReader:"FileReader"in window,fileSystemAccess:"showSaveFilePicker"in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices,webRTC:"RTCPeerConnection"in window,canvas:"HTMLCanvasElement"in window,webGL:this.checkWebGL(),fetch:"fetch"in window,xhr:"XMLHttpRequest"in window,serviceWorker:"serviceWorker"in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:"WebAssembly"in window,createObjectURL:"URL"in window&&"createObjectURL"in URL,revokeObjectURL:"URL"in window&&"revokeObjectURL"in URL,blob:"Blob"in window,touchEvents:"ontouchstart"in window,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,clipboard:"clipboard"in navigator,onlineStatus:"onLine"in navigator,connection:"connection"in navigator||"mozConnection"in navigator||"webkitConnection"in navigator}}checkMemoryLimitations(){var a,e,t;this.memoryInfo={jsHeapSizeLimit:((a=performance.memory)==null?void 0:a.jsHeapSizeLimit)||null,totalJSHeapSize:((e=performance.memory)==null?void 0:e.totalJSHeapSize)||null,usedJSHeapSize:((t=performance.memory)==null?void 0:t.usedJSHeapSize)||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener("online",()=>{this.networkStatus.isOnline=!0,this.onNetworkChange("online")}),window.addEventListener("offline",()=>{this.networkStatus.isOnline=!1,this.onNetworkChange("offline")}),navigator.connection&&navigator.connection.addEventListener("change",()=>{this.updateNetworkStatus(),this.onNetworkChange("connection")})}calculateCompatibilityScore(){let a=100;const e=[];this.features.localStorage||(a-=20,e.push("Local storage not supported")),this.features.fileReader||(a-=15,e.push("File reading not supported")),this.features.blob||(a-=15,e.push("Blob creation not supported")),this.features.createObjectURL||(a-=15,e.push("Object URL creation not supported")),this.features.fetch||(a-=10,e.push("Modern fetch API not available")),this.features.modules||(a-=10,e.push("ES6 modules not supported")),this.features.getUserMedia||(a-=8,e.push("Camera access limited")),this.deviceInfo.isWebView&&(a-=5,e.push("WebView compatibility concerns")),this.memoryInfo.memoryPressure==="high"&&(a-=8,e.push("High memory pressure detected")),this.networkStatus.isOnline||(a-=5,e.push("Currently offline")),this.compatibilityScore=Math.max(0,a),this.compatibilityIssues=e}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),"PerformanceObserver"in window)try{new PerformanceObserver(e=>{for(const t of e.getEntries())t.entryType==="measure"&&this.onPerformanceMeasure(t)}).observe({entryTypes:["measure"]})}catch(a){console.warn("Performance observer not fully supported:",a)}}detectWebView(a){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(a)||/Android/i.test(a)&&/Version\/\d\.\d/i.test(a)&&!/ Chrome\//.test(a)||/FB_IAB|FBAN|FBAV/i.test(a)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?"portrait":"landscape"}getBrowserName(a){return/SamsungBrowser/i.test(a)?"Samsung Internet":/Chrome/i.test(a)&&!/Edge|Edg/i.test(a)?"Chrome":/Firefox/i.test(a)?"Firefox":/Safari/i.test(a)&&!/Chrome|Chromium/i.test(a)?"Safari":/Edge|Edg/i.test(a)?"Edge":/Opera|OPR/i.test(a)?"Opera":"Unknown"}getBrowserVersion(a){const e=a.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return e?e[2]:"Unknown"}getBrowserEngine(a){return/WebKit/i.test(a)?"WebKit":/Gecko/i.test(a)?"Gecko":/Trident/i.test(a)?"Trident":/EdgeHTML/i.test(a)?"EdgeHTML":"Unknown"}getChromeVersion(a){const e=a.match(/Chrome\/([0-9.]+)/i);return e?parseInt(e[1]):null}getSafariVersion(a){const e=a.match(/Version\/([0-9.]+).*Safari/i);return e?parseFloat(e[1]):null}getFirefoxVersion(a){const e=a.match(/Firefox\/([0-9.]+)/i);return e?parseInt(e[1]):null}checkLocalStorage(){try{const a="compatibilityTest";return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch{return!1}}checkSessionStorage(){try{const a="compatibilityTest";return sessionStorage.setItem(a,a),sessionStorage.removeItem(a),!0}catch{return!1}}checkDownloadAttribute(){return"download"in document.createElement("a")}checkWebGL(){try{const a=document.createElement("canvas");return!!(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}}checkESModules(){try{return typeof Symbol<"u"&&typeof Promise<"u"&&typeof Map<"u"}catch{return!1}}checkAsyncAwait(){try{return eval("(async function() {})").constructor===(async function(){}).constructor}catch(a){return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return"unknown";const a=performance.memory.usedJSHeapSize,e=performance.memory.jsHeapSizeLimit,t=a/e;return t>.8?"high":t>.6?"medium":"low"}estimateMaxBlobSize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?500*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?200*1024*1024:(t=this.deviceInfo.browser)!=null&&t.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){var a,e,t;return(a=this.deviceInfo.browser)!=null&&a.isChrome?2*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?1*1024*1024:((t=this.deviceInfo.browser)!=null&&t.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:"unknown"}getEffectiveConnectionType(){var a;return((a=navigator.connection)==null?void 0:a.effectiveType)||"unknown"}getDownlink(){var a;return((a=navigator.connection)==null?void 0:a.downlink)||null}getRTT(){var a;return((a=navigator.connection)==null?void 0:a.rtt)||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(a){console.log(`Network status changed: ${a}`,this.networkStatus)}onPerformanceMeasure(a){a.duration>1e3&&console.warn(`Performance concern: ${a.name} took ${a.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){const a=[];return this.compatibilityScore<70&&a.push({type:"critical",message:"Browser compatibility issues detected. Consider updating your browser.",action:"update_browser"}),this.memoryInfo.memoryPressure==="high"&&a.push({type:"warning",message:"High memory usage detected. Close other browser tabs for better performance.",action:"reduce_memory"}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&a.push({type:"info",message:"Modern file saving features available in newer browsers.",action:"update_browser"}),this.networkStatus.isOnline||a.push({type:"error",message:"Internet connection required for full functionality.",action:"check_connection"}),a}isFeatureSupported(a){return this.features[a]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?"fileSystemAPI":this.features.downloadAttribute?"downloadAttribute":this.features.createObjectURL?"objectURL":"manual"}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group("Browser Compatibility Report"),console.log("Score:",this.compatibilityScore),console.log("Device:",this.deviceInfo),console.log("Features:",this.features),console.log("Issues:",this.compatibilityIssues),console.log("Recommendations:",this.getRecommendations()),console.groupEnd()}}const browserCompatibility=new BrowserCompatibilityManager;let EmailService$1=class{constructor(e=CONFIG_BASE.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log("✅ Email service initialized"),!0}catch(e){return console.error("❌ Failed to initialize email service:",e),!1}}async _loadEmailJS(){if(!window.emailjs)return Utils.loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw new Error("EmailJS not loaded");const t={to_email:e.to_email,to_name:e.to_name||e.customer_name||"Customer",from_name:this.config.FROM_NAME||"Seima Team",subject:e.subject||"Your Seima Product Selection",message:e.message||"",customer_name:e.customer_name||"",customer_project:e.customer_project||"",customer_address:e.customer_address||"",customer_telephone:e.customer_telephone||"",total_products:e.total_products||"",total_rooms:e.total_rooms||"",file_info:e.file_info||"",...this._sanitizeAttachment(e)},o=this.config.RETRY_ATTEMPTS||3,s=this.config.RETRY_DELAY||2e3;for(let r=1;r<=o;r++)try{const n=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${r})`),{success:!0,result:n}}catch(n){if(console.warn(`❌ Email attempt ${r} failed:`,n),r<o)await Utils.sleep(s);else throw n}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith("data:")&&(t=t.split(",")[1]||t),{attachment:t,attachment_name:e.attachment_name||"attachment.pdf"}}async sendWithAttachments(e,t,o,s){const r=await this._blobToBase64(t),n=(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,""),c=Utils.generateFilename(n,"pdf"),i=this._buildEmailMessage(e,s),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:s.totalProducts.toString(),total_rooms:s.roomCount.toString(),message:i,attachment:r,attachment_name:c,file_info:`PDF: ${c} (${(t.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onloadend=()=>{const r=s.result.split(",")[1];t(r)},s.onerror=o,s.readAsDataURL(e)})}_buildEmailMessage(e,t){const o=["Thank you for your Seima product selection.","","Your selection summary:",`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&o.push(`• Estimated value: ${Utils.formatPriceLocale(t.totalValue)}`),o.push("","Please find your product selection attached as a PDF document.","","If you have any questions, please contact your Seima representative.","","Kind regards,","The Seima Team","www.seima.com.au"),o.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}};new EmailService$1;const SESSION_KEY="authSession",SESSION_DURATION_DEFAULT=7*24*60*60*1e3,SESSION_DURATION_REMEMBER=30*24*60*60*1e3;class AuthService{constructor(){this.baseUrl="",this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log("🔐 Auth service configured")}loadSession(){var e;try{const t=localStorage.getItem(SESSION_KEY);if(t){const o=JSON.parse(t);o.expiry&&Date.now()<o.expiry?(this.session=o,console.log("✅ Session restored for:",(e=o.user)==null?void 0:e.email)):(console.log("⏰ Session expired, clearing..."),this.clearSession())}}catch(t){console.warn("Failed to load session:",t),this.clearSession()}}saveSession(e){try{localStorage.setItem(SESSION_KEY,JSON.stringify(e)),this.session=e}catch(t){console.error("Failed to save session:",t)}}clearSession(){localStorage.removeItem(SESSION_KEY),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){var e;return((e=this.session)==null?void 0:e.user)||null}getUserRole(){const e=this.getCurrentUser();if(!e)return"user";const t=String(e.role||"").toLowerCase().trim(),o=e.email&&String(e.email).toLowerCase().endsWith("@seima.com.au"),s=e.emailVerified!==!1;return t==="admin"&&(!o||s)?"admin":t==="staff"&&(!o||s)||o&&s?"staff":t==="power"?"power":"user"}isPowerUser(){const e=this.getUserRole();return e==="power"||e==="staff"||e==="admin"}isStaffMode(){const e=this.getUserRole();return e==="staff"||e==="admin"}isAdmin(){return this.getUserRole()==="admin"}getSession(){return this.session}getSessionToken(){var e;return((e=this.session)==null?void 0:e.token)||null}getAuthHeaders(){const e=this.getSessionToken();return e?{Authorization:`Bearer ${e}`}:{}}handleUnauthorizedResponse(e,t=""){if(!e||e.status!==401)return!1;if(!!this.session){const s=t?` (${t})`:"";console.warn(`🔐 Session unauthorized${s}; clearing local session`),this.clearSession()}return!0}async apiRequest(e,t){if(!this.baseUrl)throw new Error("Google Sheets URL not configured. Call authService.configure() first.");const o=new URLSearchParams;o.append("action",e);for(const[r,n]of Object.entries(t))n!=null&&o.append(r,typeof n=="object"?JSON.stringify(n):n);const s=await fetch(this.baseUrl,{method:"POST",body:o});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);return await s.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:"Password must be at least 8 characters"}:/\d/.test(e)?{valid:!0}:{valid:!1,error:"Password must contain at least one number"}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,o,s="",r=""){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};const n=this.validatePassword(t);if(!n.valid)return{success:!1,error:n.error};if(!o||o.trim().length<2)return{success:!1,error:"Please enter your name"};try{const c=await this.apiRequest("userRegister",{email:e.trim().toLowerCase(),password:t,name:o.trim(),position:s.trim(),phone:String(r||"").trim()});return c.success&&c.verifyToken&&this.sendVerificationEmail(e.trim().toLowerCase(),o.trim(),c.verifyToken),c}catch(c){return console.error("Registration error:",c),{success:!1,error:"Registration failed. Please try again."}}}async login(e,t,o=!1){if(!e||!t)return{success:!1,error:"Please enter email and password"};try{const s=await this.apiRequest("userLogin",{email:e.trim().toLowerCase(),password:t});if(s.success){const r=Date.now()+(o?SESSION_DURATION_REMEMBER:SESSION_DURATION_DEFAULT),n={user:s.user,token:s.sessionToken,expiry:r,rememberMe:o};this.saveSession(n),this.onAuthChange&&this.onAuthChange(s.user),console.log("✅ Logged in as:",s.user.email)}return s}catch(s){return console.error("Login error:",s),{success:!1,error:"Login failed. Please try again."}}}async logout(){const e=this.getSessionToken();if(e&&this.baseUrl)try{await this.apiRequest("userLogout",{sessionToken:e})}catch{}this.clearSession(),console.log("👋 Logged out")}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const t=await this.apiRequest("userRequestPasswordReset",{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:"If this email exists, a reset code has been sent"}}catch(t){return console.error("Password reset request error:",t),{success:!1,error:"Failed to request password reset. Please try again."}}}async sendPasswordResetEmail(e,t,o){if(!this.emailConfig){console.warn("Email config not set, cannot send password reset email");return}const s=this.emailConfig.SEIMA_EMAIL_API_URL;if(!s){console.error("SEIMA_EMAIL_API_URL not configured, cannot send password reset email");return}const r=t||"User",n=new Date().getFullYear(),c=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${r},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">We received a request to reset your password. Use the code below to complete the process. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${o}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">If you didn't request this, you can safely ignore this email. Your password will remain unchanged.</p>
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">© ${n} Seima · Build with Confidence · <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{const i={"Content-Type":"application/json",...this.getAuthHeaders()};!i.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(i["X-Api-Key"]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log("📧 Sending password reset email to:",e);const l=await fetch(s,{method:"POST",headers:i,body:JSON.stringify({to:e,toName:r,subject:"Your Seima Password Reset Code",html:c,fromName:this.emailConfig.FROM_NAME||"Seima Team"})}),d=await l.json().catch(()=>({}));l.ok?console.log("✅ Password reset email sent to:",e):console.error("Password reset email failed:",l.status,d)}catch(i){console.error("Failed to send password reset email:",i)}}async sendVerificationEmail(e,t,o){if(!this.emailConfig){console.warn("Email config not set, cannot send verification email");return}const s=this.emailConfig.SEIMA_EMAIL_API_URL;if(!s){console.error("SEIMA_EMAIL_API_URL not configured, cannot send verification email");return}const r=t||"there",n=new Date().getFullYear(),i=e.toLowerCase().endsWith("@seima.com.au")?`<p style="margin:16px 0 0;color:#166534;font-size:14px;line-height:1.6;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:12px 16px;">
          <strong>Staff access:</strong> Once verified, you will have access to staff features including competitor cross-referencing.</p>`:"",l=`<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fa;padding:32px 0;">
<tr><td align="center">
<table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
  <tr><td style="background:#a09484;padding:24px 32px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">SEIMA</h1>
  </td></tr>
  <tr><td style="padding:32px;">
    <p style="margin:0 0 16px;color:#222;font-size:15px;">Hi ${r},</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6;">Welcome to the Seima Product Presenter! Verify your email address using the code below. This code expires in 1 hour.</p>
    <div style="text-align:center;margin:24px 0;">
      <div style="display:inline-block;background:#f3f0ed;border:2px solid #a09484;border-radius:8px;padding:16px 32px;letter-spacing:6px;font-size:28px;font-weight:700;color:#222;">${o}</div>
    </div>
    <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">Sign in at <a href="https://presenter.seima.com.au" style="color:#a09484;text-decoration:none;font-weight:600;">presenter.seima.com.au</a> and enter this code when prompted to verify your email and access staff features.</p>
    ${i}
  </td></tr>
  <tr><td style="background:#f8f8fa;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;color:#9ca3af;font-size:11px;">© ${n} Seima · Build with Confidence · <a href="https://www.seima.com.au" style="color:#a09484;text-decoration:none;">seima.com.au</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;try{const d={"Content-Type":"application/json",...this.getAuthHeaders()};!d.Authorization&&this.emailConfig.SEIMA_EMAIL_API_KEY&&(d["X-Api-Key"]=this.emailConfig.SEIMA_EMAIL_API_KEY),console.log("📧 Sending verification email to:",e);const u=await fetch(s,{method:"POST",headers:d,body:JSON.stringify({to:e,toName:r,subject:"Verify your email — Seima Product Presenter",html:l,fromName:this.emailConfig.FROM_NAME||"Seima Team"})}),h=await u.json().catch(()=>({}));u.ok?console.log("✅ Verification email sent to:",e):console.error("Verification email failed:",u.status,h)}catch(d){console.error("Failed to send verification email:",d)}}async resetPassword(e,t,o){if(!e||!t||!o)return{success:!1,error:"All fields are required"};const s=this.validatePassword(o);if(!s.valid)return{success:!1,error:s.error};try{return await this.apiRequest("userResetPassword",{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:o})}catch(r){return console.error("Password reset error:",r),{success:!1,error:"Failed to reset password. Please try again."}}}async verifyEmail(e,t){if(!e||!t)return{success:!1,error:"Email and verification code are required"};try{const o=await this.apiRequest("userVerifyEmail",{email:e.trim().toLowerCase(),token:t.trim().toUpperCase()});return o.success&&this.isLoggedIn()&&this.session.user.email.toLowerCase()===e.trim().toLowerCase()&&(this.session.user.emailVerified=!0,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(this.session.user)),o}catch(o){return console.error("Email verification error:",o),{success:!1,error:"Verification failed. Please try again."}}}async requestEmailVerification(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const t=await this.apiRequest("userRequestEmailVerification",{email:e.trim().toLowerCase()});return t.success&&t.verifyToken&&await this.sendVerificationEmail(t.userEmail,t.userName,t.verifyToken),{success:!0,message:"If this email exists, a verification code has been sent"}}catch(t){return console.error("Request verification error:",t),{success:!1,error:"Failed to send verification code. Please try again."}}}isEmailVerified(){const e=this.getCurrentUser();return e?e.emailVerified!==!1:!1}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};const o=this.validatePassword(t);if(!o.valid)return{success:!1,error:o.error};try{const s=await this.apiRequest("userChangePassword",{email:this.session.user.email,currentPassword:e,newPassword:t});return s.success&&s.sessionToken&&(this.session.token=s.sessionToken,this.saveSession(this.session)),s}catch(s){return console.error("Change password error:",s),{success:!1,error:"Failed to change password. Please try again."}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userUpdateProfile",{email:this.session.user.email,updates:JSON.stringify(e)});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(t){return console.error("Update profile error:",t),{success:!1,error:"Failed to update profile. Please try again."}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userDeleteAccount",{email:this.session.user.email,password:e});return t.success&&this.clearSession(),t}catch(t){return console.error("Delete account error:",t),{success:!1,error:"Failed to delete account. Please try again."}}}}const authService=new AuthService;class AuthUI{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product App"},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById("auth-ui-styles"))return;const e=document.createElement("style");e.id="auth-ui-styles",e.textContent=`
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
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null;const t=`
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
    `;this.showModal(t),this.setupLoginHandlers(e)}showRegister(){const e=`
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
    `;this.showModal(e),this.setupRegisterHandlers()}showForgotPassword(){const e=`
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
    `;this.showModal(e),this.setupForgotHandlers()}showResetPassword(e=""){const t=`
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
    `;this.showModal(t),this.setupResetHandlers()}showVerifyEmail(e="",t=null){const o=`
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
    `;this.showModal(o),this.setupVerifyEmailHandlers(t)}_escapeAttr(e){if(!e)return"";const t=document.createElement("div");return t.textContent=e,t.innerHTML}showEditProfile(e=null){const t=authService.getCurrentUser();if(!t){console.warn("Cannot edit profile: not logged in");return}const o=`
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
              <input type="email" id="profile-email" value="${this._escapeAttr(t.email||"")}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${this._escapeAttr(t.name||"")}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${this._escapeAttr(t.position||"")}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${this._escapeAttr(t.phone||"")}" placeholder="Your phone number">
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
    `;this.showModal(o),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){var o;const t=document.getElementById("edit-profile-form");t==null||t.addEventListener("submit",async s=>{var l,d,u,h,m,p;s.preventDefault();const r=(d=(l=document.getElementById("profile-name"))==null?void 0:l.value)==null?void 0:d.trim(),n=((h=(u=document.getElementById("profile-position"))==null?void 0:u.value)==null?void 0:h.trim())||"",c=((p=(m=document.getElementById("profile-phone"))==null?void 0:m.value)==null?void 0:p.trim())||"";if(!r){this.showMessage("Name is required");return}this.setLoading("profile-submit",!0);const i=await authService.updateProfile({name:r,position:n,phone:c});this.setLoading("profile-submit",!1),i.success?(this.showMessage("Profile updated successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e(i.user)},1e3)):this.showMessage(i.error)}),(o=document.getElementById("profile-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showChangePassword(e=null){if(!authService.isLoggedIn()){console.warn("Cannot change password: not logged in");return}const t=`
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
    `;this.showModal(t),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){var o;const t=document.getElementById("change-password-form");t==null||t.addEventListener("submit",async s=>{var l,d,u;s.preventDefault();const r=(l=document.getElementById("current-password"))==null?void 0:l.value,n=(d=document.getElementById("new-password"))==null?void 0:d.value,c=(u=document.getElementById("confirm-password"))==null?void 0:u.value;if(n!==c){this.showMessage("New passwords do not match");return}if(n.length<8){this.showMessage("New password must be at least 8 characters");return}if(!/\d/.test(n)){this.showMessage("New password must contain at least one number");return}this.setLoading("password-submit",!0);const i=await authService.changePassword(r,n);this.setLoading("password-submit",!1),i.success?(this.showMessage("Password changed successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(i.error)}),(o=document.getElementById("password-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showUserMenu(e,t={}){var i,l,d;const o=authService.getCurrentUser();if(!o)return;const s=document.getElementById("auth-user-menu");if(s){s.remove();return}const n=`
      <div id="auth-user-menu" class="auth-user-menu">
        <div class="auth-user-menu-header">
          <div class="auth-user-menu-avatar">${this.getInitials(o.name)}</div>
          <div class="auth-user-menu-info">
            <div class="auth-user-menu-name">${o.name||"User"}</div>
            <div class="auth-user-menu-email">${o.email||""}</div>
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
    `;document.body.insertAdjacentHTML("beforeend",n);const c=document.getElementById("auth-user-menu");if(e){const u=e.getBoundingClientRect();c.style.position="fixed",c.style.top=u.bottom+8+"px",c.style.right=window.innerWidth-u.right+"px"}(i=document.getElementById("user-menu-profile"))==null||i.addEventListener("click",()=>{c.remove(),this.showEditProfile()}),(l=document.getElementById("user-menu-password"))==null||l.addEventListener("click",()=>{c.remove(),this.showChangePassword()}),(d=document.getElementById("user-menu-logout"))==null||d.addEventListener("click",()=>{c.remove(),authService.logout(),t.onLogout&&t.onLogout()}),setTimeout(()=>{const u=h=>{!c.contains(h.target)&&h.target!==e&&(c.remove(),document.removeEventListener("click",u))};document.addEventListener("click",u)},10)}showModal(e){var o;this.closeModal();const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById("auth-modal"),(o=document.getElementById("auth-close"))==null||o.addEventListener("click",()=>this.closeModal()),document.addEventListener("keydown",this.escHandler=s=>{s.key==="Escape"&&this.closeModal()})}closeModal(){this.currentModal&&(this.currentModal.remove(),this.currentModal=null),this.escHandler&&document.removeEventListener("keydown",this.escHandler)}showMessage(e,t="error"){const o=document.getElementById("auth-message");if(o){const s=document.createElement("div");s.className=`auth-message ${t}`,s.textContent=e,o.innerHTML="",o.appendChild(s)}}setLoading(e,t){const o=document.getElementById(e);o&&(t?(o.disabled=!0,o.dataset.originalText=o.textContent,o.innerHTML='<span class="auth-spinner"></span>Please wait...'):(o.disabled=!1,o.textContent=o.dataset.originalText||"Submit"))}setupLoginHandlers(e){var o,s,r;const t=document.getElementById("login-form");t==null||t.addEventListener("submit",async n=>{var u,h,m,p;n.preventDefault();const c=(u=document.getElementById("login-email"))==null?void 0:u.value,i=(h=document.getElementById("login-password"))==null?void 0:h.value,l=((m=document.getElementById("login-remember"))==null?void 0:m.checked)||!1;this.setLoading("login-submit",!0);const d=await authService.login(c,i,l);this.setLoading("login-submit",!1),d.success?(this.closeModal(),e&&e(d.user),(p=this.pendingAction)!=null&&p.callback&&(this.pendingAction.callback(d.user),this.pendingAction=null)):this.showMessage(d.error)}),(o=document.getElementById("show-register"))==null||o.addEventListener("click",()=>this.showRegister()),(s=document.getElementById("show-forgot"))==null||s.addEventListener("click",()=>this.showForgotPassword()),(r=document.getElementById("show-verify"))==null||r.addEventListener("click",()=>this.showVerifyEmail())}setupRegisterHandlers(){var t;const e=document.getElementById("register-form");e==null||e.addEventListener("submit",async o=>{var d,u,h,m,p;o.preventDefault();const s=(d=document.getElementById("register-name"))==null?void 0:d.value,r=(u=document.getElementById("register-email"))==null?void 0:u.value,n=(h=document.getElementById("register-password"))==null?void 0:h.value,c=((m=document.getElementById("register-position"))==null?void 0:m.value)||"",i=((p=document.getElementById("register-phone"))==null?void 0:p.value)||"";this.setLoading("register-submit",!0);const l=await authService.register(r,n,s,c,i);this.setLoading("register-submit",!1),l.success?(this.closeModal(),this.showVerifyEmail(r.trim(),()=>{})):this.showMessage(l.error)}),(t=document.getElementById("show-login"))==null||t.addEventListener("click",()=>this.showLogin())}setupForgotHandlers(){var t;const e=document.getElementById("forgot-form");e==null||e.addEventListener("submit",async o=>{var n;o.preventDefault();const s=(n=document.getElementById("forgot-email"))==null?void 0:n.value;this.setLoading("forgot-submit",!0);const r=await authService.requestPasswordReset(s);this.setLoading("forgot-submit",!1),r.success?(this.showMessage("If this email exists, a reset code has been sent.","success"),setTimeout(()=>this.showResetPassword(s),2e3)):this.showMessage(r.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}setupResetHandlers(){var t;const e=document.getElementById("reset-form");e==null||e.addEventListener("submit",async o=>{var i,l,d;o.preventDefault();const s=(i=document.getElementById("reset-email"))==null?void 0:i.value,r=(l=document.getElementById("reset-code"))==null?void 0:l.value,n=(d=document.getElementById("reset-new-password"))==null?void 0:d.value;this.setLoading("reset-submit",!0);const c=await authService.resetPassword(s,r,n);this.setLoading("reset-submit",!1),c.success?(this.showMessage("Password reset successfully! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(c.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}setupVerifyEmailHandlers(e){var o,s;const t=document.getElementById("verify-form");t==null||t.addEventListener("submit",async r=>{var l,d;r.preventDefault();const n=(l=document.getElementById("verify-email"))==null?void 0:l.value,c=(d=document.getElementById("verify-code"))==null?void 0:d.value;this.setLoading("verify-submit",!0);const i=await authService.verifyEmail(n,c);this.setLoading("verify-submit",!1),i.success?(this.showMessage("Email verified successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e(),this.showLogin()},1500)):this.showMessage(i.error)}),(o=document.getElementById("verify-resend"))==null||o.addEventListener("click",async()=>{var c;const r=(c=document.getElementById("verify-email"))==null?void 0:c.value;if(!r){this.showMessage("Please enter your email first");return}this.setLoading("verify-resend",!0);const n=await authService.requestEmailVerification(r);this.setLoading("verify-resend",!1),this.showMessage(n.success?"Verification code sent! Check your email.":n.error,n.success?"success":"error")}),(s=document.getElementById("verify-to-login"))==null||s.addEventListener("click",()=>this.showLogin())}getInitials(e){if(!e)return"?";const t=e.split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t="continue"){authService.isLoggedIn()?e(authService.getCurrentUser()):this.showLogin(e)}}const authUI=new AuthUI;function isArray(a){return Array.isArray?Array.isArray(a):getTag(a)==="[object Array]"}function baseToString(a){if(typeof a=="string")return a;let e=a+"";return e=="0"&&1/a==-1/0?"-0":e}function toString(a){return a==null?"":baseToString(a)}function isString(a){return typeof a=="string"}function isNumber(a){return typeof a=="number"}function isBoolean(a){return a===!0||a===!1||isObjectLike(a)&&getTag(a)=="[object Boolean]"}function isObject(a){return typeof a=="object"}function isObjectLike(a){return isObject(a)&&a!==null}function isDefined(a){return a!=null}function isBlank(a){return!a.trim().length}function getTag(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}const INCORRECT_INDEX_TYPE="Incorrect 'index' type",LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY=a=>`Invalid value for key ${a}`,PATTERN_LENGTH_TOO_LARGE=a=>`Pattern length exceeds max of ${a}.`,MISSING_KEY_PROPERTY=a=>`Missing ${a} property in key`,INVALID_KEY_WEIGHT_VALUE=a=>`Property 'weight' in key '${a}' must be a positive integer`,hasOwn=Object.prototype.hasOwnProperty;class KeyStore{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(o=>{let s=createKey(o);this._keys.push(s),this._keyMap[s.id]=s,t+=s.weight}),this._keys.forEach(o=>{o.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function createKey(a){let e=null,t=null,o=null,s=1,r=null;if(isString(a)||isArray(a))o=a,e=createKeyPath(a),t=createKeyId(a);else{if(!hasOwn.call(a,"name"))throw new Error(MISSING_KEY_PROPERTY("name"));const n=a.name;if(o=n,hasOwn.call(a,"weight")&&(s=a.weight,s<=0))throw new Error(INVALID_KEY_WEIGHT_VALUE(n));e=createKeyPath(n),t=createKeyId(n),r=a.getFn}return{path:e,id:t,weight:s,src:o,getFn:r}}function createKeyPath(a){return isArray(a)?a:a.split(".")}function createKeyId(a){return isArray(a)?a.join("."):a}function get(a,e){let t=[],o=!1;const s=(r,n,c)=>{if(isDefined(r))if(!n[c])t.push(r);else{let i=n[c];const l=r[i];if(!isDefined(l))return;if(c===n.length-1&&(isString(l)||isNumber(l)||isBoolean(l)))t.push(toString(l));else if(isArray(l)){o=!0;for(let d=0,u=l.length;d<u;d+=1)s(l[d],n,c+1)}else n.length&&s(l,n,c+1)}};return s(a,isString(e)?e.split("."):e,0),o?t:t[0]}const MatchOptions={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BasicOptions={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,e)=>a.score===e.score?a.idx<e.idx?-1:1:a.score<e.score?-1:1},FuzzyOptions={location:0,threshold:.6,distance:100},AdvancedOptions={useExtendedSearch:!1,getFn:get,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Config={...BasicOptions,...MatchOptions,...FuzzyOptions,...AdvancedOptions};const SPACE=/[^ ]+/g;function norm(a=1,e=3){const t=new Map,o=Math.pow(10,e);return{get(s){const r=s.match(SPACE).length;if(t.has(r))return t.get(r);const n=1/Math.pow(r,.5*a),c=parseFloat(Math.round(n*o)/o);return t.set(r,c),c},clear(){t.clear()}}}class FuseIndex{constructor({getFn:e=Config.getFn,fieldNormWeight:t=Config.fieldNormWeight}={}){this.norm=norm(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,o)=>{this._keysMap[t.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();isString(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,o=this.size();t<o;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!isDefined(e)||isBlank(e))return;let o={v:e,i:t,n:this.norm.get(e)};this.records.push(o)}_addObject(e,t){let o={i:t,$:{}};this.keys.forEach((s,r)=>{let n=s.getFn?s.getFn(e):this.getFn(e,s.path);if(isDefined(n)){if(isArray(n)){let c=[];const i=[{nestedArrIndex:-1,value:n}];for(;i.length;){const{nestedArrIndex:l,value:d}=i.pop();if(isDefined(d))if(isString(d)&&!isBlank(d)){let u={v:d,i:l,n:this.norm.get(d)};c.push(u)}else isArray(d)&&d.forEach((u,h)=>{i.push({nestedArrIndex:h,value:u})})}o.$[r]=c}else if(isString(n)&&!isBlank(n)){let c={v:n,n:this.norm.get(n)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function createIndex(a,e,{getFn:t=Config.getFn,fieldNormWeight:o=Config.fieldNormWeight}={}){const s=new FuseIndex({getFn:t,fieldNormWeight:o});return s.setKeys(a.map(createKey)),s.setSources(e),s.create(),s}function parseIndex(a,{getFn:e=Config.getFn,fieldNormWeight:t=Config.fieldNormWeight}={}){const{keys:o,records:s}=a,r=new FuseIndex({getFn:e,fieldNormWeight:t});return r.setKeys(o),r.setIndexRecords(s),r}function computeScore$1(a,{errors:e=0,currentLocation:t=0,expectedLocation:o=0,distance:s=Config.distance,ignoreLocation:r=Config.ignoreLocation}={}){const n=e/a.length;if(r)return n;const c=Math.abs(o-t);return s?n+c/s:c?1:n}function convertMaskToIndices(a=[],e=Config.minMatchCharLength){let t=[],o=-1,s=-1,r=0;for(let n=a.length;r<n;r+=1){let c=a[r];c&&o===-1?o=r:!c&&o!==-1&&(s=r-1,s-o+1>=e&&t.push([o,s]),o=-1)}return a[r-1]&&r-o>=e&&t.push([o,r-1]),t}const MAX_BITS=32;function search(a,e,t,{location:o=Config.location,distance:s=Config.distance,threshold:r=Config.threshold,findAllMatches:n=Config.findAllMatches,minMatchCharLength:c=Config.minMatchCharLength,includeMatches:i=Config.includeMatches,ignoreLocation:l=Config.ignoreLocation}={}){if(e.length>MAX_BITS)throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));const d=e.length,u=a.length,h=Math.max(0,Math.min(o,u));let m=r,p=h;const f=c>1||i,g=f?Array(u):[];let w;for(;(w=a.indexOf(e,p))>-1;){let E=computeScore$1(e,{currentLocation:w,expectedLocation:h,distance:s,ignoreLocation:l});if(m=Math.min(E,m),p=w+d,f){let L=0;for(;L<d;)g[w+L]=1,L+=1}}p=-1;let y=[],S=1,b=d+u;const v=1<<d-1;for(let E=0;E<d;E+=1){let L=0,R=b;for(;L<R;)computeScore$1(e,{errors:E,currentLocation:h+R,expectedLocation:h,distance:s,ignoreLocation:l})<=m?L=R:b=R,R=Math.floor((b-L)/2+L);b=R;let B=Math.max(1,h-R+1),A=n?u:Math.min(h+R,u)+d,M=Array(A+2);M[A+1]=(1<<E)-1;for(let C=A;C>=B;C-=1){let P=C-1,T=t[a.charAt(P)];if(f&&(g[P]=+!!T),M[C]=(M[C+1]<<1|1)&T,E&&(M[C]|=(y[C+1]|y[C])<<1|1|y[C+1]),M[C]&v&&(S=computeScore$1(e,{errors:E,currentLocation:P,expectedLocation:h,distance:s,ignoreLocation:l}),S<=m)){if(m=S,p=P,p<=h)break;B=Math.max(1,2*h-p)}}if(computeScore$1(e,{errors:E+1,currentLocation:h,expectedLocation:h,distance:s,ignoreLocation:l})>m)break;y=M}const I={isMatch:p>=0,score:Math.max(.001,S)};if(f){const E=convertMaskToIndices(g,c);E.length?i&&(I.indices=E):I.isMatch=!1}return I}function createPatternAlphabet(a){let e={};for(let t=0,o=a.length;t<o;t+=1){const s=a.charAt(t);e[s]=(e[s]||0)|1<<o-t-1}return e}const stripDiacritics=String.prototype.normalize?a=>a.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):a=>a;class BitapSearch{constructor(e,{location:t=Config.location,threshold:o=Config.threshold,distance:s=Config.distance,includeMatches:r=Config.includeMatches,findAllMatches:n=Config.findAllMatches,minMatchCharLength:c=Config.minMatchCharLength,isCaseSensitive:i=Config.isCaseSensitive,ignoreDiacritics:l=Config.ignoreDiacritics,ignoreLocation:d=Config.ignoreLocation}={}){if(this.options={location:t,threshold:o,distance:s,includeMatches:r,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:i,ignoreDiacritics:l,ignoreLocation:d},e=i?e:e.toLowerCase(),e=l?stripDiacritics(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const u=(m,p)=>{this.chunks.push({pattern:m,alphabet:createPatternAlphabet(m),startIndex:p})},h=this.pattern.length;if(h>MAX_BITS){let m=0;const p=h%MAX_BITS,f=h-p;for(;m<f;)u(this.pattern.substr(m,MAX_BITS),m),m+=MAX_BITS;if(p){const g=h-MAX_BITS;u(this.pattern.substr(g),g)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:o,includeMatches:s}=this.options;if(e=t?e:e.toLowerCase(),e=o?stripDiacritics(e):e,this.pattern===e){let f={isMatch:!0,score:0};return s&&(f.indices=[[0,e.length-1]]),f}const{location:r,distance:n,threshold:c,findAllMatches:i,minMatchCharLength:l,ignoreLocation:d}=this.options;let u=[],h=0,m=!1;this.chunks.forEach(({pattern:f,alphabet:g,startIndex:w})=>{const{isMatch:y,score:S,indices:b}=search(e,f,g,{location:r+w,distance:n,threshold:c,findAllMatches:i,minMatchCharLength:l,includeMatches:s,ignoreLocation:d});y&&(m=!0),h+=S,y&&b&&(u=[...u,...b])});let p={isMatch:m,score:m?h/this.chunks.length:1};return m&&s&&(p.indices=u),p}}class BaseMatch{constructor(e){this.pattern=e}static isMultiMatch(e){return getMatch(e,this.multiRegex)}static isSingleMatch(e){return getMatch(e,this.singleRegex)}search(){}}function getMatch(a,e){const t=a.match(e);return t?t[1]:null}class ExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class InverseExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const o=e.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,e.length-1]}}}class PrefixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class InversePrefixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class SuffixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class InverseSuffixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class FuzzyMatch extends BaseMatch{constructor(e,{location:t=Config.location,threshold:o=Config.threshold,distance:s=Config.distance,includeMatches:r=Config.includeMatches,findAllMatches:n=Config.findAllMatches,minMatchCharLength:c=Config.minMatchCharLength,isCaseSensitive:i=Config.isCaseSensitive,ignoreDiacritics:l=Config.ignoreDiacritics,ignoreLocation:d=Config.ignoreLocation}={}){super(e),this._bitapSearch=new BitapSearch(e,{location:t,threshold:o,distance:s,includeMatches:r,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:i,ignoreDiacritics:l,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class IncludeMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,o;const s=[],r=this.pattern.length;for(;(o=e.indexOf(this.pattern,t))>-1;)t=o+r,s.push([o,t-1]);const n=!!s.length;return{isMatch:n,score:n?0:1,indices:s}}}const searchers=[ExactMatch,IncludeMatch,PrefixExactMatch,InversePrefixExactMatch,InverseSuffixExactMatch,SuffixExactMatch,InverseExactMatch,FuzzyMatch],searchersLen=searchers.length,SPACE_RE=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,OR_TOKEN="|";function parseQuery(a,e={}){return a.split(OR_TOKEN).map(t=>{let o=t.trim().split(SPACE_RE).filter(r=>r&&!!r.trim()),s=[];for(let r=0,n=o.length;r<n;r+=1){const c=o[r];let i=!1,l=-1;for(;!i&&++l<searchersLen;){const d=searchers[l];let u=d.isMultiMatch(c);u&&(s.push(new d(u,e)),i=!0)}if(!i)for(l=-1;++l<searchersLen;){const d=searchers[l];let u=d.isSingleMatch(c);if(u){s.push(new d(u,e));break}}}return s})}const MultiMatchSet=new Set([FuzzyMatch.type,IncludeMatch.type]);class ExtendedSearch{constructor(e,{isCaseSensitive:t=Config.isCaseSensitive,ignoreDiacritics:o=Config.ignoreDiacritics,includeMatches:s=Config.includeMatches,minMatchCharLength:r=Config.minMatchCharLength,ignoreLocation:n=Config.ignoreLocation,findAllMatches:c=Config.findAllMatches,location:i=Config.location,threshold:l=Config.threshold,distance:d=Config.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:o,includeMatches:s,minMatchCharLength:r,findAllMatches:c,ignoreLocation:n,location:i,threshold:l,distance:d},e=t?e:e.toLowerCase(),e=o?stripDiacritics(e):e,this.pattern=e,this.query=parseQuery(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:s,ignoreDiacritics:r}=this.options;e=s?e:e.toLowerCase(),e=r?stripDiacritics(e):e;let n=0,c=[],i=0;for(let l=0,d=t.length;l<d;l+=1){const u=t[l];c.length=0,n=0;for(let h=0,m=u.length;h<m;h+=1){const p=u[h],{isMatch:f,indices:g,score:w}=p.search(e);if(f){if(n+=1,i+=w,o){const y=p.constructor.type;MultiMatchSet.has(y)?c=[...c,...g]:c.push(g)}}else{i=0,n=0,c.length=0;break}}if(n){let h={isMatch:!0,score:i/n};return o&&(h.indices=c),h}}return{isMatch:!1,score:1}}}const registeredSearchers=[];function register(...a){registeredSearchers.push(...a)}function createSearcher(a,e){for(let t=0,o=registeredSearchers.length;t<o;t+=1){let s=registeredSearchers[t];if(s.condition(a,e))return new s(a,e)}return new BitapSearch(a,e)}const LogicalOperator={AND:"$and",OR:"$or"},KeyType={PATH:"$path",PATTERN:"$val"},isExpression=a=>!!(a[LogicalOperator.AND]||a[LogicalOperator.OR]),isPath=a=>!!a[KeyType.PATH],isLeaf=a=>!isArray(a)&&isObject(a)&&!isExpression(a),convertToExplicit=a=>({[LogicalOperator.AND]:Object.keys(a).map(e=>({[e]:a[e]}))});function parse(a,e,{auto:t=!0}={}){const o=s=>{let r=Object.keys(s);const n=isPath(s);if(!n&&r.length>1&&!isExpression(s))return o(convertToExplicit(s));if(isLeaf(s)){const i=n?s[KeyType.PATH]:r[0],l=n?s[KeyType.PATTERN]:s[i];if(!isString(l))throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(i));const d={keyId:createKeyId(i),pattern:l};return t&&(d.searcher=createSearcher(l,e)),d}let c={children:[],operator:r[0]};return r.forEach(i=>{const l=s[i];isArray(l)&&l.forEach(d=>{c.children.push(o(d))})}),c};return isExpression(a)||(a=convertToExplicit(a)),o(a)}function computeScore(a,{ignoreFieldNorm:e=Config.ignoreFieldNorm}){a.forEach(t=>{let o=1;t.matches.forEach(({key:s,norm:r,score:n})=>{const c=s?s.weight:null;o*=Math.pow(n===0&&c?Number.EPSILON:n,(c||1)*(e?1:r))}),t.score=o})}function transformMatches(a,e){const t=a.matches;e.matches=[],isDefined(t)&&t.forEach(o=>{if(!isDefined(o.indices)||!o.indices.length)return;const{indices:s,value:r}=o;let n={indices:s,value:r};o.key&&(n.key=o.key.src),o.idx>-1&&(n.refIndex=o.idx),e.matches.push(n)})}function transformScore(a,e){e.score=a.score}function format(a,e,{includeMatches:t=Config.includeMatches,includeScore:o=Config.includeScore}={}){const s=[];return t&&s.push(transformMatches),o&&s.push(transformScore),a.map(r=>{const{idx:n}=r,c={item:e[n],refIndex:n};return s.length&&s.forEach(i=>{i(r,c)}),c})}class Fuse{constructor(e,t={},o){this.options={...Config,...t},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(e,o)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof FuseIndex))throw new Error(INCORRECT_INDEX_TYPE);this._myIndex=t||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){isDefined(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let o=0,s=this._docs.length;o<s;o+=1){const r=this._docs[o];e(r,o)&&(this.removeAt(o),o-=1,s-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:o,includeScore:s,shouldSort:r,sortFn:n,ignoreFieldNorm:c}=this.options;let i=isString(e)?isString(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return computeScore(i,{ignoreFieldNorm:c}),r&&i.sort(n),isNumber(t)&&t>-1&&(i=i.slice(0,t)),format(i,this._docs,{includeMatches:o,includeScore:s})}_searchStringList(e){const t=createSearcher(e,this.options),{records:o}=this._myIndex,s=[];return o.forEach(({v:r,i:n,n:c})=>{if(!isDefined(r))return;const{isMatch:i,score:l,indices:d}=t.searchIn(r);i&&s.push({item:r,idx:n,matches:[{score:l,value:r,norm:c,indices:d}]})}),s}_searchLogical(e){const t=parse(e,this.options),o=(c,i,l)=>{if(!c.children){const{keyId:u,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(i,u),searcher:h});return m&&m.length?[{idx:l,item:i,matches:m}]:[]}const d=[];for(let u=0,h=c.children.length;u<h;u+=1){const m=c.children[u],p=o(m,i,l);if(p.length)d.push(...p);else if(c.operator===LogicalOperator.AND)return[]}return d},s=this._myIndex.records,r={},n=[];return s.forEach(({$:c,i})=>{if(isDefined(c)){let l=o(t,c,i);l.length&&(r[i]||(r[i]={idx:i,item:c,matches:[]},n.push(r[i])),l.forEach(({matches:d})=>{r[i].matches.push(...d)}))}}),n}_searchObjectList(e){const t=createSearcher(e,this.options),{keys:o,records:s}=this._myIndex,r=[];return s.forEach(({$:n,i:c})=>{if(!isDefined(n))return;let i=[];o.forEach((l,d)=>{i.push(...this._findMatches({key:l,value:n[d],searcher:t}))}),i.length&&r.push({idx:c,item:n,matches:i})}),r}_findMatches({key:e,value:t,searcher:o}){if(!isDefined(t))return[];let s=[];if(isArray(t))t.forEach(({v:r,i:n,n:c})=>{if(!isDefined(r))return;const{isMatch:i,score:l,indices:d}=o.searchIn(r);i&&s.push({score:l,key:e,value:r,idx:n,norm:c,indices:d})});else{const{v:r,n}=t,{isMatch:c,score:i,indices:l}=o.searchIn(r);c&&s.push({score:i,key:e,value:r,norm:n,indices:l})}return s}}Fuse.version="7.1.0";Fuse.createIndex=createIndex;Fuse.parseIndex=parseIndex;Fuse.config=Config;Fuse.parseQuery=parse;register(ExtendedSearch);const FUSE_OPTIONS={keys:[{name:"OrderCode",weight:1},{name:"ProductName",weight:.8},{name:"Range",weight:.5},{name:"Group",weight:.5},{name:"SubGroup",weight:.5},{name:"Description",weight:.4},{name:"Finish",weight:.35},{name:"Colour",weight:.35},{name:"LongDescription",weight:.2}],threshold:.4,includeScore:!0,ignoreLocation:!0,minMatchCharLength:2};function normaliseProduct(a){return{...a,ProductName:a.ProductName||a["Product Name"]||"",LongDescription:a.LongDescription||a["Long Description"]||"",SubGroup:a.SubGroup||a.Subgroup||"",Colour:a.Colour||a.Color||"",Barcode:(a.BARCODE||a.Barcode||"").toString()}}class ProductSearch{constructor(e={}){this._getSynonyms=e.getSynonyms||(t=>[t]),this._products=[],this._normalised=[],this._fuse=null,this._codeIndex=new Map,this._termIndex=new Map}buildIndex(e){this._products=e,this._normalised=e.map(normaliseProduct),this._fuse=new Fuse(this._normalised,FUSE_OPTIONS),this._codeIndex.clear(),this._termIndex.clear();for(let t=0;t<e.length;t++){const o=e[t];o.OrderCode&&(this._codeIndex.set(o.OrderCode.toString().toLowerCase().trim(),t),this._codeIndex.set(o.OrderCode.toString().toLowerCase().trim().replace(/[-\s]/g,""),t));const s=(o.BARCODE||o.Barcode||"").toString().trim();s&&(this._codeIndex.set(s.toLowerCase(),t),this._codeIndex.set(s.toLowerCase().replace(/[-\s]/g,""),t));const r=this._normalised[t],c=[r.OrderCode,r.ProductName,r.Description,r.Range,r.Group,r.SubGroup,r.Finish,r.Colour,r.LongDescription].join(" ").toLowerCase().split(/\s+/).filter(l=>l.length>=2),i=new Set;for(const l of c){if(i.has(l))continue;i.add(l);let d=this._termIndex.get(l);d||(d=[],this._termIndex.set(l,d)),d.push(t)}}}findByCode(e){if(!e)return null;const t=e.toString().toLowerCase().trim(),o=this._codeIndex.get(t)??this._codeIndex.get(t.replace(/[-\s]/g,""));return o!=null?this._products[o]:null}search(e,t=50,{fuzzy:o=!1}={}){return!e||e.length<2?[]:o?this._searchFuzzy(e,t):this._searchExact(e,t)}_searchExact(e,t){const o=e.toLowerCase().trim().split(/\s+/).filter(c=>c.length>=2);if(o.length===0)return[];let s=null;if(this._termIndex.size>0){const c=o[0],i=this._getSynonyms(c),l=new Set;for(const d of i)for(const[u,h]of this._termIndex)if(u.includes(d))for(const m of h)l.add(m);l.size>0&&l.size<this._normalised.length*.7&&(s=l)}const r=[],n=s?[...s].map(c=>this._normalised[c]):this._normalised;for(const c of n){const i=o.map(d=>this._scoreExact(c,d));if(i.some(d=>d===0))continue;const l=i.reduce((d,u)=>d+u,0)/i.length;r.push({product:c,score:l})}return r.sort((c,i)=>i.score-c.score),r.slice(0,t).map(c=>c.product)}_scoreExact(e,t){let o=0;const s=(e.OrderCode||"").toString().toLowerCase().trim(),r=(e.Barcode||"").toString().toLowerCase().trim(),n=(e.ProductName||"").toLowerCase().trim(),c=(e.Description||"").toLowerCase().trim(),i=(e.LongDescription||"").toLowerCase().trim(),l=(e.Range||"").toLowerCase().trim(),d=(e.Group||"").toLowerCase().trim(),u=(e.SubGroup||"").toLowerCase().trim(),h=(e.Finish||"").toLowerCase().trim(),m=(e.Colour||"").toLowerCase().trim(),p=/^\d+$/.test(t),f=this._getSynonyms(t);if(f.some(g=>g!==t)){const g=[n,c,d,u,l,i].join(" ");for(const w of f)if(g.includes(w)){o=Math.max(o,45);break}}return s===t||r===t?100:(s.includes(t)&&(o=Math.max(o,90)),!p&&r.includes(t)&&(o=Math.max(o,90)),n===t?o=Math.max(o,80):n.startsWith(t)?o=Math.max(o,70):n.includes(t)&&(o=Math.max(o,60)),u===t||d===t?o=Math.max(o,62):l===t?o=Math.max(o,56):(l.includes(t)||d.includes(t)||u.includes(t))&&(o=Math.max(o,50)),c.includes(t)&&(o=Math.max(o,40)),(h.includes(t)||m.includes(t))&&(o=Math.max(o,30)),i.includes(t)&&(o=Math.max(o,20)),o)}_searchFuzzy(e,t){if(!this._fuse)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(n=>n.length>=2);if(o.length===0)return[];const s=new Map;for(const n of o){const c=this._getSynonyms(n);for(const i of c){const l=this._fuse.search(i,{limit:t*2});for(const d of l){const u=d.item.OrderCode;if(!u)continue;const h=s.get(u);(!h||d.score<h.score)&&s.set(u,{product:d.item,score:d.score,matchedTerms:h?h.matchedTerms:new Set}),s.get(u).matchedTerms.add(n)}}}const r=[...s.values()];return r.sort((n,c)=>{const i=c.matchedTerms.size-n.matchedTerms.size;return i!==0?i:n.score-c.score}),r.slice(0,t).map(n=>n.product)}}const __vite_import_meta_env__={};function stripSpreadsheetHyperlink(a){let e=String(a??"").trim();if(!e)return"";const t=e.match(/^=HYPERLINK\s*\(\s*"([^"]+)"/i);if(t)return t[1].trim();const o=e.match(/^=HYPERLINK\s*\(\s*'([^']+)'/i);return o?o[1].trim():((e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"))&&(e=e.slice(1,-1).trim()),e)}function normalizePdfHyperlinkUrl(a){const e=stripSpreadsheetHyperlink(a);return!e||e==="#"?"":e.startsWith("http://")||e.startsWith("https://")?e:e.startsWith("//")?`https:${e}`:/^www\./i.test(e)?`https://${e}`:/^(pages\.)?seima\.com\.au(\/|$)/i.test(e)?`https://${e}`:e}function getRasterImageFetchCandidates(a){if(!a||typeof a!="string")return[];let e=a.trim();return e.startsWith("//")&&(e=`https:${e}`),e.startsWith("data:")?[e]:!e.startsWith("http://")&&!e.startsWith("https://")?[]:[`https://wsrv.nl/?url=${encodeURIComponent(e)}`,`https://images.weserv.nl/?url=${encodeURIComponent(e)}`,`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(e)}`,e]}function absolutizeSeimaPagesAssetHref(a,e){const t=String(a??"").trim();if(!t)return"";if(/^https?:\/\//i.test(t))return t;if(t.startsWith("//"))return`https:${t}`;if(/^www\./i.test(t))return t;let o=t.replace(/^\/+/,"");return o?/^(datasheets|images|diagrams)\//i.test(o)?`https://pages.seima.com.au/${o}`:`https://pages.seima.com.au/${e}/${o}`:""}function normalizeProductHyperlinkUrl(a,e){const t=stripSpreadsheetHyperlink(a).trim();return!t||t==="#"?"":normalizePdfHyperlinkUrl(absolutizeSeimaPagesAssetHref(t,e))}function resolveSeimaRasterImageUrl(a,e){const t=a||{},o=e==="diagram"?t.Diagram_URL||t.diagramUrl||t["Diagram URL"]||t["Web Diagram"]||t["Web diagram"]||t.X_WEB_DIAG||t.X_WEB_DIAG||t.LineDrawing_URL||t["Line Drawing URL"]||"":t.Image_URL||t.imageUrl||t["Image URL"]||t.X_WEB_IMAGE||t.X_IMAGE_WEB||t.X_IMAGE_WEB||t.X_WEB_IMAGE||"",s=e==="diagram"?"diagrams":"images";return absolutizeSeimaPagesAssetHref(String(o||"").trim(),s)}function logPdfRowAssetUrlsIfDebug(a){try{if(typeof localStorage>"u"||localStorage.getItem("seimaPdfDebug")!=="1")return;const e=a||{},t=String(e.OrderCode||e.Code||"").trim();console.warn("[seimaPdfDebug]",t||"(no code)",{Image_URL:e.Image_URL||"",Diagram_URL:e.Diagram_URL||"",Datasheet_URL:e.Datasheet_URL||"",Website_URL:e.Website_URL||""})}catch{}}function enrichProductUrlsForPdfExport(a){if(!a||typeof a!="object")return a;const e={...a},t=e.Datasheet_URL||e.datasheetUrl||e["Datasheet URL"]||e.X_WEB_DSHEET||e.X_WEB_DSHEET||"",o=typeof e.URL=="string"&&/^https?:|^www\.|^\/\/|pages\.seima\.com\.au/i.test(e.URL.trim())?e.URL.trim():"",s=e.Website_URL||e.websiteUrl||e["Website URL"]||e.product_url||e.productUrl||e["Product URL"]||e.Product_URL||e["Web URL"]||o||"";return e.Image_URL=resolveSeimaRasterImageUrl(e,"image"),e.Diagram_URL=resolveSeimaRasterImageUrl(e,"diagram"),e.Datasheet_URL=normalizeProductHyperlinkUrl(String(t||"").trim(),"datasheets"),e.Website_URL=normalizePdfHyperlinkUrl(String(s||"").trim()),e}function shouldSkipPdfRasterUrl(a){if(!a||typeof a!="string")return!0;let e=a.trim();return!e||(e.startsWith("//")&&(e=`https:${e}`),e.length<10)||!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("data:")||/\/images\/\d+$/.test(e)||e.endsWith("/0")?!0:e.startsWith("data:")?!1:/\.pdf(\?|#|$)/i.test(e)?!0:!(/\.(jpe?g|png|gif|webp|svg|bmp|tif{1,2}|avif)(\?.*)?$/i.test(e)||/^https?:\/\/pages\.seima\.com\.au\/(images|diagrams)\//i.test(e)||e.startsWith("https://")||e.startsWith("http://"))}function isTechnicalDiagram(a,e){try{const t=Math.min(100,a.width),o=Math.min(100,a.height),r=e.getImageData(0,0,t,o).data,n=new Set;for(let c=0;c<r.length;c+=4){const i=`${r[c]},${r[c+1]},${r[c+2]}`;if(n.add(i),n.size>1e3)return!1}return n.size<1e3}catch(t){return console.warn("Could not analyze image for diagram detection:",t),!1}}function detectTransparency(a,e){try{const o=e.getImageData(0,0,a.width,a.height).data;for(let s=3;s<o.length;s+=4)if(o[s]<255)return!0;return!1}catch(t){return console.warn("Could not detect transparency:",t),!1}}const failedImageUrls=new Set;async function optimizeImageForPDF(a,e=400,t=.8,o=null){let s=typeof a=="string"?a.trim():"";if(s.startsWith("//")&&(s=`https:${s}`),failedImageUrls.has(s))return{url:"assets/no-image.png",format:"PNG"};if(!s||typeof s!="string"||!s.startsWith("http://")&&!s.startsWith("https://")&&!s.startsWith("data:"))return{url:"assets/no-image.png",format:"PNG"};if(shouldSkipPdfRasterUrl(s))return console.warn("Skipping malformed image URL:",(s==null?void 0:s.substring(0,50))+"..."),failedImageUrls.add(s),{url:"assets/no-image.png",format:"PNG"};const r=o&&o.length?[...o.map(n=>n+encodeURIComponent(s))]:getRasterImageFetchCandidates(s);return r.length?new Promise(n=>{let c=0,i=!1;const l=()=>{if(i)return;if(c>=r.length){i=!0,console.warn("All image fetch attempts failed for:",s.substring(0,60)),failedImageUrls.add(s),n({url:"assets/no-image.png",format:"PNG"});return}const d=r[c];c+=1;const u=new Image;u.crossOrigin="Anonymous";let h=null;u.onload=function(){if(!i){h&&clearTimeout(h);try{const m=document.createElement("canvas"),p=m.getContext("2d",{willReadFrequently:!0});let f=Math.min(e,400),g=Math.min(e,400);u.width>u.height?g=Math.round(f*u.height/u.width):f=Math.round(g*u.width/u.height),(u.width>100||u.height>100)&&(f=Math.max(f,200),g=Math.max(g,200)),m.width=f,m.height=g,p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(u,0,0,f,g);let w,y;const S=detectTransparency(m,p),b=isTechnicalDiagram(m,p);if(S||b)w=m.toDataURL("image/png",.9),y="PNG";else{const v=Math.max(t,.7);w=m.toDataURL("image/jpeg",v),y="JPEG"}i=!0,n({url:w,format:y})}catch(m){console.warn("Image optimization failed:",m),setTimeout(l,150)}}},u.onerror=function(){i||(h&&clearTimeout(h),setTimeout(l,150))},h=setTimeout(()=>{i||(u.src="",u.onload=null,u.onerror=null,setTimeout(l,50))},3e3),u.src=d};l()}):(failedImageUrls.add(s),{url:"assets/no-image.png",format:"PNG"})}function pdfPublicAssetUrl(a){const e=String(a||"").replace(/^\.\/+/,"").replace(/^\/+/,""),t="/";return t.endsWith("/")?`${t}${e}`:`${t}/${e}`}const PDF_COLORS={headerBackground:"#8B6C2B",footerBackground:"#9B9184",textPrimary:"#222",textSecondary:"#444",textSubtle:"#666",linkColor:[0,102,204],white:"#fff",headerText:"#f4f4f4"},PDF_LAYOUT={margins:{left:32,right:32},footerHeight:28,maxRowsPerPage:4,rowPadding:8,imageWidth:90,imagePadding:12,welsColumnWidth:50,codeColumnOffset:85,coverLogoWidth:250},preloadedImageCache=new Map;function getCachedImage(a){return preloadedImageCache.get(a)}function hasWelsData(a){const e=a["WELS STAR"]||a.WELS_STAR||a.WELS_STAR||a.WelsStar||"";return e&&e.toString().trim()!==""}function calculateColumnLayout(a,e={}){const{leftMargin:t=PDF_LAYOUT.margins.left,rightMargin:o=PDF_LAYOUT.margins.right,showRrp:s=!1,showPrice:r=!0,showQty:n=!0,showTotal:c=!0}=e,i=PDF_LAYOUT.imageWidth,l=PDF_LAYOUT.imagePadding,d=PDF_LAYOUT.welsColumnWidth,u=t+i*2+l*2,h=u+PDF_LAYOUT.codeColumnOffset;let m,p,f;if(s&&r&&n&&c){const g=a-280,w=g-d,y=a-200,S=a-120,b=a-60;m=[t,u,h,w,g,y,S,b],p=[i,i,w-h-10,d,y-g,S-y,b-S,60],f=["Code","Description","WELS","RRP","Price","Qty","Total"]}else if(r&&n&&c){const g=a-200,w=g-d,y=a-120,S=a-60;m=[t,u,h,w,g,y,S],p=[i,i,w-h-10,d,y-g,S-y,60],f=["Code","Description","WELS","Price","Qty","Total"]}else if(r&&!n)if(s){const g=a-180,w=g-d,y=a-90;m=[t,u,h,w,g,y],p=[i,i,w-h-10,d,y-g,90],f=["Code","Description","WELS","RRP","Price"]}else{const g=a-90,w=g-d;m=[t,u,h,w,g],p=[i,i,w-h-10,d,90],f=["Code","Description","WELS","Price"]}else if(!r&&n){const g=a-80,w=g-d;m=[t,u,h,w,g],p=[i,i,w-h-10,d,80],f=["Code","Description","WELS","Qty"]}else{const g=a-o-d;m=[t,u,h,g],p=[i,i,g-h-10,d],f=["Code","Description","WELS"]}return{colX:m,colW:p,headers:f,imgW:i,imgPad:l}}function drawPDFHeader(a,e={}){const{pageWidth:t,colX:o,colW:s,leftMargin:r=PDF_LAYOUT.margins.left,footerHeight:n=PDF_LAYOUT.footerHeight,logoDataUrl:c,logoNaturalW:i,logoNaturalH:l,headers:d=[],userDetails:u={},skipWelsHeader:h=!1,showRefAboveCode:m=!1,headerColor:p=PDF_COLORS.headerBackground}=e,f=n+5.7;if(a.setFillColor(p),a.rect(0,0,t,f,"F"),c&&i&&l){const w=i/l,y=80,S=f*.6;let b=S*w,v=S;b>y&&(b=y,v=b/w);const I=(f-v)/2;a.addImage(c,"PNG",r,I,b,v)}a.setFontSize(10),a.setTextColor(PDF_COLORS.headerText),a.setFont("helvetica","normal");const g=f-8;d.forEach((w,y)=>{if(w==="WELS"&&h)return;const S=y+1;if(S<o.length){const b=o[S]+s[S]/2;if(w==="Price"&&!u.excludePrice){a.setFont("helvetica","normal");const v=u.includeGst?"INC GST":"EX GST",I=`Price ${v}`,E=a.getTextWidth("Price "),L=b-a.getTextWidth(I)/2;a.text("Price ",L,g),a.setFont("helvetica","bold"),a.text(v,L+E,g),a.setFont("helvetica","normal")}else if(w==="RRP"){const v=u.includeGst?"INC":"EX";a.text(`RRP ${v}`,b,g,{align:"center"})}else w==="Code"&&m?(a.setFontSize(7.5),a.text("Ref",b,g-9,{align:"center"}),a.setFontSize(10),a.text("Code",b,g,{align:"center"})):a.text(w,b,g,{align:"center"})}})}function drawPDFFooter(a,e={}){const{pageWidth:t,pageHeight:o,leftMargin:s=PDF_LAYOUT.margins.left,footerHeight:r=PDF_LAYOUT.footerHeight,pageNumber:n,totalPages:c,footerColor:i=PDF_COLORS.footerBackground}=e;a.setFillColor(i),a.rect(0,o-r,t,r,"F"),a.setTextColor(PDF_COLORS.white),a.setFontSize(11);const l=o-r/2+3;a.text("www.seima.com.au",t-140,l),n!==void 0&&c!==void 0&&a.text(`Page ${n} of ${c}`,s,l)}function drawCoverPage(a,e={}){const{pageWidth:t,pageHeight:o,seimaLogoDataUrl:s,seimaLogoNaturalW:r,seimaLogoNaturalH:n,customerLogoDataUrl:c,userDetails:i={},staffContact:l,footerHeight:d=PDF_LAYOUT.footerHeight}=e,u=t/2,h=320,m=90,p=(t-h)/2,f=70;if(c){a.setFillColor(255,255,255),a.rect(p,f,h,m,"F");try{const x=new Image;x.src=c;const $=h-20,O=m-20,N=x.width/x.height||2;let W=$,H=$/N;H>O&&(H=O,W=O*N);const Y=p+(h-W)/2,V=f+(m-H)/2;a.addImage(c,"PNG",Y,V,W,H,void 0,"FAST")}catch(x){console.warn("Failed to draw customer logo:",x)}}const g=PDF_LAYOUT.coverLogoWidth,w=n&&r?g*n/r:65,y=(t-g)/2,S=f+m+80;s&&a.addImage(s,"PNG",y,S,g,w,void 0,"FAST");const b="Build with Confidence",v=S+w+28;a.setFont("helvetica","normal"),a.setFontSize(18),a.setTextColor("#333");const I=b.split(""),E=a.getTextWidth(b),R=(g-E)/(I.length-1);let B=y;I.forEach(x=>{a.text(x,B,v),B+=a.getTextWidth(x)+R}),a.setFontSize(15),a.setTextColor(PDF_COLORS.textSecondary);let A=v+50;const M=[];i!=null&&i.name&&i.name.trim()&&M.push({label:"Name:",value:i.name.trim(),bold:!0}),i!=null&&i.project&&i.project.trim()&&M.push({label:"Project:",value:i.project.trim(),bold:!0}),i!=null&&i.address&&i.address.trim()&&M.push({label:"Address:",value:i.address.trim(),bold:!0}),i!=null&&i.email&&i.email.trim()&&M.push({label:"Email:",value:i.email.trim(),bold:!0});const U=(i==null?void 0:i.telephone)||(i==null?void 0:i.phone)||"";U&&U.trim()&&M.push({label:"Telephone:",value:U.trim(),bold:!0});const C=M.length*26,P=o-d-40-A;C<P&&(A=A+(P-C)/3);let T=0;const j=M.map(x=>{a.setFont("helvetica","normal"),a.setFontSize(15);const $=a.getTextWidth(x.label+" ");a.setFont("helvetica",x.bold?"bold":"normal");const O=a.getTextWidth(x.value),N=$+O;return N>T&&(T=N),{...x,labelWidth:$}}),G=u-T/2;j.forEach(x=>{a.setFont("helvetica","normal"),a.setFontSize(15),a.setTextColor(PDF_COLORS.textSecondary),a.text(x.label,G,A),x.bold&&a.setFont("helvetica","bold"),a.text(x.value,G+x.labelWidth,A),A+=26});let _="";const D=(l==null?void 0:l.name)||(l==null?void 0:l.staffName)||"",z=(l==null?void 0:l.phone)||(l==null?void 0:l.mobile)||(l==null?void 0:l.staffPhone)||"",k=(l==null?void 0:l.email)||(l==null?void 0:l.staffEmail)||"",F=(l==null?void 0:l.position)||(l==null?void 0:l.staffPosition)||"";D&&z&&k?_=`For more information, please contact ${F?`${D}, ${F}`:D} on ${z} or email ${k}`:D&&k?_=`For more information, please contact ${F?`${D}, ${F}`:D} at ${k}`:D?_=`For more information, please contact ${F?`${D}, ${F}`:D}`:z?_=`For more information, please call ${z}`:k&&(_=`For more information, please email ${k}`),_||(_="For more information, please contact your Seima representative or email info@seima.com.au"),a.setFont("helvetica","normal"),a.setFontSize(14),a.setTextColor("#111"),a.text(_,u,o-d-18,{align:"center"}),drawPDFFooter(a,{pageWidth:t,pageHeight:o,footerHeight:d})}function drawRoomHeader(a,e,t,o,s){a.setFontSize(12),a.setFont("helvetica","bold"),a.setTextColor("#333"),a.text(`${e} (${t})`,o,s+10),a.setFont("helvetica","normal")}function drawProductLinks(a,e,t,o){let s=o;const r=e.Datasheet_URL||e.datasheetUrl||e["Datasheet URL"]||e.X_WEB_DSHEET||e.X_WEB_DSHEET||"",n=normalizeProductHyperlinkUrl(String(r).trim(),"datasheets");if(n&&n.startsWith("http")){a.setFont("helvetica","normal"),a.setFontSize(9),a.setTextColor(...PDF_COLORS.linkColor);const l="Datasheet",d=a.getTextWidth(l),u=t-d/2;a.textWithLink(l,u,s,{url:n}),a.setDrawColor(...PDF_COLORS.linkColor),a.setLineWidth(.3),a.line(u,s+1.5,u+d,s+1.5),s+=16}const c=e.Website_URL||e.websiteUrl||e["Website URL"]||e.product_url||e.productUrl||e["Product URL"]||e.Product_URL||e["Web URL"]||e.URL||"",i=normalizePdfHyperlinkUrl(String(c).trim());if(i&&i.startsWith("http")){a.setFont("helvetica","normal"),a.setFontSize(9),a.setTextColor(...PDF_COLORS.linkColor);const l="Website",d=a.getTextWidth(l),u=t-d/2;a.textWithLink(l,u,s,{url:i}),a.setDrawColor(...PDF_COLORS.linkColor),a.setLineWidth(.3),a.line(u,s+1.5,u+d,s+1.5),s+=16}return s}function drawProductDescription(a,e,t,o,s,r=!1){let n=o;a.setFontSize(10),a.setTextColor(PDF_COLORS.textPrimary);const c=a.splitTextToSize(String(e.Description||""),s);a.text(c,t+5,n),n+=c.length*12;const i=e.LongDescription||e["Long Description"]||e.longDescription||"";if(!r&&i){a.setFontSize(9),a.setTextColor(PDF_COLORS.textSecondary);const l=a.splitTextToSize(String(i),s);a.text(l,t+5,n),n+=l.length*11}if(e.Notes){a.setFont("helvetica","italic"),a.setFontSize(9),a.setTextColor(PDF_COLORS.textSecondary);const l=a.splitTextToSize("Notes: "+String(e.Notes),s);a.text(l,t+5,n),a.setFont("helvetica","normal"),n+=l.length*11}return n}function drawWelsRating(a,e,t,o){const s=e["WELS STAR"]||e.WELS_STAR||e.WELS_STAR||e.WelsStar||"";if(s&&s.toString().trim()){const r=s.toString().replace(/[^\d.]/g,"").trim();r&&(a.setFontSize(9),a.setTextColor(PDF_COLORS.textSubtle),a.text(`${r} star`,t,o,{align:"center"}))}}function formatPrice(a){return!a||isNaN(a)||a<=0?"":"$"+a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function drawProductPricing(a,e,t,o,s,r,n={}){const{excludePrice:c=!1,includeGst:i=!1}=n;a.setFontSize(10),a.setTextColor(PDF_COLORS.textPrimary);const l=s.indexOf("RRP")+1,d=f=>f&&f!=="0"&&parseFloat(String(f).replace(/,/g,""))>0?f:"";if(l>0&&t[l]){let f=NaN;const g=d(e.RRP_EX)||d(e["RRP EX GST"])||d(e.RRP_EX)||d(e.RRP_EXGST)||d(e["PL1 - RRP EX GST"]);g&&(f=parseFloat(g.toString().replace(/,/g,"")),i&&!isNaN(f)&&(f*=1.1));const w=formatPrice(f);if(w){const y=t[l]+o[l]/2;a.text(w,y,r,{align:"center"})}}const u=s.indexOf("Price")+1;let h=NaN;if(u>0&&t[u]){if(e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null&&e.UserEditedPrice!=="")h=parseFloat(e.UserEditedPrice.toString().replace(/,/g,""));else{const g=d(e.RRP_EX)||d(e["RRP EX GST"])||d(e.RRP_EX)||d(e.RRP_EXGST)||d(e["PL1 - RRP EX GST"]);g&&(h=parseFloat(g.toString().replace(/,/g,"")))}i&&!isNaN(h)&&(h*=1.1);const f=formatPrice(h);if(f){const g=t[u]+o[u]/2;a.text(f,g,r,{align:"center"})}}const m=s.indexOf("Qty")+1;if(m>0&&t[m]){const f=t[m]+o[m]/2;a.text(String(e.Quantity||1),f,r,{align:"center"})}const p=s.indexOf("Total")+1;if(p>0&&t[p]){const f=(isNaN(h)?0:h)*(e.Quantity||1),g=formatPrice(f);if(g){const w=t[p]+o[p]/2;a.text(g,w,r,{align:"center"})}}}class DataService{constructor(){this.storageKeys={LEGACY_SELECTION:"selection",PRODUCTS:CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,CATALOG:CONFIG.STORAGE_KEYS.PRODUCT_CATALOG,CUSTOM_ROOMS:CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,STAFF_CONTACT:CONFIG.STORAGE_KEYS.STAFF_CONTACT},this.productCatalog=[],this.isLoaded=!1,this._productSearch=new ProductSearch}async init(){try{return console.log("🔄 Initializing DataService..."),await this.loadProductCatalog(),this._productSearch.buildIndex(this.productCatalog),this.isLoaded=!0,console.log(`✅ DataService initialized with ${this.productCatalog.length} products`),!0}catch(e){throw console.error("❌ DataService initialization failed:",e),this.isLoaded=!1,e}}async loadProductCatalog(){try{let e=localStorage.getItem("productCatalogCsv"),t=[];e&&(t=this.parseCSV(e),this.productCatalog=t,console.log(`📦 Loaded ${t.length} products from cache`));const o=CONFIG.CATALOG_URL+(CONFIG.CATALOG_URL.includes("?")?"&":"?")+"t="+Date.now();if(fetch(o).then(s=>s.ok?s.text():Promise.reject("Failed to fetch catalog")).then(s=>{if(!e||s!==e){localStorage.setItem("productCatalogCsv",s);const r=this.parseCSV(s);JSON.stringify(r)!==JSON.stringify(t)&&(this.productCatalog=r,window.location.reload())}}).catch(s=>console.warn("Background catalog update failed:",s)),!t.length)throw new Error("No product data available");return t}catch(e){throw console.error("❌ Failed to load product catalog:",e),this.productCatalog=[],e}}parseCSV(e){const t=this.parseCSVRows(e);if(t.length===0)return[];const o=t[0].map(c=>c.replace(/[\r\n]+\s*/g," ").trim()),s=c=>c.toLowerCase().replace(/[\s_]+/g,""),r=o.findIndex(c=>s(c)==="ordercode");if(r===-1)return[];const n=[];for(let c=1;c<t.length;c++){const i=t[c];if(i.length<=r)continue;const l=i[r]?i[r].trim():"";if(!l)continue;const d={};o.forEach((u,h)=>{d[u]=i[h]||""}),d.OrderCode=l,d["Product Name"]=d["Product Name"]||d["Parent Code"]||"",d.Description=d.Description||"",d.LongDescription=d["Long Description"]||d.LongDescription||"",d.RRP_EXGST=d["RRP EX GST"]||d.RRP_EXGST||"",d.RRP_INCGST=d["RRP INC GST"]||d.RRP_INCGST||"",d.BARCODE=(d.BARCODE||"").toString().trim(),d["WELS NO"]=d["WELS NO"]||"",d["WELS STAR"]=d["WELS STAR"]||"",d["WELS CONSUMPTION"]=d["WELS CONSUMPTION"]||"",d["WELS Expiry"]=d["WELS Expiry"]||"",n.push(d)}return n}parseCSVRows(e){const t=[];let o=[],s="",r=!1;for(let n=0;n<e.length;n++){const c=e[n],i=e[n+1];c==='"'?r&&i==='"'?(s+='"',n++):r=!r:c===","&&!r?(o.push(s),s=""):(c==="\r"||c===`
`)&&!r?(c==="\r"&&i===`
`&&n++,o.push(s),o.length>0&&o.some(l=>l.trim())&&t.push(o),o=[],s=""):s+=c}return(s||o.length>0)&&(o.push(s),o.some(n=>n.trim())&&t.push(o)),t}parseCSVLine(e){const t=[];let o="",s=!1;for(let r=0;r<e.length;r++){const n=e[r];n==='"'?s=!s:n===","&&!s?(t.push(o.trim()),o=""):o+=n}return t.push(o.trim()),t}getAllProducts(){return this.productCatalog}searchProducts(e,t=50){return this._productSearch.search(e,t,{fuzzy:!1})}findProductByCode(e){if(!e)return null;const t=e.toString().trim();return this.productCatalog.find(o=>(o.OrderCode||o.orderCode||"").toString().trim()===t)}findProductByBarcode(e){if(!e)return null;const t=e.toString().trim();return this.productCatalog.find(o=>o.BARCODE&&o.BARCODE.toString().trim()===t)||null}getSelectedProducts(){try{const e=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||"[]");if(e.length>0)return this._validateSelectionFormat(e);const t=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||"[]");return this._convertLegacyFormat(t)}catch(e){return console.error("Error loading selected products:",e),[]}}addProduct(e,t="",o="",s=1){if(!this._validateProduct(e))throw new Error("Invalid product data");const r=this.getSelectedProducts(),n={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,CONFIG.UI.ANNOTATION_MAX_LENGTH),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,Math.min(999,parseInt(s)||1)),timestamp:Date.now()};return r.push(n),this._saveSelectedProducts(r),console.log(`✅ Added ${e.OrderCode||"product"} to selection`),n}removeProduct(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this._saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateProduct(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);if(s===-1)throw new Error("Product not found in selection");const r=o[s];return o[s]={...r,...t,id:e,timestamp:r.timestamp,notes:t.notes?Utils.sanitizeInput(t.notes,CONFIG.UI.ANNOTATION_MAX_LENGTH):r.notes,room:t.room?Utils.sanitizeInput(t.room,50):r.room,quantity:t.quantity?Math.max(1,Math.min(999,parseInt(t.quantity)||1)):r.quantity},this._saveSelectedProducts(o),console.log("✅ Updated product in selection"),o[s]}clearSelection(){localStorage.removeItem(this.storageKeys.PRODUCTS),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION),console.log("✅ Cleared all selected products")}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const s=o.room||"Unassigned";t[s]||(t[s]=[]),t[s].push(o)}),t}getSelectionStats(){const e=this.getSelectedProducts(),t=this.getProductsByRoom();return{totalProducts:e.length,totalRooms:Object.keys(t).length,roomBreakdown:Object.entries(t).map(([o,s])=>({room:o,count:s.length}))}}getProductsLegacyFormat(){return this.getSelectedProducts().map(t=>({...t.product,Room:t.room,Notes:t.notes,Quantity:t.quantity,Timestamp:new Date(t.timestamp).toISOString()}))}getStaffContact(){try{const e=localStorage.getItem(this.storageKeys.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.warn("Error loading staff contact:",e),null}}setStaffContact(e){try{localStorage.setItem(this.storageKeys.STAFF_CONTACT,JSON.stringify(e)),console.log("✅ Staff contact saved")}catch(t){throw console.error("Error saving staff contact:",t),t}}getCustomRooms(){try{return JSON.parse(localStorage.getItem(this.storageKeys.CUSTOM_ROOMS)||"[]")}catch(e){return console.warn("Error loading custom rooms:",e),[]}}addCustomRoom(e){const t=this.getCustomRooms();t.find(o=>o.name===e)||(t.push({name:e,timestamp:Date.now()}),localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(t)),console.log(`✅ Added custom room: ${e}`))}removeCustomRoom(e){const o=this.getCustomRooms().filter(s=>s.name!==e);localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(o)),console.log(`✅ Removed custom room: ${e}`)}getProductCatalog(){try{const e=localStorage.getItem(this.storageKeys.CATALOG);return e?JSON.parse(e):[]}catch(e){return console.warn("Error loading product catalog from storage:",e),[]}}setProductCatalog(e){try{localStorage.setItem(this.storageKeys.CATALOG,JSON.stringify(e)),console.log(`✅ Cached ${e.length} products to storage`)}catch(t){console.warn("Error caching product catalog:",t)}}_convertLegacyFormat(e){return Array.isArray(e)?e.map(t=>({id:Utils.generateId(),product:{...t},room:t.Room||"",notes:t.Notes||"",quantity:t.Quantity||1,timestamp:t.Timestamp?new Date(t.Timestamp).getTime():Date.now()})):[]}_validateSelectionFormat(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object"&&t.product&&typeof t.product=="object"):[]}_validateProduct(e){return e&&typeof e=="object"&&(e.OrderCode||e.Description)}_saveSelectedProducts(e){try{localStorage.setItem(this.storageKeys.PRODUCTS,JSON.stringify(e)),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION)}catch(t){throw console.error("Error saving selected products:",t),t}}migrateLegacyData(){const e=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||"[]"),t=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||"[]");if(e.length>0&&t.length===0){console.log("📦 Migrating legacy selection data...");const o=this._convertLegacyFormat(e);return this._saveSelectedProducts(o),console.log(`✅ Migrated ${o.length} products to new format`),!0}return!1}}const dataService=new DataService;class SelectionRecorder{constructor(){var e,t,o,s;this.isEnabled=(e=CONFIG.SELECTION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=((t=CONFIG.SELECTION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL)||null,this.retryAttempts=(o=CONFIG.SELECTION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=CONFIG.SELECTION_RECORDING)==null?void 0:s.RETRY_DELAY}configure(e){this.googleSheetsUrl=e,console.log("📊 Selection recorder configured with Google Sheets URL")}async recordSelection(e,t,o={}){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Selection recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const s=this.prepareSelectionData(e,t,o),r=await this.sendToGoogleSheets(s);if(r.success)return console.log("✅ Selection recorded successfully"),{success:!0,data:s};throw new Error(r.error||"Failed to record selection")}catch(s){return console.error("❌ Failed to record selection:",s),{success:!1,error:s.message}}}prepareSelectionData(e,t,o){const s=new Date,r=e.staffContact||{},n=authService.getCurrentUser(),c=authService.isStaffMode();let i,l,d;c?(i=r.name||(n==null?void 0:n.name)||"",l=r.email||(n==null?void 0:n.email)||"",d=r.mobile||(n==null?void 0:n.phone)||""):(i="Self-Service",l="",d="");const u=(n==null?void 0:n.email)||"",h=t.length,m=t.reduce((y,S)=>y+(S.quantity||1),0),p=this.calculateEstimatedValue(t),f=[...new Set(t.map(y=>y.room).filter(Boolean))],g=e.leadData||{};return{date:s.toLocaleDateString("en-AU"),time:s.toLocaleTimeString("en-AU"),appVersion:CONFIG.VERSION,loggedInAs:u,staffName:i,staffEmail:l,staffMobile:this.formatPhoneNumber(d),customerName:e.name||"",customerEmail:e.email||"",customerPhone:this.formatPhoneNumber(e.phone),customerProject:e.project||"",customerAddress:e.address||"",customerType:g.customerType||"",hearAboutUs:this.formatHearAboutUs(g),projectNotes:g.projectNotes||"",builderName:g.builderName||"",merchantName:g.merchantName||"",referralBuilder:g.referralBuilder||"",referralMerchant:g.referralMerchant||"",totalProducts:h,totalQuantity:m,totalRooms:f.length,roomsList:f.join(", "),estimatedValue:p,emailSent:o.success||!1,pdfGenerated:o.pdfGenerated||!1,csvGenerated:o.csvGenerated||!1,pdfSize:o.pdfSize||"",productsJson:JSON.stringify(t.map(y=>{var S,b,v,I,E,L;return{orderCode:((S=y.product)==null?void 0:S.OrderCode)||((b=y.product)==null?void 0:b.orderCode)||"",description:((v=y.product)==null?void 0:v.Description)||((I=y.product)==null?void 0:I.description)||"",room:y.room||"",quantity:y.quantity||1,notes:y.notes||"",priceIncGst:((E=y.product)==null?void 0:E.RRP_INCGST)||((L=y.product)==null?void 0:L.rrpIncGst)||"0.00"}}))}}formatHearAboutUs(e){if(!e||!e.hearAboutUs)return"";if(Array.isArray(e.hearAboutUs)){let t=[...e.hearAboutUs];if(t.includes("Other")&&e.hearAboutUsOther){const o=t.indexOf("Other");t[o]=`Other (${e.hearAboutUsOther})`}return t.join(", ")}return e.hearAboutUs||""}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var c,i;const s=o.quantity||1,r=((c=o.product)==null?void 0:c.RRP_INCGST)||((i=o.product)==null?void 0:i.rrpIncGst)||"0",n=parseFloat(r.toString().replace(/[^0-9.]/g,""))||0;t+=n*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e));const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);return{success:!0,result:await s.json()}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};const e={date:new Date().toLocaleDateString("en-AU"),time:new Date().toLocaleTimeString("en-AU"),staffName:"Test User",customerName:"Test Customer",totalProducts:1,test:!0};return await this.sendToGoogleSheets(e)}setEnabled(e){this.isEnabled=e,console.log(`📊 Selection recording ${e?"enabled":"disabled"}`)}}const selectionRecorder=new SelectionRecorder;class EmailTemplateGenerator{constructor(){this.brandColors={primary:"#a09484",primaryDark:"#8b7a6e",background:"#f8f8fa",cardBackground:"#ffffff",textPrimary:"#222",textSecondary:"#4b5563",textMuted:"#6b7280",success:"#10b981",warning:"#f59e0b",border:"#e5e7eb"}}generateEmailHTML(e,t={}){const{includeLogo:o=!0,includeAttachmentInfo:s=!1,includeFeaturesList:r=!1,customMessage:n=null,theme:c="default"}=t,i=this.prepareEmailData(e);return`
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SEIMA Product Selection - ${i.customerName}</title>
          ${this.generateEmailCSS(c)}
      </head>
      <body>
          <div class="email-container">
              ${this.generateHeader(i,o)}
              ${this.generateContent(i,n)}
              ${this.generateSummaryCard(i)}
              ${s?this.generateAttachmentsCard(i):""}
              ${r?this.generateFeaturesList():""}
              ${this.generateContactSection()}
              ${this.generateFooter(i)}
          </div>
      </body>
      </html>
    `}prepareEmailData(e){return{customerName:e.name||"Customer",customerEmail:e.email||"",customerProject:e.project||"",customerAddress:e.address||"",customerPhone:e.phone||"",totalProducts:this.getProductCount(),totalRooms:this.getRoomCount(),appVersion:CONFIG.VERSION,currentDate:new Date().toLocaleDateString("en-AU",{year:"numeric",month:"long",day:"numeric"}),pdfFilename:this.generateFileName(e,"pdf"),csvFilename:this.generateFileName(e,"csv")}}generateEmailCSS(e="default"){return`
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
    `}generateContent(e,t=null){const o=t||`
      Thank you for choosing SEIMA for your project. We're pleased to provide your personalised product selection for your review.
    `;return`
      <div class="content">
          <p class="greeting">Dear ${e.customerName},</p>
          <p class="intro-text">${o}</p>
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
                      <span class="summary-value">${e.customerProject||"Not specified"}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Address:</span>
                      <span class="summary-value">${e.customerAddress||"Not specified"}</span>
                  </div>
                  <div class="summary-row">
                      <span class="summary-label">Phone:</span>
                      <span class="summary-value">${e.customerPhone||"Not provided"}</span>
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
    `}generateTextEmail(e){const t=this.prepareEmailData(e);return`Dear ${t.customerName},

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

© 2024 Seima | Generated by Seima Scanner v${t.appVersion}`}getProductCount(){return JSON.parse(localStorage.getItem("selectedProducts")||"[]").length}getRoomCount(){const e=JSON.parse(localStorage.getItem("selectedProducts")||"[]");return new Set(e.map(o=>o.room).filter(Boolean)).size||1}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${r}${n}.${c}${i}.${t}`}}function testCleanedUpTemplate(){console.log("🧪 Testing cleaned up email template...");const a={name:"cleaned",email:"test@example.com",project:"cleaned",address:"Seima Pty Ltd",phone:"0400000000"};try{const t=new EmailTemplateGenerator().generateEmailHTML(a),o=window.open("","_blank","width=800,height=600");return o.document.write(t),o.document.close(),console.log("✅ Cleaned up email template preview opened in new window"),console.log("🎨 Changes applied:"),console.log("   • Header: Removed house icon and subtitle, changed to gold/brown background"),console.log('   • Sections: Removed "Attached Documents" and "Your selection includes" sections'),console.log("   • Footer: Removed top two lines"),!0}catch(e){return console.error("❌ Template test failed:",e),!1}}window.testCleanedUpTemplate=testCleanedUpTemplate;class EmailService{constructor(){this.providers={emailjs:new EmailJSProvider,seimaEmail:new SeimaEmailProvider},this.currentProvider=null,this.isInitialized=!1,this.templateGenerator=new EmailTemplateGenerator}async init(e="emailjs",t=null){try{const o=this.providers[e];if(!o)throw new Error(`Unknown email provider: ${e}`);const s=t||this._getProviderConfig(e);return await o.init(s),this.currentProvider=o,this.isInitialized=!0,console.log(`✅ Email service initialized with ${e}`),!0}catch(o){return console.error(`❌ Failed to initialize email service with ${e}:`,o),!1}}async sendEmail(e,t,o=null){if(!this.isInitialized||!this.currentProvider)throw new Error("Email service not initialized");try{const s=dataService.getStaffContact(),r={...e,staffContact:s},n=this._generateEmailContent(r,t,o);console.log("📧 Attempting email send (no size restrictions)...");const c=await this.currentProvider.sendEmail(n);if(c.success)return console.log("✅ Email sent successfully!"),this.recordSelection(r,t,o,c),c;throw new Error(c.error||"Email sending failed")}catch(s){return console.error("📧 Email sending failed, using fallback:",s),this._handleEmailFailure(e,t,o,s)}}async sendNotificationEmail(e){if(!this.isInitialized||!this.currentProvider)throw new Error("Email service not initialized");try{const t=dataService.getStaffContact(),o={...e,staffContact:t},s=this._generateEmailContent(o,null,null),r=await this.currentProvider.sendEmail(s);if(r.success)return this._showSuccess("✅ Notification email sent successfully!"),r;throw new Error(r.error||"Notification email failed")}catch(t){return console.error("📧 Notification email failed:",t),{success:!1,error:t.message}}}async testEmail(e=null){const t=e||{name:"Test User",email:"test@example.com",project:"Test Project",address:"Test Address",phone:"Test Phone"},o=`%PDF-1.4
Test PDF Content
%%EOF`,s=new Blob([o],{type:"application/pdf"}),r=`Code,Description,Quantity
TEST001,"Test Product",1`;return console.log("🧪 Testing email service..."),await this.sendEmail(t,s,r)}_generateEmailContent(e,t,o){var s;return{to:e.email,toName:e.name||e.email,from:CONFIG.EMAIL.FROM_EMAIL||"noreply@seima.com.au",fromName:"Seima Team",subject:`Seima Product Selection - ${e.name||"Customer"}`,html:this.templateGenerator.generateEmailHTML(e),text:this.templateGenerator.generateTextEmail(e),bcc:((s=e.staffContact)==null?void 0:s.email)||null,attachments:this._prepareAttachments(e,t,o)}}_prepareAttachments(e,t,o){const s=[];return t&&s.push({filename:this._generateFileName(e,"pdf"),content:t,type:"application/pdf"}),o&&s.push({filename:this._generateFileName(e,"csv"),content:new Blob([o],{type:"text/csv;charset=utf-8"}),type:"text/csv"}),s}_generateFileName(e,t){const o=new Date,s=`${String(o.getDate()).padStart(2,"0")}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getFullYear()).slice(-2)}`,r=`${String(o.getHours()).padStart(2,"0")}${String(o.getMinutes()).padStart(2,"0")}`;return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}.${r}.${t}`}_handleEmailFailure(e,t,o,s){console.error("📧 Email failed, providing download fallback:",s);const r=[];try{if(t){const n=this._generateFileName(e,"pdf");this._downloadFile(t,n),r.push("PDF"),console.log("✅ PDF downloaded as fallback")}}catch(n){console.error("❌ Failed to download PDF:",n)}try{if(o){const n=new Blob([o],{type:"text/csv;charset=utf-8"}),c=this._generateFileName(e,"csv");this._downloadFile(n,c),r.push("CSV"),console.log("✅ CSV downloaded as fallback")}}catch(n){console.error("❌ Failed to download CSV:",n)}return r.length>0?this._showError("Unable to send email. Files have been downloaded to your device."):this._showError("Email sending failed and file download failed. Please try again."),{success:!1,method:"download_fallback",error:s.message,downloadedFiles:r}}_downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}_getProviderConfig(e){switch(e){case"emailjs":return{publicKey:CONFIG.EMAIL.PUBLIC_KEY,serviceId:CONFIG.EMAIL.SERVICE_ID,templateId:CONFIG.EMAIL.TEMPLATE_ID};case"seimaEmail":return{apiUrl:CONFIG.EMAIL.SEIMA_EMAIL_API_URL,apiKey:CONFIG.EMAIL.SEIMA_EMAIL_API_KEY||null,fromEmail:CONFIG.EMAIL.FROM_EMAIL,fromName:CONFIG.EMAIL.FROM_NAME};default:return{}}}_showSuccess(e){window.showSuccessMessage?window.showSuccessMessage(e):console.log(e)}_showError(e){window.showErrorMessage?window.showErrorMessage(e):console.error(e)}async recordSelection(e,t,o,s){try{const r=this.getSelectedProducts();if(r.length===0){console.log("📊 No products to record");return}const n={success:!0,pdfGenerated:!!t,csvGenerated:!!o,pdfSize:t?`${(t.size/1024/1024).toFixed(2)}MB`:"",method:s.provider||"email"},c={...e};e.leadData?c.leadData=e.leadData:window.currentLeadData&&(c.leadData=window.currentLeadData);const i=await selectionRecorder.recordSelection(c,r,n);i.success?console.log("📊 Selection recorded successfully"):console.warn("📊 Selection recording failed:",i.error||i.reason)}catch(r){console.error("📊 Error recording selection:",r)}}getSelectedProducts(){try{const e=JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return e.length>0?e:JSON.parse(localStorage.getItem("selection")||"[]").map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}catch(e){return console.error("Error getting selected products:",e),[]}}}class SeimaEmailProvider{constructor(){this.isInitialized=!1,this.config=null,this.MAX_ATTACHMENT_BYTES=3*1024*1024}async init(e){if(!e||!e.apiUrl)throw new Error("Seima Email requires SEIMA_EMAIL_API_URL in CONFIG.EMAIL");this.config=e,this.isInitialized=!0,console.log("✅ Seima Email provider initialized")}async _blobToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onloadend=()=>{const r=s.result.split(",")[1];t(r||"")},s.onerror=()=>o(s.error),s.readAsDataURL(e)})}async sendEmail(e){if(!this.isInitialized||!this.config)return{success:!1,provider:"seimaEmail",error:"Seima Email provider not initialized"};try{const t=[];for(const c of e.attachments||[]){const i=c.content instanceof Blob?c.content:new Blob([c.content]);if(i.size>this.MAX_ATTACHMENT_BYTES)return{success:!1,provider:"seimaEmail",error:`Attachment "${c.filename}" exceeds 3 MB limit. Use EmailJS or download instead.`};const l=await this._blobToBase64(i);t.push({filename:c.filename,contentType:c.type||"application/octet-stream",contentBase64:l})}const o={"Content-Type":"application/json",...authService.getAuthHeaders()};!o.Authorization&&this.config.apiKey&&(o["X-Api-Key"]=this.config.apiKey);const s=await fetch(this.config.apiUrl,{method:"POST",headers:o,body:JSON.stringify({to:e.to,toName:e.toName,subject:e.subject,html:e.html,text:e.text,bcc:e.bcc||null,fromName:this.config.fromName,attachments:t})}),r=await s.json().catch(()=>({}));if(s.ok&&(s.status===200||s.status===202))return{success:!0,provider:"seimaEmail",result:r};s.status===401&&authService.handleUnauthorizedResponse(s,"seima-email");const n=r.details||r.error||`Request failed ${s.status}`;return console.warn("📧 Seima Email worker error:",s.status,r),{success:!1,provider:"seimaEmail",error:n}}catch(t){return{success:!1,provider:"seimaEmail",error:t.message||String(t)}}}}class EmailJSProvider{constructor(){this.isInitialized=!1}async init(e){window.emailjs||await this._loadEmailJS(),emailjs.init({publicKey:e.publicKey}),this.config=e,this.isInitialized=!0,console.log("✅ EmailJS provider initialized")}async sendEmail(e){try{const t={to_email:e.to,from_name:e.fromName,subject:e.subject,email_html:e.html,message_text:e.text,bcc_email:e.bcc||""};for(const s of e.attachments)s.type==="application/pdf"?(t.pdf_attachment=await this._blobToBase64(s.content),t.pdf_filename=s.filename):(s.type==="text/plain"||s.type==="text/csv")&&(t.csv_attachment=await this._blobToBase64(s.content),t.csv_filename=s.filename);const o=await emailjs.send(this.config.serviceId,this.config.templateId,t,this.config.publicKey);if(o.status===200)return{success:!0,provider:"emailjs",result:o};throw new Error(`EmailJS returned status ${o.status}`)}catch(t){return{success:!1,provider:"emailjs",error:t.message}}}async _loadEmailJS(){return new Promise((e,t)=>{const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}async _blobToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onloadend=()=>{try{const r=s.result.split(",")[1];t(r)}catch(r){console.error("❌ Base64 conversion failed:",r),o(r)}},s.onerror=()=>{console.error("❌ FileReader error:",s.error),o(s.error)},s.readAsDataURL(e)})}}const emailService=new EmailService;function testEmailTemplate(){const a={name:"45",email:"test@example.com",project:"345",address:"house address",mobile:"55432"},t=new EmailTemplateGenerator().generateEmailHTML(a),o=window.open("","_blank","width=800,height=600");o.document.write(t),o.document.close(),console.log("✅ Email template preview opened in new window")}function testConsolidatedTemplates(){console.log("🧪 Testing consolidated email templates...");const a={name:"Test User",email:"test@example.com",project:"Test Project",address:"Test Address",phone:"1234567890"};try{const e=new EmailTemplateGenerator,t=e.generateEmailHTML(a),o=e.generateTextEmail(a);console.log("✅ Standalone EmailTemplateGenerator works correctly"),console.log("📄 HTML content length:",t.length),console.log("📝 Text content length:",o.length);const r=new EmailService()._generateEmailContent(a,null,null);return console.log("✅ EmailService integration works correctly"),console.log("📧 Email content generated:",{to:r.to,subject:r.subject,htmlLength:r.html.length,textLength:r.text.length}),!0}catch(e){return console.error("❌ Template consolidation test failed:",e),!1}}window.testEmailTemplate=testEmailTemplate;window.testConsolidatedTemplates=testConsolidatedTemplates;class PDFService{constructor(){this.isInitialized=!1,this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache=new Map,this.preloadedImageCache=new Map}_generateImageHash(e){let t=0;if(!e||e.length===0)return t.toString();for(let o=0;o<e.length;o++){const s=e.charCodeAt(o);t=(t<<5)-t+s,t=t&t}return Math.abs(t).toString(36)}_isTechnicalDiagram(e,t){try{const o=Math.min(100,e.width),s=Math.min(100,e.height),n=t.getImageData(0,0,o,s).data,c=new Set;for(let i=0;i<n.length;i+=4){const l=`${n[i]},${n[i+1]},${n[i+2]}`;if(c.add(l),c.size>1e3)return!1}return c.size<1e3}catch(o){return console.warn("Could not analyze image for diagram detection:",o),!1}}_detectTransparency(e,t){try{const s=t.getImageData(0,0,e.width,e.height).data;for(let r=3;r<s.length;r+=4)if(s[r]<255)return!0;return!1}catch(o){return console.warn("Could not detect transparency:",o),!1}}async _preloadAllImages(e){this.preloadedImageCache.clear();const t=new Set;e.forEach(l=>{l.Image_URL&&l.Image_URL.length>10&&t.add(l.Image_URL),l.Diagram_URL&&l.Diagram_URL.length>10&&t.add(l.Diagram_URL)});const o=Array.from(t);if(o.length===0)return console.log("📷 No images to preload"),0;console.log(`📷 Preloading ${o.length} images in parallel...`);const s=Date.now(),r=10;let n=0,c=0;for(let l=0;l<o.length;l+=r){const d=o.slice(l,l+r);(await Promise.allSettled(d.map(m=>this._preloadSingleImage(m)))).forEach((m,p)=>{const f=d[p];m.status==="fulfilled"&&m.value?(this.preloadedImageCache.set(f,m.value),n++):c++});const h=document.getElementById("preload-progress");if(h){const m=Math.min(100,Math.round((l+d.length)/o.length*100));h.textContent=`Loading images: ${m}%`}}const i=((Date.now()-s)/1e3).toFixed(1);return console.log(`✅ Preloaded ${n}/${o.length} images in ${i}s (${c} failed)`),n}async _preloadSingleImage(e){if(this.preloadedImageCache.has(e))return this.preloadedImageCache.get(e);if(shouldSkipPdfRasterUrl(e))return null;try{const t=await this._optimizeImageForPDF(e,400,.8);return t&&t.url!=="assets/no-image.png"?t:null}catch{return console.warn(`Failed to preload image: ${e.substring(0,50)}...`),null}}async init(){try{await this._loadJSPDF(),this.isInitialized=!0,console.log("✅ PDF service initialized")}catch(e){throw console.error("❌ PDF service initialization failed:",e),e}}async generatePDF(e){if(!this.isInitialized)throw new Error("PDF service not initialized");try{console.log(`📄 Generating PDF for ${dataService.getSelectionStats().totalProducts} products...`),this._ensurePdfSpinner();const t=document.getElementById("pdf-spinner");return t&&(t.style.display="flex"),this._resetImageOptimizationStats(),this._showProcessingNotification(e),await this._generatePDFWithOriginalLogic(e)}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async _generatePDFWithOriginalLogic(e){var u;const t=JSON.parse(localStorage.getItem("selection")||"[]"),o=JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let s=[];if(o.length>0?s=o.map(h=>{const m=h.product||{};return enrichProductUrlsForPdfExport({...m,Image_URL:m.Image_URL||m.imageUrl||m["Image URL"]||"",Diagram_URL:m.Diagram_URL||m.diagramUrl||m["Diagram URL"]||"",Datasheet_URL:m.Datasheet_URL||m.datasheetUrl||m["Datasheet URL"]||"",Website_URL:m.Website_URL||m.websiteUrl||m["Website URL"]||"",Room:h.room,Notes:h.notes,Quantity:h.quantity,Timestamp:new Date(h.timestamp).toISOString()})}):s=t,!s.length){alert("No products selected.");const h=document.getElementById("pdf-spinner");h&&(h.style.display="none");return}if(this.preloadedImageCache.size>0)console.log(`📷 Using ${this.preloadedImageCache.size} pre-cached images (skipping duplicate preload)`);else{const h=document.getElementById("pdf-processing-notification");if(h){const p=document.createElement("span");p.id="preload-progress",p.style.cssText="display: block; font-size: 12px; margin-top: 4px; color: #1e40af;",p.textContent="Loading images: 0%",(u=h.querySelector("p"))==null||u.appendChild(p)}console.log("📷 Starting image preload for",s.length,"products");const m=await this._preloadAllImages(s);if(console.log(`📷 Image preloading complete: ${m} images cached`),h){const p=document.getElementById("preload-progress");p&&(p.textContent=`✓ ${m} images ready`)}}const n={};s.forEach(h=>{n[h.Room]||(n[h.Room]=[]),n[h.Room].push(h)});const{jsPDF:c}=window.jspdf,i=new c({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,floatPrecision:16}),l=i.internal.pageSize.getWidth(),d=i.internal.pageSize.getHeight();return new Promise((h,m)=>{this._loadImageAsDataURL(pdfPublicAssetUrl("assets/seima-logo.png"),(p,f,g)=>{p&&console.log(`🔍 Debug - Cover logo size: ${(p.length/1024).toFixed(1)} KB (${f}x${g})`);const w=dataService.getStaffContact();drawCoverPage(i,{pageWidth:l,pageHeight:d,seimaLogoDataUrl:p,seimaLogoNaturalW:f,seimaLogoNaturalH:g,userDetails:e,staffContact:w,footerHeight:PDF_LAYOUT.footerHeight}),i.addPage(),this._loadImageAsDataURL(pdfPublicAssetUrl("assets/seima-logo-white.png"),(y,S,b)=>{const v=PDF_LAYOUT.margins.left,I=PDF_LAYOUT.footerHeight,E=!e.excludePrice,L=calculateColumnLayout(l,{showRrp:!1,showPrice:E,showQty:!0,showTotal:E}),{colX:R,colW:B,headers:A,imgW:M,imgPad:U}=L,C=[];Object.keys(n).forEach(k=>{const F=n[k];F.forEach((x,$)=>{C.push({item:x,room:k,roomCount:F.length,isFirstInRoom:$===0})})});const P=PDF_LAYOUT.maxRowsPerPage,T=PDF_LAYOUT.rowPadding,j=Math.floor((d-80)/P);let G=I+8,_=0,D=0;const z=()=>{if(D>=C.length){const x=i.internal.getNumberOfPages()-1;for(let N=2;N<=x+1;N++){i.setPage(N);const H=(N-2)*P,Y=Math.min(H+P,C.length);let V=!1;for(let q=H;q<Y;q++)if(C[q]&&C[q].item&&hasWelsData(C[q].item)){V=!0;break}drawPDFHeader(i,{pageWidth:l,colX:R,colW:B,leftMargin:v,footerHeight:I,logoDataUrl:y,logoNaturalW:S,logoNaturalH:b,headers:A,userDetails:{...e,includeGst:!0},skipWelsHeader:!V}),drawPDFFooter(i,{pageWidth:l,pageHeight:d,leftMargin:v,footerHeight:I,pageNumber:N-1,totalPages:x})}const $=this._generatePDFFilename(e),O=i.output("blob");this._removeNotifications(),this._showImageOptimizationSummary(e.emailCompatible),console.log(`✅ PDF generated successfully: ${$} (${(O.size/1024/1024).toFixed(2)} MB)`),h(O);return}_>=P&&(i.addPage(),G=I+8,_=0);const k=C[D];if(!k||!k.item){console.warn(`⚠️ Skipping invalid row at index ${D}:`,k),D++,z();return}const F=G+j*_;k.isFirstInRoom&&drawRoomHeader(i,k.room,k.roomCount,v,F),logPdfRowAssetUrlsIfDebug(k.item),this._drawImage(i,k.item.Image_URL||"",R[0],F+T+8,M,j-T*2,e.emailCompatible,()=>{this._drawImage(i,k.item.Diagram_URL||"",R[0]+M+U,F+T+8,M,j-T*2,e.emailCompatible,()=>{i.setFontSize(10),i.setTextColor(PDF_COLORS.textPrimary);const x=F+32,$=R[1]+B[1]/2;i.text(String(k.item.OrderCode||""),$,x+10,{align:"center"}),drawProductLinks(i,k.item,$,x+38);const O=A.indexOf("WELS")+1,N=B[2];if(drawProductDescription(i,k.item,R[2],x+10,N),O>0&&R[O]){const W=R[O]+B[O]/2;drawWelsRating(i,k.item,W,x+10)}drawProductPricing(i,k.item,R,B,A,x+10,{excludePrice:e.excludePrice,includeGst:!0}),D++,_++,setTimeout(z,10)})})};z()})})})}async _loadJSPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}_loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="Anonymous",o.onload=function(){const s=document.createElement("canvas"),r=s.getContext("2d"),n=400,c=150;let i=o.width,l=o.height;if(i>n||l>c){const u=n/i,h=c/l,m=Math.min(u,h);i=Math.round(i*m),l=Math.round(l*m)}s.width=i,s.height=l,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(o,0,0,i,l);const d=s.toDataURL("image/png");console.log(`🖼️ Logo optimized: ${o.width}x${o.height} -> ${i}x${l} (${(d.length/1024).toFixed(1)}KB)`),t(d,i,l)},o.onerror=()=>t(null,0,0),o.src=e}_drawImage(e,t,o,s,r,n,c,i){if(!t||typeof t!="string"||t.length<10){i&&i();return}if(this.imageOptimizationStats.totalImages++,c){console.log("📧 Email mode: Skipping image for smaller file size"),this.imageOptimizationStats.failedImages++,i&&i();return}const l=this,u=`img_${this._generateImageHash(t)}`;let h=this.preloadedImageCache.get(t);if(!h){const m=getCachedImage(t);m&&m.dataUrl&&(h={url:m.dataUrl,format:m.format||"JPEG"})}if(h){this._addImageToPDF(e,h,o,s,r,n,u,i);return}this._optimizeImageForPDF(t,400,.8).then(m=>{if(!m||m.url==="assets/no-image.png"){l.imageOptimizationStats.failedImages++,i&&i();return}l._addImageToPDF(e,m,o,s,r,n,u,i)}).catch(m=>{console.warn("Image optimization failed:",m),l.imageOptimizationStats.failedImages++,i&&i()})}_addImageToPDF(e,t,o,s,r,n,c,i){const l=this,{url:d,format:u}=t;if(!d.startsWith("data:")){l.imageOptimizationStats.failedImages++,i&&i();return}const h=d.split(",")[1],m=h?h.length*.75:0;if(m>1048576){console.warn(`🚫 Image too large: ${Math.round(m/1024)} KB, skipping`),l.imageOptimizationStats.failedImages++,i&&i();return}const p=new Image;p.onload=function(){try{const f=p.naturalWidth/p.naturalHeight;let g=Math.min(r,120),w=Math.min(n,120);f>1?(w=g/f,w>120&&(w=120,g=w*f)):(g=w*f,g>120&&(g=120,w=g/f)),e.addImage(d,u,o,s,g,w,c,"FAST"),l.imageOptimizationStats.optimizedImages++}catch(f){console.warn("Failed to add image with aspect ratio:",f),e.addImage(d,u,o,s,Math.min(r,120),Math.min(n,120),c,"FAST"),l.imageOptimizationStats.optimizedImages++}i&&i()},p.onerror=function(){console.warn("Failed to load image for aspect ratio calculation"),e.addImage(d,u,o,s,Math.min(r,120),Math.min(n,120),c,"FAST"),l.imageOptimizationStats.optimizedImages++,i&&i()},p.src=d}_optimizeImageForPDF(e,t=400,o=.8){return optimizeImageForPDF(e,t,o)}_generatePDFFilename(e){const t=new Date,o=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getFullYear()).slice(-2),n=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${o}${s}${r}.${n}${c}.pdf`}_ensurePdfSpinner(){if(!document.getElementById("pdf-spinner")){const e=document.createElement("div");if(e.id="pdf-spinner",e.style.cssText=`
        display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 9999; background: rgba(255,255,255,0.7); align-items: center; justify-content: center;
      `,e.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(e),!document.getElementById("pdf-spinner-style")){const t=document.createElement("style");t.id="pdf-spinner-style",t.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(t)}}}_showProcessingNotification(e){const t=document.createElement("div");t.id="pdf-processing-notification",t.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 6px;
      padding: 16px; max-width: 320px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;const o=e.emailCompatible;t.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${o?"📧":"📄"}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${o?"Creating text-only PDF without images for optimal email delivery.":"This may take a moment."}
      </p>
    `,document.body.appendChild(t)}_removeNotifications(e=!1){if(e){const o=document.getElementById("pdf-spinner");o&&(o.style.display="none")}const t=document.getElementById("pdf-processing-notification");t&&t.remove()}_resetImageOptimizationStats(){this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache.clear()}_showImageOptimizationSummary(e=!1){const t=this.imageOptimizationStats;t.totalImages>0&&(console.log("🖼️ Image Optimization Summary:"),console.log(`   Total images: ${t.totalImages}`),console.log(`   Optimized: ${t.optimizedImages}`),console.log(`   Failed: ${t.failedImages}`),console.log(`   Success rate: ${(t.optimizedImages/t.totalImages*100).toFixed(1)}%`),console.log(`   Email compatible mode: ${e}`))}generateCSV(e){try{const t=dataService.getProductsLegacyFormat();if(!t.length)return console.warn("⚠️ No products found for CSV generation"),null;const o=t.map(l=>{const d=(l.RRP_INCGST||"").toString().replace(/,/g,""),u=parseFloat(d),h=isNaN(u)?"":(u*(l.Quantity||1)).toFixed(2),m=e.excludePrice,p=l["WELS STAR"]||l.WELS_STAR||l.WELS_STAR||l.WelsStar||"",f=p&&p.toString().trim()?p.toString().replace(/[^\d.]/g,"").trim():"";return{Code:this._sanitizeCSVField(l.OrderCode||""),Description:this._sanitizeCSVField(l.Description||""),"WELS Star":this._sanitizeCSVField(f),Quantity:l.Quantity||1,"Price ea inc GST":m?"0.00":l.RRP_INCGST||"","Price Total inc GST":m?"0.00":h,Notes:this._sanitizeCSVField(l.Notes||""),Room:this._sanitizeCSVField(l.Room||""),"Image URL":this._sanitizeCSVField(l.Image_URL||""),"Diagram URL":this._sanitizeCSVField(l.Diagram_URL||""),"Datasheet URL":this._sanitizeCSVField(l.Datasheet_URL||""),"Website URL":this._sanitizeCSVField(l.Website_URL||"")}}),s=window.Papa.unparse(o,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"'}),r=this._buildCustomerMetadata(e,t),n=this._formatMetadataForCSV(r),c=s+n,i=this._sanitizeCSVForEmail(c);return console.log(`✅ CSV generated successfully (${i.length} characters, includes customer metadata)`),i}catch(t){throw console.error("❌ CSV generation failed:",t),t}}_buildCustomerMetadata(e,t){const o=e.leadData||window.currentLeadData||{},s=JSON.parse(localStorage.getItem("seimaStaffContact")||"{}"),r=new Date,n=authService.getCurrentUser(),c=(n==null?void 0:n.name)||s.name||"",i=(n==null?void 0:n.email)||s.email||"",l=(n==null?void 0:n.phone)||s.mobile||"";return{_metadata:{date:r.toLocaleDateString("en-AU"),time:r.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit"})},customer:{name:e.name||o.customerName||"",email:e.email||o.customerEmail||"",phone:o.customerPhone||"",type:o.customerType||"",builderName:o.builderName||"",merchantName:o.merchantName||""},project:{name:o.projectName||"",address:o.projectAddress||"",notes:o.projectNotes||""},staff:{name:c,email:i,mobile:l}}}_formatMetadataForCSV(e){return`\r
\r
"---METADATA---"\r
"${JSON.stringify(e).replace(/"/g,'""')}"`}_sanitizeCSVField(e){return typeof e!="string"?String(e||""):e.replace(/"/g,'""').replace(/[\r\n]/g," ")}_sanitizeCSVForEmail(e){return e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,"").replace(/[^\x00-\x7F]/g,function(t){return{"€":"EUR","£":"GBP","¥":"YEN","©":"(c)","®":"(r)","™":"TM","…":"...","“":'"',"”":'"',"‘":"'","’":"'","–":"-","—":"-"}[t]||"?"}).replace(/\r?\n/g,`\r
`).replace(/\0/g,"")}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${r}${n}.${c}${i}.${t}`}}const pdfService=new PDFService;class AppService{constructor(){this.isInitialized=!1,this.services={data:dataService,email:emailService,pdf:pdfService},this.errorHandler=new ErrorHandler,this.isGeneratingPDF=!1}async init(){try{console.log("🚀 Initializing Seima Scanner services..."),this.services.data.migrateLegacyData();const e=CONFIG.EMAIL.PROVIDER||"emailjs";return await this.services.email.init(e),await this.services.pdf.init(),this.isInitialized=!0,console.log("✅ All services initialized successfully"),!0}catch(e){return console.error("❌ Service initialization failed:",e),this.errorHandler.handleError(e,"Service initialization"),!1}}addProduct(e,t="",o="",s=1){try{return this.services.data.addProduct(e,t,o,s)}catch(r){throw this.errorHandler.handleError(r,"Adding product"),r}}removeProduct(e){try{return this.services.data.removeProduct(e)}catch(t){throw this.errorHandler.handleError(t,"Removing product"),t}}updateProduct(e,t){try{return this.services.data.updateProduct(e,t)}catch(o){throw this.errorHandler.handleError(o,"Updating product"),o}}getSelectedProducts(){return this.services.data.getSelectedProducts()}getSelectionStats(){return this.services.data.getSelectionStats()}clearSelection(){try{this.services.data.clearSelection()}catch(e){throw this.errorHandler.handleError(e,"Clearing selection"),e}}async generateAndSendPDF(e){if(this.isGeneratingPDF)return console.warn("⚠️ PDF generation already in progress, ignoring duplicate request"),{success:!1,message:"PDF generation already in progress"};this.isGeneratingPDF=!0,this.isInitialized||await this.init();try{if(console.log("📄 Starting PDF generation and email process..."),!this.services.data.getSelectedProducts().length)throw new Error("No products selected");const o=await this.services.pdf.generatePDF(e);console.log(`✅ PDF generated successfully (${(o.size/1024/1024).toFixed(2)} MB)`);let s=null;if(e.exportCsv===!0&&(console.log("📊 Generating CSV file..."),s=this.services.pdf.generateCSV(e),s?console.log(`✅ CSV generated successfully (${s.length} characters)`):console.warn("⚠️ CSV generation returned no data")),e.sendEmail&&e.email){console.log("📧 Sending email with attachments...");const r=await this.services.email.sendEmail(e,o,s);return r.success?{success:!0,method:"email",pdfSize:o.size,message:"Email sent successfully with PDF attachment"}:{success:!1,method:"download_fallback",pdfSize:o.size,message:"Email failed, files downloaded instead",error:r.error}}else{if(console.log("💾 Starting direct file downloads..."),this._downloadFile(o,this.services.pdf.generateFileName(e,"pdf")),console.log("✅ PDF download initiated"),s){const r=new Blob([s],{type:"text/csv;charset=utf-8"});this._downloadFile(r,this.services.pdf.generateFileName(e,"csv")),console.log("✅ CSV download initiated")}else console.log("ℹ️ No CSV data to download");return{success:!0,method:"download",pdfSize:o.size,message:s?"PDF and CSV files downloaded successfully":"PDF file downloaded successfully"}}}catch(t){throw this.errorHandler.handleError(t,"PDF generation and sending"),t}finally{this.isGeneratingPDF=!1}}async testEmail(e=null){this.isInitialized||await this.init();try{return await this.services.email.testEmail(e)}catch(t){throw this.errorHandler.handleError(t,"Email testing"),t}}async switchEmailProvider(e,t=null){try{console.log(`🔄 Switching email provider to ${e}...`);const o=await this.services.email.init(e,t);return o?console.log(`✅ Email provider switched to ${e}`):console.error(`❌ Failed to switch to ${e}`),o}catch(o){throw this.errorHandler.handleError(o,"Email provider switching"),o}}getHealthStatus(){var e,t;return{initialized:this.isInitialized,dataService:this.services.data?"ready":"not ready",emailService:(e=this.services.email)!=null&&e.isInitialized?"ready":"not ready",pdfService:(t=this.services.pdf)!=null&&t.isInitialized?"ready":"not ready",selectedProducts:this.services.data.getSelectedProducts().length,timestamp:new Date().toISOString()}}getMigrationReadiness(){const e=this.getSelectionStats();return{ready:this.isInitialized,currentProvider:CONFIG.EMAIL.PROVIDER,seimaEmailConfigured:!!CONFIG.EMAIL.SEIMA_EMAIL_API_URL,testingRecommended:e.totalProducts>0,migrationSteps:["1. Deploy the Seima email worker and set secrets (see EMAIL-MICROSOFT-365.md)","2. Set CONFIG.EMAIL.SEIMA_EMAIL_API_URL and optional SEIMA_EMAIL_API_KEY",'3. Set CONFIG.EMAIL.PROVIDER to "seimaEmail"',"4. Remove or keep EmailJS as fallback"]}}getMigrationReadinessStatus(){return this.getMigrationReadiness()}getDebugAPI(){return{getHealthStatus:()=>this.getHealthStatus(),getMigrationReadiness:()=>this.getMigrationReadiness(),getMigrationReadinessStatus:()=>this.getMigrationReadiness(),switchToMicrosoftGraph:()=>this.switchEmailProvider("seimaEmail"),testEmail:e=>this.testEmail(e),getErrorLog:()=>JSON.parse(localStorage.getItem("seimaErrorLog")||"[]"),clearErrorLog:()=>localStorage.removeItem("seimaErrorLog"),getSystemStatus:()=>this.getHealthStatus(),validateConfiguration:()=>({valid:this.isInitialized,details:this.getHealthStatus()})}}downloadWithFallback(e,t){try{this._downloadFile(e,t),console.log(`✅ Downloaded ${t}`)}catch(o){console.error("Download failed:",o);const s=URL.createObjectURL(e);window.open(s,"_blank"),setTimeout(()=>URL.revokeObjectURL(s),1e4)}}_downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}get emailService(){return this.services.email}get dataService(){return this.services.data}get pdfService(){return this.services.pdf}}class ErrorHandler{handleError(e,t="Unknown"){const o={message:e.message||"Unknown error",context:t,timestamp:new Date().toISOString(),stack:e.stack};console.error(`❌ Error in ${t}:`,o),this._showUserError(e,t),this._trackError(o)}_showUserError(e,t){let o="";switch(t){case"PDF generation and sending":o="Failed to generate or send PDF. Please check your selections and try again.";break;case"Email sending":o="Failed to send email. Files will be downloaded instead.";break;case"Adding product":o="Failed to add product to selection. Please try again.";break;case"Service initialization":o="Failed to initialize application services. Please refresh the page.";break;default:o=`An error occurred: ${e.message}`}window.showErrorMessage?window.showErrorMessage(o):alert(o)}_trackError(e){try{const t=JSON.parse(localStorage.getItem("seimaErrorLog")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("seimaErrorLog",JSON.stringify(t))}catch(t){console.warn("Could not store error log:",t)}}}class OCRService{constructor(){this.tesseractWorker=null,this.isInitialized=!1,this.isScanning=!1,this.scanInterval=null,this.isProcessing=!1,this.preprocessOptions={contrast:1.5,threshold:"auto",adaptive:!0,adaptiveOffset:0},this.ocrWorker=null,this.useWebWorker=!1,this.workerReady=!1,this.pendingRequests=new Map,this.requestId=0,this.canvas=null,this.ctx=null}get helpers(){const e=globalThis&&globalThis.ocrUtils||{};if(!e.cleanOcrText||!e.preprocessCanvasForOCR||!e.dedupeTextData)throw new Error("OCR utilities not loaded");return e}setPreprocessOptions(e={}){this.preprocessOptions={...this.preprocessOptions,...e}}getCanvas(e,t){return this.canvas||(this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})),this.canvas.width=e,this.canvas.height=t,{canvas:this.canvas,ctx:this.ctx}}async initialize(e=!0){if(this.isInitialized)return!0;if(e&&typeof Worker<"u")try{return await this.initializeWebWorker(),this.useWebWorker=!0,this.isInitialized=!0,console.log("✅ OCR initialized with Web Worker (off-main-thread)"),!0}catch(t){console.warn("⚠️ Web Worker initialization failed, falling back to direct mode:",t.message)}return await this.initializeDirect(),this.useWebWorker=!1,this.isInitialized=!0,console.log("✅ OCR initialized in direct mode"),!0}async initializeWebWorker(){return new Promise((e,t)=>{try{this.ocrWorker=new Worker("./js/ocr-worker.js");const o=setTimeout(()=>{t(new Error("Web Worker initialization timeout"))},1e4);this.ocrWorker.onmessage=s=>{const{type:r,id:n,results:c,error:i,success:l}=s.data;if(r==="ready")this.ocrWorker.postMessage({type:"init",id:"init"});else if(r==="init_complete")clearTimeout(o),this.workerReady=!0,e(!0);else if(r==="result"){const d=this.pendingRequests.get(n);d&&(d.resolve(c),this.pendingRequests.delete(n))}else if(r==="error")if(n==="init")clearTimeout(o),t(new Error(i));else{const d=this.pendingRequests.get(n);d&&(d.reject(new Error(i)),this.pendingRequests.delete(n))}},this.ocrWorker.onerror=s=>{clearTimeout(o),t(s)}}catch(o){t(o)}})}async initializeDirect(){if(this.tesseractWorker)return this.tesseractWorker;try{if(console.log("🔍 Initializing Tesseract directly..."),typeof Tesseract>"u")throw new Error("Tesseract.js not loaded. Please ensure the script is included.");return this.tesseractWorker=await Tesseract.createWorker("eng"),await this.tesseractWorker.setParameters({tessedit_char_whitelist:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -.,()",preserve_interword_spaces:"0",tessedit_pageseg_mode:"6"}),this.tesseractWorker}catch(e){throw console.error("❌ Failed to initialize Tesseract:",e),e}}canvasToBase64(e){return e.toDataURL("image/png")}async processWithWorker(e,t,o){return new Promise((s,r)=>{const n=`req_${++this.requestId}`,c=setTimeout(()=>{this.pendingRequests.delete(n),r(new Error("OCR processing timeout"))},3e4);this.pendingRequests.set(n,{resolve:i=>{clearTimeout(c),s(i)},reject:i=>{clearTimeout(c),r(i)}}),this.ocrWorker.postMessage({type:"process",id:n,data:{imageBase64:e,width:t,height:o}})})}async startScanning(e,t,o=1500){if(this.isScanning){console.warn("OCR scanning already in progress");return}if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw new Error("Video element not ready for OCR scanning");this.isScanning=!0,this.runScanLoop(e,t,o),console.log("✅ OCR scanning started"+(this.useWebWorker?" (Web Worker mode)":" (direct mode)"))}runScanLoop(e,t,o){this.isScanning&&(this.scanInterval&&clearTimeout(this.scanInterval),this.scanInterval=setTimeout(async()=>{if(this.isScanning){if(this.isProcessing||!e||e.paused||e.ended||e.readyState<2){this.runScanLoop(e,t,o);return}this.isProcessing=!0;try{const s=e.videoWidth||640,r=e.videoHeight||480;if(s===0||r===0){this.isProcessing=!1,this.runScanLoop(e,t,o);return}const{canvas:n,ctx:c}=this.getCanvas(s,r);c.drawImage(e,0,0,s,r);const{preprocessCanvasForOCR:i,dedupeTextData:l}=this.helpers,d=this.preprocessOptions;let u;if(this.useWebWorker&&this.workerReady){i(n,d);const m=this.canvasToBase64(n);u=await this.processWithWorker(m,s,r)}else{i(n,d);const m=await this.tesseractWorker.recognize(n);u=this.extractTextData(m,s,r)}const h=l(u);h.length>0&&(this.isScanning=!1,console.log("📝 OCR detected text with spatial data:",h.length,"items"),t(h))}catch(s){(!s.message||!s.message.includes("too small")&&!s.message.includes("cannot be recognized"))&&console.warn("OCR recognition error:",s)}finally{this.isProcessing=!1,this.isScanning&&this.runScanLoop(e,t,o)}}},o))}stopScanning(){this.scanInterval&&(clearTimeout(this.scanInterval),this.scanInterval=null),this.isScanning=!1,this.isProcessing=!1,console.log("🛑 OCR scanning stopped")}async captureAndProcessImage(e){if(this.isProcessing)return console.warn("OCR processing already in progress"),[];if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw new Error("Video element not ready for OCR capture");if(e.readyState<2)throw new Error("Video not ready - please wait a moment");this.isProcessing=!0;try{const t=e.videoWidth||640,o=e.videoHeight||480;if(t===0||o===0)throw new Error("Video dimensions not available");const{canvas:s,ctx:r}=this.getCanvas(t,o);r.drawImage(e,0,0,t,o);let n;const{preprocessCanvasForOCR:c,dedupeTextData:i}=this.helpers;if(this.useWebWorker&&this.workerReady){c(s,this.preprocessOptions);const d=this.canvasToBase64(s);n=await this.processWithWorker(d,t,o)}else{c(s,this.preprocessOptions);const d=await this.tesseractWorker.recognize(s);n=this.extractTextData(d,t,o)}const l=i(n);return console.log("📝 OCR detected text with spatial data:",l.length,"items"),console.log("📋 OCR Raw Data:",l.map(d=>({text:d.text,centerX:Math.round(d.centerX),centerY:Math.round(d.centerY),bbox:d.bbox}))),l}catch(t){throw console.error("OCR capture error:",t),t}finally{this.isProcessing=!1}}async captureAndProcessCanvas(e){if(this.isProcessing)return console.warn("OCR processing already in progress"),[];if(this.isInitialized||await this.initialize(),!e)throw new Error("No canvas provided for OCR processing");this.isProcessing=!0;try{const t=e.width,o=e.height;if(t===0||o===0)throw new Error("Canvas dimensions not available");let s;const{preprocessCanvasForOCR:r,dedupeTextData:n}=this.helpers;if(this.useWebWorker&&this.workerReady){r(e,this.preprocessOptions);const i=this.canvasToBase64(e);s=await this.processWithWorker(i,t,o)}else{r(e,this.preprocessOptions);const i=await this.tesseractWorker.recognize(e);s=this.extractTextData(i,t,o)}const c=n(s);return console.log("📝 OCR detected text with spatial data:",c.length,"items"),console.log("📋 OCR Raw Data:",c.map(i=>({text:i.text,centerX:Math.round(i.centerX),centerY:Math.round(i.centerY),bbox:i.bbox}))),c}catch(t){throw console.error("OCR canvas processing error:",t),t}finally{this.isProcessing=!1}}extractTextData(e,t,o){const{cleanOcrText:s}=this.helpers;return e.data.lines.map(r=>{const n=s(r.text);if(!n||n.length<3&&!/^19\d{4}$/.test(n))return null;const c=r.bbox||{x0:0,y0:0,x1:t,y1:o},i=(c.x0+c.x1)/2,l=(c.y0+c.y1)/2;return{text:n,bbox:c,centerX:i,centerY:l,width:t,height:o,confidence:r.confidence}}).filter(r=>r!==null&&r.text&&r.text.length>0)}getModeInfo(){return{initialized:this.isInitialized,mode:this.useWebWorker?"webworker":"direct",workerReady:this.workerReady}}async destroy(){if(this.stopScanning(),this.ocrWorker){try{this.ocrWorker.postMessage({type:"terminate",id:"terminate"}),this.ocrWorker.terminate()}catch{}this.ocrWorker=null,this.workerReady=!1}this.tesseractWorker&&(await this.tesseractWorker.terminate(),this.tesseractWorker=null),this.canvas=null,this.ctx=null,this.isInitialized=!1,this.pendingRequests.clear(),console.log("🧹 OCR service destroyed")}}const ocrService=new OCRService;class CatalogIndex{constructor(){this.byOrderCode=new Map,this.byBarcode=new Map,this.byNameExact=new Map,this.byNameWords=new Map,this.catalog=[],this.isBuilt=!1}build(e){if(!e||e.length===0){console.warn("CatalogIndex: Empty catalog provided");return}console.log(`🔨 Building catalog index for ${e.length} products...`);const t=performance.now();this.byOrderCode.clear(),this.byBarcode.clear(),this.byNameExact.clear(),this.byNameWords.clear(),this.catalog=e;for(const s of e){const r=(s.OrderCode||"").toString().trim().toUpperCase();r&&this.byOrderCode.set(r,s);const n=(s.BARCODE||s.Barcode||"").toString().trim();n&&this.byBarcode.set(n,s);const c=(s["Product Name"]||s.productName||"").toUpperCase().trim();if(c){this.byNameExact.set(c,s);const i=this.extractSignificantWords(c);for(const l of i)this.byNameWords.has(l)||this.byNameWords.set(l,new Set),this.byNameWords.get(l).add(s)}}this.isBuilt=!0;const o=(performance.now()-t).toFixed(2);console.log(`✅ Catalog index built in ${o}ms`),console.log(`   - OrderCodes: ${this.byOrderCode.size}`),console.log(`   - Barcodes: ${this.byBarcode.size}`),console.log(`   - Product Names: ${this.byNameExact.size}`),console.log(`   - Word Index: ${this.byNameWords.size} unique words`)}extractSignificantWords(e){return e.replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>2).map(t=>t.toUpperCase())}getByOrderCode(e){if(!e)return null;const t=e.toString().trim().toUpperCase();return this.byOrderCode.get(t)||null}getByBarcode(e){if(!e)return null;const t=e.toString().trim();return this.byBarcode.get(t)||null}getByNameExact(e){if(!e)return null;const t=e.toString().toUpperCase().trim();return this.byNameExact.get(t)||null}findByNameWords(e){if(!e)return[];const t=this.extractSignificantWords(e);if(t.length===0)return[];const o=t.map(r=>this.byNameWords.get(r)||new Set);if(o.length===0)return[];let s=new Set(o[0]);for(let r=1;r<o.length;r++)s=new Set([...s].filter(n=>o[r].has(n)));return Array.from(s)}fuzzyMatchOrderCode(e,t=1){if(!e)return null;const o=e.toString().trim().toUpperCase(),s=this.byOrderCode.get(o);if(s)return{product:s,distance:0,confidence:"high"};if(!/^19\d{4}$/.test(o))return null;let r=null,n=t+1;for(const[c,i]of this.byOrderCode){if(c.length!==o.length||!c.startsWith("19"))continue;const l=this.levenshteinDistance(o,c);l<=t&&l<n&&(n=l,r={product:i,distance:l,confidence:l===0?"high":"medium",originalCode:c})}return r}levenshteinDistance(e,t){if(e===t)return 0;if(e.length===0)return t.length;if(t.length===0)return e.length;const o=[];for(let s=0;s<=t.length;s++)o[s]=[s];for(let s=0;s<=e.length;s++)o[0][s]=s;for(let s=1;s<=t.length;s++)for(let r=1;r<=e.length;r++)t.charAt(s-1)===e.charAt(r-1)?o[s][r]=o[s-1][r-1]:o[s][r]=Math.min(o[s-1][r-1]+1,o[s][r-1]+1,o[s-1][r]+1);return o[t.length][e.length]}findSimilarOrderCodes(e,t=3){if(!e)return[];const o=e.toString().trim().toUpperCase(),s=[];for(const[r,n]of this.byOrderCode){if(r.length!==o.length)continue;const c=this.levenshteinDistance(o,r);c<=2&&s.push({code:r,product:n,distance:c})}return s.sort((r,n)=>r.distance-n.distance).slice(0,t)}fuzzyMatchProductName(e,t=1){if(!e||e.length<5)return[];const o=e.toUpperCase().trim(),s=[],r=[],n=o.match(/([A-Z]{4,})\s*(\d{3,4})/g);if(n&&n.forEach(i=>{const l=i.match(/([A-Z]{4,})\s*(\d{3,4})/);l&&r.push({name:l[1],number:l[2],full:`${l[1]} ${l[2]}`})}),r.length===0)return[];const c=new Map;for(const i of this.catalog){const l=(i["Product Name"]||i.productName||"").toUpperCase().trim();if(!l)continue;const d=l.match(/^([A-Z]+)\s+(\d{3,4})/);if(d){const u=`${d[1]} ${d[2]}`;c.has(u)||c.set(u,[]),c.get(u).push(i)}}for(const i of r)for(const[l,d]of c){const u=l.split(/\s+/),h=u[0],m=u[1];if(i.number!==m)continue;const p=this.levenshteinDistance(i.name,h);p<=t&&d.forEach(f=>{const g=s.find(w=>w.product.OrderCode===f.OrderCode);(!g||g.distance>p)&&(g&&s.splice(s.indexOf(g),1),s.push({product:f,distance:p,matchedFamily:l,ocrText:i.full,confidence:p===0?"high":"medium"}))})}return console.log(`🔍 Fuzzy name matching: "${e}" → found ${s.length} products`),s}getCatalog(){return this.catalog}isReady(){return this.isBuilt&&this.catalog.length>0}}const catalogIndex=new CatalogIndex;let _productSearch=null,_indexedCatalog=null;class OCRProductMatcher{static ensureIndexBuilt(e){(!catalogIndex.isReady()||catalogIndex.getCatalog()!==e)&&catalogIndex.build(e),(!_productSearch||_indexedCatalog!==e)&&(_productSearch=new ProductSearch,_productSearch.buildIndex(e),_indexedCatalog=e)}static findProductsByOcrTexts(e,t){var g,w;if(console.log("🔍 findProductsByOcrTexts called with",e.length,"items"),console.log("🔍 First item type:",e.length>0?typeof e[0]:"empty"),console.log("🔍 First item sample:",e.length>0?typeof e[0]=="string"?e[0].substring(0,50):JSON.stringify(e[0]).substring(0,100):"N/A"),this.ensureIndexBuilt(t),e.length>0&&typeof e[0]=="string"){console.log("⚠️  Using legacy format (array of strings)");const y=e;return this.findProductsByOcrTextsLegacy(y,t)}console.log("✅ Using new format (array of objects with spatial data)"),e.map(y=>y.text);const o=((g=e[0])==null?void 0:g.width)||640,s=((w=e[0])==null?void 0:w.height)||480,r=o*.2,n=o*.8,c=s*.2,i=s*.8,l=[];for(let y=0;y<e.length;y++){const S=e[y],b=S.text;console.log(`🔎 Processing OCR text [${y+1}/${e.length}]: "${b}"`);let v=b.trim().toUpperCase();v=v.replace(/\s+/g," ").trim();const E=S.centerX>=r&&S.centerX<=n&&S.centerY>=c&&S.centerY<=i?1:.3,L=v.replace(/\s/g,"").match(/\d{6}/g)||[],R=v.match(/\d[\d\s]{5,8}\d/g);if(R)for(const C of R){const P=C.replace(/\s/g,"");/^\d{6}$/.test(P)&&!L.includes(P)&&L.push(P)}let B=!1;for(const C of L){let P=catalogIndex.getByOrderCode(C);if(P||(P=_productSearch.findByCode(C)),P){console.log(`✅ OrderCode match: "${b}" → ${P.OrderCode} (${(P["Product Name"]||P.Description||"").substring(0,40)})`),l.push({text:b,type:"OrderCode",confidence:"high",product:P,centerX:S.centerX,centerY:S.centerY,centerScore:E}),B=!0;break}if(/^19\d{4}$/.test(C)){const T=catalogIndex.fuzzyMatchOrderCode(C,1);if(T){console.log(`✅ Fuzzy OrderCode match: "${b}" → ${T.product.OrderCode} (distance: ${T.distance})`),l.push({text:b,type:"OrderCode",confidence:T.distance===0?"high":"medium",product:T.product,centerX:S.centerX,centerY:S.centerY,centerScore:E,fuzzyMatch:T.distance>0}),B=!0;break}}console.log(`❌ Code "${C}" from "${b}" not found in catalog`)}if(B)continue;const A=v.replace(/[^\w\s]/g,"").trim();if(A.length<5){console.log(`⏭️  Skipping product name match for short text: "${b}"`),console.log(`❌ No match for: "${b}"`);continue}if(!/^[A-Z]{4,}(\s+[A-Z]+)?(\s+\d{2,4})?$/.test(A)){console.log(`⏭️  Skipping - doesn't look like a product name: "${b}"`);continue}const U=_productSearch.search(A,5,{fuzzy:!0});if(U.length>0){console.log(`📝 Fuse.js fuzzy match: "${b}" → ${U.length} products`),U.forEach(C=>{l.push({text:b,type:"ProductName",confidence:"medium",product:C,centerX:S.centerX,centerY:S.centerY,centerScore:E,fuzzyMatch:!0})});continue}console.log(`❌ No match for: "${b}"`)}const d=[],u=new Set;for(const y of l){const S=(y.product.OrderCode||"").toString().trim();S&&!u.has(S)&&(u.add(S),d.push(y))}console.log("🔍 Total unique matches found:",d.length),console.log("📦 Matched Products:",d.map(y=>({orderCode:y.product.OrderCode,name:(y.product["Product Name"]||y.product.Description||"").substring(0,50),type:y.type,confidence:y.confidence,centerScore:y.centerScore})));const h=d.filter(y=>y.type==="OrderCode"&&y.confidence==="high"),m=new Set(h.map(y=>y.product.OrderCode));if(m.size>1)return console.log("✅ Multiple distinct OrderCodes detected:",Array.from(m)),console.log("📋 Showing all OrderCode matches (",h.length,"products)"),h.sort((y,S)=>S.centerScore-y.centerScore);const p=this.groupByProductFamily(d);if(console.log("👥 Product Families Detected:",p.map(y=>({familyName:y.familyName,matchCount:y.matches.length,orderCodes:y.matches.map(S=>S.product.OrderCode).slice(0,5)}))),p.length===1)return console.log("✅ Single product family detected:",p[0].familyName),p[0].matches;const f=p.map(y=>{const S=y.matches.filter(E=>E.centerScore>=.7),b=S.length/Math.max(y.matches.length,1),v=y.matches.length/d.length,I=b*.7+v*.3;return console.log(`📊 Family "${y.familyName}":`,{totalMatches:y.matches.length,centerMatches:S.length,centerScore:b.toFixed(2),frequencyScore:v.toFixed(2),totalScore:I.toFixed(2)}),{...y,centerScore:b,frequencyScore:v,totalScore:I}});return f.sort((y,S)=>S.totalScore-y.totalScore),f.length>1&&f[0].totalScore>.7?(console.log("🎯 Auto-selecting dominant product family:",f[0].familyName,"with score:",f[0].totalScore.toFixed(2)),f[0].matches):(console.log("🔀 Multiple product families detected:",f.map(y=>`${y.familyName} (${y.matches.length} products, score: ${y.totalScore.toFixed(2)})`)),console.log("📋 Families array:",f),{families:f,requiresSelection:!0})}static groupByProductFamily(e){const t=new Map;for(const s of e){const r=s.product,n=(r["Product Name"]||r.productName||r.Description||"").toUpperCase().trim(),c=n.match(/^([A-Z]+(?:\s+[A-Z]+)?)\s*(\d+)/);let i=n;if(c)i=`${c[1]} ${c[2]}`.trim();else{const l=n.split(/\s+/).filter(d=>d.length>2);l.length>=2?i=`${l[0]} ${l[1]}`:l.length===1&&(i=l[0])}console.log(`🏷️  Product "${n.substring(0,40)}..." → Family: "${i}" (OrderCode: ${r.OrderCode})`),t.has(i)||t.set(i,[]),t.get(i).push(s)}const o=Array.from(t.entries()).map(([s,r])=>({familyName:s,matches:r.sort((n,c)=>{const i={high:3,medium:2,low:1};return i[c.confidence]!==i[n.confidence]?i[c.confidence]-i[n.confidence]:c.centerScore-n.centerScore})}));return console.log("👨‍👩‍👧‍👦 Grouped into",o.length,"families:",o.map(s=>`${s.familyName} (${s.matches.length})`)),o}static findProductsByOcrTextsLegacy(e,t){this.ensureIndexBuilt(t);const o=[];for(const n of e){let c=n.trim().toUpperCase();c=c.replace(/\s+/g," ").trim();const i=c.replace(/\s/g,"").match(/\d{6}/g)||[],l=c.match(/\d[\d\s]{5,8}\d/g);if(l)for(const p of l){const f=p.replace(/\s/g,"");/^\d{6}$/.test(f)&&!i.includes(f)&&i.push(f)}let d=!1;for(const p of i){let f=catalogIndex.getByOrderCode(p);if(f||(f=_productSearch.findByCode(p)),f){o.push({text:n,type:"OrderCode",confidence:"high",product:f}),d=!0;break}if(/^19\d{4}$/.test(p)){const g=catalogIndex.fuzzyMatchOrderCode(p,1);if(g){o.push({text:n,type:"OrderCode",confidence:"medium",product:g.product,fuzzyMatch:!0}),d=!0;break}}}if(d)continue;const u=c.replace(/[^\w\s]/g,"").trim();if(u.length<5||!/^[A-Z]{4,}(\s+[A-Z]+)?(\s+\d{2,4})?$/.test(u))continue;const m=_productSearch.search(u,5,{fuzzy:!0});if(m.length>0){m.forEach(p=>{o.push({text:n,type:"ProductName",confidence:"medium",product:p,fuzzyMatch:!0})});continue}}const s=[],r=new Set;for(const n of o){const c=(n.product.OrderCode||"").toString().trim();c&&!r.has(c)&&(r.add(c),s.push(n))}return s.sort((n,c)=>{const i={high:3,medium:2,low:1};return i[c.confidence]-i[n.confidence]}),s}}class StorageManager{static getCustomRooms(){return Utils.getStorageItem(CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,[])}static setCustomRooms(e){return Utils.setStorageItem(CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=Utils.sanitizeInput(e,50);return!o||[...CONFIG.ROOMS.PREDEFINED.map(r=>r.name),...t.map(r=>r.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return Utils.getStorageItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,[])}static setSelectedProducts(e){return Utils.setStorageItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,e)}static addProductToSelection(e,{notes:t="",room:o="",quantity:s=1}={}){const r=this.getSelectedProducts(),n={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,CONFIG.UI.ANNOTATION_MAX_LENGTH),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,Math.min(999,parseInt(s)||1)),timestamp:Date.now()};return r.push(n),this.setSelectedProducts(r)?n.id:!1}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),s=o.findIndex(r=>r.id===e);return s!==-1?(o[s].quantity=Math.max(1,Math.min(999,parseInt(t)||1)),this.setSelectedProducts(o)):!1}static updateProductDetails(e,t={}){const o=this.getSelectedProducts(),s=o.findIndex(c=>c.id===e);if(s===-1)return!1;const n={...o[s],...t};return t.notes!==void 0&&(n.notes=Utils.sanitizeInput(t.notes,CONFIG.UI.ANNOTATION_MAX_LENGTH)),t.room!==void 0&&(n.room=Utils.sanitizeInput(t.room,50)),t.quantity!==void 0&&(n.quantity=Math.max(1,Math.min(999,parseInt(t.quantity)||1))),t.product&&(n.product=Utils.deepClone(t.product)),o[s]=n,this.setSelectedProducts(o)}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getStaffContactDetails(){try{const e=localStorage.getItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.error("Error getting staff contact details:",e),null}}static setStaffContactDetails(e){try{return localStorage.setItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT,JSON.stringify(e)),!0}catch(t){return console.error("Error saving staff contact details:",t),!1}}static clearStaffContactDetails(){try{return localStorage.removeItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT),!0}catch(e){return console.error("Error clearing staff contact details:",e),!1}}}class HybridScannerController{constructor(){this.isScanning=!1,this.scannerEngine="detector",this.onScanCallback=null,this.lastScannedCode=null,this.scanTimeout=null,this.videoElement=null,this.barcodeDetector=null,this.streamRef=null,this.scanningRef=!1,this.detectorReady=!1}async initialize(){try{if("BarcodeDetector"in window)console.log("Using native Barcode Detection API");else{console.log("Using WebAssembly polyfill for iOS/Safari");let e=0;for(;!window.polyfillReady&&e<50;)await new Promise(t=>setTimeout(t,100)),e++;if(window.barcodeDetectorPolyfill&&window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill)window.BarcodeDetector=window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill,console.log("✅ Polyfill assigned to window.BarcodeDetector");else throw console.error("Polyfill not available after waiting. polyfillReady:",window.polyfillReady),console.error("Available barcode keys:",Object.keys(window).filter(t=>t.toLowerCase().includes("barcode"))),new Error("BarcodeDetector polyfill not loaded")}this.barcodeDetector=new window.BarcodeDetector({formats:["ean_13"]}),this.detectorReady=!0,console.log("✅ Scanner initialized successfully")}catch(e){throw console.error("Error initializing barcode detector:",e),this.detectorReady=!1,e}}setOnScanCallback(e){this.onScanCallback=e}async startScanning(e="barcode"){if(this.isScanning&&e==="barcode")return;if(!document.getElementById("scanner-viewport")){console.error("Scanner viewport not found");return}try{if(this.isScanning&&this.streamRef&&(this.streamRef.getTracks().forEach(o=>o.stop()),this.streamRef=null,this.videoElement=null),e==="barcode"&&!this.detectorReady&&(console.log("Initializing scanner..."),await this.initialize()),e==="barcode"&&!this.detectorReady){console.error("Scanner not ready after initialization"),this.showCameraError();return}this.isScanning=!0,this.scanningRef=e==="barcode",this.lastScannedCode=null,await this.startDetectorScanning(e)}catch(o){console.error("Failed to start scanner:",o),console.error("Error details:",o.name,o.message),this.showCameraError(),this.isScanning=!1,this.scanningRef=!1}}async startDetectorScanning(e="barcode"){const t=document.getElementById("scanner-viewport");this.videoElement=document.createElement("video"),this.videoElement.style.width="100%",this.videoElement.style.height="100%",this.videoElement.style.objectFit="cover",t.innerHTML="",t.appendChild(this.videoElement);try{const o={facingMode:"environment"};e==="text"?(o.width={ideal:1920,min:1280},o.height={ideal:1080,min:720},o.focusMode="continuous",o.advanced=[{focusMode:"continuous"},{exposureMode:"continuous"}]):(o.width={ideal:1280},o.height={ideal:720});const s=await navigator.mediaDevices.getUserMedia({video:o});this.streamRef=s,this.videoElement.srcObject=s,this.videoElement.setAttribute("playsinline","true"),await this.videoElement.play(),e==="text"?console.log("📷 Camera started in text capture mode (higher resolution)"):this.scanBarcodes()}catch(o){if(console.error("Error starting scanner:",o),e==="text")try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}}});this.streamRef=s,this.videoElement.srcObject=s,await this.videoElement.play(),console.log("📷 Camera started with fallback settings")}catch{this.showCameraError("Camera access denied or unavailable"),this.isScanning=!1}else this.showCameraError("Camera access denied or unavailable"),this.isScanning=!1}}async scanBarcodes(){if(!(!this.scanningRef||!this.videoElement)){if(this.videoElement.readyState<2){this.scanningRef&&setTimeout(()=>this.scanBarcodes(),200);return}try{const e=await this.barcodeDetector.detect(this.videoElement);if(e&&e.length>0){const t=e[0];if(t.format==="ean_13"){const o=t.rawValue;this.stopScanning(),navigator.vibrate&&navigator.vibrate(200),this.onScanCallback&&this.onScanCallback(o,null);return}}this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}catch(e){console.error("Detection error:",e),this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}}}stopScanning(){this.isScanning&&(this.isScanning=!1,this.scanningRef=!1,this.streamRef&&(this.streamRef.getTracks().forEach(e=>e.stop()),this.streamRef=null),this.videoElement&&(this.videoElement.srcObject&&(this.videoElement.srcObject=null),this.videoElement=null),this.scanTimeout&&(clearTimeout(this.scanTimeout),this.scanTimeout=null))}isValidBarcode(e){return/^\d{8}$|^\d{12,13}$/.test(e)}provideHapticFeedback(){navigator.vibrate&&navigator.vibrate(50)}showCameraError(){const e=document.getElementById("scanner-viewport");e&&(e.innerHTML=`
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; text-align: center; padding: 20px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
          <h3>Camera Access Required</h3>
          <p>Please allow camera access to scan barcodes, or use manual entry below.</p>
          <button onclick="window.scannerController.startScanning()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer;">Try Again</button>
        </div>
      `)}setManualBarcode(e){e&&this.isValidBarcode(e)&&(this.lastScannedCode=e,this.stopScanning(),this.provideHapticFeedback(),this.onScanCallback&&this.onScanCallback(e,null))}setScannerEngine(e){console.log("setScannerEngine is deprecated - using BarcodeDetector automatically")}getScannerInfo(){return{engine:this.scannerEngine,isNative:"BarcodeDetector"in window&&!window.barcodeDetectorPolyfill,hasNativeSupport:"BarcodeDetector"in window,detectorReady:this.detectorReady}}playScanSound(){try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),o=e.createGain();t.connect(o),o.connect(e.destination),t.frequency.value=800,t.type="sine",o.gain.setValueAtTime(.1,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),t.start(e.currentTime),t.stop(e.currentTime+.1)}catch{}}destroy(){this.stopScanning()}}class NavigationManager{constructor(){this.currentScreen="welcome",this.selectedRoom=null,this.scannerController=new HybridScannerController,this.dataService=dataService,this.reviewSortables=[],this.currentEditSelectionId=null,this.setupScannerCallback()}setupScannerCallback(){this.scannerController.setOnScanCallback(e=>{if(!this.dataService.isLoaded){this.showScanFeedback("Product data loading, please wait...");return}this.showScanFeedback(`Detected: ${e}`);const t=this.dataService.findProductByBarcode(e);t?this.showProductDetailsScreen(t,{scannedCode:e}):(this.showScanFeedback(`Barcode not found: ${e}`),setTimeout(()=>{this.scannerController&&this.scannerController.startScanning()},1500))})}async init(){try{await this.dataService.init()}catch(e){console.error("Failed to load product catalog:",e)}this.setupWelcomeScreen(),this.updateSelectionCount(),setTimeout(()=>{console.log("🚀 Initializing scanner..."),this.scannerController.initialize().then(()=>{console.log("✅ Scanner pre-initialized and ready")}).catch(e=>{console.error("❌ Scanner pre-initialization failed:",e)})},100)}setupWelcomeScreen(){const e=document.getElementById("start-btn"),t=document.getElementById("view-selection-btn"),o=document.getElementById("clear-selection-btn"),s=document.getElementById("settings-btn");e&&(e.onclick=()=>this.showRoomSelection()),t&&(t.onclick=()=>this.showReviewScreen()),o&&(o.onclick=()=>this.showClearConfirmModal()),s&&(s.onclick=()=>this.showSeimaContactModal()),this.setupSeimaContactModal();const r=document.getElementById("version-number");r&&(r.textContent=CONFIG.VERSION)}async showRoomSelection(){try{const t=await(await fetch("screens/room-selection.html")).text();document.body.innerHTML=t,this.currentScreen="room-selection",this.renderRoomGrid();const o=document.getElementById("back-to-welcome"),s=document.getElementById("add-custom-room");o&&(o.onclick=()=>location.reload()),s&&(s.onclick=()=>this.handleAddCustomRoom())}catch(e){console.error("Failed to load room selection screen:",e)}}renderRoomGrid(){const e=document.getElementById("room-grid");if(!e)return;e.innerHTML="",CONFIG.ROOMS.PREDEFINED.forEach(o=>{const s=document.createElement("button");s.className="room-btn",s.innerHTML=`<span class="room-icon">${Utils.escapeHtml(o.icon)}</span>${Utils.escapeHtml(o.name)}`,s.onclick=()=>this.selectRoom(o.name),e.appendChild(s)}),StorageManager.getCustomRooms().forEach((o,s)=>{const r=document.createElement("button");r.className="room-btn",r.innerHTML=`<span class="room-icon">📝</span>${Utils.escapeHtml(o.name)}`,r.onclick=()=>this.selectRoom(o.name),r.ondblclick=()=>this.handleRemoveCustomRoom(s),r.title="Double-click to remove",e.appendChild(r)})}selectRoom(e){this.selectedRoom=e,this.showScannerScreen()}async showScannerScreen(){if(this._loadingScannerScreen){console.log("Scanner screen already loading");return}this._loadingScannerScreen=!0;let e=null;try{this.scannerController.stopScanning(),console.log("🎥 Requesting camera permission...");try{if(navigator.permissions&&navigator.permissions.query)try{const r=await navigator.permissions.query({name:"camera"});console.log("Camera permission status:",r.state),r.state==="granted"?console.log("✅ Camera permission already granted, skipping temp stream"):(e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(n=>{n.stop()}),e=null))}catch{console.log("Permissions API query failed, requesting stream directly"),e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(n=>{n.stop()}),e=null)}else e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(r=>{r.stop()}),e=null)}catch(r){console.error("❌ Camera permission denied:",r),this._loadingScannerScreen=!1;let n="Camera access denied or unavailable.";r.name==="NotAllowedError"?n="Camera access denied. Please enable camera permissions in your browser settings.":r.name==="NotFoundError"?n="No camera found on this device.":r.name==="NotReadableError"&&(n="Camera is already in use by another application."),alert(n);return}const o=await(await fetch("screens/scanner.html")).text();document.body.innerHTML=o,this.currentScreen="scanner";const s=document.getElementById("current-room-badge");s&&(s.textContent=this.selectedRoom),this.setupScannerScreenHandlers(),this.showBarcodeScanOverlay(),this.scannerController.startScanning().catch(r=>{console.error("Failed to start scanner:",r)}),this.updateSelectionCount()}catch(t){console.error("Failed to load scanner screen:",t),alert("Failed to load scanner. Please try again.")}finally{e&&e.getTracks().forEach(t=>t.stop()),this._loadingScannerScreen=!1}}setupScannerScreenHandlers(){const e=document.getElementById("back-to-rooms"),t=document.getElementById("review-btn"),o=document.getElementById("text-scan-btn"),s=document.getElementById("scanner-engine-toggle");e&&(e.onclick=()=>{this.scannerController.stopScanning(),ocrService.stopScanning(),this.showRoomSelection()}),t&&(t.onclick=()=>{this.scannerController.stopScanning(),ocrService.stopScanning(),this.showReviewScreen()}),o&&(o.onclick=()=>this.startTextScanMode()),s&&(s.value=this.scannerController.scannerEngine,s.onchange=()=>{this.scannerController.setScannerEngine(s.value),this.scannerController.stopScanning(),setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)}),this.setupProductSearch()}setupProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("product-search-dropdown");if(!e||!t)return;let o=[];const s=Utils.debounce(r=>{this.performProductSearch(r,t,o)},300);e.addEventListener("focus",()=>{this.scannerController.stopScanning(),setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center"})},100)}),e.addEventListener("blur",()=>{setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)}),e.addEventListener("input",()=>{const r=e.value.trim();r?s(r):(t.innerHTML="",t.classList.remove("visible"))}),t.onclick=r=>{const n=r.target.closest("li[data-idx]");if(!n)return;const c=parseInt(n.getAttribute("data-idx"),10);!isNaN(c)&&o[c]&&this.showProductDetailsScreen(o[c]),t.classList.remove("visible"),e.value="",setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)},document.addEventListener("click",r=>{!t.contains(r.target)&&r.target!==e&&t.classList.remove("visible")})}performProductSearch(e,t,o){if(!this.dataService.isLoaded){t.innerHTML="<li>Loading catalog...</li>",t.classList.add("visible");return}o.length=0,o.push(...this.dataService.searchProducts(e)),o.length===0?t.innerHTML="<li>No products found</li>":t.innerHTML=o.map((s,r)=>`<li data-idx="${r}">${s.OrderCode} - ${s.Description}</li>`).join(""),t.classList.add("visible")}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.currentEditSelectionId=t.mode==="edit"&&t.selectionId||null,this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e,t)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?"Code: "+e.OrderCode:"";let s="",r=NaN;e.RRP_INCGST&&(r=parseFloat(e.RRP_INCGST.toString().replace(/,/g,""))),!isNaN(r)&&r>0?s=`$${r.toFixed(2)} inc GST`:s="Price unavailable",document.getElementById("product-price-inline").textContent=s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const n=document.getElementById("diagram-link"),c=document.getElementById("datasheet-link"),i=document.getElementById("website-link");if([n,c,i].forEach(l=>{l&&(l.setAttribute("target","_blank"),l.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantityInput(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.room){const l=document.getElementById("room-select");if(l){if(!Array.from(l.options).some(u=>u.value===t.room)){const u=document.createElement("option");u.value=t.room,u.textContent=t.room,l.appendChild(u)}l.value=t.room}}if(t.quantity){const l=document.getElementById("product-quantity");l&&(l.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}async restartTextCamera(e="Ready to capture"){try{await this.scannerController.startScanning("text"),e&&this.showScanFeedback(e)}catch(t){console.error("Failed to restart camera:",t),this.showScanFeedback("Camera error - please try again")}}populateRoomSelect(){const e=document.getElementById("room-select");if(!e)return;e.innerHTML="",CONFIG.ROOMS.PREDEFINED.forEach(s=>{const r=document.createElement("option");r.value=s.name,r.textContent=s.name,s.name===this.selectedRoom&&(r.selected=!0),e.appendChild(r)}),StorageManager.getCustomRooms().forEach(s=>{const r=document.createElement("option");r.value=s.name,r.textContent=s.name,s.name===this.selectedRoom&&(r.selected=!0),e.appendChild(r)});const o=document.createElement("option");o.value="__add_new_room__",o.textContent="+ Add New Room / Group...",o.style.fontStyle="italic",e.appendChild(o),e.removeEventListener("change",this._roomSelectHandler),this._roomSelectHandler=s=>this.handleRoomSelectChange(s),e.addEventListener("change",this._roomSelectHandler)}handleRoomSelectChange(e){const t=e.target;t.value==="__add_new_room__"&&(t.selectedIndex=0,this.showAddRoomModal(o=>{const s=o.trim();if(Array.from(t.options).map(c=>c.value.toLowerCase()).includes(s.toLowerCase())){alert("This room already exists.");const c=Array.from(t.options).find(i=>i.value.toLowerCase()===s.toLowerCase());c&&(t.value=c.value);return}StorageManager.addCustomRoom(s);const n=document.createElement("option");n.value=s,n.textContent=s,t.insertBefore(n,t.options[t.options.length-1]),t.value=s,this.selectedRoom=s}))}setupQuantityInput(){const e=document.getElementById("product-quantity");e&&(e.addEventListener("blur",()=>{let t=parseInt(e.value,10);(isNaN(t)||t<1)&&(t=1),t>999&&(t=999),e.value=t}),e.addEventListener("focus",()=>{e.select()}))}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let r=e.ProductName||e["Product Name"]||"";typeof r=="string"&&(r=r.trim());let n=[];r&&(n=this.dataService.getAllProducts().filter(c=>{let i=c.ProductName||c["Product Name"]||"";return typeof i=="string"&&(i=i.trim()),i&&i===r})),n.length>1?(n.sort((c,i)=>(c.Description||"").localeCompare(i.Description||"")),o.style.display="",s.innerHTML=n.map(c=>`<option value="${c.OrderCode}"${c.OrderCode===e.OrderCode?" selected":""}>${c.Description}</option>`).join(""),s.onchange=()=>{var l;const c=s.value,i=n.find(d=>d.OrderCode===c);if(i&&i.OrderCode!==e.OrderCode){const d=((l=document.getElementById("product-annotation"))==null?void 0:l.value)||t.notes||"",u=document.getElementById("product-quantity");let h=1;u&&u.value?h=Math.max(1,parseInt(u.value,10)||1):t.quantity&&(h=t.quantity);const m=document.getElementById("room-select"),p=m?m.value:t.room;this.showProductDetailsScreen(i,{...t,notes:d,quantity:h,room:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",function(){t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=t.value.length+"/140"}),t.addEventListener("keydown",function(s){s.key==="Enter"&&s.preventDefault()}),o.textContent=t.value.length+"/140",e.notes&&(t.value=e.notes,o.textContent=t.value.length+"/140"))}setupAnnotationField(){}setupProductDetailsHandlers(e,t={}){const o=document.getElementById("back-to-scanner"),s=document.getElementById("add-to-room-btn"),r=document.getElementById("delete-selection-btn");o&&(o.onclick=()=>{t.mode==="edit"?this.showReviewScreen():this.showScannerScreen()}),s&&(t.mode==="edit"&&t.selectionId?(s.textContent="Save",s.onclick=()=>this.saveEditedProduct(e,t)):(s.textContent="Add to Group",s.onclick=()=>this.addProductToSelection(e))),r&&(t.mode==="edit"&&t.selectionId?(r.style.display="block",r.onclick=()=>this.showDeleteModal(e,t)):(r.style.display="none",r.onclick=null))}saveEditedProduct(e,t){if(!t.selectionId)return;const o=document.getElementById("room-select"),s=document.getElementById("product-quantity"),r=document.getElementById("product-annotation"),n=o?o.value:"",c=s?Math.max(1,parseInt(s.value,10)||1):1,i=r?r.value:"";if(!StorageManager.updateProductDetails(t.selectionId,{product:Utils.deepClone(e),room:n,quantity:c,notes:i})){alert("Unable to save changes. Please try again.");return}this.currentEditSelectionId=null,this.showReviewScreen()}showDeleteModal(e,t){const o=document.getElementById("delete-confirm-modal");if(!o||!t.selectionId)return;const s=document.getElementById("delete-confirm-message");s&&(s.textContent="Confirm delete");const r=document.getElementById("delete-cancel-btn"),n=document.getElementById("delete-confirm-btn");r&&(r.onclick=()=>{o.style.display="none"}),n&&(n.onclick=()=>{const c=StorageManager.removeProductFromSelection(t.selectionId);if(o.style.display="none",!c){alert("Unable to remove this product. Please try again.");return}this.currentEditSelectionId=null,this.showReviewScreen()}),o.onclick=c=>{c.target===o&&(o.style.display="none")},o.style.display="flex"}escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),r=t?t.value:this.selectedRoom,n=o?parseInt(o.value):1,c=s?s.value:"";StorageManager.addProductToSelection(e,{notes:c,room:r,quantity:n})?this.showReviewScreen():alert("Failed to add product to selection")}async showReviewScreen(){try{const t=await(await fetch("screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-scanner"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showScannerScreen()),t&&(t.onclick=()=>this.showScannerScreen()),o&&(console.log("📧 Email button available - lead wizard integration will handle it"),window.leadWizardIntegration||(console.log("⚠️ Lead wizard integration not available, using fallback"),o.onclick=()=>this.showPdfFormModal()))}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=StorageManager.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block"),this.destroyReviewSortables();return}t&&(t.style.display="none");const s=this.groupProductsByRoom(o);e.innerHTML=Object.entries(s).map(([r,n])=>`
      <div class="review-room-group" data-room="${r}">
        <div class="review-room-header">${r} <span class="room-count">(${n.length})</span></div>
        <div class="review-room-items" data-room="${r}">
        ${n.map(c=>{const i=c.product,l=i.Description||i.description||i.productName||i["Product Name"]||"Product",d=i.OrderCode||i.orderCode||"",u=i.Image_URL||i.imageUrl||"assets/no-image.png",h=i.RRP_INCGST||i.rrpIncGst||i.price||"",m=c.quantity||1,p=h?parseFloat(h.toString().replace(/[^0-9.-]/g,"")):NaN,f=isNaN(p)?"":`$${p.toFixed(2)} ea`,g=c.notes?`Notes: ${c.notes}`:"",w=this.escapeHtml(l),y=this.escapeHtml(d),S=g?this.escapeHtml(g):"",b=d?`Code: ${y}`:"Code: —",v=`Qty: ${m}`,I=f||"—";return`
          <div class="review-product-card" data-id="${c.id}" data-room="${r}" aria-label="Selected product card">
            <div class="review-drag-handle" aria-label="Drag to reorder">
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
            </div>
            <div class="review-card-content" data-id="${c.id}">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${u}" alt="Product" onerror="this.src='assets/no-image.png';">
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${w}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${b}</span>
                  <span class="review-product-qty">${v}</span>
                  <span class="review-product-price">${I}</span>
                </div>
                ${S?`<div class="review-product-notes">${S}</div>`:""}
              </div>
            </div>
          </div>
          `}).join("")}
        </div>
      </div>
    `).join(""),this.setupReviewInteractions()}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupReviewInteractions(){this.setupReviewCardTaps(),this.setupDragAndDrop(),this.updateRoomEmptyStates()}destroyReviewSortables(){this.reviewSortables&&this.reviewSortables.length&&this.reviewSortables.forEach(e=>e.destroy()),this.reviewSortables=[]}setupDragAndDrop(){const e=Array.from(document.querySelectorAll(".review-room-items"));if(!e.length){this.destroyReviewSortables();return}this.destroyReviewSortables(),this.reviewSortables=e.map(t=>new Sortable(t,{group:{name:"review-rooms",pull:!0,put:!0},animation:160,draggable:".review-product-card",handle:".review-drag-handle",delay:0,delayOnTouchOnly:!1,touchStartThreshold:3,fallbackTolerance:5,fallbackOnBody:!0,ghostClass:"review-card-ghost",chosenClass:"review-card-chosen",dragClass:"review-card-dragging",onEnd:()=>this.persistReorderedProducts()}))}persistReorderedProducts(){const e=StorageManager.getSelectedProducts();if(!e.length)return;const t=new Map(e.map(r=>[r.id,r])),o=[];if(document.querySelectorAll(".review-room-group").forEach(r=>{const n=r.getAttribute("data-room")||"Unassigned";r.querySelectorAll(".review-product-card").forEach(i=>{const l=i.getAttribute("data-id"),d=t.get(l);d&&(o.push({...d,room:n}),t.delete(l))})}),t.forEach(r=>o.push(r)),!StorageManager.setSelectedProducts(o)){alert("Unable to save the new order. Please try again.");return}this.renderReviewList(),this.updateSelectionCount()}setupReviewCardTaps(){const e=document.querySelectorAll(".review-card-content"),t=10,o=300;e.forEach(s=>{let r=0,n=0,c=0,i=!1;s.addEventListener("touchstart",l=>{r=l.touches[0].clientY,n=l.touches[0].clientX,c=Date.now(),i=!0},{passive:!0}),s.addEventListener("touchmove",l=>{if(!i)return;const d=Math.abs(l.touches[0].clientY-r),u=Math.abs(l.touches[0].clientX-n);(d>t||u>t)&&(i=!1)},{passive:!0}),s.addEventListener("touchend",l=>{const d=Date.now()-c;if(i&&d<o){l.preventDefault(),l.stopPropagation();const u=s.getAttribute("data-id");u&&this.showProductQuickView(u)}i=!1},{passive:!1}),s.addEventListener("click",l=>{if(l.pointerType==="mouse"||!("ontouchstart"in window)){l.preventDefault(),l.stopPropagation();const d=s.getAttribute("data-id");d&&this.showProductQuickView(d)}})})}showProductQuickView(e){const o=StorageManager.getSelectedProducts().find(E=>E.id===e);if(!o){console.warn("Product not found for quick view:",e);return}const{product:s,notes:r,quantity:n,room:c}=o;let i=document.getElementById("product-quick-view-modal");i||(i=document.createElement("div"),i.id="product-quick-view-modal",i.className="modal",document.body.appendChild(i));const l=s.Description||s.description||s.productName||"Product",d=s.OrderCode||s.orderCode||"",u=s.Image_URL||s.imageUrl||"assets/no-image.png",h=s.Diagram_URL||s.diagramUrl||"",m=s.Datasheet_URL||s.datasheetUrl||"",p=s.Website_URL||s.websiteUrl||"",f=s.RRP_INCGST||s.rrpIncGst||s.price||"",g=f?parseFloat(f.toString().replace(/[^0-9.-]/g,"")):NaN,w=!isNaN(g)&&g>0?`$${g.toFixed(2)} inc GST`:"Price unavailable";i.innerHTML=`
      <div class="modal-content quick-view-content">
        <button class="quick-view-close" aria-label="Close">&times;</button>
        <div class="quick-view-image-section">
          <img class="quick-view-product-image" src="${this.escapeHtml(u)}" alt="${this.escapeHtml(l)}" onerror="this.src='assets/no-image.png';">
        </div>
        <div class="quick-view-details">
          <h3 class="quick-view-title">${this.escapeHtml(l)}</h3>
          <div class="quick-view-meta">
            <span class="quick-view-code">${d?"Code: "+this.escapeHtml(d):""}</span>
            <span class="quick-view-price">${w}</span>
          </div>
          <div class="quick-view-selection-info">
            <span class="quick-view-room"><strong>Room:</strong> ${this.escapeHtml(c||"Unassigned")}</span>
            <span class="quick-view-qty"><strong>Qty:</strong> ${n||1}</span>
          </div>
          ${r?`<div class="quick-view-notes"><strong>Notes:</strong> ${this.escapeHtml(r)}</div>`:""}
        </div>
        <div class="quick-view-actions">
          ${h?`<button class="quick-view-btn diagram-btn" data-url="${this.escapeHtml(h)}">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 5.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3z"/></svg>
            Diagram
          </button>`:""}
          ${m?`<a href="${this.escapeHtml(m)}" target="_blank" rel="noopener noreferrer" class="quick-view-btn datasheet-btn">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 15h8v2H8v-2zm0-4h8v2H8v-2z"/></svg>
            Datasheet
          </a>`:""}
          ${p?`<a href="${this.escapeHtml(p)}" target="_blank" rel="noopener noreferrer" class="quick-view-btn website-btn">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            Website
          </a>`:""}
        </div>
        <div class="quick-view-footer">
          <button class="primary-btn quick-view-edit-btn" data-selection-id="${e}">Edit Selection</button>
          <button class="secondary-btn quick-view-back-btn">Back</button>
        </div>
      </div>
    `,i.style.display="flex";const y=i.querySelector(".quick-view-close"),S=i.querySelector(".quick-view-edit-btn"),b=i.querySelector(".quick-view-back-btn"),v=i.querySelector(".diagram-btn"),I=()=>{i.style.display="none"};y.addEventListener("click",I),b.addEventListener("click",I),i.addEventListener("click",E=>{E.target===i&&I()}),S.addEventListener("click",()=>{I(),this.handleEditSelection(e)}),v&&v.addEventListener("click",E=>{E.preventDefault();const L=v.getAttribute("data-url");L&&this.showDiagramLightbox(L,l)})}showDiagramLightbox(e,t){let o=document.getElementById("diagram-lightbox");o||(o=document.createElement("div"),o.id="diagram-lightbox",o.className="diagram-lightbox",document.body.appendChild(o)),o.innerHTML=`
      <div class="diagram-lightbox-content">
        <div class="diagram-lightbox-header">
          <span class="diagram-lightbox-title">${this.escapeHtml(t||"Diagram")}</span>
          <button class="diagram-lightbox-close" aria-label="Close">&times;</button>
        </div>
        <div class="diagram-lightbox-body">
          <img class="diagram-lightbox-image" src="${this.escapeHtml(e)}" alt="Product Diagram" onerror="this.parentElement.innerHTML='<p class=\\'diagram-error\\'>Unable to load diagram</p>';">
        </div>
        <div class="diagram-lightbox-footer">
          <a href="${this.escapeHtml(e)}" target="_blank" rel="noopener noreferrer" class="secondary-btn">Open in New Tab</a>
        </div>
      </div>
    `,o.style.display="flex",o.querySelector(".diagram-lightbox-close").addEventListener("click",()=>{o.style.display="none"}),o.addEventListener("click",n=>{n.target===o&&(o.style.display="none")});const r=o.querySelector(".diagram-lightbox-image");r&&r.addEventListener("load",()=>{r.style.opacity="1"})}handleEditSelection(e){const o=StorageManager.getSelectedProducts().find(i=>i.id===e);if(!o){alert("Unable to find product in selection.");return}this.currentEditSelectionId=e;const{product:s,notes:r,quantity:n,room:c}=o;this.showProductDetailsScreen(s,{mode:"edit",selectionId:e,notes:r,quantity:n,room:c})}updateRoomEmptyStates(){document.querySelectorAll(".review-room-items").forEach(e=>{e.children.length===0?e.classList.add("is-empty"):e.classList.remove("is-empty")})}showPdfFormModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form"),o=document.getElementById("pdf-email-cancel");o&&(o.onclick=()=>{e.style.display="none"}),t&&(t.onsubmit=s=>{s.preventDefault(),this.handlePdfFormSubmit(),e.style.display="none"})}}handlePdfFormSubmit(){const e=document.getElementById("pdf-email-form");if(!e)return;const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on",exportCsv:t.get("export-csv")==="on",sendEmail:!0};if(!o.email){alert("Please enter an email address.");return}window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}handleAddCustomRoom(){this.showAddRoomModal(e=>{StorageManager.addCustomRoom(e.trim())?this.renderRoomGrid():alert("Room name already exists or is invalid")})}showAddRoomModal(e,t){const o=document.getElementById("add-room-modal");o&&o.remove();const s=document.createElement("div");s.id="add-room-modal",s.className="modal",s.style.display="flex",s.innerHTML=`
      <div class="modal-content add-room-modal-content">
        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 1.25rem;">Add New Room / Group</h3>
        <p style="margin: 0 0 16px 0; color: #666; font-size: 0.9rem;">Enter a name for your custom room or group:</p>
        <input type="text" id="new-room-input" class="add-room-input" placeholder="e.g., Master Bath, Pool Area..." maxlength="30" autofocus>
        <div class="modal-actions" style="margin-top: 20px;">
          <button id="add-room-cancel-btn" class="secondary-btn">Cancel</button>
          <button id="add-room-confirm-btn" class="primary-btn">Add</button>
        </div>
      </div>
    `,document.body.appendChild(s);const r=s.querySelector("#new-room-input"),n=s.querySelector("#add-room-cancel-btn"),c=s.querySelector("#add-room-confirm-btn");setTimeout(()=>r.focus(),100);const i=()=>{s.remove()},l=()=>{const d=r.value.trim();d?(i(),e&&e(d)):(r.focus(),r.style.borderColor="#e53e3e",setTimeout(()=>r.style.borderColor="",1500))};n.addEventListener("click",()=>{i(),t&&t()}),c.addEventListener("click",l),r.addEventListener("keydown",d=>{d.key==="Enter"?(d.preventDefault(),l()):d.key==="Escape"&&(i(),t&&t())}),s.addEventListener("click",d=>{d.target===s&&(i(),t&&t())})}handleRemoveCustomRoom(e){confirm("Remove this custom room?")&&(StorageManager.removeCustomRoom(e),this.renderRoomGrid())}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{StorageManager.clearAllSelections(),window.leadWizardIntegration&&(window.leadWizardIntegration.clearCurrentLeadData(),console.log("🧹 Lead data cleared with selection clear")),e.style.display="none",this.updateSelectionCount()})}}showScanFeedback(e){const t=document.getElementById("scanner-feedback");t&&(t.innerHTML=`
        <div style="color: #16a34a; background: #f0f9ff; padding: 8px; border-radius: 6px; margin: 4px 0;">
          ${Utils.sanitizeInput(e)}
        </div>
      `,setTimeout(()=>{t.innerHTML=""},3e3))}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=StorageManager.getSelectionCount().toString())}setupSeimaContactModal(){const e=document.getElementById("seima-contact-modal");if(!e)return;const t=document.getElementById("staff-contact-cancel-btn"),o=document.getElementById("staff-contact-save-btn"),s=document.getElementById("staff-mode-lock");document.getElementById("app-mode-input"),document.getElementById("staff-code-submit");const r=document.getElementById("staff-code-input-container");t&&(t.onclick=()=>{e.style.display="none",r&&(r.style.display="none")}),o&&(o.onclick=()=>this.handleSeimaContactSave()),s&&(s.onclick=()=>this.handleLockClick()),r&&(r.style.display="none"),this.loadSeimaContactDetails()}showSeimaContactModal(){const e=document.getElementById("seima-contact-modal");e&&(e.style.display="flex",this.loadSeimaContactDetails())}loadSeimaContactDetails(){const e=StorageManager.getStaffContactDetails(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-mobile"),r=document.getElementById("staff-email"),n=document.getElementById("lock-icon"),c=document.getElementById("staff-mode-lock"),i=document.getElementById("logged-in-profile-section"),l=document.getElementById("profile-avatar"),d=document.getElementById("profile-display-name"),u=document.getElementById("profile-display-email"),h=document.getElementById("edit-profile-btn"),m=authService.isLoggedIn(),p=authService.getCurrentUser();if(e&&(e.name||e.email)?(t&&e.name&&(t.value=e.name),o&&e.position&&(o.value=e.position),s&&e.mobile&&(s.value=e.mobile),r&&e.email&&(r.value=e.email)):p&&(t&&p.name&&(t.value=p.name),o&&p.position&&(o.value=p.position),r&&p.email&&(r.value=p.email),s&&p.phone&&(s.value=p.phone)),p){i&&(i.style.display="block"),d&&(d.textContent=p.name||""),u&&(u.textContent=p.email||""),l&&(l.textContent=this.getInitials(p.name)),h&&(h.onclick=()=>this.showEditProfileModal());const g=document.getElementById("change-password-btn");g&&(g.onclick=()=>{authUI.showChangePassword(()=>{console.log("📱 Password changed")})})}else i&&(i.style.display="none");n&&(n.textContent=m?"🔓":"🔒"),c&&(m?c.classList.add("unlocked"):c.classList.remove("unlocked"))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}showEditProfileModal(){authUI.showEditProfile(e=>{console.log("📱 Profile updated:",e),StorageManager.clearStaffContactDetails(),this.loadSeimaContactDetails()})}handleLockClick(){authService.isLoggedIn()?this.showExitStaffModeModal():authUI.showLogin(t=>{console.log("📱 Staff logged in:",t.email),this.updateLockUI(!0),this.loadSeimaContactDetails(),window.dispatchEvent(new CustomEvent("staffModeChanged",{detail:{mode:"staff",user:t}}))})}showExitStaffModeModal(){const e=document.getElementById("exit-staff-mode-modal");if(!e)return;e.style.display="flex";const t=document.getElementById("exit-staff-cancel-btn"),o=document.getElementById("exit-staff-confirm-btn");if(t){const s=t.cloneNode(!0);t.parentNode.replaceChild(s,t),s.onclick=()=>{e.style.display="none"}}if(o){const s=o.cloneNode(!0);o.parentNode.replaceChild(s,o),s.onclick=()=>{e.style.display="none",this.exitStaffMode()}}}handleCodeSubmit(){console.warn("handleCodeSubmit is deprecated - use authUI.showLogin() instead")}exitStaffMode(){authService.logout(),console.log("📱 Staff logged out"),StorageManager.clearStaffContactDetails(),this.updateLockUI(!1),window.dispatchEvent(new CustomEvent("staffModeChanged",{detail:{mode:"customer"}}))}updateLockUI(e){const t=document.getElementById("lock-icon"),o=document.getElementById("staff-mode-lock");t&&(t.textContent=e?"🔓":"🔒"),o&&(e?o.classList.add("unlocked"):o.classList.remove("unlocked"))}handleSeimaContactSave(){const e=document.getElementById("staff-name"),t=document.getElementById("staff-position"),o=document.getElementById("staff-mobile"),s=document.getElementById("staff-email"),r=document.getElementById("staff-code-input-container");if(!e||!o||!s)return;const n=e.value.trim(),c=(t==null?void 0:t.value.trim())||"",i=o.value.trim(),l=s.value.trim();if(!n||!i||!l){this.showStaffContactStatus("Please fill in all required fields.","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){this.showStaffContactStatus("Please enter a valid email address.","error");return}const u={name:n,position:c,mobile:i,email:l};StorageManager.setStaffContactDetails(u),this.showStaffContactStatus("Contact details saved!","success"),setTimeout(()=>{const h=document.getElementById("seima-contact-modal");h&&(h.style.display="none",r&&(r.style.display="none"))},1500)}showStaffContactStatus(e,t){const o=document.getElementById("staff-details-status");o&&(o.style.display="block",o.textContent=e,t==="success"?(o.style.background="#d1fae5",o.style.border="1px solid #10b981",o.style.color="#065f46"):t==="error"&&(o.style.background="#fee2e2",o.style.border="1px solid #ef4444",o.style.color="#991b1b"),setTimeout(()=>{o.style.display="none"},5e3))}async startTextScanMode(){try{this.scannerController.stopScanning();let e=this.scannerController.videoElement;if(!e||e.paused||e.ended?(await this.scannerController.startScanning("text"),await new Promise(s=>setTimeout(s,800)),e=this.scannerController.videoElement):console.log("📷 Using existing camera stream for text mode"),!e)throw new Error("Camera not available for Text Scan");this.showTextCaptureOverlay(),this.showScanFeedback("Position product label in the center area and tap Capture");const t=document.getElementById("text-scan-btn"),o=document.getElementById("ocr-capture-btn");t&&(t.textContent="Stop Text Scan",t.onclick=()=>this.stopTextScanMode()),o&&(o.style.display="block",o.onclick=()=>this.captureTextScan())}catch(e){console.error("Failed to start Text Scan mode:",e),this.showScanFeedback("Text Scan failed: "+e.message)}}async captureTextScan(){const e=this.scannerController.videoElement;if(!e){this.showScanFeedback("Camera not available");return}const t=document.getElementById("ocr-capture-btn");t&&(t.disabled=!0,t.textContent="Processing...");try{const o=e.videoWidth||640,s=e.videoHeight||480,r=document.createElement("canvas");r.width=o,r.height=s,r.getContext("2d").drawImage(e,0,0,o,s),this.scannerController.stopScanning(),this.showScanFeedback("Processing image...");const c=await ocrService.captureAndProcessCanvas(r);if(c.length===0){this.showScanFeedback("No text detected. Try better lighting or angle."),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent="Capture");return}await this.handleOcrResults(c),t&&(t.disabled=!1,t.textContent="Capture")}catch(o){console.error("OCR capture error:",o),this.showScanFeedback("Error: "+o.message),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent="Capture")}}stopTextScanMode(){ocrService.stopScanning(),this.showBarcodeScanOverlay(),this.scannerController.videoElement&&!this.scannerController.videoElement.paused&&(this.scannerController.stopScanning(),setTimeout(()=>{this.scannerController.startScanning("barcode").catch(o=>{console.warn("Failed to restart barcode scanning:",o)})},300));const e=document.getElementById("text-scan-btn"),t=document.getElementById("ocr-capture-btn");e&&(e.textContent="Text Scan",e.onclick=()=>this.startTextScanMode()),t&&(t.style.display="none",t.disabled=!1,t.textContent="Capture"),this.showScanFeedback("Text Scan stopped")}showTextCaptureOverlay(){const e=document.getElementById("scanner-overlay");if(!e)return;const t=e.querySelector(".scan-area"),o=e.querySelector(".scan-line");t&&(t.style.display="none"),o&&(o.style.display="none");let s=e.querySelector(".text-capture-area");s||(s=document.createElement("div"),s.className="text-capture-area",e.appendChild(s)),s.style.display="block";let r=e.querySelector(".text-capture-corners");r||(r=document.createElement("div"),r.className="text-capture-corners",e.appendChild(r)),r.style.display="block";let n=e.querySelector(".text-capture-instruction");n||(n=document.createElement("div"),n.className="text-capture-instruction",n.textContent="Position product label with Order Code here",e.appendChild(n)),n.style.display="block"}showBarcodeScanOverlay(){const e=document.getElementById("scanner-overlay");if(!e)return;const t=e.querySelector(".scan-area"),o=e.querySelector(".scan-line");t&&(t.style.display="block"),o&&(o.style.display="block");const s=e.querySelector(".text-capture-area"),r=e.querySelector(".text-capture-corners"),n=e.querySelector(".text-capture-instruction");s&&(s.style.display="none"),r&&(r.style.display="none"),n&&(n.style.display="none")}async handleOcrResults(e){const t=document.getElementById("ocr-confirmation-modal");if(t&&t.style.display!=="none"){console.log("OCR modal already open, ignoring new detection");return}if(!this.dataService.isLoaded){this.showScanFeedback("Product data loading, please wait...");return}const o=this.dataService.getAllProducts(),s=OCRProductMatcher.findProductsByOcrTexts(e,o);if(s&&s.requiresSelection&&s.families)this.showProductFamilySelectionModal(s.families,e);else{const r=Array.isArray(s)?s:[];this.showOcrConfirmationModal(r,e)}}showOcrConfirmationModal(e,t){const o=document.getElementById("ocr-confirmation-modal"),s=document.getElementById("ocr-candidates-list"),r=document.getElementById("ocr-no-matches"),n=document.getElementById("ocr-confirm-btn"),c=document.getElementById("ocr-cancel-btn");if(!o||!s||!n||!c){console.error("OCR confirmation modal elements not found");return}s.innerHTML="";const i=new Set;e.length===0?(r.style.display="block",s.style.display="none",n.style.display="none"):(r.style.display="none",s.style.display="block",e.forEach((l,d)=>{const u=l.product,h=u.OrderCode||"N/A",m=u.Description||u["Product Description"]||u["Product Name"]||"No description",p=u.Image_URL||u["Image URL"]||"assets/no-image.png",f=document.createElement("div");f.style.cssText="display: flex; align-items: center; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px; cursor: pointer;",f.innerHTML=`
          <input type="checkbox" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;" 
                 data-product-index="${d}">
          <img src="${p}" alt="${m}" 
               style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
               onerror="this.src='assets/no-image.png'">
          <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 4px;">${h}</div>
            <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${m.substring(0,60)}${m.length>60?"...":""}</div>
            <div style="font-size: 0.85em; color: #888;">
              <span style="background: ${l.confidence==="high"?"#d1fae5":"#fef3c7"}; 
                           padding: 2px 6px; border-radius: 4px;">
                ${l.confidence==="high"?"High":"Medium"} confidence
              </span>
            </div>
          </div>
        `;const g=f.querySelector('input[type="checkbox"]');g.onclick=w=>{w.stopPropagation(),g.checked?i.delete(u):i.add(u),n.disabled=i.size===0},g.onchange=w=>{w.stopPropagation(),g.checked?i.add(u):i.delete(u),n.disabled=i.size===0},f.onclick=w=>{w.target!==g&&w.target!==g.parentElement&&(g.checked=!g.checked,g.checked?i.add(u):i.delete(u),n.disabled=i.size===0)},s.appendChild(f)}),n.style.display="block",n.disabled=!0),n.textContent="Add Selected",n.onclick=()=>{if(i.size===0)return;const l=Array.from(i);if(o.style.display="none",l.length===1){const d=l[0];this.showProductDetailsScreen(d,{scannedCode:d.OrderCode,fromOcr:!0})}else l.forEach(d=>{this.dataService.addProduct(d,"",this.selectedRoom||"Blank",1)}),this.showScanFeedback(`Added ${l.length} product(s) to selection`),this.updateSelectionCount(),this.showReviewScreen()},c.onclick=async()=>{o.style.display="none",await this.restartTextCamera()},c.disabled=!1,o.style.display="flex"}showProductFamilySelectionModal(e,t){const o=document.getElementById("ocr-confirmation-modal"),s=document.getElementById("ocr-candidates-list"),r=document.getElementById("ocr-no-matches"),n=document.getElementById("ocr-confirm-btn"),c=document.getElementById("ocr-cancel-btn");if(!o||!s||!n||!c){console.error("OCR confirmation modal elements not found");return}if(!e||e.length===0){console.error("❌ No families provided to selection modal!"),r.style.display="block",s.style.display="none",n.style.display="none",c.onclick=async()=>{o.style.display="none";try{await this.scannerController.startScanning("text"),this.showScanFeedback("Ready to capture")}catch(u){console.error("Failed to restart camera:",u),this.showScanFeedback("Camera error - please try again")}},c.disabled=!1,o.style.display="flex";return}const i=o.querySelector("h3"),l=o.querySelector("p");i&&(i.textContent="Multiple Products Detected"),l&&(l.textContent="Select which product you're looking for:"),s.innerHTML="",r.style.display="none",s.style.display="block",n.style.display="block";let d=null;e.forEach((u,h)=>{var y,S;const m=document.createElement("div");m.style.cssText="display: flex; align-items: center; padding: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 12px; cursor: pointer; transition: all 0.2s;";const p=u.matches.length,f=u.matches[0],g=((y=f==null?void 0:f.product)==null?void 0:y.Image_URL)||((S=f==null?void 0:f.product)==null?void 0:S["Image URL"])||"assets/no-image.png";m.innerHTML=`
        <input type="radio" name="product-family" value="${h}" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;">
        <img src="${g}" alt="${u.familyName}" 
             style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
             onerror="this.src='assets/no-image.png'">
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px; font-size: 1.1em;">${u.familyName}</div>
          <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${p} variant${p!==1?"s":""} found</div>
          <div style="font-size: 0.85em; color: #888;">
            <span style="background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">
              ${Math.round(u.totalScore*100)}% match
            </span>
          </div>
        </div>
      `;const w=m.querySelector('input[type="radio"]');w.onclick=b=>{b.stopPropagation(),d=u,n.disabled=!1,document.querySelectorAll('input[name="product-family"]').forEach(v=>{v.closest("div").style.borderColor="#ddd",v.closest("div").style.backgroundColor=""}),m.style.borderColor="#1e40af",m.style.backgroundColor="#eff6ff"},m.onclick=b=>{b.target!==w&&(w.checked=!0,w.onclick(b))},s.appendChild(m)}),n.onclick=()=>{d&&(o.style.display="none",this.showOcrConfirmationModal(d.matches,t))},c.onclick=async()=>{o.style.display="none",await this.restartTextCamera()},n.disabled=!0,n.textContent="Select Product Family",o.style.display="flex"}}class FileImportManager{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.dataService=dataService}async init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=d=>{d.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const u=d.dataTransfer.files;u.length>0&&this.handleFileSelection(u[0])},o.onchange=d=>{d.target.files.length>0&&this.handleFileSelection(d.target.files[0])});const s=document.getElementById("import-cancel-btn"),r=document.getElementById("import-next-btn"),n=document.getElementById("import-back-btn"),c=document.getElementById("import-process-btn"),i=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),r&&(r.onclick=()=>this.showImportModeStep()),n&&(n.onclick=()=>this.showFileSelectionStep()),c&&(c.onclick=()=>this.processImport()),i&&(i.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(d=>{d.onchange=()=>{this.importMode=d.value;const u=document.getElementById("override-warning");u&&(u.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const s=document.querySelector('input[name="import-mode"][value="append"]');s&&(s.checked=!0);const r=document.getElementById("override-warning");r&&(r.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],o=e.name.toLowerCase().endsWith(".csv")||e.name.toLowerCase().endsWith(".xlsx");if(!t.includes(e.type)&&!o){alert("Please select a CSV or Excel (.xlsx) file.");return}this.selectedFile=e;const s=document.getElementById("selected-file-info"),r=document.getElementById("selected-file-name"),n=document.getElementById("import-next-btn");s&&r&&n&&(r.textContent=e.name,s.style.display="block",n.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{let e;this.selectedFile.name.toLowerCase().endsWith(".csv")?e=await this.parseCSV(this.selectedFile):e=await this.parseExcel(this.selectedFile),console.log("Parsed data:",e),this.importMode==="override"&&(StorageManager.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error("Import failed:",e),alert("Import failed: "+e.message),this.showFileSelectionStep()}}async parseCSV(e){return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!0,complete:s=>{console.log("CSV parsing complete:",s),t(s.data)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}async parseExcel(e){return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=r=>{try{const n=new Uint8Array(r.target.result),c=XLSX.read(n,{type:"array"}),i=c.SheetNames[0],l=c.Sheets[i],d=XLSX.utils.sheet_to_json(l,{header:1,defval:""});if(d.length===0){o(new Error("Excel file is empty"));return}const u=d[0],m=d.slice(1).map(p=>{const f={};return u.forEach((g,w)=>{f[g]=p[w]||""}),f});console.log("Excel parsing complete:",m),t(m)}catch(n){console.error("Excel parsing error:",n),o(n)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", or "SKU".');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const r=e.slice(s,s+o);await this.processChunk(r,t),await new Promise(n=>setTimeout(n,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}detectColumns(e){const t=Object.keys(e);return console.log("Available headers:",t),{productCode:this.findColumnByPatterns(t,["ordercode","productcode","sku","order code","product code"]),productName:this.findColumnByPatterns(t,["product name","description","name"]),quantity:this.findColumnByPatterns(t,["min order quantity","quantity","qty","orderquantity"]),price:t.find(o=>o.toLowerCase()==="price per unit")}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(r=>r.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",r=t.quantity?e[t.quantity]:"1",n=t.price?e[t.price]:"";if(!o||String(o).trim().toLowerCase()==="n/a"){console.log("Excluding row with N/A or missing product code");return}const c=String(o).trim();if(!/^\d{6}$/.test(c)){console.log("Excluding row - product code is not 6 digits:",c);return}const i=parseInt(r)||1;let l=0;if(n){const h=String(n).replace(/[^\d.-]/g,"");l=parseFloat(h)||0,l>0&&(l=l*1.1)}console.log("Processing valid 6-digit product code:",{productCode:c,productName:s,quantity:i,price:l});const d=await this.findProductInCatalog(c,s),u={OrderCode:c,orderCode:c,productName:s||(d?d.productName:"Unknown Product"),"Product Name":s||(d?d["Product Name"]:"Unknown Product"),Description:s||(d?d.Description:"Unknown Product"),description:s||(d?d.description:"Unknown Product"),price:l>0?l.toFixed(2):d?d.price:"0.00",Image_URL:d?d.Image_URL||d.imageUrl:"assets/no-image.png",imageUrl:d?d.Image_URL||d.imageUrl:"assets/no-image.png",Website_URL:d?d.Website_URL||d.websiteUrl:"",websiteUrl:d?d.Website_URL||d.websiteUrl:"",Diagram_URL:d?d.Diagram_URL||d.diagramUrl:"",diagramUrl:d?d.Diagram_URL||d.diagramUrl:"",Datasheet_URL:d?d.Datasheet_URL||d.datasheetUrl:"",datasheetUrl:d?d.Datasheet_URL||d.datasheetUrl:"",RRP_EXGST:l>0?(l/1.1).toFixed(2):d?d.RRP_EXGST||d.rrpExGst:"0.00",rrpExGst:l>0?(l/1.1).toFixed(2):d?d.RRP_EXGST||d.rrpExGst:"0.00",RRP_INCGST:l>0?l.toFixed(2):d?d.RRP_INCGST||d.rrpIncGst:"0.00",rrpIncGst:l>0?l.toFixed(2):d?d.RRP_INCGST||d.rrpIncGst:"0.00"};d?console.log("Found product in catalog, using imported data with catalog fallbacks:",c):(console.log("Product not found in catalog, creating with imported data:",c),this.notFoundProducts.push({orderCode:c,productName:s||"Unknown Product",quantity:i,price:l>0?l.toFixed(2):"N/A"})),StorageManager.addProductToSelection(u,{room:"Blank",quantity:i}),this.processedData.push({...u,quantity:i,notes:"",room:"Blank"})}async findProductInCatalog(e,t){const o=this.dataService.getAllProducts();if(e){const s=String(e).trim(),r=o.find(n=>[n.OrderCode,n.orderCode,n["Order Code"],n.order_code].some(i=>i&&String(i).trim().toLowerCase()===s.toLowerCase()));if(r)return console.log("Found product in catalog by code:",s,r),r}if(t){const s=String(t).trim().toLowerCase(),r=o.find(n=>[n.productName,n["Product Name"],n.description,n.Description,n.LongDescription].some(i=>i&&String(i).trim().toLowerCase()===s));if(r)return console.log("Found product in catalog by name:",t,r),r}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const r=t.querySelector("h5");r&&(r.textContent="Products added with placeholder information:",r.style.color="#2563eb");const n=i=>Utils.escapeHtml(String(i||"")),c=this.notFoundProducts.map(i=>`<li><strong>${n(i.orderCode)}</strong> - ${n(i.productName)} (Qty: ${n(i.quantity)}, Price: ${n(i.price)})</li>`).join("");o.innerHTML=`<ul>${c}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{this.closeModal(),window.navigationManager&&window.navigationManager.showReviewScreen&&window.navigationManager.showReviewScreen()}),console.log("Import results displayed")}}function configureSelectionRecorder(a){return a?(selectionRecorder.configure(a),CONFIG.SELECTION_RECORDING.GOOGLE_SHEETS_URL=a,console.log("✅ Selection recorder configured successfully"),console.log("📊 URL:",a),!0):(console.error("❌ Google Sheets URL is required"),!1)}async function testSelectionRecorder(){console.log("🧪 Testing selection recorder connection...");try{const a=await selectionRecorder.testConnection();return a.success?(console.log("✅ Selection recorder test successful!"),console.log("📊 Your Google Sheets integration is working correctly"),!0):(console.error("❌ Selection recorder test failed:",a.error),!1)}catch(a){return console.error("❌ Selection recorder test error:",a),!1}}function getSelectionRecorderStatus(){const a={enabled:selectionRecorder.isEnabled,configured:!!selectionRecorder.googleSheetsUrl,url:selectionRecorder.googleSheetsUrl?"Set":"Not set",retryAttempts:selectionRecorder.retryAttempts,retryDelay:selectionRecorder.retryDelay};return console.log("📊 Selection Recorder Status:",a),a}function toggleSelectionRecording(a=!0){return selectionRecorder.setEnabled(a),console.log(`📊 Selection recording ${a?"enabled":"disabled"}`),a}function setupSelectionRecorder(){console.log(`
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
`),getSelectionRecorderStatus(),console.log(`
Need help? Check SELECTION-RECORDING-SETUP.md for detailed instructions.
  `)}typeof window<"u"&&(window.configureSelectionRecorder=configureSelectionRecorder,window.testSelectionRecorder=testSelectionRecorder,window.getSelectionRecorderStatus=getSelectionRecorderStatus,window.toggleSelectionRecording=toggleSelectionRecording,window.setupSelectionRecorder=setupSelectionRecorder);class BuilderMerchantService{constructor(){this.googleSheetsUrl=CONFIG.SELECTION_RECORDING.GOOGLE_SHEETS_URL,this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:5*60*1e3}}isCacheValid(){return this.cache.lastFetch?Date.now()-this.cache.lastFetch<this.cache.cacheTimeout:!1}async getBuilders(e=!0){if(e&&this.isCacheValid()&&this.cache.builders.length>0)return console.log("🏗️ Using cached builders list"),this.cache.builders;try{const t=`${this.googleSheetsUrl}?action=getBuilders`,s=await(await fetch(t)).json();if(s.success)return this.cache.builders=s.builders||[],this.cache.builders.sort((r,n)=>r.toLowerCase().localeCompare(n.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏗️ Fetched ${this.cache.builders.length} builders from server`),this.cache.builders;throw new Error(s.error||"Failed to fetch builders")}catch(t){return console.error("❌ Error fetching builders:",t),this.cache.builders.length>0?(console.log("🏗️ Using stale cached builders due to error"),this.cache.builders):[]}}async getMerchants(e=!0){if(e&&this.isCacheValid()&&this.cache.merchants.length>0)return console.log("🏪 Using cached merchants list"),this.cache.merchants;try{const t=`${this.googleSheetsUrl}?action=getMerchants`,s=await(await fetch(t)).json();if(s.success)return this.cache.merchants=s.merchants||[],this.cache.merchants.sort((r,n)=>r.toLowerCase().localeCompare(n.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏪 Fetched ${this.cache.merchants.length} merchants from server`),this.cache.merchants;throw new Error(s.error||"Failed to fetch merchants")}catch(t){return console.error("❌ Error fetching merchants:",t),this.cache.merchants.length>0?(console.log("🏪 Using stale cached merchants due to error"),this.cache.merchants):[]}}async searchBuilders(e){if(!e||e.trim()==="")return await this.getBuilders();try{const t=`${this.googleSheetsUrl}?action=searchBuilders&query=${encodeURIComponent(e)}`,s=await(await fetch(t)).json();if(s.success){const r=s.builders||[];return r.sort((n,c)=>n.toLowerCase().localeCompare(c.toLowerCase())),console.log(`🔍 Found ${r.length} builders matching "${e}"`),r}else throw new Error(s.error||"Failed to search builders")}catch(t){console.error("❌ Error searching builders:",t);const o=await this.getBuilders(),s=e.toLowerCase();return o.filter(n=>n.toLowerCase().includes(s)).sort((n,c)=>n.toLowerCase().localeCompare(c.toLowerCase()))}}async searchMerchants(e){if(!e||e.trim()==="")return await this.getMerchants();try{const t=`${this.googleSheetsUrl}?action=searchMerchants&query=${encodeURIComponent(e)}`,s=await(await fetch(t)).json();if(s.success){const r=s.merchants||[];return r.sort((n,c)=>n.toLowerCase().localeCompare(c.toLowerCase())),console.log(`🔍 Found ${r.length} merchants matching "${e}"`),r}else throw new Error(s.error||"Failed to search merchants")}catch(t){console.error("❌ Error searching merchants:",t);const o=await this.getMerchants(),s=e.toLowerCase();return o.filter(n=>n.toLowerCase().includes(s)).sort((n,c)=>n.toLowerCase().localeCompare(c.toLowerCase()))}}async addBuilder(e){if(!e||e.trim()==="")return{success:!1,error:"Builder name is required"};try{const t=`${this.googleSheetsUrl}?action=addBuilder&name=${encodeURIComponent(e.trim())}`,s=await(await fetch(t)).json();return s.success?(this.cache.lastFetch=null,console.log(`✅ Builder "${s.name}" added successfully`),s):(console.log(`⚠️ Builder add failed: ${s.error}`),s.existing&&console.log(`💡 Suggested existing: "${s.existing}"`),s)}catch(t){return console.error("❌ Error adding builder:",t),{success:!1,error:t.message}}}async addMerchant(e){if(!e||e.trim()==="")return{success:!1,error:"Merchant name is required"};try{const t=`${this.googleSheetsUrl}?action=addMerchant&name=${encodeURIComponent(e.trim())}`,s=await(await fetch(t)).json();return s.success?(this.cache.lastFetch=null,console.log(`✅ Merchant "${s.name}" added successfully`),s):(console.log(`⚠️ Merchant add failed: ${s.error}`),s.existing&&console.log(`💡 Suggested existing: "${s.existing}"`),s)}catch(t){return console.error("❌ Error adding merchant:",t),{success:!1,error:t.message}}}clearCache(){this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:5*60*1e3},console.log("🧹 Builder/Merchant cache cleared")}getCacheStatus(){return{builders:this.cache.builders.length,merchants:this.cache.merchants.length,lastFetch:this.cache.lastFetch?new Date(this.cache.lastFetch).toLocaleString():"Never",isValid:this.isCacheValid()}}}const builderMerchantService=new BuilderMerchantService;window.testBuilderMerchantService=async()=>{console.log("🧪 Testing Builder/Merchant Service...");try{const a=await builderMerchantService.getBuilders();console.log("✅ Builders:",a);const e=await builderMerchantService.getMerchants();return console.log("✅ Merchants:",e),console.log("✅ Builder/Merchant Service test completed"),!0}catch(a){return console.error("❌ Builder/Merchant Service test failed:",a),!1}};window.clearBuilderMerchantCache=()=>(builderMerchantService.clearCache(),"Cache cleared successfully");window.getBuilderMerchantStatus=()=>{const a=builderMerchantService.getCacheStatus();return console.log("📊 Builder/Merchant Service Status:",a),a};class LeadTracker{constructor(){this.leadData={customerName:"",customerEmail:"",customerPhone:"",projectName:"",projectAddress:"",projectNotes:"",excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:"",builderName:"",merchantName:"",hearAboutUs:[],hearAboutUsOther:"",referralBuilder:"",referralMerchant:""},this.builderList=[],this.merchantList=[],this.currentStep=1,this.totalSteps=3}getLeadData(){return{...this.leadData}}updateLeadData(e){this.leadData={...this.leadData,...e}}clearLeadData(){this.leadData={customerName:"",customerEmail:"",customerPhone:"",projectName:"",projectAddress:"",projectNotes:"",excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:"",builderName:"",merchantName:"",hearAboutUs:[],hearAboutUsOther:"",referralBuilder:"",referralMerchant:""},this.currentStep=1}validateStep(e){switch(e){case 1:return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName;case 2:return this.leadData.customerType!==null;case 3:return this.leadData.hearAboutUs.length>0;default:return!1}}validateForm(){const e=authService.isStaffMode();return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName?e?this.leadData.customerType!==null&&this.leadData.hearAboutUs.length>0:!0:!1}getFormattedLeadData(){const e=this.leadData;let t=e.customerType;e.customerType==="Other"&&e.customerTypeOther&&(t=e.customerTypeOther);let o=[...e.hearAboutUs];if(e.hearAboutUs.includes("Other")&&e.hearAboutUsOther){const s=o.indexOf("Other");o[s]=`Other (${e.hearAboutUsOther})`}return{customerType:t,hearAboutUs:o.join(", "),customerTypeRaw:e.customerType,hearAboutUsArray:e.hearAboutUs,builderName:e.builderName,merchantName:e.merchantName,referralBuilder:e.referralBuilder,referralMerchant:e.referralMerchant,projectNotes:e.projectNotes||""}}getBuilderList(){return[...this.builderList]}getMerchantList(){return[...this.merchantList]}async getBuilderList(){return await builderMerchantService.getBuilders()}async getMerchantList(){return await builderMerchantService.getMerchants()}async searchBuilders(e){return await builderMerchantService.searchBuilders(e)}async searchMerchants(e){return await builderMerchantService.searchMerchants(e)}async addCustomBuilder(e){return await builderMerchantService.addBuilder(e)}async addCustomMerchant(e){return await builderMerchantService.addMerchant(e)}loadCustomLists(){try{const e=localStorage.getItem("customBuilders");e&&(this.builderList=JSON.parse(e));const t=localStorage.getItem("customMerchants");t&&(this.merchantList=JSON.parse(t))}catch(e){console.error("Error loading custom lists:",e)}}clearCustomLists(){this.builderList=[],this.merchantList=[],localStorage.removeItem("customBuilders"),localStorage.removeItem("customMerchants"),console.log("🧹 Cleared all custom builder and merchant lists")}}const leadTracker=new LeadTracker;leadTracker.loadCustomLists();window.clearBuilderMerchantLists=()=>(leadTracker.clearCustomLists(),"Builder and merchant lists cleared. Refresh the page to see empty lists.");class SelectionLoader{constructor(){var e;this.googleSheetsUrl=((e=CONFIG.SELECTION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL)||null,this.cachedSelections=null,this.cachedDeletedSelections=null,this.cacheTimestamp=null,this.deletedCacheTimestamp=null,this.cacheDuration=5*60*1e3}isStaffMode(){return authService.isStaffMode()}async fetchSelections(e=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(e){if(this.cachedDeletedSelections&&this.deletedCacheTimestamp&&Date.now()-this.deletedCacheTimestamp<this.cacheDuration)return console.log("📊 Using cached deleted selections"),this.cachedDeletedSelections}else if(this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const t=authService.getCurrentUser(),o=(t==null?void 0:t.email)||"";console.log(`📊 Fetching ${e?"deleted ":""}selections for ${o||"all staff"}...`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getSelections"),s.searchParams.append("monthsBack","0"),e&&s.searchParams.append("deletedOnly","true"),o&&s.searchParams.append("staffEmail",o);const r=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.json();if(n.success&&n.selections)return console.log(`✅ Fetched ${n.selections.length} ${e?"deleted ":""}selections`),e?(this.cachedDeletedSelections=n.selections,this.deletedCacheTimestamp=Date.now()):(this.cachedSelections=n.selections,this.cacheTimestamp=Date.now()),n.selections;throw new Error(n.error||"Failed to fetch selections")}catch(t){return console.error("❌ Error fetching selections:",t),[]}}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const r=(s.customerName||"").toLowerCase(),n=(s.customerProject||"").toLowerCase(),c=(s.date||"").toLowerCase();return r.includes(o)||n.includes(o)||c.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.date,t.time);return this.parseDateValue(o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t){if(!e)return new Date(0);const o=String(e);let s=null;const r=o.split("/");if(r.length===3&&r[0].length<=2)s=new Date(parseInt(r[2]),parseInt(r[1])-1,parseInt(r[0]));else if(s=new Date(o),isNaN(s.getTime())||s.getFullYear()<=1900)return new Date(0);if(t){const n=this.extractTimeString(t);if(n){const c=n.split(":");c.length>=2&&(s.setHours(parseInt(c[0])||0),s.setMinutes(parseInt(c[1])||0))}}return s}extractTimeString(e){if(!e)return"";const t=String(e),o=t.match(/^(\d{1,2}:\d{2})(:\d{2})?$/);if(o)return o[1];const s=t.match(/(\d{1,2}:\d{2}):\d{2}/);if(s)return s[1];const r=t.match(/(\d{1,2}:\d{2})/);return r?r[1]:""}async loadSelection(e){try{console.log("📦 Loading selection:",e);let t=[];if(e.productsJson)try{t=JSON.parse(e.productsJson)}catch(c){return console.error("❌ Failed to parse products JSON:",c),{success:!1,error:"Failed to parse saved products"}}if(t.length===0)return{success:!1,error:"No products found in this selection"};const o=[],s=dataService.getAllProducts(),r=[];for(const c of t){let i=s.find(u=>u.OrderCode===c.orderCode||u.orderCode===c.orderCode),l;i?l=i:(console.warn(`⚠️ Product ${c.orderCode} not found in catalog, using saved data`),r.push(c.orderCode),l={OrderCode:c.orderCode,Description:c.description||"Product no longer in catalogue",RRP_INCGST:c.priceIncGst||"0.00",Image_URL:"assets/no-image.png",_notInCatalog:!0});const d={id:this.generateId(),product:l,notes:c.notes||"",room:c.room||"Blank",quantity:c.quantity||1,timestamp:Date.now()};o.push(d)}StorageManager.setSelectedProducts(o),console.log(`✅ Loaded ${o.length} products`),this.loadCustomerDetails(e);const n={success:!0,productsLoaded:o.length,notFoundProducts:r};return r.length>0&&(n.warning=`${r.length} product(s) are no longer in the catalogue`),n}catch(t){return console.error("❌ Error loading selection:",t),{success:!1,error:t.message}}}loadCustomerDetails(e){const t={customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.cleanPhoneNumber(e.customerPhone),projectName:e.customerProject||"",projectAddress:e.customerAddress||"",projectNotes:e.projectNotes||"",customerType:e.customerType||null,builderName:e.builderName||"",merchantName:e.merchantName||"",hearAboutUs:e.hearAboutUs?e.hearAboutUs.split(", ").filter(o=>o):[],referralBuilder:e.referralBuilder||"",referralMerchant:e.referralMerchant||""};leadTracker.updateLeadData(t);try{localStorage.setItem("loadedSelectionCustomerData",JSON.stringify(t)),console.log("✅ Customer details saved to localStorage")}catch(o){console.warn("⚠️ Could not save customer data to localStorage:",o)}console.log("✅ Customer details loaded into lead tracker:",t)}generateId(){return"sel_"+Date.now().toString(36)+"_"+Math.random().toString(36).substr(2,9)}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),t}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,this.cachedDeletedSelections=null,this.deletedCacheTimestamp=null}async deleteSelections(e){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),{success:!1,error:"Google Sheets URL not configured"};if(!e||e.length===0)return{success:!1,error:"No selections provided"};try{console.log(`🗑️ Deleting ${e.length} selection(s)...`);const t=e.map(n=>({date:n.date||"",time:n.time||"",customerName:n.customerName||"",customerEmail:n.customerEmail||""})),o=new URL(this.googleSheetsUrl),s=await fetch(o.toString(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({data:JSON.stringify({action:"deleteSelections",selections:t})})});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const r=await s.json();if(r.success)return console.log(`✅ Deleted ${r.deletedCount||e.length} selection(s)`),this.clearCache(),{success:!0,deletedCount:r.deletedCount||e.length};throw new Error(r.error||"Failed to delete selections")}catch(t){return console.error("❌ Error deleting selections:",t),{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),{success:!1,error:"Google Sheets URL not configured"};if(!e||e.length===0)return{success:!1,error:"No selections provided"};try{console.log(`♻️ Restoring ${e.length} selection(s)...`);const t=e.map(n=>({date:n.date||"",time:n.time||"",customerName:n.customerName||"",customerEmail:n.customerEmail||""})),o=new URL(this.googleSheetsUrl),s=await fetch(o.toString(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({data:JSON.stringify({action:"restoreSelections",selections:t})})});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const r=await s.json();if(r.success)return console.log(`✅ Restored ${r.restoredCount||e.length} selection(s)`),this.clearCache(),{success:!0,restoredCount:r.restoredCount||e.length};throw new Error(r.error||"Failed to restore selections")}catch(t){return console.error("❌ Error restoring selections:",t),{success:!1,error:t.message}}}formatDisplayDateShort(e){const t=this.formatDisplayDate(e);if(!t)return"";const o=t.split("/");return o.length===3&&o[2].length===4?`${o[0]}/${o[1]}/${o[2].substring(2)}`:t}formatDisplayTime(e){const t=this.extractTimeString(e);if(!t)return"";const o=t.split(":");if(o.length>=2){const s=o[0].padStart(2,"0"),r=o[1].padStart(2,"0");return`${s}:${r}`}return t}formatDisplayDate(e){if(!e)return"";const t=String(e);try{const o=t.split("/");if(o.length===3&&o[0].length<=2){const c=o[0].padStart(2,"0"),i=o[1].padStart(2,"0"),l=o[2];return`${c}/${i}/${l}`}const s=new Date(t);if(!isNaN(s.getTime())){const c=s.getFullYear();if(c>1900&&c<2100){const i=String(s.getDate()).padStart(2,"0"),l=String(s.getMonth()+1).padStart(2,"0");return`${i}/${l}/${c}`}}const r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=t.match(/(\w{3})\s+(\d{1,2})\s+(\d{4})/);if(n){const c=r.indexOf(n[1]);if(c!==-1){const i=n[2].padStart(2,"0"),l=String(c+1).padStart(2,"0"),d=n[3];return`${i}/${l}/${d}`}}}catch(o){console.warn("Date parsing error:",o)}return t}}const selectionLoader=new SelectionLoader;typeof window<"u"&&(window.selectionLoader=selectionLoader);class SelectionPicker{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}isStaffMode(){return authService.isStaffMode()}async show(e){this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,this.setLoadingState(!0),await this.fetchAndRenderSelections()}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await selectionLoader.fetchSelections(this.showDeletedMode),this.allSelections=selectionLoader.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("selection-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("selection-picker-modal");e&&e.remove();const t=this.isStaffMode(),o=t?'<th class="col-checkbox"><input type="checkbox" id="selection-select-all" title="Select all"></th>':"",s=t?`<label class="show-deleted-toggle">
           <input type="checkbox" id="selection-show-deleted" ${this.showDeletedMode?"checked":""}>
           <span>Show deleted</span>
         </label>`:"",r=`
      <div id="selection-picker-modal" class="modal selection-picker-fullpage" style="display: flex; z-index: 1000;">
        <div class="modal-content selection-picker-content${this.showDeletedMode?" showing-deleted":""}">
          <div class="selection-picker-header">
            <h3>${this.showDeletedMode?"Deleted Selections (Bin)":"Load Previous Selection"}</h3>
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
            ${s}
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
              <table class="selection-picker-table${t?" staff-mode":""}">
                <thead>
                  <tr>
                    ${o}
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
            ${t&&!this.showDeletedMode?'<button type="button" id="selection-delete-btn" class="danger-btn-text" style="display: none;">Delete (0)</button>':""}
            ${t&&!this.showDeletedMode?'<button type="button" id="selection-load-btn" class="primary-btn" style="display: none;">Load Selection</button>':""}
            ${t&&this.showDeletedMode?'<button type="button" id="selection-restore-btn" class="restore-btn" style="display: none;">Restore Selected (0)</button>':""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r)}attachEventListeners(){const e=document.getElementById("selection-picker-modal"),t=document.getElementById("selection-picker-close"),o=document.getElementById("selection-picker-cancel"),s=document.getElementById("selection-search-input"),r=document.getElementById("selection-retry-btn"),n=document.getElementById("selection-select-all"),c=document.getElementById("selection-delete-btn"),i=document.getElementById("selection-restore-btn"),l=document.getElementById("selection-show-deleted");t&&(t.onclick=()=>this.hide()),o&&(o.onclick=()=>this.hide()),e&&(e.onclick=u=>{u.target===e&&this.hide()}),s&&(s.oninput=u=>{this.currentSearchQuery=u.target.value,this.selectedItems.clear(),this.filterAndRender()}),r&&(r.onclick=()=>{selectionLoader.clearCache(),this.show(this.onLoadCallback)}),n&&(n.onchange=u=>{this.toggleSelectAll(u.target.checked)}),c&&(c.onclick=()=>{this.confirmDeleteSelected()});const d=document.getElementById("selection-load-btn");d&&(d.onclick=()=>{this.loadSelectedItem()}),i&&(i.onclick=()=>{this.confirmRestoreSelected()}),l&&(l.onchange=async u=>{this.showDeletedMode=u.target.checked;const h=this.currentSearchQuery;selectionLoader.clearCache(),this.createModalHTML(),this.attachEventListeners();const m=document.getElementById("selection-search-input");m&&(m.value=h),this.currentSearchQuery=h,await this.fetchAndRenderSelections()})}setLoadingState(e){const t=document.getElementById("selection-picker-loading"),o=document.getElementById("selection-picker-table-container"),s=document.getElementById("selection-picker-error"),r=document.getElementById("selection-picker-empty");t&&(t.style.display=e?"flex":"none"),o&&(o.style.display=e?"none":"block"),s&&(s.style.display="none"),r&&(r.style.display="none")}showError(e){const t=document.getElementById("selection-picker-loading"),o=document.getElementById("selection-picker-table-container"),s=document.getElementById("selection-picker-error"),r=document.getElementById("selection-error-message"),n=document.getElementById("selection-picker-empty");t&&(t.style.display="none"),o&&(o.style.display="none"),s&&(s.style.display="flex"),r&&(r.textContent=e),n&&(n.style.display="none")}filterAndRender(){let e=[...this.allSelections];const t=authService.getCurrentUser();if(t&&t.email){const o=t.email.toLowerCase();e=e.filter(s=>{const r=(s.loggedInAs||"").toLowerCase(),n=(s.staffEmail||"").toLowerCase();return r===o||n===o})}this.currentSearchQuery&&(e=selectionLoader.searchSelections(e,this.currentSearchQuery)),this.filteredSelections=e,this.renderSelectionTable()}renderSelectionTable(){const e=document.getElementById("selection-picker-tbody"),t=document.getElementById("selection-picker-table-container"),o=document.getElementById("selection-picker-empty"),s=document.getElementById("selection-count-info"),r=this.isStaffMode();if(!e)return;if(s){const i=this.filteredSelections.length;this.currentSearchQuery?s.textContent=`Showing ${i} selection${i!==1?"s":""}`:s.textContent=`${i} selection${i!==1?"s":""} found`}if(this.filteredSelections.length===0){t&&(t.style.display="none"),o&&(o.style.display="block",this.currentSearchQuery?o.querySelector("p").textContent=`No selections found matching "${this.currentSearchQuery}"`:o.querySelector("p").textContent="No selections found."),this.updateActionButton();return}t&&(t.style.display="block"),o&&(o.style.display="none");const n=this.selectedItems.size;e.innerHTML=this.filteredSelections.map((i,l)=>{const d=selectionLoader.formatDisplayDateShort(i.date),u=selectionLoader.formatDisplayTime(i.time),h=this.escapeHtml(i.customerName||"Unknown"),m=this.escapeHtml(i.customerProject||""),p=this.selectedItems.has(l),f=this.showDeletedMode,g=r?`<td class="col-checkbox"><input type="checkbox" class="selection-checkbox" data-index="${l}" ${p?"checked":""}></td>`:"";let w="selection-row";return p&&(this.showDeletedMode?w+=" selected-for-restore":n===1?w+=" selected-for-load":w+=" selected-for-deletion"),f&&(w+=" deleted-item"),`
        <tr class="${w}" data-index="${l}">
          ${g}
          <td class="col-datetime">${d} ${u}</td>
          <td class="col-customer-project">
            <div class="customer-name">${h}</div>
            ${m?`<div class="project-name">${m}</div>`:""}
          </td>
        </tr>
      `}).join(""),e.querySelectorAll(".selection-row").forEach(i=>{i.onclick=l=>{if(l.target.type==="checkbox"||this.showDeletedMode)return;const d=parseInt(i.getAttribute("data-index"),10);!isNaN(d)&&this.filteredSelections[d]&&this.confirmAndLoadSelection(this.filteredSelections[d])}}),r&&e.querySelectorAll(".selection-checkbox").forEach(l=>{l.onchange=d=>{const u=parseInt(l.getAttribute("data-index"),10);this.toggleSelection(u,d.target.checked)}}),this.updateActionButton(),this.updateSelectAllCheckbox()}loadSelectedItem(){if(this.selectedItems.size!==1)return;const e=[...this.selectedItems][0],t=this.filteredSelections[e];t&&this.confirmAndLoadSelection(t)}confirmAndLoadSelection(e){const t=StorageManager.getSelectedProducts(),o=t.length>0,s=e.customerName||"Unknown",r=e.totalProducts||0,n=selectionLoader.formatDisplayDateShort(e.date);this.showConfirmationModal(s,n,r,o,t.length,e)}showConfirmationModal(e,t,o,s,r,n){const c=s?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">WARNING: This will replace your current selection of ${r} product(s).</span>
         </div>`:"",i=`
      <div id="selection-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Confirm Load Selection</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Load selection for <strong>"${this.escapeHtml(e)}"</strong> from ${t}?
          </p>
          <p style="margin-bottom: 0; color: #666;">
            This selection contains ${o} product${o!==1?"s":""}.
          </p>
          ${c}
          <div class="modal-actions" style="margin-top: 24px;">
            <button type="button" id="confirm-cancel-btn" class="secondary-btn">Cancel</button>
            <button type="button" id="confirm-load-btn" class="primary-btn">Load Selection</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const l=document.getElementById("selection-confirm-modal"),d=document.getElementById("confirm-cancel-btn"),u=document.getElementById("confirm-load-btn");d.onclick=()=>{l.remove()},u.onclick=async()=>{u.disabled=!0,u.textContent="Loading...";try{const h=await selectionLoader.loadSelection(n);l.remove(),this.hide(),h.success?this.showResultModal(!0,h.productsLoaded,h.warning):this.showResultModal(!1,0,h.error)}catch(h){console.error("Error loading selection:",h),l.remove(),this.showResultModal(!1,0,h.message)}},l.onclick=h=>{h.target===l&&l.remove()}}showResultModal(e,t,o){const s=e?"✅":"❌",r=e?"Selection Loaded":"Load Failed",n=e?`Successfully loaded ${t} product${t!==1?"s":""}.`:"Failed to load selection.",c=o&&e?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">${this.escapeHtml(o)}</span>
         </div>`:"",i=o&&!e?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(o)}</p>`:"",l=`
      <div id="selection-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${s}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${r}</h3>
          <p style="margin-bottom: 0; color: #555;">${n}</p>
          ${c}
          ${i}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",l);const d=document.getElementById("selection-result-modal"),u=document.getElementById("result-ok-btn");u.onclick=()=>{d.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t})},d.onclick=h=>{h.target===d&&(d.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t}))}}toggleSelection(e,t){const o=this.selectedItems.size;t?this.selectedItems.add(e):this.selectedItems.delete(e);const s=this.selectedItems.size;o===1&&s!==1||o!==1&&s===1?this.updateSelectedRowStyles():this.updateRowStyle(e,t),this.updateActionButton(),this.updateSelectAllCheckbox()}updateRowStyle(e,t){const o=document.querySelector(`.selection-row[data-index="${e}"]`);if(o&&(o.classList.remove("selected-for-load","selected-for-deletion","selected-for-restore"),t)){const s=this.selectedItems.size;this.showDeletedMode?o.classList.add("selected-for-restore"):s===1?o.classList.add("selected-for-load"):o.classList.add("selected-for-deletion")}}updateSelectedRowStyles(){const e=this.selectedItems.size;document.querySelectorAll(".selection-row").forEach(t=>{const o=parseInt(t.getAttribute("data-index"),10),s=this.selectedItems.has(o);t.classList.remove("selected-for-load","selected-for-deletion","selected-for-restore"),s&&(this.showDeletedMode?t.classList.add("selected-for-restore"):e===1?t.classList.add("selected-for-load"):t.classList.add("selected-for-deletion"))})}toggleSelectAll(e){this.selectedItems.clear(),e&&this.filteredSelections.forEach((t,o)=>{this.selectedItems.add(o)}),this.renderSelectionTable()}updateActionButton(){const e=document.getElementById("selection-delete-btn"),t=document.getElementById("selection-load-btn"),o=document.getElementById("selection-restore-btn"),s=this.selectedItems.size;e&&(s>0?(e.style.display="inline-flex",e.textContent=`Delete (${s})`):e.style.display="none"),t&&(s>0?(t.style.display="inline-flex",s===1?(t.disabled=!1,t.textContent="Load Selection"):(t.disabled=!0,t.textContent="Load Selection")):t.style.display="none"),o&&(s>0?(o.style.display="inline-flex",o.textContent=`Restore (${s})`):o.style.display="none")}updateSelectAllCheckbox(){const e=document.getElementById("selection-select-all");if(!e)return;const t=this.filteredSelections.length,o=this.selectedItems.size;t===0||o===0?(e.checked=!1,e.indeterminate=!1):o===t?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=!0)}confirmDeleteSelected(){const e=this.selectedItems.size;if(e===0)return;const t=[];this.selectedItems.forEach(l=>{this.filteredSelections[l]&&t.push(this.filteredSelections[l])});const o=t.map(l=>l.customerName||"Unknown").slice(0,3).join(", "),s=t.length>3?` and ${t.length-3} more...`:"",r=`
      <div id="selection-delete-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Move to Bin</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Are you sure you want to delete <strong>${e}</strong> selection${e!==1?"s":""}?
          </p>
          <p style="margin-bottom: 0; color: #666; font-size: 14px;">
            ${this.escapeHtml(o)}${s}
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
    `;document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("selection-delete-confirm-modal"),c=document.getElementById("delete-cancel-btn"),i=document.getElementById("delete-confirm-btn");c.onclick=()=>{n.remove()},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const l=await selectionLoader.deleteSelections(t);if(n.remove(),l.success){this.selectedItems.clear(),selectionLoader.clearCache();const d=new Set(t);this.allSelections=this.allSelections.filter(u=>!d.has(u)),this.filteredSelections=this.filteredSelections.filter(u=>!d.has(u)),this.renderSelectionTable(),this.showActionResultModal("delete",!0,l.deletedCount)}else this.showActionResultModal("delete",!1,0,l.error)}catch(l){console.error("Error deleting selections:",l),n.remove(),this.showActionResultModal("delete",!1,0,l.message)}},n.onclick=l=>{l.target===n&&n.remove()}}confirmRestoreSelected(){const e=this.selectedItems.size;if(e===0)return;const t=[];this.selectedItems.forEach(l=>{this.filteredSelections[l]&&t.push(this.filteredSelections[l])});const o=t.map(l=>l.customerName||"Unknown").slice(0,3).join(", "),s=t.length>3?` and ${t.length-3} more...`:"",r=`
      <div id="selection-restore-confirm-modal" class="modal" style="display: flex; z-index: 1100;">
        <div class="modal-content" style="max-width: 450px;">
          <h3 style="margin: 0 0 20px 0; color: #333;">Restore Selections</h3>
          <p style="margin-bottom: 8px; color: #555;">
            Restore <strong>${e}</strong> selection${e!==1?"s":""} from the bin?
          </p>
          <p style="margin-bottom: 0; color: #666; font-size: 14px;">
            ${this.escapeHtml(o)}${s}
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
    `;document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("selection-restore-confirm-modal"),c=document.getElementById("restore-cancel-btn"),i=document.getElementById("restore-confirm-btn");c.onclick=()=>{n.remove()},i.onclick=async()=>{i.disabled=!0,i.textContent="Restoring...";try{const l=await selectionLoader.restoreSelections(t);if(n.remove(),l.success){this.selectedItems.clear(),selectionLoader.clearCache();const d=new Set(t);this.allSelections=this.allSelections.filter(u=>!d.has(u)),this.filteredSelections=this.filteredSelections.filter(u=>!d.has(u)),this.renderSelectionTable(),this.showActionResultModal("restore",!0,l.restoredCount)}else this.showActionResultModal("restore",!1,0,l.error)}catch(l){console.error("Error restoring selections:",l),n.remove(),this.showActionResultModal("restore",!1,0,l.message)}},n.onclick=l=>{l.target===n&&n.remove()}}showActionResultModal(e,t,o,s){const r=e==="delete",n=t?"✅":"❌",c=t?r?"Moved to Bin":"Restored Successfully":r?"Deletion Failed":"Restore Failed",i=t?r?`Successfully moved ${o} selection${o!==1?"s":""} to the bin.`:`Successfully restored ${o} selection${o!==1?"s":""}.`:r?"Failed to delete selections.":"Failed to restore selections.",l=s?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(s)}</p>`:"",d=`
      <div id="selection-action-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${n}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${c}</h3>
          <p style="margin-bottom: 0; color: #555;">${i}</p>
          ${l}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="action-result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",d);const u=document.getElementById("selection-action-result-modal"),h=document.getElementById("action-result-ok-btn");h.onclick=()=>{u.remove()},u.onclick=m=>{m.target===u&&u.remove()}}escapeHtml(e){if(typeof e!="string")return"";const t=document.createElement("div");return t.textContent=e,t.innerHTML}}const selectionPicker=new SelectionPicker;typeof window<"u"&&(window.selectionPicker=selectionPicker);class LeadWizard{constructor(){this.isVisible=!1,this.onCompleteCallback=null,this.onCancelCallback=null,this.isStaffMode=!1}checkStaffMode(){return this.isStaffMode=authService.isStaffMode(),console.log(`📱 Staff mode: ${this.isStaffMode}`),this.isStaffMode}show(e,t){window.leadWizardInstance=this,this.onCompleteCallback=e,this.onCancelCallback=t,this.checkStaffMode(),this.createFormHTML(),this.attachFormListeners(),this.loadFormData(),this.loadBuilderMerchantOptions(),this.isVisible=!0}hide(){const e=document.getElementById("lead-wizard-modal");e&&e.remove(),this.isVisible=!1}createFormHTML(){const e=document.getElementById("lead-wizard-modal");e&&e.remove();const o=`
      <div id="lead-wizard-modal" class="modal" style="display: block; z-index: 1000;">
        <div class="modal-content lead-wizard-content lead-form-single ${this.isStaffMode?"staff-mode":""}">
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
    `;document.body.insertAdjacentHTML("beforeend",o)}getFormHTML(){return`
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
    `}attachFormListeners(){console.log("📧 Attaching form listeners...");const e=document.getElementById("wizard-send-btn"),t=document.getElementById("wizard-cancel-btn"),o=document.getElementById("lead-wizard-modal");console.log("📧 Send button found:",!!e),console.log("📧 Cancel button found:",!!t),console.log("📧 Modal found:",!!o),e?(e.onclick=s=>(s.preventDefault(),s.stopPropagation(),console.log("📧 Send button clicked"),this.submitForm(),!1),console.log("✅ Send button handler attached")):console.error("❌ Send button not found"),t&&(t.onclick=s=>(s.preventDefault(),s.stopPropagation(),console.log("📧 Cancel button clicked"),this.cancel(),!1),console.log("✅ Cancel button handler attached")),o&&o.addEventListener("click",s=>{s.target===o&&this.cancel()}),this.attachCustomerDetailsListeners(),this.isStaffMode&&(this.attachCustomerTypeListeners(),this.attachHearAboutListeners()),this.attachOptionsListeners(),this.updateSendButtonState(),console.log("✅ All form listeners attached")}attachCustomerDetailsListeners(){[{id:"customer-name",key:"customerName"},{id:"customer-email",key:"customerEmail"},{id:"customer-phone",key:"customerPhone"},{id:"project-name",key:"projectName"},{id:"project-address",key:"projectAddress"},{id:"project-notes",key:"projectNotes"}].forEach(({id:t,key:o})=>{const s=document.getElementById(t);s&&s.addEventListener("input",r=>{leadTracker.updateLeadData({[o]:r.target.value}),this.updateSendButtonState()})})}attachCustomerTypeListeners(){const e=document.querySelectorAll('input[name="customer-type"]'),t=document.getElementById("builder-dropdown"),o=document.getElementById("merchant-dropdown"),s=document.getElementById("other-type-input");e.forEach(h=>{h.addEventListener("change",m=>{const p=m.target.value;t.style.display="none",o.style.display="none",s.style.display="none",p==="Builder"?t.style.display="block":p==="Merchant"?o.style.display="block":p==="Client of Builder/Merchant"?(t.style.display="block",o.style.display="block"):p==="Other"&&(s.style.display="block"),leadTracker.updateLeadData({customerType:p}),this.updateSendButtonState()})});const r=document.getElementById("builder-name-select");r&&r.addEventListener("change",h=>{const m=h.target.value,p=document.getElementById("builder-other-input");m==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({builderName:m}))});const n=document.getElementById("merchant-name-select");n&&n.addEventListener("change",h=>{const m=h.target.value,p=document.getElementById("merchant-other-input");m==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({merchantName:m}))});const c=document.getElementById("builder-other-name");c&&c.addEventListener("input",h=>{leadTracker.updateLeadData({builderName:h.target.value})});const i=document.getElementById("merchant-other-name");i&&i.addEventListener("input",h=>{leadTracker.updateLeadData({merchantName:h.target.value})});const l=document.getElementById("customer-type-other");l&&l.addEventListener("input",h=>{leadTracker.updateLeadData({customerTypeOther:h.target.value})});const d=document.getElementById("add-builder-btn");d&&d.addEventListener("click",()=>this.showAddBuilderModal());const u=document.getElementById("add-merchant-btn");u&&u.addEventListener("click",()=>this.showAddMerchantModal())}attachHearAboutListeners(){const e=document.querySelectorAll(".hear-about-checkbox"),t=document.getElementById("builder-referral-dropdown"),o=document.getElementById("merchant-referral-dropdown"),s=document.getElementById("hear-about-other-input");e.forEach(h=>{h.addEventListener("change",()=>{const m=Array.from(e).filter(p=>p.checked).map(p=>p.value);t&&(t.style.display=m.includes("Builder Referral")?"block":"none"),o&&(o.style.display=m.includes("Merchant Referral")?"block":"none"),s&&(s.style.display=m.includes("Other")?"block":"none"),leadTracker.updateLeadData({hearAboutUs:m}),this.updateSendButtonState()})});const r=document.getElementById("referral-builder-select");r&&r.addEventListener("change",h=>{const m=h.target.value,p=document.getElementById("referral-builder-other-input");m==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({referralBuilder:m}))});const n=document.getElementById("referral-merchant-select");n&&n.addEventListener("change",h=>{const m=h.target.value,p=document.getElementById("referral-merchant-other-input");m==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({referralMerchant:m}))});const c=document.getElementById("referral-builder-other-name");c&&c.addEventListener("input",h=>{leadTracker.updateLeadData({referralBuilder:h.target.value})});const i=document.getElementById("referral-merchant-other-name");i&&i.addEventListener("input",h=>{leadTracker.updateLeadData({referralMerchant:h.target.value})});const l=document.getElementById("hear-about-other");l&&l.addEventListener("input",h=>{leadTracker.updateLeadData({hearAboutUsOther:h.target.value})});const d=document.getElementById("add-referral-builder-btn");d&&d.addEventListener("click",()=>this.showAddBuilderModal("referral"));const u=document.getElementById("add-referral-merchant-btn");u&&u.addEventListener("click",()=>this.showAddMerchantModal("referral"))}attachOptionsListeners(){const e=document.getElementById("exclude-price-checkbox"),t=document.getElementById("export-csv-checkbox");e&&e.addEventListener("change",o=>{const s=!!o.target.checked;leadTracker.updateLeadData({excludePrice:s}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({excludePrice:s})}),t&&t.addEventListener("change",o=>{const s=!!o.target.checked;leadTracker.updateLeadData({exportCsv:s}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({exportCsv:s})})}loadFormData(){let e=leadTracker.getLeadData();try{const d=localStorage.getItem("loadedSelectionCustomerData");if(d){const u=JSON.parse(d);u&&typeof u=="object"&&(leadTracker.updateLeadData(u),e={...e,...u},console.log("📦 Loaded saved customer data from previous selection"))}}catch(d){console.warn("⚠️ Could not load saved customer data:",d)}const t=document.getElementById("customer-name"),o=document.getElementById("customer-email"),s=document.getElementById("customer-phone"),r=document.getElementById("project-name"),n=document.getElementById("project-address"),c=document.getElementById("project-notes"),i=document.getElementById("exclude-price-checkbox"),l=document.getElementById("export-csv-checkbox");if(t&&e.customerName&&(t.value=e.customerName),o&&e.customerEmail&&(o.value=e.customerEmail),s&&e.customerPhone&&(s.value=e.customerPhone),r&&e.projectName&&(r.value=e.projectName),n&&e.projectAddress&&(n.value=e.projectAddress),c&&e.projectNotes&&(c.value=e.projectNotes),i&&e.excludePrice!==void 0&&(i.checked=e.excludePrice),l&&e.exportCsv!==void 0&&(l.checked=e.exportCsv),this.isStaffMode){if(e.customerType){const d=document.querySelector(`input[name="customer-type"][value="${e.customerType}"]`);d&&(d.checked=!0,d.dispatchEvent(new Event("change")))}if(e.builderName){const d=document.getElementById("builder-name-select");d&&setTimeout(()=>{d.querySelector(`option[value="${e.builderName}"]`)&&(d.value=e.builderName)},500)}if(e.merchantName){const d=document.getElementById("merchant-name-select");d&&setTimeout(()=>{d.querySelector(`option[value="${e.merchantName}"]`)&&(d.value=e.merchantName)},500)}if(e.hearAboutUs&&e.hearAboutUs.length>0){e.hearAboutUs.forEach(u=>{const h=document.querySelector(`.hear-about-checkbox[value="${u}"]`);h&&(h.checked=!0)});const d=document.querySelector(".hear-about-checkbox:checked");d&&d.dispatchEvent(new Event("change"))}if(e.referralBuilder){const d=document.getElementById("referral-builder-select");d&&setTimeout(()=>{d.querySelector(`option[value="${e.referralBuilder}"]`)&&(d.value=e.referralBuilder)},500)}if(e.referralMerchant){const d=document.getElementById("referral-merchant-select");d&&setTimeout(()=>{d.querySelector(`option[value="${e.referralMerchant}"]`)&&(d.value=e.referralMerchant)},500)}}this.updateSendButtonState()}updateSendButtonState(){const e=document.getElementById("wizard-send-btn");if(!e)return;const t=this.validateForm();e.classList.toggle("btn-invalid",!t),console.log(`📧 Send button valid: ${t}`)}validateForm(){const e=leadTracker.getLeadData();return!(!e.customerName||!e.customerEmail||!e.projectName||this.isStaffMode&&(!e.customerType||!e.hearAboutUs||e.hearAboutUs.length===0))}submitForm(){if(console.log("📧 submitForm called"),!this.validateForm()){console.log("❌ Form validation failed"),this.showValidationError();return}console.log("✅ Form validation passed");const e=document.getElementById("exclude-price-checkbox"),t=document.getElementById("export-csv-checkbox");e&&leadTracker.updateLeadData({excludePrice:!!e.checked}),t&&leadTracker.updateLeadData({exportCsv:!!t.checked});const o=leadTracker.getLeadData();console.log("📧 Lead data to submit:",o),this.onCompleteCallback?(console.log("📧 Calling completion callback"),this.onCompleteCallback(o)):console.error("❌ No completion callback set"),this.hide()}showValidationError(){const e=document.getElementById("form-error");if(!e)return;const t=leadTracker.getLeadData();let o="";!t.customerName||!t.customerEmail||!t.projectName?o="Please fill in all required fields (Name, Email, Project)":this.isStaffMode&&!t.customerType?o="Please select a customer type":this.isStaffMode&&(!t.hearAboutUs||t.hearAboutUs.length===0)&&(o="Please select how they heard about us"),e.textContent=o,e.style.display="block",setTimeout(()=>{e.style.display="none"},3e3)}cancel(){this.onCancelCallback&&this.onCancelCallback(),this.hide()}async loadBuilderMerchantOptions(){if(this.isStaffMode)try{const[e,t]=await Promise.all([leadTracker.getBuilderList(),leadTracker.getMerchantList()]);this.updateBuilderDropdowns(e),this.updateMerchantDropdowns(t),console.log(`📋 Loaded ${e.length} builders and ${t.length} merchants`)}catch(e){console.error("❌ Error loading builder/merchant options:",e)}}updateBuilderDropdowns(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");["builder-name-select","referral-builder-select"].forEach(s=>{const r=document.getElementById(s);if(r){const n=r.value;r.innerHTML='<option value="">Select builder...</option>'+t+'<option value="Other">Other (specify below)</option>',n&&n!=="Loading..."&&(r.value=n)}})}updateMerchantDropdowns(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");["merchant-name-select","referral-merchant-select"].forEach(s=>{const r=document.getElementById(s);if(r){const n=r.value;r.innerHTML='<option value="">Select merchant...</option>'+t+'<option value="Other">Other (specify below)</option>',n&&n!=="Loading..."&&(r.value=n)}})}async refreshBuilderDropdowns(){try{const e=await leadTracker.getBuilderList();this.updateBuilderDropdowns(e)}catch(e){console.error("❌ Error refreshing builder dropdowns:",e)}}async refreshMerchantDropdowns(){try{const e=await leadTracker.getMerchantList();this.updateMerchantDropdowns(e)}catch(e){console.error("❌ Error refreshing merchant dropdowns:",e)}}showAddBuilderModal(e="customer"){this.createAddModal("Builder",async t=>{const o=await leadTracker.addCustomBuilder(t);if(o.success){await this.refreshBuilderDropdowns();const s=e==="referral"?"referral-builder-select":"builder-name-select",r=document.getElementById(s);r&&(r.value=o.name||t,r.dispatchEvent(new Event("change")))}else if(o.error==="Builder already exists")return this.showDuplicateModal("Builder",o.existing,()=>{const s=e==="referral"?"referral-builder-select":"builder-name-select",r=document.getElementById(s);r&&(r.value=o.existing,r.dispatchEvent(new Event("change")))}),!1})}showAddMerchantModal(e="customer"){this.createAddModal("Merchant",async t=>{const o=await leadTracker.addCustomMerchant(t);if(o.success){await this.refreshMerchantDropdowns();const s=e==="referral"?"referral-merchant-select":"merchant-name-select",r=document.getElementById(s);r&&(r.value=o.name||t,r.dispatchEvent(new Event("change")))}else if(o.error==="Merchant already exists")return this.showDuplicateModal("Merchant",o.existing,()=>{const s=e==="referral"?"referral-merchant-select":"merchant-name-select",r=document.getElementById(s);r&&(r.value=o.existing,r.dispatchEvent(new Event("change")))}),!1})}createAddModal(e,t){const o=`
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
    `;document.body.insertAdjacentHTML("beforeend",o);const s=document.getElementById(`add-${e.toLowerCase()}-modal`),r=document.getElementById(`new-${e.toLowerCase()}-name`),n=document.getElementById(`cancel-add-${e.toLowerCase()}`),c=document.getElementById(`save-add-${e.toLowerCase()}`);setTimeout(()=>r.focus(),100);const i=async()=>{const l=r.value.trim();if(l){c.disabled=!0,c.textContent="Adding...";try{await t(l)!==!1?s.remove():(c.disabled=!1,c.textContent=`Add ${e}`)}catch(d){console.error(`❌ Error adding ${e.toLowerCase()}:`,d),c.disabled=!1,c.textContent=`Add ${e}`}}else r.focus()};return c.addEventListener("click",i),n.addEventListener("click",()=>s.remove()),r.addEventListener("keypress",l=>{l.key==="Enter"&&(l.preventDefault(),i())}),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s}showDuplicateModal(e,t,o){const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const r=document.getElementById(`duplicate-${e.toLowerCase()}-modal`),n=document.getElementById("duplicate-try-again"),c=document.getElementById("duplicate-use-existing");n.onclick=()=>r.remove(),c.onclick=()=>{r.remove();const i=document.querySelector(`[id*="add-${e.toLowerCase()}-modal"]`);i&&i.remove(),o&&o()},r.addEventListener("click",i=>{i.target===r&&r.remove()}),setTimeout(()=>c.focus(),100)}}const leadWizard=new LeadWizard;class LeadWizardIntegration{constructor(){this.originalEmailHandler=null,this.isIntegrated=!1,this.cachedOptions={excludePrice:!1,exportCsv:!0}}init(){this.isIntegrated||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.setupIntegration()):this.setupIntegration(),this.isIntegrated=!0)}setupIntegration(){console.log("🔍 Setting up lead wizard integration..."),document.addEventListener("click",e=>{if(document.getElementById("lead-wizard-modal"))return;if(e.target.closest("#quick-pdf-btn"))return console.log("🧙‍♂️ Lead wizard intercepted email button click via event delegation!"),e.preventDefault(),e.stopPropagation(),this.showLeadWizardFlow(),!1},!0),console.log("✅ Lead wizard integrated with event delegation"),setTimeout(()=>this.setupDirectIntegration(),1e3)}setupDirectIntegration(){const e=document.getElementById("quick-pdf-btn");e?(console.log("📧 Email button found - ensuring direct integration"),e.onclick=t=>{if(document.getElementById("lead-wizard-modal")){console.log("📧 Wizard already open, ignoring click");return}return console.log("🧙‍♂️ Lead wizard direct handler triggered!"),t.preventDefault(),t.stopPropagation(),this.showLeadWizardFlow(),!1},console.log("✅ Direct integration set up successfully")):console.log("📧 Email button not found - event delegation will handle it")}showLeadWizardFlow(){console.log("🧙‍♂️ Starting lead wizard flow..."),console.log("📧 Integration status:",{isIntegrated:this.isIntegrated,timestamp:new Date().toISOString()}),this.startImagePreloading(),console.log("📝 Showing lead form..."),leadWizard.show(e=>this.onLeadWizardComplete(e),()=>this.onLeadWizardCancel())}startImagePreloading(){const e=StorageManager.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{const s=o.product||{};return enrichProductUrlsForPdfExport({...s,Image_URL:s.Image_URL||s.imageUrl||s["Image URL"]||"",Diagram_URL:s.Diagram_URL||s.diagramUrl||s["Diagram URL"]||""})});console.log(`📷 Starting background preload for ${t.length} products...`),pdfService._preloadAllImages(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}hasCompleteLeadData(e){const t=authService.isStaffMode(),o=e.customerName&&e.customerEmail&&e.projectName;return t?o&&e.customerType&&e.hearAboutUs&&e.hearAboutUs.length>0:o}onLeadWizardComplete(e){console.log("📊 Lead data collected:",e),window.currentLeadData=e;const t=!!e.excludePrice,o=!!e.exportCsv,s={name:e.customerName,email:e.customerEmail,phone:e.customerPhone,project:e.projectName,address:e.projectAddress,excludePrice:t,exportCsv:o,sendEmail:!0,leadData:e};console.log("📧 Proceeding directly to PDF generation and email with:",s),this.generateAndSendPDFDirectly(s)}onLeadWizardCancel(){console.log("📊 Lead wizard cancelled")}proceedToEmailForm(){console.log("📧 proceedToEmailForm called - this should not happen anymore"),console.log("📧 Wizard should go directly to PDF generation instead"),console.warn("⚠️ proceedToEmailForm was called - this indicates a code path that needs updating")}showEmailModalDirectly(){console.log("📧 showEmailModalDirectly called - this should not happen anymore"),console.warn("⚠️ Email modal should not be shown - wizard goes directly to PDF generation")}populateEmailFormWithLeadData(){const e=leadTracker.getLeadData();if(console.log("📧 Populating email form with lead data:",e),e.customerName){const t=document.getElementById("user-name");t&&(t.value=e.customerName)}if(e.customerEmail){const t=document.getElementById("user-email");t&&(t.value=e.customerEmail)}if(e.customerPhone){const t=document.getElementById("user-telephone");t&&(t.value=e.customerPhone)}if(e.projectName){const t=document.getElementById("user-project");t&&(t.value=e.projectName)}if(e.projectAddress){const t=document.getElementById("user-address");t&&(t.value=e.projectAddress)}if(e.excludePrice!==void 0){const t=document.getElementById("exclude-price-checkbox");t&&(t.checked=e.excludePrice)}if(e.exportCsv!==void 0){const t=document.getElementById("export-csv-checkbox");t&&(t.checked=e.exportCsv)}console.log("✅ Email form populated with lead data")}setupEmailFormIntegration(){const e=document.getElementById("pdf-email-form");if(!e||e.hasLeadIntegration)return;e.hasLeadIntegration=!0,e.onsubmit,e.onsubmit=o=>{o.preventDefault();const s=new FormData(e),r={name:s.get("user-name"),project:s.get("user-project"),address:s.get("user-address"),email:s.get("user-email"),phone:s.get("user-telephone"),excludePrice:s.has("exclude-price"),exportCsv:s.has("export-csv"),sendEmail:!0};window.currentLeadData&&(r.leadData=window.currentLeadData);const n=document.getElementById("pdf-email-modal");n&&(n.style.display="none"),this.generatePDFWithLeadData(r)};const t=document.getElementById("pdf-email-cancel");t&&(t.onclick=()=>{const o=document.getElementById("pdf-email-modal");o&&(o.style.display="none")})}async generateAndSendPDFDirectly(e){try{if(console.log("📄 Starting direct PDF generation and email..."),this.showSpinner(),window.appService){const t=await window.appService.generateAndSendPDF(e);t.success&&t.method==="email"?(console.log("✅ PDF generated and email sent successfully"),this.saveCustomerDataToStorage(),window.app&&window.app.showEmailSentModal?window.app.showEmailSentModal():this.showEmailSentFallbackModal()):(console.warn("⚠️ Email not sent; fallback or alternate method used:",t),this.hideSpinner())}else throw new Error("App service not available")}catch(t){console.error("❌ Error in direct PDF generation:",t),this.hideSpinner(),alert("There was an error generating and sending your PDF. Please try again.")}}showSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="flex")}hideSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="none")}async generatePDFWithLeadData(e){if(window.appService)try{this.showSpinner();const t=await window.appService.generateAndSendPDF(e);t.success&&t.method==="email"?(this.saveCustomerDataToStorage(),window.app&&window.app.showEmailSentModal?window.app.showEmailSentModal():this.showEmailSentFallbackModal()):this.hideSpinner()}catch(t){this.hideSpinner(),console.error("Error generating PDF:",t),alert("PDF generation failed. Please try again.")}else console.error("Error: App service not available for PDF generation"),alert("PDF generation service is not available. Please refresh the page and try again.")}saveCustomerDataToStorage(){const e=leadTracker.getLeadData();e&&(e.customerName||e.customerEmail||e.projectName)&&(localStorage.setItem("loadedSelectionCustomerData",JSON.stringify(e)),console.log("💾 Customer data saved to localStorage for persistence"))}getCurrentLeadData(){return window.currentLeadData||null}clearCurrentLeadData(){window.currentLeadData=null,this.cachedOptions={excludePrice:!1,exportCsv:!0},leadTracker.clearLeadData(),localStorage.removeItem("loadedSelectionCustomerData"),console.log("🧹 Customer data cleared from memory and storage")}showEmailSentFallbackModal(){this.hideSpinner();const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e),e.onclick=t=>{t.target===e&&(e.remove(),location.reload())}}setOptions(e={}){this.cachedOptions={...this.cachedOptions,...e}}showLeadWizard(){leadWizard.show(e=>{console.log("📊 Manual lead data entry:",e),window.currentLeadData=e},()=>{console.log("📊 Manual lead entry cancelled")})}setupOnReviewScreen(){console.log("📧 Setting up integration for review screen..."),this.tryDirectIntegration()}}const leadWizardIntegration=new LeadWizardIntegration;leadWizardIntegration.init();typeof window<"u"&&(window.leadWizardIntegration=leadWizardIntegration);class SeimaScanner{constructor(){this.appService=new AppService,this.navigationManager=null,this.fileImportManager=new FileImportManager}async init(){var e;try{console.log("🚀 Initializing Seima Scanner with refactored services..."),authService.configure({googleSheetsUrl:(e=CONFIG.SELECTION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:CONFIG.EMAIL}),authUI.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Scanner"}),console.log("Browser Compatibility Report:",browserCompatibility.getCompatibilityReport()),browserCompatibility.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning();const t=await this.appService.init();console.log("App service initialization result:",t),this.navigationManager=new NavigationManager,await this.navigationManager.init(),await this.fileImportManager.init(),this.setupGlobalEventListeners(),this.setupGlobalAPI(),console.log("✅ Seima Scanner initialized successfully"),this.setupLoadSelectionButton();const o=this.appService.getMigrationReadinessStatus();console.log("🔄 Microsoft Graph Migration Status:",o)}catch(t){console.error("❌ Failed to initialize Seima Scanner:",t),await this.initializeLegacyFallback()}}async initializeLegacyFallback(){console.error("❌ Service initialization failed - no fallback available"),alert("Failed to initialize the application. Please refresh the page and try again.")}setupGlobalAPI(){var e;window.seimaApp=this,window.seimaDebug=this.appService.getDebugAPI(),window.scannerController=(e=this.navigationManager)==null?void 0:e.scannerController,window.navigationManager=this.navigationManager,window.browserCompatibility=browserCompatibility,window.appService=this.appService,window.dataService=this.appService.dataService,window.emailService=this.appService.emailService,window.pdfService=this.appService.pdfService,window.downloadWithFallback=(t,o)=>{this.appService.downloadWithFallback(t,o)}}setupLoadSelectionButton(){const e=document.getElementById("load-selection-btn");if(!e)return;const t=()=>{const o=authService.isStaffMode();e.style.display=o?"inline-flex":"none",console.log(`📦 Load Selection button: ${o?"visible":"hidden"}`)};t(),e.onclick=()=>{console.log("📦 Load Previous Selection clicked"),selectionPicker.show(o=>{console.log("✅ Selection loaded:",o),location.reload()})},window.addEventListener("staffModeChanged",()=>{t()}),window.addEventListener("focus",t)}showCompatibilityWarning(){const e=browserCompatibility.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=document.createElement("div");o.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `;const s=t.filter(n=>n.type==="critical"),r=e.score<CONFIG.COMPATIBILITY.MIN_COMPATIBILITY_SCORE;s.length===0&&!r||(o.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${s.length>0?s[0].message:"Some features may not work optimally"}
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
    `,document.body.insertBefore(o,document.body.firstChild))}setupGlobalEventListeners(){window.addEventListener("generatePdf",async e=>{const t=e.detail;try{this.showSpinner();const o=await this.appService.generateAndSendPDF(t);if(o.success&&o.method==="email")this.showEmailSentModal();else if(o.success&&o.method==="download")this.hideSpinner(),this.showSuccess("Files downloaded successfully!");else if(o.success)this.hideSpinner();else throw new Error(o.error||"Operation failed")}catch(o){console.error("PDF generation failed:",o),this.hideSpinner(),this.showError("Failed to generate PDF. Please try again.")}}),window.addEventListener("sendEmail",async e=>{const{userDetails:t,pdfBlob:o,csvBlob:s}=e.detail;try{await this.handleEmailRequest(t,o,s)}catch(r){console.error("Email sending failed:",r)}}),window.addEventListener("beforeunload",()=>{var e;(e=this.navigationManager)!=null&&e.scannerController&&this.navigationManager.scannerController.stopScanning()}),document.addEventListener("visibilitychange",()=>{var e;(e=this.navigationManager)!=null&&e.scannerController&&(document.hidden?this.navigationManager.scannerController.stopScanning():this.navigationManager.currentScreen==="scanner"&&this.navigationManager.scannerController.startScanning())}),browserCompatibility.features.memoryAPI&&setInterval(()=>{const e=browserCompatibility.memoryInfo;e&&e.usedJSHeapSize>100*1024*1024&&console.warn("High memory usage detected:",e)},3e4)}async handleEmailRequest(e,t,o=null){try{const s=await this.appService.emailService.sendEmail({email:e.email,name:e.name,phone:e.mobile||"",project:e.project||"",address:e.address||"",message:e.message||"Please find attached product selection."},t,o);if(s.success)this.showEmailSentModal();else throw new Error(s.error||"Email sending failed")}catch(s){console.error("Email request failed:",s),this.showError("Failed to send email. Please try again.")}}showSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="flex")}hideSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="none")}showSuccess(e){this.showNotification(e,"success")}showError(e){this.showNotification(e,"error")}showNotification(e,t="info"){const o=document.createElement("div");o.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10000;
      padding: 16px 20px; border-radius: 8px; max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-size: 14px; font-weight: 500;
      background: ${t==="success"?"#10b981":t==="error"?"#ef4444":"#3b82f6"};
      color: white; animation: slideIn 0.3s ease-out;
    `,o.textContent=e,document.body.appendChild(o);const s=document.createElement("style");s.textContent=`
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,document.head.appendChild(s),setTimeout(()=>{o.parentElement&&o.remove()},5e3)}showEmailSentModal(){this.hideSpinner();const e=document.createElement("div");e.id="email-sent-modal",e.style.cssText=`
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
    `;const t=document.createElement("style");t.textContent=`
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `,document.head.appendChild(t),document.body.appendChild(e);const o=document.getElementById("email-sent-ok-btn");o&&(o.onclick=()=>{e.remove(),location.reload()}),e.onclick=s=>{s.target===e&&(e.remove(),location.reload())}}getSelectedProducts(){return this.appService.dataService.getSelectedProducts()}clearSelection(){return this.appService.dataService.clearSelection()}addProduct(e,t,o,s){return this.appService.dataService.addProduct(e,o,t,s)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}}const seimaScanner=new SeimaScanner;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{seimaScanner.init()}):seimaScanner.init();
