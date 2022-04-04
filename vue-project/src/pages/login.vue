<template>
    <h1> Login page  </h1>
    <div class="container">
        <div class="col border border-danger"> 
            <form @submit.prevent="submitLogin">
                 <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username">                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    <router-view> </router-view>
</template>
<script>
    export default {
        data(){
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            submitLogin(){
                if(this.username == "thao" && this.password == "123@"){
                    this.$router.push({name: 'home-route'})
                }
            }
        }
    }
</script>
