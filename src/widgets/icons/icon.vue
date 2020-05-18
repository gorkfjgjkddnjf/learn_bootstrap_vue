<template>
    <b-icon :icon="icon" :font-scale="size"></b-icon>
</template>

<script>



export default {
    name: 'icon',
    components:{
    },
    props:{
        icon:{
            type: String,
            default(){
                return ''
            }
        },
        size:{
            type: String,
            default(){
                return '1'
            }
        },
    }
    
}
</script>

<style lang="sass">

</style>