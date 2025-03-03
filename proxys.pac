function FindProxyForURL(url, host) {
    // Excluir www.domestika.org y domestika.org del proxy
    if (dnsDomainIs(host, "domestika.org") || shExpMatch(host, "www.domestika.org")) {
        return "DIRECT"; // Conexión directa
    }

    // Redirigir https://www.freepik.com a 104.233.26.218:6056
    if (shExpMatch(host, "www.freepik.com") || shExpMatch(url, "*www.freepik.com*")) {
        return "PROXY 104.233.26.218:6056";
    }

    // Redirigir https://elements.envato.com a 104.239.43.124:5852
    if (shExpMatch(host, "elements.envato.com") || shExpMatch(url, "*elements.envato.com*")) {
        return "PROXY 104.239.43.124:5852";
    }

    // Usar proxy para todas las demás páginas
    return "PROXY 104.239.43.124:5852";
}
