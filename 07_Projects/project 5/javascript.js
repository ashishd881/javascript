const insert = document.getElementById('insert')
//puri window pe event listner add kar do

window.addEventListener('keydown',(e)=>{                //e ke andar bhaut saari values hoti hia
    insert.innerHTML =`<div class='color'>
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <th>${e.key === " "? 'space':e.key}</th>  //space ke liye ye condition lagai gayi hia
            <th>${e.keyCode}</th>       //keycode is outdated 
            <th>${e.code}</th>
        </tr>

        </table>
    
    </div>`
})