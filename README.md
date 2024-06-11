<p align="center">
  <a  target="blank"><img src="images/Tecnomovil.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center" style="font-family: impact; font-size: 20px">Tienda de celulares "TecnoMovil"</p>

## DESCRIPCIÓN

Fundada en 2018 por Marta López en Sucre, Bolivia, TecnoMóvil comenzó como una pequeña tienda de dispositivos móviles, destacándose por su atención personalizada al cliente. Rápidamente ganó una base de clientes leales, lo que permitió su expansión a un local más grande en 2020 y la inclusión de servicios de reparación. Innovadora en su enfoque, TecnoMóvil ofrece talleres gratuitos sobre tecnología y planes de financiamiento. Actualmente, cuenta con dos sucursales y sigue siendo un referente local en tecnología móvil, con planes de implementar una aplicación web para mejorar el servicio al cliente.

En la tienda se sigue manejando los registros de ventas de forma manual y pasadas a un archivo en excel, donde requiere una forma de tener todos los productos enlistados de forma mas rápida y sin registros duplicados.

Cada vez que se hace una venta de celular u otro articulo, el empleado llena en un cuaderno la compra donde registra el precio, la marca y la salida del producto. Registrando tambien al cliente y que tenga un descuento para alguna venta en el año, luego registra el empleado en una hoja excel la venta correspondiente y actualizando el stock del producto.

Esto es habitual para tener un registro actualizado y que no haya ni una perdida o robo de la tienda, y mantener un control preciso de los productos para ver si hay existencias en la tienda para una nueva venta o descartar el producto de la tienda. 

El trabajo que realiza cada empleado es muy amplioso y requieren un sistema donde puedan llenar de forma mas rapida y actualizada los productos de la tienda de celulares.

## ENTIDADES

```bash
Usuario(id, nombres, paterno, materno, direccion, telefono, correo_electronico)

Empleados(id, fecha_contratacion, rol, cargo, salario, id_usuario)

Clientes(id, nombres, apellidos, telefono, fecha_registro)

Productos (id, nombre, descripcion, marca, precio, stock)

Venta(id, fecha_venta, monto_total, id_empleado, id_cliente)

Detalle_Venta(id, cantidad, precio_unitario, precio_total, id_producto, id_venta)
```
