<template>
    <div class="container mt-4"> 
        <div class="row justify-content-md-center"> 
            <div class="col-md-6"> 
                <h1> Contact page </h1>
                <p> Phone number: 0123456 </p>
                <p> Email Adress: itemshop@gmail.com </p>
                <p> Adress: Can Tho city </p>
                <g-map> </g-map>
            </div>
        </div>
    </div>
</template>
<script>
import GMap from "../components/GMap.vue"
export default {
    components: {
        GMap
    }
}
</script>