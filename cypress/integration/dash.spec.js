
import DashPage from '../support/pages/dash'

import {customer, provider, appointment} from '../support/factories/dash'

describe('Dashboard', function () {

    context('Quando o cliente faz um agendamento no app mobile', function () {

        before(function () {                             
            cy.postUser(provider)
            cy.postUser(customer)

            cy.apiLogin(customer)
            cy.setProviderId(provider.email)
            cy.createAppointment(appointment.hour)
        })

        it('O mesmo deve ser exibido no dashboard', function () {
            const date = Cypress.env('appointmentDate')
            
            //cy.uiLogin(provider)
            cy.apiLogin(provider, true)

            DashPage.calendarShouldBeVisible()
            DashPage.selectDay(date)
            DashPage.appointmentShouldBe(customer, appointment.hour)

        })
    })
})

