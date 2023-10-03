<template>
    <div>
        <p class="text-yellow-300 text-xl mr-4">{{ count }}</p>
        <button class="border px-4 py-2 text-xl" @click="increment">+</button>
        <button class="border px-4 py-2 text-xl" @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
}
</script>