function FindProxyForURL(url, host) {
    // Proxy para envato elements
    if (shExpMatch(host, "*.elements.envato.com")) {
        return "PROXY 192.168.1.1:8080"; // Reemplaza con la IP y puerto del proxy para envato
    }

    // Proxy para freepik.com
    if (shExpMatch(host, "*.freepik.com")) {
        return "PROXY 192.168.1.2:8080"; // Reemplaza con la IP y puerto del proxy para freepik
    }

    // Bloquear todas las demás páginas
    return "PROXY 0.0.0.0:80"; // O "PROXY 0.0.0.0:80" para bloquear completamente
}
