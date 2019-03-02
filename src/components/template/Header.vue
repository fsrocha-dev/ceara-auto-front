<template>
    <header class="header">
        <Menu />
        <section class="hero form py-5">
            <div class="container">
                <div class="row pb-3">
                    <div class="col-12 text-center">
                        <h1>ANUNCIE SEU CARRO HOJE MESMO!</h1>
                    </div>
                </div>
                <div class="row px-lg-5">
                    <div class="col-12 px-lg-5">
                        <label for="checkboxNew" class="label--checkbox">
                            <input class="checkbox" id="checkboxNew" type="checkbox" value="1" checked>
                            <span>0km</span>
                        </label>
                        <label for="checkboxOld" class="label--checkbox">
                            <input class="checkbox" id="checkboxOld" type="checkbox" value="2" checked>
                            <span>Usados</span>
                        </label>
                        <label for="checkboxFinance" class="label--checkbox">
                            <input class="checkbox" id="checkboxFinance" type="checkbox" value="3" checked>
                            <span>Carros com financiamento em aberto</span>
                        </label>
                    </div>
                </div>
                <div class="row px-lg-5">
                    <div class="col-6 pl-lg-5 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Selecione a marca</option>
                            <option>Fiat</option>
                            <option>Ford</option>
                            <option>Renault</option>
                            <option>Toytoa</option>
                            <option>Wolksvagem</option>
                        </select>
                    </div>
                    <div class="col-6 pr-lg-5 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Escolha o modelo</option>
                        </select>
                    </div>
                </div>
                <div class="row px-lg-5 mt-2">
                    <div class="col-3 pl-lg-5 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Preço min.</option>
                            <option>De R$ 5 mil</option>
                            <option>De R$ 15 mil</option>
                            <option>De R$ 25 mil</option>
                            <option>De R$ 35 mil</option>
                            <option>De R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Preço máx.</option>
                            <option>Até R$ 5 mil</option>
                            <option>Até R$ 15 mil</option>
                            <option>Até R$ 25 mil</option>
                            <option>Até R$ 35 mil</option>
                            <option>Até R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Ano min.</option>
                            <option>De R$ 5 mil</option>
                            <option>De R$ 15 mil</option>
                            <option>De R$ 25 mil</option>
                            <option>De R$ 35 mil</option>
                            <option>De R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 pr-lg-5 px-lg-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Ano máx.</option>
                            <option>Até R$ 5 mil</option>
                            <option>Até R$ 15 mil</option>
                            <option>Até R$ 25 mil</option>
                            <option>Até R$ 35 mil</option>
                            <option>Até R$ 55 mil</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-2 px-lg-5">
                    <div class="col-12 text-right pr-lg-5">
                        <button class="btn btn-lg btn-warning btnSearch--form px-5">
                            Buscar
                        </button>
                    </div>
                </div>
                <div class="row">

                </div>
            </div>
        </section>
    </header>
</template>

<script>
import Menu from "@/components/template/Menu"

export default {
    name: 'Header',
    components: { Menu }
}
</script>

<style>
    .header {
        grid-area: header;
        background-color: #efefef;

        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    header.header h1 {
        color: #333;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    }
    .hero {
        background-size: cover;
    }
    .hero .label--checkbox {
        position: relative;
        cursor: pointer;
        line-height: 15px;
        display: inline-flex;
        padding: 15px;
    }
    .hero .checkbox {
        position: relative;
        top: 2px;
        margin: 0 10px 0 -10px !important;
        cursor: pointer;
        z-index: 0;
            line-height: normal;
    }
    .hero .checkbox:after {
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        width: 18px;
        height: 18px;
        cursor: pointer;
        background-color: #2262CC;
        border-radius: 2px;
    }
    .hero .checkbox:before {
        transition: all .2s ease-in-out;
        content: "";
        position: absolute;
        left: -3px;
        top: -3px;
        z-index: 1;
        width: 19px;
        height: 19px;
        border: 2px solid #757575;
        border-radius: 3px;
        background-color: #fff;
    }
    .hero .checkbox:checked:before {
        transform: rotate(-45deg);
        height: 5px;
        width: 10px;
        left: 0px;
        top: 1px;
        background-color: transparent;
        border-color: #fff;
        border-top-style: none;
        border-right-style: none;
        border-width: 2px;
        border-radius: 0;
    }
    .hero select {
        font-size: 16px;
    }
    .hero .btnSearch--form {
        width: 250px;
        padding: 15px 0;
    }
</style>
