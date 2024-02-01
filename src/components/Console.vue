<template>
    <div id="console_main" class="d-flex flex-column p-2 justify-content-around align-items-center">
        <div class="w-100 p-2">
            <span class="p-0 m-0">Console</span>
            <button class="btn btn-info" v-on:click="clear">clear</button>
        </div>
        <p style="white-space: pre-line;" class=" p-2 m-0 w-100 h-100 overflow-auto text-white bg-dark">{{ message }}</p>
    </div>




</template>



<script setup> 
    import { reactive, computed, watch, ref } from 'vue'
    const message = ref('')


    function toMemHex(hex) {
        return hex.toUpperCase().padStart(2, '0');
    }

    function address(index) {
        return toMemHex(index.toString(16))
    }

    function listID(index) {
        return 'mem_' + toMemHex(index.toString(16))
    }

    function clear() {
        message.value = ''
    }

    function log(data) {
        message.value += ">> " + data + "\n"
    }

    defineExpose({
      log
    })

</script>


<style>
#console_main {
    border-style: dashed;
    border-width: 4px;
    border-color: gray;
}
</style>
