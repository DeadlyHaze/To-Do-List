var ulget = document.getElementById('abc')

function addtodo(){
    var li = document.createElement('li')
    var inpget = document.getElementById('inp')
    var text = document.createTextNode(inpget.value)
    li.appendChild(text)
    ulget.appendChild(li)
    inpget.value = ''
    var del = document.createElement('button')
    var delbtn = document.createTextNode('Delete')
    del.appendChild(delbtn)
    li.appendChild(del)
    del.setAttribute('onclick','deleted(this)')
    var edit = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    edit.appendChild(edittext)
    li.appendChild(edit)
    edit.setAttribute('onclick','editvalue(this)')
}
function dall(){
    ulget.innerHTML = ''
}

function deleted(abc){
    abc.parentNode.remove()
}
