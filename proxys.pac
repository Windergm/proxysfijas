function FindProxyForURL(url, host) {
    // Direcciones de los proxies (MODIFICA ESTOS VALORES)
    var proxyFreepik = "PROXY 104.233.26.218:6056"; // IP:Puerto para Freepik
    var proxyEnvato = "PROXY 104.239.43.124:5852";  // IP:Puerto para Envato
    
    // Dominios permitidos (puedes añadir más subdominios si es necesario)
    var freepikDomains = [
        "*.freepik.com",
        "*.freepik.es",
        "*.freepik.net"
    ];
    
    var envatoDomains = [
        "*.elements.envato.com",
        "*.envato.com",
        "*.envato.net",
        "*.labs.envato.com"
    ];

    // Comprobar si es Freepik
    for(var i = 0; i < freepikDomains.length; i++) {
        if(shExpMatch(host, freepikDomains[i])) {
            return proxyFreepik;
        }
    }

    // Comprobar si es Envato
    for(var j = 0; j < envatoDomains.length; j++) {
        if(shExpMatch(host, envatoDomains[j])) {
            return proxyEnvato;
        }
    }

    // Bloquear todo lo demás
    return "PROXY 0.0.0.0:80"; // Proxy inválido para bloquear acceso
}
