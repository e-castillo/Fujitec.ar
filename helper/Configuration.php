<?php
include_once('helper/Router.php');
require_once('helper/MustachePrinter.php');
include_once('controller/HomeController.php');
include_once('controller/ProductsController.php');

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

    private function getPrinter() {
        return new MustachePrinter("view");
    }

    public function getRouter(){
        return new Router($this, "getHomeController", "execute");
    }
}