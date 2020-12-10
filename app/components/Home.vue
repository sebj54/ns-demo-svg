<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <StackLayout>
                <Label class="info">
                    <FormattedString>
                        <Span class="fas" text.decode="&#xf135; "/>
                        <Span :text="message"/>
                    </FormattedString>
                </Label>

                <SvgColored :src="nativescriptSvg" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
import SvgColored from '~/components/SvgColored'
import nativescriptSvg from '~/assets/svg/nativescript.svg'

export default {
    components: {
        SvgColored,
    },
    data() {
        return {
            nativescriptSvg,
        }
    },
    computed: {
        message() {
            return "Blank {N}-Vue app";
        }
    }
};
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
