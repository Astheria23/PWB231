<html>
    <head>
        <title>Variabel & Tipe Data</title>
    </head>
    <body>
        <h2>Variabel & Tipe Data</h2>
        <?php
        $var1 = "hallo";
        $var2 = 1;
        $var3 = 3.14;
        echo("\$var1 = $var1 <br>");
        echo("\$var2 = $var2 <br>");
        echo("\$var3 = $var3 <br>");
        echo("Tipe data \$var1 adalah " .gettype($var1)."<br>");
        echo("Tipe data \$var2 adalah " .gettype($var2)."<br>");
        echo("Tipe data \$var3 adalah " .gettype($var3));
        ?>
    </body>
</html>