function tab() {
  var url = prompt("Paste the link you want to be embedded into an about:blank page.", "ex. https://example.com"); 
  var urlObj = new window.URL(window.location.href); 
  win = window.open(); 
  win.document.body.style.margin = "0"; 
  win.document.body.style.height = "100vh"; 
  var iframe = win.document.createElement("iframe"); 
  iframe.style.border = "none"; 
  iframe.style.width = "100%"; 
  iframe.style.height = "100%"; 
  iframe.style.margin = "0"; 
  iframe.referrerpolicy = "no-referrer"; 
  iframe.allow = "fullscreen"; 
  iframe.src = url.toString(); 
  win.document.body.appendChild(iframe); 
  var script = win.document.createElement("script"); 
  script.src = "https://3kh0.github.io/js/main.js"; 
  win.document.body.appendChild(script); 
