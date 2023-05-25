let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './themes/light.css';
    document.getElementById('r').innerHTML = 'a sweet heading';
    document.getElementById('d').innerHTML = 'light theme is there';
    // document.body.style.background = "grey";
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/sky.css';
    document.getElementById('r').innerHTML = 'heavy rain';
    document.getElementById('d').innerHTML = 'please bring umbrella with you !!!!!!!! <br> be safe !!!';
    // document.body.style.background = "undefined";

  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './themes/purple.css';
    document.getElementById('r').innerHTML = 'Prussian Blue mode';
    document.getElementById('d').innerHTML = 'purple theme is there';
    // document.body.style.background = "purple";
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark.css';
    document.getElementById('r').innerHTML = 'dark mode';
    document.getElementById('d').innerHTML = 'dark theme is there';
    // document.body.style.background = "  #696969";
  } 
 
 
  localStorage.setItem('style', theme);
}




