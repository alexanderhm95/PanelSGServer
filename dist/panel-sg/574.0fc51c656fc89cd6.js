"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[574],{7574:(Te,h,c)=>{c.r(h),c.d(h,{UsuariosModule:()=>Ue});var T=c(4466),_=c(6895),f=c(668),v=c(6561),e=c(8256),b=c(2126),C=c(3469),w=c(2340),I=c(529);let Z=(()=>{class t{constructor(r){this.http=r,this.URL=w.N.api+"/api/1.0"}createUser(r){return this.http.post(`${this.URL}/user`,r)}getAllUser(){return this.http.get(`${this.URL}/user`)}getUser(r){return this.http.get(`${this.URL}/user/${r}`)}changedStatusUser(r,n){return this.http.post(`${this.URL}/user/status`,{id:r,action:n})}deleteUser(r){return this.http.delete(`${this.URL}/user/${r}`)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(I.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=c(1045),A=c(8622),l=c(433);function N(t,o){1&t&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"div",5),e._UZ(4,"div",6),e.TgZ(5,"div",7)(6,"span",8),e._uU(7,"Cargando"),e.qZA(),e.TgZ(8,"span",9),e._uU(9,"..."),e.qZA()()()()())}function k(t,o){1&t&&(e.ynx(0),e._uU(1," Administrador "),e.BQk())}function Q(t,o){1&t&&(e.ynx(0),e._uU(1," Docente "),e.BQk())}function q(t,o){if(1&t&&e._uU(0),2&t){const r=e.oxw(2).$implicit;e.hij(" ","DECE"===r.role?"DECE":r.role," ")}}function J(t,o){if(1&t&&(e.YNc(0,Q,2,0,"ng-container",28),e.YNc(1,q,1,1,"ng-template",null,37,e.W1O)),2&t){const r=e.MAs(2),n=e.oxw().$implicit;e.Q6J("ngIf","TEACHER"===n.role)("ngIfElse",r)}}function Y(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",38),e.TgZ(2,"span",39),e._uU(3,"ON"),e.qZA(),e.BQk())}function R(t,o){1&t&&(e.TgZ(0,"span",40),e._uU(1,"OFF"),e.qZA(),e._UZ(2,"i",41))}function L(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"tr")(1,"td",26),e._uU(2),e.qZA(),e.TgZ(3,"td",26),e._uU(4),e.qZA(),e.TgZ(5,"td",27),e.YNc(6,k,2,0,"ng-container",28),e.YNc(7,J,3,2,"ng-template",null,29,e.W1O),e.qZA(),e.TgZ(9,"td",30)(10,"label",31)(11,"div",32),e._uU(12),e.qZA()()(),e.TgZ(13,"td",26)(14,"div",4)(15,"button",33),e.NdJ("click",function(){const a=e.CHM(r).$implicit,s=e.oxw(2);return e.KtG(s.changedStatusUser(a._id,!a.status))}),e.YNc(16,Y,4,0,"ng-container",28),e.YNc(17,R,3,0,"ng-template",null,34,e.W1O),e.qZA(),e.TgZ(19,"button",35),e.NdJ("click",function(){const a=e.CHM(r).$implicit,s=e.oxw(2);return e.KtG(s.delete(a._id))}),e._UZ(20,"i",36),e.qZA()()()()}if(2&t){const r=o.$implicit,n=e.MAs(8),i=e.MAs(18);e.xp6(2),e.hij(" ",r.person.CI," "),e.xp6(2),e.hij(" ",r.person.email," "),e.xp6(2),e.Q6J("ngIf","ADMIN"===r.role)("ngIfElse",n),e.xp6(5),e.Q6J("ngClass",r.status?"bg-green bg-opacity-25 ":"bg-red bg-opacity-25 "),e.xp6(1),e.hij(" ",r.status?"Activo":"Inactivo"," "),e.xp6(3),e.Udp("text-align",r.status?"left":"right"),e.xp6(1),e.Q6J("ngIf",r.status)("ngIfElse",i)}}function E(t,o){1&t&&(e.TgZ(0,"div",51),e._uU(1," Activo "),e.qZA())}function S(t,o){1&t&&(e.TgZ(0,"div",52),e._uU(1," Inactivo "),e.qZA())}function F(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",42)(1,"div",43)(2,"div",44),e._uU(3,"CI:"),e.qZA(),e.TgZ(4,"div",45),e._uU(5),e.qZA()(),e.TgZ(6,"div",43)(7,"div",44),e._uU(8,"Usuario:"),e.qZA(),e.TgZ(9,"div",45),e._uU(10),e.qZA()(),e.TgZ(11,"div",43)(12,"div",44),e._uU(13,"Rol:"),e.qZA(),e.TgZ(14,"div",45),e._uU(15),e.qZA()(),e.TgZ(16,"div",43)(17,"div",44),e._uU(18,"Estado:"),e.qZA(),e.TgZ(19,"div",45),e.YNc(20,E,2,0,"div",46),e.YNc(21,S,2,0,"div",47),e.qZA()(),e.TgZ(22,"div",48)(23,"button",49),e.NdJ("click",function(){const a=e.CHM(r).$implicit,s=e.oxw(2);return e.KtG(s.changedStatusUser(a._id,!a.status))}),e._uU(24," Habilitar "),e.qZA(),e.TgZ(25,"button",50),e._uU(26," Deshabilitar "),e.qZA()()()}if(2&t){const r=o.$implicit;e.xp6(5),e.hij(" ",r.person.CI," "),e.xp6(5),e.hij(" ",r.person.email," "),e.xp6(5),e.hij(" ",r.role," "),e.xp6(5),e.Q6J("ngIf",r.status),e.xp6(1),e.Q6J("ngIf",!r.status),e.xp6(4),e.Q6J("disabled",!r.status)}}function B(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2," Gesti\xf3n de usuarios "),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",14),e.NdJ("ngModelChange",function(i){e.CHM(r);const a=e.oxw();return e.KtG(a.search=i)}),e.qZA(),e.TgZ(6,"button",15),e._uU(7," Registrar Admin "),e.qZA()()(),e.TgZ(8,"div",16)(9,"table",17)(10,"thead",18)(11,"tr")(12,"th",19),e._uU(13," CI "),e.qZA(),e.TgZ(14,"th",19),e._uU(15," Usuario "),e.qZA(),e.TgZ(16,"th",19),e._uU(17," Rol "),e.qZA(),e.TgZ(18,"th",19),e._uU(19," Estado "),e.qZA(),e.TgZ(20,"th",19)(21,"div",20)(22,"label",4),e._uU(23,"Acciones"),e.qZA(),e.TgZ(24,"button",21),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.refresh())}),e._UZ(25,"i",22),e.qZA()()()()(),e.TgZ(26,"tbody"),e.YNc(27,L,21,10,"tr",23),e.ALo(28,"filterTables"),e.qZA()()(),e.TgZ(29,"div",24),e.YNc(30,F,27,6,"div",25),e.ALo(31,"filterTables"),e.qZA()()}if(2&t){const r=e.oxw();e.xp6(5),e.Q6J("ngModel",r.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(21),e.Q6J("ngForOf",e.xi3(28,4,r.usuarios,r.search)),e.xp6(3),e.Q6J("ngForOf",e.xi3(31,7,r.usuarios,r.search))}}let U=(()=>{class t{constructor(r,n,i,a,s,d,m){this.notification=r,this.cookieService=n,this.usuariosService=i,this.authService=a,this.jwtService=s,this.route=d,this.router=m,this.usuarios=[],this.modalActivate=!1,this.search="",this.loading=!0}ngOnInit(){this.getUsers(),this.getCurrentUser()}refresh(){this.ngOnInit()}getCurrentUser(){const r=this.cookieService.get("token"),n=this.jwtService.getTokenInformation(r);this.currentUser={id:n?.user||"",CI:"",email:"",role:n?.role||"",status:!0}}getUsers(){this.usuariosService.getAllUser().subscribe(r=>{this.usuarios=r.data,this.loading=!1,console.log(r.message)},r=>{console.log("Error:",r.error),this.notification.showError("Error","No se pudo obtener los usuarios")})}delete(r){this.notification.showConfirm("warning","Peligro","Estas seguro de eliminar este usuario?","Si, eliminar!","No, cancelar!").then(n=>{n.isConfirmed&&this.usuariosService.deleteUser(r).subscribe(i=>{this.notification.showSuccess("\xc9xito","Cuenta desactivada correctamente"),console.log(i.message),this.ngOnInit()},i=>{console.log(i.error),this.notification.showError("Error","No se pudo desactivar la cuenta")})})}changedStatusUser(r,n){const g=n?"Cuenta activada correctamente":"Cuenta desactivada correctamente",u=n?"No se pudo activar la cuenta":"No se pudo desactivar la cuenta";this.notification.showConfirm(n?"info":"warning",n?"Informaci\xf3n":"Peligro",n?"Estas seguro de activar este usuario?":"Estas seguro de desactivar este usuario?",n?"Si, activar!":"Si, desactivar!","No, cancelar!").then(p=>{p.isConfirmed&&this.usuariosService.changedStatusUser(r,n).subscribe(x=>{console.log(x),this.notification.showSuccess("Success",g),this.ngOnInit()},x=>{0===x.status?this.notification.showError("Error","Error de conexi\xf3n con el servidor"):(console.log(x.error),this.notification.showError("Error",u))})})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(b.T),e.Y36(C.N),e.Y36(Z),e.Y36(y.e),e.Y36(A.T),e.Y36(f.gz),e.Y36(f.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listar"]],features:[e._Bn([v.u])],decls:2,vars:2,consts:[["class","fixed inset-0 flex items-center justify-center z-50",4,"ngIf"],["class","transition ease-in-out delay-150 w-[95%] h-[90%] lg:h-[95%] lg:m-2 mx-4 my-2 bg-cameo border-4 border-camelot rounded-lg overflow-x-hidden duration-300",4,"ngIf"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","items-center","justify-center"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por: CI, Email, rol...",1,"px-2","mr-2","py-3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"px-2","py-3","bg-nile-blue","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[1,"flex","justify-between"],["type","button","title","Refrescar",1,"flex","items-center","justify-center","shadow-md","shadow-gold","p-2",3,"click"],["aria-hidden","true",1,"fa","fa-rotate-right","text-xl","font-extrabold"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","uppercase"],[4,"ngIf","ngIfElse"],["teacherCheck",""],[1,"p-3","text-sm","text-black-100","tracking-wide"],[1,"pl-[0.15rem]","hover:cursor-pointer","flex","flex-col","items-center","justify-center"],[1,"bg-opacity-25","rounded-lg","p-2","text-nile-blue","font-bold","text-center","tracking-wider","text-sm",3,"ngClass"],["type","button","title","Cambiar estado",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2","flex","items-center","justify-center",3,"click"],["offState",""],["type","button","title","Eliminar usuario",1,"px-2",3,"click"],[1,"fa","fa-trash","text-3xl","text-red-500","font-bold","hover:text-nile-blue"],["deceCheck",""],[1,"fa","fa-circle","text-2xl","font-bold","text-avocado","text-opacity-70"],[1,"ml-2"],[1,"mr-2"],[1,"fa","fa-circle","text-2xl","font-bold","text-red-500"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],["class","bg-green bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],["class","bg-red bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"disabled"],[1,"bg-green","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"bg-red","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"]],template:function(r,n){1&r&&(e.YNc(0,N,10,0,"div",0),e.YNc(1,B,32,10,"div",1)),2&r&&(e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",!n.loading))},dependencies:[_.mk,_.sg,_.O5,f.rH,l.Fj,l.JJ,l.On,v.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),t})();class M{constructor(){this.form=new l.cw({CI:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),name:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),lastName:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),age:new l.NI("",[l.kI.minLength(1),l.kI.maxLength(3),l.kI.pattern("[0-9]*")]),address:new l.NI("",[l.kI.minLength(2)]),phone:new l.NI("",[l.kI.required,l.kI.minLength(6),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),email:new l.NI("",[l.kI.required,l.kI.email]),password:new l.NI("",[l.kI.required,l.kI.minLength(6),l.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]+$")]),password_confirmation:new l.NI("",[l.kI.required,l.kI.minLength(6)])},{validators:this.passwordMatchValidator}),this.form.get("password_confirmation")?.valueChanges.subscribe(()=>{this.form.get("password_confirmation")?.updateValueAndValidity()})}passwordMatchValidator(o){const r=o.get("password"),n=o.get("password_confirmation");return r&&n&&r.value!==n.value?{passwordMismatch:!0}:null}}function j(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",27),e.BQk())}function O(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",28),e.BQk())}function $(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",29),e.BQk())}function z(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",28),e.BQk())}function G(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,j,2,0,"ng-container",26),e.YNc(2,O,2,0,"ng-container",26),e.YNc(3,$,2,0,"ng-container",26),e.YNc(4,z,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i,a,s;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("CI"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("CI"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("CI"))||null==a.errors?null:a.errors.pattern),e.xp6(1),e.Q6J("ngIf",null==(s=r.formUser.form.get("CI"))||null==s.errors?null:s.errors.maxlength)}}function D(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",30),e.BQk())}function H(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function P(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function V(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,D,2,0,"ng-container",26),e.YNc(2,H,2,0,"ng-container",26),e.YNc(3,P,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i,a;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("name"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("name"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("name"))||null==a.errors?null:a.errors.pattern)}}function K(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",33),e.BQk())}function W(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function X(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function ee(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,K,2,0,"ng-container",26),e.YNc(2,W,2,0,"ng-container",26),e.YNc(3,X,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i,a;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("lastName"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("lastName"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("lastName"))||null==a.errors?null:a.errors.pattern)}}function te(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function re(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,te,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("address"))||null==n.errors?null:n.errors.minlength)}}function ne(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",34),e.BQk())}function oe(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",28),e.BQk())}function ie(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",28),e.BQk())}function le(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function ae(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,ne,2,0,"ng-container",26),e.YNc(2,oe,2,0,"ng-container",26),e.YNc(3,ie,2,0,"ng-container",26),e.YNc(4,le,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i,a,s;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("phone"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("phone"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("phone"))||null==a.errors?null:a.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=r.formUser.form.get("phone"))||null==s.errors?null:s.errors.pattern)}}function se(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",36),e.BQk())}function ce(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",37),e.BQk())}function ue(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,se,2,0,"ng-container",26),e.YNc(2,ce,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("email"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("email"))||null==i.errors?null:i.errors.email)}}function de(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",38),e.BQk())}function me(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",39),e.BQk())}function ge(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",40),e.BQk())}function fe(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,de,2,0,"ng-container",26),e.YNc(2,me,2,0,"ng-container",26),e.YNc(3,ge,2,0,"ng-container",26),e.qZA()),2&t){const r=e.oxw();let n,i,a;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("password"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("password"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("password"))||null==a.errors?null:a.errors.pattern)}}function pe(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",38),e.BQk())}function _e(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",39),e.BQk())}function xe(t,o){1&t&&(e.ynx(0),e._UZ(1,"i",40),e.BQk())}function he(t,o){1&t&&(e.ynx(0,42),e._UZ(1,"i",43),e.BQk())}function ve(t,o){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,pe,2,0,"ng-container",26),e.YNc(2,_e,2,0,"ng-container",26),e.YNc(3,xe,2,0,"ng-container",26),e.YNc(4,he,2,0,"ng-container",41),e.qZA()),2&t){const r=e.oxw();let n,i,a,s;e.xp6(1),e.Q6J("ngIf",null==(n=r.formUser.form.get("password_confirmation"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=r.formUser.form.get("password_confirmation"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=r.formUser.form.get("password_confirmation"))||null==a.errors?null:a.errors.pattern),e.xp6(1),e.Q6J("ngIf",r.formUser.form.hasError("passwordMismatch")&&(null==(s=r.formUser.form.get("password_confirmation"))?null:s.touched))}}const be=[{path:"",component:U,pathMatch:"full"},{path:"registrar",component:(()=>{class t{constructor(r,n,i,a){this.notification=r,this.userService=n,this.router=i,this.route=a,this.formUser=new M,this.loading=!1,this.isTooltipVisible=!1}ngOnInit(){this.formUser.form.reset()}toggleTooltip(){this.isTooltipVisible=!this.isTooltipVisible}create(){const{CI:r,name:n,lastName:i,address:a,phone:s,email:d,password:m}=this.formUser.form.value;this.userService.createUser({CI:r,name:n,lastName:i,address:a,phone:s,email:d,password:m,role:"ADMIN"}).subscribe(u=>{this.notification.showSuccess("Success","Usuario registrado"),console.log(u),this.router.navigate(["../listar"],{relativeTo:this.route})},u=>{0===u.status?this.notification.showError("Error","Error de conexi\xf3n con el servidor"):(this.notification.showError("Error","Error al registrar usuario"),console.log(u))})}cancel(){this.router.navigate(["../listar"],{relativeTo:this.route})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(b.T),e.Y36(Z),e.Y36(f.F0),e.Y36(f.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registrar"]],decls:72,vars:10,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center","uppercase"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","h-[8%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","CIS","formControlName","CI","placeholder","Ingrese el CI",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["class","text-red-200 text-xl rounded pl-2 flex","role","alert",4,"ngIf"],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","password","id","password","formControlName","password","placeholder","Ingrese la contrase\xf1a",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","flex-col","mt-1"],[1,"flex","items-center","justify-center"],["type","password","id","password_confirmation","formControlName","password_confirmation","placeholder","Ingrese la contrase\xf1a ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["role","alert",1,"text-red-200","text-xl","rounded","pl-2","flex"],[4,"ngIf"],["title","C\xe9dula requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud de 10 caracteres requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer"],["title","Nombre requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud minima requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten letras",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Apellidos requeridos",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Tel\xe9fono es requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email invalido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Contrase\xf1a requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud m\xednima requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Se requieren n\xfameros, may\xfasculas, min\xfasculas y caracteres especiales",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["class","text-red-200 text-xl rounded pl-2",4,"ngIf"],[1,"text-red-200","text-xl","rounded","pl-2"],["title","Las contrase\xf1as no coinciden",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"]],template:function(r,n){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de usuarios "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.create()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos personales "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"CI:"),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.YNc(13,G,5,4,"div",10),e.qZA()(),e.TgZ(14,"div",5)(15,"div",6)(16,"label",7),e._uU(17," Nombres:"),e.qZA()(),e.TgZ(18,"div",8),e._UZ(19,"input",11),e.YNc(20,V,4,3,"div",10),e.qZA()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",7),e._uU(24," Apellidos :"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"input",12),e.YNc(27,ee,4,3,"div",10),e.qZA()(),e.TgZ(28,"div",5)(29,"div",6)(30,"label",13),e._uU(31," Direcci\xf3n :"),e.qZA()(),e.TgZ(32,"div",8),e._UZ(33,"input",14),e.YNc(34,re,2,1,"div",10),e.qZA()(),e.TgZ(35,"div",5)(36,"div",6)(37,"label",7),e._uU(38," Tel\xe9fono :"),e.qZA()(),e.TgZ(39,"div",8),e._UZ(40,"input",15),e.YNc(41,ae,5,4,"div",10),e.qZA()(),e.TgZ(42,"div",5)(43,"div",6)(44,"label",7),e._uU(45,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(46,"div",8),e._UZ(47,"input",16),e.YNc(48,ue,3,2,"div",10),e.qZA()(),e.TgZ(49,"div",4),e._uU(50," Datos para el inicio de sesi\xf3n "),e.qZA(),e.TgZ(51,"div",5)(52,"div",6)(53,"label",7),e._uU(54,"Contrase\xf1a :"),e.qZA()(),e.TgZ(55,"div",8),e._UZ(56,"input",17),e.YNc(57,fe,4,3,"div",10),e.qZA()(),e.TgZ(58,"div",5)(59,"div",6)(60,"label",7),e._uU(61,"Confirmar contrase\xf1a :"),e.qZA()(),e.TgZ(62,"div",18)(63,"div",19),e._UZ(64,"input",20),e.YNc(65,ve,5,4,"div",10),e.qZA()()(),e.TgZ(66,"div",21)(67,"div",22)(68,"button",23),e.NdJ("click",function(){return n.cancel()}),e._uU(69," Cancelar "),e.qZA(),e.TgZ(70,"button",24),e._uU(71," Registrar "),e.qZA()()()()()()),2&r){let i,a,s,d,m,g,u,p;e.xp6(3),e.Q6J("formGroup",n.formUser.form),e.xp6(10),e.Q6J("ngIf",(null==(i=n.formUser.form.get("CI"))?null:i.invalid)&&(null==(i=n.formUser.form.get("CI"))?null:i.touched)),e.xp6(7),e.Q6J("ngIf",(null==(a=n.formUser.form.get("name"))?null:a.invalid)&&(null==(a=n.formUser.form.get("name"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(s=n.formUser.form.get("lastName"))?null:s.invalid)&&(null==(s=n.formUser.form.get("lastName"))?null:s.touched)),e.xp6(7),e.Q6J("ngIf",(null==(d=n.formUser.form.get("address"))?null:d.invalid)&&(null==(d=n.formUser.form.get("address"))?null:d.touched)),e.xp6(7),e.Q6J("ngIf",(null==(m=n.formUser.form.get("phone"))?null:m.invalid)&&(null==(m=n.formUser.form.get("phone"))?null:m.touched)),e.xp6(7),e.Q6J("ngIf",(null==(g=n.formUser.form.get("email"))?null:g.invalid)&&(null==(g=n.formUser.form.get("email"))?null:g.touched)),e.xp6(9),e.Q6J("ngIf",(null==(u=n.formUser.form.get("password"))?null:u.invalid)&&(null==(u=n.formUser.form.get("password"))?null:u.touched)),e.xp6(8),e.Q6J("ngIf",(null==(p=n.formUser.form.get("password_confirmation"))?null:p.invalid)&&(null==(p=n.formUser.form.get("password_confirmation"))?null:p.touched)),e.xp6(5),e.Q6J("disabled",n.formUser.form.invalid)}},dependencies:[_.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),t})()},{path:"listar",component:U}];let Ze=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(be),f.Bz]}),t})(),Ue=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.ez,Ze,l.UX,l.u5,T.m]}),t})()}}]);