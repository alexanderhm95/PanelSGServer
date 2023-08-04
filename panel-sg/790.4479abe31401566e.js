"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[790],{4790:(ne,Z,a)=>{a.r(Z),a.d(Z,{UsuariosModule:()=>oe});var w=a(4466),f=a(6895),l=a(433),h=a(7574),d=a(668),U=a(6561),e=a(8256),v=a(2126),C=a(2340),A=a(529);let b=(()=>{class n{constructor(o){this.http=o,this.URL=C.N.api+"/api/1.0"}createUser(o){return this.http.post(`${this.URL}/user`,o)}updateUser(o,t){return this.http.put(`${this.URL}/user/${o}`,t)}changePasswordUser(o){return this.http.post(`${this.URL}/user/pass`,o)}getAllUser(){return this.http.get(`${this.URL}/user`)}getUser(o){return this.http.get(`${this.URL}/user/${o}`)}changedStatusUser(o,t){return this.http.post(`${this.URL}/user/status`,{id:o,action:t})}deleteUser(o){return this.http.delete(`${this.URL}/user/${o}`)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(A.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=a(1045);function I(n,s){1&n&&(e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"div",3)(3,"div",5),e._UZ(4,"div",6),e.TgZ(5,"div",7)(6,"span",8),e._uU(7,"Cargando"),e.qZA(),e.TgZ(8,"span",9),e._uU(9,"..."),e.qZA()()()()())}function E(n,s){1&n&&(e.ynx(0),e._uU(1," Administrador "),e.BQk())}function y(n,s){1&n&&(e.ynx(0),e._uU(1," Docente "),e.BQk())}function N(n,s){if(1&n&&e._uU(0),2&n){const o=e.oxw(2).$implicit;e.hij(" ","DECE"===o.role?"DECE":o.role," ")}}function q(n,s){if(1&n&&(e.YNc(0,y,2,0,"ng-container",27),e.YNc(1,N,1,1,"ng-template",null,36,e.W1O)),2&n){const o=e.MAs(2),t=e.oxw().$implicit;e.Q6J("ngIf","TEACHER"===t.role)("ngIfElse",o)}}function k(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"tr")(1,"td",25),e._uU(2),e.qZA(),e.TgZ(3,"td",25),e._uU(4),e.qZA(),e.TgZ(5,"td",26),e.YNc(6,E,2,0,"ng-container",27),e.YNc(7,q,3,2,"ng-template",null,28,e.W1O),e.qZA(),e.TgZ(9,"td",29)(10,"label",30)(11,"div",31),e._uU(12),e.qZA()()(),e.TgZ(13,"td",25)(14,"div",3)(15,"button",32),e._UZ(16,"i",33),e.qZA(),e.TgZ(17,"button",34),e.NdJ("click",function(){const i=e.CHM(o).$implicit,u=e.oxw(3);return e.KtG(u.delete(i.id))}),e._UZ(18,"i",35),e.qZA()()()()}if(2&n){const o=s.$implicit,t=e.MAs(8);e.xp6(2),e.hij(" ",o.CI," "),e.xp6(2),e.hij(" ",o.email," "),e.xp6(2),e.Q6J("ngIf","ADMIN"===o.role)("ngIfElse",t),e.xp6(5),e.Q6J("ngClass",o.status?"bg-green bg-opacity-25 ":"bg-red bg-opacity-25 "),e.xp6(1),e.hij(" ",o.status?"Activo":"Inactivo"," "),e.xp6(3),e.Q6J("routerLink","../editar/"+o.id)}}function M(n,s){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,k,19,7,"tr",24),e.ALo(2,"filterTables"),e.qZA()),2&n){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,o.usuarios,o.search))}}function J(n,s){1&n&&(e.TgZ(0,"div",46),e._uU(1," Activo "),e.qZA())}function L(n,s){1&n&&(e.TgZ(0,"div",47),e._uU(1," Inactivo "),e.qZA())}function F(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"div",37)(1,"div",38)(2,"div",39),e._uU(3,"CI:"),e.qZA(),e.TgZ(4,"div",40),e._uU(5),e.qZA()(),e.TgZ(6,"div",38)(7,"div",39),e._uU(8," Usuario: "),e.qZA(),e.TgZ(9,"div",40),e._uU(10),e.qZA()(),e.TgZ(11,"div",38)(12,"div",39),e._uU(13,"Rol:"),e.qZA(),e.TgZ(14,"div",40),e._uU(15),e.qZA()(),e.TgZ(16,"div",38)(17,"div",39),e._uU(18,"Estado:"),e.qZA(),e.TgZ(19,"div",40),e.YNc(20,J,2,0,"div",41),e.YNc(21,L,2,0,"div",42),e.qZA()(),e.TgZ(22,"div",43)(23,"button",44),e._uU(24," Editar "),e.qZA(),e.TgZ(25,"button",45),e.NdJ("click",function(){const i=e.CHM(o).$implicit,u=e.oxw(2);return e.KtG(u.delete(i.id))}),e._uU(26," Eliminar "),e.qZA()()()}if(2&n){const o=s.$implicit;e.xp6(5),e.hij(" ",o.CI," "),e.xp6(5),e.hij(" ",o.email," "),e.xp6(5),e.hij(" ",o.role," "),e.xp6(5),e.Q6J("ngIf",o.status),e.xp6(1),e.Q6J("ngIf",!o.status),e.xp6(2),e.Q6J("routerLink","../editar/"+o.id)}}function R(n,s){1&n&&(e.TgZ(0,"div",48),e._uU(1," No hay datos para mostrar "),e.qZA())}function S(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2," Gesti\xf3n de usuarios "),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",14),e.NdJ("ngModelChange",function(r){e.CHM(o);const i=e.oxw();return e.KtG(i.search=r)}),e.qZA(),e.TgZ(6,"button",15),e._uU(7," Registrar Admin "),e.qZA()()(),e.TgZ(8,"div",16)(9,"table",17)(10,"thead",18)(11,"tr")(12,"th",19),e._uU(13," CI "),e.qZA(),e.TgZ(14,"th",19),e._uU(15," Usuario "),e.qZA(),e.TgZ(16,"th",19),e._uU(17," Rol "),e.qZA(),e.TgZ(18,"th",19),e._uU(19," Estado "),e.qZA(),e.TgZ(20,"th",19)(21,"label",3),e._uU(22,"Acciones"),e.qZA()()()(),e.YNc(23,M,3,4,"tbody",20),e.qZA()(),e.TgZ(24,"div",21),e.YNc(25,F,27,6,"div",22),e.ALo(26,"filterTables"),e.qZA(),e.YNc(27,R,2,0,"div",23),e.qZA()}if(2&n){const o=e.oxw();e.xp6(5),e.Q6J("ngModel",o.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(17),e.Q6J("ngIf",o.usuarios.length>0),e.xp6(2),e.Q6J("ngForOf",e.xi3(26,5,o.usuarios,o.search)),e.xp6(2),e.Q6J("ngIf",0===o.usuarios.length)}}let Y=(()=>{class n{constructor(o,t,r){this.notification=o,this.usuariosService=t,this.authService=r,this.usuarios=[],this.modalActivate=!1,this.search="",this.loading=!0,this.subscriptions=[]}ngOnInit(){this.getUsers()}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}getUsers(){this.loading=!0,this.subscriptions.push(this.usuariosService.getAllUser().subscribe(o=>{const{message:t,data:r}=o;this.usuarios=r,this.loading=!1,console.log(t)},o=>{console.log("Error:",o.error),this.loading=!1,this.notification.showError("Error",o.error.error)}))}delete(o){this.notification.showConfirm("warning","Peligro","\xbfEst\xe1 seguro de eliminar este usuario?","Eliminar","Cancelar").then(t=>{t.isConfirmed&&this.subscriptions.push(this.usuariosService.deleteUser(o).subscribe(r=>{this.notification.showSuccess("Eliminado","Cuenta eliminada correctamente"),console.log(r.message),this.ngOnInit()},r=>{this.notification.showError("Error",0===r.status?"Error de conexi\xf3n con el servidor":r.error.error)}))})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(v.T),e.Y36(b),e.Y36(x.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-listar"]],features:[e._Bn([U.u])],decls:3,vars:2,consts:[[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300","flex","justify-center"],["class","flex items-center justify-center",4,"ngIf"],["class","w-full",4,"ngIf"],[1,"flex","items-center","justify-center"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"w-full"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","my-5"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por c\xe9dula, email, rol...",1,"mx-3","px-2","py-3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"px-2","py-3","bg-nile-blue","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngIf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],["class","mx-4 flex bg-red-700 text-red text-xl rounded-lg font-bold items-center justify-center py-2 text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","uppercase"],[4,"ngIf","ngIfElse"],["teacherCheck",""],[1,"p-3","text-sm","text-black-100","tracking-wide"],[1,"pl-[0.15rem]","hover:cursor-pointer","flex","flex-col","items-center","justify-center"],[1,"bg-opacity-25","rounded-lg","p-2","text-nile-blue","font-bold","text-center","tracking-wider","text-sm",3,"ngClass"],["type","button","title","Editar pregunta",1,"px-2",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","text-3xl","text-nile-blue-200","hover:text-camelot-400"],["type","button","title","Eliminar usuario",1,"px-2",3,"click"],[1,"fa","fa-trash","text-3xl","text-red-500","font-bold","hover:text-nile-blue"],["deceCheck",""],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],["class","bg-green bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],["class","bg-red bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"routerLink"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"bg-green","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"bg-red","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"mx-4","flex","bg-red-700","text-red","text-xl","rounded-lg","font-bold","items-center","justify-center","py-2","text-center"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.YNc(1,I,10,0,"div",1),e.YNc(2,S,28,8,"div",2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",t.loading),e.xp6(1),e.Q6J("ngIf",!t.loading))},dependencies:[f.mk,f.sg,f.O5,d.rH,l.Fj,l.JJ,l.On,U.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})();class j{constructor(){this.form=new l.cw({CI:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),name:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),lastName:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),address:new l.NI("",[l.kI.required,l.kI.minLength(2)]),phone:new l.NI("",[l.kI.required,l.kI.minLength(6),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),email:new l.NI("",[l.kI.required,l.kI.email]),password:new l.NI("",[l.kI.required,l.kI.minLength(6),l.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]),password_confirmation:new l.NI("",[l.kI.required,l.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])})}}class Q{constructor(){this.form=new l.cw({CI:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),name:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),lastName:new l.NI("",[l.kI.required,l.kI.minLength(3),l.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),address:new l.NI("",[l.kI.required,l.kI.minLength(2)]),phone:new l.NI("",[l.kI.required,l.kI.minLength(6),l.kI.maxLength(10),l.kI.pattern("[0-9]*")]),email:new l.NI("",[l.kI.required,l.kI.email])})}}var T=a(2031);function G(n,s){1&n&&(e.TgZ(0,"div",26)(1,"label"),e._uU(2,"Las contrase\xf1as no son iguales"),e.qZA()())}function H(n,s){1&n&&(e.TgZ(0,"span"),e._uU(1," Modificar Administrador"),e.qZA())}function D(n,s){1&n&&(e.TgZ(0,"span"),e._uU(1," Modificar encargado del Dece"),e.qZA())}function K(n,s){1&n&&(e.TgZ(0,"span"),e._uU(1," Modificar Docente"),e.qZA())}function $(n,s){1&n&&(e.ynx(0),e._UZ(1,"i",30),e.TgZ(2,"span",31),e._uU(3,"ON"),e.qZA(),e.BQk())}function P(n,s){1&n&&(e.TgZ(0,"span",32),e._uU(1,"OFF"),e.qZA(),e._UZ(2,"i",33))}function z(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"form",5),e.NdJ("ngSubmit",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.update())}),e.TgZ(1,"fieldset",6)(2,"div",7)(3,"label"),e._uU(4,"Datos personales"),e.qZA()(),e.TgZ(5,"div",8)(6,"div",9)(7,"label",10),e._uU(8,"CI:"),e.qZA()(),e.TgZ(9,"div",11)(10,"input",12,13),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("CI"))?null:i.invalid)&&(null==(i=r.formUser.form.get("CI"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"CI")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"label",10),e._uU(15," Nombres:"),e.qZA()(),e.TgZ(16,"div",11)(17,"input",14),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("name"))?null:i.invalid)&&(null==(i=r.formUser.form.get("name"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"name")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(18,"div",8)(19,"div",9)(20,"label",10),e._uU(21," Apellidos :"),e.qZA()(),e.TgZ(22,"div",11)(23,"input",15),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("lastName"))?null:i.invalid)&&(null==(i=r.formUser.form.get("lastName"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"lastName")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(24,"div",8)(25,"div",9)(26,"label",16),e._uU(27," Direcci\xf3n :"),e.qZA()(),e.TgZ(28,"div",11)(29,"input",17),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("address"))?null:i.invalid)&&(null==(i=r.formUser.form.get("address"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"address")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(30,"div",8)(31,"div",9)(32,"label",10),e._uU(33," Tel\xe9fono :"),e.qZA()(),e.TgZ(34,"div",11)(35,"input",18),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("phone"))?null:i.invalid)&&(null==(i=r.formUser.form.get("phone"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"phone")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(36,"div",8)(37,"div",9)(38,"label",10),e._uU(39,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(40,"div",11)(41,"input",19),e.NdJ("mouseover",function(){e.CHM(o);const r=e.oxw();let i;return e.KtG((null==(i=r.formUser.form.get("email"))?null:i.invalid)&&(null==(i=r.formUser.form.get("email"))?null:i.touched)&&r.notification.showTooltip(r.controlError.getErrorMessage(r.formUser.form,"email")))})("mouseout",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.notification.close())}),e.qZA()()(),e.TgZ(42,"div",20)(43,"div",21)(44,"button",22),e._uU(45," Editar "),e.qZA()()(),e.TgZ(46,"div",7)(47,"label"),e._uU(48,"Acceso al inicio de sesi\xf3n"),e.qZA()(),e.TgZ(49,"div",23)(50,"div",9)(51,"label",10),e._uU(52,"Estado:"),e.qZA()(),e.TgZ(53,"div",11)(54,"div",24)(55,"button",25),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.changedStatusUser(null==r.user?null:r.user.id,!r.user.status))}),e.YNc(56,$,4,0,"ng-container",26),e.YNc(57,P,3,0,"ng-template",null,27,e.W1O),e.qZA()()()(),e.TgZ(59,"div",8)(60,"div",9)(61,"label",10),e._uU(62,"Renovar Contrase\xf1a:"),e.qZA()(),e.TgZ(63,"div",11)(64,"div",24)(65,"button",28),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.changePassword(null==r.user?null:r.user.id))}),e._uU(66," Enviar "),e.qZA()()()(),e.TgZ(67,"div",20)(68,"div",21)(69,"button",29),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(70," Cancelar "),e.qZA()()()()()}if(2&n){const o=e.MAs(58),t=e.oxw();e.Q6J("formGroup",t.formUser.form),e.xp6(44),e.Q6J("disabled",t.formUser.form.invalid||t.notMatch),e.xp6(11),e.Udp("text-align",null!=t.user&&t.user.status?"left":"right"),e.xp6(1),e.Q6J("ngIf",null==t.user?null:t.user.status)("ngIfElse",o)}}function B(n,s){1&n&&(e.ynx(0),e._UZ(1,"i",30),e.TgZ(2,"span",31),e._uU(3,"ON"),e.qZA(),e.BQk())}function W(n,s){1&n&&(e.TgZ(0,"span",32),e._uU(1,"OFF"),e.qZA(),e._UZ(2,"i",33))}function X(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"div",34)(1,"fieldset",6)(2,"div",7)(3,"label"),e._uU(4,"Datos personales"),e.qZA()(),e.TgZ(5,"div",8)(6,"div",9)(7,"label",10),e._uU(8,"CI:"),e.qZA()(),e.TgZ(9,"div",11)(10,"label"),e._uU(11),e.qZA()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"label",10),e._uU(15," Nombres:"),e.qZA()(),e.TgZ(16,"div",11)(17,"label"),e._uU(18),e.qZA()()(),e.TgZ(19,"div",8)(20,"div",9)(21,"label",10),e._uU(22," Apellidos :"),e.qZA()(),e.TgZ(23,"div",11)(24,"label"),e._uU(25),e.qZA()()(),e.TgZ(26,"div",8)(27,"div",9)(28,"label",16),e._uU(29," Direcci\xf3n :"),e.qZA()(),e.TgZ(30,"div",11)(31,"label"),e._uU(32),e.qZA()()(),e.TgZ(33,"div",8)(34,"div",9)(35,"label",10),e._uU(36," Tel\xe9fono :"),e.qZA()(),e.TgZ(37,"div",11)(38,"label"),e._uU(39),e.qZA()()(),e.TgZ(40,"div",8)(41,"div",9)(42,"label",10),e._uU(43,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(44,"div",11)(45,"label"),e._uU(46),e.qZA()()(),e.TgZ(47,"div",7)(48,"label"),e._uU(49,"Acceso al inicio de sesi\xf3n"),e.qZA()(),e.TgZ(50,"div",23)(51,"div",9)(52,"label",10),e._uU(53,"Estado:"),e.qZA()(),e.TgZ(54,"div",11)(55,"div",24)(56,"button",25),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.changedStatusUser(r.user.id,!r.user.status))}),e.YNc(57,B,4,0,"ng-container",26),e.YNc(58,W,3,0,"ng-template",null,27,e.W1O),e.qZA()()()(),e.TgZ(60,"div",8)(61,"div",9)(62,"label",10),e._uU(63,"Renovar Contrase\xf1a:"),e.qZA()(),e.TgZ(64,"div",11)(65,"div",24)(66,"button",28),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.changePassword(null==r.user?null:r.user.id))}),e._uU(67," Enviar "),e.qZA()()()(),e.TgZ(68,"div",20)(69,"div",21)(70,"button",35),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(71," Cancelar "),e.qZA()()()()()}if(2&n){const o=e.MAs(59),t=e.oxw();e.xp6(11),e.hij(" ",null==t.user?null:t.user.ciUser," "),e.xp6(7),e.hij(" ",null==t.user?null:t.user.nameUser," "),e.xp6(7),e.hij(" ",null==t.user?null:t.user.lastNameUser," "),e.xp6(7),e.hij(" ",null==t.user?null:t.user.addressUser," "),e.xp6(7),e.hij(" ",null==t.user?null:t.user.phoneUser," "),e.xp6(7),e.hij(" ",null==t.user?null:t.user.emailUser," "),e.xp6(10),e.Udp("text-align",null!=t.user&&t.user.status?"left":"right"),e.xp6(1),e.Q6J("ngIf",null==t.user?null:t.user.status)("ngIfElse",o)}}const ee=[{path:"registrar",component:(()=>{class n{constructor(o,t,r,i,u,c){this.controlError=o,this.notification=t,this.userService=r,this.authService=i,this.router=u,this.route=c,this.formUser=new j,this.loading=!1,this.notMatch=!1}ngOnInit(){this.formUser.form.reset()}create(){const{CI:o,name:t,lastName:r,address:i,phone:u,email:c,password:p}=this.formUser.form.value;this.userService.createUser({CI:o,name:t,lastName:r,address:i,phone:u,email:c,password:p}).subscribe(g=>{this.notification.showSuccess("Registro","Usuario registrado con \xe9xito"),this.router.navigate(["../listar"],{relativeTo:this.route})},g=>{this.notification.showError("Error",0===g.status?"Error de conexi\xf3n con el servidor":g.error.error)})}onCheckPassword(){const o=this.formUser.form.get("password")?.value,t=this.formUser.form.get("password_confirmation")?.value;this.notMatch=o!==t}cancel(){this.router.navigate(["../listar"],{relativeTo:this.route})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(T.Q),e.Y36(v.T),e.Y36(b),e.Y36(x.e),e.Y36(d.F0),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registrar"]],decls:68,vars:3,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","formControlName","CI","placeholder","Ingrese el CI",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["inputCI",""],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","password","id","password","formControlName","password","placeholder","Ingrese la contrase\xf1a",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout","input"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","flex-col","mt-1"],[1,"flex","items-center","justify-center"],["type","password","id","password_confirmation","formControlName","password_confirmation","placeholder","Ingrese la contrase\xf1a ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout","input"],["class","flex items-start justify-center",4,"ngIf"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],[1,"flex","items-start","justify-center"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de usuarios "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.create()}),e.TgZ(4,"fieldset",3)(5,"div",4)(6,"label"),e._uU(7,"Datos personales"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11,"CI:"),e.qZA()(),e.TgZ(12,"div",8)(13,"input",9,10),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("CI"))?null:i.invalid)&&(null==(i=t.formUser.form.get("CI"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"CI"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(15,"div",5)(16,"div",6)(17,"label",7),e._uU(18," Nombres:"),e.qZA()(),e.TgZ(19,"div",8)(20,"input",11),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("name"))?null:i.invalid)&&(null==(i=t.formUser.form.get("name"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"name"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",7),e._uU(24," Apellidos :"),e.qZA()(),e.TgZ(25,"div",8)(26,"input",12),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("lastName"))?null:i.invalid)&&(null==(i=t.formUser.form.get("lastName"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"lastName"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(27,"div",5)(28,"div",6)(29,"label",13),e._uU(30," Direcci\xf3n :"),e.qZA()(),e.TgZ(31,"div",8)(32,"input",14),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("address"))?null:i.invalid)&&(null==(i=t.formUser.form.get("address"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"address"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(33,"div",5)(34,"div",6)(35,"label",7),e._uU(36," Tel\xe9fono :"),e.qZA()(),e.TgZ(37,"div",8)(38,"input",15),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("phone"))?null:i.invalid)&&(null==(i=t.formUser.form.get("phone"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"phone"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(39,"div",5)(40,"div",6)(41,"label",7),e._uU(42,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(43,"div",8)(44,"input",16),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("email"))?null:i.invalid)&&(null==(i=t.formUser.form.get("email"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"email"))})("mouseout",function(){return t.notification.close()}),e.qZA()()(),e.TgZ(45,"div",4)(46,"label"),e._uU(47,"Datos para el inicio de sesi\xf3n"),e.qZA()(),e.TgZ(48,"div",5)(49,"div",6)(50,"label",7),e._uU(51,"Contrase\xf1a :"),e.qZA()(),e.TgZ(52,"div",8)(53,"input",17),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("password"))?null:i.invalid)&&(null==(i=t.formUser.form.get("password"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"password"))})("mouseout",function(){return t.notification.close()})("input",function(){return t.onCheckPassword()}),e.qZA()()(),e.TgZ(54,"div",5)(55,"div",6)(56,"label",7),e._uU(57,"Confirmar contrase\xf1a :"),e.qZA()(),e.TgZ(58,"div",18)(59,"div",19)(60,"input",20),e.NdJ("mouseover",function(){let i;return(null==(i=t.formUser.form.get("password_confirmation"))?null:i.invalid)&&(null==(i=t.formUser.form.get("password_confirmation"))?null:i.touched)&&t.notification.showTooltip(t.controlError.getErrorMessage(t.formUser.form,"password_confirmation"))})("mouseout",function(){return t.notification.close()})("input",function(){return t.onCheckPassword()}),e.qZA()(),e.YNc(61,G,3,0,"div",21),e.qZA()(),e.TgZ(62,"div",22)(63,"div",23)(64,"button",24),e.NdJ("click",function(){return t.cancel()}),e._uU(65," Cancelar "),e.qZA(),e.TgZ(66,"button",25),e._uU(67," Registrar "),e.qZA()()()()()()),2&o){let r;e.xp6(3),e.Q6J("formGroup",t.formUser.form),e.xp6(58),e.Q6J("ngIf",null!==(null==(r=t.formUser.form.get("password"))?null:r.value)&&null!==(null==(r=t.formUser.form.get("password_confirmation"))?null:r.value)&&t.notMatch),e.xp6(5),e.Q6J("disabled",t.formUser.form.invalid||t.notMatch)}},dependencies:[f.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})(),canActivate:[h.a],data:{requiredRole:"ADMIN"},title:"Usuarios"},{path:"editar/:id",component:(()=>{class n{constructor(o,t,r,i,u,c){this.controlError=o,this.notification=t,this.userService=r,this.authService=i,this.router=u,this.route=c,this.formUser=new Q,this.loading=!1,this.notMatch=!1,this.subscriptions=[]}ngOnInit(){this.formUser.form.reset(),this.getUser(this.route.snapshot.paramMap.get("id"))}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}getUser(o){this.userService.getUser(o).subscribe(t=>{this.user=t.data,"ADMIN"===this.user.role&&this.setValues(this.user)})}setValues(o){this.formUser.form.patchValue({CI:o.ciUser,name:o.nameUser,lastName:o.lastNameUser,address:o.addressUser,phone:o.phoneUser,email:o.emailUser})}changedStatusUser(o,t){const m=t?"Cuenta activada correctamente":"Cuenta desactivada correctamente",g=t?"No se pudo activar la cuenta":"No se pudo desactivar la cuenta";this.notification.showConfirm(t?"info":"warning",t?"Informaci\xf3n":"Peligro",t?"Est\xe1 seguro de activar este usuario?":"Est\xe1 seguro de desactivar este usuario?",t?"Activar":"Desactivar!","Cancelar!").then(re=>{re.isConfirmed&&this.subscriptions.push(this.userService.changedStatusUser(o,t).subscribe(_=>{console.log(_),this.notification.showSuccess("Actualizado",m),this.ngOnInit()},_=>{0===_.status?this.notification.showError("Error","Error de conexi\xf3n con el servidor"):(this.ngOnInit(),console.log(_.error),this.notification.showError("Error",g))}))})}update(){const{CI:o,name:t,lastName:r,address:i,phone:u,email:c}=this.formUser.form.value;this.userService.updateUser(this.user?.id,{ciUser:o,name:t,lastName:r,address:i,phone:u,email:c}).subscribe(m=>{this.notification.showSuccess("Actualizado","Usuario registrado con \xe9xito"),this.router.navigate(["../../listar"],{relativeTo:this.route})},m=>{this.notification.showError("Error",0===m.status?"Error de conexi\xf3n con el servidor":m.error.error)})}changePassword(o){this.notification.showConfirm("question","Cambiar contrase\xf1a","Estas seguro de renovar la contrase\xf1a","Si, cambiar","No, cancelar").then(t=>{t.isConfirmed&&this.subscriptions.push(this.userService.changePasswordUser({id:o}).subscribe(r=>{console.log(r),this.notification.showSuccess("Contrase\xf1a renovada","Se ha enviado las credenciales al correo del usuario"),this.router.navigate(["../../listar"],{relativeTo:this.route})},r=>{this.notification.showError("Error",0===r.status?"Error de conexi\xf3n con el servidor":r.error.error)}))})}onCheckPassword(){const o=this.formUser.form.get("password")?.value,t=this.formUser.form.get("password_confirmation")?.value;this.notMatch=o!==t}cancel(){this.router.navigate(["../../listar"],{relativeTo:this.route})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(T.Q),e.Y36(v.T),e.Y36(b),e.Y36(x.e),e.Y36(d.F0),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-editar"]],decls:7,vars:5,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],[4,"ngIf"],["class","w-full lg:h-[90%] py-2",3,"formGroup","ngSubmit",4,"ngIf"],["class","w-full lg:h-[90%] py-2",4,"ngIf"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","formControlName","CI","placeholder","Ingrese el CI",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["inputCI",""],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","submit",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","p-2","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","my-4","grid-cols-1"],[1,"flex","items-center","justify-center"],["type","button","title","Cambiar estado",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","p-2","flex","items-center","justify-center","hover:bg-nile-blue","hover:text-cameo",3,"click"],[4,"ngIf","ngIfElse"],["offState",""],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","p-2","hover:bg-nile-blue","hover:text-cameo",3,"click"],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","p-2","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],[1,"fa","fa-circle","text-2xl","font-bold","text-avocado","text-opacity-70"],[1,"ml-2"],[1,"mr-2"],[1,"fa","fa-circle","text-2xl","font-bold","text-red-500"],[1,"w-full","lg:h-[90%]","py-2"],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,H,2,0,"span",2),e.YNc(3,D,2,0,"span",2),e.YNc(4,K,2,0,"span",2),e.qZA(),e.YNc(5,z,71,6,"form",3),e.YNc(6,X,72,10,"div",4),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngIf","ADMIN"===(null==t.user?null:t.user.role)),e.xp6(1),e.Q6J("ngIf","DECE"===(null==t.user?null:t.user.role)),e.xp6(1),e.Q6J("ngIf","TEACHER"===(null==t.user?null:t.user.role)),e.xp6(1),e.Q6J("ngIf","ADMIN"===(null==t.user?null:t.user.role)),e.xp6(1),e.Q6J("ngIf","ADMIN"!==(null==t.user?null:t.user.role)))},dependencies:[f.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})(),canActivate:[h.a],data:{requiredRole:"ADMIN"},title:"Usuarios"},{path:"listar",component:Y,canActivate:[h.a],data:{requiredRole:"ADMIN"},title:"Usuarios"}];let te=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(ee),d.Bz]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,te,l.UX,l.u5,w.m]}),n})()}}]);