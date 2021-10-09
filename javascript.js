
console.log(Vue)
const app=new Vue({
el:'#landing',
data:{
toggle:false,
toggleInscritpion:false,
toggleConnexion:false,
pass1:"",
pass2:"",
entreprise:"",
ville:"",
siret:"",
url:"http://localhost:3000/entreprise/inscription",
entrepriseCo:'',
pass1Co:'',
urlCo:"http://localhost:3000/entreprise/connexion"
},
methods:{
    changeToggleCo(){
this.toggleConnexion=!this.toggleConnexion
return this.toggleConnexion
    },
changeToggle(){
    this.toggle=!this.toggle
    console.log(this.toggle)
    return this.toggle
},
changeToggleInscription(){
    this.toggleInscritpion=!this.toggleInscritpion
    console.log(this.toggleInscritpion)
    return this.toggleInscritpion
},
preventDefault(event){
    event.preventDefault()

   console.log(this.pass1)
   console.log(this.pass2)
   console.log(this.entreprise)
   console.log(this.ville)
   console.log(this.siret)
   
   let mesValeursCo={
    entrepriseName:this.entreprise,
    cities:this.ville,
    SIRET:this.siret,
    password:this.pass1,
   }

   fetch(this.url,{method:'POST',headers:{"Content-Type": "application/json; charset=UTF-8",},body:JSON.stringify(mesValeursCo)})
    .then(res=>res.json())
    .then(res=>{
        let blocInscription=document.querySelector('.inscription')
        console.log(res)
        if(res.code==500){
        console.log('erreur')
        let blocErreurInscription=document.createElement('p')
        blocErreurInscription.innerHTML='erreur d\'inscription'
        blocErreurInscription.classList='blocErreurPass'
       blocInscription.appendChild(blocErreurInscription)
        }
        if(this.pass1!==this.pass2){
       let blocErreurPass=document.createElement('p')
       blocErreurPass.innerHTML='erreur dans la concordance des mots de passe'
       blocErreurPass.classList='blocErreurPass'
       blocInscription.appendChild(blocErreurPass)
    }
    if(res.code!==500){
       console.log('inscriptiion ok')
       blocInscription.style.display="none"
       this.toggleInscritpion=!this.toggleInscritpion
    }
    })
    .catch(err=>{
        console.log(err)
    })
},
preventDefaultCo(event){
    event.preventDefault()
    let mesValeursConnexion={
entrepriseName:this.entrepriseCo,
password:this.pass1Co,
    }
fetch(this.urlCo,{method:'post',headers:{"Content-Type": "application/json; charset=UTF-8"},body:JSON.stringify(mesValeursConnexion)})
.then(res=>res.json())
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
}
}
})
