<template>  
    <b-navbar toggleable="md" class="header">
        <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" alt="logo">
            TESTNAME
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <userIcon
                    icon="person-fill"
                    size="2"
                />
                <btn
                    btnValue="Log out"
                />
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

import btn from '../widgets/button/button-ok'
import userIcon from '../widgets/icons/icon'

export default {
    name: 'nav-bar',
    components:{
        btn,
        userIcon
    },
    props:{
        
    }
}
</script>

<style lang="sass">
.header
    background: #2bd261 
</style>