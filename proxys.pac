function FindProxyForURL(url, host) {
    // Redirigir IP 192.168.1.100 a proxy1 para google.com
    if (shExpMatch(host, "104.233.26.218") && shExpMatch(url, "*https://www.freepik.com*")) {
        return "PROXY https://www.freepik.com:6056";
    }

    // Redirigir IP 192.168.1.101 a proxy2 para facebook.com
    if (shExpMatch(host, "104.239.43.124") && shExpMatch(url, "*https://elements.envato.com")) {
        return "PROXY https://elements.envato.com:5852";
    }
     // Si no coincide con ninguna IP permitida, bloquear la conexión
    return "PROXY 0.0.0.0:80"; // Bloquear tráfico
}