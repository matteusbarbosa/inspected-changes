//document.documentElement.innerHTML


function saveInspectChanges(){
    let a = document.createElement('a');
    a.href = "data:application/octet-stream,"+encodeURIComponent(document.documentElement.innerHTML);
    a.download = 'inspect-save.txt';
    a.click();
}


