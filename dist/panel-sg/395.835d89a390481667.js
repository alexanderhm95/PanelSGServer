"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[395],{7395:(w,g,l)=>{l.r(g),l.d(g,{CasoTestEstudianteModule:()=>E});var a=l(6895),m=l(668),x=l(6561),t=l(8256),f=l(2340),h=l(529);let Z=(()=>{class o{constructor(e){this.http=e,this.URL=f.N.api+"/api/1.0"}create(e){return this.http.post(`${this.URL}/testStudent`,e)}getAll(){return this.http.get(`${this.URL}/testStudent`)}getTestStudent(e){return this.http.get(`${this.URL}/testStudent/${e}`)}update(e,i){return this.http.put(`${this.URL}/testStudent/${e}`,i)}updateScore(e,i){return this.http.put(`${this.URL}/testStudent/score/${e}`,i)}delete(e){return this.http.delete(`${this.URL}/testStudent/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=l(2126),c=l(433);function v(o,r){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"div",3),t.TgZ(2,"div",4)(3,"div",5),t._UZ(4,"div",6),t.TgZ(5,"div",7)(6,"span",8),t._uU(7,"Cargando"),t.qZA(),t.TgZ(8,"span",9),t._uU(9,"..."),t.qZA()()()()())}function _(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",21)(2,"div",22)(3,"div",23)(4,"strong"),t._uU(5,"CI:"),t.qZA(),t.TgZ(6,"strong"),t._uU(7,"Nombres:"),t.qZA()(),t.TgZ(8,"div",24)(9,"label"),t._uU(10),t.qZA(),t.TgZ(11,"label"),t._uU(12),t.qZA()()()(),t.TgZ(13,"td",21)(14,"div",22)(15,"div",23)(16,"strong"),t._uU(17,"CI:"),t.qZA(),t.TgZ(18,"strong"),t._uU(19,"Nombres:"),t.qZA()(),t.TgZ(20,"div",25)(21,"label"),t._uU(22),t.qZA(),t.TgZ(23,"label"),t._uU(24),t.qZA()()()(),t.TgZ(25,"td",26)(26,"label",27),t._uU(27),t.qZA()(),t.TgZ(28,"td",28)(29,"div",29)(30,"div",30)(31,"label",31),t._uU(32),t.qZA()(),t.TgZ(33,"div",32)(34,"div",33)(35,"button",34),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.scoreUpdate(n.id,"plus"))}),t._UZ(36,"i",35),t.qZA(),t.TgZ(37,"button",34),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.scoreUpdate(n.id,"less"))}),t._UZ(38,"i",36),t.qZA()()()()(),t.TgZ(39,"td",26),t._uU(40),t.qZA(),t.TgZ(41,"td",26),t._uU(42),t.ALo(43,"date"),t.qZA(),t.TgZ(44,"td",26)(45,"button",37),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.deleteTest(n.id))}),t._UZ(46,"i",38),t.qZA()()()}if(2&o){const e=r.$implicit;t.xp6(10),t.Oqu(e.ciDece),t.xp6(2),t.AsE("",e.nameDece," ",e.lastNameDece,""),t.xp6(10),t.Oqu(e.ciStudent),t.xp6(2),t.AsE("",e.nameStudent," ",e.lastNameStudent,""),t.xp6(2),t.Udp("background-color",e.statusTestStudent?"green":"red"),t.xp6(1),t.hij("",e.statusTestStudent?"Atendido":"No atendido"," "),t.xp6(5),t.hij(" ",e.score," "),t.xp6(8),t.hij(" ",e.scoreEvaluator," "),t.xp6(2),t.hij(" ",t.xi3(43,12,e.createAt,"dd/MM/yyyy")," ")}}function T(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",39)(1,"div",40),t._uU(2," DECE Evaluador "),t.qZA(),t.TgZ(3,"div",41)(4,"div",42),t._uU(5,"CI:"),t.qZA(),t.TgZ(6,"div",43),t._uU(7),t.qZA()(),t.TgZ(8,"div",41)(9,"div",42),t._uU(10,"Nombre:"),t.qZA(),t.TgZ(11,"div",43),t._uU(12),t.qZA()(),t.TgZ(13,"div",40),t._uU(14," Estudiante "),t.qZA(),t.TgZ(15,"div",41)(16,"div",42),t._uU(17,"CI:"),t.qZA(),t.TgZ(18,"div",43),t._uU(19),t.qZA()(),t.TgZ(20,"div",41)(21,"div",42),t._uU(22,"Nombre:"),t.qZA(),t.TgZ(23,"div",43),t._uU(24),t.qZA()(),t.TgZ(25,"div",41)(26,"div",42),t._uU(27,"Estado:"),t.qZA(),t.TgZ(28,"div",43),t._uU(29),t.qZA()(),t.TgZ(30,"div",41)(31,"div",42),t._uU(32,"Punt\xfaa:"),t.qZA(),t.TgZ(33,"div",43),t._uU(34),t.qZA()(),t.TgZ(35,"div",41)(36,"div",42),t._uU(37," Fecha Aplicaci\xf3n: "),t.qZA(),t.TgZ(38,"div",43),t._uU(39),t.ALo(40,"date"),t.qZA()(),t.TgZ(41,"div",44)(42,"button",45),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.deleteTest(n._id))}),t._uU(43," Eliminar "),t.qZA()()()}if(2&o){const e=r.$implicit;t.xp6(7),t.hij(" ",e.ciDece," "),t.xp6(5),t.AsE(" ",e.nameDece," ",e.lastNameDece," "),t.xp6(7),t.hij(" ",e.ciStudent," "),t.xp6(5),t.AsE(" ",e.nameStudent," ",e.lastNameStudent," "),t.xp6(5),t.hij(" ",e.statusTestStudent," "),t.xp6(5),t.hij(" ",e.score," "),t.xp6(5),t.hij(" ",t.xi3(40,9,e.createAt,"dd/MM/yyyy")," ")}}function A(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._uU(2," Gesti\xf3n de tests estudiantes "),t.qZA(),t.TgZ(3,"div",12)(4,"input",13),t.NdJ("ngModelChange",function(s){t.CHM(e);const n=t.oxw();return t.KtG(n.search=s)}),t.qZA()(),t.TgZ(5,"div",14)(6,"table",15)(7,"thead",16)(8,"tr")(9,"th",17),t._uU(10," Evaluador "),t.qZA(),t.TgZ(11,"th",17),t._uU(12," Estudiante "),t.qZA(),t.TgZ(13,"th",17),t._uU(14," Estado "),t.qZA(),t.TgZ(15,"th",17),t._uU(16," Puntaje "),t.qZA(),t.TgZ(17,"th",17),t._uU(18," Puntaje Evaluador "),t.qZA(),t.TgZ(19,"th",17),t._uU(20," Fecha Aplicacion "),t.qZA(),t.TgZ(21,"th",17),t._uU(22," Acciones "),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,_,47,15,"tr",18),t.ALo(25,"filterTables"),t.qZA()()(),t.TgZ(26,"div",19),t.YNc(27,T,44,12,"div",20),t.ALo(28,"filterTables"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.search),t.xp6(20),t.Q6J("ngForOf",t.xi3(25,3,e.tests,e.search)),t.xp6(3),t.Q6J("ngForOf",t.xi3(28,6,e.tests,e.search))}}let p=(()=>{class o{constructor(e,i){this.serviceCasoEstudiante=e,this.notification=i,this.tests=[],this.search="",this.loading=!0}ngOnInit(){this.serviceCasoEstudiante.getAll().subscribe(e=>{const{message:i,data:s}=e;this.tests=s,this.loading=!1,console.log(i)},e=>{this.loading=!0,console.log(e.error),this.notification.showError("Error",e.error.error)})}scoreUpdate(e,i){"plus"==i?this.serviceCasoEstudiante.updateScore(e,{scoreEvaluator:!0}).subscribe(n=>{const{message:d,data:u}=n;this.tests=u,console.log(d),this.ngOnInit()},n=>{console.log(n.error),this.notification.showError("Error",n.error.error)}):this.serviceCasoEstudiante.updateScore(e,{score:!1}).subscribe(n=>{const{message:d,data:u}=n;this.tests=u,console.log(d),this.ngOnInit()},n=>{console.log(n.error),this.notification.showError("Error",n.error.error)})}deleteTest(e){this.notification.showConfirm("warning","Peligro","Estas seguro de eliminar el Test?","Si, eliminar!","No, cancelar!").then(i=>{i.isConfirmed&&this.serviceCasoEstudiante.delete(e).subscribe(s=>{this.notification.showSuccess("\xc9xito","Test eliminado correctamente"),console.log(s),this.ngOnInit()},s=>{console.log(s.error),this.notification.showError("Error","No se pudo elimnar el test")})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z),t.Y36(b.T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listar"]],features:[t._Bn([a.uU,x.u])],decls:2,vars:2,consts:[["class","fixed inset-0 flex items-center justify-center z-50",4,"ngIf"],["class","transition ease-in-out delay-150 w-[95%] h-[90%] lg:h-[95%] lg:m-2 mx-4 my-2 bg-cameo border-4 border-camelot rounded-lg overflow-x-hidden duration-300",4,"ngIf"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","items-center","justify-center"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-full","lg:h-[8%]","h-[10%]","flex","flex-row","lg:justify-start","justify-between","py-2","lg:gap-4"],["placeholder","Buscar...",1,"ml-4","px-2","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[92%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-base","font-semibold","tracking-wide","text-center"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-base","text-black-100","tracking-wide","text-left"],[1,"grid","grid-cols-5"],[1,"col-span-2","flex","flex-col"],[1,"col-span-3","flex","flex-col","text-left"],[1,"col-span-3","flex","flex-col","text-center"],[1,"p-3","text-base","text-black-100","tracking-wide","text-center"],[1,"py-2","px-3","rounded-lg","text-base","text-white"],[1,"py-3","text-base","text-black-100","tracking-wide","justify-center","items-center"],[1,"grid","grid-cols-2","m-2"],[1,"col-span-1","text-xl","text-camelot","border-r-2","border-camelot","justify-center","items-center","d-flex","align-items-center"],[1,"flex","items-center","justify-end","px-2"],[1,"col-span-1","border-l-2","border-camelot","justify-center","items-center","d-flex","align-items-center"],[1,"d-flex","flex-column","justify-content-center","align-items-center","px-2"],["type","button",1,"cursor-pointer",3,"click"],[1,"fa","fa-plus","text-xl","text-camelot","font-extrabold","border-2","border-camelot","mx-1","rounded-md"],[1,"fa","fa-minus","text-xl","text-camelot","font-extrabold","border-2","border-camelot","mx-1","rounded-md"],[1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],[1,"fas","fa-trash-alt"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-1","break-all","items-center","space-x-2","text-center","text-camelot","text-base","px-2","font-bold","underline"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"],[1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,v,10,0,"div",0),t.YNc(1,A,29,9,"div",1)),2&e&&(t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",!i.loading))},dependencies:[a.sg,a.O5,c.Fj,c.JJ,c.On,a.uU,x.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();const U=[{path:"",component:p,pathMatch:"full"},{path:"listar",component:p}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(U),m.Bz]}),o})();var y=l(4466);let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,C,c.u5,y.m]}),o})()}}]);