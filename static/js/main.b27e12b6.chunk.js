(this["webpackJsonpcalebcode-tech"]=this["webpackJsonpcalebcode-tech"]||[]).push([[0],{23:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAByklEQVR4nO3d4UrDMBRA4UR8aB/Bt85QUMtIu9x2Nz2u5wN/bcKaQ6zLRlIkSdJrqL2raK11L67W2n9A3eH6Gsdau0O8ajiIMXaJ1SilvI88aRmjftjlkfb526FFo7w9eoIx4o6M02YQY8y3GsQY5+gGMcZ5tv9kGWO6hzd1zWUQGIPAGATGIDAGgTEIjEESLBYXw4ZWe5/hyIv8x8IXPWWGGGNc+gy5i3HJMhGpM8QYcWlBrhxj7TsJI1KCODP2y76pGyMoNYifp8T5xhDGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQhM9gZm7j4TlBLkbhcgowSkzRCj7DNzvyyjDEi/qXeivPzPzwlFe/ZenPJf1kV3lmvRQyXLxp6I3yPoFn37HNkE1PchCdLOMdR8BoExCIxBYAwCYxAYg8BsBrnoyTinWgvyd2S+UabamiFGOUE3yGKV0iiTrc4Qo+x3ZJy6v7lcx18sIbv0G/f8cwx7M0VDHC9Jki6rlHIDIHqUDcq2haAAAAAASUVORK5CYII="},27:function(e,n,t){e.exports=t.p+"static/media/FCCTribute.ce8df2a4.png"},28:function(e,n,t){e.exports=t.p+"static/media/FCCSurvey.b07c8d48.png"},29:function(e,n,t){e.exports=t.p+"static/media/FCCLandingPage.180fa0e3.png"},30:function(e,n,t){e.exports=t.p+"static/media/JSGuessGame.16a7f83a.png"},32:function(e,n,t){e.exports=t(45)},37:function(e,n,t){},38:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),o=t.n(i),l=(t(37),t(38),t(9)),c=t(10),s=t(12),m=t(11),d=t(3),u=t(7),p=t(23),g=t.n(p),h=t(31),f=t(4);function b(){var e=Object(d.a)(["\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(3, 200px);\n    grid-column-gap: 50px;\n    \n\n    .nav-links{\n        align-items: center;\n        color: #000;\n        display: grid;\n        font-size: 1.5rem;\n        height: 50px;\n        text-decoration: none;\n    }\n\n    .nav-links:hover{\n        font-size: 1.7rem;\n    }\n\n    li {\n        \n        \n        z-index: 20;\n    }\n\n    @media (max-width: 768px) {\n        align-items: center;\n        background-color: #62a87c;\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(3, 120px);\n        height: 99vh;\n        justify-items: center;\n        padding-top: 3.5rem;\n        position: fixed;\n        right: 0;\n        top: 0;\n        transform: ",";\n        transition: transform 0.3s ease-in-out;\n        width: 99vw;\n        z-index: 20;\n\n        li {\n            color: #000;\n            font-size: 3rem;\n            z-index: 20;\n        }\n    }\n"]);return b=function(){return e},e}var v=f.a.ul(b(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),x=function(e){var n=e.open;return r.a.createElement(v,{className:"nav-list",open:n},r.a.createElement(u.b,{to:"/Caleb_React_Website",className:"nav-links"},r.a.createElement("li",null,"Home")),r.a.createElement(u.b,{to:"/Projects",className:"nav-links"},r.a.createElement("li",null,"Projects")),r.a.createElement(u.b,{to:"/Contact",className:"nav-links"},r.a.createElement("li",null,"Contact")))};function E(){var e=Object(d.a)(["\n    width: 60px;\n    height: 60px;\n    position: fixed;\n    top: 30px;\n    right: 30px;\n    z-index: 30;\n    display: none;\n\n    @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-between;\n        flex-flow: column nowrap;\n    }\n\n    div{\n        width: 60px;\n        height: 8px;\n        background-color: ",";\n        border-radius: 10px;\n        transform-origin: 8px;\n        transition: all 0.3s linear;\n\n        &:nth-child(1) {\n            transform: ",";\n        }\n\n        \n        &:nth-child(2) {\n            transform: ",";\n            opacity: ","\n        }\n\n        &:nth-child(3) {\n            transform: ","\n        }\n    }\n"]);return E=function(){return e},e}var j=f.a.div(E(),(function(e){e.open;return"#000"}),(function(e){return e.open?"rotate(45deg) translateX(25%)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg) translateX(25%)":"rotate(0)"})),w=function(){var e=Object(a.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{open:t,onClick:function(){return i(!t)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(x,{open:t}))};function y(){var e=Object(d.a)(["\n    align-items: center;\n    background-color: #62A87C;\n    display: grid;\n    grid-template-columns: 120px auto;\n    height: 120px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n\n    &:nth-child(1){\n        justify-items: end;\n    }\n\n    .img-link{\n        align-items: center;\n        display: grid;\n        height: 120px;\n        justify-items: center;\n    }\n\n    .logo-img{\n        height: 100px;\n    }\n"]);return y=function(){return e},e}var C=f.a.div(y()),k=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(u.b,{to:"/Caleb_React_Website",className:"img-link"},r.a.createElement("img",{alt:"Letter C logo links to home",className:"logo-img",src:g.a})),r.a.createElement(w,null))}}]),t}(a.Component);function A(){var e=Object(d.a)(["\n    background-color: #89be9c;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 250px 200px 200px;\n    margin-top: 150px;\n    padding-bottom: 100px;\n    width: 100vw;\n\n    div.intro-container{\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    h1{\n        margin: 30px;\n        width:85%;\n    }\n\n    p{\n        margin-left: 30px;\n        padding: 30px 0;\n        width: 65%;\n    }\n\n    .project-link,\n    .contact-link{\n        background-color: #99e9ff;\n        border: 2px solid black;\n        border-radius: 10px;\n        color: #000;\n        grid-column-start: 1;\n        grid-column-end: 2;\n        height: 80%;\n        margin-left: 30px;\n        text-decoration: none;\n        width: 90%;\n    }\n\n    div.button{\n        align-items: center;\n        display: grid;\n        font-size: 2rem;\n        height: 100%;\n        justify-items: center;\n        width: 100%;\n    }\n\n"]);return A=function(){return e},e}var N=f.a.div(A()),O=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement("div",{className:"intro-container"},r.a.createElement("h1",null,"Welcome to my website!"),r.a.createElement("p",null,"My name is Caleb. I have been a carpenter for 8 years, but I have always been drawn to development. Starting in August 2019, I began learning programming. ")),r.a.createElement(u.b,{className:"project-link",to:"/Projects"},r.a.createElement("div",{className:"button"},"Projects")),r.a.createElement(u.b,{className:"contact-link",to:"/Contact"},r.a.createElement("div",{className:"button"},"Contact")))}}]),t}(a.Component);function B(){var e=Object(d.a)(["\n    background-color: lightblue;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 100px;\n    width: 100vw;\n\n\n\n"]);return B=function(){return e},e}var G=f.a.div(B()),I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,r.a.createElement("h1",null,"I am footer")))};function F(){var e=Object(d.a)(["\n    background-color: #89be9c;\n    display: grid;\n    grid-template-rows: 120px 100vh 100px;\n    min-height: 100vh;\n    overflow-x: hidden;\n    position: relative;\n\n\n"]);return F=function(){return e},e}var M=f.a.div(F()),S=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(k,null),r.a.createElement(O,null),r.a.createElement(I,null))}}]),t}(a.Component),P=t(27),Y=t.n(P),z=t(28),W=t.n(z),J=t(29),T=t.n(J),D=t(30),Q=t.n(D);function U(){var e=Object(d.a)(["\n    background-color: #89BE9C;\n    display: grid;\n    min-height: 100vh;\n    overflow-x: hidden;\n    position: relative;\n    max-width: 100vw;\n\n    div.project-grid{\n        align-items: center;\n        display: grid;\n        grid-gap: 30px;\n        grid-template-columns: repeat(3, 350px);\n        grid-template-rows: repeat(3, 350px);\n        min-height: 130vh;\n        justify-items: center;\n        justify-self: center;\n        margin-top: 180px;\n        padding-bottom: 100px;\n\n        @media(max-width: 1200px){\n            grid-template-columns: repeat(2, 350px);\n        }\n        \n        @media(max-width: 768px){\n            grid-template-columns: 1fr;\n        }\n    }\n\n    div.project{\n        background-color: #99E9FF;\n        border-radius: 10px;\n        padding: 10px;\n    }\n\n    div.project a{\n        color: #000;\n        text-decoration: none;\n    }\n\n    img.project-tile{\n        border: 2px solid #000;\n        border-radius: 10px;\n        cursor: pointer;\n        height: 300px;\n    }\n\n    p{\n        text-align: center;\n    }\n\n"]);return U=function(){return e},e}var R=f.a.div(U()),X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,r.a.createElement(k,null),r.a.createElement("div",{className:"project-grid"},r.a.createElement("div",{className:"project project5"},r.a.createElement("a",{href:"https://calebcoe.bitbucket.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"JavaScript Guessing Game",className:"project-tile",src:Q.a}),r.a.createElement("p",null,"JavaScript Guessing Game"))),r.a.createElement("div",{className:"project project6"},r.a.createElement("a",{href:"https://codepen.io/UsernameChosen/pen/eYJPOMj?editors=0110",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"A landing page template for Free Code Camp",className:"project-tile",src:T.a}),r.a.createElement("p",null,"FCC Landing Page"))),r.a.createElement("div",{className:"project project7"},r.a.createElement("a",{href:"https://codepen.io/UsernameChosen/pen/ExPQNPN?editors=0100",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"A survey form template for Free Code Camp",className:"project-tile",src:W.a}),r.a.createElement("p",null,"FCC Survey Form"))),r.a.createElement("div",{className:"project project8"},r.a.createElement("a",{href:"https://codepen.io/UsernameChosen/pen/OJMxbrW?editors=0100",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Tribute Page to Nikola Tesla for Free Code Camp",className:"project-tile",src:Y.a}),r.a.createElement("p",null,"FCC Tribute Page"))))))};function L(){var e=Object(d.a)(["\n\n    background-color: #89BE9C;\n    display: grid;\n    grid-template-rows: auto 1000px;\n    padding-left: 10%;\n    min-width: 98%;\n\n\n\n    div.contact-heading{\n        margin: 30px 0;\n\n        @media (max-width: 768px){\n            width: 80%;\n        }\n    }\n\n    div.contact-heading h1{\n        font-size: 2.3rem;\n    }\n\n    div.contact-heading p,\n    label p{\n        font-size: 1.6rem;\n    }\n\n\n    form.contact-form{\n        background-color: #62a87c;\n        border-radius: 10px;\n        display: grid;\n        grid-template-rows: 1fr 1fr 2fr 1fr;\n        height: 50%;\n        justify-items: center;\n        padding: 20px;\n        width: 800px;\n\n        @media (max-width: 1000px){\n            width: 75%;\n        }\n    }\n\n    form.contact-form div{\n        display: grid;\n        padding-left: 20px;\n        width: 100%;\n    }\n\n    label{\n        width: 80%;\n    }\n\n    label p{\n        padding-bottom: 5px;\n    }\n\n\n    input,\n    textarea{\n        border: 1px solid #000;\n        border-radius: 8px;\n        background-color: #70e0ff;\n        box-sizing: border-box;\n        outline: none;\n        padding: 10px;\n        width: 100%;\n    }\n\n    textarea{\n        height: 70%;\n        resize: none;\n    }\n    \n\n    div.submit-button button{\n        align-self: end;\n        background-color: #70e0ff;\n        border: 1.5px solid #000;\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 1.2rem;\n        height: 65px;\n        margin-bottom: 10px;\n        outline: none;\n        width: 80%;\n    }\n"]);return L=function(){return e},e}var _=f.a.div(L()),q=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={name:"",email:"",message:""},a}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){var n=this;e.preventDefault(),fetch("http://localhost:3002/send",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(alert("Message Sent!"),n.resetForm()):"fail"===e.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement("div",{className:"contact-heading"},r.a.createElement("h1",null,"Want to tell me a secret?"),r.a.createElement("p",null,"Fill out this form to send me an email! (",r.a.createElement("u",null,"Work in Progress"),")"),r.a.createElement("p",null,"Or send one directly to calebcoecode@gmail.com.")),r.a.createElement("form",{action:"submit",className:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},r.a.createElement("div",{className:"contact-name"},r.a.createElement("label",{htmlFor:"name"},r.a.createElement("p",null,"Name:"),r.a.createElement("input",{placeholder:"What is your name?",type:"text",value:this.state.name,onChange:this.onNameChange.bind(this),required:!0}))),r.a.createElement("div",{className:"contact-email"},r.a.createElement("label",{htmlFor:"email"},r.a.createElement("p",null,"Email:"),r.a.createElement("input",{placeholder:"What is your email?",type:"email",value:this.state.email,onChange:this.onEmailChange.bind(this),required:!0}))),r.a.createElement("div",{className:"contact-message"},r.a.createElement("label",{htmlFor:"name"},r.a.createElement("p",null,"Message:"),r.a.createElement("textarea",{placeholder:"Enter your message here",value:this.state.message,onChange:this.onMessageChange.bind(this),required:!0}))),r.a.createElement("div",{className:"submit-button"},r.a.createElement("button",{type:"submit"},"Send Message"))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(a.Component);function H(){var e=Object(d.a)(["\n    background-color: #89be9c;\n    display: grid;\n    grid-template-rows: 120px 90vh;\n    min-height: 80vh;\n    overflow-x: hidden;\n    padding-top: 150px;\n    width: 99vw;\n\n    \n"]);return H=function(){return e},e}var V=f.a.div(H()),K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null,r.a.createElement(k,null),r.a.createElement(q,null)))},Z=t(1),$=function(){return r.a.createElement(Z.c,null,r.a.createElement(Z.a,{exact:!0,path:"/Caleb_React_Website",component:S}),r.a.createElement(Z.a,{path:"/Projects",component:X}),r.a.createElement(Z.a,{path:"/Contact",component:K}))};var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b27e12b6.chunk.js.map