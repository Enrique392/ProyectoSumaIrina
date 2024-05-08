<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Juego de la Suma</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,200" />
    <link rel="stylesheet" href="css/resonsive.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</head>

<body>
<jsp:include page="header.jsp"></jsp:include>

<section>
    <div class="col-12 texto-centrado margen-top-100">
        <label for="sumar" class="radio-label">
            <input type="radio" name="operacion" value="sumar" id="sumar" class="radio">
            <img src="view/imagenes/sumar.png" alt="Suma" class="col-img-4">
        </label>

        <label for="restar" class="radio-label">
            <input type="radio" name="operacion" value="restar" id="restar" class="radio">
            <img src="view/imagenes/restar.png" alt="Resta" class="col-img-4">
        </label>
    </div>

    <div class="texto-centrado col-12">
        <label for="multiplicar" class="radio-label">
            <input type="radio" name="operacion" value="multiplicar" id="multiplicar" class="radio">
            <img src="view/imagenes/multiplicar.png" alt="Multiplicacion" class="col-img-4">
        </label>

        <label for="dividir" class="radio-label">
            <input type="radio" name="operacion" value="dividir" id="dividir" class="radio">
            <img src="view/imagenes/dividir.png" alt="Division" class="col-img-4">
        </label>

    </div>
</section>



<jsp:include page="footer.jsp"></jsp:include>

</body>
</html>

