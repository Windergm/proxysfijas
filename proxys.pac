function FindProxyForURL(url, host) {
    // Direcciones de los proxies (MODIFICA ESTOS VALORES)
    var proxyFreepik = "PROXY 104.233.26.218:6056"; // Proxy para Freepik
    var proxyEnvato = "PROXY 104.239.43.124:5852";  // Proxy para Envato
    var proxyGeneral = "PROXY 0.0.0.0:80";  // Proxy para todo lo demás

    // Dominios de Freepik
    if (
        dnsDomainIs(host, "freepik.com") ||
        dnsDomainIs(host, "freepik.es") ||
        dnsDomainIs(host, "freepik.net")
    ) {
        return proxyFreepik; // Usar proxy específico para Freepik
    }
     if (
        dnsDomainIs(host, "m365.cloud.microsof") ||
    ) {
        return proxyEnvato; // Usar proxy específico para Freepik
    }
     if (
        dnsDomainIs(host, "creativefabrica.com") ||
    ) {
        return proxyEnvato; // Usar proxy específico para Freepik
    }
     if (
        dnsDomainIs(host, "microsoft365.com") ||
    ) {
        return proxyEnvato; // Usar proxy específico para Freepik
    }

    // Dominios de Envato
    if (
        dnsDomainIs(host, "elements.envato.com") ||
        dnsDomainIs(host, "envato.com") ||
        dnsDomainIs(host, "envato.net") ||
        dnsDomainIs(host, "labs.envato.com")
    ) {
        return proxyEnvato; // Usar proxy específico para Envato
    }

    // Usar proxy general para todas las demás páginas
    return proxyGeneral;
}
