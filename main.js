const apiLink = "https://meme-api.com/gimme";

document.addEventListener('alpine:init', ()=>{
    Alpine.data('app', ()=>({
        meme:[],
        title:'Loading...',
        async getMeme(){
            let req = await fetch(apiLink)
            let res = await req.json()
            this.meme = res
            this.title = res.title
        },
        async init(){
            await this.getMeme()
            console.log(this.meme)
        }
    }))
})