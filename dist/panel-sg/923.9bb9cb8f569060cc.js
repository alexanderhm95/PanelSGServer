"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[923],{923:(y,u,s)=>{s.r(u),s.d(u,{CasoTestDocenteModule:()=>C});var a=s(6895),g=s(668),h=s(6561),e=s(8256),m=s(2340),f=s(529);let T=(()=>{class o{constructor(t){this.http=t,this.URL=m.N.api+"/api/1.0"}create(t){return this.http.post(`${this.URL}/testTeacher`,t)}getAll(){return this.http.get(`${this.URL}/testTeacher`)}getTestTeacher(t){return this.http.get(`${this.URL}/testTeacher/${t}`)}update(t,n){return this.http.put(`${this.URL}/testTeacher/${t}`,n)}delete(t){return this.http.delete(`${this.URL}/testTeacher/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Z=s(2126),c=s(433);function x(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",11)(2,"div",12)(3,"div",13)(4,"strong"),e._uU(5,"CI:"),e.qZA(),e.TgZ(6,"strong"),e._uU(7,"Nombres:"),e.qZA()(),e.TgZ(8,"div",14)(9,"label"),e._uU(10),e.qZA(),e.TgZ(11,"label"),e._uU(12),e.qZA()()()(),e.TgZ(13,"td",11)(14,"div",12)(15,"div",13)(16,"strong"),e._uU(17,"CI:"),e.qZA(),e.TgZ(18,"strong"),e._uU(19,"Nombres:"),e.qZA()(),e.TgZ(20,"div",14)(21,"label"),e._uU(22),e.qZA(),e.TgZ(23,"label"),e._uU(24),e.qZA()()()(),e.TgZ(25,"td",15)(26,"label",16),e._uU(27),e.qZA()(),e.TgZ(28,"td",15),e._uU(29),e.qZA(),e.TgZ(30,"td",15),e._uU(31),e.ALo(32,"date"),e.qZA(),e.TgZ(33,"td",15)(34,"button",17),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.deleteTest(l.id))}),e._UZ(35,"i",18),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(10),e.Oqu(t.ciTeacher),e.xp6(2),e.AsE("",t.nameTeacher," ",t.lastNameTeacher,""),e.xp6(10),e.Oqu(t.ciStudent),e.xp6(2),e.AsE("",t.nameStudent," ",t.lastNameStudent,""),e.xp6(2),e.Udp("background-color",t.statusTestTeacher?"green":"red"),e.xp6(1),e.hij("",t.statusTestTeacher?"Atendido":"No atendido"," "),e.xp6(2),e.hij(" ",t.score," "),e.xp6(2),e.hij(" ",e.xi3(32,11,t.createAt,"dd/MM/yyyy")," ")}}function v(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e._uU(2," Evaluador "),e.qZA(),e.TgZ(3,"div",21)(4,"div",22),e._uU(5,"CI:"),e.qZA(),e.TgZ(6,"div",23),e._uU(7),e.qZA()(),e.TgZ(8,"div",21)(9,"div",22),e._uU(10,"Nombre:"),e.qZA(),e.TgZ(11,"div",23),e._uU(12),e.qZA()(),e.TgZ(13,"div",20),e._uU(14," Estudiante "),e.qZA(),e.TgZ(15,"div",21)(16,"div",22),e._uU(17,"CI:"),e.qZA(),e.TgZ(18,"div",23),e._uU(19),e.qZA()(),e.TgZ(20,"div",21)(21,"div",22),e._uU(22,"Nombre:"),e.qZA(),e.TgZ(23,"div",23),e._uU(24),e.qZA()(),e.TgZ(25,"div",21)(26,"div",22),e._uU(27,"Estado:"),e.qZA(),e.TgZ(28,"div",23),e._uU(29),e.qZA()(),e.TgZ(30,"div",21)(31,"div",22),e._uU(32,"Puntaje:"),e.qZA(),e.TgZ(33,"div",23),e._uU(34),e.qZA()(),e.TgZ(35,"div",21)(36,"div",22),e._uU(37," Fecha Aplicaci\xf3n: "),e.qZA(),e.TgZ(38,"div",23),e._uU(39),e.ALo(40,"date"),e.qZA()(),e.TgZ(41,"div",24)(42,"button",17),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.deleteTest(l.id))}),e._UZ(43,"i",18),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(7),e.hij(" ",t.ciDece," "),e.xp6(5),e.AsE(" ",t.nameDece," ",t.lastNameDece," "),e.xp6(7),e.hij(" ",t.ciStudent," "),e.xp6(5),e.AsE(" ",t.nameStudent," ",t.lastNameStudent," "),e.xp6(5),e.hij(" ",t.statusTestTeacher," "),e.xp6(5),e.hij(" ",t.score," "),e.xp6(5),e.hij(" ",e.xi3(40,9,t.createdAt,"dd/MM/yyyy")," ")}}let p=(()=>{class o{constructor(t,n){this.serviceCasoTeacher=t,this.notification=n,this.tests=[],this.search=""}ngOnInit(){this.serviceCasoTeacher.getAll().subscribe(t=>{const{message:n,data:i}=t;this.tests=i,console.log(i),console.log(n)},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor":"Error al cargar informaci\xf3n")})}deleteTest(t){console.log(t),this.notification.showConfirm("warning","Peligro","Estas seguro de eliminar el Test?","Si, eliminar!","No, cancelar!").then(n=>{this.serviceCasoTeacher.delete(t).subscribe(i=>{this.notification.showSuccess("\xc9xito","Test eliminado correctamente"),console.log(i),this.ngOnInit()},i=>{console.log(i.error),this.notification.showError("Error","No se pudo elimnar el test")})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T),e.Y36(Z.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listar"]],features:[e._Bn([a.uU,h.u])],decls:26,vars:6,consts:[[1,"w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[7%]","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"w-full","lg:h-[8%]","h-[10%]","flex","flex-row","lg:justify-start","justify-between","py-2","lg:gap-4"],["placeholder","Buscar...",1,"ml-4","px-2","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[92%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"grid","grid-cols-5"],[1,"col-span-2","flex","flex-col"],[1,"col-span-3","flex","flex-col"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],[1,"py-2","px-3","rounded-lg","text-sm","text-white"],[1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],[1,"fas","fa-trash-alt"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-1","break-all","items-center","space-x-2","text-center","text-camelot","text-lg","px-2","font-bold","underline"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Gesti\xf3n de tests docentes "),e.qZA(),e.TgZ(3,"div",2)(4,"input",3),e.NdJ("ngModelChange",function(l){return n.search=l}),e.qZA()(),e.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),e._uU(10," Docente Evaluador "),e.qZA(),e.TgZ(11,"th",7),e._uU(12," Estudiante "),e.qZA(),e.TgZ(13,"th",7),e._uU(14," Estado "),e.qZA(),e.TgZ(15,"th",7),e._uU(16," Puntaje "),e.qZA(),e.TgZ(17,"th",7),e._uU(18," Fecha Aplicacion "),e.qZA(),e.TgZ(19,"th",7),e._uU(20," Acciones "),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,x,36,14,"tr",8),e.ALo(23,"filterTables"),e.qZA()()(),e.TgZ(24,"div",9),e.YNc(25,v,44,12,"div",10),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.search),e.xp6(18),e.Q6J("ngForOf",e.xi3(23,3,n.tests,n.search)),e.xp6(3),e.Q6J("ngForOf",n.tests))},dependencies:[a.sg,c.Fj,c.JJ,c.On,a.uU,h.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),o})();const A=[{path:"",component:p,pathMatch:"full"},{path:"listar",component:p}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),o})();var U=s(4466);let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,b,c.u5,U.m]}),o})()}}]);