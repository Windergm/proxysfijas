function FindProxyForURL(url, host) {
    // Proxy para envato elements
    if (shExpMatch(host, "*https://elements.envato.com")) {
        return "PROXY 104.239.43.124:5852"; // Reemplaza con la IP y puerto del proxy para envato
    }

    // Proxy para freepik.com
    if (shExpMatch(host, "*.freepik.com")) {
        return "PROXY 104.233.26.218:6056"; // Reemplaza con la IP y puerto del proxy para freepik
    }

    // Bloquear todas las demás páginas
    return "PROXY 0.0.0.0:80"; // O "PROXY 0.0.0.0:80" para bloquear completamente
}
