// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // === MODE SOMBRE ===
    const boutonTheme = document.getElementById('bascule-theme');
    
    // Fonction pour appliquer le thème
    const appliquerTheme = (estSombre) => {
        if (estSombre) {
            document.body.classList.add('dark-theme');
            if (boutonTheme) boutonTheme.textContent = '☀️ Mode clair';
        } else {
            document.body.classList.remove('dark-theme');
            if (boutonTheme) boutonTheme.textContent = '🌙 Mode sombre';
        }
    };

    // Récupérer le thème stocké
    const themeStocke = localStorage.getItem('theme');
    if (themeStocke === 'dark') {
        appliquerTheme(true);
    } else {
        appliquerTheme(false);
    }

    // Gérer le clic sur le bouton
    if (boutonTheme) {
        boutonTheme.addEventListener('click', function() {
            const estSombre = document.body.classList.contains('dark-theme');
            appliquerTheme(!estSombre);
            localStorage.setItem('theme', !estSombre ? 'dark' : 'light');
        });
    }

    // === ACTIVER LE LIEN ACTIF DANS LE MENU ===
    const pageCourante = window.location.pathname.split('/').pop();
    const liensNav = document.querySelectorAll('.menu-nav a');
    liensNav.forEach(lien => {
        const href = lien.getAttribute('href');
        if (href === pageCourante) {
            lien.classList.add('actif');
        }
    });

});