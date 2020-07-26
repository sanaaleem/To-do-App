var list = document.getElementById("list")
function addTask() { ///////////////// value add in li
    var task = document.getElementById("task")


    var li = document.createElement('li')
    var addTaskli = document.createTextNode(task.value)
    li.appendChild(addTaskli)

   

    //////////////////// creating delete button beside li
    var del_btn = document.createElement("button")
    var delText = document.createTextNode("delete task")
    del_btn.setAttribute("class", "del-btn")
    del_btn.setAttribute("onclick", "delete_task(this)")
    del_btn.appendChild(delText)
  
   
   
    ///////////edit task button
    var edit_btn = document.createElement("button")
    var editText = document.createTextNode("Edit task")
    edit_btn.appendChild(editText)
   ///////////////////// attribute in edit button
edit_btn.setAttribute("class", "edit-btn")
edit_btn.setAttribute("onclick", "editText(this)")

    li.appendChild(del_btn)
    list.appendChild(li)
    task.value = " "
    li.appendChild(edit_btn)
}
function delete_task(e) {
    // console.log(e)
    // console.log(e.parentNode)
    // console.log(e.parentNode.parentNode)
     e.parentNode.remove()
}
function deleteAll() {
    list.innerHTML = ""
}
function editText(e) {
    var val=e.parentNode.firstChild.nodeValue
   var editValue=prompt("Edit you task here",val)
   e.parentNode.firstChild.nodeValue=editValue

}