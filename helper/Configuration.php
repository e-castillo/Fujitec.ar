<?php
include_once('helper/Router.php');
require_once('helper/MustachePrinter.php');
include_once('controller/HomeController.php');
include_once('controller/ProductsController.php');
include_once('controller/NetworkController.php');
include_once('controller/CorporateController.php');
include_once('controller/ContactController.php');
include_once('controller/ReferencesController.php');

//config del mustache
require_once('third-party/mustache/src/Mustache/Autoloader.php');

class Configuration
{

    public function getHomeController() {
        return new HomeController($this->getPrinter());
    }

    public function getProductsController() {
        return new ProductsController($this->getPrinter());
    }
    
    public function getNetworkController() {
        return new NetworkController($this->getPrinter());
    }

    public function getCorporateController() {
        return new CorporateController($this->getPrinter());
    }

    public function getReferencesController() {
        return new ReferencesController($this->getPrinter());
    }

    public function getContactController() {
        return new ContactController($this->getPrinter());
    }

    private function getPrinter() {
        return new MustachePrinter("view");
    }

    public function getRouter(){
        return new Router($this, "getHomeController", "execute");
    }
}