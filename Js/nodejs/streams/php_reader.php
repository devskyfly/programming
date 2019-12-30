<?php
$writePath = "./wbig.file";
$writeHandler = fopen($writePath, "w");

$readPath = "./big.file";
$readHandler = fopen($readPath, "r");

try {
    do {
        echo ftell($readHandler)."\n";
        $result = fgets($readHandler);
        stream_filter_append($readHandler, 'string.toupper');
        fputs($writeHandler, $result);
    } while ($result);
} finally {
    fclose($readHandler);
    fclose($writeHandler);
}


