<template>
    <b-container>
        <b-form-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6" xl="4" class="wrapper">
                <b-form class="my-3">
                    <inputLogin
                        label="Login"
                        placeholder="Enter Login"
                        id="login"
                        labelFor="login"
                    />                
                    <inputLogin
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        id="pass"
                        labelFor="pass"
                    />
                    <b-row class="justify-content-center">
                        <b-col cols="12" sm="6" xl="4" class="mt-3">
                            <btn
                                :block="true"
                                btnValue="Login"
                            />
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
        </b-form-row>
    </b-container>
</template>

<script>

import inputLogin from '../widgets/input/input-login'
import btn from '../widgets/button/button-ok'

export default {
    name: 'login',
    data(){
        return{

        }
    },
    components:{
        inputLogin,
        btn
    }
}
</script>

<style lang="sass">

.wrapper
    background: #ffffff
    border-radius: .5rem  
</style>