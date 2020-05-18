<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-input :id="id" :type="type" required :placeholder="placeholder"></b-form-input>
    </b-form-group>
</template>

<script>

export default {
    name: 'login',
    props:{
        label:{
            type: String,
            default(){
                return 'label'
            }
        },
        id:{
            type: String,
            default(){
                return 'input'
            }
        },
        labelFor:{
            type: String,
            default(){
                return 'input'
            }
        },
        placeholder:{
            type: String,
            default(){
                return ''
            }
        },
        type:{
            type: String,
            default(){
                return 'text'
            }
        },
    }
}
</script>

<style lang="sass">

</style>