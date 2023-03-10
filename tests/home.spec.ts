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
    await homePage.validateMenuTargeting(menu)

  })

  test('validar direcionamente do menu About', async () => {
    const menu: string = 'About'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateMenuTargeting(menu)
  })

  test('validar direcionamente do menu Solutions', async () => {
    const menu: string = 'Solutions'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateMenuTargeting(menu)

  })

  test('validar direcionamente do menu Explore > Resources', async () => {
    const menu: string = 'Explore'
    const subMenu: string = 'Resources'
    await homePage.goToHome()
    await homePage.selectMenuWithHover(menu)
    await homePage.selectSubMenu(subMenu)
    await homePage.validateMenuTargeting(subMenu)
  })

  test('validar direcionamente do menu Explore > Blog', async () => {
    const menu: string = 'Explore'
    const subMenu: string = 'Blog'
    await homePage.goToHome()
    await homePage.selectMenuWithHover(menu)
    await homePage.selectSubMenu(subMenu)
    await homePage.validateMenuTargeting(subMenu)
  })

  test('validar direcionamente do menu Gallery', async () => {
    const menu: string = 'Gallery'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateMenuTargeting(menu)
  })

  test('validar direcionamente do menu Connect', async () => {
    const menu: string = 'Connect'
    await homePage.goToHome()
    await homePage.selectMenu(menu)
    await homePage.validateMenuTargeting(menu)
  })
})