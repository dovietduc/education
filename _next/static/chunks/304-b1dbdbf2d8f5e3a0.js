"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{7299:function(e,t){t.Z={src:"/_next/static/media/bg-grid-lighter.4c1e8196.svg",height:795,width:1572,blurWidth:0,blurHeight:0}},8726:function(e,t,a){var r=a(5893);a(7294);var s=a(623),n=a(1664),i=a.n(n);let o=e=>{let{children:t,href:a,className:n,target:o,color:l="primary",size:c="medium",arrow:d=!1}=e,h="group inline-block ".concat({medium:"px-6 py-3 text-sm",small:"px-3 py-1 text-xs"}[c]," no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full ").concat({primary:"bg-violet-500",secondary:"bg-pink-500",gradient:"bg-gradient-to-r from-pink-500 to-violet-600"}[l]," ").concat({primary:"hover:bg-violet-400",secondary:"hover:bg-pink-600",gradient:""}[l]," transition-all duration-200 ease-out hover:text-white hover:no-underline ")+n;return a?(0,r.jsxs)(i(),{href:a,className:h,target:o,role:"button",children:[t,d&&(0,r.jsx)(s,{className:"w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3"})]}):(0,r.jsx)("button",{className:h,type:"submit",children:t})};t.Z=o},5915:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(5893);a(7294);var s=a(289);let n=e=>{let{size:t,opacity:a=.2}=e;return(0,r.jsx)("div",{style:{width:"100%",maxWidth:t,aspectRatio:1,opacity:a},className:"bg-violet-100 rounded-full filter blur-3xl"})},i=e=>{let{children:t,borderHighlightColor:a,enableHover:i,glow:o,className:l=""}=e;return(0,r.jsxs)("div",{className:"border border-gray-100 dark:border-blue-600 ".concat(i?"hover:dark:border-blue-500":""," transition-colors duration-200 ease-in-out overflow-hidden rounded-lg dark:bg-blue-700 relative ").concat(l),children:[(a||o)&&(0,r.jsxs)("div",{className:"w-full flex justify-center",children:[a&&(0,r.jsx)("div",{className:"w-3/4",children:(0,r.jsx)(s.Z,{color:a})}),o&&(0,r.jsx)("div",{className:"absolute top-0 -translate-y-1/3 w-3/4",children:(0,r.jsx)(n,{size:"100%"})})]}),t]})};var o=i},4956:function(e,t,a){var r=a(5893);a(7294);var s=a(5675),n=a.n(s),i=a(2818),o=a(1664),l=a.n(o),c=a(4566),d=a(9221),h=a(5915),m=a(7484),u=a.n(m);let g=e=>{let{course:t,priority:a=!1}=e;return(0,r.jsxs)(h.Z,{enableHover:!0,className:"max-w-[350px]",children:[(0,r.jsx)("div",{className:"h-[196px] relative",children:(0,r.jsx)(l(),{href:"/p/".concat(t.slug),className:"relative w-full h-full inline-block",children:(0,r.jsx)(n(),{src:t.imageUrl,alt:t.name,fill:!0,className:"object-cover",sizes:"350px",priority:a})})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsx)("h3",{className:"mb-2 leading-4",children:(0,r.jsx)(l(),{href:"/p/".concat(t.slug),className:"text-gray-700 dark:text-white dark:hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out font-semibold text-lg hover:no-underline",children:t.name})}),(0,r.jsx)("div",{className:"ml-1",children:(0,r.jsx)(i.Z,{children:t.hours+"h"})})]}),(0,r.jsx)("p",{className:"text-base mb-3",children:t.heading}),t.comingSoon&&(0,r.jsx)(i.Z,{children:"Coming Soon"}),!t.comingSoon&&(0,r.jsx)(p,{course:t}),t.releaseDate&&u()()<u()(t.releaseDate).add(30,"day")&&(0,r.jsx)("div",{className:"mt-3 bg-green-600 inline-block rounded-sm px-2 text-xs text-green-900 font-semibold",children:"New"})]})]})},p=e=>{let{course:t}=e,{couponType:a}=(0,d.G)();return(0,r.jsxs)("p",{className:"font-bold text-gray-800 dark:text-white mb-0","data-testid":"price",children:[(()=>{if("subscription"===t.type)return"$".concat(t.subscription.monthly.price,"/m");let e=(0,c._L)(t,a);return"$".concat(e)})(),"subscription"===t.type||(0,c._L)(t,a)===t.price?null:(0,r.jsxs)("span",{className:"ml-2 line-through font-normal text-gray-350 text-sm",children:["$",t.price]})]})};t.Z=g},4977:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(5893);a(7294);let s=e=>{let{price:t,discountedPrice:a,label:s}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center","data-testid":"price-tag",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold text-4xl text-pink-500 dark:text-pink-550",children:a||t}),a!==t&&(0,r.jsx)("span",{className:"ml-2 text-base line-through",children:t})]}),(0,r.jsx)("div",{className:"uppercase text-sm font-medium tracking-wider dark:text-white",children:s})]})};var n=a(1927),i=a(8726),o=a(5675),l=a.n(o),c={src:"/_next/static/media/money-back.160ae298.svg",height:129,width:130,blurWidth:0,blurHeight:0};let d=()=>(0,r.jsx)(l(),{src:c,alt:"Money-back guarantee","data-testid":"guarantee"});var h=a(2818),m=a(5915);let u=e=>{let{price:t,discountedPrice:a,offering:o,benefits:l,buttonLabel:c,checkoutUrl:u,message:g,badge:p}=e;return(0,r.jsxs)("div",{className:"relative w-full md:max-w-[450px]",role:"enrollment-card",children:[(0,r.jsx)("div",{className:"absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10",children:(0,r.jsx)(d,{})}),(0,r.jsx)(m.Z,{borderHighlightColor:"violet",glow:!0,children:(0,r.jsxs)("div",{className:"px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center",children:[p&&(0,r.jsx)("div",{className:"absolute top-5 right-5",children:(0,r.jsx)(h.Z,{children:p})}),(0,r.jsx)(s,{price:t,discountedPrice:a,label:o}),(0,r.jsx)("div",{className:"mt-10 w-full",children:(0,r.jsx)(n.Z,{items:l,bold:!0})}),(0,r.jsx)(i.Z,{href:u,color:"gradient",children:c}),g&&(0,r.jsx)("p",{className:"my-2 text-sm font-semibold",children:g})]})})]})};var g=u},8393:function(e,t,a){var r=a(5893);a(7294);var s=a(5675),n=a.n(s);let i=e=>{let{heading:t,children:a,icon:s,iconColor:i,iconSize:o=25,preHeading:l,image:c,imageWidthClass:d="w-5/6",reverse:h=!1}=e,m={violet:"text-violet-500 dark:text-violet-60",pink:"text-pink-75 dark:text-pink-530",green:"text-green-700 dark:text-green-300",orange:"text-orange-400"};return(0,r.jsxs)("div",{className:"grid grid-cols-1 ".concat(c?"md:grid-cols-2":""," gap-8 my-10"),children:[(0,r.jsxs)("div",{className:"md:mx-4",children:[(0,r.jsx)("div",{className:"grid place-items-center w-12 h-12 rounded-full my-3 ".concat({violet:"bg-violet-50 dark:bg-blue-800",pink:"bg-pink-100 dark:bg-blue-800",green:"bg-green-100 dark:bg-blue-800",orange:"bg-orange-100 dark:bg-blue-800"}[i]),children:(0,r.jsx)("div",{className:m[i],children:(0,r.jsx)(s,{size:o})})}),l&&(0,r.jsx)("span",{className:"".concat(m[i]," mb-3 inline-block font-medium md:font-semibold"),children:l}),(0,r.jsx)("h2",{className:"text-3xl",children:t}),a]}),c&&(0,r.jsx)("div",{className:"flex justify-center "+(h?"md:order-first":""),children:(0,r.jsx)(n(),{src:c,alt:"No fluff",className:d})})]})};t.Z=i},289:function(e,t,a){var r=a(5893);a(7294);let s=e=>{let{color:t}=e;return"pinkToViolet"===t?(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("div",{className:"h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"}),(0,r.jsx)("div",{className:"h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"})]}):(0,r.jsx)("div",{className:"h-[1px] bg-gradient-to-r from-transparent ".concat({violet:"via-violet-500",green:"via-green-600",pink:"via-pink-550",orange:"via-orange-400"}[t]," to-transparent  w-full")})};t.Z=s},6348:function(e,t,a){var r=a(5893);a(7294);let s=e=>{let{children:t,className:a}=e;return(0,r.jsx)("div",{className:"grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ".concat(a),children:t})};t.Z=s},1294:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(5893);a(7294);var s=a(9994);let n=e=>{let{stats:t}=e,a=["text-violet-500 dark:text-violet-60","text-green-600","text-pink-500 dark:text-pink-540","text-orange-400"],n=["violet","green","pink","orange"];return(0,r.jsx)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20",children:t.map((e,t)=>(0,r.jsx)(s.Z,{lightColor:n[t],children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center text-center p-8",children:[(0,r.jsx)("p",{className:"font-bold mb-2 ".concat(a[t]," text-2xl md:text-3xl lg:text-4xl"),children:e.value}),(0,r.jsx)("p",{className:"mb-0 leading-5 text-sm lg:text-base",children:e.label})]})},t))})};var i=a(5023),o=a(736),l=a(4566);let c=()=>{let e=(0,l.pI)();return(0,r.jsx)(i.Z,{preTitle:"Hello,",title:"I'm Mosh Hamedani.",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)(o.Z,{children:"Are you feeling stuck or overwhelmed in your coding journey? Don't worry, I've got your back! Together, we'll work to level up your skills, increase your earning potential, and build a brighter future."}),(0,r.jsx)("div",{className:"max-w-[725px] mx-auto px-3 w-full",children:(0,r.jsx)("video",{controls:!0,src:"https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4",poster:"https://res.cloudinary.com/codewithmosh/image/upload/v1684540564/promo-videos/poster-mosh.webp"})}),(0,r.jsx)(n,{stats:[{label:"Students taught",value:"10M+"},{label:"YouTube fans",value:"3M+"},{label:"Years of experience",value:"20+"},{label:"Coding courses",value:e.bundleContents.length.toString()}]})]})})};var d=c},736:function(e,t,a){var r=a(5893);a(7294);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8",children:t})};t.Z=s},9994:function(e,t,a){var r=a(5893);a(7294);var s=a(289);let n=e=>{let{children:t,lightColor:a}=e;return(0,r.jsxs)("div",{className:"shadow-2xl shadow-gray-50 dark:shadow-none border border-violet-50 dark:border-blue-850 bg-white dark:bg-blue-750 rounded-md relative",children:[(0,r.jsx)("div",{className:"flex justify-center -translate-y-[1px]",children:(0,r.jsx)("div",{className:"w-3/4",children:(0,r.jsx)(s.Z,{color:a})})}),t]})};t.Z=n},1927:function(e,t,a){var r=a(5893),s=a(3750),n=a(8193);let i=e=>{let{items:t,bold:a=!1,bulletType:i="tick",bulletColor:o="#fff"}=e,l="tick"===i?s.IQF:n.ywL;return(0,r.jsx)("ul",{className:"mb-8 space-y-4 text-left",children:t.map((e,t)=>(0,r.jsxs)("li",{className:"flex flex-row items-start space-x-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l,{className:"w-5 h-5 inline flex-shrink-0",color:o})}),(0,r.jsx)("span",{className:a?"font-medium md:font-semibold text-blue-900 dark:text-white":"",children:e})]},t))})};t.Z=i},2818:function(e,t,a){var r=a(5893);a(7294);let s=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"bg-pink-100 dark:bg-blue-600 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500 dark:text-pink-530",children:t})};t.Z=s},7834:function(e,t,a){var r=a(5893),s=a(9008),n=a.n(s);a(7294);let i=e=>{let{title:t="Code with Mosh",description:a="Become the software engineer that companies love to hire.",url:s="https://codewithmosh.com",imageUrl:i="https://res.cloudinary.com/codewithmosh/image/upload/v1685118159/images/web-preview.jpg"}=e;return(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:i}),(0,r.jsx)("meta",{property:"authors",content:"Mosh Hamedani"}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:s}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@moshhamedani"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@moshhamedani"}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:a}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("link",{rel:"canonical",href:s})]})};t.Z=i},5023:function(e,t,a){var r=a(5893);a(7294);let s=e=>{let{children:t,title:a,preTitle:s,...n}=e;return(0,r.jsxs)("section",{className:"flex flex-col mb-10 my-5",...n,children:[(0,r.jsxs)("header",{className:"my-12 mb-6 text-center",children:[s&&(0,r.jsx)("p",{className:"font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase",children:s}),(0,r.jsx)("h2",{className:"text-3xl",children:a})]}),t]})};t.Z=s},6665:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(5893),s=a(5675),n=a.n(s),i={src:"/_next/static/media/3.5.49597ae8.svg",height:96,width:512,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/3.9cfbdf71.svg",height:96,width:512,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/4.5.fbc139f3.svg",height:96,width:512,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/4.8a4b1b75.svg",height:96,width:512,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/5.ea72dfc5.svg",height:96,width:512,blurWidth:0,blurHeight:0};let h=e=>{let{stars:t}=e;return(0,r.jsx)(n(),{src:{5:d,4.5:l,4:c,3.5:i,3:o}[t],className:"inline",width:90,height:30,alt:"Stars","data-testid":"trust-stars",priority:!0})};var m=h},930:function(e,t,a){var r=a(5893),s=a(4566),n=a(4977);let i=e=>{var t,a;let{frequency:i}=e,o=(0,s.pI)(),l=["".concat(null===(t=o.bundleContents)||void 0===t?void 0:t.length," comprehensive courses"),"".concat(o.hours," hours of HD video"),"Downloadable content","Hands-on exercises","English captions","Certificate of completion","Access while subscribed","Learn at your own pace"],c=o.subscription[i],d=(null===(a=c.coupon)||void 0===a?void 0:a.discount)||0,h="monthly"===i?"m":"y",m=12*o.subscription.monthly.price-(o.subscription.annual.price-d);return(0,r.jsx)(n.Z,{benefits:l,buttonLabel:"Subscribe & Save",checkoutUrl:c.checkoutUrl,offering:"All Courses",price:"$".concat(c.price,"/").concat(h),discountedPrice:"$".concat(c.price-d,"/").concat(h),message:"Cancel anytime!",badge:"annual"===i?"Save $".concat(m):void 0})};t.Z=i},6782:function(e,t,a){a.d(t,{ZP:function(){return y}});var r=a(5893),s=a(7294),n=a(5023),i=a(5675),o=a.n(i),l=a(6665);let c=e=>{let{testimonial:t}=e;return(0,r.jsx)("div",{className:"sm:inline-block sm:w-full dark:border-blue-600",children:(0,r.jsxs)("figure",{className:"rounded-2xl h-full bg-gray-50 dark:bg-blue-700 p-5 lg:p-11",children:[(0,r.jsx)("blockquote",{children:(0,r.jsxs)("p",{className:"text-base",children:["“",t.description,"”"]})}),(0,r.jsx)("div",{className:"h-1 bg-violet-75 w-16 my-6"}),(0,r.jsxs)("figcaption",{className:"flex items-center gap-x-4",children:[t.image&&(0,r.jsx)(o(),{className:"h-10 w-10 rounded-full bg-gray-50",src:"/images/testimonials/".concat(t.image),width:40,height:40,alt:t.name}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-semibold text-gray-800 dark:text-white text-sm",children:t.name}),(0,r.jsx)(l.Z,{stars:5})]})]})]})})},d=e=>{let{trustpilotSummary:t}=e;return t?(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[(0,r.jsx)("span",{className:"font-bold mx-1 text-lg",children:{1:"Bad",2:"Poor",3:"Average",4:"Great",5:"Excellent"}[t.score.stars]}),(0,r.jsx)("span",{className:"mx-2 flex items-center",children:(0,r.jsx)(l.Z,{stars:t.score.stars})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold mr-1",children:t.score.trustScore}),"out of 5 based on"," ",(0,r.jsxs)("a",{target:"_blank",href:"https://www.trustpilot.com/review/codewithmosh.com",children:[(0,r.jsx)("span",{className:"font-bold",children:t.numberOfReviews.total})," ","reviews"]})]})]}):null};var h=JSON.parse('[{"name":"Federico Figueredo","description":"I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.","image":"federico.png","target":"homepage"},{"name":"Jake","twitter_handle":"JakeSaterlay","image":"0hUn18Io_400x400.jpeg","description":"I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!","target":"homepage"},{"name":"Barialai Nawabi","twitter_handle":"Braialainawabi","image":"EHsSrXD1_400x400.jpeg","description":"I am proud to say that I have learned a lot from your web development courses, which has helped me to earn a significant income. I would love to continue learning from you. You are a great man. Lots of love from your Afghan student.","target":"homepage"},{"name":"Shawna Staff","twitter_handle":"ShawnaStaffReal","image":"SRTAHLdU_400x400.jpeg","description":"Mosh I did your React Native course when I started my job and it was extremely helpful to me. And I do feel it helped me be successful in my new position and gave me a good foundation to grow from","target":"homepage"},{"name":"Desmond","twitter_handle":"oben_ako","image":"ioGi39PO_400x400.jpeg","description":"Thank you mosh, your JavaScript and React course helped me build my skills in writing clean code, and I now teach and mentor others, I even named my coaching Code with Desmond same as yours, code with mosh. I\'ve earned lots of income from projects and one on one coaching.","target":"homepage"},{"name":"Isaac","twitter_handle":"real_brasmith","image":"dUc_wTFD_400x400.jpeg","description":"React, React Native, C#, Node.js, Python. I got all these skills from you, and I can\'t be thankful enough. Now, I\'m a mentor and have landed a very good paying job. Thank you, Sir.","target":"homepage"},{"name":"Mario","twitter_handle":"MarioContrerasE","image":"r_Toqjd__400x400.jpeg","description":"I was already working as a jr when I knew about your courses back in jan 2019, learned best practices from my co-workers and your courses. Now I can proudly say I\'m a senior dev and still learning from you, the way you teach things is awesome, clear, concise and easy. Thanks","target":"homepage"},{"name":"Narayan","twitter_handle":"gnarayyan","image":"RJH2jUGl_400x400.jpeg","description":"Your courses on DSA, Java and C# helped me to secure Grade A on university exam. I had completed HTML CSS and Js course. Now, I\'m learning Node & React parallelly and already got a client to build a web app. So your courses are good push for me both academically & professionally.","target":"homepage"},{"name":"Masroor","twitter_handle":"MasroorEjaz","image":"FLQW02OA_400x400.jpeg","description":"I have learned xamarin and MERN stack via your courses. I have developed a popular npm package https://npmjs.com/package/react-simple-captcha And currently building a huge SAAS. Thank you so much Mosh","target":"homepage"},{"name":"Pav","twitter_handle":"codewithpav","image":"octUg26W_400x400.jpeg","description":"Learning Python from you enabled me to teach others and implement revenue generating automation scripts using Python for the law firm that I work for! Thank you so much!","target":"homepage"},{"name":"Sabrina","twitter_handle":"eggs_mayhem","image":"a_k7QgoU_400x400.jpeg","description":"You taught me python, and I have been using it for web and machine learning ever since.","target":"homepage"},{"name":"Fenki","twitter_handle":"fenki20","image":"y0uNSUUk_400x400.jpeg","description":"Hey Mosh! With your course’s I managed to switch from a plc-programer to full-stack software development job.","target":"homepage"},{"name":"Patrick O\'Hanlon","description":"I\'ve been using Mosh\'s courses for years and he still remains my favourite teacher.","target":"homepage"},{"name":"Federico Figueredo","description":"I started learning programming w/ Mosh 4 years ago with his C# & .NET courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from Jr. to Ssr. and then to Sr. Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.","image":"federico.png"},{"name":"Enkhjin Batzul","description":"Mosh doesn\'t fail to leave out important details. You can tell that Mosh has put a lot of thought into creating these courses. His professional and personal experience drives these courses to be thoughtful and outstanding."},{"name":"Bart","description":"The best courses I’ve participated so far. Mosh has a unique teaching ability. His lectures are fun and engaging. The visuals are great. Relatively dificult concepts are explained with simple words. Whenever any one asks for a programming course I recommend Mosh Hamedani, and only him. Other courses I’ve had were at best mediocre."},{"name":"Gerald Ikenna","description":"I love how every part of the course is broken down very well that even beginners can understand it and not feel overwhelmed, confused or carried away. Also how the lessons/course is in sections, one can go back to a particular section for review if need be especially when working on the exercises.","image":"gerald.png"},{"name":"Marco Delbue","description":"I found this course to be complete and very clear and easy to follow. Mosh is very good at explaining, it feels like a friend talking to you very naturally, and the course is very entertaining. And it comes at an amazing value! I definitely recommend it!"},{"name":"Nadia Shahid","description":"This is my second course from Mosh and it is great as well, The way he explains little details (how and why\'s) is very helpful and builds a solid base of understanding the code. Great instructor!"},{"name":"Gabriele A","description":"Mosh\'s courses are fabulous! I find his pace of teaching perfect – not too slow and not too fast. The sections are properly broken up so that you can immediately tell from the title what the lession is about. Just a great experience!"},{"name":"Martin Goodrich","description":"Mosh takes the student methodically through how to program in a calm and structured way. I can\'t praise him highly enough and would recommend his courses to novice and experienced software developer alike."},{"name":"Renaud Migeot","description":"Mosh is an excellent instructor. All his courses are succinct and straight to the point. He has an uncanny ability to make very difficult concepts super simple. I have learned a lot from Mosh. Well done Mosh."},{"name":"YK","description":"As someone who has some experience with React, this React/Typescript lesson really made things click for me! The lessons and walk-throughs are so clear and easy to understand. Really recommend.","course":"react"},{"name":"Yusuf Ariyibi","description":"This course (React 18) is the best out there. the explanation of the code is in details, different concepts were explored. My programming experience has really been improved with this course.","course":"react"},{"name":"Santosh Marigowda","description":"Excellent React Course. As always you are excellent in teaching how to code and develop coding skills. I like your way of teaching you explain basics very well. Your courses are planned with mini projects which are close to real world. I have learnt many coding skills from your courses. Thanks for this React course. Santosh.","course":"react"},{"name":"Akshay A","description":"The react course is up to the point, it is really helping to learn in a short period of time. This is my 3rd purchase after node js and DSA, and it\'s worth the money, as we gain good coding ethics from Mosh. Can\'t wait for the 3rd part of the course.","course":"react"},{"name":"Carlos Daniel","description":"Great courses!! I have always a good experience with Mosh, I have learned a lot, I was on zero knowledge about React and Typescript, but now with the course for begginers I\'m able to understand and create react apps. This is an amazing job from Mosh, the examples are clear, good explanation from scratch and all you need to know about the this library.","course":"react"},{"name":"Michael Maher","description":"Mosh explains the concepts very clearly and provides good context for why you should do things a certain way. I\'m already getting a clear picture of how websites work on a fundamental level and I\'m looking forward to continuing my journey with the rest of the HTML/CSS series.","course":"html"},{"name":"Tanya","description":"Mosh\'s courses are easy to follow. He gives frequent challenges to engage the skills as you are lerning them. I am currently comleting the Matering SQL Course, but have utilized several of his courses.","course":"sql"}]');let m=e=>("homepage"===e?h.filter(e=>"homepage"===e.target):h.filter(e=>"homepage"!==e.target&&void 0===e.course)).slice(0,6);var u=a(1583),g=a(7516),p=a(3935);let x=(e,t,a)=>Math.min(Math.max(e,t),a),f=e=>{let{selected:t,onClick:a}=e;return(0,r.jsx)("button",{className:"w-3 h-3 flex items-center mx-1 bg-violet-75 rounded-full ".concat(t?"opacity-100":"opacity-50"),type:"button",onClick:a})},v=e=>{let{enabled:t,onClick:a}=e;return(0,r.jsx)("button",{className:"invisible md:visible z-10 bg-violet-200 text-white rounded-full absolute flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 left-1",onClick:a,disabled:!t,children:(0,r.jsx)(g.gbs,{})})},b=e=>{let{enabled:t,onClick:a}=e;return(0,r.jsx)("button",{className:"invisible md:visible z-10 bg-violet-200 text-white rounded-full absolute flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 right-1",onClick:a,disabled:!t,children:(0,r.jsx)(g.lU2,{})})},w=e=>{let{trustpilotSummary:t,target:a}=e,i=m(a),[o,l]=(0,u.Z)({loop:!0,align:"center"}),[h,g]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),[j,k]=(0,s.useState)(0),[N,I]=(0,s.useState)([]),[S,M]=(0,s.useState)([]),_=(0,s.useCallback)(()=>l&&l.scrollPrev(),[l]),T=(0,s.useCallback)(()=>l&&l.scrollNext(),[l]),C=(0,s.useCallback)(e=>l&&l.scrollTo(e),[l]),Z=(0,s.useCallback)(e=>{I(e.scrollSnapList())},[]),H=(0,s.useCallback)(()=>{if(!l)return;let e=l.internalEngine(),t=l.scrollProgress(),a=l.scrollSnapList().map((a,r)=>{let s=a-t;e.options.loop&&e.slideLooper.loopPoints.forEach(e=>{let n=e.target();if(r===e.index&&0!==n){let e=Math.sign(n);-1===e&&(s=a-(1+t)),1===e&&(s=a+(1-t))}});let n=1-Math.abs(5.2*s);return x(n,0,1)});M(a)},[l,M]),A=(0,s.useCallback)(e=>{k(e.selectedScrollSnap()),g(e.canScrollPrev()),y(e.canScrollNext())},[]);return(0,s.useEffect)(()=>{l&&(Z(l),A(l),H(),l.on("reInit",Z),l.on("reInit",A),l.on("select",A),l.on("reInit",H),l.on("scroll",()=>{(0,p.flushSync)(()=>H())}))},[l,Z,A,H]),(0,r.jsxs)(n.Z,{preTitle:"Testimonials",title:"What my students say",children:[(0,r.jsx)(d,{trustpilotSummary:t}),(0,r.jsxs)("div",{className:"relative mt-10",children:[(0,r.jsx)("div",{className:"overflow-hidden md:max-w-[90%] lg:max-w-4xl mx-auto",ref:o,children:(0,r.jsx)("div",{className:"flex lg:ml-2 mb-10",children:i.map((e,t)=>(0,r.jsx)("div",{className:"lg:pl-2 min-w-0 w-full md:w-3/4 lg:w-1/2 flex-shrink-0 flex-grow-0",style:{...S.length&&{opacity:S[t]}},children:(0,r.jsx)(c,{testimonial:e})},t))})}),(0,r.jsx)(v,{onClick:_,enabled:h}),(0,r.jsx)(b,{onClick:T,enabled:w}),(0,r.jsx)("div",{className:"z-10 absolute bottom-0 left-0 right-0 mt-5 flex items-center justify-center",children:N.map((e,t)=>(0,r.jsx)(f,{selected:t===j,onClick:()=>C(t)},t))})]})]})};var y=w}}]);