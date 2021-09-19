<template>
    <div class="Contact">
        <div class="alert">
            <v-alert
                type="error"
                transition="scroll-y-transition"
                dismissible
                v-bind:value="errorOnSending"
                @input="errorOnSending = false"
            >
                Mail non inviata
            </v-alert>
            <v-alert
                type="success"
                transition="scroll-y-transition"
                dismissible
                v-bind:value="mailSent"
                @input="mailSent = false"
            >
                Mail inviata correttamente
            </v-alert>
        </div>
        <v-card tile flat style="margin-top: 10px">
            <v-card-title>Compila i campi per inviare una mail</v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-container>
                        <v-divider></v-divider>
                        <div class="d-flex">
                            <v-text-field
                                v-model="name"
                                label="Nome"
                                v-bind:counter="maxChar"
                                v-bind:rules="nomiRule"
                                class="name"
                            ></v-text-field>
                            <v-divider vertical></v-divider>
                            <v-text-field
                                v-model="surname"
                                label="Cognome"
                                v-bind:counter="maxChar"
                                v-bind:rules="nomiRule"
                                class="surname"
                            ></v-text-field>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex">
                            <v-text-field
                                v-model="sender"
                                :rules="mittenteRule"
                                class="sender"
                                label="Email*"
                            ></v-text-field>
                            <v-divider vertical></v-divider>
                            <v-text-field
                                v-model="object"
                                :rules="oggettoRule"
                                label="Oggetto*"
                                class="object"
                            ></v-text-field>
                        </div>
                        <v-divider></v-divider>
                        <v-textarea
                                v-model="message"
                                :rules="corpoRule"
                                flat
                                auto-grow
                                label="Corpo del messaggio*"
                                class="message-body"
                        ></v-textarea>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
        <v-toolbar flat>
            <custom-captcha @captchaResult="captchaMade = $event"></custom-captcha>
            <v-spacer></v-spacer>
            <v-btn v-bind:disabled="!captchaMade" v-on:click="sendMail()">Invia</v-btn>
        </v-toolbar>
    </div>
</template>

<style scoped>
.alert {
    position: fixed;
    top: 10vh;
    left: 1%;
    width: 98%;
    z-index: 8;
}
.name {
    margin: 5px;
    width: 50%;
}
.surname {
    margin: 5px;
    width: 50%;
}
.sender {
    margin: 5px;
    width: 50%;
}
.object {
    margin: 5px;
    width: 50%;
}
.message-body {
    margin-top: 20px;
}
</style>

<script>
import emailjs from 'emailjs-com';
import CustomCaptcha from '../components/CustomCaptcha.vue'

export default {
    name: 'Contact',
    components: {
        CustomCaptcha
    },
    data () {
        return {
            message: '',
            sender: '',
            object: '',
            name: '',
            surname: '',
            maxChar: 10,
            errorOnSending: false,
            mailSent: false,
            captchaMade: false
        }
    },
    computed: {
        nomiRule () {
            const rules = []
            let rule =  v => v.length <= this.maxChar || 'Massimo ' + this.maxChar +' caratteri'
            rules.push(rule)
            return rules
        },
        mittenteRule () {
            const rules = []
            let rule = v => !!(v || '').match(/.+@.+\..+/) || 'Inserisci una mail valida'
            rules.push(rule)
            rule = v => v.length !== 0 || 'Campo Obbligatorio'
            rules.push(rule)
            return rules
        },
        oggettoRule () {
            const rules = []
            let rule = v => v.length !== 0 || 'Campo Obbligatorio'
            rules.push(rule)
            return rules
        },
        corpoRule () {
            const rules = []
            let rule = v => v.length !== 0 || 'Campo Obbligatorio'
            rules.push(rule)
            return rules
        }
    },
    methods: {
        areValidData () {
            if (this.sender === '' || this.message === '' || this.object === '') {
                return false
            }
            if (!this.sender.match(/.+@.+\..+/)) {
                return false
            }
            if (this.name.length > this.maxChar || this.surname > this.maxChar) {
                return false
            }
            return true
        },
        async sendMail() {
            console.log('Are valid data ', this.areValidData())
            if (this.areValidData()) {
                try {
                    let template = {
                        name: this.name,
                        surname: this.surname,
                        email: this.sender,
                        message: this.message,
                        object: this.object,
                    }
                    this.mailSent = true
                    await emailjs.send('service_mx240pk', 'template_kf3eevf', template, 'user_MuwCLbV8GmR030GhkS8IH')
                } catch {
                    this.errorOnSending = true
                }
            } else {
                this.errorOnSending = true
            }
        }
    }
}
</script>