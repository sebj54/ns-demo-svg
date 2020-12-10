<template>
    <svg-image :src="svgWithColor" />
</template>

<script>
import { fromData } from '@sergeymell/nativescript-svg'

export default {
    props: {
        color: {
            type: [String, Array],
            default: null,
        },
        replaceColor: {
            type: [String, Array],
            default: null,
        },
        src: {
            type: String,
            required: true,
        },
    },
    computed: {
        svgWithColor() {
            let svg = this.src

            if (this.color && this.replaceColor) {
                if (Array.isArray(this.replaceColor)) {
                    this.replaceColor.forEach((replaceColor, index) => {
                        const color = this.color[index] || this.color[0]
                        svg = svg.replace(new RegExp(replaceColor, 'g'), color)
                    })
                } else {
                    svg = svg.replace(new RegExp(this.replaceColor, 'g'), this.color)
                }
            }

            return fromData(svg)
        },
    },
}
</script>
