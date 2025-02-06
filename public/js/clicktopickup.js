AFRAME.registerComponent('click-to-pickup', {
    init: function () {
        const el = this.el;
       
        el.addEventListener('click', function () {
            let isHeld = el.getAttribute('isHeld');
            const camera = document.querySelector('[camera]');
            let playerHolding = camera.getAttribute('isHolding');    
            let enviro = document.querySelector("#environment");
            let scene = document.getElementById("scene");

            if (isHeld == "false" && playerHolding === "null") {
        
                
                el.object3D.parent = camera.object3D;
                el.setAttribute('position', '0.5 -.5 -.5');
                el.setAttribute('rotation', '0 0 0');

                el.removeAttribute('animation');     
                el.removeAttribute('animation__bob');

                el.setAttribute('isHeld', 'true');
                camera.setAttribute("isHolding", el.getAttribute('id'));
                let model = document.createElement('a-entity');
                model.setAttribute('gltf-model', el.getAttribute('statueModel'));
                model.setAttribute('position', el.getAttribute('statuePos') );  // Fallback position
                model.setAttribute('scale', el.getAttribute('statueScale')); 
                model.setAttribute("id", 'tempItem');
                let playerHolding = camera.getAttribute('isHolding')
                enviro.setAttribute('environment', el.getAttribute('environemntProp'));
                document.querySelector('a-scene').appendChild(model);
            }
        });
    }
});