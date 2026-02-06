(function() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://msmusicaparaeventos.vercel.app",
        "name": "Matheus Sacramento",
        "alternateName": "MS - Música para Eventos",
        "description": "Violista e violinista profissional para casamentos e eventos corporativos em Florianópolis/SC e região. Repertório clássico e popular.",
        "image": "https://msmusicaparaeventos.vercel.app/assets/profile.jpg",
        "url": "https://msmusicaparaeventos.vercel.app/",
        "jobTitle": ["Violista Profissional", "Violinista Profissional", "Músico para Eventos"],
        "knowsAbout": [
          "Música Clássica",
          "Música Contemporânea",
          "Música Popular",
          "Violino",
          "Viola",
          "Música para Casamentos",
          "Eventos Corporativos"
        ],
        "sameAs": [
          "https://www.instagram.com/SEU_INSTAGRAM",
          "https://www.youtube.com/SEU_CANAL",
          "https://wa.me/5553999814571"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Florianópolis",
          "addressRegion": "Santa Catarina",
          "addressCountry": "BR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-53-99981-4571",
          "contactType": "reservations",
          "email": "mdsacra@gmail.com",
          "areaServed": ["BR", "BR-SC"],
          "availableLanguage": ["Portuguese", "English"]
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Música para Casamentos",
            "description": "Performance musical completa para cerimônia e recepção de casamento"
          },
          {
            "@type": "Offer",
            "name": "Música para Formaturas",
            "description": "Performance musical completa para cerimônia e recepção de formatura"
          },
          {
            "@type": "Offer",
            "name": "Eventos Sociais",
            "description": "Ambientação musical para vernissages, premiações e celebrações privadas"
          },
          {
            "@type": "Offer",
            "name": "Eventos Corporativos",
            "description": "Ambientação musical para coquetéis, jantares e eventos empresariais"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Músico Profissional",
          "description": "Atuação como violista e violinista em eventos sociais, corporativos e casamentos com repertório clássico e popular."
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://msmusicaparaeventos.vercel.app",
        "name": "MS - Música para Eventos",
        "description": "Violista e violinista profissional para eventos em Florianópolis/SC",
        "publisher": {
          "@id": "https://msmusicaparaeventos.vercel.app"
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
})();
