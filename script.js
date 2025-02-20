document.getElementById('romInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            console.log('ROM cargada:', reader.result);
        };
        reader.readAsArrayBuffer(file);
    }
});
