function FindProxyForURL(url, host) {
    // Redirigir IP 104.233.26.218 a proxy1 para freepik.com
    if (shExpMatch(host, "104.233.26.218") && shExpMatch(url, "*www.freepik.com*")) {
        return "PROXY proxy1.example.com:8080"; // Cambia "proxy1.example.com:8080" por tu proxy real
    }

    // Redirigir IP 104.239.43.124 a proxy2 para elements.envato.com
    if (shExpMatch(host, "104.239.43.124") && shExpMatch(url, "*elements.envato.com*")) {
        return "PROXY proxy2.example.com:8080"; // Cambia "proxy2.example.com:8080" por tu proxy real
    }

    // Si no coincide con ninguna regla, bloquear la conexión
    return "PROXY 0.0.0.0:80"; // Bloquear tráfico
}
