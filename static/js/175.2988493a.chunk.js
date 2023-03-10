"use strict";(self.webpackChunktu_espacio_react=self.webpackChunktu_espacio_react||[]).push([[175],{9792:function(e,a,n){n.d(a,{Z:function(){return m}});var s=n(4942),t=n(1413),o=n(9439),r=n(2791),i=n.p+"static/media/form.e2ad07a5b9fe90400d2c.webp";var c=n.p+"static/media/loader.ce90b98ef676f6605733ba07f5cd9c5e.svg",l=n(184);function m(){var e=(0,r.useState)(""),a=(0,o.Z)(e,2),n=a[0],m=a[1],A=(0,r.useState)({Name:"",Surname:"",Phone:"",Mail:"",Message:""}),d=(0,o.Z)(A,2),u=d[0],x=d[1],j=function(e){x((0,t.Z)((0,t.Z)({},u),{},(0,s.Z)({},e.target.name,e.target.value)))};return(0,l.jsxs)("div",{className:"Contact",children:[(0,l.jsxs)("div",{className:"Contact__ImageContainer",children:[(0,l.jsx)("img",{src:i,alt:"Contact-Bg",className:"Contact__ImageContainer--Image"}),(0,l.jsx)("div",{className:"Contact__ImageContainer--Square"})]}),(0,l.jsxs)("div",{className:"Contact__Content",children:[(0,l.jsx)("p",{className:"Contact__Content--Text",children:"ESCRIBINOS"}),(0,l.jsx)("p",{className:"Contact__Content--Title",children:"\xa1ANIMATE A TENER EL HOGAR DE TUS SUE\xd1OS"}),(0,l.jsxs)("form",{className:"Contact__Content--ContactForm",onSubmit:function(e){e.preventDefault(),fetch("https://formsubmit.co/ajax/noguessofia@gmail.com",{method:"post",body:new FormData(e.target)}).then((function(e){return e.ok?m("\xa1Mensaje enviado exitosamente!"):Promise.reject(e)})).catch((function(e){return console.log(e)}),m((0,l.jsx)("img",{alt:"loader",className:"ContactResponseContainer__Loader",src:c}))).finally((function(){x({Name:"",Surname:"",Phone:"",Mail:"",Message:""})}))},children:[(0,l.jsx)("input",{maxLength:2e3,type:"text",name:"Contact-Form",onChange:j,value:"Mensaje enviado desde formulario de contacto",required:!0,className:"Contact--Input Contact-Title-Input"}),(0,l.jsx)("label",{className:"Contact--Label",children:"Nombre"}),(0,l.jsx)("input",{maxLength:2e3,type:"text",name:"Name",onChange:j,value:u.inp_name,required:!0,className:"Contact--Input"}),(0,l.jsx)("label",{className:"Contact--Label",children:"Apellido"}),(0,l.jsx)("input",{maxLength:2e3,type:"text",name:"Surname",onChange:j,value:u.inp_surname,required:!0,className:"Contact--Input"}),(0,l.jsx)("label",{className:"Contact--Label",children:"Tel\xe9fono"}),(0,l.jsx)("input",{maxLength:2e3,type:"tel",name:"Phone",onChange:j,value:u.inp_phone,required:!0,className:"Contact--Input"}),(0,l.jsx)("label",{className:"Contact--Label",children:"Mail"}),(0,l.jsx)("input",{maxLength:2e3,type:"email",name:"Mail",onChange:j,value:u.inp_mail,required:!0,className:"Contact--Input"}),(0,l.jsx)("label",{className:"Contact--Label",children:"Contanos un poco m\xe1s..."}),(0,l.jsx)("textarea",{className:"Contact--TextArea",type:"text",name:"Message",onChange:j,value:u.inp_message,required:!0,maxLength:2e3}),(0,l.jsx)("button",{type:"submit",className:"Contact--Submit",children:"Enviar"}),(0,l.jsx)("div",{className:"ContactResponseContainer",children:n})]})]})]})}},5222:function(e,a,n){n.d(a,{Z:function(){return t}});n(3568);var s=n(184);function t(e){return(0,s.jsx)("div",{className:"HomeAboutUs",id:"Nosotros",children:(0,s.jsxs)("div",{className:"AngledBoxContainer animate AnimatedOpacity",children:[(0,s.jsx)("div",{className:"AngledBoxContainer__BorderSquare SquareTop"}),(0,s.jsx)("div",{className:"AngledBoxContainer__BorderSquare SquareBottom"}),(0,s.jsx)("p",{className:"AngledBoxContainer__Title HomeAboutUsTitle",children:"\xa1HOLA!"}),(0,s.jsx)("div",{className:"AngledBoxContainer__Line AngledBoxBlueLine"}),(0,s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABJCAMAAAAJ8Pg+AAAAM1BMVEUAAAArfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJIrfJJwNoHMAAAAEHRSTlMAwIBA8BDgYDDQsCCgUHCQLrPdEAAAAxtJREFUWMPtl4ly4zAIhiV0WofF+z/tChxFvpStm2x3OuN/2k5DFL4CFlBx69bvkffihzTpKH5GiEqc6reREN2R5PU/gGpCdVIDof84yXeURr8zfR71+G1xb2wDfR61TVXUnwZ113n3Wty6deuL8g6a5nEfVbtT16UsrqXT2T01oLen4Dpoxr30fIx6wr2Cudh3ZPXs1j5T9WKlTK4ZAAJxZBZdqlqsusIp1cVkjq0cn/aEpGMvTwT/EsuoDJwSOJ0ak63f9feCVafTKWsKvjj1EtfLm+J56ZQAch8rTwmN4eVDotOoZulxIMyDE5oinTAsTD9cXFyyPdMnUvWd/DJoiUXUoCQFZoRDFGN5pQLV4EwBrREvxBCOiSCuvrLitQLq4V/8N5I16VEn64j7WnkQtRzE6kKYG4llKLCqRspFnldWXSIZdprXJKskrkmaHiP/NilUzxpDyx5AWGgAspLak1RR5i0SH06i+Vwq47Da6FUnkQ3eInFBzI4kZLVtSWTT8S1SouazJ5Vq25OArun3SYZr4vckixh3JGOxotT3SDEnXStfv/KGFAk/5U6CCpZ8EoPz10h9RhTjkGSbz43kql0m4ZaPzH8nzeuaxqkN9BlJakgyDAjcxSkuGJHGg+rBLXyhrGHSNEPSDHnep8DXyfZPXSR1Il3bvAztwL59BQEHq5c1oFDcfchfJvXTfrmtVj5mbGAHPA6nRw4twhVSHpDIni0PybZDCCb2vWu6RAqnIzRy6yEWQG75RNX2I8dsX6N9s8OyGUNeRz5RJERoMlnXaN8nRTxIHk2zuESazswFd9JOeItd492kDEiuVsSM9pimeUmUrGe7cbCbOLrQp6oFaCtxJ6ZdCTxlKu7TFTbbyxykXsL3g0u6yn9Sz5yGQzkpUDPeTVxzYv14Iaf8QOAqhLg43m9SdiFtnUAjkdkkGQAgjzldvmhiucgNFsx2Niph9PYR8LxpGJozWVxR3661nPjnU3bpPkDGLi6vRVK8Smoz4KglmHL+3syg6/IzACS5FvT/1KQsAFAkFYWVjbh169atW/9FfwB57jsqvy9YnAAAAABJRU5ErkJggg==",alt:"Icon",className:"AngledBoxContainer__Icon HomeAboutUsIcon"}),(0,s.jsxs)("p",{className:"AngledBoxContainer__Text HomeAboutUsText",children:[(0,s.jsx)("span",{children:"Somos Sofi y Luchi,"}),"una fusi\xf3n entre arquitectura y el dise\xf1o de interiores."]})]})})}},5580:function(e,a,n){n.d(a,{Z:function(){return t}});n(3568);var s=n(184);function t(e){return(0,s.jsxs)("div",{className:"HomeProjects",children:[(0,s.jsxs)("div",{className:"HomeProjectsContainer",children:[(0,s.jsxs)("div",{className:"HomeProjectsContainer__Subcontainer animate ProjectsOpacity",children:[(0,s.jsxs)("div",{className:"HomeProjectsContainer__Subcontainer--Title",children:[(0,s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABSCAMAAAArSdmLAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAgMBAoGAwEPDQcFAgsJDgEEZI+AAAAdFJREFUWMPt181ygzAMBGAZgW38Q/T+T1s5TtpmgK6V3lr2sD4YPkBkkglduXLl7yckMoZdOdlJwjbKicRytuVM1Cxyk5Nn2cQZqeXs8j7KLdgoOrSYlygia2ZPVJi59EVx3xfWEAVt/0kdWlU0MUsLU1NjKaK50dKWSltbEk1t8Q/q2CrO6W6UuDkdZnbO5b7oaem+BKcJ5LVTp356XYti3jCrU6sfsRmpc0s3xilopWEKWcFZKfwomMKWr8FI4dljym5hCluYwqckyZAavjxjatjC1LCVozdQePaY+r31Rf3eci+vOLw/r/Rygl9lxpcPp7N6/bkS8dDyaOydWldh+IySh6gwYatvYIqGLUwNW5gasvwtjFDY6sHUqJUwNWolSSPU6OwBZbIAZbIANW6FOQBq1IJjN94XoEzzSoAyzR5QJgtRts/9K0Wdslu0p7zI5jTqJfeZOGDtKCpR7lkpybfEsLMQpQnJ7e/LFfqyAIUDLERhC1PYwpTdwpTdckqVGp5fPLVobb7VorXcK2nxpuXvVcOxlZ9/eHtxr0l3esVWojWJb8XtQD62JqnMs8yPSlJbrczcS561SnrU3KruLfXfjaddljq9k5rpypV/nQ9DViLdgTa6BwAAAABJRU5ErkJggg==",alt:"Icon"}),(0,s.jsx)("p",{children:"NUESTROS PROYECTOS"})]}),(0,s.jsx)("div",{className:"Home-Projects1 ProjectsImage1"}),(0,s.jsx)("div",{className:"Home-Projects1 ProjectsImage2"})]}),(0,s.jsxs)("div",{className:"HomeProjectsContainer__Subcontainer animate ProjectsOpacity",children:[(0,s.jsxs)("div",{className:"Mosaic",children:[(0,s.jsx)("div",{className:"Home-Projects2 ProjectsImage3"}),(0,s.jsx)("div",{className:"Home-Projects2 ProjectsImage4"}),(0,s.jsx)("div",{className:"Home-Projects2 ProjectsImage5"}),(0,s.jsx)("div",{className:"Home-Projects2 ProjectsImage6"})]}),(0,s.jsx)("div",{className:"Home-Projects1 ProjectsImage7"}),(0,s.jsx)("div",{className:"Home-Projects1 ProjectsImage8"})]})]}),(0,s.jsx)("div",{className:"HomeProjects__Bg"})]})}},7528:function(e,a,n){n.d(a,{Z:function(){return o}});var s=n.p+"static/media/home-yourhouse.a501487af0c9b716f498.webp",t=(n(3568),n(184));function o(e){return(0,t.jsx)("div",{className:"HomeYourHouse",children:(0,t.jsxs)("div",{className:"HomeYourHouseContainer",children:[(0,t.jsxs)("div",{className:"HomeYourHouseContainer__ImageContainer animate AnimatedImageContainer1",children:[(0,t.jsx)("img",{src:s,alt:"BgImage",className:"HomeYourHouseContainer__ImageContainer--Image"}),(0,t.jsx)("div",{className:"HomeYourHouseContainer__ImageContainer--Square animate AnimatedSquare1"})]}),(0,t.jsxs)("div",{className:"HomeYourHouseContainer__Content animate AnimatedContent1",children:[(0,t.jsx)("p",{className:"HomeYourHouseContainer__Content--Title animate AnimatedText",children:"TU CASA,"}),(0,t.jsx)("p",{className:"HomeYourHouseContainer__Content--Title animate AnimatedText",children:"COMO SIEMPRE"}),(0,t.jsx)("p",{className:"HomeYourHouseContainer__Content--Title animate AnimatedText",children:"LA SO\xd1ASTE"}),(0,t.jsx)("p",{className:"HomeYourHouseContainer__Content--Text animate AnimatedText",children:"Juntas te ayudaremos a lograr tu espacio ideal en el cual te sientas feliz, orgulloso e identificado."})]})]})})}},1696:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var s=n(9792),t=n(5222),o=n.p+"static/media/home-hero.1acf8f87283bc15f9240.webp",r=n(3302),i=n(4302),c=n(3052),l=n(184);function m(){return(0,l.jsx)("div",{className:"HomeHero",children:(0,l.jsxs)("div",{className:"HomeHeroContainer",children:[(0,l.jsxs)("div",{className:"HomeHeroContainer__Content",children:[(0,l.jsxs)("div",{className:"HomeHeroContainer__Content--Title",children:[(0,l.jsx)("p",{className:"HomeHeroTitle HomeHeroTitle-Line1",children:"dise\xf1amos"}),(0,l.jsx)("h1",{className:"HomeHeroTitle HomeHeroTitle-Line2",children:"tu espacio"}),(0,l.jsx)("p",{className:"HomeHeroTitle HomeHeroTitle-Line3",children:"a tu medida"})]}),(0,l.jsx)("p",{className:"HomeHeroContainer__Content--Description",children:"Packs pensados para que renueves tu hogar a tu tiempo y con tu presupuesto."}),(0,l.jsxs)("a",{href:"#Nosotros",className:"HomeHeroContainer__Content--Button",children:[(0,l.jsx)("p",{children:"Conoc\xe9 m\xe1s"}),(0,l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAATCAYAAACHrr18AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD5SURBVEhL7dO/y0FRHMfxm/JjoEx+ZZFSelZ/gVHIYGKQxKL8Kf4Eq6eUWZTBIn+ERRblyUDJdL2PvgZ6xMFluZ96Dedz7jmH4zLs2PlKTNP0IiVDrbAuioQM9cLCNFaowSP13fDsD2boSaUXFvrRwQYVqW+GZxwIY4QFijKlHxY78YsdGlL/G+aTGGKJrNTPh01c6GGPnNQXoY+jiznKcMvUa2GjAMZQ156R+hTGPqhbWaMq9fvCph4MsEVBuhj6UL9pCQ+/hFph4yAm+EMebag3vw5rDj2HA0KY4gD1AZoyZX04LAJ17S1Y+02vw4Hqf/7ZQ+3oxTCOiFD6qi3+IBAAAAAASUVORK5CYII=",alt:"Flecha"})]})]}),(0,l.jsx)("div",{className:"HomeHeroContainer__Bottom",children:(0,l.jsx)("div",{className:"HomeHeroContainer__Bottom--Square"})}),(0,l.jsx)("div",{className:"HomeHeroContainer__ImageContainer",children:(0,l.jsx)("img",{src:o,alt:"HeroImage",className:"HomeHeroContainer__ImageContainer--Image"})}),(0,l.jsxs)("div",{className:"HomeHeroContainer__SocialMedia",children:[(0,l.jsx)("a",{href:"https://www.instagram.com/tuespacio/",target:"_blank",rel:"noreferrer",className:"HomeHeroContainer__SocialMedia--Link",children:(0,l.jsx)("img",{src:i,alt:"",className:"SocialMedia--Image ig"})}),(0,l.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",className:"HomeHeroContainer__SocialMedia--Link",children:(0,l.jsx)("img",{src:c,alt:"",className:"SocialMedia--Image fb"})}),(0,l.jsx)("a",{href:"https://www.instagram.com/tuespacio/",target:"_blank",rel:"noreferrer",className:"HomeHeroContainer__SocialMedia--Link",children:(0,l.jsx)("img",{src:r,alt:"",className:"SocialMedia--Image wsp"})})]})]})})}var A=n(1087);n(3568);function d(e){return(0,l.jsx)("div",{className:"HomePacks",children:(0,l.jsxs)("div",{className:"AngledBoxContainer HomePacksContainer animate AnimatedOpacity ",children:[(0,l.jsx)("div",{className:"AngledBoxContainer__BorderSquare SquareTop"}),(0,l.jsx)("div",{className:"AngledBoxContainer__BorderSquare SquareBottom"}),(0,l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABaCAMAAACfZcj/AAAAM1BMVEUAAAC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXC0jXDRXBsoAAAAEHRSTlMAgEDAEPCg4GDQMCCwUJBw9Fyd3AAAAcxJREFUaN7tlttu6yAQRYcZLgbf9v9/7SnmpFEbiEUNVdOyXowSi8WGsQYavBTzLqJCGq9W7Ept0RYHMr/N7xBxe1OBByBiABOmOLvEH2xDgwCbfnsqIFo47poHVDMBv08WA5g5jT2MbmWwcLfhBhfu3rXdJm2UwUA1M+Snku4G186wQHIl3PAcdiBTNRMwtzLMwJTbO9/yi3MPIThqm8F4qFftorUdy8OCbatzvq/YhE8CS00JBoY/CLym5grst0RLEnRQLMe07LoIUkcw81FY2KgP6qgfC7NSL2Y+9kvTYPCDYFXLHmpvkfXYqnbwJaaaluaZckxAqf+zg6toy6UbqXuyGwxMNRfhcgRgLi+sQYTnIdT1CALYyyEErhhBFKDNxRDlA1MAK4DUxRBSKjptIBQNJyGuRTgMJyGuRUiGkxBXIiTDWYgrEZLhWYhwFiKUIugF4P+G9Njya7UwJ5tURuhu0AZl6CkeJby+GSJcVmxnR30A7PyRQJFkiGj+hIW/v3gOwMWKotI/kgbDMAzDQDuWzgZaQk9D4vUNq+5sWGFfvlrrDKG7gYfhjxh+w/fwDQYDr7IIoPKYug604Qsw1TBJLQvTYDAYtOAfy2kt12Bm8BcAAAAASUVORK5CYII=",alt:"Icon",className:"AngledBoxContainer__Icon HomePacksIcon"}),(0,l.jsx)("p",{className:"AngledBoxContainer__Text HomePacksText",children:"Eleg\xed el pack que mejor se adapta a vos!"}),(0,l.jsx)("div",{className:"AngledBoxContainer__Line AngledBoxBrownLine"}),(0,l.jsx)("p",{className:"AngledBoxContainer__Title HomePacksTitle",children:"PACKS"}),(0,l.jsx)(A.rU,{style:{textDecoration:"inherit",color:"#ffffff"},to:"/Packs",className:"HomePacksButton",children:"Ver Opciones +"})]})})}var u=n(5580),x=n(7528);n(3439);function j(){return(0,l.jsxs)("div",{className:"HomePage",children:[(0,l.jsx)(m,{}),(0,l.jsx)(t.Z,{}),(0,l.jsx)(x.Z,{}),(0,l.jsx)(u.Z,{}),(0,l.jsx)(d,{}),(0,l.jsx)(s.Z,{})]})}},3568:function(){window.addEventListener("scroll",(function(){for(var e=document.querySelectorAll(".animate"),a=0;a<e.length;a++){var n=window.innerHeight/1.5;e[a].getBoundingClientRect().top<=n&&e[a].classList.remove("AnimatedOpacity","AnimatedImageContainer1","AnimatedSquare1","AnimatedContent1","AnimatedText","ProjectsOpacity")}}))},3439:function(){}}]);
//# sourceMappingURL=175.2988493a.chunk.js.map