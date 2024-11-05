document.getElementById("proyectoetapa").addEventListener("change", function() {
     const etapaSeleccionada = this.value;
     const textoDelProyecto = document.getElementById("customText").value;

     console.log("Etapa seleccionada:", etapaSeleccionada);

     console.log("Texto del proyecto:", textoDelProyecto);
     let textoVariable = textoDelProyecto;


    });