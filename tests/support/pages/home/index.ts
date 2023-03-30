import { Page, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    goToHome = async () => {
        await this.page.goto('/')
    }
    selectMenu = async (menu: string) => {
        await this.page.click(`//ul[@id="menu-menu-principal"]//li//a[text()="${menu}"]`)
    }

    selectMenuWithHover = async (menu: string) => {
        await this.page.hover(`//ul[@id="menu-menu-principal"]//li//a[text()="${menu}"]`)
    }

    selectSubMenu = async (menu: string) => {
        switch (menu) {
            case 'Resources':
                await this.page.click(`//ul[@class="sub-menu"]//li//a[text()="${menu}"]`)
                break
            case 'Blog':
                await this.page.click(`//ul[@class="sub-menu"]//li//a[text()="${menu}"]`)
                break
            default:
                throw new Error(`O menu ${menu} é incorreto:`);
                break;
        }
    }

    hoverSession = async (sesion: string) => {
        switch (sesion) {
            case 'You want':
                {
                    await this.page.hover('//h3[text()="You want…"]')
                }
                break;
            case 'We want':
                {
                    await this.page.hover('//h3[text()="We want…"]')
                }
                break
            default:
                throw new Error(`Não foi encontrada a sessão ${sesion}`);
                break;
        }
    }

    validateTargetMenu = async (menu: string) => {
        switch (menu) {
            case 'Home':
                {
                    const target = this.page.locator('img[alt="Leadership"]')
                    await expect(target).toBeVisible()
                }
                break
            case 'About':
                {
                    const target = this.page.locator('img[alt="Our Why"]')
                    await this.page.waitForTimeout(2000)
                    await expect(target).toBeVisible()
                }
                break
            case 'Solutions':
                {
                    const target = this.page.locator('css=p >> text=When it comes to our leadership solutions, we don’t start with what')
                    await expect(target).toBeVisible()
                }
                break

            case 'Resources':
                {
                    const target = this.page.locator('css=h3 >> text=Tools')
                    await expect(target).toBeVisible()
                }
                break
            case 'Gallery':
                {
                    const target = this.page.locator('css=h3 >> text=Gallery')
                    await expect(target).toBeVisible()
                }
                break
            case 'Connect':
                {
                    const target = this.page.locator('css=h3 >> text=Contact us')
                    await expect(target).toBeVisible()
                }
                break
            case 'Blog':
                {
                    const target = this.page.locator('css=h3 >> text=Blog')
                    await expect(target).toBeVisible()
                    break
                }
            default:
                throw new Error(`O menu ${menu} é incorreto:`);
                break;
        }
    }

    validateSessionHover = async (session: string) => {
        switch (session) {
            case 'You want':
                {
                    const target = this.page.locator('css=span >> text=To have a sense of belonging')
                    await expect(target).toBeVisible()
                }
                break;
            case 'We want':
                {
                    const target = this.page.locator('css=span >> text=dreams fizz with life')
                    await expect(target).toBeVisible()
                }
            default:
                break;
        }
    }
}