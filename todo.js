function enterTask(id){
    if(id==='submit'){
//   document.getElementById('list-item').innerHTML=document.getElementById('textEnter').value;
    var creatediv=document.createElement('div');
    creatediv.classList.add('list-item');
    creatediv.setAttribute('id',innerHTML=document.getElementById('textEnter').value);
    creatediv.appendChild(document.createTextNode(document.getElementById('textEnter').value))
    document.getElementById('list').appendChild(creatediv);



    var button1=document.createElement('button');
    button1.style.height='40px';
    button1.style.width='70px';
    button1.appendChild(document.createTextNode('Edit'));
    button1.classList.add('btn','btn-success')
    button1.setAttribute('id', 'edt-'+document.getElementById('textEnter').value)
    button1.addEventListener('click',($event)=>{
    console.log($event.target.id);
    var oldVal=$event.target.id;
    document.getElementById('textEnter').value=$event.target.id.substring(4);
    document.getElementById('submit').innerHTML="Edit";
        document.getElementById('submit').setAttribute('id','btn-'+document.getElementById('textEnter').value)

    })
    document.getElementById('list').appendChild(button1);

    var button2=document.createElement('button');
    button2.style.height='40px';
    button2.style.width='70px';
    button2.style.marginLeft='10px';
    button2.appendChild(document.createTextNode('delete'));
    button2.setAttribute('id', 'del-'+document.getElementById('textEnter').value)
    button2.classList.add('btn','btn-danger')
    button2.addEventListener('click',($event)=>{
        console.log($event.target.id)
        var delItem=$event.target.id.substring(4);
        document.getElementById(delItem).remove()
        document.getElementById('edt-'+delItem).remove()
        document.getElementById('del-'+delItem).remove()

    })
    document.getElementById('list').appendChild(button2);
    document.getElementById('textEnter').value="";
}


    else{
        console.log(document.getElementById(id.substring(4)).innerHTML);
       document.getElementById(id.substring(4)).innerHTML=document.getElementById('textEnter').value;
        document.getElementById(id.substring(4)).setAttribute('id',document.getElementById('textEnter').value)
        document.getElementById('edt-'+id.substring(4)).setAttribute('id','edt-'+document.getElementById('textEnter').value)
        document.getElementById('del-'+id.substring(4)).setAttribute('id','del-'+document.getElementById('textEnter').value)
        document.getElementById(id).setAttribute('id','submit');
        document.getElementById('textEnter').value="";
        document.getElementById('submit').innerHTML='Enter Task';



    }

}