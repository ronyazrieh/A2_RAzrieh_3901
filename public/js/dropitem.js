AFRAME.registerComponent('drop-item', {
    init: function () {
        const camera = document.querySelector('[camera]');
        let scene = document.getElementById("scene");
        const el = this.el; 
        let item = document.getElementById(el.getAttribute('itemid'));
        let enviro = document.querySelector("#environment");
        el.addEventListener('click', function () {
            item.object3D.parent = scene.object3D;
            item.setAttribute('position', el.getAttribute('itemposition'));
            item.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 8000; easing: linear;');
            item.setAttribute('animation__bob',el.getAttribute('itemanimation') );
            camera.setAttribute("isHolding", 'null');
            item.setAttribute('isHeld', 'false');
            enviro.setAttribute('environment', 'preset: checkerboard; seed: 123; skyType: gradient; skyColor: #0f0c14; horizonColor: #000000; lighting: none; dressing: none;');
            let statue = document.querySelector("#tempItem");
            statue.remove();
        });
    }
});