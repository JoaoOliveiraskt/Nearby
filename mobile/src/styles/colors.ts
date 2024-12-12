export const colors = {
  dark: {
    background: "#121212",
    accent: "#242424",
    primary: "#4A90E2",
    primaryLight: "#6B9BCF",
    primaryForeground: "#C9E4FA",
    card: "#434343",
    border: "#4A4A4A",
    text: "#FAFAFA",
    muted: "#757575",
    mutedForeground: "#C4C4C4",
    destructive: "#F94144",
    destructiveForeground: "#FDEDED",
  },
};

export const mapCustomDarkStyle = [
  { elementType: "geometry", stylers: [{ color: "#1E1E1E" }] }, // Preto grafite ultra escuro
  { elementType: "labels.text.fill", stylers: [{ color: "#A0A0A0" }] }, // Cinza claro para textos
  { elementType: "labels.text.stroke", stylers: [{ color: "#1E1E1E" }] },

  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4A90E2" }], // Azul elétrico para textos administrativos
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para pontos de interesse
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#2C2C2C" }], // Cinza escuro para parques
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para textos em parques
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2C2C2C" }], // Cinza escuro para estradas
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1E1E1E" }], // Preto grafite para bordas de estradas
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para textos de estradas
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3A3A3A" }], // Tom de cinza levemente mais claro para rodovias
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1E1E1E" }], // Preto grafite para bordas de rodovias
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para textos de rodovias
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2C2C2C" }], // Cinza escuro para áreas de trânsito
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para textos de estações
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0A2342" }], // Azul escuro profundo
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }], // Cinza claro para textos de água
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1E1E1E" }], // Preto grafite para bordas de textos de água
  },
];
