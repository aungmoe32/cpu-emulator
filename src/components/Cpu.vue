<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100 p-2" id="cpumain">


        <span class="p-1 m-0">CPU</span>

        <div class="row w-100 h-100 m-0 p-0" style="min-height: 0;">
            <div class="col-6 p-0 h-100 overflow-auto">
                <ul class="list-group list-group-flush">

                    <li v-for="(value, index) in cpu.register_unit.registers" class="list-group-item bg-transparent d-flex justify-content-around" :id="listID(index)">
                        <span class="mem_address">{{ address(index) }}</span>
                        <span class="mem_address_value">{{ value }}</span>
                    </li>
                </ul>
            </div>
            <div class="col-6 p-2 h-100 d-flex justify-content-around align-items-center flex-column">
                <button class="btn btn-light">current instruction : {{ cpu.curr_instruction.full }}</button>
                <button class="btn btn-light">program counter : {{ cpu.program_counter }}</button>
            </div>
        </div>

    </div>




</template>


<script>


export default {
    props: ['cpu_prop'],
    data: function () {
        return {
            cpu: this.cpu_prop,
        }
    },

    created() {
    },

    methods: {

        toMemHex(hex) {
            return hex.toUpperCase().padStart(2, '0');
        },

        address(index) {
            return this.toMemHex(index.toString(16))
        },

        listID(index) {
            return 'mem_' + this.toMemHex(index.toString(16))
        }
    },


}
</script>

<style>
#cpumain {
    border-style: dashed;
    border-width: 4px;
    border-color: gray;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    /* make scrollbar transparent */
}
</style>
