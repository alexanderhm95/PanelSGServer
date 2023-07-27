"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[258],{4258:(Y,b,m)=>{m.r(b),m.d(b,{TestEstudianteModule:()=>j});var u=m(6895),g=m(668),s=m(433);class T{constructor(){this.form=new s.cw({name:new s.NI("",[s.kI.required,s.kI.minLength(3)]),imagen:new s.NI(null),valor:new s.NI("",[s.kI.required,s.kI.minLength(1),s.kI.pattern("^[01]$")]),section:new s.NI("",[s.kI.required,s.kI.minLength(1),s.kI.pattern("^[0-9]*$")])})}}var d=m(2340),e=m(8256),x=m(2031),p=m(2126),f=m(529);let h=(()=>{class n{constructor(t){this.http=t,this.URL=d.N.api+"/api/1.0"}createPregunta(t){return this.http.post(`${this.URL}/testImages`,t)}getAllPregunta(){return this.http.get(`${this.URL}/testImages`)}getAllPreguntaPaginated(t,o){const i=(new f.LE).set("page",t.toString()).set("pageSize",o.toString());return this.http.get(`${this.URL}/testImages/paginated`,{params:i})}getPregunta(t){return this.http.get(`${this.URL}/testImages/${t}`)}updatePregunta(t,o){return this.http.put(`${this.URL}/testImages/${t}`,o)}deletePregunta(t){return this.http.delete(`${this.URL}/testImages/${t}`)}deleteAllPregunta(){return this.http.delete(`${this.URL}/testImages`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),I=(()=>{class n{validateImage(t){return!(!t||!["image/png","image/jpeg","image/jpg"].includes(t.type))}renameImage(t,o){const i=t.name.split(".")[0],r=t.name.split(".")[1],l=new Date,c=`${l.getFullYear()}${(l.getMonth()+1).toString().padStart(2,"0")}${l.getDate().toString().padStart(2,"0")}`,v=`${l.getHours().toString().padStart(2,"0")}${l.getMinutes().toString().padStart(2,"0")}${l.getSeconds().toString().padStart(2,"0")}`;let Z=`${o}_${i.replace(/[^a-zA-Z0-9.]/g,"")}${c}${v}.${r}`;return console.log("Nuevo nombre:",Z),new File([t],Z,{type:t.type})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function y(n,a){if(1&n&&e._UZ(0,"img",22),2&n){const t=e.oxw();e.Q6J("src",t.imageUrl,e.LSH)}}let C=(()=>{class n{constructor(t,o,i,r,l,c,v){this.controlError=t,this.notification=o,this.testService=i,this.imageService=r,this.route=l,this.router=c,this.http=v,this.api=d.N.api+"/api/1.0",this.formTestImages=new T,this.srcImage="",this.imageUrl="",this.id="",this.imageUpload=!1}ngOnInit(){this.formTestImages.form.reset(),this.id=this.route.snapshot.paramMap.get("id"),this.getTest()}getTest(){this.testService.getPregunta(this.id).subscribe(t=>{this.testImages=t,this.setValues(this.testImages)},t=>{console.log(t)})}obtenerImagen(t){return this.http.get(t,{responseType:"blob"})}setValues(t){this.formTestImages.form.patchValue({name:t.name,valor:t.value,section:t.section}),this.loadImage(t.link)}loadImage(t){const o=t.split("/");this.obtenerImagen(this.api+t).subscribe(i=>{const r=new File([i],o[o.length-1],{type:i.type});this.imagenTest=this.imageService.renameImage(r,"TestImagenes"),this.srcImage="/public/TestImagenes/"+this.imagenTest.name,this.imageUpload=!0;const l=new FileReader;l.onload=c=>{this.imageUrl=c.target.result},l.readAsDataURL(r)})}update(){this.testImages={name:this.formTestImages.form.value.name,urlImage:this.srcImage,value:this.formTestImages.form.value.valor,section:this.formTestImages.form.value.section};const t=new FormData;t.append("singleFile",this.imagenTest),t.append("data",JSON.stringify(this.testImages)),this.testService.updatePregunta(this.id,t).subscribe(o=>{const{message:i}=o;this.notification.showSuccess("\xc9xito","pregunta agregada correctamente"),console.log(i),this.router.navigate(["../../listar"],{relativeTo:this.route})},o=>{this.notification.showError("Error",0===o.status?"Error de conexi\xf3n con el servidor, int\xe9ntelo mas tarde":o.error.error)})}onFileSelected(t){const o=t.target.files,i=o.length>0?o[0]:null;if(i&&this.imageService.validateImage(i)){this.imagenTest=this.imageService.renameImage(i,"TestImagenes"),this.srcImage="/public/TestImagenes/"+this.imagenTest.name.split("_").pop(),this.imageUpload=!0;const r=new FileReader;r.onload=l=>{this.imageUrl=l.target.result},r.readAsDataURL(i)}else this.resetImage()}resetImage(){this.formTestImages.form.get("imagen")?.setValue(null),this.imagenTest=void 0,this.srcImage="",this.imageUpload=!1,this.imageUrl=""}cancel(){this.router.navigate(["../../listar"],{relativeTo:this.route})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.Q),e.Y36(p.T),e.Y36(h),e.Y36(I),e.Y36(g.gz),e.Y36(g.F0),e.Y36(f.eN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-editar"]],decls:38,vars:3,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],["enctype","multipart/form-data",1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","name","formControlName","name",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","imagen"],[1,"flex","flex-col","col-span-1"],[1,"w-full","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","file","id","imagen","formControlName","imagen","accept","image/*",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout","change"],["alt","Imagen seleccionada","class","w-40 h-40",3,"src",4,"ngIf"],["for","value"],["type","text","id","name","formControlName","valor",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","section"],["type","text","id","name","formControlName","section",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["alt","Imagen seleccionada",1,"w-40","h-40",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Modificar pregunta para el test del estudiante "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.update()}),e.TgZ(4,"fieldset",3)(5,"div",4)(6,"div",5)(7,"label",6),e._uU(8," Ingrese el nombre de la imagen: "),e.qZA()(),e.TgZ(9,"div",7)(10,"input",8),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("name"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("name"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"name"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(11,"div",4)(12,"div",5)(13,"label",9),e._uU(14," Cargar imagen: "),e.qZA()(),e.TgZ(15,"div",10)(16,"div",11)(17,"input",12),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("imagen"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("imagen"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"imagen"))})("mouseout",function(){return o.notification.close()})("change",function(r){return o.onFileSelected(r)}),e.qZA()(),e.TgZ(18,"div",11),e.YNc(19,y,1,1,"img",13),e.qZA()()(),e.TgZ(20,"div",4)(21,"div",5)(22,"label",14),e._uU(23," Ingrese el valor de la imagen: "),e.qZA()(),e.TgZ(24,"div",7)(25,"input",15),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("valor"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("valor"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"valor"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(26,"div",4)(27,"div",5)(28,"label",16),e._uU(29," Ingrese la secci\xf3n ala que pertenece: "),e.qZA()(),e.TgZ(30,"div",7)(31,"input",17),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("section"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("section"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"section"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(32,"div",18)(33,"div",19)(34,"button",20),e.NdJ("click",function(){return o.cancel()}),e._uU(35," Cancelar "),e.qZA(),e.TgZ(36,"button",21),e._uU(37," Editar "),e.qZA()()()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formTestImages.form),e.xp6(16),e.Q6J("ngIf",o.imageUrl),e.xp6(17),e.Q6J("disabled",o.formTestImages.form.invalid))},dependencies:[u.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})();var w=m(6561);function A(n,a){1&n&&(e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"div",3)(3,"div",5),e._UZ(4,"div",6),e.TgZ(5,"div",7)(6,"span",8),e._uU(7,"Cargando"),e.qZA(),e.TgZ(8,"span",9),e._uU(9,"..."),e.qZA()()()()())}function U(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td",30),e._UZ(4,"img",31),e.qZA(),e.TgZ(5,"td",29),e._uU(6),e.qZA(),e.TgZ(7,"td",29),e._uU(8),e.qZA(),e.TgZ(9,"td",32)(10,"button",33),e._UZ(11,"i",34),e.qZA(),e.TgZ(12,"button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.delete(r._id))}),e._UZ(13,"i",36),e.qZA()()()}if(2&n){const t=a.$implicit,o=e.oxw(3);e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Udp("max-height",60,"px")("width",80,"px"),e.Q6J("src",o.api+t.link,e.LSH),e.xp6(2),e.hij(" ",t.value," "),e.xp6(2),e.hij(" ",t.section," "),e.xp6(2),e.Q6J("routerLink","../editar/"+t._id)}}function E(n,a){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,U,14,9,"tr",27),e.ALo(2,"filterTables"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,t.preguntas,t.search))}}function S(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",37)(1,"div",38)(2,"div",39),e._uU(3,"Nombre:"),e.qZA(),e.TgZ(4,"div",40),e._uU(5),e.qZA()(),e.TgZ(6,"div",38)(7,"div",39),e._uU(8,"Link:"),e.qZA(),e.TgZ(9,"div",40),e._UZ(10,"img",31),e.qZA()(),e.TgZ(11,"div",38)(12,"div",39),e._uU(13,"Valor:"),e.qZA(),e.TgZ(14,"div",40),e._uU(15),e.qZA()(),e.TgZ(16,"div",38)(17,"div",39),e._uU(18," Secci\xf3n: "),e.qZA(),e.TgZ(19,"div",40),e._uU(20),e.qZA()(),e.TgZ(21,"div",41)(22,"button",42),e._uU(23," Editar "),e.qZA(),e.TgZ(24,"button",43),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.delete(r._id))}),e._uU(25," Eliminar "),e.qZA()()()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.xp6(5),e.hij(" ",t.name," "),e.xp6(5),e.Udp("height",60,"px")("width",80,"px"),e.Q6J("src",o.api+t.link,e.LSH),e.xp6(5),e.hij(" ",t.value," "),e.xp6(5),e.hij(" ",t.section," "),e.xp6(2),e.Q6J("routerLink","../editar/"+t._id)}}function N(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",44)(1,"div",45)(2,"button",46),e.NdJ("keydown",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.handleKeyDown(i))})("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.previousPage())}),e._uU(3," Previous "),e.qZA(),e.TgZ(4,"span",47),e._uU(5),e.qZA(),e.TgZ(6,"button",48),e.NdJ("keyup",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.handleKeyUp(i))})("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.nextPage())}),e._uU(7," Next "),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(2),e.ekj("pressed",t.isButtonPressed),e.Q6J("disabled",1===t.currentPage),e.xp6(3),e.AsE("Page ",t.currentPage," of ",t.totalPages,""),e.xp6(1),e.ekj("pressed",t.isButtonPressed),e.Q6J("disabled",t.currentPage===t.totalPages)}}function k(n,a){1&n&&(e.TgZ(0,"div",49),e._uU(1," No hay datos para mostrar "),e.qZA())}function q(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2," Gesti\xf3n del test estudiante "),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",14),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.search=i)}),e.qZA(),e.TgZ(6,"button",15),e._uU(7," Registrar Pregunta "),e.qZA()()(),e.TgZ(8,"div",16)(9,"table",17)(10,"thead",18)(11,"tr")(12,"th",19),e._uU(13," Nombre "),e.qZA(),e.TgZ(14,"th",19),e._uU(15," Imagen "),e.qZA(),e.TgZ(16,"th",19),e._uU(17," Valor "),e.qZA(),e.TgZ(18,"th",19),e._uU(19," Secci\xf3n "),e.qZA(),e.TgZ(20,"th",19)(21,"div",20)(22,"label",21),e._uU(23,"Acciones"),e.qZA()()()()(),e.YNc(24,E,3,4,"tbody",22),e.qZA()(),e.TgZ(25,"div",23),e.YNc(26,S,26,9,"div",24),e.ALo(27,"filterTables"),e.qZA(),e.YNc(28,N,8,8,"div",25),e.YNc(29,k,2,0,"div",26),e.qZA()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(18),e.Q6J("ngIf",t.preguntas.length>0),e.xp6(2),e.Q6J("ngForOf",e.xi3(27,6,t.preguntas,t.search)),e.xp6(2),e.Q6J("ngIf",t.preguntas.length>0),e.xp6(1),e.Q6J("ngIf",0===t.preguntas.length)}}let J=(()=>{class n{constructor(t,o){this.preguntaService=t,this.notification=o,this.api=d.N.api+"/api/1.0",this.search="",this.loading=!0,this.currentPage=0,this.pageSize=0,this.totalPages=0,this.isButtonPressed=!1,this.preguntas=[]}ngOnInit(){this.getData()}nextPage(){this.currentPage++,this.getData()}previousPage(){this.currentPage>1&&(this.currentPage--,this.getData())}handleKeyDown(t){console.log("Entre a la derecha"),"ArrowRight"===t.key&&this.currentPage<this.totalPages&&(console.log("Me voy a  DER"),this.isButtonPressed=!0,this.nextPage()),this.isButtonPressed=!1}handleKeyUp(t){"ArrowLeft"===t.key&&this.currentPage>1&&(console.log("Me voy a  IZQ"),this.isButtonPressed=!0,this.previousPage()),this.isButtonPressed=!1}getData(){this.loading=!0,this.preguntaService.getAllPreguntaPaginated(this.currentPage,this.pageSize).subscribe(t=>{const{message:o,data:i}=t;this.preguntas=i.testImages.docs,this.currentPage=i.testImages.page,this.totalPages=i.testImages.totalPages,this.loading=!1,console.log(o)},t=>{console.log("Error:",t.error),this.loading=!1,this.notification.showError("Error","No se pudo obtener el test")})}delete(t){this.notification.showConfirm("warning","Peligro","Estas seguro de eliminar la pregunta?","Si, eliminar!","No, cancelar!").then(o=>{o.isConfirmed&&this.preguntaService.deletePregunta(t).subscribe(i=>{const{message:r}=i;this.notification.showSuccess("\xc9xito","Pregunta eliminada correctamente"),console.log(r),this.ngOnInit()},i=>{console.log(i),this.ngOnInit(),this.notification.showError("Error","No se pudo eliminar la pregunta")})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(p.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-listar"]],hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(r){return o.handleKeyDown(r)},!1,e.Jf7)("keyup",function(r){return o.handleKeyUp(r)},!1,e.Jf7)},features:[e._Bn([w.u,u.Zd,(0,u.Fs)(d.N.api+"/api/1.0")])],decls:3,vars:2,consts:[[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-100","flex","justify-center"],["class","flex items-center justify-center",4,"ngIf"],["class","w-full",4,"ngIf"],[1,"flex","items-center","justify-center"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"w-full"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","my-5"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por nombre, secci\xf3n..",1,"mx-3","px-2","py-3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"px-2","py-3","bg-nile-blue","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[1,"flex","justify-center"],[1,"flex","items-center"],[4,"ngIf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],["class","flex items-center justify-center w-full ",4,"ngIf"],["class","mx-4 flex bg-red-700 text-red text-xl rounded-lg font-bold items-center justify-center py-2 text-center",4,"ngIf"],["class","bg-nile-blue-100 border-b border-nile-blue-200 text-camelot",4,"ngFor","ngForOf"],[1,"bg-nile-blue-100","border-b","border-nile-blue-200","text-camelot"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","items-center","justify-center","flex"],["loading","lazy",3,"src"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","flex","flex-row","items-center","justify-center"],["type","button","title","Editar pregunta",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","text-3xl","text-nile-blue-200","hover:text-camelot-400"],["type","button","title","Eliminar pregunta",1,"px-2",3,"click"],[1,"fa","fa-trash","text-3xl","text-red-500","font-bold","hover:text-nile-blue"],[1,"w-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"routerLink"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"w-[50%]","flex","items-center","justify-between","my-6"],[1,"p-2","text-sm","font-medium","text-camelot","border-2","border-camelot","bg-blue-500","rounded","hover:bg-blue-600",3,"disabled","keydown","click"],[1,"p-2","text-black-400","font-bold"],[1,"p-2","text-sm","font-medium","text-camelot","border-2","border-camelot","bg-blue-500","rounded","hover:bg-blue-600",3,"disabled","keyup","click"],[1,"mx-4","flex","bg-red-700","text-red","text-xl","rounded-lg","font-bold","items-center","justify-center","py-2","text-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,A,10,0,"div",1),e.YNc(2,q,30,9,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading))},dependencies:[u.sg,u.O5,g.rH,s.Fj,s.JJ,s.On,w.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})();function P(n,a){if(1&n&&e._UZ(0,"img",22),2&n){const t=e.oxw();e.Q6J("src",t.imageUrl,e.LSH)}}let L=(()=>{class n{constructor(t,o,i,r,l,c){this.controlError=t,this.notification=o,this.testService=i,this.imageService=r,this.router=l,this.route=c,this.formTestImages=new T,this.srcImage="",this.imageUrl=""}ngOnInit(){this.formTestImages.form.reset()}create(){console.log(this.srcImage),this.testImages={name:this.formTestImages.form.value.name,urlImage:this.srcImage,value:this.formTestImages.form.value.valor,section:this.formTestImages.form.value.section};const t=new FormData;t.append("singleFile",this.imagenTest),t.append("data",JSON.stringify(this.testImages)),this.testService.createPregunta(t).subscribe(o=>{const{message:i}=o;this.notification.showSuccess("\xc9xito","pregunta agregada correctamente"),console.log(i),this.router.navigate(["../listar"],{relativeTo:this.route})},o=>{this.notification.showError("Error",0===o.status?"Error de conexi\xf3n con el servidor, int\xe9ntelo mas tarde":o.error.error)})}onFileSelected(t){const o=t.target.files[0];if(!this.imageService.validateImage(o))return this.formTestImages.form.patchValue({imagen:""}),this.imagenTest=void 0,void(this.imageUrl="");{this.imagenTest=this.imageService.renameImage(o,"TestImagenes"),this.srcImage="/public/TestImagenes/"+this.imagenTest.name.split("_").pop();const i=new FileReader;i.onload=r=>{this.imageUrl=r.target.result},i.readAsDataURL(o)}}cancel(){this.router.navigate(["../listar"],{relativeTo:this.route})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.Q),e.Y36(p.T),e.Y36(h),e.Y36(I),e.Y36(g.F0),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registrar"]],decls:38,vars:3,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-3xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","name","formControlName","name",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","imagen"],[1,"flex","flex-col","col-span-1"],[1,"w-full","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","file","id","imagen","formControlName","imagen","accept","image/*",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout","change"],["alt","Imagen seleccionada","class","w-40 h-40",3,"src",4,"ngIf"],["for","value"],["type","text","id","name","formControlName","valor",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","section"],["type","text","id","name","formControlName","section",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","lg:text-lg","text-nile-blue","bg-cameo","rounded-lg","lg:p-3","p-2","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["alt","Imagen seleccionada",1,"w-40","h-40",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de preguntas del test de estudiante "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.create()}),e.TgZ(4,"fieldset",3)(5,"div",4)(6,"div",5)(7,"label",6),e._uU(8," Ingrese el nombre de la imagen: "),e.qZA()(),e.TgZ(9,"div",7)(10,"input",8),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("name"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("name"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"name"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(11,"div",4)(12,"div",5)(13,"label",9),e._uU(14," Cargar imagen: "),e.qZA()(),e.TgZ(15,"div",10)(16,"div",11)(17,"input",12),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("imagen"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("imagen"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"imagen"))})("mouseout",function(){return o.notification.close()})("change",function(r){return o.onFileSelected(r)}),e.qZA()(),e.TgZ(18,"div",11),e.YNc(19,P,1,1,"img",13),e.qZA()()(),e.TgZ(20,"div",4)(21,"div",5)(22,"label",14),e._uU(23," Ingrese el valor de la imagen: "),e.qZA()(),e.TgZ(24,"div",7)(25,"input",15),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("valor"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("valor"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"valor"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(26,"div",4)(27,"div",5)(28,"label",16),e._uU(29," Ingrese la secci\xf3n ala que pertenece: "),e.qZA()(),e.TgZ(30,"div",7)(31,"input",17),e.NdJ("mouseover",function(){let r;return(null==(r=o.formTestImages.form.get("section"))?null:r.invalid)&&(null==(r=o.formTestImages.form.get("section"))?null:r.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formTestImages.form,"section"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(32,"div",18)(33,"div",19)(34,"button",20),e.NdJ("click",function(){return o.cancel()}),e._uU(35," Cancelar "),e.qZA(),e.TgZ(36,"button",21),e._uU(37," Registrar "),e.qZA()()()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formTestImages.form),e.xp6(16),e.Q6J("ngIf",o.imageUrl),e.xp6(17),e.Q6J("disabled",o.formTestImages.form.invalid))},dependencies:[u.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),n})();var _=m(7574);const F=[{path:"listar",component:J,canActivate:[_.a],data:{requiredRole:"ADMIN"},title:"Test Estudiante"},{path:"registrar",component:L,canActivate:[_.a],data:{requiredRole:"ADMIN"},title:"Test Estudiante"},{path:"editar/:id",component:C,canActivate:[_.a],data:{requiredRole:"ADMIN"},title:"Test Estudiante"}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(F),g.Bz]}),n})();var M=m(4466);let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,R,s.UX,s.u5,M.m]}),n})()}}]);