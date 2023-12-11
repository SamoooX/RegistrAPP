"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5331],{5331:(G,h,l)=>{l.r(h),l.d(h,{QrPageModule:()=>F});var u,v=l(6814),d=l(95),a=l(9843),m=l(2692),f=l(5861),o=l(5879),C=l(7398),y=l(547),b=l(4532),M=new Uint8Array(16);function A(){if(!u&&!(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(M)}const _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=[],p=0;p<256;++p)s.push((p+256).toString(16).substr(1));const S=function T(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(s[n[e+0]]+s[n[e+1]]+s[n[e+2]]+s[n[e+3]]+"-"+s[n[e+4]]+s[n[e+5]]+"-"+s[n[e+6]]+s[n[e+7]]+"-"+s[n[e+8]]+s[n[e+9]]+"-"+s[n[e+10]]+s[n[e+11]]+s[n[e+12]]+s[n[e+13]]+s[n[e+14]]+s[n[e+15]]).toLowerCase();if(!function P(n){return"string"==typeof n&&_.test(n)}(i))throw TypeError("Stringified UUID is invalid");return i},O=function x(n,e,i){var t=(n=n||{}).random||(n.rng||A)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=t[r];return e}return S(t)};let Q=(()=>{var n;class e{constructor(t,r){this.navCtrl=t,this.modalCtrl=r,this.utilsSvc=(0,o.f3M)(b.F),this.firebaseSvc=(0,o.f3M)(y.O),this.formAsignatura=new d.cw({id:new d.NI(""),nombre_asignatura:new d.NI("",d.kI.required)})}ngOnInit(){}onSubmit(){}dismissModal(){this.utilsSvc.dismissModal()}agregarAsignatura(){var t=this;return(0,f.Z)(function*(){if(t.formAsignatura.valid){const r=yield t.utilsSvc.loading();yield r.present();const c={id:O(),nombre_asignatura:t.formAsignatura.get("nombre_asignatura").value};t.firebaseSvc.addDocument("asignaturas",c).then(()=>{console.log("Asignatura agregada correctamente"),t.dismissModal(),t.modalCtrl.dismiss({dismissed:!0,event:"asignaturaAgregada"})}).catch(g=>{console.error("Error al agregar la asignatura: ",g)}).finally(()=>{r.dismiss()})}})()}}return(n=e).\u0275fac=function(t){return new(t||n)(o.Y36(a.SH),o.Y36(a.IN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-modal"]],decls:13,vars:1,consts:[[1,"modal-header"],["fill","clear",3,"click"],["name","close-outline",2,"color","black"],[1,"ion-padding"],[3,"formGroup","ngSubmit"],["name","Nombre de Asignatura",1,"ion-padding"],["labelPlacement","floating","label","Nombre de asignatura","required","","type","text","aria-label","text","name","text","formControlName","nombre_asignatura"],["id","boton","expand","full","color","warning","type","submit",1,"animate__animated","animate__flip"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-button",1),o.NdJ("click",function(){return r.dismissModal()}),o._UZ(3,"ion-icon",2),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Agregar Asignatura"),o.qZA()()(),o.TgZ(6,"ion-content",3)(7,"form",4),o.NdJ("ngSubmit",function(){return r.agregarAsignatura()}),o.TgZ(8,"ion-item"),o._UZ(9,"ion-icon",5)(10,"ion-input",6),o.qZA(),o.TgZ(11,"ion-button",7),o._uU(12,"Agregar"),o.qZA()()()),2&t&&(o.xp6(7),o.Q6J("formGroup",r.formAsignatura))},dependencies:[a.YG,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.wd,a.sr,a.j9,d._Y,d.JJ,d.JL,d.Q7,d.sg,d.u],styles:["h3[_ngcontent-%COMP%]{color:#fff}#boton[_ngcontent-%COMP%]{position:fixed;bottom:0;width:90%}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.modal-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:absolute;width:100%;text-align:center}.modal-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;left:0;top:7px}"]}),e})();var U=l(9862),R=l(6401),w=l(6471);function N(n,e){if(1&n){const i=o.EpF();o.TgZ(0,"ion-accordion-group",7)(1,"ion-accordion")(2,"ion-item",8),o._UZ(3,"ion-icon",9),o.TgZ(4,"ion-label")(5,"h1"),o._uU(6),o.qZA()()(),o.TgZ(7,"div",10)(8,"ion-accordion-group")(9,"ion-accordion")(10,"ion-item",8),o._UZ(11,"ion-icon",11),o.TgZ(12,"ion-label")(13,"h1"),o._uU(14,"001D"),o.qZA()()(),o.TgZ(15,"div",10)(16,"ion-button",12),o.NdJ("click",function(){const c=o.CHM(i).$implicit,g=o.oxw();return o.KtG(g.onClickAndSetCod("gqr",c.id))}),o._uU(17," Generar QR "),o.qZA()()()()()()()}if(2&n){const i=e.$implicit;o.xp6(6),o.Oqu(i.nombre_asignatura)}}const J=[{path:"",component:(()=>{var n;class e{constructor(t,r,c,g){this.router=t,this.http=r,this.dataService=c,this.modalController=g,this.ramos=[],this.firebaseSvc=(0,o.f3M)(y.O),this.utilsSvc=(0,o.f3M)(b.F)}ionViewWillEnter(){var t=this;return(0,f.Z)(function*(){t.ramos=yield t.firebaseSvc.getSubjects(),console.log(t.ramos)})()}ngOnInit(){}getRamos(){return this.http.get("assets/files/ramos.json").pipe((0,C.U)(t=>t.data))}doRefresh(t){console.log("Iniciando operaci\xf3n async"),setTimeout(()=>{console.log("Operaci\xf3n async finalizada"),this.ionViewWillEnter(),t.target.complete()},2e3)}onClick(t){this.router.navigate(["/"+t])}setCod(t){this.dataService.setCodigoAsig(t)}onClickAndSetCod(t,r){this.onClick(t),this.setCod(r)}ModalAgregarAsignatura(){var t=this;return(0,f.Z)(function*(){const r=yield t.modalController.create({component:Q,cssClass:"add-asignatura-modal"});yield r.present();const{data:c}=yield r.onDidDismiss();c&&"asignaturaAgregada"===c.event&&setTimeout(()=>t.ionViewWillEnter(),1e3)})()}}return(n=e).\u0275fac=function(t){return new(t||n)(o.Y36(m.F0),o.Y36(U.eN),o.Y36(R.D),o.Y36(a.IN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-qr"]],decls:11,vars:1,consts:[["titulo","Generacion de QR"],["slot","fixed",3,"ionRefresh"],["color","mycolor","lines","none",1,"titulo"],["back","",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","warning",3,"click"],["name","add"],["back",""],["slot","header","lines","full","color","mycolor",1,"ramos"],["slot","start","name","ellipsis-vertical-outline",1,"ion-no-margin"],["slot","content","color","mycolor",1,"ion-padding"],["slot","start","name","book-outline"],["expand","block","color","warning","shape","round",3,"click"]],template:function(t,r){1&t&&(o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"ion-refresher",1),o.NdJ("ionRefresh",function(g){return r.doRefresh(g)}),o._UZ(3,"ion-refresher-content"),o.qZA(),o.TgZ(4,"ion-item",2)(5,"ion-label"),o._uU(6,"TUS ASIGNATURAS"),o.qZA()(),o.YNc(7,N,18,1,"ion-accordion-group",3),o.TgZ(8,"ion-fab",4)(9,"ion-fab-button",5),o.NdJ("click",function(){return r.ModalAgregarAsignatura()}),o._UZ(10,"ion-icon",6),o.qZA()()()),2&t&&(o.xp6(7),o.Q6J("ngForOf",r.ramos))},dependencies:[v.sg,a.We,a.eh,a.YG,a.W2,a.IJ,a.W4,a.gu,a.Ie,a.Q$,a.nJ,a.Wo,w.G],styles:["h1[_ngcontent-%COMP%]{font-size:15px}h2[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-mycolor-contrast)}.ramos[_ngcontent-%COMP%]{background-color:var(--ion-color-mycolor-contrast);color:#000}.titulo[_ngcontent-%COMP%]{background-color:#237b9f;color:var(--ion-color-mycolor-contrast);padding-left:5px}div[_ngcontent-%COMP%]{background-color:var(--ion-color-mycolor-contrast);color:#000}.agregar[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}*[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}"]}),e})()}];let k=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[m.Bz.forChild(J),m.Bz]}),e})();var I=l(822);let F=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[v.ez,d.u5,a.Pc,k,I.K]}),e})()}}]);