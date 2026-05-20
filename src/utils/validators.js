export function validarId(id) {
    if (!id) {
        return "El campo de ID es obligatorio.";
    }
    if (isNaN(id) || id <= 0) {
        return "El ID debe ser un número positivo.";
    }
    return null;
}

export function validarNombre(name) {
    if (!name) {
        return "El campo de nombre es obligatorio.";
    }
    if (name.length < 2) {
        return "El nombre debe tener al menos 2 caracteres.";
    }
    if (name.length > 100) {
        return "El nombre no puede tener más de 100 caracteres.";
    }
    return null;
}

export function validarEmail(email) {
    if (!email) {
        return "El campo de correo electrónico es obligatorio.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "El correo electrónico no es válido.";
    }
    if (email.length < 5) {
        return "El correo electrónico debe tener al menos 5 caracteres.";
    }
    if (email.length > 150) {
        return "El correo electrónico no puede tener más de 150 caracteres.";
    }
    return null;
}
