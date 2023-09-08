import {getConvertPrice} from '../../src/utils/get-convert-price.util'

describe("neo express calculator", () => {   
  const shipping = 15000;
  const percenteges = 3.29;
  const tax = 800;
  const supplierPrice = 20000;
  const salePrice = 39000;
  const costs = (supplierPrice * (percenteges / 100)) + tax 
  const total = supplierPrice + shipping + costs

  beforeEach(() => {
    cy.visit("/");
  })

  it('home page can be rendered correctly', ()=>{
    cy.contains('Calculadora de impuestos')
    cy.get('[data-cy="costos"]').should('contain', '0')
  })

  it(' should input the suppliers price to obtain the costs and the total', ()=>{
    cy.get('[data-cy="precio provedor"]').type(`${supplierPrice}`)
    cy.get('[data-cy="costos"]').should('contain', `${getConvertPrice(costs)}`)
    cy.get('[data-cy="total"]').should('contain', `${getConvertPrice(total)}`)
  })

  it('should input the sale price to calculate the profits' , ()=>{
    cy.get('[data-cy="precio provedor"]').type(`${supplierPrice}`)
    cy.get('[data-cy="precio venta"]').type(`${salePrice}`)
    cy.get('[data-cy="costos"]').should('contain', `${getConvertPrice(costs)}`)
    cy.contains('Ganancias')
    cy.get('[data-cy="profits-number"]').should('contain', `${getConvertPrice(salePrice - total)}`)
  })

  it('should display profits in red if they are negative.', ()=>{
    cy.get('[data-cy="precio provedor"]').type(`${supplierPrice}`)
    cy.get('[data-cy="precio venta"]').type(`${salePrice - 10000}`)
    cy.get('[data-cy="profits-number"]').should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('should be able to change the shipping price', ()=>{
    cy.contains('Envío')
    cy.get('[data-cy="icon-shipping"]').click()
    cy.contains('Editar')
    cy.get('[placeholder="ingrese envío"]').type('8000')
    cy.get('[data-cy="save-shipping"]').click()
    cy.get('[data-cy="close-shipping"]').click()
    cy.get('[data-cy="envío"]').should('contain', '8.000')
    cy.get('[data-cy="value-shipping"]').should('contain', '8.000')
  })

  it('should be able to change the interest rate', ()=>{
    cy.contains('Mercado Pago')
    cy.get('[data-cy="icon-percentage"]').click()
    cy.contains('Editar')
    cy.get('[placeholder="ingrese porcentaje"]').type('12.6')
    cy.get('[data-cy="save-percentage"]').click()
    cy.get('[data-cy="close-percentage"]').click()
    cy.get('[data-cy="value-percentage"]').should('contain', '12.6')
  })

  it('should be able to change the tax price', ()=>{
    cy.contains('Mercado Pago')
    cy.get('[data-cy="icon-tax"]').click()
    cy.contains('Editar')
    cy.get('[placeholder="ingrese costo fijo"]').type('900')
    cy.get('[data-cy="save-tax"]').click()
    cy.get('[data-cy="close-tax"]').click()
    cy.get('[data-cy="value-tax"]').should('contain', '900')
  })

  it('should be able to set default rates', ()=>{
    cy.get('[data-cy="reset"]').click()
    cy.get('[data-cy="envío"]').should('contain', '15.000')
    cy.get('[data-cy="value-shipping"]').should('contain', '15.000')
    cy.get('[data-cy="value-percentage"]').should('contain', '3.29')
    cy.get('[data-cy="value-tax"]').should('contain', '800')
  })
})
