<template>
    <div class="container mt-5">
        <h1> Homepage </h1>
        <div class="row"> 
            <div class="col-md-12"> 
                <input type="text" v-model="searchText" />
                <div id="container text-center bg-primary" v-for="item in listFilterData" :key="item.id"> 
                    <p> {{ item.name }} </p>
                </div>
            </div>
            <div class="col-md-12 mt-3"> 
                <div class="row"> 
                    <div class="col-md-2"> 
                        <button type="button" class="btn btn-primary btn-sm" @click="getShampoo"> Shampoo </button>
                    </div>
                     <div class="col-md-2"> 
                        <button type="button" class="btn btn-primary btn-sm" @click="getCake"> Cake </button>
                    </div>
                    <div class="col-md-2"> 
                        <button type="button" class="btn btn-primary btn-sm" @click="getLipstick"> Lipstick </button>
                    </div>
                    <div class="col-md-2"> 
                        <button type="button" class="btn btn-primary btn-sm" @click="getListProduct"> List product </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="showListProduct"> 
            <div class="col-md-4" v-for="product in listProduct" :key="product.id"> 
                <div class="card" style="width: 18rem;">
                    <img :src="product.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> {{ product.name }} </h5>
                        <p class="card-text"> {{ product.price }} VND </p>
                       <router-link :to="{name: 'detail-product-route', params: {id: product.id}}">  <a href="#" class="btn btn-primary"> Details </a> </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="!showListProduct"> 
            <div class="col-md-4" v-for="product in filterList" :key="product.id"> 
                <div class="card" style="width: 18rem;"> 
                    <img :src="product.image"  class="card-img-top" alt="..."/>
                    <div class="card-body"> 
                        <h5 class="card-title"> {{ product.name }} </h5>
                        <p class="card-text"> {{ product.price }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import fetchListProduct from "../reusable/fetchListProduct.js"
// import { ref, computed } from "vue"
    export default ({
        data(){
            return {
                filterList: null,
                showListProduct: true,
                searchText: "",
                listProduct: null,
                listFilterData: null
            }
        },
        created(){
            fetch('http://localhost:3000/product')
            .then(response => response.json())
            .then(data => this.listProduct = data)
        },
        watch: {
            searchText(){
                let keywordFind = this.searchText.toLowerCase()
                let filterObjectData = []
                if(this.searchText.length > 0){
                    filterObjectData = this.listProduct.filter(function(obj){
                        if(obj.name.includes(keywordFind)){
                            return obj.name
                        }
                    })
                }
                this.listFilterData = filterObjectData
            }
        },
        methods: {
            getShampoo(){
                this.showListProduct = false
                this.filterList = null
                this.filterList = this.listProduct.filter(function(el){
                    return el.category == "shampoo"
                })
            },
            getCake(){
                this.filterList = null
                this.showListProduct = false
                this.filterList = this.listProduct.filter(function(el){
                    return el.category == "cake"
                })
            },
            getListProduct(){
                this.showListProduct = true
            },
            getLipstick(){
                this.filterList = null
                this.showListProduct = false
                this.filterList = this.listProduct.filter(function(el){
                    return el.category == "lipstick"
                })
            }
        }
        // setup(){
        //     const { listProduct, fetchAll } = fetchListProduct()
        //     fetchAll()
        //     // this.listProduct1 = listProduct
        //     return { listProduct }
        // },
        // computed: {
        //     resultSearchContent(){
        //         return "hello"
        //     }
        // },
    })
</script>
<style scoped lang="css">
    #container {
        width: 30%;
    }
    #container p{
        display: block;
    }
</style>
