console.log(Vue)

const app=new Vue({

el:'#landing',
data:{
toggle:false
},
methods:{
changeToggle(){
    this.toggle=!this.toggle
    console.log(this.toggle)
    return this.toggle
}
}
})

