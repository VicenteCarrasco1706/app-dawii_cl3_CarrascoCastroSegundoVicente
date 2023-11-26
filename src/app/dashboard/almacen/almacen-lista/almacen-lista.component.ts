import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen-lista',
  templateUrl: './almacen-lista.component.html',
  styleUrl: './almacen-lista.component.css'
})
export class ObreroDetalleComponent {
  precioUnitario: number = 0;
  cantidad: number = 0;
  resultado: number = 0;

  calcularPrecio(): void {
    // Obtener los valores ingresados por el usuario
    const precioUnitario = parseFloat(this.precioUnitario.toString());
    const cantidad = parseInt(this.cantidad.toString(), 10);

    // Calcular el precio total
    let precioTotal = precioUnitario * cantidad;

    // Aplicar descuentos según la cantidad comprada
    if (cantidad > 20) {
      // Descuento del 10% para más de 20 artículos
      precioTotal *= 0.9;
    } else if (cantidad > 10) {
      // Descuento del 5% para más de 10 artículos
      precioTotal *= 0.95;
    }

    // Asignar el resultado para mostrar en la vista
    this.resultado = precioTotal;
  }
}