/*
Timothy Washington
washington_a01b.js
INFO 2124 - Javascript I
Thoendel
Creation date: Mar 14, 2020
*/
window.addEventListener('load', function() {
    /* Write your solution between this comment */
    for(var l=1;l<101;l++){
    var a = document.createElement('option');//make option
    a.appendChild(document.createTextNode(l));//name option
    document.getElementById('age').appendChild(a);//add
    }

    this.document.getElementById('my-form').addEventListener('submit',function(e){
        var err=['','',''];//error var
        //check
        if(document.getElementById('last-name').value=='')err[0]='Missing last name. ';
        if(document.getElementById('first-name').value=='')err[1]='Missing first name. ';
        if(document.getElementById('age').value=='')err[2]='Missing age. ';
        if((err[0]+err[1]+err[2]).length>0){//error?
            e.preventDefault();
            var p=document.createElement('p');//make ele
            var h=appendChild=document.createTextNode(err[0]+err[1]+err[2]);//add errror
            document.getElementById('error-holder').className='error-box';
            document.getElementById('error-holder').innerText='';//clear err
            document.getElementById('error-holder').appendChild(h);//add err
        }
    })   
    /* and this comment */
});
