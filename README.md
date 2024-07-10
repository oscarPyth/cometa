# Cometa Drinks Project

Este repositorio es el resultado de un challenge proporcionado por Cometa Inc. Consiste en crear una interfaz que permita interactuar con un bar. La aplicación muestra el stock de cervezas y las órdenes que se han pedido. Además, el front-end permite ver cada orden y visualizar cómo se vería la factura. Es una demo, por lo cual no toda la funcionalidad de una aplicación de bar estará disponible.

## Índice

- [Front-end](./front/README.md)
- [Back-end](./back/README.md)

## Ejecución del Proyecto

Para ejecutar el proyecto normalmente, utiliza el siguiente comando:

```sh
docker-compose up --build
```

## Ejecución de Tests

### Tests del Front-end

Para ejecutar los tests del front-end, utiliza el siguiente comando:

```sh
docker-compose -f docker-compose.test.yml up --abort-on-container-exit --remove-orphans frontend-tests
```

### Tests del Back-end

Para ejecutar los tests del back-end, utiliza el siguiente comando:

```sh
docker-compose -f docker-compose.test.yml up --abort-on-container-exit --remove-orphans backend-tests
```

---

Para más detalles, consulta los README dentro de las carpetas correspondientes:

- [Front-end](./front/README.md)
- [Back-end](./back/README.md)
```

¿Te gustaría que ahora prepare los README para las carpetas `front` y `back`?"
