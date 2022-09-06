<?php

class ContactController{

    private $printer;

    public function __construct($printer) {
        $this->printer = $printer;
    }

    public function execute(){
        $this->printer->generateView('contactView.html');
    }
}