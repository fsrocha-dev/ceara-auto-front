<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-3">
        <div class="container">
            <a href="#" class="navbar-brand mr-5">CearáAuto</a>
            <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo02" 
                aria-controls="navbarTogglerDemo02" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Comprar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Vender</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Anúncio</a>
                    </li>
                </ul>
                <div class="my-2 my-lg-0">
                    <img src="../../assets/images/topBanner.jpg" alt="CearáAuto" width="480">
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
    nav.navbar {
        background-color: #2458AE;
        border-top: 5px solid #2262CC;
    }
    @media (max-width: 575.98px) { 
        nav.navbar img {
            max-width: 100%;
        }
    }
</style>
