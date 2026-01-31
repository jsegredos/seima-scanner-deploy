import*as zbarWasm from"https://cdn.skypack.dev/@undecaf/zbar-wasm@0.9.15";import{BarcodeDetectorPolyfill}from"https://cdn.skypack.dev/@undecaf/barcode-detector-polyfill@0.9.23";import Sortable from"https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/modular/sortable.esm.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();window.zbarWasm=zbarWasm;window.barcodeDetectorPolyfill={BarcodeDetectorPolyfill};window.polyfillReady=!0;console.log("✅ Polyfill modules loaded and exposed to window");const CONFIG={VERSION:"5.1.5",ROOMS:{PREDEFINED:[{name:"Bath 1",icon:"🛁"},{name:"Bath 2",icon:"🛁"},{name:"Bath 3",icon:"🛁"},{name:"Ensuite",icon:"🚿"},{name:"Powder",icon:"🚽"},{name:"Kitchen",icon:"🍽️"},{name:"Butlers",icon:"👨‍🍳"},{name:"Laundry",icon:"🧺"},{name:"Alfresco",icon:"🍽️"}]},SCANNER:{DEFAULT_ENGINE:"detector",ENGINES:["detector"]},SEARCH:{MAX_RESULTS:8,SEARCH_FIELDS:["Description","ProductName","OrderCode","BARCODE"]},CSV:{URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQw5X0aAe5yYbfqfTlgBIdNqnDIjs-YFhNh1IQ8lIB5RfjBl5VBRwQAMKIwlXz6L6oXI8ittrQD91Ob/pub?gid=114771048&single=true&output=csv"},STORAGE_KEYS:{CUSTOM_ROOMS:"customRooms",SELECTED_PRODUCTS:"selectedProducts",PRODUCT_CATALOG:"productCatalog",USER_PREFERENCES:"userPreferences",ROOM_ASSIGNMENTS:"roomAssignments",STAFF_CONTACT:"staffContactDetails"},UI:{ANNOTATION_MAX_LENGTH:140,QUANTITY_OPTIONS:[1,2,3,4,5,6,7,8,9,10]},CSV_CONFIG:{MAX_FILE_SIZE:10*1024*1024,ACCEPTED_TYPES:[".csv",".xlsx"],REQUIRED_COLUMNS:["OrderCode"],OPTIONAL_COLUMNS:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},CATALOG_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",PERFORMANCE:{MAX_PRODUCTS_PER_SESSION:1e3,IMAGE_CACHE_SIZE:100,SCANNER_TIMEOUT:3e4,BARCODE_SCAN_INTERVAL:100},OCR:{SCAN_INTERVAL:1500,MIN_TEXT_LENGTH:3,MIN_CONFIDENCE:60,CENTER_REGION_RATIO:.6,FUZZY_MATCH_TOLERANCE:1,PROCESSING_TIMEOUT:3e4,PREFER_WEB_WORKER:!0,PREPROCESSING:{CONTRAST:1.5,USE_THRESHOLD:!0}},EMAIL:{PROVIDER:"emailjs",PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",MICROSOFT_CLIENT_ID:null,MICROSOFT_TENANT_ID:null,FROM_EMAIL:"noreply@seima.com.au",FROM_NAME:"Seima Team",RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"},COMPATIBILITY:{MIN_CHROME_VERSION:80,MIN_FIREFOX_VERSION:75,MIN_SAFARI_VERSION:13,REQUIRED_FEATURES:["localStorage","fileReader","blob","createObjectURL"],MIN_COMPATIBILITY_SCORE:70,MEMORY_WARNING_THRESHOLD:.8,SAMSUNG_OPTIMIZATIONS:!0,EXTENDED_TIMEOUTS_FOR_SAMSUNG:!0},SELECTION_RECORDING:{ENABLED:!0,GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbypt3Y7RLAko49s6Nc0mecYYd4FyiQqBcHFJr-1megO3-m1Vo1bCbUOkqAax3g9w508RA/exec",RETRY_ATTEMPTS:3,RETRY_DELAY:1e3}},CONFIG_BASE={EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",FROM_EMAIL:"noreply@seima.com.au",FROM_NAME:"Seima Team",MAX_ATTACHMENT_SIZE:15*1024*1024,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"}};class Utils{static loadScript(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const s=document.createElement("script");s.src=e,s.onload=t,s.onerror=()=>o(new Error(`Failed to load script: ${e}`)),document.head.appendChild(s)})}static loadImage(e){return new Promise((t,o)=>{const s=new Image;s.onload=()=>t(s),s.onerror=()=>o(new Error(`Failed to load image: ${e}`)),s.src=e})}static loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="anonymous",o.onload=function(){const s=document.createElement("canvas"),n=s.getContext("2d");s.width=o.width,s.height=o.height,n.drawImage(o,0,0);try{const r=s.toDataURL("image/png");t(r,o.width,o.height)}catch{t(null,0,0)}},o.onerror=()=>t(null,0,0),o.src=e}static formatPrice(e){if(!e||e==="")return"";const t=parseFloat(e.toString().replace(/[^\d.-]/g,""));return isNaN(t)?"":`$${t.toFixed(2)}`}static formatPriceLocale(e,t=!0){if(!e||e==="")return"";const o=parseFloat(e.toString().replace(/[^\d.-]/g,""));if(isNaN(o))return"";const s=o.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2});return t?`$${s}`:s}static sanitizeInput(e,t=null){if(typeof e!="string")return"";let o=e.trim();return t&&o.length>t&&(o=o.substring(0,t)),o}static escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}static debounce(e,t){let o;return function(...s){clearTimeout(o),o=setTimeout(()=>e.apply(this,s),t)}}static throttle(e,t){let o;return function(...s){o||(e.apply(this,s),o=!0,setTimeout(()=>o=!1,t))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,t=null){try{const o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.warn(`Failed to parse localStorage item: ${e}`,o),t}}static setStorageItem(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(o){return console.warn(`Failed to set localStorage item: ${e}`,o),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(t){return console.warn(`Failed to remove localStorage item: ${e}`,t),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,t=!1){const o=new Date(e);if(isNaN(o.getTime()))return"";const s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=o.getFullYear();if(!t)return`${s}/${n}/${r}`;const c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${s}/${n}/${r} ${c}:${i}`}static generateFilename(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e||"file").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${n}${r}.${c}${i}.${t}`}static sleep(e){return new Promise(t=>setTimeout(t,e))}}class BrowserCompatibilityManager{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){const u=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(u),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(u),isDesktop:!/Mobi|Android|iPad/i.test(u),isIOS:/iPad|iPhone|iPod/.test(u),isAndroid:/Android/i.test(u),isWindows:/Windows/i.test(u),isMacOS:/Macintosh|Mac OS X/i.test(u),isIPhone:/iPhone/i.test(u),isIPad:/iPad/i.test(u),isWebView:this.detectWebView(u),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:u}}detectBrowser(){const u=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(u),version:this.getBrowserVersion(u),engine:this.getBrowserEngine(u),isChrome:/Chrome/i.test(u)&&!/Edge|Edg/i.test(u),isFirefox:/Firefox/i.test(u),isSafari:/Safari/i.test(u)&&!/Chrome|Chromium/i.test(u),isEdge:/Edge|Edg/i.test(u),isOpera:/Opera|OPR/i.test(u),chromeVersion:this.getChromeVersion(u),safariVersion:this.getSafariVersion(u),firefoxVersion:this.getFirefoxVersion(u)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fileAPI:"File"in window,fileReader:"FileReader"in window,fileSystemAccess:"showSaveFilePicker"in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices,webRTC:"RTCPeerConnection"in window,canvas:"HTMLCanvasElement"in window,webGL:this.checkWebGL(),fetch:"fetch"in window,xhr:"XMLHttpRequest"in window,serviceWorker:"serviceWorker"in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:"WebAssembly"in window,createObjectURL:"URL"in window&&"createObjectURL"in URL,revokeObjectURL:"URL"in window&&"revokeObjectURL"in URL,blob:"Blob"in window,touchEvents:"ontouchstart"in window,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,clipboard:"clipboard"in navigator,onlineStatus:"onLine"in navigator,connection:"connection"in navigator||"mozConnection"in navigator||"webkitConnection"in navigator}}checkMemoryLimitations(){var u,e,t;this.memoryInfo={jsHeapSizeLimit:((u=performance.memory)==null?void 0:u.jsHeapSizeLimit)||null,totalJSHeapSize:((e=performance.memory)==null?void 0:e.totalJSHeapSize)||null,usedJSHeapSize:((t=performance.memory)==null?void 0:t.usedJSHeapSize)||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener("online",()=>{this.networkStatus.isOnline=!0,this.onNetworkChange("online")}),window.addEventListener("offline",()=>{this.networkStatus.isOnline=!1,this.onNetworkChange("offline")}),navigator.connection&&navigator.connection.addEventListener("change",()=>{this.updateNetworkStatus(),this.onNetworkChange("connection")})}calculateCompatibilityScore(){let u=100;const e=[];this.features.localStorage||(u-=20,e.push("Local storage not supported")),this.features.fileReader||(u-=15,e.push("File reading not supported")),this.features.blob||(u-=15,e.push("Blob creation not supported")),this.features.createObjectURL||(u-=15,e.push("Object URL creation not supported")),this.features.fetch||(u-=10,e.push("Modern fetch API not available")),this.features.modules||(u-=10,e.push("ES6 modules not supported")),this.features.getUserMedia||(u-=8,e.push("Camera access limited")),this.deviceInfo.isWebView&&(u-=5,e.push("WebView compatibility concerns")),this.memoryInfo.memoryPressure==="high"&&(u-=8,e.push("High memory pressure detected")),this.networkStatus.isOnline||(u-=5,e.push("Currently offline")),this.compatibilityScore=Math.max(0,u),this.compatibilityIssues=e}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),"PerformanceObserver"in window)try{new PerformanceObserver(e=>{for(const t of e.getEntries())t.entryType==="measure"&&this.onPerformanceMeasure(t)}).observe({entryTypes:["measure"]})}catch(u){console.warn("Performance observer not fully supported:",u)}}detectWebView(u){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(u)||/Android/i.test(u)&&/Version\/\d\.\d/i.test(u)&&!/ Chrome\//.test(u)||/FB_IAB|FBAN|FBAV/i.test(u)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?"portrait":"landscape"}getBrowserName(u){return/SamsungBrowser/i.test(u)?"Samsung Internet":/Chrome/i.test(u)&&!/Edge|Edg/i.test(u)?"Chrome":/Firefox/i.test(u)?"Firefox":/Safari/i.test(u)&&!/Chrome|Chromium/i.test(u)?"Safari":/Edge|Edg/i.test(u)?"Edge":/Opera|OPR/i.test(u)?"Opera":"Unknown"}getBrowserVersion(u){const e=u.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return e?e[2]:"Unknown"}getBrowserEngine(u){return/WebKit/i.test(u)?"WebKit":/Gecko/i.test(u)?"Gecko":/Trident/i.test(u)?"Trident":/EdgeHTML/i.test(u)?"EdgeHTML":"Unknown"}getChromeVersion(u){const e=u.match(/Chrome\/([0-9.]+)/i);return e?parseInt(e[1]):null}getSafariVersion(u){const e=u.match(/Version\/([0-9.]+).*Safari/i);return e?parseFloat(e[1]):null}getFirefoxVersion(u){const e=u.match(/Firefox\/([0-9.]+)/i);return e?parseInt(e[1]):null}checkLocalStorage(){try{const u="compatibilityTest";return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch{return!1}}checkSessionStorage(){try{const u="compatibilityTest";return sessionStorage.setItem(u,u),sessionStorage.removeItem(u),!0}catch{return!1}}checkDownloadAttribute(){return"download"in document.createElement("a")}checkWebGL(){try{const u=document.createElement("canvas");return!!(u.getContext("webgl")||u.getContext("experimental-webgl"))}catch{return!1}}checkESModules(){try{return typeof Symbol<"u"&&typeof Promise<"u"&&typeof Map<"u"}catch{return!1}}checkAsyncAwait(){try{return eval("(async function() {})").constructor===(async function(){}).constructor}catch(u){return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return"unknown";const u=performance.memory.usedJSHeapSize,e=performance.memory.jsHeapSizeLimit,t=u/e;return t>.8?"high":t>.6?"medium":"low"}estimateMaxBlobSize(){var u,e,t;return(u=this.deviceInfo.browser)!=null&&u.isChrome?500*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?200*1024*1024:(t=this.deviceInfo.browser)!=null&&t.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){var u,e,t;return(u=this.deviceInfo.browser)!=null&&u.isChrome?2*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?1*1024*1024:((t=this.deviceInfo.browser)!=null&&t.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:"unknown"}getEffectiveConnectionType(){var u;return((u=navigator.connection)==null?void 0:u.effectiveType)||"unknown"}getDownlink(){var u;return((u=navigator.connection)==null?void 0:u.downlink)||null}getRTT(){var u;return((u=navigator.connection)==null?void 0:u.rtt)||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(u){console.log(`Network status changed: ${u}`,this.networkStatus)}onPerformanceMeasure(u){u.duration>1e3&&console.warn(`Performance concern: ${u.name} took ${u.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){const u=[];return this.compatibilityScore<70&&u.push({type:"critical",message:"Browser compatibility issues detected. Consider updating your browser.",action:"update_browser"}),this.memoryInfo.memoryPressure==="high"&&u.push({type:"warning",message:"High memory usage detected. Close other browser tabs for better performance.",action:"reduce_memory"}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&u.push({type:"info",message:"Modern file saving features available in newer browsers.",action:"update_browser"}),this.networkStatus.isOnline||u.push({type:"error",message:"Internet connection required for full functionality.",action:"check_connection"}),u}isFeatureSupported(u){return this.features[u]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?"fileSystemAPI":this.features.downloadAttribute?"downloadAttribute":this.features.createObjectURL?"objectURL":"manual"}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group("Browser Compatibility Report"),console.log("Score:",this.compatibilityScore),console.log("Device:",this.deviceInfo),console.log("Features:",this.features),console.log("Issues:",this.compatibilityIssues),console.log("Recommendations:",this.getRecommendations()),console.groupEnd()}}const browserCompatibility=new BrowserCompatibilityManager;let EmailService$1=class{constructor(e=CONFIG_BASE.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log("✅ Email service initialized"),!0}catch(e){return console.error("❌ Failed to initialize email service:",e),!1}}async _loadEmailJS(){if(!window.emailjs)return Utils.loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw new Error("EmailJS not loaded");const t={to_email:e.to_email,to_name:e.to_name||e.customer_name||"Customer",from_name:this.config.FROM_NAME||"Seima Team",subject:e.subject||"Your Seima Product Selection",message:e.message||"",customer_name:e.customer_name||"",customer_project:e.customer_project||"",customer_address:e.customer_address||"",customer_telephone:e.customer_telephone||"",total_products:e.total_products||"",total_rooms:e.total_rooms||"",file_info:e.file_info||"",...this._sanitizeAttachment(e)};this.config.BCC_EMAIL&&(t.bcc_email=this.config.BCC_EMAIL);const o=this.config.RETRY_ATTEMPTS||3,s=this.config.RETRY_DELAY||2e3;for(let n=1;n<=o;n++)try{const r=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,t);return console.log(`✅ Email sent successfully (attempt ${n})`),{success:!0,result:r}}catch(r){if(console.warn(`❌ Email attempt ${n} failed:`,r),n<o)await Utils.sleep(s);else throw r}}_sanitizeAttachment(e){if(!e.attachment)return{};let t=e.attachment;return t.startsWith("data:")&&(t=t.split(",")[1]||t),{attachment:t,attachment_name:e.attachment_name||"attachment.pdf"}}async sendWithAttachments(e,t,o,s){const n=await this._blobToBase64(t),r=(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,""),c=Utils.generateFilename(r,"pdf"),i=this._buildEmailMessage(e,s),a={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:s.totalProducts.toString(),total_rooms:s.roomCount.toString(),message:i,attachment:n,attachment_name:c,file_info:`PDF: ${c} (${(t.size/1024).toFixed(1)} KB)`};return this.send(a)}_blobToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onloadend=()=>{const n=s.result.split(",")[1];t(n)},s.onerror=o,s.readAsDataURL(e)})}_buildEmailMessage(e,t){const o=["Thank you for your Seima product selection.","","Your selection summary:",`• Total products: ${t.totalProducts}`,`• Rooms: ${t.roomCount}`];return t.totalValue>0&&!e.excludePrice&&o.push(`• Estimated value: ${Utils.formatPriceLocale(t.totalValue)}`),o.push("","Please find your product selection attached as a PDF document.","","If you have any questions, please contact your Seima representative.","","Kind regards,","The Seima Team","www.seima.com.au"),o.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}};new EmailService$1;const SESSION_KEY="authSession",SESSION_DURATION_DEFAULT=7*24*60*60*1e3,SESSION_DURATION_REMEMBER=30*24*60*60*1e3;class AuthService{constructor(){this.baseUrl="",this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log("🔐 Auth service configured")}loadSession(){var e;try{const t=localStorage.getItem(SESSION_KEY);if(t){const o=JSON.parse(t);o.expiry&&Date.now()<o.expiry?(this.session=o,console.log("✅ Session restored for:",(e=o.user)==null?void 0:e.email)):(console.log("⏰ Session expired, clearing..."),this.clearSession())}}catch(t){console.warn("Failed to load session:",t),this.clearSession()}}saveSession(e){try{localStorage.setItem(SESSION_KEY,JSON.stringify(e)),this.session=e}catch(t){console.error("Failed to save session:",t)}}clearSession(){localStorage.removeItem(SESSION_KEY),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){var e;return((e=this.session)==null?void 0:e.user)||null}getSession(){return this.session}async apiRequest(e,t){if(!this.baseUrl)throw new Error("Google Sheets URL not configured. Call authService.configure() first.");const o=new URLSearchParams;o.append("action",e);for(const[n,r]of Object.entries(t))r!=null&&o.append(n,typeof r=="object"?JSON.stringify(r):r);const s=await fetch(this.baseUrl,{method:"POST",body:o});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);return await s.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:"Password must be at least 8 characters"}:/\d/.test(e)?{valid:!0}:{valid:!1,error:"Password must contain at least one number"}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,t,o,s="",n=""){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};const r=this.validatePassword(t);if(!r.valid)return{success:!1,error:r.error};if(!o||o.trim().length<2)return{success:!1,error:"Please enter your name"};try{return await this.apiRequest("userRegister",{email:e.trim().toLowerCase(),password:t,name:o.trim(),position:s.trim(),phone:n.trim()})}catch(c){return console.error("Registration error:",c),{success:!1,error:"Registration failed. Please try again."}}}async login(e,t,o=!1){if(!e||!t)return{success:!1,error:"Please enter email and password"};try{const s=await this.apiRequest("userLogin",{email:e.trim().toLowerCase(),password:t});if(s.success){const n=Date.now()+(o?SESSION_DURATION_REMEMBER:SESSION_DURATION_DEFAULT),r={user:s.user,token:s.sessionToken,expiry:n,rememberMe:o};this.saveSession(r),this.onAuthChange&&this.onAuthChange(s.user),console.log("✅ Logged in as:",s.user.email)}return s}catch(s){return console.error("Login error:",s),{success:!1,error:"Login failed. Please try again."}}}logout(){this.clearSession(),console.log("👋 Logged out")}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const t=await this.apiRequest("userRequestPasswordReset",{email:e.trim().toLowerCase()});return t.success&&t.resetToken&&await this.sendPasswordResetEmail(t.userEmail,t.userName,t.resetToken),{success:!0,message:"If this email exists, a reset code has been sent"}}catch(t){return console.error("Password reset request error:",t),{success:!1,error:"Failed to request password reset. Please try again."}}}async sendPasswordResetEmail(e,t,o){if(!this.emailConfig){console.warn("Email config not set, cannot send password reset email");return}try{window.emailjs||await this.loadEmailJS(),window.emailjs.init({publicKey:this.emailConfig.PUBLIC_KEY});const s={email:e,user_name:t||"User",reset_code:o,current_year:new Date().getFullYear().toString()},n=this.emailConfig.PASSWORD_RESET_TEMPLATE_ID||this.emailConfig.TEMPLATE_ID;console.log("📧 Sending password reset email to:",e);const r=await window.emailjs.send(this.emailConfig.SERVICE_ID,n,s,this.emailConfig.PUBLIC_KEY);console.log("✅ Password reset email sent to:",e,r)}catch(s){console.error("Failed to send password reset email:",s)}}async loadEmailJS(){return new Promise((e,t)=>{if(window.emailjs){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",o.onload=()=>{e()},o.onerror=t,document.head.appendChild(o)})}async resetPassword(e,t,o){if(!e||!t||!o)return{success:!1,error:"All fields are required"};const s=this.validatePassword(o);if(!s.valid)return{success:!1,error:s.error};try{return await this.apiRequest("userResetPassword",{email:e.trim().toLowerCase(),token:t.trim().toUpperCase(),newPassword:o})}catch(n){return console.error("Password reset error:",n),{success:!1,error:"Failed to reset password. Please try again."}}}async changePassword(e,t){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};const o=this.validatePassword(t);if(!o.valid)return{success:!1,error:o.error};try{return await this.apiRequest("userChangePassword",{email:this.session.user.email,currentPassword:e,newPassword:t})}catch(s){return console.error("Change password error:",s),{success:!1,error:"Failed to change password. Please try again."}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userUpdateProfile",{email:this.session.user.email,updates:JSON.stringify(e)});return t.success&&t.user&&(this.session.user=t.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(t.user)),t}catch(t){return console.error("Update profile error:",t),{success:!1,error:"Failed to update profile. Please try again."}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const t=await this.apiRequest("userDeleteAccount",{email:this.session.user.email,password:e});return t.success&&this.clearSession(),t}catch(t){return console.error("Delete account error:",t),{success:!1,error:"Failed to delete account. Please try again."}}}}const authService=new AuthService;class AuthUI{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product App"},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById("auth-ui-styles"))return;const e=document.createElement("style");e.id="auth-ui-styles",e.textContent=`
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
            <h2 class="auth-title">Staff Login</h2>
            <p class="auth-subtitle">Sign in to access staff features</p>
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
              <input type="email" id="reset-email" value="${e}" placeholder="you@example.com" required>
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
    `;this.showModal(t),this.setupResetHandlers()}showEditProfile(e=null){const t=authService.getCurrentUser();if(!t){console.warn("Cannot edit profile: not logged in");return}const o=`
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
              <input type="email" id="profile-email" value="${t.email||""}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${t.name||""}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${t.position||""}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${t.phone||""}" placeholder="Your phone number">
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
    `;this.showModal(o),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){var o;const t=document.getElementById("edit-profile-form");t==null||t.addEventListener("submit",async s=>{var a,l,d,m,h,p;s.preventDefault();const n=(l=(a=document.getElementById("profile-name"))==null?void 0:a.value)==null?void 0:l.trim(),r=((m=(d=document.getElementById("profile-position"))==null?void 0:d.value)==null?void 0:m.trim())||"",c=((p=(h=document.getElementById("profile-phone"))==null?void 0:h.value)==null?void 0:p.trim())||"";if(!n){this.showMessage("Name is required");return}this.setLoading("profile-submit",!0);const i=await authService.updateProfile({name:n,position:r,phone:c});this.setLoading("profile-submit",!1),i.success?(this.showMessage("Profile updated successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e(i.user)},1e3)):this.showMessage(i.error)}),(o=document.getElementById("profile-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showChangePassword(e=null){if(!authService.isLoggedIn()){console.warn("Cannot change password: not logged in");return}const t=`
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
    `;this.showModal(t),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){var o;const t=document.getElementById("change-password-form");t==null||t.addEventListener("submit",async s=>{var a,l,d;s.preventDefault();const n=(a=document.getElementById("current-password"))==null?void 0:a.value,r=(l=document.getElementById("new-password"))==null?void 0:l.value,c=(d=document.getElementById("confirm-password"))==null?void 0:d.value;if(r!==c){this.showMessage("New passwords do not match");return}if(r.length<8){this.showMessage("New password must be at least 8 characters");return}if(!/\d/.test(r)){this.showMessage("New password must contain at least one number");return}this.setLoading("password-submit",!0);const i=await authService.changePassword(n,r);this.setLoading("password-submit",!1),i.success?(this.showMessage("Password changed successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(i.error)}),(o=document.getElementById("password-cancel"))==null||o.addEventListener("click",()=>this.closeModal())}showUserMenu(e,t={}){var i,a,l;const o=authService.getCurrentUser();if(!o)return;const s=document.getElementById("auth-user-menu");if(s){s.remove();return}const r=`
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
    `;document.body.insertAdjacentHTML("beforeend",r);const c=document.getElementById("auth-user-menu");if(e){const d=e.getBoundingClientRect();c.style.position="fixed",c.style.top=d.bottom+8+"px",c.style.right=window.innerWidth-d.right+"px"}(i=document.getElementById("user-menu-profile"))==null||i.addEventListener("click",()=>{c.remove(),this.showEditProfile()}),(a=document.getElementById("user-menu-password"))==null||a.addEventListener("click",()=>{c.remove(),this.showChangePassword()}),(l=document.getElementById("user-menu-logout"))==null||l.addEventListener("click",()=>{c.remove(),authService.logout(),t.onLogout&&t.onLogout()}),setTimeout(()=>{const d=m=>{!c.contains(m.target)&&m.target!==e&&(c.remove(),document.removeEventListener("click",d))};document.addEventListener("click",d)},10)}showModal(e){var o,s;this.closeModal();const t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t.firstElementChild),this.currentModal=document.getElementById("auth-modal"),(o=document.getElementById("auth-close"))==null||o.addEventListener("click",()=>this.closeModal()),(s=this.currentModal)==null||s.addEventListener("click",n=>{n.target===this.currentModal&&this.closeModal()}),document.addEventListener("keydown",this.escHandler=n=>{n.key==="Escape"&&this.closeModal()})}closeModal(){this.currentModal&&(this.currentModal.remove(),this.currentModal=null),this.escHandler&&document.removeEventListener("keydown",this.escHandler)}showMessage(e,t="error"){const o=document.getElementById("auth-message");o&&(o.innerHTML=`<div class="auth-message ${t}">${e}</div>`)}setLoading(e,t){const o=document.getElementById(e);o&&(t?(o.disabled=!0,o.dataset.originalText=o.textContent,o.innerHTML='<span class="auth-spinner"></span>Please wait...'):(o.disabled=!1,o.textContent=o.dataset.originalText||"Submit"))}setupLoginHandlers(e){var o,s;const t=document.getElementById("login-form");t==null||t.addEventListener("submit",async n=>{var l,d,m,h;n.preventDefault();const r=(l=document.getElementById("login-email"))==null?void 0:l.value,c=(d=document.getElementById("login-password"))==null?void 0:d.value,i=((m=document.getElementById("login-remember"))==null?void 0:m.checked)||!1;this.setLoading("login-submit",!0);const a=await authService.login(r,c,i);this.setLoading("login-submit",!1),a.success?(this.closeModal(),e&&e(a.user),(h=this.pendingAction)!=null&&h.callback&&(this.pendingAction.callback(a.user),this.pendingAction=null)):this.showMessage(a.error)}),(o=document.getElementById("show-register"))==null||o.addEventListener("click",()=>this.showRegister()),(s=document.getElementById("show-forgot"))==null||s.addEventListener("click",()=>this.showForgotPassword())}setupRegisterHandlers(){var t;const e=document.getElementById("register-form");e==null||e.addEventListener("submit",async o=>{var l,d,m,h,p;o.preventDefault();const s=(l=document.getElementById("register-name"))==null?void 0:l.value,n=(d=document.getElementById("register-email"))==null?void 0:d.value,r=(m=document.getElementById("register-password"))==null?void 0:m.value,c=((h=document.getElementById("register-position"))==null?void 0:h.value)||"",i=((p=document.getElementById("register-phone"))==null?void 0:p.value)||"";this.setLoading("register-submit",!0);const a=await authService.register(n,r,s,c,i);this.setLoading("register-submit",!1),a.success?(this.showMessage("Account created! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(a.error)}),(t=document.getElementById("show-login"))==null||t.addEventListener("click",()=>this.showLogin())}setupForgotHandlers(){var t;const e=document.getElementById("forgot-form");e==null||e.addEventListener("submit",async o=>{var r;o.preventDefault();const s=(r=document.getElementById("forgot-email"))==null?void 0:r.value;this.setLoading("forgot-submit",!0);const n=await authService.requestPasswordReset(s);this.setLoading("forgot-submit",!1),n.success?(this.showMessage("If this email exists, a reset code has been sent.","success"),setTimeout(()=>this.showResetPassword(s),2e3)):this.showMessage(n.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}setupResetHandlers(){var t;const e=document.getElementById("reset-form");e==null||e.addEventListener("submit",async o=>{var i,a,l;o.preventDefault();const s=(i=document.getElementById("reset-email"))==null?void 0:i.value,n=(a=document.getElementById("reset-code"))==null?void 0:a.value,r=(l=document.getElementById("reset-new-password"))==null?void 0:l.value;this.setLoading("reset-submit",!0);const c=await authService.resetPassword(s,n,r);this.setLoading("reset-submit",!1),c.success?(this.showMessage("Password reset successfully! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(c.error)}),(t=document.getElementById("show-login-back"))==null||t.addEventListener("click",()=>this.showLogin())}getInitials(e){if(!e)return"?";const t=e.split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,t="continue"){authService.isLoggedIn()?e(authService.getCurrentUser()):this.showLogin(e)}}const authUI=new AuthUI,preloadedImageCache=new Map;function getCachedImage(u){return preloadedImageCache.get(u)}class DataService{constructor(){this.storageKeys={LEGACY_SELECTION:"selection",PRODUCTS:CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,CATALOG:CONFIG.STORAGE_KEYS.PRODUCT_CATALOG,CUSTOM_ROOMS:CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,STAFF_CONTACT:CONFIG.STORAGE_KEYS.STAFF_CONTACT},this.productCatalog=[],this.isLoaded=!1}async init(){try{return console.log("🔄 Initializing DataService..."),await this.loadProductCatalog(),this.isLoaded=!0,console.log(`✅ DataService initialized with ${this.productCatalog.length} products`),!0}catch(e){throw console.error("❌ DataService initialization failed:",e),this.isLoaded=!1,e}}async loadProductCatalog(){try{let e=localStorage.getItem("productCatalogCsv"),t=[];e&&(t=this.parseCSV(e),this.productCatalog=t,console.log(`📦 Loaded ${t.length} products from cache`));const o=CONFIG.CATALOG_URL+(CONFIG.CATALOG_URL.includes("?")?"&":"?")+"t="+Date.now();if(fetch(o).then(s=>s.ok?s.text():Promise.reject("Failed to fetch catalog")).then(s=>{if(!e||s!==e){localStorage.setItem("productCatalogCsv",s);const n=this.parseCSV(s);JSON.stringify(n)!==JSON.stringify(t)&&(this.productCatalog=n,window.location.reload())}}).catch(s=>console.warn("Background catalog update failed:",s)),!t.length)throw new Error("No product data available");return t}catch(e){throw console.error("❌ Failed to load product catalog:",e),this.productCatalog=[],e}}parseCSV(e){const t=e.split(`
`).filter(r=>r.trim());if(t.length===0)return[];const o=this.parseCSVLine(t[0]).map(r=>r.trim().replace(/"/g,"")),s=o.findIndex(r=>r==="OrderCode"||r==="Order Code");if(s===-1)return[];const n=[];for(let r=1;r<t.length;r++){const c=this.parseCSVLine(t[r]);if(c.length<=s)continue;const i=c[s]?c[s].trim():"";if(!i)continue;const a={};o.forEach((l,d)=>{a[l]=c[d]||""}),a.OrderCode=i,a["Product Name"]=a["Product Name"]||a["Parent Code"]||"",a.Description=a.Description||"",a.LongDescription=a["Long Description"]||a.LongDescription||"",a.RRP_EXGST=a["RRP EX GST"]||a.RRP_EXGST||"",a.RRP_INCGST=a["RRP INC GST"]||a.RRP_INCGST||"",a.BARCODE=(a.BARCODE||"").toString().trim(),n.push(a)}return n}parseCSVLine(e){const t=[];let o="",s=!1;for(let n=0;n<e.length;n++){const r=e[n];r==='"'?s=!s:r===","&&!s?(t.push(o.trim()),o=""):o+=r}return t.push(o.trim()),t}getAllProducts(){return this.productCatalog}searchProducts(e,t=50){if(!e||e.length<2)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(n=>n.length>=2);if(o.length===0)return[];const s=[];for(const n of this.productCatalog){const r=o.map(i=>this.calculateSearchScore(n,i));if(r.some(i=>i===0))continue;const c=r.reduce((i,a)=>i+a,0)/r.length;s.push({product:n,score:c})}return s.sort((n,r)=>r.score-n.score),s.slice(0,t).map(n=>n.product)}calculateSearchScore(e,t){let o=0;const s=(e.OrderCode||"").toString().toLowerCase().trim(),n=(e.BARCODE||e.Barcode||"").toString().toLowerCase().trim(),r=(e["Product Name"]||e.ProductName||"").toString().toLowerCase().trim(),c=(e.Description||"").toString().toLowerCase().trim(),i=(e.LongDescription||"").toString().toLowerCase().trim();return s===t||n===t?100:((s.includes(t)||n.includes(t))&&(o=Math.max(o,90)),r===t?o=Math.max(o,80):r.startsWith(t)?o=Math.max(o,70):r.includes(t)&&(o=Math.max(o,60)),c.includes(t)&&(o=Math.max(o,40)),i.includes(t)&&(o=Math.max(o,20)),o)}findProductByCode(e){if(!e)return null;const t=e.toString().trim();return this.productCatalog.find(o=>(o.OrderCode||o.orderCode||"").toString().trim()===t)}findProductByBarcode(e){if(!e)return null;const t=e.toString().trim();return this.productCatalog.find(o=>o.BARCODE&&o.BARCODE.toString().trim()===t)||null}getSelectedProducts(){try{const e=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||"[]");if(e.length>0)return this._validateSelectionFormat(e);const t=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||"[]");return this._convertLegacyFormat(t)}catch(e){return console.error("Error loading selected products:",e),[]}}addProduct(e,t="",o="",s=1){if(!this._validateProduct(e))throw new Error("Invalid product data");const n=this.getSelectedProducts(),r={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,CONFIG.UI.ANNOTATION_MAX_LENGTH),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,Math.min(999,parseInt(s)||1)),timestamp:Date.now()};return n.push(r),this._saveSelectedProducts(n),console.log(`✅ Added ${e.OrderCode||"product"} to selection`),r}removeProduct(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this._saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateProduct(e,t){const o=this.getSelectedProducts(),s=o.findIndex(r=>r.id===e);if(s===-1)throw new Error("Product not found in selection");const n=o[s];return o[s]={...n,...t,id:e,timestamp:n.timestamp,notes:t.notes?Utils.sanitizeInput(t.notes,CONFIG.UI.ANNOTATION_MAX_LENGTH):n.notes,room:t.room?Utils.sanitizeInput(t.room,50):n.room,quantity:t.quantity?Math.max(1,Math.min(999,parseInt(t.quantity)||1)):n.quantity},this._saveSelectedProducts(o),console.log("✅ Updated product in selection"),o[s]}clearSelection(){localStorage.removeItem(this.storageKeys.PRODUCTS),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION),console.log("✅ Cleared all selected products")}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const s=o.room||"Unassigned";t[s]||(t[s]=[]),t[s].push(o)}),t}getSelectionStats(){const e=this.getSelectedProducts(),t=this.getProductsByRoom();return{totalProducts:e.length,totalRooms:Object.keys(t).length,roomBreakdown:Object.entries(t).map(([o,s])=>({room:o,count:s.length}))}}getProductsLegacyFormat(){return this.getSelectedProducts().map(t=>({...t.product,Room:t.room,Notes:t.notes,Quantity:t.quantity,Timestamp:new Date(t.timestamp).toISOString()}))}getStaffContact(){try{const e=localStorage.getItem(this.storageKeys.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.warn("Error loading staff contact:",e),null}}setStaffContact(e){try{localStorage.setItem(this.storageKeys.STAFF_CONTACT,JSON.stringify(e)),console.log("✅ Staff contact saved")}catch(t){throw console.error("Error saving staff contact:",t),t}}getCustomRooms(){try{return JSON.parse(localStorage.getItem(this.storageKeys.CUSTOM_ROOMS)||"[]")}catch(e){return console.warn("Error loading custom rooms:",e),[]}}addCustomRoom(e){const t=this.getCustomRooms();t.find(o=>o.name===e)||(t.push({name:e,timestamp:Date.now()}),localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(t)),console.log(`✅ Added custom room: ${e}`))}removeCustomRoom(e){const o=this.getCustomRooms().filter(s=>s.name!==e);localStorage.setItem(this.storageKeys.CUSTOM_ROOMS,JSON.stringify(o)),console.log(`✅ Removed custom room: ${e}`)}getProductCatalog(){try{const e=localStorage.getItem(this.storageKeys.CATALOG);return e?JSON.parse(e):[]}catch(e){return console.warn("Error loading product catalog from storage:",e),[]}}setProductCatalog(e){try{localStorage.setItem(this.storageKeys.CATALOG,JSON.stringify(e)),console.log(`✅ Cached ${e.length} products to storage`)}catch(t){console.warn("Error caching product catalog:",t)}}_convertLegacyFormat(e){return Array.isArray(e)?e.map(t=>({id:Utils.generateId(),product:{...t},room:t.Room||"",notes:t.Notes||"",quantity:t.Quantity||1,timestamp:t.Timestamp?new Date(t.Timestamp).getTime():Date.now()})):[]}_validateSelectionFormat(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object"&&t.product&&typeof t.product=="object"):[]}_validateProduct(e){return e&&typeof e=="object"&&(e.OrderCode||e.Description)}_saveSelectedProducts(e){try{localStorage.setItem(this.storageKeys.PRODUCTS,JSON.stringify(e)),localStorage.removeItem(this.storageKeys.LEGACY_SELECTION)}catch(t){throw console.error("Error saving selected products:",t),t}}migrateLegacyData(){const e=JSON.parse(localStorage.getItem(this.storageKeys.LEGACY_SELECTION)||"[]"),t=JSON.parse(localStorage.getItem(this.storageKeys.PRODUCTS)||"[]");if(e.length>0&&t.length===0){console.log("📦 Migrating legacy selection data...");const o=this._convertLegacyFormat(e);return this._saveSelectedProducts(o),console.log(`✅ Migrated ${o.length} products to new format`),!0}return!1}}const dataService=new DataService;class SelectionRecorder{constructor(){var e,t,o,s;this.isEnabled=(e=CONFIG.SELECTION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=((t=CONFIG.SELECTION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL)||null,this.retryAttempts=(o=CONFIG.SELECTION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=CONFIG.SELECTION_RECORDING)==null?void 0:s.RETRY_DELAY}configure(e){this.googleSheetsUrl=e,console.log("📊 Selection recorder configured with Google Sheets URL")}async recordSelection(e,t,o={}){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Selection recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const s=this.prepareSelectionData(e,t,o),n=await this.sendToGoogleSheets(s);if(n.success)return console.log("✅ Selection recorded successfully"),{success:!0,data:s};throw new Error(n.error||"Failed to record selection")}catch(s){return console.error("❌ Failed to record selection:",s),{success:!1,error:s.message}}}prepareSelectionData(e,t,o){const s=new Date,n=e.staffContact||{},r=t.length,c=t.reduce((m,h)=>m+(h.quantity||1),0),i=this.calculateEstimatedValue(t),a=[...new Set(t.map(m=>m.room).filter(Boolean))],l=e.leadData||{};return{date:s.toLocaleDateString("en-AU"),time:s.toLocaleTimeString("en-AU"),appVersion:CONFIG.VERSION,staffName:n.name||"Unknown Staff",staffEmail:n.email||"",staffMobile:this.formatPhoneNumber(n.mobile),customerName:e.name||"",customerEmail:e.email||"",customerPhone:this.formatPhoneNumber(e.phone),customerProject:e.project||"",customerAddress:e.address||"",customerType:l.customerType||"",hearAboutUs:this.formatHearAboutUs(l),projectNotes:l.projectNotes||"",builderName:l.builderName||"",merchantName:l.merchantName||"",referralBuilder:l.referralBuilder||"",referralMerchant:l.referralMerchant||"",totalProducts:r,totalQuantity:c,totalRooms:a.length,roomsList:a.join(", "),estimatedValue:i,emailSent:o.success||!1,pdfGenerated:o.pdfGenerated||!1,csvGenerated:o.csvGenerated||!1,pdfSize:o.pdfSize||"",productsJson:JSON.stringify(t.map(m=>{var h,p,f,g,w,x;return{orderCode:((h=m.product)==null?void 0:h.OrderCode)||((p=m.product)==null?void 0:p.orderCode)||"",description:((f=m.product)==null?void 0:f.Description)||((g=m.product)==null?void 0:g.description)||"",room:m.room||"",quantity:m.quantity||1,notes:m.notes||"",priceIncGst:((w=m.product)==null?void 0:w.RRP_INCGST)||((x=m.product)==null?void 0:x.rrpIncGst)||"0.00"}}))}}formatHearAboutUs(e){if(!e||!e.hearAboutUs)return"";if(Array.isArray(e.hearAboutUs)){let t=[...e.hearAboutUs];if(t.includes("Other")&&e.hearAboutUsOther){const o=t.indexOf("Other");t[o]=`Other (${e.hearAboutUsOther})`}return t.join(", ")}return e.hearAboutUs||""}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var c,i;const s=o.quantity||1,n=((c=o.product)==null?void 0:c.RRP_INCGST)||((i=o.product)==null?void 0:i.rrpIncGst)||"0",r=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=r*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e));const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);return{success:!0,result:await s.json()}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};const e={date:new Date().toLocaleDateString("en-AU"),time:new Date().toLocaleTimeString("en-AU"),staffName:"Test User",customerName:"Test Customer",totalProducts:1,test:!0};return await this.sendToGoogleSheets(e)}setEnabled(e){this.isEnabled=e,console.log(`📊 Selection recording ${e?"enabled":"disabled"}`)}}const selectionRecorder=new SelectionRecorder;class EmailTemplateGenerator{constructor(){this.brandColors={primary:"#a09484",primaryDark:"#8b7a6e",background:"#f8f8fa",cardBackground:"#ffffff",textPrimary:"#222",textSecondary:"#4b5563",textMuted:"#6b7280",success:"#10b981",warning:"#f59e0b",border:"#e5e7eb"}}generateEmailHTML(e,t={}){const{includeLogo:o=!0,includeAttachmentInfo:s=!1,includeFeaturesList:n=!1,customMessage:r=null,theme:c="default"}=t,i=this.prepareEmailData(e);return`
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
              ${this.generateContent(i,r)}
              ${this.generateSummaryCard(i)}
              ${s?this.generateAttachmentsCard(i):""}
              ${n?this.generateFeaturesList():""}
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

© 2024 Seima | Generated by Seima Scanner v${t.appVersion}`}getProductCount(){return JSON.parse(localStorage.getItem("selectedProducts")||"[]").length}getRoomCount(){const e=JSON.parse(localStorage.getItem("selectedProducts")||"[]");return new Set(e.map(o=>o.room).filter(Boolean)).size||1}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${n}${r}.${c}${i}.${t}`}}function testCleanedUpTemplate(){console.log("🧪 Testing cleaned up email template...");const u={name:"cleaned",email:"jsegredos@gmail.com",project:"cleaned",address:"Seima Pty Ltd",phone:"0418486702"};try{const t=new EmailTemplateGenerator().generateEmailHTML(u),o=window.open("","_blank","width=800,height=600");return o.document.write(t),o.document.close(),console.log("✅ Cleaned up email template preview opened in new window"),console.log("🎨 Changes applied:"),console.log("   • Header: Removed house icon and subtitle, changed to gold/brown background"),console.log('   • Sections: Removed "Attached Documents" and "Your selection includes" sections'),console.log("   • Footer: Removed top two lines"),!0}catch(e){return console.error("❌ Template test failed:",e),!1}}window.testCleanedUpTemplate=testCleanedUpTemplate;class EmailService{constructor(){this.providers={emailjs:new EmailJSProvider,microsoftGraph:new MicrosoftGraphProvider},this.currentProvider=null,this.isInitialized=!1,this.templateGenerator=new EmailTemplateGenerator}async init(e="emailjs",t=null){try{const o=this.providers[e];if(!o)throw new Error(`Unknown email provider: ${e}`);const s=t||this._getProviderConfig(e);return await o.init(s),this.currentProvider=o,this.isInitialized=!0,console.log(`✅ Email service initialized with ${e}`),!0}catch(o){return console.error(`❌ Failed to initialize email service with ${e}:`,o),!1}}async sendEmail(e,t,o=null){if(!this.isInitialized||!this.currentProvider)throw new Error("Email service not initialized");try{const s=dataService.getStaffContact(),n={...e,staffContact:s},r=this._generateEmailContent(n,t,o);console.log("📧 Attempting email send (no size restrictions)...");const c=await this.currentProvider.sendEmail(r);if(c.success)return console.log("✅ Email sent successfully!"),this.recordSelection(n,t,o,c),c;throw new Error(c.error||"Email sending failed")}catch(s){return console.error("📧 Email sending failed, using fallback:",s),this._handleEmailFailure(e,t,o,s)}}async sendNotificationEmail(e){if(!this.isInitialized||!this.currentProvider)throw new Error("Email service not initialized");try{const t=dataService.getStaffContact(),o={...e,staffContact:t},s=this._generateEmailContent(o,null,null),n=await this.currentProvider.sendEmail(s);if(n.success)return this._showSuccess("✅ Notification email sent successfully!"),n;throw new Error(n.error||"Notification email failed")}catch(t){return console.error("📧 Notification email failed:",t),{success:!1,error:t.message}}}async testEmail(e=null){const t=e||{name:"Test User",email:"test@example.com",project:"Test Project",address:"Test Address",phone:"Test Phone"},o=`%PDF-1.4
Test PDF Content
%%EOF`,s=new Blob([o],{type:"application/pdf"}),n=`Code,Description,Quantity
TEST001,"Test Product",1`;return console.log("🧪 Testing email service..."),await this.sendEmail(t,s,n)}_generateEmailContent(e,t,o){var s;return{to:e.email,from:CONFIG.EMAIL.FROM_EMAIL||"noreply@seima.com.au",fromName:"Seima Team",subject:`Seima Product Selection - ${e.name||"Customer"}`,html:this.templateGenerator.generateEmailHTML(e),text:this.templateGenerator.generateTextEmail(e),bcc:((s=e.staffContact)==null?void 0:s.email)||null,attachments:this._prepareAttachments(e,t,o)}}_prepareAttachments(e,t,o){const s=[];return t&&s.push({filename:this._generateFileName(e,"pdf"),content:t,type:"application/pdf"}),o&&s.push({filename:this._generateFileName(e,"csv"),content:new Blob([o],{type:"text/csv;charset=utf-8"}),type:"text/csv"}),s}_generateFileName(e,t){const o=new Date,s=`${String(o.getDate()).padStart(2,"0")}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getFullYear()).slice(-2)}`,n=`${String(o.getHours()).padStart(2,"0")}${String(o.getMinutes()).padStart(2,"0")}`;return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}.${n}.${t}`}_handleEmailFailure(e,t,o,s){console.error("📧 Email failed, providing download fallback:",s);const n=[];try{if(t){const r=this._generateFileName(e,"pdf");this._downloadFile(t,r),n.push("PDF"),console.log("✅ PDF downloaded as fallback")}}catch(r){console.error("❌ Failed to download PDF:",r)}try{if(o){const r=new Blob([o],{type:"text/csv;charset=utf-8"}),c=this._generateFileName(e,"csv");this._downloadFile(r,c),n.push("CSV"),console.log("✅ CSV downloaded as fallback")}}catch(r){console.error("❌ Failed to download CSV:",r)}return n.length>0?this._showError("Unable to send email. Files have been downloaded to your device."):this._showError("Email sending failed and file download failed. Please try again."),{success:!1,method:"download_fallback",error:s.message,downloadedFiles:n}}_downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}_getProviderConfig(e){switch(e){case"emailjs":return{publicKey:CONFIG.EMAIL.PUBLIC_KEY,serviceId:CONFIG.EMAIL.SERVICE_ID,templateId:CONFIG.EMAIL.TEMPLATE_ID};case"microsoftGraph":return{clientId:CONFIG.EMAIL.MICROSOFT_CLIENT_ID,tenantId:CONFIG.EMAIL.MICROSOFT_TENANT_ID,scopes:["https://graph.microsoft.com/Mail.Send"]};default:return{}}}_showSuccess(e){window.showSuccessMessage?window.showSuccessMessage(e):console.log(e)}_showError(e){window.showErrorMessage?window.showErrorMessage(e):console.error(e)}async recordSelection(e,t,o,s){try{const n=this.getSelectedProducts();if(n.length===0){console.log("📊 No products to record");return}const r={success:!0,pdfGenerated:!!t,csvGenerated:!!o,pdfSize:t?`${(t.size/1024/1024).toFixed(2)}MB`:"",method:"legacy-email-service"},c={...e};e.leadData?c.leadData=e.leadData:window.currentLeadData&&(c.leadData=window.currentLeadData);const i=await selectionRecorder.recordSelection(c,n,r);i.success?console.log("📊 Selection recorded successfully"):console.warn("📊 Selection recording failed:",i.error||i.reason)}catch(n){console.error("📊 Error recording selection:",n)}}getSelectedProducts(){try{const e=JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return e.length>0?e:JSON.parse(localStorage.getItem("selection")||"[]").map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}catch(e){return console.error("Error getting selected products:",e),[]}}}class EmailJSProvider{constructor(){this.isInitialized=!1}async init(e){window.emailjs||await this._loadEmailJS(),emailjs.init({publicKey:e.publicKey}),this.config=e,this.isInitialized=!0,console.log("✅ EmailJS provider initialized")}async sendEmail(e){try{const t={to_email:e.to,from_name:e.fromName,subject:e.subject,email_html:e.html,message_text:e.text,bcc_email:e.bcc||""};for(const s of e.attachments)s.type==="application/pdf"?(t.pdf_attachment=await this._blobToBase64(s.content),t.pdf_filename=s.filename):(s.type==="text/plain"||s.type==="text/csv")&&(t.csv_attachment=await this._blobToBase64(s.content),t.csv_filename=s.filename);const o=await emailjs.send(this.config.serviceId,this.config.templateId,t,this.config.publicKey);if(o.status===200)return{success:!0,provider:"emailjs",result:o};throw new Error(`EmailJS returned status ${o.status}`)}catch(t){return{success:!1,provider:"emailjs",error:t.message}}}async _loadEmailJS(){return new Promise((e,t)=>{const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}async _blobToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onloadend=()=>{try{const n=s.result.split(",")[1];t(n)}catch(n){console.error("❌ Base64 conversion failed:",n),o(n)}},s.onerror=()=>{console.error("❌ FileReader error:",s.error),o(s.error)},s.readAsDataURL(e)})}}class MicrosoftGraphProvider{constructor(){this.isInitialized=!1}async init(e){console.log("🚀 Microsoft Graph provider configured for future use"),this.config=e,this.isInitialized=!0}async sendEmail(e){return console.log("📧 Microsoft Graph email sending not yet implemented"),{success:!1,provider:"microsoftGraph",error:"Not implemented yet"}}}const emailService=new EmailService;function testEmailTemplate(){const u={name:"45",email:"jsegredos@gmail.com",project:"345",address:"house address",mobile:"55432"},t=new EmailTemplateGenerator().generateEmailHTML(u),o=window.open("","_blank","width=800,height=600");o.document.write(t),o.document.close(),console.log("✅ Email template preview opened in new window")}function testConsolidatedTemplates(){console.log("🧪 Testing consolidated email templates...");const u={name:"Test User",email:"test@example.com",project:"Test Project",address:"Test Address",phone:"1234567890"};try{const e=new EmailTemplateGenerator,t=e.generateEmailHTML(u),o=e.generateTextEmail(u);console.log("✅ Standalone EmailTemplateGenerator works correctly"),console.log("📄 HTML content length:",t.length),console.log("📝 Text content length:",o.length);const n=new EmailService()._generateEmailContent(u,null,null);return console.log("✅ EmailService integration works correctly"),console.log("📧 Email content generated:",{to:n.to,subject:n.subject,htmlLength:n.html.length,textLength:n.text.length}),!0}catch(e){return console.error("❌ Template consolidation test failed:",e),!1}}window.testEmailTemplate=testEmailTemplate;window.testConsolidatedTemplates=testConsolidatedTemplates;class PDFService{constructor(){this.isInitialized=!1,this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache=new Map,this.preloadedImageCache=new Map}_generateImageHash(e){let t=0;if(!e||e.length===0)return t.toString();for(let o=0;o<e.length;o++){const s=e.charCodeAt(o);t=(t<<5)-t+s,t=t&t}return Math.abs(t).toString(36)}_isTechnicalDiagram(e,t){try{const o=Math.min(100,e.width),s=Math.min(100,e.height),r=t.getImageData(0,0,o,s).data,c=new Set;for(let i=0;i<r.length;i+=4){const a=`${r[i]},${r[i+1]},${r[i+2]}`;if(c.add(a),c.size>1e3)return!1}return c.size<1e3}catch(o){return console.warn("Could not analyze image for diagram detection:",o),!1}}_detectTransparency(e,t){try{const s=t.getImageData(0,0,e.width,e.height).data;for(let n=3;n<s.length;n+=4)if(s[n]<255)return!0;return!1}catch(o){return console.warn("Could not detect transparency:",o),!1}}async _preloadAllImages(e){this.preloadedImageCache.clear();const t=new Set;e.forEach(a=>{a.Image_URL&&a.Image_URL.length>10&&t.add(a.Image_URL),a.Diagram_URL&&a.Diagram_URL.length>10&&t.add(a.Diagram_URL)});const o=Array.from(t);if(o.length===0)return console.log("📷 No images to preload"),0;console.log(`📷 Preloading ${o.length} images in parallel...`);const s=Date.now(),n=10;let r=0,c=0;for(let a=0;a<o.length;a+=n){const l=o.slice(a,a+n);(await Promise.allSettled(l.map(h=>this._preloadSingleImage(h)))).forEach((h,p)=>{const f=l[p];h.status==="fulfilled"&&h.value?(this.preloadedImageCache.set(f,h.value),r++):c++});const m=document.getElementById("preload-progress");if(m){const h=Math.min(100,Math.round((a+l.length)/o.length*100));m.textContent=`Loading images: ${h}%`}}const i=((Date.now()-s)/1e3).toFixed(1);return console.log(`✅ Preloaded ${r}/${o.length} images in ${i}s (${c} failed)`),r}async _preloadSingleImage(e){if(this.preloadedImageCache.has(e))return this.preloadedImageCache.get(e);if(!e||typeof e!="string"||e.length<25)return null;const t=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(e),o=e.startsWith("data:");if(!t&&!o)return console.warn("Skipping URL without valid extension:",e.substring(0,50)+"..."),null;if(/\/images\/\d+$/.test(e)||e.endsWith("/0"))return null;try{const s=await this._optimizeImageForPDF(e,400,.8);return s&&s.url!=="assets/no-image.png"?s:null}catch{return console.warn(`Failed to preload image: ${e.substring(0,50)}...`),null}}async init(){try{await this._loadJSPDF(),this.isInitialized=!0,console.log("✅ PDF service initialized")}catch(e){throw console.error("❌ PDF service initialization failed:",e),e}}async generatePDF(e){if(!this.isInitialized)throw new Error("PDF service not initialized");try{console.log(`📄 Generating PDF for ${dataService.getSelectionStats().totalProducts} products...`),this._ensurePdfSpinner();const t=document.getElementById("pdf-spinner");return t&&(t.style.display="flex"),this._resetImageOptimizationStats(),this._showProcessingNotification(e),await this._generatePDFWithOriginalLogic(e)}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async _generatePDFWithOriginalLogic(e){var d;const t=JSON.parse(localStorage.getItem("selection")||"[]"),o=JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let s=[];if(o.length>0?s=o.map(m=>({...m.product,Room:m.room,Notes:m.notes,Quantity:m.quantity,Timestamp:new Date(m.timestamp).toISOString()})):s=t,!s.length){alert("No products selected.");const m=document.getElementById("pdf-spinner");m&&(m.style.display="none");return}if(this.preloadedImageCache.size>0)console.log(`📷 Using ${this.preloadedImageCache.size} pre-cached images (skipping duplicate preload)`);else{const m=document.getElementById("pdf-processing-notification");if(m){const p=document.createElement("span");p.id="preload-progress",p.style.cssText="display: block; font-size: 12px; margin-top: 4px; color: #1e40af;",p.textContent="Loading images: 0%",(d=m.querySelector("p"))==null||d.appendChild(p)}console.log("📷 Starting image preload for",s.length,"products");const h=await this._preloadAllImages(s);if(console.log(`📷 Image preloading complete: ${h} images cached`),m){const p=document.getElementById("preload-progress");p&&(p.textContent=`✓ ${h} images ready`)}}const r={};s.forEach(m=>{r[m.Room]||(r[m.Room]=[]),r[m.Room].push(m)});const{jsPDF:c}=window.jspdf,i=new c({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,floatPrecision:16}),a=i.internal.pageSize.getWidth(),l=i.internal.pageSize.getHeight();return new Promise((m,h)=>{this._loadImageAsDataURL("assets/seima-logo.png",(p,f,g)=>{p&&console.log(`🔍 Debug - Cover logo size: ${(p.length/1024).toFixed(1)} KB (${f}x${g})`);const w=60,x=f&&g?w*f/g:180,y=(a-x)/2,b=64;p&&i.addImage(p,"PNG",y,b,x,w,"cover_logo","FAST");let S=b+w+60+56.7;const v=y,P=v,F=v+90;i.setFontSize(14),i.setTextColor("#444"),i.setFont("helvetica","normal");let M=S;[{label:"Name:",value:(e==null?void 0:e.name)||""},{label:"Project:",value:(e==null?void 0:e.project)||""},{label:"Address:",value:(e==null?void 0:e.address)||""},{label:"Email:",value:(e==null?void 0:e.email)||""},{label:"Telephone:",value:(e==null?void 0:e.telephone)||(e==null?void 0:e.phone)||""}].forEach(T=>{T.value&&(i.setFont("helvetica","normal"),i.text(T.label,P,M),i.setFont("helvetica","bold"),i.text(T.value,F,M),M+=28)});const R=dataService.getStaffContact();if(R&&R.name&&R.mobile&&R.email){const T=`For further information please contact ${R.name} on ${R.mobile}`,H=`or email: ${R.email}`,_="Thank you for selecting Seima products.",G="www.seima.com.au";let D=l-92;i.setFontSize(11),i.setTextColor("#222"),i.text(T,a/2,D,{align:"center"}),i.text(H,a/2,D+14,{align:"center"}),i.text("",a/2,D+28,{align:"center"}),i.setFontSize(12),i.text(_,a/2,D+42,{align:"center"}),i.setFontSize(11),i.setTextColor("#444"),i.text(G,a/2,D+56,{align:"center"})}else{const T="Thank you for selecting Seima products. If you would like additional information",H="please call or email your Seima representative, or email info@seima.com.au";let _=l-60;i.text(T,a/2,_,{align:"center"}),i.text(H,a/2,_+16,{align:"center"})}const B=28;i.setFillColor("#c4c4bc"),i.rect(0,l-B,a,B,"F"),i.setTextColor("#fff"),i.setFontSize(11);const N=new Date,I=["January","February","March","April","May","June","July","August","September","October","November","December"],k=N.getDate(),$=I[N.getMonth()],q=N.getFullYear(),j=String(N.getHours()).padStart(2,"0"),J=String(N.getMinutes()).padStart(2,"0"),K=`Printed ${k} ${$} ${q}, ${j}:${J}`;i.text(K,16,l-10),i.text("www.seima.com.au",a-140,l-10),i.addPage(),this._loadImageAsDataURL("assets/seima-logo-white.png",(T,H,_)=>{T&&console.log(`🔍 Debug - Product page logo size: ${(T.length/1024).toFixed(1)} KB (${H}x${_})`);const G=32,D=40,X=90,ie=12,ae=G+X*2+ie*2,z=ae+60,W=a-200,oe=a-120,ce=a-60,O=[G,ae,z,W,oe,ce],Q=[];Object.keys(r).forEach(E=>{const U=r[E];U.forEach((A,L)=>{Q.push({item:A,room:E,roomCount:U.length,isFirstInRoom:L===0})})});const le=4,Z=8,se=Math.floor((l-120)/le);let de=D+15,ee=0,V=0;const ne=()=>{if(V>=Q.length){this._finalizePDF(i,a,l,O,G,D,T,H,_,e,Q.length);const A=this._generatePDFFilename(e),L=i.output("blob");this._removeNotifications(),this._showImageOptimizationSummary(e.emailCompatible),console.log(`✅ PDF generated successfully: ${A} (${(L.size/1024/1024).toFixed(2)} MB)`),m(L);return}ee>=le&&(i.addPage(),de=D+15,ee=0);const E=Q[V];if(!E||!E.item){console.warn(`⚠️ Skipping invalid row at index ${V}:`,E),V++,ne();return}const U=de+se*ee;E.isFirstInRoom&&(i.setFontSize(9),i.setTextColor("#888"),i.text(E.room+" ("+E.roomCount+")",G,U+10)),this._drawImage(i,E.item.Image_URL||"",O[0],U+Z+8,X,se-Z*2,e.emailCompatible,()=>{this._drawImage(i,E.item.Diagram_URL||"",O[0]+X+ie,U+Z+8,X,se-Z*2,e.emailCompatible,()=>{i.setFontSize(10),i.setTextColor("#222");const A=U+32;i.text(String(E.item.OrderCode||""),Number(O[1])+30,A+10,{align:"center"});let L=A+38;if(E.item.Datasheet_URL&&E.item.Datasheet_URL!=="#"){i.setFontSize(8),i.setTextColor(120,120,120),i.textWithLink("Datasheet",Number(O[1])+30,L,{url:E.item.Datasheet_URL,align:"center"});const C=i.getTextWidth("Datasheet");i.setDrawColor(150,150,150),i.setLineWidth(.5),i.line(Number(O[1])+30-C/2,L+1.5,Number(O[1])+30+C/2,L+1.5),L+=12}if(E.item.Website_URL&&E.item.Website_URL!=="#"){i.setFontSize(8),i.setTextColor(120,120,120),i.textWithLink("Website",Number(O[1])+30,L,{url:E.item.Website_URL,align:"center"});const C=i.getTextWidth("Website");i.setDrawColor(150,150,150),i.setLineWidth(.5),i.line(Number(O[1])+30-C/2,L+1.5,Number(O[1])+30+C/2,L+1.5)}let Y=A+10;i.setFontSize(10),i.setTextColor("#222");const ue=i.splitTextToSize(String(E.item.Description||""),W-z-10);if(i.text(ue,z+5,Y),Y+=ue.length*12,E.item.LongDescription){i.setFontSize(9),i.setTextColor("#444");const C=i.splitTextToSize(String(E.item.LongDescription),W-z-10);i.text(C,z+5,Y),Y+=C.length*11}if(E.item.Notes){i.setFont("helvetica","italic"),i.setFontSize(9),i.setTextColor("#444");const C=i.splitTextToSize("Notes: "+String(E.item.Notes),W-z-10);i.text(C,z+5,Y),i.setFont("helvetica","normal")}if(e.excludePrice){i.setFontSize(10),i.setTextColor("#222");const C=A+10;i.text(String(E.item.Quantity||1),oe+20,C,{align:"center"})}else{i.setFontSize(10),i.setTextColor("#222");let C=NaN;E.item.RRP_INCGST&&(C=parseFloat(E.item.RRP_INCGST.toString().replace(/,/g,"")));const pe=C&&!isNaN(C)&&C>0?"$"+C.toFixed(2):"",me=E.item.Quantity||1,he=C&&!isNaN(C)?C*me:0,ge=he>0?"$"+he.toFixed(2):"",re=A+10;i.text(pe,W+30,re,{align:"center"}),i.text(me.toString(),oe+20,re,{align:"center"}),i.text(ge,ce+20,re,{align:"center"})}V++,ee++,setTimeout(ne,10)})})};ne()})})})}async _loadJSPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}_loadImageAsDataURL(e,t){const o=new Image;o.crossOrigin="Anonymous",o.onload=function(){const s=document.createElement("canvas"),n=s.getContext("2d"),r=400,c=150;let i=o.width,a=o.height;if(i>r||a>c){const d=r/i,m=c/a,h=Math.min(d,m);i=Math.round(i*h),a=Math.round(a*h)}s.width=i,s.height=a,n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(o,0,0,i,a);const l=s.toDataURL("image/png");console.log(`🖼️ Logo optimized: ${o.width}x${o.height} -> ${i}x${a} (${(l.length/1024).toFixed(1)}KB)`),t(l,i,a)},o.onerror=()=>t(null,0,0),o.src=e}_drawImage(e,t,o,s,n,r,c,i){if(!t||typeof t!="string"||t.length<10){i&&i();return}if(this.imageOptimizationStats.totalImages++,c){console.log("📧 Email mode: Skipping image for smaller file size"),this.imageOptimizationStats.failedImages++,i&&i();return}const a=this,d=`img_${this._generateImageHash(t)}`;let m=this.preloadedImageCache.get(t);if(!m){const h=getCachedImage(t);h&&h.dataUrl&&(m={url:h.dataUrl,format:h.format||"JPEG"})}if(m){this._addImageToPDF(e,m,o,s,n,r,d,i);return}this._optimizeImageForPDF(t,400,.8).then(h=>{if(!h||h.url==="assets/no-image.png"){a.imageOptimizationStats.failedImages++,i&&i();return}a._addImageToPDF(e,h,o,s,n,r,d,i)}).catch(h=>{console.warn("Image optimization failed:",h),a.imageOptimizationStats.failedImages++,i&&i()})}_addImageToPDF(e,t,o,s,n,r,c,i){const a=this,{url:l,format:d}=t;if(!l.startsWith("data:")){a.imageOptimizationStats.failedImages++,i&&i();return}const m=l.split(",")[1],h=m?m.length*.75:0;if(h>1048576){console.warn(`🚫 Image too large: ${Math.round(h/1024)} KB, skipping`),a.imageOptimizationStats.failedImages++,i&&i();return}const p=new Image;p.onload=function(){try{const f=p.naturalWidth/p.naturalHeight;let g=Math.min(n,120),w=Math.min(r,120);f>1?(w=g/f,w>120&&(w=120,g=w*f)):(g=w*f,g>120&&(g=120,w=g/f)),e.addImage(l,d,o,s,g,w,c,"FAST"),a.imageOptimizationStats.optimizedImages++}catch(f){console.warn("Failed to add image with aspect ratio:",f),e.addImage(l,d,o,s,Math.min(n,120),Math.min(r,120),c,"FAST"),a.imageOptimizationStats.optimizedImages++}i&&i()},p.onerror=function(){console.warn("Failed to load image for aspect ratio calculation"),e.addImage(l,d,o,s,Math.min(n,120),Math.min(r,120),c,"FAST"),a.imageOptimizationStats.optimizedImages++,i&&i()},p.src=l}_optimizeImageForPDF(e,t=400,o=.8){const s=this;return new Promise(n=>{if(!e||typeof e!="string"||!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("data:")){n({url:"assets/no-image.png",format:"PNG"});return}if((d=>{if(d.length<25||/\/images\/\d+$/.test(d)||d.endsWith("/0"))return!0;const m=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(d),h=d.startsWith("data:");return!m&&!h})(e)){console.warn("Skipping malformed image URL:",e.substring(0,60)+"..."),n({url:"assets/no-image.png",format:"PNG"});return}const c=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let i=0,a=!1;const l=()=>{if(a)return;const d=new Image;d.crossOrigin="Anonymous";let m=null;d.onload=function(){if(!a){a=!0,m&&clearTimeout(m);try{const p=document.createElement("canvas"),f=p.getContext("2d");let g=Math.min(t,400),w=Math.min(t,400);d.width>d.height?w=Math.round(g*d.height/d.width):g=Math.round(w*d.width/d.height),(d.width>100||d.height>100)&&(g=Math.max(g,200),w=Math.max(w,200)),p.width=g,p.height=w,f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(d,0,0,g,w);let x,y;const b=s._detectTransparency(p,f),S=s._isTechnicalDiagram(p,f);if(b||S)x=p.toDataURL("image/png",.9),y="PNG";else{const v=Math.max(o,.7);x=p.toDataURL("image/jpeg",v),y="JPEG"}n({url:x,format:y})}catch(p){console.warn("Image optimization failed:",p),n({url:"assets/no-image.png",format:"PNG"})}}},d.onerror=function(){a||(m&&clearTimeout(m),i++,i<c.length?setTimeout(l,500):(a=!0,console.warn("All proxies failed for image:",e.substring(0,50)),n({url:"assets/no-image.png",format:"PNG"})))},m=setTimeout(()=>{a||(console.warn(`⏰ Timeout loading image with proxy ${i}`),d.src="",d.onload=null,d.onerror=null,i++,i<c.length?setTimeout(l,200):(a=!0,console.warn("All proxies timed out for image"),n({url:"assets/no-image.png",format:"PNG"})))},3e3);let h=e;i<c.length&&(h=c[i]+encodeURIComponent(e)),d.src=h};l()})}_drawPDFHeader(e,t,o,s,n,r,c,i,a){const l=n+5.7;if(e.setFillColor("#a09484"),e.rect(0,0,t,l,"F"),r&&c&&i){const m=l*.55,h=c/i;let p=m*h;p>80&&(p=80);const f=(l-m)/2;e.addImage(r,"PNG",s,f,p,m,"header_logo","FAST")}e.setFontSize(10),e.setTextColor("#f4f4f4"),e.setFont("helvetica","normal");const d=l-8;e.text("Code",o[1]+30,d,{align:"center"}),e.text("Description",o[2]+(o[3]-o[2])/2,d,{align:"center"}),a?e.text("Qty",o[4]+20,d,{align:"center"}):(e.text("Price ea inc GST",o[3]+30,d,{align:"center"}),e.text("Qty",o[4]+20,d,{align:"center"}),e.text("Total",o[5]+20,d,{align:"center"}))}_finalizePDF(e,t,o,s,n,r,c,i,a,l,d){console.log(`✅ Finished processing all ${d} products, finalizing PDF...`);const m=e.internal.getNumberOfPages()-1;for(let h=2;h<=m+1;h++)e.setPage(h),this._drawPDFHeader(e,t,s,n,r,c,i,a,l.excludePrice),e.setFillColor("#c4c4bc"),e.rect(0,o-r,t,r,"F"),e.setTextColor("#fff"),e.setFontSize(11),e.text("www.seima.com.au",t-140,o-10),e.text("Page "+(h-1)+" of "+m,n,o-10)}_generatePDFFilename(e){const t=new Date,o=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getFullYear()).slice(-2),r=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${o}${s}${n}.${r}${c}.pdf`}_ensurePdfSpinner(){if(!document.getElementById("pdf-spinner")){const e=document.createElement("div");if(e.id="pdf-spinner",e.style.cssText=`
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
    `,document.body.appendChild(t)}_removeNotifications(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="none");const t=document.getElementById("pdf-processing-notification");t&&t.remove()}_resetImageOptimizationStats(){this.imageOptimizationStats={totalImages:0,optimizedImages:0,failedImages:0},this.imageAliasCache.clear()}_showImageOptimizationSummary(e=!1){const t=this.imageOptimizationStats;t.totalImages>0&&(console.log("🖼️ Image Optimization Summary:"),console.log(`   Total images: ${t.totalImages}`),console.log(`   Optimized: ${t.optimizedImages}`),console.log(`   Failed: ${t.failedImages}`),console.log(`   Success rate: ${(t.optimizedImages/t.totalImages*100).toFixed(1)}%`),console.log(`   Email compatible mode: ${e}`))}generateCSV(e){try{const t=dataService.getProductsLegacyFormat();if(!t.length)return console.warn("⚠️ No products found for CSV generation"),null;const o=t.map(a=>{const l=(a.RRP_INCGST||"").toString().replace(/,/g,""),d=parseFloat(l),m=isNaN(d)?"":(d*(a.Quantity||1)).toFixed(2),h=e.excludePrice;return{Code:this._sanitizeCSVField(a.OrderCode||""),Description:this._sanitizeCSVField(a.Description||""),Quantity:a.Quantity||1,"Price ea inc GST":h?"0.00":a.RRP_INCGST||"","Price Total inc GST":h?"0.00":m,Notes:this._sanitizeCSVField(a.Notes||""),Room:this._sanitizeCSVField(a.Room||""),"Image URL":this._sanitizeCSVField(a.Image_URL||""),"Diagram URL":this._sanitizeCSVField(a.Diagram_URL||""),"Datasheet URL":this._sanitizeCSVField(a.Datasheet_URL||""),"Website URL":this._sanitizeCSVField(a.Website_URL||"")}}),s=window.Papa.unparse(o,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"'}),n=this._buildCustomerMetadata(e,t),r=this._formatMetadataForCSV(n),c=s+r,i=this._sanitizeCSVForEmail(c);return console.log(`✅ CSV generated successfully (${i.length} characters, includes customer metadata)`),i}catch(t){throw console.error("❌ CSV generation failed:",t),t}}_buildCustomerMetadata(e,t){const o=e.leadData||window.currentLeadData||{},s=JSON.parse(localStorage.getItem("seimaStaffContact")||"{}"),n=new Date;return{_metadata:{date:n.toLocaleDateString("en-AU"),time:n.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit"})},customer:{name:e.name||o.customerName||"",email:e.email||o.customerEmail||"",phone:o.customerPhone||"",type:o.customerType||"",builderName:o.builderName||"",merchantName:o.merchantName||""},project:{name:o.projectName||"",address:o.projectAddress||"",notes:o.projectNotes||""},staff:{name:s.name||"",email:s.email||"",mobile:s.mobile||""}}}_formatMetadataForCSV(e){return`\r
\r
"---METADATA---"\r
"${JSON.stringify(e).replace(/"/g,'""')}"`}_sanitizeCSVField(e){return typeof e!="string"?String(e||""):e.replace(/"/g,'""').replace(/[\r\n]/g," ")}_sanitizeCSVForEmail(e){return e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,"").replace(/[^\x00-\x7F]/g,function(t){return{"€":"EUR","£":"GBP","¥":"YEN","©":"(c)","®":"(r)","™":"TM","…":"...","“":'"',"”":'"',"‘":"'","’":"'","–":"-","—":"-"}[t]||"?"}).replace(/\r?\n/g,`\r
`).replace(/\0/g,"")}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getFullYear()).slice(-2),c=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${n}${r}.${c}${i}.${t}`}}const pdfService=new PDFService;class AppService{constructor(){this.isInitialized=!1,this.services={data:dataService,email:emailService,pdf:pdfService},this.errorHandler=new ErrorHandler,this.isGeneratingPDF=!1}async init(){try{console.log("🚀 Initializing Seima Scanner services..."),this.services.data.migrateLegacyData();const e=CONFIG.EMAIL.PROVIDER||"emailjs";return await this.services.email.init(e),await this.services.pdf.init(),this.isInitialized=!0,console.log("✅ All services initialized successfully"),!0}catch(e){return console.error("❌ Service initialization failed:",e),this.errorHandler.handleError(e,"Service initialization"),!1}}addProduct(e,t="",o="",s=1){try{return this.services.data.addProduct(e,t,o,s)}catch(n){throw this.errorHandler.handleError(n,"Adding product"),n}}removeProduct(e){try{return this.services.data.removeProduct(e)}catch(t){throw this.errorHandler.handleError(t,"Removing product"),t}}updateProduct(e,t){try{return this.services.data.updateProduct(e,t)}catch(o){throw this.errorHandler.handleError(o,"Updating product"),o}}getSelectedProducts(){return this.services.data.getSelectedProducts()}getSelectionStats(){return this.services.data.getSelectionStats()}clearSelection(){try{this.services.data.clearSelection()}catch(e){throw this.errorHandler.handleError(e,"Clearing selection"),e}}async generateAndSendPDF(e){if(this.isGeneratingPDF)return console.warn("⚠️ PDF generation already in progress, ignoring duplicate request"),{success:!1,message:"PDF generation already in progress"};this.isGeneratingPDF=!0,this.isInitialized||await this.init();try{if(console.log("📄 Starting PDF generation and email process..."),!this.services.data.getSelectedProducts().length)throw new Error("No products selected");const o=await this.services.pdf.generatePDF(e);console.log(`✅ PDF generated successfully (${(o.size/1024/1024).toFixed(2)} MB)`);let s=null;if(e.exportCsv===!0&&(console.log("📊 Generating CSV file..."),s=this.services.pdf.generateCSV(e),s?console.log(`✅ CSV generated successfully (${s.length} characters)`):console.warn("⚠️ CSV generation returned no data")),e.sendEmail&&e.email){console.log("📧 Sending email with attachments...");const n=await this.services.email.sendEmail(e,o,s);return n.success?{success:!0,method:"email",pdfSize:o.size,message:"Email sent successfully with PDF attachment"}:{success:!1,method:"download_fallback",pdfSize:o.size,message:"Email failed, files downloaded instead",error:n.error}}else{if(console.log("💾 Starting direct file downloads..."),this._downloadFile(o,this.services.pdf.generateFileName(e,"pdf")),console.log("✅ PDF download initiated"),s){const n=new Blob([s],{type:"text/csv;charset=utf-8"});this._downloadFile(n,this.services.pdf.generateFileName(e,"csv")),console.log("✅ CSV download initiated")}else console.log("ℹ️ No CSV data to download");return{success:!0,method:"download",pdfSize:o.size,message:s?"PDF and CSV files downloaded successfully":"PDF file downloaded successfully"}}}catch(t){throw this.errorHandler.handleError(t,"PDF generation and sending"),t}finally{this.isGeneratingPDF=!1}}async testEmail(e=null){this.isInitialized||await this.init();try{return await this.services.email.testEmail(e)}catch(t){throw this.errorHandler.handleError(t,"Email testing"),t}}async switchEmailProvider(e,t=null){try{console.log(`🔄 Switching email provider to ${e}...`);const o=await this.services.email.init(e,t);return o?console.log(`✅ Email provider switched to ${e}`):console.error(`❌ Failed to switch to ${e}`),o}catch(o){throw this.errorHandler.handleError(o,"Email provider switching"),o}}getHealthStatus(){var e,t;return{initialized:this.isInitialized,dataService:this.services.data?"ready":"not ready",emailService:(e=this.services.email)!=null&&e.isInitialized?"ready":"not ready",pdfService:(t=this.services.pdf)!=null&&t.isInitialized?"ready":"not ready",selectedProducts:this.services.data.getSelectedProducts().length,timestamp:new Date().toISOString()}}getMigrationReadiness(){const e=this.getSelectionStats();return{ready:this.isInitialized,currentProvider:CONFIG.EMAIL.PROVIDER,microsoftGraphConfigured:!!(CONFIG.EMAIL.MICROSOFT_CLIENT_ID&&CONFIG.EMAIL.MICROSOFT_TENANT_ID),testingRecommended:e.totalProducts>0,migrationSteps:["1. Configure Microsoft Graph credentials in CONFIG.EMAIL",'2. Test email sending with switchEmailProvider("microsoftGraph")','3. Update CONFIG.EMAIL.PROVIDER to "microsoftGraph"',"4. Remove EmailJS dependencies"]}}getMigrationReadinessStatus(){return this.getMigrationReadiness()}getDebugAPI(){return{getHealthStatus:()=>this.getHealthStatus(),getMigrationReadiness:()=>this.getMigrationReadiness(),getMigrationReadinessStatus:()=>this.getMigrationReadiness(),switchToMicrosoftGraph:()=>this.switchEmailProvider("microsoftGraph"),testEmail:e=>this.testEmail(e),getErrorLog:()=>JSON.parse(localStorage.getItem("seimaErrorLog")||"[]"),clearErrorLog:()=>localStorage.removeItem("seimaErrorLog"),getSystemStatus:()=>this.getHealthStatus(),validateConfiguration:()=>({valid:this.isInitialized,details:this.getHealthStatus()})}}downloadWithFallback(e,t){try{this._downloadFile(e,t),console.log(`✅ Downloaded ${t}`)}catch(o){console.error("Download failed:",o);const s=URL.createObjectURL(e);window.open(s,"_blank"),setTimeout(()=>URL.revokeObjectURL(s),1e4)}}_downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}get emailService(){return this.services.email}get dataService(){return this.services.data}get pdfService(){return this.services.pdf}}class ErrorHandler{handleError(e,t="Unknown"){const o={message:e.message||"Unknown error",context:t,timestamp:new Date().toISOString(),stack:e.stack};console.error(`❌ Error in ${t}:`,o),this._showUserError(e,t),this._trackError(o)}_showUserError(e,t){let o="";switch(t){case"PDF generation and sending":o="Failed to generate or send PDF. Please check your selections and try again.";break;case"Email sending":o="Failed to send email. Files will be downloaded instead.";break;case"Adding product":o="Failed to add product to selection. Please try again.";break;case"Service initialization":o="Failed to initialize application services. Please refresh the page.";break;default:o=`An error occurred: ${e.message}`}window.showErrorMessage?window.showErrorMessage(o):alert(o)}_trackError(e){try{const t=JSON.parse(localStorage.getItem("seimaErrorLog")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("seimaErrorLog",JSON.stringify(t))}catch(t){console.warn("Could not store error log:",t)}}}class OCRService{constructor(){this.tesseractWorker=null,this.isInitialized=!1,this.isScanning=!1,this.scanInterval=null,this.isProcessing=!1,this.preprocessOptions={contrast:1.5,threshold:"auto",adaptive:!0,adaptiveOffset:0},this.ocrWorker=null,this.useWebWorker=!1,this.workerReady=!1,this.pendingRequests=new Map,this.requestId=0,this.canvas=null,this.ctx=null}get helpers(){const e=globalThis&&globalThis.ocrUtils||{};if(!e.cleanOcrText||!e.preprocessCanvasForOCR||!e.dedupeTextData)throw new Error("OCR utilities not loaded");return e}setPreprocessOptions(e={}){this.preprocessOptions={...this.preprocessOptions,...e}}getCanvas(e,t){return this.canvas||(this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})),this.canvas.width=e,this.canvas.height=t,{canvas:this.canvas,ctx:this.ctx}}async initialize(e=!0){if(this.isInitialized)return!0;if(e&&typeof Worker<"u")try{return await this.initializeWebWorker(),this.useWebWorker=!0,this.isInitialized=!0,console.log("✅ OCR initialized with Web Worker (off-main-thread)"),!0}catch(t){console.warn("⚠️ Web Worker initialization failed, falling back to direct mode:",t.message)}return await this.initializeDirect(),this.useWebWorker=!1,this.isInitialized=!0,console.log("✅ OCR initialized in direct mode"),!0}async initializeWebWorker(){return new Promise((e,t)=>{try{this.ocrWorker=new Worker("./js/ocr-worker.js");const o=setTimeout(()=>{t(new Error("Web Worker initialization timeout"))},1e4);this.ocrWorker.onmessage=s=>{const{type:n,id:r,results:c,error:i,success:a}=s.data;if(n==="ready")this.ocrWorker.postMessage({type:"init",id:"init"});else if(n==="init_complete")clearTimeout(o),this.workerReady=!0,e(!0);else if(n==="result"){const l=this.pendingRequests.get(r);l&&(l.resolve(c),this.pendingRequests.delete(r))}else if(n==="error")if(r==="init")clearTimeout(o),t(new Error(i));else{const l=this.pendingRequests.get(r);l&&(l.reject(new Error(i)),this.pendingRequests.delete(r))}},this.ocrWorker.onerror=s=>{clearTimeout(o),t(s)}}catch(o){t(o)}})}async initializeDirect(){if(this.tesseractWorker)return this.tesseractWorker;try{if(console.log("🔍 Initializing Tesseract directly..."),typeof Tesseract>"u")throw new Error("Tesseract.js not loaded. Please ensure the script is included.");return this.tesseractWorker=await Tesseract.createWorker("eng"),await this.tesseractWorker.setParameters({tessedit_char_whitelist:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -.,()",preserve_interword_spaces:"0",tessedit_pageseg_mode:"6"}),this.tesseractWorker}catch(e){throw console.error("❌ Failed to initialize Tesseract:",e),e}}canvasToBase64(e){return e.toDataURL("image/png")}async processWithWorker(e,t,o){return new Promise((s,n)=>{const r=`req_${++this.requestId}`,c=setTimeout(()=>{this.pendingRequests.delete(r),n(new Error("OCR processing timeout"))},3e4);this.pendingRequests.set(r,{resolve:i=>{clearTimeout(c),s(i)},reject:i=>{clearTimeout(c),n(i)}}),this.ocrWorker.postMessage({type:"process",id:r,data:{imageBase64:e,width:t,height:o}})})}async startScanning(e,t,o=1500){if(this.isScanning){console.warn("OCR scanning already in progress");return}if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw new Error("Video element not ready for OCR scanning");this.isScanning=!0,this.runScanLoop(e,t,o),console.log("✅ OCR scanning started"+(this.useWebWorker?" (Web Worker mode)":" (direct mode)"))}runScanLoop(e,t,o){this.isScanning&&(this.scanInterval&&clearTimeout(this.scanInterval),this.scanInterval=setTimeout(async()=>{if(this.isScanning){if(this.isProcessing||!e||e.paused||e.ended||e.readyState<2){this.runScanLoop(e,t,o);return}this.isProcessing=!0;try{const s=e.videoWidth||640,n=e.videoHeight||480;if(s===0||n===0){this.isProcessing=!1,this.runScanLoop(e,t,o);return}const{canvas:r,ctx:c}=this.getCanvas(s,n);c.drawImage(e,0,0,s,n);const{preprocessCanvasForOCR:i,dedupeTextData:a}=this.helpers,l=this.preprocessOptions;let d;if(this.useWebWorker&&this.workerReady){i(r,l);const h=this.canvasToBase64(r);d=await this.processWithWorker(h,s,n)}else{i(r,l);const h=await this.tesseractWorker.recognize(r);d=this.extractTextData(h,s,n)}const m=a(d);m.length>0&&(this.isScanning=!1,console.log("📝 OCR detected text with spatial data:",m.length,"items"),t(m))}catch(s){(!s.message||!s.message.includes("too small")&&!s.message.includes("cannot be recognized"))&&console.warn("OCR recognition error:",s)}finally{this.isProcessing=!1,this.isScanning&&this.runScanLoop(e,t,o)}}},o))}stopScanning(){this.scanInterval&&(clearTimeout(this.scanInterval),this.scanInterval=null),this.isScanning=!1,this.isProcessing=!1,console.log("🛑 OCR scanning stopped")}async captureAndProcessImage(e){if(this.isProcessing)return console.warn("OCR processing already in progress"),[];if(this.isInitialized||await this.initialize(),!e||e.paused||e.ended)throw new Error("Video element not ready for OCR capture");if(e.readyState<2)throw new Error("Video not ready - please wait a moment");this.isProcessing=!0;try{const t=e.videoWidth||640,o=e.videoHeight||480;if(t===0||o===0)throw new Error("Video dimensions not available");const{canvas:s,ctx:n}=this.getCanvas(t,o);n.drawImage(e,0,0,t,o);let r;const{preprocessCanvasForOCR:c,dedupeTextData:i}=this.helpers;if(this.useWebWorker&&this.workerReady){c(s,this.preprocessOptions);const l=this.canvasToBase64(s);r=await this.processWithWorker(l,t,o)}else{c(s,this.preprocessOptions);const l=await this.tesseractWorker.recognize(s);r=this.extractTextData(l,t,o)}const a=i(r);return console.log("📝 OCR detected text with spatial data:",a.length,"items"),console.log("📋 OCR Raw Data:",a.map(l=>({text:l.text,centerX:Math.round(l.centerX),centerY:Math.round(l.centerY),bbox:l.bbox}))),a}catch(t){throw console.error("OCR capture error:",t),t}finally{this.isProcessing=!1}}async captureAndProcessCanvas(e){if(this.isProcessing)return console.warn("OCR processing already in progress"),[];if(this.isInitialized||await this.initialize(),!e)throw new Error("No canvas provided for OCR processing");this.isProcessing=!0;try{const t=e.width,o=e.height;if(t===0||o===0)throw new Error("Canvas dimensions not available");let s;const{preprocessCanvasForOCR:n,dedupeTextData:r}=this.helpers;if(this.useWebWorker&&this.workerReady){n(e,this.preprocessOptions);const i=this.canvasToBase64(e);s=await this.processWithWorker(i,t,o)}else{n(e,this.preprocessOptions);const i=await this.tesseractWorker.recognize(e);s=this.extractTextData(i,t,o)}const c=r(s);return console.log("📝 OCR detected text with spatial data:",c.length,"items"),console.log("📋 OCR Raw Data:",c.map(i=>({text:i.text,centerX:Math.round(i.centerX),centerY:Math.round(i.centerY),bbox:i.bbox}))),c}catch(t){throw console.error("OCR canvas processing error:",t),t}finally{this.isProcessing=!1}}extractTextData(e,t,o){const{cleanOcrText:s}=this.helpers;return e.data.lines.map(n=>{const r=s(n.text);if(!r||r.length<3&&!/^19\d{4}$/.test(r))return null;const c=n.bbox||{x0:0,y0:0,x1:t,y1:o},i=(c.x0+c.x1)/2,a=(c.y0+c.y1)/2;return{text:r,bbox:c,centerX:i,centerY:a,width:t,height:o,confidence:n.confidence}}).filter(n=>n!==null&&n.text&&n.text.length>0)}getModeInfo(){return{initialized:this.isInitialized,mode:this.useWebWorker?"webworker":"direct",workerReady:this.workerReady}}async destroy(){if(this.stopScanning(),this.ocrWorker){try{this.ocrWorker.postMessage({type:"terminate",id:"terminate"}),this.ocrWorker.terminate()}catch{}this.ocrWorker=null,this.workerReady=!1}this.tesseractWorker&&(await this.tesseractWorker.terminate(),this.tesseractWorker=null),this.canvas=null,this.ctx=null,this.isInitialized=!1,this.pendingRequests.clear(),console.log("🧹 OCR service destroyed")}}const ocrService=new OCRService;class CatalogIndex{constructor(){this.byOrderCode=new Map,this.byBarcode=new Map,this.byNameExact=new Map,this.byNameWords=new Map,this.catalog=[],this.isBuilt=!1}build(e){if(!e||e.length===0){console.warn("CatalogIndex: Empty catalog provided");return}console.log(`🔨 Building catalog index for ${e.length} products...`);const t=performance.now();this.byOrderCode.clear(),this.byBarcode.clear(),this.byNameExact.clear(),this.byNameWords.clear(),this.catalog=e;for(const s of e){const n=(s.OrderCode||"").toString().trim().toUpperCase();n&&this.byOrderCode.set(n,s);const r=(s.BARCODE||s.Barcode||"").toString().trim();r&&this.byBarcode.set(r,s);const c=(s["Product Name"]||s.productName||"").toUpperCase().trim();if(c){this.byNameExact.set(c,s);const i=this.extractSignificantWords(c);for(const a of i)this.byNameWords.has(a)||this.byNameWords.set(a,new Set),this.byNameWords.get(a).add(s)}}this.isBuilt=!0;const o=(performance.now()-t).toFixed(2);console.log(`✅ Catalog index built in ${o}ms`),console.log(`   - OrderCodes: ${this.byOrderCode.size}`),console.log(`   - Barcodes: ${this.byBarcode.size}`),console.log(`   - Product Names: ${this.byNameExact.size}`),console.log(`   - Word Index: ${this.byNameWords.size} unique words`)}extractSignificantWords(e){return e.replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>2).map(t=>t.toUpperCase())}getByOrderCode(e){if(!e)return null;const t=e.toString().trim().toUpperCase();return this.byOrderCode.get(t)||null}getByBarcode(e){if(!e)return null;const t=e.toString().trim();return this.byBarcode.get(t)||null}getByNameExact(e){if(!e)return null;const t=e.toString().toUpperCase().trim();return this.byNameExact.get(t)||null}findByNameWords(e){if(!e)return[];const t=this.extractSignificantWords(e);if(t.length===0)return[];const o=t.map(n=>this.byNameWords.get(n)||new Set);if(o.length===0)return[];let s=new Set(o[0]);for(let n=1;n<o.length;n++)s=new Set([...s].filter(r=>o[n].has(r)));return Array.from(s)}fuzzyMatchOrderCode(e,t=1){if(!e)return null;const o=e.toString().trim().toUpperCase(),s=this.byOrderCode.get(o);if(s)return{product:s,distance:0,confidence:"high"};if(!/^19\d{4}$/.test(o))return null;let n=null,r=t+1;for(const[c,i]of this.byOrderCode){if(c.length!==o.length||!c.startsWith("19"))continue;const a=this.levenshteinDistance(o,c);a<=t&&a<r&&(r=a,n={product:i,distance:a,confidence:a===0?"high":"medium",originalCode:c})}return n}levenshteinDistance(e,t){if(e===t)return 0;if(e.length===0)return t.length;if(t.length===0)return e.length;const o=[];for(let s=0;s<=t.length;s++)o[s]=[s];for(let s=0;s<=e.length;s++)o[0][s]=s;for(let s=1;s<=t.length;s++)for(let n=1;n<=e.length;n++)t.charAt(s-1)===e.charAt(n-1)?o[s][n]=o[s-1][n-1]:o[s][n]=Math.min(o[s-1][n-1]+1,o[s][n-1]+1,o[s-1][n]+1);return o[t.length][e.length]}findSimilarOrderCodes(e,t=3){if(!e)return[];const o=e.toString().trim().toUpperCase(),s=[];for(const[n,r]of this.byOrderCode){if(n.length!==o.length)continue;const c=this.levenshteinDistance(o,n);c<=2&&s.push({code:n,product:r,distance:c})}return s.sort((n,r)=>n.distance-r.distance).slice(0,t)}fuzzyMatchProductName(e,t=1){if(!e||e.length<5)return[];const o=e.toUpperCase().trim(),s=[],n=[],r=o.match(/([A-Z]{4,})\s*(\d{3,4})/g);if(r&&r.forEach(i=>{const a=i.match(/([A-Z]{4,})\s*(\d{3,4})/);a&&n.push({name:a[1],number:a[2],full:`${a[1]} ${a[2]}`})}),n.length===0)return[];const c=new Map;for(const i of this.catalog){const a=(i["Product Name"]||i.productName||"").toUpperCase().trim();if(!a)continue;const l=a.match(/^([A-Z]+)\s+(\d{3,4})/);if(l){const d=`${l[1]} ${l[2]}`;c.has(d)||c.set(d,[]),c.get(d).push(i)}}for(const i of n)for(const[a,l]of c){const d=a.split(/\s+/),m=d[0],h=d[1];if(i.number!==h)continue;const p=this.levenshteinDistance(i.name,m);p<=t&&l.forEach(f=>{const g=s.find(w=>w.product.OrderCode===f.OrderCode);(!g||g.distance>p)&&(g&&s.splice(s.indexOf(g),1),s.push({product:f,distance:p,matchedFamily:a,ocrText:i.full,confidence:p===0?"high":"medium"}))})}return console.log(`🔍 Fuzzy name matching: "${e}" → found ${s.length} products`),s}getCatalog(){return this.catalog}isReady(){return this.isBuilt&&this.catalog.length>0}}const catalogIndex=new CatalogIndex;class OCRProductMatcher{static ensureIndexBuilt(e){(!catalogIndex.isReady()||catalogIndex.getCatalog()!==e)&&catalogIndex.build(e)}static findProductsByOcrTexts(e,t){var w,x;if(console.log("🔍 findProductsByOcrTexts called with",e.length,"items"),console.log("🔍 First item type:",e.length>0?typeof e[0]:"empty"),console.log("🔍 First item sample:",e.length>0?typeof e[0]=="string"?e[0].substring(0,50):JSON.stringify(e[0]).substring(0,100):"N/A"),this.ensureIndexBuilt(t),e.length>0&&typeof e[0]=="string"){console.log("⚠️  Using legacy format (array of strings)");const y=e;return this.findProductsByOcrTextsLegacy(y,t)}console.log("✅ Using new format (array of objects with spatial data)"),e.map(y=>y.text);const o=((w=e[0])==null?void 0:w.width)||640,s=((x=e[0])==null?void 0:x.height)||480,n=o*.2,r=o*.8,c=s*.2,i=s*.8,a=[],l=/^19\d{4}$/;for(let y=0;y<e.length;y++){const b=e[y],S=b.text;console.log(`🔎 Processing OCR text [${y+1}/${e.length}]: "${S}"`);let v=S.trim().toUpperCase();v=v.replace(/\s+/g," ").trim();const P=v.match(/19\s*\d\s*\d\s*\d\s*\d/);P&&(v=P[0].replace(/\s/g,""));const M=b.centerX>=n&&b.centerX<=r&&b.centerY>=c&&b.centerY<=i?1:.3;if(l.test(v)){const I=catalogIndex.getByOrderCode(v);if(I){console.log(`✅ OrderCode match: "${S}" → ${I.OrderCode} (${(I["Product Name"]||I.Description||"").substring(0,40)})`),a.push({text:S,type:"OrderCode",confidence:"high",product:I,centerX:b.centerX,centerY:b.centerY,centerScore:M});continue}else{const k=catalogIndex.fuzzyMatchOrderCode(v,1);if(k){console.log(`✅ Fuzzy OrderCode match: "${S}" → ${k.product.OrderCode} (distance: ${k.distance})`),a.push({text:S,type:"OrderCode",confidence:k.distance===0?"high":"medium",product:k.product,centerX:b.centerX,centerY:b.centerY,centerScore:M,fuzzyMatch:k.distance>0});continue}console.log(`❌ OrderCode "${v}" not found in catalog (even with fuzzy matching)`)}}const te=v.match(/19\d{4}/);if(te){const I=te[0];let k=catalogIndex.getByOrderCode(I);if(k){console.log(`✅ Partial OrderCode match: "${S}" → ${I} (${(k["Product Name"]||k.Description||"").substring(0,40)})`),a.push({text:S,type:"OrderCode",confidence:"medium",product:k,centerX:b.centerX,centerY:b.centerY,centerScore:M});continue}const $=catalogIndex.fuzzyMatchOrderCode(I,1);if($){console.log(`✅ Fuzzy partial match: "${S}" → ${$.product.OrderCode} (distance: ${$.distance})`),a.push({text:S,type:"OrderCode",confidence:"medium",product:$.product,centerX:b.centerX,centerY:b.centerY,centerScore:M,fuzzyMatch:!0});continue}}const R=I=>I.replace(/\s+/g," ").replace(/[^\w\s]/g,"").trim(),B=R(v);if(B.length<5)console.log(`⏭️  Skipping product name match for short text: "${S}"`);else if(!/^[A-Z]+(\s+[A-Z]+)*(\s+\d+)?/.test(B))console.log(`⏭️  Skipping product name match - doesn't look like product name: "${S}"`);else{let k=catalogIndex.getByNameExact(v);if(k){console.log(`📝 Exact Product Name match: "${S}" → ${k.OrderCode}`),a.push({text:S,type:"ProductName",confidence:"high",product:k,centerX:b.centerX,centerY:b.centerY,centerScore:M});continue}const q=catalogIndex.findByNameWords(B).filter(j=>{const J=(j["Product Name"]||j.productName||"").toUpperCase().trim();if(!J)return!1;const K=R(J);return!!(K.startsWith(B)&&B.length>=6||B.startsWith(K.split(/\s+/).slice(0,2).join(" "))&&B.length>=6)});if(q.length>0){console.log(`📝 Product Name match: "${S}" → ${q.length} products`),q.forEach(j=>{a.push({text:S,type:"ProductName",confidence:"medium",product:j,centerX:b.centerX,centerY:b.centerY,centerScore:M})});continue}}const N=catalogIndex.fuzzyMatchProductName(S,1);if(N.length>0){console.log(`🔄 Fuzzy Product Name match: "${S}" → ${N.length} products (${N[0].matchedFamily})`),N.forEach(I=>{a.push({text:S,type:"ProductName",confidence:I.confidence,product:I.product,centerX:b.centerX,centerY:b.centerY,centerScore:M,fuzzyMatch:I.distance>0,matchedFamily:I.matchedFamily})});continue}console.log(`❌ No match for: "${S}"`)}const d=[],m=new Set;for(const y of a){const b=(y.product.OrderCode||"").toString().trim();b&&!m.has(b)&&(m.add(b),d.push(y))}console.log("🔍 Total unique matches found:",d.length),console.log("📦 Matched Products:",d.map(y=>({orderCode:y.product.OrderCode,name:(y.product["Product Name"]||y.product.Description||"").substring(0,50),type:y.type,confidence:y.confidence,centerScore:y.centerScore})));const h=d.filter(y=>y.type==="OrderCode"&&y.confidence==="high"),p=new Set(h.map(y=>y.product.OrderCode));if(p.size>1)return console.log("✅ Multiple distinct OrderCodes detected:",Array.from(p)),console.log("📋 Showing all OrderCode matches (",h.length,"products)"),h.sort((y,b)=>b.centerScore-y.centerScore);const f=this.groupByProductFamily(d);if(console.log("👥 Product Families Detected:",f.map(y=>({familyName:y.familyName,matchCount:y.matches.length,orderCodes:y.matches.map(b=>b.product.OrderCode).slice(0,5)}))),f.length===1)return console.log("✅ Single product family detected:",f[0].familyName),f[0].matches;const g=f.map(y=>{const b=y.matches.filter(F=>F.centerScore>=.7),S=b.length/Math.max(y.matches.length,1),v=y.matches.length/d.length,P=S*.7+v*.3;return console.log(`📊 Family "${y.familyName}":`,{totalMatches:y.matches.length,centerMatches:b.length,centerScore:S.toFixed(2),frequencyScore:v.toFixed(2),totalScore:P.toFixed(2)}),{...y,centerScore:S,frequencyScore:v,totalScore:P}});return g.sort((y,b)=>b.totalScore-y.totalScore),g.length>1&&g[0].totalScore>.7?(console.log("🎯 Auto-selecting dominant product family:",g[0].familyName,"with score:",g[0].totalScore.toFixed(2)),g[0].matches):(console.log("🔀 Multiple product families detected:",g.map(y=>`${y.familyName} (${y.matches.length} products, score: ${y.totalScore.toFixed(2)})`)),console.log("📋 Families array:",g),{families:g,requiresSelection:!0})}static groupByProductFamily(e){const t=new Map;for(const s of e){const n=s.product,r=(n["Product Name"]||n.productName||n.Description||"").toUpperCase().trim(),c=r.match(/^([A-Z]+(?:\s+[A-Z]+)?)\s*(\d+)/);let i=r;if(c)i=`${c[1]} ${c[2]}`.trim();else{const a=r.split(/\s+/).filter(l=>l.length>2);a.length>=2?i=`${a[0]} ${a[1]}`:a.length===1&&(i=a[0])}console.log(`🏷️  Product "${r.substring(0,40)}..." → Family: "${i}" (OrderCode: ${n.OrderCode})`),t.has(i)||t.set(i,[]),t.get(i).push(s)}const o=Array.from(t.entries()).map(([s,n])=>({familyName:s,matches:n.sort((r,c)=>{const i={high:3,medium:2,low:1};return i[c.confidence]!==i[r.confidence]?i[c.confidence]-i[r.confidence]:c.centerScore-r.centerScore})}));return console.log("👨‍👩‍👧‍👦 Grouped into",o.length,"families:",o.map(s=>`${s.familyName} (${s.matches.length})`)),o}static findProductsByOcrTextsLegacy(e,t){this.ensureIndexBuilt(t);const o=[],s=/^19\d{4}$/;for(const c of e){let i=c.trim().toUpperCase();i=i.replace(/\s+/g," ").trim();const a=i.match(/19\s*\d\s*\d\s*\d\s*\d/);if(a&&(i=a[0].replace(/\s/g,"")),s.test(i)){let f=catalogIndex.getByOrderCode(i);if(f){o.push({text:c,type:"OrderCode",confidence:"high",product:f});continue}const g=catalogIndex.fuzzyMatchOrderCode(i,1);if(g){o.push({text:c,type:"OrderCode",confidence:"medium",product:g.product,fuzzyMatch:!0});continue}}const l=i.match(/19\d{4}/);if(l){const f=l[0];let g=catalogIndex.getByOrderCode(f);if(g){o.push({text:c,type:"OrderCode",confidence:"medium",product:g});continue}const w=catalogIndex.fuzzyMatchOrderCode(f,1);if(w){o.push({text:c,type:"OrderCode",confidence:"medium",product:w.product,fuzzyMatch:!0});continue}}const m=(f=>f.replace(/\s+/g," ").replace(/[^\w\s]/g,"").trim())(i);let h=catalogIndex.getByNameExact(i);if(h){o.push({text:c,type:"ProductName",confidence:"high",product:h});continue}const p=catalogIndex.findByNameWords(m);if(p.length>0){p.forEach(f=>{o.push({text:c,type:"ProductName",confidence:"medium",product:f})});continue}}const n=[],r=new Set;for(const c of o){const i=(c.product.OrderCode||"").toString().trim();i&&!r.has(i)&&(r.add(i),n.push(c))}return n.sort((c,i)=>{const a={high:3,medium:2,low:1};return a[i.confidence]-a[c.confidence]}),n}}class StorageManager{static getCustomRooms(){return Utils.getStorageItem(CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,[])}static setCustomRooms(e){return Utils.setStorageItem(CONFIG.STORAGE_KEYS.CUSTOM_ROOMS,e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=Utils.sanitizeInput(e,50);return!o||[...CONFIG.ROOMS.PREDEFINED.map(n=>n.name),...t.map(n=>n.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return Utils.getStorageItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,[])}static setSelectedProducts(e){return Utils.setStorageItem(CONFIG.STORAGE_KEYS.SELECTED_PRODUCTS,e)}static addProductToSelection(e,t,o,s){const n=this.getSelectedProducts(),r={id:Utils.generateId(),product:Utils.deepClone(e),notes:Utils.sanitizeInput(t,CONFIG.UI.ANNOTATION_MAX_LENGTH),room:Utils.sanitizeInput(o,50),quantity:Math.max(1,Math.min(999,parseInt(s)||1)),timestamp:Date.now()};return n.push(r),this.setSelectedProducts(n)}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].quantity=Math.max(1,Math.min(999,parseInt(t)||1)),this.setSelectedProducts(o)):!1}static updateProductDetails(e,t={}){const o=this.getSelectedProducts(),s=o.findIndex(c=>c.id===e);if(s===-1)return!1;const r={...o[s],...t};return t.notes!==void 0&&(r.notes=Utils.sanitizeInput(t.notes,CONFIG.UI.ANNOTATION_MAX_LENGTH)),t.room!==void 0&&(r.room=Utils.sanitizeInput(t.room,50)),t.quantity!==void 0&&(r.quantity=Math.max(1,Math.min(999,parseInt(t.quantity)||1))),t.product&&(r.product=Utils.deepClone(t.product)),o[s]=r,this.setSelectedProducts(o)}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getStaffContactDetails(){try{const e=localStorage.getItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT);return e?JSON.parse(e):null}catch(e){return console.error("Error getting staff contact details:",e),null}}static setStaffContactDetails(e){try{return localStorage.setItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT,JSON.stringify(e)),!0}catch(t){return console.error("Error saving staff contact details:",t),!1}}static clearStaffContactDetails(){try{return localStorage.removeItem(CONFIG.STORAGE_KEYS.STAFF_CONTACT),!0}catch(e){return console.error("Error clearing staff contact details:",e),!1}}}class HybridScannerController{constructor(){this.isScanning=!1,this.scannerEngine="detector",this.onScanCallback=null,this.lastScannedCode=null,this.scanTimeout=null,this.videoElement=null,this.barcodeDetector=null,this.streamRef=null,this.scanningRef=!1,this.detectorReady=!1}async initialize(){try{if("BarcodeDetector"in window)console.log("Using native Barcode Detection API");else{console.log("Using WebAssembly polyfill for iOS/Safari");let e=0;for(;!window.polyfillReady&&e<50;)await new Promise(t=>setTimeout(t,100)),e++;if(window.barcodeDetectorPolyfill&&window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill)window.BarcodeDetector=window.barcodeDetectorPolyfill.BarcodeDetectorPolyfill,console.log("✅ Polyfill assigned to window.BarcodeDetector");else throw console.error("Polyfill not available after waiting. polyfillReady:",window.polyfillReady),console.error("Available barcode keys:",Object.keys(window).filter(t=>t.toLowerCase().includes("barcode"))),new Error("BarcodeDetector polyfill not loaded")}this.barcodeDetector=new window.BarcodeDetector({formats:["ean_13"]}),this.detectorReady=!0,console.log("✅ Scanner initialized successfully")}catch(e){throw console.error("Error initializing barcode detector:",e),this.detectorReady=!1,e}}setOnScanCallback(e){this.onScanCallback=e}async startScanning(e="barcode"){if(this.isScanning&&e==="barcode")return;if(!document.getElementById("scanner-viewport")){console.error("Scanner viewport not found");return}try{if(this.isScanning&&this.streamRef&&(this.streamRef.getTracks().forEach(o=>o.stop()),this.streamRef=null,this.videoElement=null),e==="barcode"&&!this.detectorReady&&(console.log("Initializing scanner..."),await this.initialize()),e==="barcode"&&!this.detectorReady){console.error("Scanner not ready after initialization"),this.showCameraError();return}this.isScanning=!0,this.scanningRef=e==="barcode",this.lastScannedCode=null,await this.startDetectorScanning(e)}catch(o){console.error("Failed to start scanner:",o),console.error("Error details:",o.name,o.message),this.showCameraError(),this.isScanning=!1,this.scanningRef=!1}}async startDetectorScanning(e="barcode"){const t=document.getElementById("scanner-viewport");this.videoElement=document.createElement("video"),this.videoElement.style.width="100%",this.videoElement.style.height="100%",this.videoElement.style.objectFit="cover",t.innerHTML="",t.appendChild(this.videoElement);try{const o={facingMode:"environment"};e==="text"?(o.width={ideal:1920,min:1280},o.height={ideal:1080,min:720},o.focusMode="continuous",o.advanced=[{focusMode:"continuous"},{exposureMode:"continuous"}]):(o.width={ideal:1280},o.height={ideal:720});const s=await navigator.mediaDevices.getUserMedia({video:o});this.streamRef=s,this.videoElement.srcObject=s,this.videoElement.setAttribute("playsinline","true"),await this.videoElement.play(),e==="text"?console.log("📷 Camera started in text capture mode (higher resolution)"):this.scanBarcodes()}catch(o){if(console.error("Error starting scanner:",o),e==="text")try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}}});this.streamRef=s,this.videoElement.srcObject=s,await this.videoElement.play(),console.log("📷 Camera started with fallback settings")}catch{this.showCameraError("Camera access denied or unavailable"),this.isScanning=!1}else this.showCameraError("Camera access denied or unavailable"),this.isScanning=!1}}async scanBarcodes(){if(!(!this.scanningRef||!this.videoElement)){if(this.videoElement.readyState<2){this.scanningRef&&setTimeout(()=>this.scanBarcodes(),200);return}try{const e=await this.barcodeDetector.detect(this.videoElement);if(e&&e.length>0){const t=e[0];if(t.format==="ean_13"){const o=t.rawValue;this.stopScanning(),navigator.vibrate&&navigator.vibrate(200),this.onScanCallback&&this.onScanCallback(o,null);return}}this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}catch(e){console.error("Detection error:",e),this.scanningRef&&setTimeout(()=>this.scanBarcodes(),100)}}}stopScanning(){this.isScanning&&(this.isScanning=!1,this.scanningRef=!1,this.streamRef&&(this.streamRef.getTracks().forEach(e=>e.stop()),this.streamRef=null),this.videoElement&&(this.videoElement.srcObject&&(this.videoElement.srcObject=null),this.videoElement=null),this.scanTimeout&&(clearTimeout(this.scanTimeout),this.scanTimeout=null))}isValidBarcode(e){return/^\d{8}$|^\d{12,13}$/.test(e)}provideHapticFeedback(){navigator.vibrate&&navigator.vibrate(50)}showCameraError(){const e=document.getElementById("scanner-viewport");e&&(e.innerHTML=`
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; text-align: center; padding: 20px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
          <h3>Camera Access Required</h3>
          <p>Please allow camera access to scan barcodes, or use manual entry below.</p>
          <button onclick="window.scannerController.startScanning()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer;">Try Again</button>
        </div>
      `)}setManualBarcode(e){e&&this.isValidBarcode(e)&&(this.lastScannedCode=e,this.stopScanning(),this.provideHapticFeedback(),this.onScanCallback&&this.onScanCallback(e,null))}setScannerEngine(e){console.log("setScannerEngine is deprecated - using BarcodeDetector automatically")}getScannerInfo(){return{engine:this.scannerEngine,isNative:"BarcodeDetector"in window&&!window.barcodeDetectorPolyfill,hasNativeSupport:"BarcodeDetector"in window,detectorReady:this.detectorReady}}playScanSound(){try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),o=e.createGain();t.connect(o),o.connect(e.destination),t.frequency.value=800,t.type="sine",o.gain.setValueAtTime(.1,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),t.start(e.currentTime),t.stop(e.currentTime+.1)}catch{}}destroy(){this.stopScanning()}}class NavigationManager{constructor(){this.currentScreen="welcome",this.selectedRoom=null,this.scannerController=new HybridScannerController,this.dataService=dataService,this.reviewSortables=[],this.currentEditSelectionId=null,this.setupScannerCallback()}setupScannerCallback(){this.scannerController.setOnScanCallback(e=>{if(!this.dataService.isLoaded){this.showScanFeedback("Product data loading, please wait...");return}this.showScanFeedback(`Detected: ${e}`);const t=this.dataService.findProductByBarcode(e);t?this.showProductDetailsScreen(t,{scannedCode:e}):(this.showScanFeedback(`Barcode not found: ${e}`),setTimeout(()=>{this.scannerController&&this.scannerController.startScanning()},1500))})}async init(){try{await this.dataService.init()}catch(e){console.error("Failed to load product catalog:",e)}this.setupWelcomeScreen(),this.updateSelectionCount(),setTimeout(()=>{console.log("🚀 Initializing scanner..."),this.scannerController.initialize().then(()=>{console.log("✅ Scanner pre-initialized and ready")}).catch(e=>{console.error("❌ Scanner pre-initialization failed:",e)})},100)}setupWelcomeScreen(){const e=document.getElementById("start-btn"),t=document.getElementById("view-selection-btn"),o=document.getElementById("clear-selection-btn"),s=document.getElementById("settings-btn");e&&(e.onclick=()=>this.showRoomSelection()),t&&(t.onclick=()=>this.showReviewScreen()),o&&(o.onclick=()=>this.showClearConfirmModal()),s&&(s.onclick=()=>this.showSeimaContactModal()),this.setupSeimaContactModal(),this.loadVersion()}async loadVersion(){try{const o=(await(await fetch("version.txt")).text()).trim().split(`
`);if(o.length>0){const n=o[0].match(/^([\d.]+(?:\s*\([^)]+\))?)/);if(n){const r=document.getElementById("version-number");r&&(r.textContent=n[1])}}}catch(e){console.warn("Could not load version:",e)}}async showRoomSelection(){try{const t=await(await fetch("screens/room-selection.html")).text();document.body.innerHTML=t,this.currentScreen="room-selection",this.renderRoomGrid();const o=document.getElementById("back-to-welcome"),s=document.getElementById("add-custom-room");o&&(o.onclick=()=>location.reload()),s&&(s.onclick=()=>this.handleAddCustomRoom())}catch(e){console.error("Failed to load room selection screen:",e)}}renderRoomGrid(){const e=document.getElementById("room-grid");if(!e)return;e.innerHTML="",CONFIG.ROOMS.PREDEFINED.forEach(o=>{const s=document.createElement("button");s.className="room-btn",s.innerHTML=`<span class="room-icon">${o.icon}</span>${o.name}`,s.onclick=()=>this.selectRoom(o.name),e.appendChild(s)}),StorageManager.getCustomRooms().forEach((o,s)=>{const n=document.createElement("button");n.className="room-btn",n.innerHTML=`<span class="room-icon">📝</span>${o.name}`,n.onclick=()=>this.selectRoom(o.name),n.ondblclick=()=>this.handleRemoveCustomRoom(s),n.title="Double-click to remove",e.appendChild(n)})}selectRoom(e){this.selectedRoom=e,this.showScannerScreen()}async showScannerScreen(){if(this._loadingScannerScreen){console.log("Scanner screen already loading");return}this._loadingScannerScreen=!0;let e=null;try{this.scannerController.stopScanning(),console.log("🎥 Requesting camera permission...");try{if(navigator.permissions&&navigator.permissions.query)try{const n=await navigator.permissions.query({name:"camera"});console.log("Camera permission status:",n.state),n.state==="granted"?console.log("✅ Camera permission already granted, skipping temp stream"):(e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(r=>{r.stop()}),e=null))}catch{console.log("Permissions API query failed, requesting stream directly"),e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(r=>{r.stop()}),e=null)}else e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),console.log("✅ Camera permission granted"),e&&(e.getTracks().forEach(n=>{n.stop()}),e=null)}catch(n){console.error("❌ Camera permission denied:",n),this._loadingScannerScreen=!1;let r="Camera access denied or unavailable.";n.name==="NotAllowedError"?r="Camera access denied. Please enable camera permissions in your browser settings.":n.name==="NotFoundError"?r="No camera found on this device.":n.name==="NotReadableError"&&(r="Camera is already in use by another application."),alert(r);return}const o=await(await fetch("screens/scanner.html")).text();document.body.innerHTML=o,this.currentScreen="scanner";const s=document.getElementById("current-room-badge");s&&(s.textContent=this.selectedRoom),this.setupScannerScreenHandlers(),this.showBarcodeScanOverlay(),this.scannerController.startScanning().catch(n=>{console.error("Failed to start scanner:",n)}),this.updateSelectionCount()}catch(t){console.error("Failed to load scanner screen:",t),alert("Failed to load scanner. Please try again.")}finally{e&&e.getTracks().forEach(t=>t.stop()),this._loadingScannerScreen=!1}}setupScannerScreenHandlers(){const e=document.getElementById("back-to-rooms"),t=document.getElementById("review-btn"),o=document.getElementById("text-scan-btn"),s=document.getElementById("scanner-engine-toggle");e&&(e.onclick=()=>{this.scannerController.stopScanning(),ocrService.stopScanning(),this.showRoomSelection()}),t&&(t.onclick=()=>{this.scannerController.stopScanning(),ocrService.stopScanning(),this.showReviewScreen()}),o&&(o.onclick=()=>this.startTextScanMode()),s&&(s.value=this.scannerController.scannerEngine,s.onchange=()=>{this.scannerController.setScannerEngine(s.value),this.scannerController.stopScanning(),setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)}),this.setupProductSearch()}setupProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("product-search-dropdown");if(!e||!t)return;let o=[];const s=Utils.debounce(n=>{this.performProductSearch(n,t,o)},300);e.addEventListener("focus",()=>{this.scannerController.stopScanning(),setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center"})},100)}),e.addEventListener("blur",()=>{setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)}),e.addEventListener("input",()=>{const n=e.value.trim();n?s(n):(t.innerHTML="",t.classList.remove("visible"))}),t.onclick=n=>{const r=n.target.closest("li[data-idx]");if(!r)return;const c=parseInt(r.getAttribute("data-idx"),10);!isNaN(c)&&o[c]&&this.showProductDetailsScreen(o[c]),t.classList.remove("visible"),e.value="",setTimeout(()=>{this.currentScreen==="scanner"&&this.scannerController.startScanning()},100)},document.addEventListener("click",n=>{!t.contains(n.target)&&n.target!==e&&t.classList.remove("visible")})}performProductSearch(e,t,o){if(!this.dataService.isLoaded){t.innerHTML="<li>Loading catalog...</li>",t.classList.add("visible");return}o.length=0,o.push(...this.dataService.searchProducts(e)),o.length===0?t.innerHTML="<li>No products found</li>":t.innerHTML=o.map((s,n)=>`<li data-idx="${n}">${s.OrderCode} - ${s.Description}</li>`).join(""),t.classList.add("visible")}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.currentEditSelectionId=t.mode==="edit"&&t.selectionId||null,this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e,t)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?"Code: "+e.OrderCode:"";let s="",n=NaN;e.RRP_INCGST&&(n=parseFloat(e.RRP_INCGST.toString().replace(/,/g,""))),!isNaN(n)&&n>0?s=`$${n.toFixed(2)} inc GST`:s="Price unavailable",document.getElementById("product-price-inline").textContent=s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const r=document.getElementById("diagram-link"),c=document.getElementById("datasheet-link"),i=document.getElementById("website-link");if([r,c,i].forEach(a=>{a&&(a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantityInput(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.room){const a=document.getElementById("room-select");if(a){if(!Array.from(a.options).some(d=>d.value===t.room)){const d=document.createElement("option");d.value=t.room,d.textContent=t.room,a.appendChild(d)}a.value=t.room}}if(t.quantity){const a=document.getElementById("product-quantity");a&&(a.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}async restartTextCamera(e="Ready to capture"){try{await this.scannerController.startScanning("text"),e&&this.showScanFeedback(e)}catch(t){console.error("Failed to restart camera:",t),this.showScanFeedback("Camera error - please try again")}}populateRoomSelect(){const e=document.getElementById("room-select");if(!e)return;e.innerHTML="",CONFIG.ROOMS.PREDEFINED.forEach(s=>{const n=document.createElement("option");n.value=s.name,n.textContent=s.name,s.name===this.selectedRoom&&(n.selected=!0),e.appendChild(n)}),StorageManager.getCustomRooms().forEach(s=>{const n=document.createElement("option");n.value=s.name,n.textContent=s.name,s.name===this.selectedRoom&&(n.selected=!0),e.appendChild(n)});const o=document.createElement("option");o.value="__add_new_room__",o.textContent="+ Add New Room / Group...",o.style.fontStyle="italic",e.appendChild(o),e.removeEventListener("change",this._roomSelectHandler),this._roomSelectHandler=s=>this.handleRoomSelectChange(s),e.addEventListener("change",this._roomSelectHandler)}handleRoomSelectChange(e){const t=e.target;t.value==="__add_new_room__"&&(t.selectedIndex=0,this.showAddRoomModal(o=>{const s=o.trim();if(Array.from(t.options).map(c=>c.value.toLowerCase()).includes(s.toLowerCase())){alert("This room already exists.");const c=Array.from(t.options).find(i=>i.value.toLowerCase()===s.toLowerCase());c&&(t.value=c.value);return}StorageManager.addCustomRoom(s);const r=document.createElement("option");r.value=s,r.textContent=s,t.insertBefore(r,t.options[t.options.length-1]),t.value=s,this.selectedRoom=s}))}setupQuantityInput(){const e=document.getElementById("product-quantity");e&&(e.addEventListener("blur",()=>{let t=parseInt(e.value,10);(isNaN(t)||t<1)&&(t=1),t>999&&(t=999),e.value=t}),e.addEventListener("focus",()=>{e.select()}))}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let r=[];n&&(r=this.dataService.getAllProducts().filter(c=>{let i=c.ProductName||c["Product Name"]||"";return typeof i=="string"&&(i=i.trim()),i&&i===n})),r.length>1?(r.sort((c,i)=>(c.Description||"").localeCompare(i.Description||"")),o.style.display="",s.innerHTML=r.map(c=>`<option value="${c.OrderCode}"${c.OrderCode===e.OrderCode?" selected":""}>${c.Description}</option>`).join(""),s.onchange=()=>{var a;const c=s.value,i=r.find(l=>l.OrderCode===c);if(i&&i.OrderCode!==e.OrderCode){const l=((a=document.getElementById("product-annotation"))==null?void 0:a.value)||t.notes||"",d=document.getElementById("product-quantity");let m=1;d&&d.value?m=Math.max(1,parseInt(d.value,10)||1):t.quantity&&(m=t.quantity);const h=document.getElementById("room-select"),p=h?h.value:t.room;this.showProductDetailsScreen(i,{...t,notes:l,quantity:m,room:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",function(){t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=t.value.length+"/140"}),t.addEventListener("keydown",function(s){s.key==="Enter"&&s.preventDefault()}),o.textContent=t.value.length+"/140",e.notes&&(t.value=e.notes,o.textContent=t.value.length+"/140"))}setupAnnotationField(){}setupProductDetailsHandlers(e,t={}){const o=document.getElementById("back-to-scanner"),s=document.getElementById("add-to-room-btn"),n=document.getElementById("delete-selection-btn");o&&(o.onclick=()=>{t.mode==="edit"?this.showReviewScreen():this.showScannerScreen()}),s&&(t.mode==="edit"&&t.selectionId?(s.textContent="Save",s.onclick=()=>this.saveEditedProduct(e,t)):(s.textContent="Add to Group",s.onclick=()=>this.addProductToSelection(e))),n&&(t.mode==="edit"&&t.selectionId?(n.style.display="block",n.onclick=()=>this.showDeleteModal(e,t)):(n.style.display="none",n.onclick=null))}saveEditedProduct(e,t){if(!t.selectionId)return;const o=document.getElementById("room-select"),s=document.getElementById("product-quantity"),n=document.getElementById("product-annotation"),r=o?o.value:"",c=s?Math.max(1,parseInt(s.value,10)||1):1,i=n?n.value:"";if(!StorageManager.updateProductDetails(t.selectionId,{product:Utils.deepClone(e),room:r,quantity:c,notes:i})){alert("Unable to save changes. Please try again.");return}this.currentEditSelectionId=null,this.showReviewScreen()}showDeleteModal(e,t){const o=document.getElementById("delete-confirm-modal");if(!o||!t.selectionId)return;const s=document.getElementById("delete-confirm-message");s&&(s.textContent="Confirm delete");const n=document.getElementById("delete-cancel-btn"),r=document.getElementById("delete-confirm-btn");n&&(n.onclick=()=>{o.style.display="none"}),r&&(r.onclick=()=>{const c=StorageManager.removeProductFromSelection(t.selectionId);if(o.style.display="none",!c){alert("Unable to remove this product. Please try again.");return}this.currentEditSelectionId=null,this.showReviewScreen()}),o.onclick=c=>{c.target===o&&(o.style.display="none")},o.style.display="flex"}escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),n=t?t.value:this.selectedRoom,r=o?parseInt(o.value):1,c=s?s.value:"";StorageManager.addProductToSelection(e,c,n,r)?this.showReviewScreen():alert("Failed to add product to selection")}async showReviewScreen(){try{const t=await(await fetch("screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-scanner"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showScannerScreen()),t&&(t.onclick=()=>this.showScannerScreen()),o&&(console.log("📧 Email button available - lead wizard integration will handle it"),window.leadWizardIntegration||(console.log("⚠️ Lead wizard integration not available, using fallback"),o.onclick=()=>this.showPdfFormModal()))}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=StorageManager.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block"),this.destroyReviewSortables();return}t&&(t.style.display="none");const s=this.groupProductsByRoom(o);e.innerHTML=Object.entries(s).map(([n,r])=>`
      <div class="review-room-group" data-room="${n}">
        <div class="review-room-header">${n} <span class="room-count">(${r.length})</span></div>
        <div class="review-room-items" data-room="${n}">
        ${r.map(c=>{const i=c.product,a=i.Description||i.description||i.productName||i["Product Name"]||"Product",l=i.OrderCode||i.orderCode||"",d=i.Image_URL||i.imageUrl||"assets/no-image.png",m=i.RRP_INCGST||i.rrpIncGst||i.price||"",h=c.quantity||1,p=m?parseFloat(m.toString().replace(/[^0-9.-]/g,"")):NaN,f=isNaN(p)?"":`$${p.toFixed(2)} ea`,g=c.notes?`Notes: ${c.notes}`:"",w=this.escapeHtml(a),x=this.escapeHtml(l),y=g?this.escapeHtml(g):"",b=l?`Code: ${x}`:"Code: —",S=`Qty: ${h}`,v=f||"—";return`
          <div class="review-product-card" data-id="${c.id}" data-room="${n}" aria-label="Selected product card">
            <div class="review-drag-handle" aria-label="Drag to reorder">
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
              <span class="drag-dot"></span>
            </div>
            <div class="review-card-content" data-id="${c.id}">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${d}" alt="Product" onerror="this.src='assets/no-image.png';">
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${w}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${b}</span>
                  <span class="review-product-qty">${S}</span>
                  <span class="review-product-price">${v}</span>
                </div>
                ${y?`<div class="review-product-notes">${y}</div>`:""}
              </div>
            </div>
          </div>
          `}).join("")}
        </div>
      </div>
    `).join(""),this.setupReviewInteractions()}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupReviewInteractions(){this.setupReviewCardTaps(),this.setupDragAndDrop(),this.updateRoomEmptyStates()}destroyReviewSortables(){this.reviewSortables&&this.reviewSortables.length&&this.reviewSortables.forEach(e=>e.destroy()),this.reviewSortables=[]}setupDragAndDrop(){const e=Array.from(document.querySelectorAll(".review-room-items"));if(!e.length){this.destroyReviewSortables();return}this.destroyReviewSortables(),this.reviewSortables=e.map(t=>new Sortable(t,{group:{name:"review-rooms",pull:!0,put:!0},animation:160,draggable:".review-product-card",handle:".review-drag-handle",delay:0,delayOnTouchOnly:!1,touchStartThreshold:3,fallbackTolerance:5,fallbackOnBody:!0,ghostClass:"review-card-ghost",chosenClass:"review-card-chosen",dragClass:"review-card-dragging",onEnd:()=>this.persistReorderedProducts()}))}persistReorderedProducts(){const e=StorageManager.getSelectedProducts();if(!e.length)return;const t=new Map(e.map(n=>[n.id,n])),o=[];if(document.querySelectorAll(".review-room-group").forEach(n=>{const r=n.getAttribute("data-room")||"Unassigned";n.querySelectorAll(".review-product-card").forEach(i=>{const a=i.getAttribute("data-id"),l=t.get(a);l&&(o.push({...l,room:r}),t.delete(a))})}),t.forEach(n=>o.push(n)),!StorageManager.setSelectedProducts(o)){alert("Unable to save the new order. Please try again.");return}this.renderReviewList(),this.updateSelectionCount()}setupReviewCardTaps(){const e=document.querySelectorAll(".review-card-content"),t=10,o=300;e.forEach(s=>{let n=0,r=0,c=0,i=!1;s.addEventListener("touchstart",a=>{n=a.touches[0].clientY,r=a.touches[0].clientX,c=Date.now(),i=!0},{passive:!0}),s.addEventListener("touchmove",a=>{if(!i)return;const l=Math.abs(a.touches[0].clientY-n),d=Math.abs(a.touches[0].clientX-r);(l>t||d>t)&&(i=!1)},{passive:!0}),s.addEventListener("touchend",a=>{const l=Date.now()-c;if(i&&l<o){a.preventDefault(),a.stopPropagation();const d=s.getAttribute("data-id");d&&this.showProductQuickView(d)}i=!1},{passive:!1}),s.addEventListener("click",a=>{if(a.pointerType==="mouse"||!("ontouchstart"in window)){a.preventDefault(),a.stopPropagation();const l=s.getAttribute("data-id");l&&this.showProductQuickView(l)}})})}showProductQuickView(e){const o=StorageManager.getSelectedProducts().find(P=>P.id===e);if(!o){console.warn("Product not found for quick view:",e);return}const{product:s,notes:n,quantity:r,room:c}=o;let i=document.getElementById("product-quick-view-modal");i||(i=document.createElement("div"),i.id="product-quick-view-modal",i.className="modal",document.body.appendChild(i));const a=s.Description||s.description||s.productName||"Product",l=s.OrderCode||s.orderCode||"",d=s.Image_URL||s.imageUrl||"assets/no-image.png",m=s.Diagram_URL||s.diagramUrl||"",h=s.Datasheet_URL||s.datasheetUrl||"",p=s.Website_URL||s.websiteUrl||"",f=s.RRP_INCGST||s.rrpIncGst||s.price||"",g=f?parseFloat(f.toString().replace(/[^0-9.-]/g,"")):NaN,w=!isNaN(g)&&g>0?`$${g.toFixed(2)} inc GST`:"Price unavailable";i.innerHTML=`
      <div class="modal-content quick-view-content">
        <button class="quick-view-close" aria-label="Close">&times;</button>
        <div class="quick-view-image-section">
          <img class="quick-view-product-image" src="${this.escapeHtml(d)}" alt="${this.escapeHtml(a)}" onerror="this.src='assets/no-image.png';">
        </div>
        <div class="quick-view-details">
          <h3 class="quick-view-title">${this.escapeHtml(a)}</h3>
          <div class="quick-view-meta">
            <span class="quick-view-code">${l?"Code: "+this.escapeHtml(l):""}</span>
            <span class="quick-view-price">${w}</span>
          </div>
          <div class="quick-view-selection-info">
            <span class="quick-view-room"><strong>Room:</strong> ${this.escapeHtml(c||"Unassigned")}</span>
            <span class="quick-view-qty"><strong>Qty:</strong> ${r||1}</span>
          </div>
          ${n?`<div class="quick-view-notes"><strong>Notes:</strong> ${this.escapeHtml(n)}</div>`:""}
        </div>
        <div class="quick-view-actions">
          ${m?`<button class="quick-view-btn diagram-btn" data-url="${this.escapeHtml(m)}">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 5.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3z"/></svg>
            Diagram
          </button>`:""}
          ${h?`<a href="${this.escapeHtml(h)}" target="_blank" rel="noopener noreferrer" class="quick-view-btn datasheet-btn">
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
    `,i.style.display="flex";const x=i.querySelector(".quick-view-close"),y=i.querySelector(".quick-view-edit-btn"),b=i.querySelector(".quick-view-back-btn"),S=i.querySelector(".diagram-btn"),v=()=>{i.style.display="none"};x.addEventListener("click",v),b.addEventListener("click",v),i.addEventListener("click",P=>{P.target===i&&v()}),y.addEventListener("click",()=>{v(),this.handleEditSelection(e)}),S&&S.addEventListener("click",P=>{P.preventDefault();const F=S.getAttribute("data-url");F&&this.showDiagramLightbox(F,a)})}showDiagramLightbox(e,t){let o=document.getElementById("diagram-lightbox");o||(o=document.createElement("div"),o.id="diagram-lightbox",o.className="diagram-lightbox",document.body.appendChild(o)),o.innerHTML=`
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
    `,o.style.display="flex",o.querySelector(".diagram-lightbox-close").addEventListener("click",()=>{o.style.display="none"}),o.addEventListener("click",r=>{r.target===o&&(o.style.display="none")});const n=o.querySelector(".diagram-lightbox-image");n&&n.addEventListener("load",()=>{n.style.opacity="1"})}handleEditSelection(e){const o=StorageManager.getSelectedProducts().find(i=>i.id===e);if(!o){alert("Unable to find product in selection.");return}this.currentEditSelectionId=e;const{product:s,notes:n,quantity:r,room:c}=o;this.showProductDetailsScreen(s,{mode:"edit",selectionId:e,notes:n,quantity:r,room:c})}updateRoomEmptyStates(){document.querySelectorAll(".review-room-items").forEach(e=>{e.children.length===0?e.classList.add("is-empty"):e.classList.remove("is-empty")})}showPdfFormModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form"),o=document.getElementById("pdf-email-cancel");o&&(o.onclick=()=>{e.style.display="none"}),t&&(t.onsubmit=s=>{s.preventDefault(),this.handlePdfFormSubmit(),e.style.display="none"})}}handlePdfFormSubmit(){const e=document.getElementById("pdf-email-form");if(!e)return;const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on",exportCsv:t.get("export-csv")==="on",sendEmail:!0};if(!o.email){alert("Please enter an email address.");return}window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}handleAddCustomRoom(){this.showAddRoomModal(e=>{StorageManager.addCustomRoom(e.trim())?this.renderRoomGrid():alert("Room name already exists or is invalid")})}showAddRoomModal(e,t){const o=document.getElementById("add-room-modal");o&&o.remove();const s=document.createElement("div");s.id="add-room-modal",s.className="modal",s.style.display="flex",s.innerHTML=`
      <div class="modal-content add-room-modal-content">
        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 1.25rem;">Add New Room / Group</h3>
        <p style="margin: 0 0 16px 0; color: #666; font-size: 0.9rem;">Enter a name for your custom room or group:</p>
        <input type="text" id="new-room-input" class="add-room-input" placeholder="e.g., Master Bath, Pool Area..." maxlength="30" autofocus>
        <div class="modal-actions" style="margin-top: 20px;">
          <button id="add-room-cancel-btn" class="secondary-btn">Cancel</button>
          <button id="add-room-confirm-btn" class="primary-btn">Add</button>
        </div>
      </div>
    `,document.body.appendChild(s);const n=s.querySelector("#new-room-input"),r=s.querySelector("#add-room-cancel-btn"),c=s.querySelector("#add-room-confirm-btn");setTimeout(()=>n.focus(),100);const i=()=>{s.remove()},a=()=>{const l=n.value.trim();l?(i(),e&&e(l)):(n.focus(),n.style.borderColor="#e53e3e",setTimeout(()=>n.style.borderColor="",1500))};r.addEventListener("click",()=>{i(),t&&t()}),c.addEventListener("click",a),n.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),a()):l.key==="Escape"&&(i(),t&&t())}),s.addEventListener("click",l=>{l.target===s&&(i(),t&&t())})}handleRemoveCustomRoom(e){confirm("Remove this custom room?")&&(StorageManager.removeCustomRoom(e),this.renderRoomGrid())}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{StorageManager.clearAllSelections(),window.leadWizardIntegration&&(window.leadWizardIntegration.clearCurrentLeadData(),console.log("🧹 Lead data cleared with selection clear")),e.style.display="none",this.updateSelectionCount()})}}showScanFeedback(e){const t=document.getElementById("scanner-feedback");t&&(t.innerHTML=`
        <div style="color: #16a34a; background: #f0f9ff; padding: 8px; border-radius: 6px; margin: 4px 0;">
          ${Utils.sanitizeInput(e)}
        </div>
      `,setTimeout(()=>{t.innerHTML=""},3e3))}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=StorageManager.getSelectionCount().toString())}setupSeimaContactModal(){const e=document.getElementById("seima-contact-modal");if(!e)return;const t=document.getElementById("staff-contact-cancel-btn"),o=document.getElementById("staff-contact-save-btn"),s=document.getElementById("staff-mode-lock");document.getElementById("app-mode-input"),document.getElementById("staff-code-submit");const n=document.getElementById("staff-code-input-container");t&&(t.onclick=()=>{e.style.display="none",n&&(n.style.display="none")}),o&&(o.onclick=()=>this.handleSeimaContactSave()),s&&(s.onclick=()=>this.handleLockClick()),n&&(n.style.display="none"),this.loadSeimaContactDetails()}showSeimaContactModal(){const e=document.getElementById("seima-contact-modal");e&&(e.style.display="flex",this.loadSeimaContactDetails())}loadSeimaContactDetails(){const e=StorageManager.getStaffContactDetails(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-mobile"),n=document.getElementById("staff-email"),r=document.getElementById("lock-icon"),c=document.getElementById("staff-mode-lock"),i=document.getElementById("logged-in-profile-section"),a=document.getElementById("profile-avatar"),l=document.getElementById("profile-display-name"),d=document.getElementById("profile-display-email"),m=document.getElementById("edit-profile-btn"),h=authService.isLoggedIn(),p=authService.getCurrentUser();if(e&&(e.name||e.email)?(t&&e.name&&(t.value=e.name),o&&e.position&&(o.value=e.position),s&&e.mobile&&(s.value=e.mobile),n&&e.email&&(n.value=e.email)):p&&(t&&p.name&&(t.value=p.name),o&&p.position&&(o.value=p.position),n&&p.email&&(n.value=p.email),s&&p.phone&&(s.value=p.phone)),p){i&&(i.style.display="block"),l&&(l.textContent=p.name||""),d&&(d.textContent=p.email||""),a&&(a.textContent=this.getInitials(p.name)),m&&(m.onclick=()=>this.showEditProfileModal());const g=document.getElementById("change-password-btn");g&&(g.onclick=()=>{authUI.showChangePassword(()=>{console.log("📱 Password changed")})})}else i&&(i.style.display="none");r&&(r.textContent=h?"🔓":"🔒"),c&&(h?c.classList.add("unlocked"):c.classList.remove("unlocked"))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}showEditProfileModal(){authUI.showEditProfile(e=>{console.log("📱 Profile updated:",e),StorageManager.clearStaffContactDetails(),this.loadSeimaContactDetails()})}handleLockClick(){authService.isLoggedIn()?this.showExitStaffModeModal():authUI.showLogin(t=>{console.log("📱 Staff logged in:",t.email),this.updateLockUI(!0),this.loadSeimaContactDetails(),window.dispatchEvent(new CustomEvent("staffModeChanged",{detail:{mode:"staff",user:t}}))})}showExitStaffModeModal(){const e=document.getElementById("exit-staff-mode-modal");if(!e)return;e.style.display="flex";const t=document.getElementById("exit-staff-cancel-btn"),o=document.getElementById("exit-staff-confirm-btn");if(t){const s=t.cloneNode(!0);t.parentNode.replaceChild(s,t),s.onclick=()=>{e.style.display="none"}}if(o){const s=o.cloneNode(!0);o.parentNode.replaceChild(s,o),s.onclick=()=>{e.style.display="none",this.exitStaffMode()}}}handleCodeSubmit(){console.warn("handleCodeSubmit is deprecated - use authUI.showLogin() instead")}exitStaffMode(){authService.logout(),console.log("📱 Staff logged out"),StorageManager.clearStaffContactDetails(),this.updateLockUI(!1),window.dispatchEvent(new CustomEvent("staffModeChanged",{detail:{mode:"customer"}}))}updateLockUI(e){const t=document.getElementById("lock-icon"),o=document.getElementById("staff-mode-lock");t&&(t.textContent=e?"🔓":"🔒"),o&&(e?o.classList.add("unlocked"):o.classList.remove("unlocked"))}handleSeimaContactSave(){const e=document.getElementById("staff-name"),t=document.getElementById("staff-position"),o=document.getElementById("staff-mobile"),s=document.getElementById("staff-email"),n=document.getElementById("staff-code-input-container");if(!e||!o||!s)return;const r=e.value.trim(),c=(t==null?void 0:t.value.trim())||"",i=o.value.trim(),a=s.value.trim();if(!r||!i||!a){this.showStaffContactStatus("Please fill in all required fields.","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){this.showStaffContactStatus("Please enter a valid email address.","error");return}const d={name:r,position:c,mobile:i,email:a};StorageManager.setStaffContactDetails(d),this.showStaffContactStatus("Contact details saved!","success"),setTimeout(()=>{const m=document.getElementById("seima-contact-modal");m&&(m.style.display="none",n&&(n.style.display="none"))},1500)}showStaffContactStatus(e,t){const o=document.getElementById("staff-details-status");o&&(o.style.display="block",o.textContent=e,t==="success"?(o.style.background="#d1fae5",o.style.border="1px solid #10b981",o.style.color="#065f46"):t==="error"&&(o.style.background="#fee2e2",o.style.border="1px solid #ef4444",o.style.color="#991b1b"),setTimeout(()=>{o.style.display="none"},5e3))}async startTextScanMode(){try{this.scannerController.stopScanning();let e=this.scannerController.videoElement;if(!e||e.paused||e.ended?(await this.scannerController.startScanning("text"),await new Promise(s=>setTimeout(s,800)),e=this.scannerController.videoElement):console.log("📷 Using existing camera stream for text mode"),!e)throw new Error("Camera not available for Text Scan");this.showTextCaptureOverlay(),this.showScanFeedback("Position product label in the center area and tap Capture");const t=document.getElementById("text-scan-btn"),o=document.getElementById("ocr-capture-btn");t&&(t.textContent="Stop Text Scan",t.onclick=()=>this.stopTextScanMode()),o&&(o.style.display="block",o.onclick=()=>this.captureTextScan())}catch(e){console.error("Failed to start Text Scan mode:",e),this.showScanFeedback("Text Scan failed: "+e.message)}}async captureTextScan(){const e=this.scannerController.videoElement;if(!e){this.showScanFeedback("Camera not available");return}const t=document.getElementById("ocr-capture-btn");t&&(t.disabled=!0,t.textContent="Processing...");try{const o=e.videoWidth||640,s=e.videoHeight||480,n=document.createElement("canvas");n.width=o,n.height=s,n.getContext("2d").drawImage(e,0,0,o,s),this.scannerController.stopScanning(),this.showScanFeedback("Processing image...");const c=await ocrService.captureAndProcessCanvas(n);if(c.length===0){this.showScanFeedback("No text detected. Try better lighting or angle."),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent="Capture");return}await this.handleOcrResults(c),t&&(t.disabled=!1,t.textContent="Capture")}catch(o){console.error("OCR capture error:",o),this.showScanFeedback("Error: "+o.message),await this.restartTextCamera(),t&&(t.disabled=!1,t.textContent="Capture")}}stopTextScanMode(){ocrService.stopScanning(),this.showBarcodeScanOverlay(),this.scannerController.videoElement&&!this.scannerController.videoElement.paused&&(this.scannerController.stopScanning(),setTimeout(()=>{this.scannerController.startScanning("barcode").catch(o=>{console.warn("Failed to restart barcode scanning:",o)})},300));const e=document.getElementById("text-scan-btn"),t=document.getElementById("ocr-capture-btn");e&&(e.textContent="Text Scan",e.onclick=()=>this.startTextScanMode()),t&&(t.style.display="none",t.disabled=!1,t.textContent="Capture"),this.showScanFeedback("Text Scan stopped")}showTextCaptureOverlay(){const e=document.getElementById("scanner-overlay");if(!e)return;const t=e.querySelector(".scan-area"),o=e.querySelector(".scan-line");t&&(t.style.display="none"),o&&(o.style.display="none");let s=e.querySelector(".text-capture-area");s||(s=document.createElement("div"),s.className="text-capture-area",e.appendChild(s)),s.style.display="block";let n=e.querySelector(".text-capture-corners");n||(n=document.createElement("div"),n.className="text-capture-corners",e.appendChild(n)),n.style.display="block";let r=e.querySelector(".text-capture-instruction");r||(r=document.createElement("div"),r.className="text-capture-instruction",r.textContent="Position product label with Order Code here",e.appendChild(r)),r.style.display="block"}showBarcodeScanOverlay(){const e=document.getElementById("scanner-overlay");if(!e)return;const t=e.querySelector(".scan-area"),o=e.querySelector(".scan-line");t&&(t.style.display="block"),o&&(o.style.display="block");const s=e.querySelector(".text-capture-area"),n=e.querySelector(".text-capture-corners"),r=e.querySelector(".text-capture-instruction");s&&(s.style.display="none"),n&&(n.style.display="none"),r&&(r.style.display="none")}async handleOcrResults(e){const t=document.getElementById("ocr-confirmation-modal");if(t&&t.style.display!=="none"){console.log("OCR modal already open, ignoring new detection");return}if(!this.dataService.isLoaded){this.showScanFeedback("Product data loading, please wait...");return}const o=this.dataService.getAllProducts(),s=OCRProductMatcher.findProductsByOcrTexts(e,o);if(s&&s.requiresSelection&&s.families)this.showProductFamilySelectionModal(s.families,e);else{const n=Array.isArray(s)?s:[];this.showOcrConfirmationModal(n,e)}}showOcrConfirmationModal(e,t){const o=document.getElementById("ocr-confirmation-modal"),s=document.getElementById("ocr-candidates-list"),n=document.getElementById("ocr-no-matches"),r=document.getElementById("ocr-confirm-btn"),c=document.getElementById("ocr-cancel-btn");if(!o||!s||!r||!c){console.error("OCR confirmation modal elements not found");return}s.innerHTML="";const i=new Set;e.length===0?(n.style.display="block",s.style.display="none",r.style.display="none"):(n.style.display="none",s.style.display="block",e.forEach((a,l)=>{const d=a.product,m=d.OrderCode||"N/A",h=d.Description||d["Product Description"]||d["Product Name"]||"No description",p=d.Image_URL||d["Image URL"]||"assets/no-image.png",f=document.createElement("div");f.style.cssText="display: flex; align-items: center; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px; cursor: pointer;",f.innerHTML=`
          <input type="checkbox" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;" 
                 data-product-index="${l}">
          <img src="${p}" alt="${h}" 
               style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
               onerror="this.src='assets/no-image.png'">
          <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 4px;">${m}</div>
            <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${h.substring(0,60)}${h.length>60?"...":""}</div>
            <div style="font-size: 0.85em; color: #888;">
              <span style="background: ${a.confidence==="high"?"#d1fae5":"#fef3c7"}; 
                           padding: 2px 6px; border-radius: 4px;">
                ${a.confidence==="high"?"High":"Medium"} confidence
              </span>
            </div>
          </div>
        `;const g=f.querySelector('input[type="checkbox"]');g.onclick=w=>{w.stopPropagation(),g.checked?i.delete(d):i.add(d),r.disabled=i.size===0},g.onchange=w=>{w.stopPropagation(),g.checked?i.add(d):i.delete(d),r.disabled=i.size===0},f.onclick=w=>{w.target!==g&&w.target!==g.parentElement&&(g.checked=!g.checked,g.checked?i.add(d):i.delete(d),r.disabled=i.size===0)},s.appendChild(f)}),r.style.display="block",r.disabled=!0),r.textContent="Add Selected",r.onclick=()=>{if(i.size===0)return;const a=Array.from(i);if(o.style.display="none",a.length===1){const l=a[0];this.showProductDetailsScreen(l,{scannedCode:l.OrderCode,fromOcr:!0})}else a.forEach(l=>{this.dataService.addProduct(l,"",this.selectedRoom||"Blank",1)}),this.showScanFeedback(`Added ${a.length} product(s) to selection`),this.updateSelectionCount(),this.showReviewScreen()},c.onclick=async()=>{o.style.display="none",await this.restartTextCamera()},c.disabled=!1,o.style.display="flex"}showProductFamilySelectionModal(e,t){const o=document.getElementById("ocr-confirmation-modal"),s=document.getElementById("ocr-candidates-list"),n=document.getElementById("ocr-no-matches"),r=document.getElementById("ocr-confirm-btn"),c=document.getElementById("ocr-cancel-btn");if(!o||!s||!r||!c){console.error("OCR confirmation modal elements not found");return}if(!e||e.length===0){console.error("❌ No families provided to selection modal!"),n.style.display="block",s.style.display="none",r.style.display="none",c.onclick=async()=>{o.style.display="none";try{await this.scannerController.startScanning("text"),this.showScanFeedback("Ready to capture")}catch(d){console.error("Failed to restart camera:",d),this.showScanFeedback("Camera error - please try again")}},c.disabled=!1,o.style.display="flex";return}const i=o.querySelector("h3"),a=o.querySelector("p");i&&(i.textContent="Multiple Products Detected"),a&&(a.textContent="Select which product you're looking for:"),s.innerHTML="",n.style.display="none",s.style.display="block",r.style.display="block";let l=null;e.forEach((d,m)=>{var x,y;const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; padding: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 12px; cursor: pointer; transition: all 0.2s;";const p=d.matches.length,f=d.matches[0],g=((x=f==null?void 0:f.product)==null?void 0:x.Image_URL)||((y=f==null?void 0:f.product)==null?void 0:y["Image URL"])||"assets/no-image.png";h.innerHTML=`
        <input type="radio" name="product-family" value="${m}" style="margin-right: 12px; width: 20px; height: 20px; cursor: pointer;">
        <img src="${g}" alt="${d.familyName}" 
             style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 12px;"
             onerror="this.src='assets/no-image.png'">
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px; font-size: 1.1em;">${d.familyName}</div>
          <div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${p} variant${p!==1?"s":""} found</div>
          <div style="font-size: 0.85em; color: #888;">
            <span style="background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">
              ${Math.round(d.totalScore*100)}% match
            </span>
          </div>
        </div>
      `;const w=h.querySelector('input[type="radio"]');w.onclick=b=>{b.stopPropagation(),l=d,r.disabled=!1,document.querySelectorAll('input[name="product-family"]').forEach(S=>{S.closest("div").style.borderColor="#ddd",S.closest("div").style.backgroundColor=""}),h.style.borderColor="#1e40af",h.style.backgroundColor="#eff6ff"},h.onclick=b=>{b.target!==w&&(w.checked=!0,w.onclick(b))},s.appendChild(h)}),r.onclick=()=>{l&&(o.style.display="none",this.showOcrConfirmationModal(l.matches,t))},c.onclick=async()=>{o.style.display="none",await this.restartTextCamera()},r.disabled=!0,r.textContent="Select Product Family",o.style.display="flex"}}class FileImportManager{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.dataService=dataService}async init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=l=>{l.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const d=l.dataTransfer.files;d.length>0&&this.handleFileSelection(d[0])},o.onchange=l=>{l.target.files.length>0&&this.handleFileSelection(l.target.files[0])});const s=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),r=document.getElementById("import-back-btn"),c=document.getElementById("import-process-btn"),i=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),r&&(r.onclick=()=>this.showFileSelectionStep()),c&&(c.onclick=()=>this.processImport()),i&&(i.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(l=>{l.onchange=()=>{this.importMode=l.value;const d=document.getElementById("override-warning");d&&(d.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const s=document.querySelector('input[name="import-mode"][value="append"]');s&&(s.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],o=e.name.toLowerCase().endsWith(".csv")||e.name.toLowerCase().endsWith(".xlsx");if(!t.includes(e.type)&&!o){alert("Please select a CSV or Excel (.xlsx) file.");return}this.selectedFile=e;const s=document.getElementById("selected-file-info"),n=document.getElementById("selected-file-name"),r=document.getElementById("import-next-btn");s&&n&&r&&(n.textContent=e.name,s.style.display="block",r.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{let e;this.selectedFile.name.toLowerCase().endsWith(".csv")?e=await this.parseCSV(this.selectedFile):e=await this.parseExcel(this.selectedFile),console.log("Parsed data:",e),this.importMode==="override"&&(StorageManager.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error("Import failed:",e),alert("Import failed: "+e.message),this.showFileSelectionStep()}}async parseCSV(e){return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!0,complete:s=>{console.log("CSV parsing complete:",s),t(s.data)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}async parseExcel(e){return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=n=>{try{const r=new Uint8Array(n.target.result),c=XLSX.read(r,{type:"array"}),i=c.SheetNames[0],a=c.Sheets[i],l=XLSX.utils.sheet_to_json(a,{header:1,defval:""});if(l.length===0){o(new Error("Excel file is empty"));return}const d=l[0],h=l.slice(1).map(p=>{const f={};return d.forEach((g,w)=>{f[g]=p[w]||""}),f});console.log("Excel parsing complete:",h),t(h)}catch(r){console.error("Excel parsing error:",r),o(r)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", or "SKU".');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const n=e.slice(s,s+o);await this.processChunk(n,t),await new Promise(r=>setTimeout(r,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}detectColumns(e){const t=Object.keys(e);return console.log("Available headers:",t),{productCode:this.findColumnByPatterns(t,["ordercode","productcode","sku","order code","product code"]),productName:this.findColumnByPatterns(t,["product name","description","name"]),quantity:this.findColumnByPatterns(t,["min order quantity","quantity","qty","orderquantity"]),price:t.find(o=>o.toLowerCase()==="price per unit")}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",r=t.price?e[t.price]:"";if(!o||String(o).trim().toLowerCase()==="n/a"){console.log("Excluding row with N/A or missing product code");return}const c=String(o).trim();if(!/^\d{6}$/.test(c)){console.log("Excluding row - product code is not 6 digits:",c);return}const i=parseInt(n)||1;let a=0;if(r){const m=String(r).replace(/[^\d.-]/g,"");a=parseFloat(m)||0,a>0&&(a=a*1.1)}console.log("Processing valid 6-digit product code:",{productCode:c,productName:s,quantity:i,price:a});const l=await this.findProductInCatalog(c,s),d={OrderCode:c,orderCode:c,productName:s||(l?l.productName:"Unknown Product"),"Product Name":s||(l?l["Product Name"]:"Unknown Product"),Description:s||(l?l.Description:"Unknown Product"),description:s||(l?l.description:"Unknown Product"),price:a>0?a.toFixed(2):l?l.price:"0.00",Image_URL:l?l.Image_URL||l.imageUrl:"assets/no-image.png",imageUrl:l?l.Image_URL||l.imageUrl:"assets/no-image.png",Website_URL:l?l.Website_URL||l.websiteUrl:"",websiteUrl:l?l.Website_URL||l.websiteUrl:"",Diagram_URL:l?l.Diagram_URL||l.diagramUrl:"",diagramUrl:l?l.Diagram_URL||l.diagramUrl:"",Datasheet_URL:l?l.Datasheet_URL||l.datasheetUrl:"",datasheetUrl:l?l.Datasheet_URL||l.datasheetUrl:"",RRP_EXGST:a>0?(a/1.1).toFixed(2):l?l.RRP_EXGST||l.rrpExGst:"0.00",rrpExGst:a>0?(a/1.1).toFixed(2):l?l.RRP_EXGST||l.rrpExGst:"0.00",RRP_INCGST:a>0?a.toFixed(2):l?l.RRP_INCGST||l.rrpIncGst:"0.00",rrpIncGst:a>0?a.toFixed(2):l?l.RRP_INCGST||l.rrpIncGst:"0.00"};l?console.log("Found product in catalog, using imported data with catalog fallbacks:",c):(console.log("Product not found in catalog, creating with imported data:",c),this.notFoundProducts.push({orderCode:c,productName:s||"Unknown Product",quantity:i,price:a>0?a.toFixed(2):"N/A"})),StorageManager.addProductToSelection(d,"","Blank",i),this.processedData.push({...d,quantity:i,notes:"",room:"Blank"})}async findProductInCatalog(e,t){const o=this.dataService.getAllProducts();if(e){const s=String(e).trim(),n=o.find(r=>[r.OrderCode,r.orderCode,r["Order Code"],r.order_code].some(i=>i&&String(i).trim().toLowerCase()===s.toLowerCase()));if(n)return console.log("Found product in catalog by code:",s,n),n}if(t){const s=String(t).trim().toLowerCase(),n=o.find(r=>[r.productName,r["Product Name"],r.description,r.Description,r.LongDescription].some(i=>i&&String(i).trim().toLowerCase()===s));if(n)return console.log("Found product in catalog by name:",t,n),n}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const r=this.notFoundProducts.map(c=>`<li><strong>${c.orderCode}</strong> - ${c.productName} (Qty: ${c.quantity}, Price: ${c.price})</li>`).join("");o.innerHTML=`<ul>${r}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{this.closeModal(),window.navigationManager&&window.navigationManager.showReviewScreen&&window.navigationManager.showReviewScreen()}),console.log("Import results displayed")}}function configureSelectionRecorder(u){return u?(selectionRecorder.configure(u),CONFIG.SELECTION_RECORDING.GOOGLE_SHEETS_URL=u,console.log("✅ Selection recorder configured successfully"),console.log("📊 URL:",u),!0):(console.error("❌ Google Sheets URL is required"),!1)}async function testSelectionRecorder(){console.log("🧪 Testing selection recorder connection...");try{const u=await selectionRecorder.testConnection();return u.success?(console.log("✅ Selection recorder test successful!"),console.log("📊 Your Google Sheets integration is working correctly"),!0):(console.error("❌ Selection recorder test failed:",u.error),!1)}catch(u){return console.error("❌ Selection recorder test error:",u),!1}}function getSelectionRecorderStatus(){const u={enabled:selectionRecorder.isEnabled,configured:!!selectionRecorder.googleSheetsUrl,url:selectionRecorder.googleSheetsUrl?"Set":"Not set",retryAttempts:selectionRecorder.retryAttempts,retryDelay:selectionRecorder.retryDelay};return console.log("📊 Selection Recorder Status:",u),u}function toggleSelectionRecording(u=!0){return selectionRecorder.setEnabled(u),console.log(`📊 Selection recording ${u?"enabled":"disabled"}`),u}function setupSelectionRecorder(){console.log(`
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
  `)}typeof window<"u"&&(window.configureSelectionRecorder=configureSelectionRecorder,window.testSelectionRecorder=testSelectionRecorder,window.getSelectionRecorderStatus=getSelectionRecorderStatus,window.toggleSelectionRecording=toggleSelectionRecording,window.setupSelectionRecorder=setupSelectionRecorder);class BuilderMerchantService{constructor(){this.googleSheetsUrl=CONFIG.SELECTION_RECORDING.GOOGLE_SHEETS_URL,this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:5*60*1e3}}isCacheValid(){return this.cache.lastFetch?Date.now()-this.cache.lastFetch<this.cache.cacheTimeout:!1}async getBuilders(e=!0){if(e&&this.isCacheValid()&&this.cache.builders.length>0)return console.log("🏗️ Using cached builders list"),this.cache.builders;try{const t=`${this.googleSheetsUrl}?action=getBuilders`,s=await(await fetch(t)).json();if(s.success)return this.cache.builders=s.builders||[],this.cache.builders.sort((n,r)=>n.toLowerCase().localeCompare(r.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏗️ Fetched ${this.cache.builders.length} builders from server`),this.cache.builders;throw new Error(s.error||"Failed to fetch builders")}catch(t){return console.error("❌ Error fetching builders:",t),this.cache.builders.length>0?(console.log("🏗️ Using stale cached builders due to error"),this.cache.builders):[]}}async getMerchants(e=!0){if(e&&this.isCacheValid()&&this.cache.merchants.length>0)return console.log("🏪 Using cached merchants list"),this.cache.merchants;try{const t=`${this.googleSheetsUrl}?action=getMerchants`,s=await(await fetch(t)).json();if(s.success)return this.cache.merchants=s.merchants||[],this.cache.merchants.sort((n,r)=>n.toLowerCase().localeCompare(r.toLowerCase())),this.cache.lastFetch=Date.now(),console.log(`🏪 Fetched ${this.cache.merchants.length} merchants from server`),this.cache.merchants;throw new Error(s.error||"Failed to fetch merchants")}catch(t){return console.error("❌ Error fetching merchants:",t),this.cache.merchants.length>0?(console.log("🏪 Using stale cached merchants due to error"),this.cache.merchants):[]}}async searchBuilders(e){if(!e||e.trim()==="")return await this.getBuilders();try{const t=`${this.googleSheetsUrl}?action=searchBuilders&query=${encodeURIComponent(e)}`,s=await(await fetch(t)).json();if(s.success){const n=s.builders||[];return n.sort((r,c)=>r.toLowerCase().localeCompare(c.toLowerCase())),console.log(`🔍 Found ${n.length} builders matching "${e}"`),n}else throw new Error(s.error||"Failed to search builders")}catch(t){console.error("❌ Error searching builders:",t);const o=await this.getBuilders(),s=e.toLowerCase();return o.filter(r=>r.toLowerCase().includes(s)).sort((r,c)=>r.toLowerCase().localeCompare(c.toLowerCase()))}}async searchMerchants(e){if(!e||e.trim()==="")return await this.getMerchants();try{const t=`${this.googleSheetsUrl}?action=searchMerchants&query=${encodeURIComponent(e)}`,s=await(await fetch(t)).json();if(s.success){const n=s.merchants||[];return n.sort((r,c)=>r.toLowerCase().localeCompare(c.toLowerCase())),console.log(`🔍 Found ${n.length} merchants matching "${e}"`),n}else throw new Error(s.error||"Failed to search merchants")}catch(t){console.error("❌ Error searching merchants:",t);const o=await this.getMerchants(),s=e.toLowerCase();return o.filter(r=>r.toLowerCase().includes(s)).sort((r,c)=>r.toLowerCase().localeCompare(c.toLowerCase()))}}async addBuilder(e){if(!e||e.trim()==="")return{success:!1,error:"Builder name is required"};try{const t=`${this.googleSheetsUrl}?action=addBuilder&name=${encodeURIComponent(e.trim())}`,s=await(await fetch(t)).json();return s.success?(this.cache.lastFetch=null,console.log(`✅ Builder "${s.name}" added successfully`),s):(console.log(`⚠️ Builder add failed: ${s.error}`),s.existing&&console.log(`💡 Suggested existing: "${s.existing}"`),s)}catch(t){return console.error("❌ Error adding builder:",t),{success:!1,error:t.message}}}async addMerchant(e){if(!e||e.trim()==="")return{success:!1,error:"Merchant name is required"};try{const t=`${this.googleSheetsUrl}?action=addMerchant&name=${encodeURIComponent(e.trim())}`,s=await(await fetch(t)).json();return s.success?(this.cache.lastFetch=null,console.log(`✅ Merchant "${s.name}" added successfully`),s):(console.log(`⚠️ Merchant add failed: ${s.error}`),s.existing&&console.log(`💡 Suggested existing: "${s.existing}"`),s)}catch(t){return console.error("❌ Error adding merchant:",t),{success:!1,error:t.message}}}clearCache(){this.cache={builders:[],merchants:[],lastFetch:null,cacheTimeout:5*60*1e3},console.log("🧹 Builder/Merchant cache cleared")}getCacheStatus(){return{builders:this.cache.builders.length,merchants:this.cache.merchants.length,lastFetch:this.cache.lastFetch?new Date(this.cache.lastFetch).toLocaleString():"Never",isValid:this.isCacheValid()}}}const builderMerchantService=new BuilderMerchantService;window.testBuilderMerchantService=async()=>{console.log("🧪 Testing Builder/Merchant Service...");try{const u=await builderMerchantService.getBuilders();console.log("✅ Builders:",u);const e=await builderMerchantService.getMerchants();return console.log("✅ Merchants:",e),console.log("✅ Builder/Merchant Service test completed"),!0}catch(u){return console.error("❌ Builder/Merchant Service test failed:",u),!1}};window.clearBuilderMerchantCache=()=>(builderMerchantService.clearCache(),"Cache cleared successfully");window.getBuilderMerchantStatus=()=>{const u=builderMerchantService.getCacheStatus();return console.log("📊 Builder/Merchant Service Status:",u),u};class LeadTracker{constructor(){this.leadData={customerName:"",customerEmail:"",customerPhone:"",projectName:"",projectAddress:"",projectNotes:"",excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:"",builderName:"",merchantName:"",hearAboutUs:[],hearAboutUsOther:"",referralBuilder:"",referralMerchant:""},this.builderList=[],this.merchantList=[],this.currentStep=1,this.totalSteps=3}getLeadData(){return{...this.leadData}}updateLeadData(e){this.leadData={...this.leadData,...e}}clearLeadData(){this.leadData={customerName:"",customerEmail:"",customerPhone:"",projectName:"",projectAddress:"",projectNotes:"",excludePrice:!1,exportCsv:!0,customerType:null,customerTypeOther:"",builderName:"",merchantName:"",hearAboutUs:[],hearAboutUsOther:"",referralBuilder:"",referralMerchant:""},this.currentStep=1}validateStep(e){switch(e){case 1:return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName;case 2:return this.leadData.customerType!==null;case 3:return this.leadData.hearAboutUs.length>0;default:return!1}}validateForm(){const e=authService.isLoggedIn();return this.leadData.customerName&&this.leadData.customerEmail&&this.leadData.projectName?e?this.leadData.customerType!==null&&this.leadData.hearAboutUs.length>0:!0:!1}getFormattedLeadData(){const e=this.leadData;let t=e.customerType;e.customerType==="Other"&&e.customerTypeOther&&(t=e.customerTypeOther);let o=[...e.hearAboutUs];if(e.hearAboutUs.includes("Other")&&e.hearAboutUsOther){const s=o.indexOf("Other");o[s]=`Other (${e.hearAboutUsOther})`}return{customerType:t,hearAboutUs:o.join(", "),customerTypeRaw:e.customerType,hearAboutUsArray:e.hearAboutUs,builderName:e.builderName,merchantName:e.merchantName,referralBuilder:e.referralBuilder,referralMerchant:e.referralMerchant,projectNotes:e.projectNotes||""}}getBuilderList(){return[...this.builderList]}getMerchantList(){return[...this.merchantList]}async getBuilderList(){return await builderMerchantService.getBuilders()}async getMerchantList(){return await builderMerchantService.getMerchants()}async searchBuilders(e){return await builderMerchantService.searchBuilders(e)}async searchMerchants(e){return await builderMerchantService.searchMerchants(e)}async addCustomBuilder(e){return await builderMerchantService.addBuilder(e)}async addCustomMerchant(e){return await builderMerchantService.addMerchant(e)}loadCustomLists(){try{const e=localStorage.getItem("customBuilders");e&&(this.builderList=JSON.parse(e));const t=localStorage.getItem("customMerchants");t&&(this.merchantList=JSON.parse(t))}catch(e){console.error("Error loading custom lists:",e)}}clearCustomLists(){this.builderList=[],this.merchantList=[],localStorage.removeItem("customBuilders"),localStorage.removeItem("customMerchants"),console.log("🧹 Cleared all custom builder and merchant lists")}}const leadTracker=new LeadTracker;leadTracker.loadCustomLists();window.clearBuilderMerchantLists=()=>(leadTracker.clearCustomLists(),"Builder and merchant lists cleared. Refresh the page to see empty lists.");class SelectionLoader{constructor(){var e;this.googleSheetsUrl=((e=CONFIG.SELECTION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL)||null,this.cachedSelections=null,this.cachedDeletedSelections=null,this.cacheTimestamp=null,this.deletedCacheTimestamp=null,this.cacheDuration=5*60*1e3}isStaffMode(){return authService.isLoggedIn()}async fetchSelections(e=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(e){if(this.cachedDeletedSelections&&this.deletedCacheTimestamp&&Date.now()-this.deletedCacheTimestamp<this.cacheDuration)return console.log("📊 Using cached deleted selections"),this.cachedDeletedSelections}else if(this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const t=authService.getCurrentUser(),o=(t==null?void 0:t.email)||"";console.log(`📊 Fetching ${e?"deleted ":""}selections for ${o||"all staff"}...`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getSelections"),s.searchParams.append("monthsBack","0"),e&&s.searchParams.append("deletedOnly","true"),o&&s.searchParams.append("staffEmail",o);const n=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const r=await n.json();if(r.success&&r.selections)return console.log(`✅ Fetched ${r.selections.length} ${e?"deleted ":""}selections`),e?(this.cachedDeletedSelections=r.selections,this.deletedCacheTimestamp=Date.now()):(this.cachedSelections=r.selections,this.cacheTimestamp=Date.now()),r.selections;throw new Error(r.error||"Failed to fetch selections")}catch(t){return console.error("❌ Error fetching selections:",t),[]}}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const n=(s.customerName||"").toLowerCase(),r=(s.customerProject||"").toLowerCase(),c=(s.date||"").toLowerCase();return n.includes(o)||r.includes(o)||c.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.date,t.time);return this.parseDateValue(o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t){if(!e)return new Date(0);const o=String(e);let s=null;const n=o.split("/");if(n.length===3&&n[0].length<=2)s=new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0]));else if(s=new Date(o),isNaN(s.getTime())||s.getFullYear()<=1900)return new Date(0);if(t){const r=this.extractTimeString(t);if(r){const c=r.split(":");c.length>=2&&(s.setHours(parseInt(c[0])||0),s.setMinutes(parseInt(c[1])||0))}}return s}extractTimeString(e){if(!e)return"";const t=String(e),o=t.match(/^(\d{1,2}:\d{2})(:\d{2})?$/);if(o)return o[1];const s=t.match(/(\d{1,2}:\d{2}):\d{2}/);if(s)return s[1];const n=t.match(/(\d{1,2}:\d{2})/);return n?n[1]:""}async loadSelection(e){try{console.log("📦 Loading selection:",e);let t=[];if(e.productsJson)try{t=JSON.parse(e.productsJson)}catch(c){return console.error("❌ Failed to parse products JSON:",c),{success:!1,error:"Failed to parse saved products"}}if(t.length===0)return{success:!1,error:"No products found in this selection"};const o=[],s=dataService.getAllProducts(),n=[];for(const c of t){let i=s.find(d=>d.OrderCode===c.orderCode||d.orderCode===c.orderCode),a;i?a=i:(console.warn(`⚠️ Product ${c.orderCode} not found in catalog, using saved data`),n.push(c.orderCode),a={OrderCode:c.orderCode,Description:c.description||"Product no longer in catalogue",RRP_INCGST:c.priceIncGst||"0.00",Image_URL:"assets/no-image.png",_notInCatalog:!0});const l={id:this.generateId(),product:a,notes:c.notes||"",room:c.room||"Blank",quantity:c.quantity||1,timestamp:Date.now()};o.push(l)}StorageManager.setSelectedProducts(o),console.log(`✅ Loaded ${o.length} products`),this.loadCustomerDetails(e);const r={success:!0,productsLoaded:o.length,notFoundProducts:n};return n.length>0&&(r.warning=`${n.length} product(s) are no longer in the catalogue`),r}catch(t){return console.error("❌ Error loading selection:",t),{success:!1,error:t.message}}}loadCustomerDetails(e){const t={customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.cleanPhoneNumber(e.customerPhone),projectName:e.customerProject||"",projectAddress:e.customerAddress||"",projectNotes:e.projectNotes||"",customerType:e.customerType||null,builderName:e.builderName||"",merchantName:e.merchantName||"",hearAboutUs:e.hearAboutUs?e.hearAboutUs.split(", ").filter(o=>o):[],referralBuilder:e.referralBuilder||"",referralMerchant:e.referralMerchant||""};leadTracker.updateLeadData(t);try{localStorage.setItem("loadedSelectionCustomerData",JSON.stringify(t)),console.log("✅ Customer details saved to localStorage")}catch(o){console.warn("⚠️ Could not save customer data to localStorage:",o)}console.log("✅ Customer details loaded into lead tracker:",t)}generateId(){return"sel_"+Date.now().toString(36)+"_"+Math.random().toString(36).substr(2,9)}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),t}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,this.cachedDeletedSelections=null,this.deletedCacheTimestamp=null}async deleteSelections(e){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),{success:!1,error:"Google Sheets URL not configured"};if(!e||e.length===0)return{success:!1,error:"No selections provided"};try{console.log(`🗑️ Deleting ${e.length} selection(s)...`);const t=e.map(r=>({date:r.date||"",time:r.time||"",customerName:r.customerName||"",customerEmail:r.customerEmail||""})),o=new URL(this.googleSheetsUrl),s=await fetch(o.toString(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({data:JSON.stringify({action:"deleteSelections",selections:t})})});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.json();if(n.success)return console.log(`✅ Deleted ${n.deletedCount||e.length} selection(s)`),this.clearCache(),{success:!0,deletedCount:n.deletedCount||e.length};throw new Error(n.error||"Failed to delete selections")}catch(t){return console.error("❌ Error deleting selections:",t),{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),{success:!1,error:"Google Sheets URL not configured"};if(!e||e.length===0)return{success:!1,error:"No selections provided"};try{console.log(`♻️ Restoring ${e.length} selection(s)...`);const t=e.map(r=>({date:r.date||"",time:r.time||"",customerName:r.customerName||"",customerEmail:r.customerEmail||""})),o=new URL(this.googleSheetsUrl),s=await fetch(o.toString(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({data:JSON.stringify({action:"restoreSelections",selections:t})})});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.json();if(n.success)return console.log(`✅ Restored ${n.restoredCount||e.length} selection(s)`),this.clearCache(),{success:!0,restoredCount:n.restoredCount||e.length};throw new Error(n.error||"Failed to restore selections")}catch(t){return console.error("❌ Error restoring selections:",t),{success:!1,error:t.message}}}formatDisplayDateShort(e){const t=this.formatDisplayDate(e);if(!t)return"";const o=t.split("/");return o.length===3&&o[2].length===4?`${o[0]}/${o[1]}/${o[2].substring(2)}`:t}formatDisplayTime(e){const t=this.extractTimeString(e);if(!t)return"";const o=t.split(":");if(o.length>=2){const s=o[0].padStart(2,"0"),n=o[1].padStart(2,"0");return`${s}:${n}`}return t}formatDisplayDate(e){if(!e)return"";const t=String(e);try{const o=t.split("/");if(o.length===3&&o[0].length<=2){const c=o[0].padStart(2,"0"),i=o[1].padStart(2,"0"),a=o[2];return`${c}/${i}/${a}`}const s=new Date(t);if(!isNaN(s.getTime())){const c=s.getFullYear();if(c>1900&&c<2100){const i=String(s.getDate()).padStart(2,"0"),a=String(s.getMonth()+1).padStart(2,"0");return`${i}/${a}/${c}`}}const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.match(/(\w{3})\s+(\d{1,2})\s+(\d{4})/);if(r){const c=n.indexOf(r[1]);if(c!==-1){const i=r[2].padStart(2,"0"),a=String(c+1).padStart(2,"0"),l=r[3];return`${i}/${a}/${l}`}}}catch(o){console.warn("Date parsing error:",o)}return t}}const selectionLoader=new SelectionLoader;typeof window<"u"&&(window.selectionLoader=selectionLoader);class SelectionPicker{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}isStaffMode(){return authService.isLoggedIn()}async show(e){this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,this.setLoadingState(!0),await this.fetchAndRenderSelections()}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await selectionLoader.fetchSelections(this.showDeletedMode),this.allSelections=selectionLoader.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("selection-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("selection-picker-modal");e&&e.remove();const t=this.isStaffMode(),o=t?'<th class="col-checkbox"><input type="checkbox" id="selection-select-all" title="Select all"></th>':"",s=t?`<label class="show-deleted-toggle">
           <input type="checkbox" id="selection-show-deleted" ${this.showDeletedMode?"checked":""}>
           <span>Show deleted</span>
         </label>`:"",n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n)}attachEventListeners(){const e=document.getElementById("selection-picker-modal"),t=document.getElementById("selection-picker-close"),o=document.getElementById("selection-picker-cancel"),s=document.getElementById("selection-search-input"),n=document.getElementById("selection-retry-btn"),r=document.getElementById("selection-select-all"),c=document.getElementById("selection-delete-btn"),i=document.getElementById("selection-restore-btn"),a=document.getElementById("selection-show-deleted");t&&(t.onclick=()=>this.hide()),o&&(o.onclick=()=>this.hide()),e&&(e.onclick=d=>{d.target===e&&this.hide()}),s&&(s.oninput=d=>{this.currentSearchQuery=d.target.value,this.selectedItems.clear(),this.filterAndRender()}),n&&(n.onclick=()=>{selectionLoader.clearCache(),this.show(this.onLoadCallback)}),r&&(r.onchange=d=>{this.toggleSelectAll(d.target.checked)}),c&&(c.onclick=()=>{this.confirmDeleteSelected()});const l=document.getElementById("selection-load-btn");l&&(l.onclick=()=>{this.loadSelectedItem()}),i&&(i.onclick=()=>{this.confirmRestoreSelected()}),a&&(a.onchange=async d=>{this.showDeletedMode=d.target.checked;const m=this.currentSearchQuery;selectionLoader.clearCache(),this.createModalHTML(),this.attachEventListeners();const h=document.getElementById("selection-search-input");h&&(h.value=m),this.currentSearchQuery=m,await this.fetchAndRenderSelections()})}setLoadingState(e){const t=document.getElementById("selection-picker-loading"),o=document.getElementById("selection-picker-table-container"),s=document.getElementById("selection-picker-error"),n=document.getElementById("selection-picker-empty");t&&(t.style.display=e?"flex":"none"),o&&(o.style.display=e?"none":"block"),s&&(s.style.display="none"),n&&(n.style.display="none")}showError(e){const t=document.getElementById("selection-picker-loading"),o=document.getElementById("selection-picker-table-container"),s=document.getElementById("selection-picker-error"),n=document.getElementById("selection-error-message"),r=document.getElementById("selection-picker-empty");t&&(t.style.display="none"),o&&(o.style.display="none"),s&&(s.style.display="flex"),n&&(n.textContent=e),r&&(r.style.display="none")}filterAndRender(){let e=[...this.allSelections];const t=authService.getCurrentUser();if(t&&t.email){const o=t.email.toLowerCase();e=e.filter(s=>s.staffEmail&&s.staffEmail.toLowerCase()===o)}this.currentSearchQuery&&(e=selectionLoader.searchSelections(e,this.currentSearchQuery)),this.filteredSelections=e,this.renderSelectionTable()}renderSelectionTable(){const e=document.getElementById("selection-picker-tbody"),t=document.getElementById("selection-picker-table-container"),o=document.getElementById("selection-picker-empty"),s=document.getElementById("selection-count-info"),n=this.isStaffMode();if(!e)return;if(s){const i=this.filteredSelections.length;this.currentSearchQuery?s.textContent=`Showing ${i} selection${i!==1?"s":""}`:s.textContent=`${i} selection${i!==1?"s":""} found`}if(this.filteredSelections.length===0){t&&(t.style.display="none"),o&&(o.style.display="block",this.currentSearchQuery?o.querySelector("p").textContent=`No selections found matching "${this.currentSearchQuery}"`:o.querySelector("p").textContent="No selections found."),this.updateActionButton();return}t&&(t.style.display="block"),o&&(o.style.display="none");const r=this.selectedItems.size;e.innerHTML=this.filteredSelections.map((i,a)=>{const l=selectionLoader.formatDisplayDateShort(i.date),d=selectionLoader.formatDisplayTime(i.time),m=this.escapeHtml(i.customerName||"Unknown"),h=this.escapeHtml(i.customerProject||""),p=this.selectedItems.has(a),f=this.showDeletedMode,g=n?`<td class="col-checkbox"><input type="checkbox" class="selection-checkbox" data-index="${a}" ${p?"checked":""}></td>`:"";let w="selection-row";return p&&(this.showDeletedMode?w+=" selected-for-restore":r===1?w+=" selected-for-load":w+=" selected-for-deletion"),f&&(w+=" deleted-item"),`
        <tr class="${w}" data-index="${a}">
          ${g}
          <td class="col-datetime">${l} ${d}</td>
          <td class="col-customer-project">
            <div class="customer-name">${m}</div>
            ${h?`<div class="project-name">${h}</div>`:""}
          </td>
        </tr>
      `}).join(""),e.querySelectorAll(".selection-row").forEach(i=>{i.onclick=a=>{if(a.target.type==="checkbox"||this.showDeletedMode)return;const l=parseInt(i.getAttribute("data-index"),10);!isNaN(l)&&this.filteredSelections[l]&&this.confirmAndLoadSelection(this.filteredSelections[l])}}),n&&e.querySelectorAll(".selection-checkbox").forEach(a=>{a.onchange=l=>{const d=parseInt(a.getAttribute("data-index"),10);this.toggleSelection(d,l.target.checked)}}),this.updateActionButton(),this.updateSelectAllCheckbox()}loadSelectedItem(){if(this.selectedItems.size!==1)return;const e=[...this.selectedItems][0],t=this.filteredSelections[e];t&&this.confirmAndLoadSelection(t)}confirmAndLoadSelection(e){const t=StorageManager.getSelectedProducts(),o=t.length>0,s=e.customerName||"Unknown",n=e.totalProducts||0,r=selectionLoader.formatDisplayDateShort(e.date);this.showConfirmationModal(s,r,n,o,t.length,e)}showConfirmationModal(e,t,o,s,n,r){const c=s?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">WARNING: This will replace your current selection of ${n} product(s).</span>
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
    `;document.body.insertAdjacentHTML("beforeend",i);const a=document.getElementById("selection-confirm-modal"),l=document.getElementById("confirm-cancel-btn"),d=document.getElementById("confirm-load-btn");l.onclick=()=>{a.remove()},d.onclick=async()=>{d.disabled=!0,d.textContent="Loading...";try{const m=await selectionLoader.loadSelection(r);a.remove(),this.hide(),m.success?this.showResultModal(!0,m.productsLoaded,m.warning):this.showResultModal(!1,0,m.error)}catch(m){console.error("Error loading selection:",m),a.remove(),this.showResultModal(!1,0,m.message)}},a.onclick=m=>{m.target===a&&a.remove()}}showResultModal(e,t,o){const s=e?"✅":"❌",n=e?"Selection Loaded":"Load Failed",r=e?`Successfully loaded ${t} product${t!==1?"s":""}.`:"Failed to load selection.",c=o&&e?`<div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 16px;">
           <span style="font-size: 16px; margin-right: 8px;">⚠️</span>
           <span style="color: #92400e;">${this.escapeHtml(o)}</span>
         </div>`:"",i=o&&!e?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(o)}</p>`:"",a=`
      <div id="selection-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${s}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${n}</h3>
          <p style="margin-bottom: 0; color: #555;">${r}</p>
          ${c}
          ${i}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",a);const l=document.getElementById("selection-result-modal"),d=document.getElementById("result-ok-btn");d.onclick=()=>{l.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t})},l.onclick=m=>{m.target===l&&(l.remove(),e&&this.onLoadCallback&&this.onLoadCallback({success:!0,productsLoaded:t}))}}toggleSelection(e,t){const o=this.selectedItems.size;t?this.selectedItems.add(e):this.selectedItems.delete(e);const s=this.selectedItems.size;o===1&&s!==1||o!==1&&s===1?this.updateSelectedRowStyles():this.updateRowStyle(e,t),this.updateActionButton(),this.updateSelectAllCheckbox()}updateRowStyle(e,t){const o=document.querySelector(`.selection-row[data-index="${e}"]`);if(o&&(o.classList.remove("selected-for-load","selected-for-deletion","selected-for-restore"),t)){const s=this.selectedItems.size;this.showDeletedMode?o.classList.add("selected-for-restore"):s===1?o.classList.add("selected-for-load"):o.classList.add("selected-for-deletion")}}updateSelectedRowStyles(){const e=this.selectedItems.size;document.querySelectorAll(".selection-row").forEach(t=>{const o=parseInt(t.getAttribute("data-index"),10),s=this.selectedItems.has(o);t.classList.remove("selected-for-load","selected-for-deletion","selected-for-restore"),s&&(this.showDeletedMode?t.classList.add("selected-for-restore"):e===1?t.classList.add("selected-for-load"):t.classList.add("selected-for-deletion"))})}toggleSelectAll(e){this.selectedItems.clear(),e&&this.filteredSelections.forEach((t,o)=>{this.selectedItems.add(o)}),this.renderSelectionTable()}updateActionButton(){const e=document.getElementById("selection-delete-btn"),t=document.getElementById("selection-load-btn"),o=document.getElementById("selection-restore-btn"),s=this.selectedItems.size;e&&(s>0?(e.style.display="inline-flex",e.textContent=`Delete (${s})`):e.style.display="none"),t&&(s>0?(t.style.display="inline-flex",s===1?(t.disabled=!1,t.textContent="Load Selection"):(t.disabled=!0,t.textContent="Load Selection")):t.style.display="none"),o&&(s>0?(o.style.display="inline-flex",o.textContent=`Restore (${s})`):o.style.display="none")}updateSelectAllCheckbox(){const e=document.getElementById("selection-select-all");if(!e)return;const t=this.filteredSelections.length,o=this.selectedItems.size;t===0||o===0?(e.checked=!1,e.indeterminate=!1):o===t?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=!0)}confirmDeleteSelected(){const e=this.selectedItems.size;if(e===0)return;const t=[];this.selectedItems.forEach(a=>{this.filteredSelections[a]&&t.push(this.filteredSelections[a])});const o=t.map(a=>a.customerName||"Unknown").slice(0,3).join(", "),s=t.length>3?` and ${t.length-3} more...`:"",n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById("selection-delete-confirm-modal"),c=document.getElementById("delete-cancel-btn"),i=document.getElementById("delete-confirm-btn");c.onclick=()=>{r.remove()},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const a=await selectionLoader.deleteSelections(t);if(r.remove(),a.success){this.selectedItems.clear(),selectionLoader.clearCache();const l=new Set(t);this.allSelections=this.allSelections.filter(d=>!l.has(d)),this.filteredSelections=this.filteredSelections.filter(d=>!l.has(d)),this.renderSelectionTable(),this.showActionResultModal("delete",!0,a.deletedCount)}else this.showActionResultModal("delete",!1,0,a.error)}catch(a){console.error("Error deleting selections:",a),r.remove(),this.showActionResultModal("delete",!1,0,a.message)}},r.onclick=a=>{a.target===r&&r.remove()}}confirmRestoreSelected(){const e=this.selectedItems.size;if(e===0)return;const t=[];this.selectedItems.forEach(a=>{this.filteredSelections[a]&&t.push(this.filteredSelections[a])});const o=t.map(a=>a.customerName||"Unknown").slice(0,3).join(", "),s=t.length>3?` and ${t.length-3} more...`:"",n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById("selection-restore-confirm-modal"),c=document.getElementById("restore-cancel-btn"),i=document.getElementById("restore-confirm-btn");c.onclick=()=>{r.remove()},i.onclick=async()=>{i.disabled=!0,i.textContent="Restoring...";try{const a=await selectionLoader.restoreSelections(t);if(r.remove(),a.success){this.selectedItems.clear(),selectionLoader.clearCache();const l=new Set(t);this.allSelections=this.allSelections.filter(d=>!l.has(d)),this.filteredSelections=this.filteredSelections.filter(d=>!l.has(d)),this.renderSelectionTable(),this.showActionResultModal("restore",!0,a.restoredCount)}else this.showActionResultModal("restore",!1,0,a.error)}catch(a){console.error("Error restoring selections:",a),r.remove(),this.showActionResultModal("restore",!1,0,a.message)}},r.onclick=a=>{a.target===r&&r.remove()}}showActionResultModal(e,t,o,s){const n=e==="delete",r=t?"✅":"❌",c=t?n?"Moved to Bin":"Restored Successfully":n?"Deletion Failed":"Restore Failed",i=t?n?`Successfully moved ${o} selection${o!==1?"s":""} to the bin.`:`Successfully restored ${o} selection${o!==1?"s":""}.`:n?"Failed to delete selections.":"Failed to restore selections.",a=s?`<p style="color: #dc2626; margin-top: 12px;">${this.escapeHtml(s)}</p>`:"",l=`
      <div id="selection-action-result-modal" class="modal" style="display: flex; z-index: 1200;">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px;">${r}</div>
          <h3 style="margin: 0 0 16px 0; color: #333;">${c}</h3>
          <p style="margin-bottom: 0; color: #555;">${i}</p>
          ${a}
          <div class="modal-actions" style="margin-top: 24px; justify-content: center;">
            <button type="button" id="action-result-ok-btn" class="primary-btn">OK</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",l);const d=document.getElementById("selection-action-result-modal"),m=document.getElementById("action-result-ok-btn");m.onclick=()=>{d.remove()},d.onclick=h=>{h.target===d&&d.remove()}}escapeHtml(e){if(typeof e!="string")return"";const t=document.createElement("div");return t.textContent=e,t.innerHTML}}const selectionPicker=new SelectionPicker;typeof window<"u"&&(window.selectionPicker=selectionPicker);class LeadWizard{constructor(){this.isVisible=!1,this.onCompleteCallback=null,this.onCancelCallback=null,this.isStaffMode=!1}checkStaffMode(){return this.isStaffMode=authService.isLoggedIn(),console.log(`📱 Staff mode: ${this.isStaffMode}`),this.isStaffMode}show(e,t){window.leadWizardInstance=this,this.onCompleteCallback=e,this.onCancelCallback=t,this.checkStaffMode(),this.createFormHTML(),this.attachFormListeners(),this.loadFormData(),this.loadBuilderMerchantOptions(),this.isVisible=!0}hide(){const e=document.getElementById("lead-wizard-modal");e&&e.remove(),this.isVisible=!1}createFormHTML(){const e=document.getElementById("lead-wizard-modal");e&&e.remove();const o=`
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
    `}attachFormListeners(){console.log("📧 Attaching form listeners...");const e=document.getElementById("wizard-send-btn"),t=document.getElementById("wizard-cancel-btn"),o=document.getElementById("lead-wizard-modal");console.log("📧 Send button found:",!!e),console.log("📧 Cancel button found:",!!t),console.log("📧 Modal found:",!!o),e?(e.onclick=s=>(s.preventDefault(),s.stopPropagation(),console.log("📧 Send button clicked"),this.submitForm(),!1),console.log("✅ Send button handler attached")):console.error("❌ Send button not found"),t&&(t.onclick=s=>(s.preventDefault(),s.stopPropagation(),console.log("📧 Cancel button clicked"),this.cancel(),!1),console.log("✅ Cancel button handler attached")),o&&o.addEventListener("click",s=>{s.target===o&&this.cancel()}),this.attachCustomerDetailsListeners(),this.isStaffMode&&(this.attachCustomerTypeListeners(),this.attachHearAboutListeners()),this.attachOptionsListeners(),this.updateSendButtonState(),console.log("✅ All form listeners attached")}attachCustomerDetailsListeners(){[{id:"customer-name",key:"customerName"},{id:"customer-email",key:"customerEmail"},{id:"customer-phone",key:"customerPhone"},{id:"project-name",key:"projectName"},{id:"project-address",key:"projectAddress"},{id:"project-notes",key:"projectNotes"}].forEach(({id:t,key:o})=>{const s=document.getElementById(t);s&&s.addEventListener("input",n=>{leadTracker.updateLeadData({[o]:n.target.value}),this.updateSendButtonState()})})}attachCustomerTypeListeners(){const e=document.querySelectorAll('input[name="customer-type"]'),t=document.getElementById("builder-dropdown"),o=document.getElementById("merchant-dropdown"),s=document.getElementById("other-type-input");e.forEach(m=>{m.addEventListener("change",h=>{const p=h.target.value;t.style.display="none",o.style.display="none",s.style.display="none",p==="Builder"?t.style.display="block":p==="Merchant"?o.style.display="block":p==="Client of Builder/Merchant"?(t.style.display="block",o.style.display="block"):p==="Other"&&(s.style.display="block"),leadTracker.updateLeadData({customerType:p}),this.updateSendButtonState()})});const n=document.getElementById("builder-name-select");n&&n.addEventListener("change",m=>{const h=m.target.value,p=document.getElementById("builder-other-input");h==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({builderName:h}))});const r=document.getElementById("merchant-name-select");r&&r.addEventListener("change",m=>{const h=m.target.value,p=document.getElementById("merchant-other-input");h==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({merchantName:h}))});const c=document.getElementById("builder-other-name");c&&c.addEventListener("input",m=>{leadTracker.updateLeadData({builderName:m.target.value})});const i=document.getElementById("merchant-other-name");i&&i.addEventListener("input",m=>{leadTracker.updateLeadData({merchantName:m.target.value})});const a=document.getElementById("customer-type-other");a&&a.addEventListener("input",m=>{leadTracker.updateLeadData({customerTypeOther:m.target.value})});const l=document.getElementById("add-builder-btn");l&&l.addEventListener("click",()=>this.showAddBuilderModal());const d=document.getElementById("add-merchant-btn");d&&d.addEventListener("click",()=>this.showAddMerchantModal())}attachHearAboutListeners(){const e=document.querySelectorAll(".hear-about-checkbox"),t=document.getElementById("builder-referral-dropdown"),o=document.getElementById("merchant-referral-dropdown"),s=document.getElementById("hear-about-other-input");e.forEach(m=>{m.addEventListener("change",()=>{const h=Array.from(e).filter(p=>p.checked).map(p=>p.value);t&&(t.style.display=h.includes("Builder Referral")?"block":"none"),o&&(o.style.display=h.includes("Merchant Referral")?"block":"none"),s&&(s.style.display=h.includes("Other")?"block":"none"),leadTracker.updateLeadData({hearAboutUs:h}),this.updateSendButtonState()})});const n=document.getElementById("referral-builder-select");n&&n.addEventListener("change",m=>{const h=m.target.value,p=document.getElementById("referral-builder-other-input");h==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({referralBuilder:h}))});const r=document.getElementById("referral-merchant-select");r&&r.addEventListener("change",m=>{const h=m.target.value,p=document.getElementById("referral-merchant-other-input");h==="Other"?p.style.display="block":(p.style.display="none",leadTracker.updateLeadData({referralMerchant:h}))});const c=document.getElementById("referral-builder-other-name");c&&c.addEventListener("input",m=>{leadTracker.updateLeadData({referralBuilder:m.target.value})});const i=document.getElementById("referral-merchant-other-name");i&&i.addEventListener("input",m=>{leadTracker.updateLeadData({referralMerchant:m.target.value})});const a=document.getElementById("hear-about-other");a&&a.addEventListener("input",m=>{leadTracker.updateLeadData({hearAboutUsOther:m.target.value})});const l=document.getElementById("add-referral-builder-btn");l&&l.addEventListener("click",()=>this.showAddBuilderModal("referral"));const d=document.getElementById("add-referral-merchant-btn");d&&d.addEventListener("click",()=>this.showAddMerchantModal("referral"))}attachOptionsListeners(){const e=document.getElementById("exclude-price-checkbox"),t=document.getElementById("export-csv-checkbox");e&&e.addEventListener("change",o=>{const s=!!o.target.checked;leadTracker.updateLeadData({excludePrice:s}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({excludePrice:s})}),t&&t.addEventListener("change",o=>{const s=!!o.target.checked;leadTracker.updateLeadData({exportCsv:s}),window.leadWizardIntegration&&window.leadWizardIntegration.setOptions({exportCsv:s})})}loadFormData(){let e=leadTracker.getLeadData();try{const l=localStorage.getItem("loadedSelectionCustomerData");if(l){const d=JSON.parse(l);d&&typeof d=="object"&&(leadTracker.updateLeadData(d),e={...e,...d},console.log("📦 Loaded saved customer data from previous selection"),localStorage.removeItem("loadedSelectionCustomerData"))}}catch(l){console.warn("⚠️ Could not load saved customer data:",l)}const t=document.getElementById("customer-name"),o=document.getElementById("customer-email"),s=document.getElementById("customer-phone"),n=document.getElementById("project-name"),r=document.getElementById("project-address"),c=document.getElementById("project-notes"),i=document.getElementById("exclude-price-checkbox"),a=document.getElementById("export-csv-checkbox");if(t&&e.customerName&&(t.value=e.customerName),o&&e.customerEmail&&(o.value=e.customerEmail),s&&e.customerPhone&&(s.value=e.customerPhone),n&&e.projectName&&(n.value=e.projectName),r&&e.projectAddress&&(r.value=e.projectAddress),c&&e.projectNotes&&(c.value=e.projectNotes),i&&e.excludePrice!==void 0&&(i.checked=e.excludePrice),a&&e.exportCsv!==void 0&&(a.checked=e.exportCsv),this.isStaffMode){if(e.customerType){const l=document.querySelector(`input[name="customer-type"][value="${e.customerType}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))}if(e.builderName){const l=document.getElementById("builder-name-select");l&&setTimeout(()=>{l.querySelector(`option[value="${e.builderName}"]`)&&(l.value=e.builderName)},500)}if(e.merchantName){const l=document.getElementById("merchant-name-select");l&&setTimeout(()=>{l.querySelector(`option[value="${e.merchantName}"]`)&&(l.value=e.merchantName)},500)}if(e.hearAboutUs&&e.hearAboutUs.length>0){e.hearAboutUs.forEach(d=>{const m=document.querySelector(`.hear-about-checkbox[value="${d}"]`);m&&(m.checked=!0)});const l=document.querySelector(".hear-about-checkbox:checked");l&&l.dispatchEvent(new Event("change"))}if(e.referralBuilder){const l=document.getElementById("referral-builder-select");l&&setTimeout(()=>{l.querySelector(`option[value="${e.referralBuilder}"]`)&&(l.value=e.referralBuilder)},500)}if(e.referralMerchant){const l=document.getElementById("referral-merchant-select");l&&setTimeout(()=>{l.querySelector(`option[value="${e.referralMerchant}"]`)&&(l.value=e.referralMerchant)},500)}}this.updateSendButtonState()}updateSendButtonState(){const e=document.getElementById("wizard-send-btn");if(!e)return;const t=this.validateForm();e.classList.toggle("btn-invalid",!t),console.log(`📧 Send button valid: ${t}`)}validateForm(){const e=leadTracker.getLeadData();return!(!e.customerName||!e.customerEmail||!e.projectName||this.isStaffMode&&(!e.customerType||!e.hearAboutUs||e.hearAboutUs.length===0))}submitForm(){if(console.log("📧 submitForm called"),!this.validateForm()){console.log("❌ Form validation failed"),this.showValidationError();return}console.log("✅ Form validation passed");const e=document.getElementById("exclude-price-checkbox"),t=document.getElementById("export-csv-checkbox");e&&leadTracker.updateLeadData({excludePrice:!!e.checked}),t&&leadTracker.updateLeadData({exportCsv:!!t.checked});const o=leadTracker.getLeadData();console.log("📧 Lead data to submit:",o),this.onCompleteCallback?(console.log("📧 Calling completion callback"),this.onCompleteCallback(o)):console.error("❌ No completion callback set"),this.hide()}showValidationError(){const e=document.getElementById("form-error");if(!e)return;const t=leadTracker.getLeadData();let o="";!t.customerName||!t.customerEmail||!t.projectName?o="Please fill in all required fields (Name, Email, Project)":this.isStaffMode&&!t.customerType?o="Please select a customer type":this.isStaffMode&&(!t.hearAboutUs||t.hearAboutUs.length===0)&&(o="Please select how they heard about us"),e.textContent=o,e.style.display="block",setTimeout(()=>{e.style.display="none"},3e3)}cancel(){this.onCancelCallback&&this.onCancelCallback(),this.hide()}async loadBuilderMerchantOptions(){if(this.isStaffMode)try{const[e,t]=await Promise.all([leadTracker.getBuilderList(),leadTracker.getMerchantList()]);this.updateBuilderDropdowns(e),this.updateMerchantDropdowns(t),console.log(`📋 Loaded ${e.length} builders and ${t.length} merchants`)}catch(e){console.error("❌ Error loading builder/merchant options:",e)}}updateBuilderDropdowns(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");["builder-name-select","referral-builder-select"].forEach(s=>{const n=document.getElementById(s);if(n){const r=n.value;n.innerHTML='<option value="">Select builder...</option>'+t+'<option value="Other">Other (specify below)</option>',r&&r!=="Loading..."&&(n.value=r)}})}updateMerchantDropdowns(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");["merchant-name-select","referral-merchant-select"].forEach(s=>{const n=document.getElementById(s);if(n){const r=n.value;n.innerHTML='<option value="">Select merchant...</option>'+t+'<option value="Other">Other (specify below)</option>',r&&r!=="Loading..."&&(n.value=r)}})}async refreshBuilderDropdowns(){try{const e=await leadTracker.getBuilderList();this.updateBuilderDropdowns(e)}catch(e){console.error("❌ Error refreshing builder dropdowns:",e)}}async refreshMerchantDropdowns(){try{const e=await leadTracker.getMerchantList();this.updateMerchantDropdowns(e)}catch(e){console.error("❌ Error refreshing merchant dropdowns:",e)}}showAddBuilderModal(e="customer"){this.createAddModal("Builder",async t=>{const o=await leadTracker.addCustomBuilder(t);if(o.success){await this.refreshBuilderDropdowns();const s=e==="referral"?"referral-builder-select":"builder-name-select",n=document.getElementById(s);n&&(n.value=o.name||t,n.dispatchEvent(new Event("change")))}else if(o.error==="Builder already exists")return this.showDuplicateModal("Builder",o.existing,()=>{const s=e==="referral"?"referral-builder-select":"builder-name-select",n=document.getElementById(s);n&&(n.value=o.existing,n.dispatchEvent(new Event("change")))}),!1})}showAddMerchantModal(e="customer"){this.createAddModal("Merchant",async t=>{const o=await leadTracker.addCustomMerchant(t);if(o.success){await this.refreshMerchantDropdowns();const s=e==="referral"?"referral-merchant-select":"merchant-name-select",n=document.getElementById(s);n&&(n.value=o.name||t,n.dispatchEvent(new Event("change")))}else if(o.error==="Merchant already exists")return this.showDuplicateModal("Merchant",o.existing,()=>{const s=e==="referral"?"referral-merchant-select":"merchant-name-select",n=document.getElementById(s);n&&(n.value=o.existing,n.dispatchEvent(new Event("change")))}),!1})}createAddModal(e,t){const o=`
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
    `;document.body.insertAdjacentHTML("beforeend",o);const s=document.getElementById(`add-${e.toLowerCase()}-modal`),n=document.getElementById(`new-${e.toLowerCase()}-name`),r=document.getElementById(`cancel-add-${e.toLowerCase()}`),c=document.getElementById(`save-add-${e.toLowerCase()}`);setTimeout(()=>n.focus(),100);const i=async()=>{const a=n.value.trim();if(a){c.disabled=!0,c.textContent="Adding...";try{await t(a)!==!1?s.remove():(c.disabled=!1,c.textContent=`Add ${e}`)}catch(l){console.error(`❌ Error adding ${e.toLowerCase()}:`,l),c.disabled=!1,c.textContent=`Add ${e}`}}else n.focus()};return c.addEventListener("click",i),r.addEventListener("click",()=>s.remove()),n.addEventListener("keypress",a=>{a.key==="Enter"&&(a.preventDefault(),i())}),s.addEventListener("click",a=>{a.target===s&&s.remove()}),s}showDuplicateModal(e,t,o){const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById(`duplicate-${e.toLowerCase()}-modal`),r=document.getElementById("duplicate-try-again"),c=document.getElementById("duplicate-use-existing");r.onclick=()=>n.remove(),c.onclick=()=>{n.remove();const i=document.querySelector(`[id*="add-${e.toLowerCase()}-modal"]`);i&&i.remove(),o&&o()},n.addEventListener("click",i=>{i.target===n&&n.remove()}),setTimeout(()=>c.focus(),100)}}const leadWizard=new LeadWizard;class LeadWizardIntegration{constructor(){this.originalEmailHandler=null,this.isIntegrated=!1,this.cachedOptions={excludePrice:!1,exportCsv:!0}}init(){this.isIntegrated||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.setupIntegration()):this.setupIntegration(),this.isIntegrated=!0)}setupIntegration(){console.log("🔍 Setting up lead wizard integration..."),document.addEventListener("click",e=>{if(document.getElementById("lead-wizard-modal"))return;if(e.target.closest("#quick-pdf-btn"))return console.log("🧙‍♂️ Lead wizard intercepted email button click via event delegation!"),e.preventDefault(),e.stopPropagation(),this.showLeadWizardFlow(),!1},!0),console.log("✅ Lead wizard integrated with event delegation"),setTimeout(()=>this.setupDirectIntegration(),1e3)}setupDirectIntegration(){const e=document.getElementById("quick-pdf-btn");e?(console.log("📧 Email button found - ensuring direct integration"),e.onclick=t=>{if(document.getElementById("lead-wizard-modal")){console.log("📧 Wizard already open, ignoring click");return}return console.log("🧙‍♂️ Lead wizard direct handler triggered!"),t.preventDefault(),t.stopPropagation(),this.showLeadWizardFlow(),!1},console.log("✅ Direct integration set up successfully")):console.log("📧 Email button not found - event delegation will handle it")}showLeadWizardFlow(){console.log("🧙‍♂️ Starting lead wizard flow..."),console.log("📧 Integration status:",{isIntegrated:this.isIntegrated,timestamp:new Date().toISOString()}),this.startImagePreloading(),console.log("📝 Showing lead form..."),leadWizard.show(e=>this.onLeadWizardComplete(e),()=>this.onLeadWizardCancel())}startImagePreloading(){const e=StorageManager.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var s,n,r;return{...o.product,Image_URL:((s=o.product)==null?void 0:s.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((r=o.product)==null?void 0:r.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),pdfService._preloadAllImages(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}hasCompleteLeadData(e){const t=authService.isLoggedIn(),o=e.customerName&&e.customerEmail&&e.projectName;return t?o&&e.customerType&&e.hearAboutUs&&e.hearAboutUs.length>0:o}onLeadWizardComplete(e){console.log("📊 Lead data collected:",e),window.currentLeadData=e;const t=!!e.excludePrice,o=!!e.exportCsv,s={name:e.customerName,email:e.customerEmail,phone:e.customerPhone,project:e.projectName,address:e.projectAddress,excludePrice:t,exportCsv:o,sendEmail:!0,leadData:e};console.log("📧 Proceeding directly to PDF generation and email with:",s),this.generateAndSendPDFDirectly(s)}onLeadWizardCancel(){console.log("📊 Lead wizard cancelled")}proceedToEmailForm(){console.log("📧 proceedToEmailForm called - this should not happen anymore"),console.log("📧 Wizard should go directly to PDF generation instead"),console.warn("⚠️ proceedToEmailForm was called - this indicates a code path that needs updating")}showEmailModalDirectly(){console.log("📧 showEmailModalDirectly called - this should not happen anymore"),console.warn("⚠️ Email modal should not be shown - wizard goes directly to PDF generation")}populateEmailFormWithLeadData(){const e=leadTracker.getLeadData();if(console.log("📧 Populating email form with lead data:",e),e.customerName){const t=document.getElementById("user-name");t&&(t.value=e.customerName)}if(e.customerEmail){const t=document.getElementById("user-email");t&&(t.value=e.customerEmail)}if(e.customerPhone){const t=document.getElementById("user-telephone");t&&(t.value=e.customerPhone)}if(e.projectName){const t=document.getElementById("user-project");t&&(t.value=e.projectName)}if(e.projectAddress){const t=document.getElementById("user-address");t&&(t.value=e.projectAddress)}if(e.excludePrice!==void 0){const t=document.getElementById("exclude-price-checkbox");t&&(t.checked=e.excludePrice)}if(e.exportCsv!==void 0){const t=document.getElementById("export-csv-checkbox");t&&(t.checked=e.exportCsv)}console.log("✅ Email form populated with lead data")}setupEmailFormIntegration(){const e=document.getElementById("pdf-email-form");if(!e||e.hasLeadIntegration)return;e.hasLeadIntegration=!0,e.onsubmit,e.onsubmit=o=>{o.preventDefault();const s=new FormData(e),n={name:s.get("user-name"),project:s.get("user-project"),address:s.get("user-address"),email:s.get("user-email"),phone:s.get("user-telephone"),excludePrice:s.has("exclude-price"),exportCsv:s.has("export-csv"),sendEmail:!0};window.currentLeadData&&(n.leadData=window.currentLeadData);const r=document.getElementById("pdf-email-modal");r&&(r.style.display="none"),this.generatePDFWithLeadData(n)};const t=document.getElementById("pdf-email-cancel");t&&(t.onclick=()=>{const o=document.getElementById("pdf-email-modal");o&&(o.style.display="none")})}async generateAndSendPDFDirectly(e){try{if(console.log("📄 Starting direct PDF generation and email..."),window.appService){const t=await window.appService.generateAndSendPDF(e);console.log("✅ PDF generated and email sent successfully"),t.success&&t.method==="email"&&(window.app&&window.app.showEmailSentModal?window.app.showEmailSentModal():this.showEmailSentFallbackModal())}else throw new Error("App service not available")}catch(t){console.error("❌ Error in direct PDF generation:",t),alert("There was an error generating and sending your PDF. Please try again.")}}generatePDFWithLeadData(e){window.appService?window.appService.generateAndSendPDF(e):(console.error("Error: App service not available for PDF generation"),alert("PDF generation service is not available. Please refresh the page and try again."))}getCurrentLeadData(){return window.currentLeadData||null}clearCurrentLeadData(){window.currentLeadData=null,this.cachedOptions={excludePrice:!1,exportCsv:!0},leadTracker.clearLeadData()}showEmailSentFallbackModal(){const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e),e.onclick=t=>{t.target===e&&(e.remove(),location.reload())}}setOptions(e={}){this.cachedOptions={...this.cachedOptions,...e}}showLeadWizard(){leadWizard.show(e=>{console.log("📊 Manual lead data entry:",e),window.currentLeadData=e},()=>{console.log("📊 Manual lead entry cancelled")})}setupOnReviewScreen(){console.log("📧 Setting up integration for review screen..."),this.tryDirectIntegration()}}const leadWizardIntegration=new LeadWizardIntegration;leadWizardIntegration.init();typeof window<"u"&&(window.leadWizardIntegration=leadWizardIntegration);class SeimaScanner{constructor(){this.appService=new AppService,this.navigationManager=null,this.fileImportManager=new FileImportManager}async init(){var e;try{console.log("🚀 Initializing Seima Scanner with refactored services..."),authService.configure({googleSheetsUrl:(e=CONFIG.SELECTION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:CONFIG.EMAIL}),authUI.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Scanner"}),console.log("Browser Compatibility Report:",browserCompatibility.getCompatibilityReport()),browserCompatibility.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning();const t=await this.appService.init();console.log("App service initialization result:",t),this.navigationManager=new NavigationManager,await this.navigationManager.init(),await this.fileImportManager.init(),this.setupGlobalEventListeners(),this.setupGlobalAPI(),console.log("✅ Seima Scanner initialized successfully"),this.setupLoadSelectionButton();const o=this.appService.getMigrationReadinessStatus();console.log("🔄 Microsoft Graph Migration Status:",o)}catch(t){console.error("❌ Failed to initialize Seima Scanner:",t),await this.initializeLegacyFallback()}}async initializeLegacyFallback(){console.error("❌ Service initialization failed - no fallback available"),alert("Failed to initialize the application. Please refresh the page and try again.")}setupGlobalAPI(){var e;window.seimaApp=this,window.seimaDebug=this.appService.getDebugAPI(),window.scannerController=(e=this.navigationManager)==null?void 0:e.scannerController,window.navigationManager=this.navigationManager,window.browserCompatibility=browserCompatibility,window.appService=this.appService,window.dataService=this.appService.dataService,window.emailService=this.appService.emailService,window.pdfService=this.appService.pdfService,window.downloadWithFallback=(t,o)=>{this.appService.downloadWithFallback(t,o)}}setupLoadSelectionButton(){const e=document.getElementById("load-selection-btn");if(!e)return;const t=()=>{const o=authService.isLoggedIn();e.style.display=o?"inline-flex":"none",console.log(`📦 Load Selection button: ${o?"visible":"hidden"}`)};t(),e.onclick=()=>{console.log("📦 Load Previous Selection clicked"),selectionPicker.show(o=>{console.log("✅ Selection loaded:",o),location.reload()})},window.addEventListener("staffModeChanged",()=>{t()}),window.addEventListener("focus",t)}showCompatibilityWarning(){const e=browserCompatibility.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=document.createElement("div");o.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `;const s=t.filter(r=>r.type==="critical"),n=e.score<CONFIG.COMPATIBILITY.MIN_COMPATIBILITY_SCORE;s.length===0&&!n||(o.innerHTML=`
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
    `,document.body.insertBefore(o,document.body.firstChild))}setupGlobalEventListeners(){window.addEventListener("generatePdf",async e=>{const t=e.detail;try{this.showSpinner();const o=await this.appService.generateAndSendPDF(t);if(this.hideSpinner(),o.success&&o.method==="email")this.showEmailSentModal();else if(o.success&&o.method==="download")this.showSuccess("Files downloaded successfully!");else if(!o.success)throw new Error(o.error||"Operation failed")}catch(o){console.error("PDF generation failed:",o),this.showError("Failed to generate PDF. Please try again."),this.hideSpinner()}}),window.addEventListener("sendEmail",async e=>{const{userDetails:t,pdfBlob:o,csvBlob:s}=e.detail;try{await this.handleEmailRequest(t,o,s)}catch(n){console.error("Email sending failed:",n)}}),window.addEventListener("beforeunload",()=>{var e;(e=this.navigationManager)!=null&&e.scannerController&&this.navigationManager.scannerController.stopScanning()}),document.addEventListener("visibilitychange",()=>{var e;(e=this.navigationManager)!=null&&e.scannerController&&(document.hidden?this.navigationManager.scannerController.stopScanning():this.navigationManager.currentScreen==="scanner"&&this.navigationManager.scannerController.startScanning())}),browserCompatibility.features.memoryAPI&&setInterval(()=>{const e=browserCompatibility.memoryInfo;e&&e.usedJSHeapSize>100*1024*1024&&console.warn("High memory usage detected:",e)},3e4)}async handleEmailRequest(e,t,o=null){try{const s=await this.appService.emailService.sendEmail({email:e.email,name:e.name,phone:e.mobile||"",project:e.project||"",address:e.address||"",message:e.message||"Please find attached product selection."},t,o);if(s.success)this.showEmailSentModal();else throw new Error(s.error||"Email sending failed")}catch(s){console.error("Email request failed:",s),this.showError("Failed to send email. Please try again.")}}showSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="flex")}hideSpinner(){const e=document.getElementById("pdf-spinner");e&&(e.style.display="none")}showSuccess(e){this.showNotification(e,"success")}showError(e){this.showNotification(e,"error")}showNotification(e,t="info"){const o=document.createElement("div");o.style.cssText=`
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
    `,document.head.appendChild(s),setTimeout(()=>{o.parentElement&&o.remove()},5e3)}showEmailSentModal(){const e=document.createElement("div");e.id="email-sent-modal",e.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.5); z-index: 10001;
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.3s ease-out;
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
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `,document.head.appendChild(t),document.body.appendChild(e);const o=document.getElementById("email-sent-ok-btn");o&&(o.onclick=()=>{e.remove(),location.reload()}),e.onclick=s=>{s.target===e&&(e.remove(),location.reload())}}getSelectedProducts(){return this.appService.dataService.getSelectedProducts()}clearSelection(){return this.appService.dataService.clearSelection()}addProduct(e,t,o,s){return this.appService.dataService.addProduct(e,o,t,s)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}}const seimaScanner=new SeimaScanner;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{seimaScanner.init()}):seimaScanner.init();
