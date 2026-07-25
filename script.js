  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

ScrollSmoother.create({
	smooth: 1, 
	effects: true, 
	smoothTouch: 0.1 
});

let luz = document.querySelector(".luz")
let card = document.querySelector(".conteudoEsquerda")
// vamos criar um efeito de luz em nosso container 

window.addEventListener('mousemove',(event)=>{
    const posicaoCard = card.getBoundingClientRect() // para pegar a posição do container que esta a luz 
  const x =  event.clientX - posicaoCard.left // subtraí pela posição do card na esquerda
    const y = event.clientY - posicaoCard.top // o mesmo na direita
    luz.style.opacity = 1
    luz.style.transform = `translate(${x-100}px, ${y-100}px)`// usamos template string para colocar os valores da variavél dentro da string e tbm subtraimos 100px para que o centro da luz fique siga alinhada com o cursor
})



  
  const tl = gsap.timeline({
    scrollTrigger:{
    trigger:"section",
     pin:true, 
    start:"10% 3%",
    scrub: 2,
   
  }
  })



  tl.to("header",{
    opacity:0,
    duration: .3,
  })
  tl.to(".conteudoEsquerda",{
    opacity:0,
    duration: .5,
  })
  tl.to(".conteudoInferior",{
    opacity:0,
    duration: .5,
  },"-=1")

  tl.to(".container",{
    height:"100%",
    duration: 1
  },"-=1")

if(window.innerWidth < 600){
  tl.to("section",{
  maskSize: "60%",
  maskPosition:"center center",
  duration:2,
})
}else{
  tl.to("section",{
  maskSize: "20%",
  maskPosition:"center center",
  duration:2,
  
})
}
 

tl.to(".preta",{
  opacity: 1,
  duration: 2

},"+1") 


tl.to(".preta",{
  backgroundColor:"white",
  duration:2

},"+3")

tl.to("body",{
  backgroundColor:"black",
  duration:1.5,
},"-=2")

