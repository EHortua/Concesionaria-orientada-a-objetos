/* requerir módulo autos */
let autos = require('./autos/index');

let concesionaria = {
    
   autos: autos,
 buscarAuto: function(laPatente){
      let autoEncontrado = null;
      for(let i=0; i<this.autos.length; i++){
         if(laPatente == this.autos[i].patente){
           autoEncontrado = this.autos[i];
           break;
         }
      }
         return autoEncontrado;
   },
   venderAuto: function(laPatente){
      this.buscarAuto(laPatente).vendido = true;
   },
   autosParaLaVenta: function(){
   let autosForSale = this.autos.filter(autos => autos.vendido == false);
   return autosForSale;
   },
   autosNuevos: function(){
      let autosNew = this.autosParaLaVenta();
      return autosNew.filter(autos => autos.km < 100);
    },
    listaDeVentas: function ()  {
        let autosVendidos = this.autos.filter(unAuto => unAuto.vendido === true);
        return autosVendidos.map(unAuto => unAuto.precio);
     },
    totalDeVentas: function(){
      let total = this.listaDeVentas();
      let sumatoria = total.reduce((a,b) => a+b, 0)
      return sumatoria;
    },
    puedeComprar: function(auto, persona ){
   let costoTotal = persona.capacidadDePagoTotal >= auto.precio;
   let capacidadPagoCuotas = persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas);
return costoTotal && capacidadPagoCuotas;
    },
   autosQuePuedeComprar: function (persona) {
    let autosEnVenta = this.autosParaLaVenta();
    let puedeComprar = [];
    for (let i = 0; i < autosEnVenta.length; i++) {
      let resultado = this.puedeComprar(autosEnVenta[i], persona);
      if (resultado) {
        puedeComprar.push(autosEnVenta[i]);
      }
    }
    return puedeComprar;
  },
};

console.log('Hola, usa cualquiera de las funciones de la concesionaria');