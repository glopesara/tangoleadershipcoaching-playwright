import { HomePage } from './support/pages/home/index';
import { test, expect } from '@playwright/test';

let homePage: HomePage
test.beforeEach(({ page }) => {
  homePage = new HomePage(page)
})

test.describe('realizar teste dos menus pincipais', () => {

  test('validar direcionamente do menu Home', async () => {
    const menu: string = 'Home'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateTargetMenu(menu)

  })

  test('validar direcionamente do menu About', async () => {
    const menu: string = 'About'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateTargetMenu(menu)
  })

  test('validar direcionamente do menu Solutions', async () => {
    const menu: string = 'Solutions'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateTargetMenu(menu)

  })

  test('validar direcionamente do menu Explore > Resources', async () => {
    const menu: string = 'Explore'
    const subMenu: string = 'Resources'
    await homePage.goToHome()
    await homePage.selectMenuWithHover(menu)
    await homePage.selectSubMenu(subMenu)
    await homePage.validateTargetMenu(subMenu)
  })

  test('validar direcionamente do menu Explore > Blog', async () => {
    const menu: string = 'Explore'
    const subMenu: string = 'Blog'
    await homePage.goToHome()
    await homePage.selectMenuWithHover(menu)
    await homePage.selectSubMenu(subMenu)
    await homePage.validateTargetMenu(subMenu)
  })

  test('validar direcionamente do menu Gallery', async () => {
    const menu: string = 'Gallery'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateTargetMenu(menu)
  })

  test('validar direcionamente do menu Connect', async () => {
    const menu: string = 'Connect'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateTargetMenu(menu)
  })
})

test.describe('validar sessão Leadership Innovation', () => {
  test.only('Validar exibição da sessão Leadership Innovation', async ({ page }) => {
    await homePage.goToHome()
    await homePage.validateSessionLeadershipInnovation()
  })
  test.only('validar redirecionamento Know More', async ({ page }) => {
    await homePage.goToHome()
    await homePage.clickKnowMore('Leadership Innovation')
    await homePage.validateTargetMenu('About')
  })
})

test.describe('validar sessão Are your leaders keeping up?', () => {
  test('validar hover no "you want"', async () => {
    const session = 'You want'
    await homePage.goToHome()
    await homePage.hoverSession(session)
    await homePage.validateSessionHover(session)
  })

  test('validar hover no "we want"', async () => {
    const session = 'We want'
    await homePage.goToHome()
    await homePage.hoverSession(session)
    await homePage.validateSessionHover(session)

  })
})