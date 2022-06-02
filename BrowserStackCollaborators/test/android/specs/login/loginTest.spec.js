const collaboratorsLogin = require("../../screenObjects/login/loginObject.screen")

describe('Seccion Login - Smoke Test', () => {
   it('ID01 - Iniciar sesion de manera correcta', async () => {
        await collaboratorsLogin.user.setValue("111810")
        await collaboratorsLogin.pass.setValue("21SFE21")
        await collaboratorsLogin.btnLogin.click()
        await driver.pause(10000)
    })

   it('ID02 - Iniciar sesion de manera incorrecta', async () => {
        await collaboratorsLogin.user.setValue("usuario incorrecto")
        await collaboratorsLogin.pass.setValue("21SFE21")
        await collaboratorsLogin.btnLogin.click()
        await expect(collaboratorsLogin.errorLogin).toHaveText('El nombre de usuario y/o contraseña es incorrecto.')
        await collaboratorsLogin.aceptarError.click()
        await driver.pause(10000)
    })  
})

describe('Seccion Bsucador - Smoke Test', () => {
    it('ID01 - Realizar búsqueda de manera correcta', async () => {
         await collaboratorsLogin.user.setValue("111810")
         await collaboratorsLogin.pass.setValue("21SFE21")
         await collaboratorsLogin.btnLogin.click()
         await collaboratorsLogin.botonBuscar.click()
         await collaboratorsLogin.campoBuscar.setValue("01 - Location / Facility - 20 de mayo / UPPP")
         await collaboratorsLogin.ejecutarBuscar.click()
         await driver.pause(10000)
     })

     it('ID02 - Realizar búsqueda de manera incorrecta', async () => {
        await collaboratorsLogin.user.setValue("111810")
        await collaboratorsLogin.pass.setValue("21SFE21")
        await collaboratorsLogin.btnLogin.click()
        await collaboratorsLogin.botonBuscar.click()
        await collaboratorsLogin.campoBuscar.setValue("LOREMIUSPUNKSKDNKSD")
        await collaboratorsLogin.ejecutarBuscar.click()
        await driver.pause(10000)
    })
})

describe('Seccion Filtro - Smoke Test', () => {
    it('ID01 - Realizar filtro de manera correcta', async () => {
         await collaboratorsLogin.user.setValue("111810")
         await collaboratorsLogin.pass.setValue("21SFE21")
         await collaboratorsLogin.btnLogin.click()
         await collaboratorsLogin.botonFiltro.click()
         await collaboratorsLogin.fechaAscendente.click()
         await driver.pause(10000)
     })
})

describe('Seccion Publicaciones - Smoke Test', () => {
    it('ID01 - Agregar anuncio', async () => {
         await collaboratorsLogin.user.setValue("111810")
         await collaboratorsLogin.pass.setValue("21SFE21")
         await collaboratorsLogin.btnLogin.click()
         await collaboratorsLogin.btnProfile.click()
         await collaboratorsLogin.publicaciones.click()
         await collaboratorsLogin.agregarAnuncio.click()
         await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
         await collaboratorsLogin.continuar.click()
         await collaboratorsLogin.titulo.setValue("Titulo de prueba")
         await collaboratorsLogin.descripcion.setValue("Descripción de ejemplo")
         await collaboratorsLogin.precioTrato.setValue("250000")
         await collaboratorsLogin.correoElectronico.setValue("correo@correo.com")
         await collaboratorsLogin.telefono.setValue("0123456789")
         await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
         await collaboratorsLogin.comentarios.setValue("Comentarios de prueba")
         await collaboratorsLogin.enviar.click()
         await collaboratorsLogin.deAcuerdo.click()
         await driver.pause(10000)
     })

     it('ID02 - Agregar anuncio de manera incorrecta', async () => {
        await collaboratorsLogin.user.setValue("111810")
        await collaboratorsLogin.pass.setValue("21SFE21")
        await collaboratorsLogin.btnLogin.click()
        await collaboratorsLogin.btnProfile.click()
        await collaboratorsLogin.publicaciones.click()
        await collaboratorsLogin.agregarAnuncio.click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await collaboratorsLogin.continuar.click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await collaboratorsLogin.enviar.click()
        await driver.pause(5000)
        await collaboratorsLogin.publicacionAceptar.click()
        await driver.pause(10000)
    })
 
 })

 describe('Seccion Incidencia - Smoke Test', () => {
    it('ID01 - Agregar incidencia con campos válidos', async () => {
         await collaboratorsLogin.user.setValue("111810")
         await collaboratorsLogin.pass.setValue("21SFE21")
         await collaboratorsLogin.btnLogin.click()
         await collaboratorsLogin.btnProfile.click()
         await collaboratorsLogin.btnTrabajo.click()
         await collaboratorsLogin.solicitudIncidencias.click()
         await collaboratorsLogin.btnNuevaIncidencia.click()
         await collaboratorsLogin.tipoIncidencia.click()
         await collaboratorsLogin.medicalLeave.click()
         await collaboratorsLogin.del.click()
         await collaboratorsLogin.delalFecha.click()
         await collaboratorsLogin.al.click()
         await collaboratorsLogin.delalFecha.click()
         await collaboratorsLogin.sendIncidencia.click()
         await collaboratorsLogin.deAcuerdoIncidencia.click()
         await driver.pause(10000)
     })

     it.only('ID02 - Agregar incidencia de manera incorrecta', async () => {
        await collaboratorsLogin.user.setValue("111810")
        await collaboratorsLogin.pass.setValue("21SFE21")
        await collaboratorsLogin.btnLogin.click()
        await collaboratorsLogin.btnProfile.click()
        await collaboratorsLogin.btnTrabajo.click()
        await collaboratorsLogin.solicitudIncidencias.click()
        await collaboratorsLogin.btnNuevaIncidencia.click()
        await collaboratorsLogin.sendIncidencia.click()
        await collaboratorsLogin.deAcuerdoIncidencia.click()
        await driver.pause(10000)
    })
 })