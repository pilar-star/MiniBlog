export function validarEmail(email) {
    if (!email) {
        return "El campo de correo electrónico es obligatorio.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "El correo electrónico no es válido.";
    }
    if (error.code === "23505") {
        return res.status(409).json({ error: "El email ya está en uso" });
    }
    return null;
}

export function validarNombre(nombre) {

}