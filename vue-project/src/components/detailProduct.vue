<template>
    <div class="container">
        <div class="row"> 
            <div class="col-md-12"> 
                <div class="card text-center">
                    <div class="card-header">
                        Detail Product
                    </div>
                    <div class="card-body" v-if="product!=null">
                        <img :src="product.image" class="card-img-top w-50" alt="...">
                        <h5 class="card-title"> {{ product.name }} </h5>
                        <p class="card-text"> Price: {{ product.price }} VND </p>
                        <p class="card-text"> Category: {{ product.category }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default ({
        data(){
            return {
                product: null
            }
        },
        created(){
            fetch("http://localhost:3000/product/" + this.$route.params.id)
            .then(response => response.json())
            .then(data => this.product = data)
        }
    })
</script>
