<template>
    <div>
        <v-dialog @input="closeDialog()" v-bind:value="dialogVisibility">
            <v-card>
                <v-card-title>Inserisci il seguente numero {{challenge}}</v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="reply"
                        type="number"
                        label="0123456789"
                    >

                    </v-text-field>
                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-btn v-bind:loading="isLoading" @click="send()">Invia</v-btn>
                    </v-toolbar>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-btn @click="recaptcha()" text small>
            <v-icon>mdi-checkbox-blank-outline</v-icon>
            Non sono un robot*
        </v-btn>
    </div>
</template>

<script>
export default {
    data () {
        return {
            reply: null,
            dialogVisibility: false,
            challenge: null,
            isLoading: false
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async buttonAnimation(ms) {
            this.isLoading = true
            await this.sleep(ms)
            this.isLoading = false
        },
        randomNumber() {
            return Math.ceil(Math.random() * 10000)
        },
        async send () {
            this.buttonAnimation(2000)
            if (this.challenge + '' === this.reply) {
                this.closeDialog()
                this.$emit('captchaResult', true)
            }
        },
        closeDialog() {
            this.reply = null
            this.dialogVisibility = false
        },
        recaptcha() {
            this.dialogVisibility = true
            this.challenge = this.randomNumber()
        },
    }
}
</script>