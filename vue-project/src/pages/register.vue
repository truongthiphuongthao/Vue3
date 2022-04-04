<template>
    <div class="container mt-5">
        <div class="row justify-content-md-center"> 
            <div class="col-md-4">
                <h1> Register </h1>
            </div>
        </div>
        <div class="row justify-content-md-center"> 
            <div class="col-md-4 border border-primary"> 
                <form @submit.prevent="submitRegister">
                    <div class="mb-3">
                        <label for="username" class="form-label"> Enter username </label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="username"> 
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label"> Enter password </label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <div class="mb-3">
                        <label for="repassword" class="form-label"> Enter repassword </label>
                        <input type="password" class="form-control" id="repassword" v-model="repassword">
                    </div>
                    <div class="mb-3"> 
                        <label for="gender" class="form-label"> Gender </label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="maleRadio" value="Male" v-model="genderValue">
                            <label class="form-check-label" for="maleRadio">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="femaleRadio" value="female" v-model="genderValue">
                            <label class="form-check-label" for="femaleRadio">
                                Female
                            </label>
                        </div>
                    </div>
                    <div class="mb-3"> 
                        <button type="submit" class="btn btn-primary"> Register </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            genderValue: null,
            username: null,
            password: null,
            repassword: null,
        }
    },
    methods: {
        checkConditionForRegister(){
            if(this.username != null && this.password != null && this.repassword != null && this.genderValue != null){
                if(this.password == this.repassword){
                    return true
                }
            }
            return false
        },
        submitRegister(){
            if(this.checkConditionForRegister()){
                this.$router.push({name: 'login-route'})
            }            
        }
    }
}
</script>