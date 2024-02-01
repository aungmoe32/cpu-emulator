<template>
    <div id="memory_main" class="p-2 d-flex flex-column justify-content-around align-items-center">



        <div class="w-100 p-2 d-flex justify-content-center">
            <span class="p-0 m-0">Main Memory</span>
        </div>

        <div class=" p-0 w-100 h-100 overflow-auto" id="memory_scroll">
            <ul class="list-group list-group-flush">

                <li v-for="(value, index) in mem.memory"
                    class="list-group-item bg-transparent d-flex justify-content-around" :id="listID(index)">
                    <span class="mem_address">{{ address(index) }}</span>
                    <span class="mem_address_value">{{ value }}</span>
                </li>
            </ul>

        </div>



    </div>
</template>


<script setup> 
    import { reactive, computed, watch } from 'vue'

    import $ from "jquery"


    const props = defineProps(['mem', 'goto'])

    watch(() => props.goto, (first, second) => {
        var id = '#mem_' + toMemHex(props.goto)
        let ele = $('#memory_scroll ' + id)
        // console.log(ele[0])
        let offset = $('#memory_scroll')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top

        offset = ele[0].offsetTop - offset

        $('#memory_scroll').animate({
            scrollTop: offset
        }, 500);
    });



    function toMemHex(hex) {
            return hex.toUpperCase().padStart(2, '0');
    }

    function address(index) {
        return toMemHex(index.toString(16))
    }

    function listID(index) {
        return 'mem_' + toMemHex(index.toString(16))
    }
     
</script>

<style>
#memory_main {
    border-style: dashed;
    border-width: 4px;
    border-color: gray;
}
</style>
