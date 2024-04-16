console.log("Script running...")
document.querySelector('.cross').computedStyleMap.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamburger').computedStyleMap.display = 'inline'
        document.querySelector('.cross').computedStyleMap.display = 'none'
    }
    else{
        document.querySelector('.hamburger').computedStyleMap.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').computedStyleMap.display = 'inline'
        },400);
    }
})