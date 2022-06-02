class collaboratorsLogin {

    get user() {
        return $('//*[@text="User Name"]')
    }

    get pass() {
        return $('//*[@text="Password"]')
    }

    get btnLogin() {
        return $('//*[@text="SIGN IN"]')
    }

    get errorLogin(){
        return $('//*[@resource-id="com.kidzania.collaborators:id/txtTitle"]')
    }

    get aceptarError() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnAceptar"]')
    }

    get btnProfile() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/navigation_profile"]')
    }

    get publicaciones() {
        return $('//*[@text="Publicaciones"]')
    }

    get agregarAnuncio() {
        return $('//*[@text="AGREGAR ANUNCIO"]')
    }

    get continuar() {
        return $('//*[@text="Continuar"]')
    }

    get titulo() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etTitulo"]')
    }

    get descripcion() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etDescripcion"]')
    }

    get precioTrato() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etPrecio"]')
    }

    get correoElectronico() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etCorreo"]')
    }

    get telefono() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etTelefono"]')
    }

    get comentarios() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etComentarios"]')
    }

    get enviar() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnEnviar"]')
    }

    get deAcuerdo() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnAceptar"]')
    }

    get publicacionAceptar() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnAceptar"]')
    }

    get botonBuscar() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/imgSearch"]')
    }

    get campoBuscar() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/edSearch"]')
    }

    get ejecutarBuscar() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnSearch"]')
    }

    get botonFiltro() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/imgSort"]')
    }

    get fechaAscendente() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/opNfSortDateAsc"]')
    }

    get btnTrabajo() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/constraintWork"]')
    }

    get solicitudIncidencias() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/textView24"]')
    }

    get btnNuevaIncidencia() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnAdd"]')
    }

    get tipoIncidencia() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/txtTipoIncidencia"]')
    }

    get medicalLeave() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/txtTitleTipo"]')
    }

    get del() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etCalendar"]')
    }


    get al() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/etCalendar2"]')
    }

    get alFecha() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/txtTitleTipo"]')
    }

    get delalFecha() {
        return $('//*[@resource-id="android:id/button1"]')
    }

    get sendIncidencia() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnSend"]')
    }

    get deAcuerdoIncidencia() {
        return $('//*[@resource-id="com.kidzania.collaborators:id/btnAceptar"]')
    }

}

module.exports = new collaboratorsLogin()
//export default LoginCollaborators