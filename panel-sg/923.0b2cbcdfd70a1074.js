"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[923],{923:(F,u,n)=>{n.r(u),n.d(u,{CasoTestDocenteModule:()=>L});var l=n(6895),g=n(668),h=n(6561),t=n(8256),f=n(2340),m=n(529);let x=(()=>{class o{constructor(e){this.http=e,this.URL=f.N.api+"/api/1.0"}create(e){return this.http.post(`${this.URL}/testTeacher`,e)}getAll(e){return this.http.get(`${this.URL}/testTeacher/teacher/${e}`)}getTestTeacher(e){return this.http.get(`${this.URL}/testTeacher/${e}`)}update(e,r){return this.http.put(`${this.URL}/testTeacher/${e}`,r)}delete(e){return this.http.delete(`${this.URL}/testTeacher/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=n(1045),v=n(2126),d=n(433);function T(o,i){1&o&&(t.TgZ(0,"div",3),t._UZ(1,"div",4),t.TgZ(2,"div",3)(3,"div",5),t._UZ(4,"div",6),t.TgZ(5,"div",7)(6,"span",8),t._uU(7,"Cargando"),t.qZA(),t.TgZ(8,"span",9),t._uU(9,"..."),t.qZA()()()()())}function Z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",25)(2,"div",26)(3,"span")(4,"strong"),t._uU(5,"CI: "),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"span")(8,"strong"),t._uU(9,"Nombres: "),t.qZA(),t._uU(10),t.qZA()()(),t.TgZ(11,"td",25)(12,"div",26)(13,"span")(14,"strong"),t._uU(15,"CI: "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"span")(18,"strong"),t._uU(19,"Nombres: "),t.qZA(),t._uU(20),t.qZA()()(),t.TgZ(21,"td",27),t._uU(22),t.qZA(),t.TgZ(23,"td",27),t._uU(24),t.ALo(25,"date"),t.qZA(),t.TgZ(26,"td",27)(27,"button",28),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw(3);return t.KtG(c.deleteTest(a.id))}),t._UZ(28,"i",29),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(6),t.hij(" ",e.ciTeacher,""),t.xp6(4),t.AsE(" ",e.nameTeacher," ",e.lastNameTeacher,""),t.xp6(6),t.hij(" ",e.ciStudent,""),t.xp6(4),t.AsE(" ",e.nameStudent," ",e.lastNameStudent,""),t.xp6(2),t.hij(" ",e.score," "),t.xp6(2),t.hij(" ",t.xi3(25,8,e.createAt,"dd/MM/yyyy")," ")}}function b(o,i){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Z,29,11,"tr",24),t.ALo(2,"filterTables"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.tests,e.search))}}function A(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31),t._uU(2," Evaluador "),t.qZA(),t.TgZ(3,"div",32)(4,"div",33),t._uU(5,"CI:"),t.qZA(),t.TgZ(6,"div",34),t._uU(7),t.qZA()(),t.TgZ(8,"div",32)(9,"div",33),t._uU(10,"Nombre:"),t.qZA(),t.TgZ(11,"div",34),t._uU(12),t.qZA()(),t.TgZ(13,"div",31),t._uU(14," Estudiante "),t.qZA(),t.TgZ(15,"div",32)(16,"div",33),t._uU(17,"CI:"),t.qZA(),t.TgZ(18,"div",34),t._uU(19),t.qZA()(),t.TgZ(20,"div",32)(21,"div",33),t._uU(22,"Nombre:"),t.qZA(),t.TgZ(23,"div",34),t._uU(24),t.qZA()(),t.TgZ(25,"div",32)(26,"div",33),t._uU(27,"Estado:"),t.qZA(),t.TgZ(28,"div",34),t._uU(29),t.qZA()(),t.TgZ(30,"div",32)(31,"div",33),t._uU(32,"Puntuaci\xf3n:"),t.qZA(),t.TgZ(33,"div",34),t._uU(34),t.qZA()(),t.TgZ(35,"div",32)(36,"div",33),t._uU(37," Fecha de Aplicaci\xf3n: "),t.qZA(),t.TgZ(38,"div",34),t._uU(39),t.ALo(40,"date"),t.qZA()(),t.TgZ(41,"div",35)(42,"button",36),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.deleteTest(a.id))}),t._uU(43," Eliminar "),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(7),t.hij(" ",e.ciTeacher," "),t.xp6(5),t.AsE(" ",e.nameTeacher," ",e.lastNameTeacher," "),t.xp6(7),t.hij(" ",e.ciStudent," "),t.xp6(5),t.AsE(" ",e.nameStudent," ",e.lastNameStudent," "),t.xp6(5),t.hij(" ",e.statusTestTeacher," "),t.xp6(5),t.hij(" ",e.score," "),t.xp6(5),t.hij(" ",t.xi3(40,9,e.createAt,"dd/MM/yyyy")," ")}}function _(o,i){1&o&&(t.TgZ(0,"div",37),t._uU(1," No hay datos para mostrar "),t.qZA())}function U(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._uU(2," Gesti\xf3n de test docentes "),t.qZA(),t.TgZ(3,"div",12)(4,"div",13)(5,"input",14),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.search=s)}),t.qZA()()(),t.TgZ(6,"div",15)(7,"table",16)(8,"thead",17)(9,"tr")(10,"th",18),t._uU(11," Docente Evaluador "),t.qZA(),t.TgZ(12,"th",18),t._uU(13," Estudiante "),t.qZA(),t.TgZ(14,"th",18),t._uU(15," Puntuaci\xf3n "),t.qZA(),t.TgZ(16,"th",18),t._uU(17," Fecha de Aplicaci\xf3n "),t.qZA(),t.TgZ(18,"th",18)(19,"div",19)(20,"label",3),t._uU(21,"Acciones"),t.qZA()()()()(),t.YNc(22,b,3,4,"tbody",20),t.qZA()(),t.TgZ(23,"div",21),t.YNc(24,A,44,12,"div",22),t.ALo(25,"filterTables"),t.qZA(),t.YNc(26,_,2,0,"div",23),t.qZA()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.search),t.xp6(17),t.Q6J("ngIf",e.tests.length>0),t.xp6(2),t.Q6J("ngForOf",t.xi3(25,4,e.tests,e.search)),t.xp6(2),t.Q6J("ngIf",0===e.tests.length)}}const q=[{path:"listar",component:(()=>{class o{constructor(e,r,s){this.serviceCasoTeacher=e,this.authService=r,this.notification=s,this.tests=[],this.search="",this.loading=!0}ngOnInit(){this.loadTests()}loadTests(){this.id=this.authService.getUserId(),this.serviceCasoTeacher.getAll(this.id).subscribe(e=>{const{message:r,data:s}=e;this.tests=s,console.log(r),console.log(s),this.loading=!1},e=>{this.loading=!0,this.notification.showError("Error",0===e.status?"Error de conexi\xf3n con el servidor":e.error.error)})}deleteTest(e){this.notification.showConfirm("warning","Peligro","\xbfEst\xe1 seguro de eliminar el Test?","Eliminar","Cancelar").then(r=>{r.isConfirmed&&this.serviceCasoTeacher.delete(e).subscribe(s=>{this.notification.showSuccess("Eliminado","Test eliminado correctamente"),this.ngOnInit()},s=>{this.notification.showError("Error",s.error.error)})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x),t.Y36(p.e),t.Y36(v.T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listar"]],features:[t._Bn([l.uU,h.u])],decls:3,vars:2,consts:[[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300","flex","justify-center"],["class","flex items-center justify-center",4,"ngIf"],["class","w-full",4,"ngIf"],[1,"flex","items-center","justify-center"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"w-full"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","my-5"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por c\xe9dula, nombre...",1,"mx-3","px-2","py-3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[92%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[1,"flex","justify-between"],[4,"ngIf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],["class","mx-4 flex bg-red-700 text-red text-xl rounded-lg font-bold items-center justify-center py-2 text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-3","text-base","text-black-100","tracking-wide","text-left"],[1,"flex","flex-col"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],[1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],[1,"fas","fa-trash-alt"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-1","break-all","items-center","space-x-2","text-center","text-camelot","text-lg","px-2","font-bold","underline"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"],[1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"mx-4","flex","bg-red-700","text-red","text-xl","rounded-lg","font-bold","items-center","justify-center","py-2","text-center"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.YNc(1,T,10,0,"div",1),t.YNc(2,U,27,7,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",r.loading),t.xp6(1),t.Q6J("ngIf",!r.loading))},dependencies:[l.sg,l.O5,d.Fj,d.JJ,d.On,l.uU,h.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})(),canActivate:[n(7574).a],data:{requiredRole:"DECE"},title:"Casos"}];let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(q),g.Bz]}),o})();var E=n(4466);let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,w,d.u5,E.m]}),o})()}}]);