document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector(".form-group");
    const textarea = document.getElementById("description");

            function setLoading(isLoading) {
                const buttonSpan = document.querySelector(".btn-magic span");

                if(isLoading) {
                    buttonSpan.innerHTML = "Gerando Background..."
                } else {
                    buttonSpan.innerHTML = "Gerar Background Mágico"
                }
            }


     form.addEventListener("submit", async function(event) {
        event.preventDefault();
    
        const description = (textarea.value.trim());

        if(!description) {
            return;
        }

         setLoading(true);

         try {
             const response = await fetch("https://yurhi.app.n8n.cloud/webhook-test/5103f725-e9ae-4b4f-9c30-a450bce30be7", {
             method: "POST",
             headers: {'Content-Type': "application/json" },
                body: JSON.stringify({description})
                    
                });

                const data = await response.json();

                console.log(data);

         } catch (error) {
            console.log(error);

         } finally {
           
         }

         }
        
     })

});