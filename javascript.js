console.log(Vue)

const app=new Vue({
el:'#landing',
data:{
toggle:false,
toggleInscritpion:false,
pass1:"",
pass2:"",
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
   console.log(this.pass1)
   console.log(this.pass2)
    event.preventDefault()

}
}
})

