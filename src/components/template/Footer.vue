<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h4>Anunciar</h4>
                    <ul>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Se registrar</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h4>Comprar</h4>
                    <ul>
                        <li><a href="#">Encontre seu carro</a></li>
                        <li><a href="#">Adicionados recentemente</a></li>
                        <li><a href="#">Conssecionárias</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h4>Comunicação</h4>
                    <ul>
                        <li><a href="#">Negócios e oportunidades</a></li>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h4>Siga-nos</h4>
                    <ul>
                        <li class="float-left mr-3">
                            <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="float-left mr-3">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="">
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                    <h4 class="mt-4">Sobre</h4>
                    <ul>
                        <li><a href="">Empresa</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="container">
                <hr style="margin: 0px; border-top-color: rgb(20, 53, 105); opacity: 0.2;" />
                <div class="py-3 size-xsmall">
                     - O parceiro que anuncia nesta página é o único responsável pelas transações comerciais que realizar com usuários do web site da CearáAuto. A comercialização do produto anunciado, bem como a garantia de sua legítima procedência, é de inteira responsabilidade do anunciante, não sendo a CearáAuto responsável por quaisquer danos diretos e/ou indiretos causados a terceiros, advindos da exibição dos anúncios em desacordo com o Código de Defesa do Consumidor e outras legislações aplicáveis ao comércio e/ou prestação de serviços por parte do anunciante. Para oferecer uma melhor experiência de navegação, a CearáAuto utiliza cookies. Ao navegar pelo site você concorda com o uso dos mesmos.
                </div>
                <hr style="margin: 0px; border-top-color: rgb(20, 53, 105); opacity: 0.2;" />
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-12 text-center">
                    <a href="#" class="text-white">
                        <!-- <img src="../../assets/images/example.png" alt="CearáAuto" style="height: 90px;">  -->
                        logo CearáAUTO
                    </a>
                </div>
                <div class="col-12 text-center">
                    <p class="small">
                        Copyright &copy; 2019. Desenvolvido por 
                        <a href="#" style="color: white!important" target="_BLANK">Frank Rocha & Gabriel</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #2458AE;
        color: #FFF;

        display: flex;
        align-items: center;
        justify-content: center;
        /* justify-content: flex-end; */
        padding-right: 10px;
    }
    footer.footer h4 {
        margin-top: 40px;
        margin-bottom: 30px;

        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
    }
    footer.footer ul {
        list-style: none;

        margin: 0;
        padding: 0;
    }
    footer.footer ul li {
        margin-bottom: 10px;
    }
    footer.footer ul li a {
        text-decoration: none;
        color: #FFF;
        opacity: 0.5;
    }
    footer.footer ul li a:hover {
        opacity: 1;
    }
    footer.footer .size-xsmall {
        text-align: justify; 
        font-size: 11px; 
        line-height: 13px;

        opacity: 0.5;
    }
    @media screen and (max-width: 576px) {
        footer {
            text-align: center;
        }    
    }
</style>
