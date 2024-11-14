        let videotype = "ger";
        const menuButton = document.querySelectorAll('.menuButton');
        const openMenu = document.querySelector('.openMenu');
        const mobileMenu = document.querySelector('.mobileMenu');

        function videoIteration(){
            const video = videoData.map(function(link){
                    if (videotype == link.type){
                        return `
                        <iframe class="yutu"  src="${link.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    `
                    }

                })
                document.querySelector(".videoSection").innerHTML = video.join("");
        }
        videoIteration();

        for(button of menuButton){
            button.addEventListener('click', function(e){
                videotype = e.target.classList[1];
                // console.log(videotype);
                videoIteration();
                mobileMenu.style = 'height: 70px';
                openMenu.innerHTML = "&#9776;";
                openMenu.classList.add("closed");
                for(button of menuButton){
                    button.style = 'border: 2px solid orange; color: orange'
                }
                e.target.style = 'border: 2px solid red; color: red'
            })
        }


        openMenu.addEventListener('click', function(){
            if(openMenu.classList.contains("closed")){
                mobileMenu.style = 'height: 100%';
                openMenu.innerHTML = "&#10006;";
                openMenu.classList.remove("closed");
                
            }
            else{
                mobileMenu.style = 'height: 70px';
                openMenu.innerHTML = "&#9776;";
                openMenu.classList.add("closed");
            }
            
            })