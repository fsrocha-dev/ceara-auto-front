<template>
    <header class="header">
        <Menu />
        <section class="hero-header form pt-5 pb-3">
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
                <div class="row mx-lg-5 px-lg-4">
                    <div class="col-6 px-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Selecione a marca</option>
                            <option>Fiat</option>
                            <option>Ford</option>
                            <option>Renault</option>
                            <option>Toytoa</option>
                            <option>Wolksvagem</option>
                        </select>
                    </div>
                    <div class="col-6 px-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Escolha o modelo</option>
                        </select>
                    </div>
                </div>
                <div class="row mx-lg-5 px-lg-4 mt-2">
                    <div class="col-3 px-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Preço min.</option>
                            <option>De R$ 5 mil</option>
                            <option>De R$ 15 mil</option>
                            <option>De R$ 25 mil</option>
                            <option>De R$ 35 mil</option>
                            <option>De R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 px-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Preço máx.</option>
                            <option>Até R$ 5 mil</option>
                            <option>Até R$ 15 mil</option>
                            <option>Até R$ 25 mil</option>
                            <option>Até R$ 35 mil</option>
                            <option>Até R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 px-1">
                        <select class="form-control form-control-lg">
                            <option selected disabled>Ano min.</option>
                            <option>De R$ 5 mil</option>
                            <option>De R$ 15 mil</option>
                            <option>De R$ 25 mil</option>
                            <option>De R$ 35 mil</option>
                            <option>De R$ 55 mil</option>
                        </select>
                    </div>
                    <div class="col-3 px-1">
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
                <div class="row mx-lg-5 px-lg-4 mt-2">
                    <div class="col-12 px-1 text-right">
                        <button class="btn btn-lg btn-warning btnSearch--form">
                            Buscar
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-5 text-center">
                        <i class="fa fa-angle-down fa-lg fa-3x text-white animated infinite bounce delay-2s "></i>
                    </div>
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
        /* display: flex;
        justify-content: center;
        align-items: center; */
        background-image: url("https://i.pinimg.com/originals/ed/53/8b/ed538b304be053862bb167cc52738d2b.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #777;
        padding: 0;
    }
    header.header h1 {
        color: #FFF;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    }
    section.hero-header {
        position: relative;
        background-size: cover;
    }
    section.hero-header:before {
        position: absolute;
        content:"";
        height:100%;
        width:100%;
        top:0;
        left:0;
        background: linear-gradient(to top, rgba(36,88,174,0) -20%,rgba(36,88,174,0.95) 100%);
    }
    .hero-header .label--checkbox {
        color: #FFF;
        position: relative;
        cursor: pointer;
        line-height: 15px;
        display: inline-flex;
        padding: 15px;
    }
    .hero-header .checkbox {
        position: relative;
        top: 2px;
        margin: 0 10px 0 -10px !important;
        cursor: pointer;
        z-index: 0;
            line-height: normal;
    }
    .hero-header .checkbox:after {
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
    .hero-header .checkbox:before {
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
    .hero-header .checkbox:checked:before {
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
    .hero-header select {
        font-size: 16px;
    }
    .hero-header .btnSearch--form {
        width: 35%;
        padding: 15px 0;
    }
    @media (max-width: 575.98px) { 
        header.header h1 {
            font-size: 1.4rem;
        }
    }
</style>
