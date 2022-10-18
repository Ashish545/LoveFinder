
    function love() {

        console.log('button is working')
        let text1 = document.getElementById('text1').value
        let text2 = document.getElementById('text2').value
    
        if (text1 && text2) {
    
            let total = Math.floor(Math.random() * 100);
    
            let str = (text1 + text2).replace(/\s/g, '');
            str = str.toLowerCase();
    
            if (localStorage.getItem(str)) {
                total = localStorage.getItem(str);
            }
            else {
                localStorage.setItem(str, total);
            }
    
            document.getElementById('result').innerHTML = total +'% Love Match'
        }
    
        else {
            alert('Please Enter Valid Names')
        }
    }

