function toggleDarkmode(){
    const chk = document.getElementById('chk')
    
    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark')
    })
    }
    
    
    function select1(){
    let a = document.getElementById('a1')
    
    a.innerHTML = `<a href="cardapio.html" style="color: rgb(200, 134, 42);">|Cardápio|</a>`
    }
    
    function select1out(){
        let a = document.getElementById('a1')
        
        a.innerHTML = `<a href="cardapio.html" style="color: white;">|Cardápio|</a>`
        }
    
    
    
    function select2(){
        let a = document.getElementById('a2')
        
        a.innerHTML = `<a href="feedback.html" style="color: rgb(200, 134, 42);">|Feedback|</a>`
        }
    
        function select2out(){
            let a = document.getElementById('a2')
            
            a.innerHTML = `<a href="feedback.html" style="color: white;">|Feedback|</a>`
            }