function FindProxyForURL(url, host) {
    // Excluir www.domestika.org y domestika.org del proxy
    if (dnsDomainIs(host, "domestika.org") || shExpMatch(host, "www.domestika.org")) {
        return "DIRECT"; // Conexión directa
    }

    // Redirigir freepik.com y www.freepik.com al proxy 104.233.26.218:6056
    if (dnsDomainIs(host, "freepik.com") || shExpMatch(host, "www.freepik.com")) {
        return "PROXY 104.233.26.218:6056";
    }

    // Redirigir elements.envato.com y www.elements.envato.com al proxy 104.239.43.124:5852
    if (dnsDomainIs(host, "elements.envato.com") || shExpMatch(host, "www.elements.envato.com")) {
        return "PROXY 104.239.43.124:5852";
    }

    // Bloquear todas las demás conexiones
    return "PROXY 0.0.0.0:80";
}
