<template>
    <b-button :block="block" :id="id" :class="btn_class" :variant="variant">{{btnValue}}</b-button>
</template>

<script>

export default {
    name: 'login',
    props:{
        btnValue:{
            type: String,
            default(){
                return 'button'
            }
        },
        variant:{
            type: String,
            default(){
                return 'primary'
            }
        },
        btn_class:{
            type: String,
            default(){
                return null
            }
        },
        id:{
            type: String,
            default(){
                return null
            }
        },
        block:{
            type: Boolean,
            default(){
                return false
            }
        },

    }
}
</script>

<style lang="sass">

</style>