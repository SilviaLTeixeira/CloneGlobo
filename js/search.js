var tl_search = new TimelineMax({
    paused:true,
    delay:-1
})
tl_search.staggerFromTo(
    ".globo-search",
    .7,
    {opacity:0, display:"none"},
    {opacity:1, display:"block"},
    0.1
    
)
$("body").on("click","open-search",function(){
    tl_search.play(0)
})
$("body").on("click","close-search",function(){
    tl_search.reverse(-0.5)
})