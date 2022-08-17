<?php

class NetworkController{

    private $printer;

    public function __construct($printer) {
        $this->printer = $printer;
    }

    public function execute(){
        $this->printer->generateView('networkView.html');
    }
}