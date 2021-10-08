
console.log(Vue)
const app=new Vue({
el:'#landing',
data:{
toggle:false,
toggleInscritpion:false,
pass1:"",
pass2:"",
entreprise:"",
ville:"",
siret:"",
url:"http://localhost:3000/entreprise/inscription",
},
methods:{
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
        console.log(res)
        if(res.code==500){
        console.log('erreur')
        }
        if(this.pass1!==this.pass2){
            console.log('problême concordance du mot de passe')
        }

    })
    .catch(err=>{
        console.log(err)
    })
}
}
})
