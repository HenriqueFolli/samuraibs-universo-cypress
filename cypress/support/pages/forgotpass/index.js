
import { el } from './elements'

import toast from '../../components/toast'

class ForgotPassPage {

    constructor(){
        this.toast = toast
    }

    go() {
        cy.visit('/forgot-password')
    }

    form(email){
        cy.get(el.email)
            .clear()
            .type(email)
    }

    submit(){
        cy.contains('button[type=submit]', 'Recuperar')
            .click()
    }

}

export default new ForgotPassPage()