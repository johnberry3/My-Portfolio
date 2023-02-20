let themeDot = document.getElementsByClassName('Theme-dot');

let theme= localStorage.getItem('theme');

if(theme==null){
    setTheme('light')
}else{
    setTheme(theme);
}

for(var i=0; i< themeDot.length; i++){
    themeDot[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/style.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'css/blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'css/green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'css/purple.css'
    }
    localStorage.setItem('theme', mode)
}