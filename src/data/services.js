import img from "../assets/happy-credit.webp";
import imgOnPageEnterprises from "../assets/services/Empresas.jpeg";
import img2 from "../assets/credito-empresa.jpg";
import img3 from "../assets/consolidacion-deudas.webp";
import imgOnPagePerso from "../assets/services/creditoPersonal.webp";
import imgOnPageConso from "../assets/services/consolidacion-de-deudas.jpg";
const services = [
  {
    id: 1,
    title: "Créditos Personales",
    description:
      "Obtén financiamiento rápido y flexible para cubrir tus necesidades personales con tasas justas y aprobación ágil.",
    image: img,
    imageOnPage: imgOnPagePerso,
    descriptionOnPage:
      "Nuestros créditos personales están diseñados para brindarte la libertad financiera que necesitas. Ya sea para consolidar deudas, financiar estudios, realizar un viaje o afrontar imprevistos, te ofrecemos tasas competitivas y planes de pago ajustados a tu capacidad económica. Con un proceso 100% en línea, puedes solicitar tu crédito en minutos y recibir la aprobación sin complicaciones.",
    interestRate: "Desde 1.2% mensual",
    term: "12 a 60 meses",
    amountRange: { min: "$1,000", max: "$50,000" },
    benefits: [
      "Preaprobación inmediata",
      "Tasas más bajas que el promedio del mercado",
      "Cuotas flexibles y adaptadas a tu presupuesto",
      "Atención personalizada 24/7",
      "Protección avanzada de datos y transacciones seguras",
      "Gestión desde cualquier dispositivo",
      "Gestor personal asignado",
      "Soporte prioritario para clientes premium",
    ],
    requirements: [
      "Ser mayor de 18 años",
      "Documento de identidad vigente",
      "Comprobante de ingresos (nómina o certificado laboral)",
      "Historial crediticio positivo",
    ],
  },
  {
    id: 2,
    title: "Préstamos Empresariales",
    description:
      "Impulsa el crecimiento de tu negocio con financiamiento flexible y condiciones que se adaptan a tu flujo de caja.",
    image: img2,
    imageOnPage: imgOnPageEnterprises,
    descriptionOnPage:
      "Nuestros préstamos empresariales están pensados para emprendedores y empresas que buscan expandirse o mejorar su liquidez. Ofrecemos líneas de crédito diseñadas para cubrir necesidades como compra de equipos, capital de trabajo, ampliación de instalaciones o inversión en tecnología. Con asesoría personalizada y aprobación rápida, podrás impulsar tu negocio con respaldo y seguridad.",
    interestRate: "Desde 1.0% mensual",
    term: "6 a 84 meses",
    amountRange: { min: "$5,000", max: "$250,000" },
    benefits: [
      "Financiamiento flexible y escalable",
      "Plazos personalizados según el flujo de caja",
      "Asesoría financiera especializada",
      "Atención prioritaria para empresas afiliadas",
      "Gestión y seguimiento 100% en línea",
      "Sin penalización por pagos anticipados",
    ],
    requirements: [
      "Registro mercantil actualizado",
      "Certificado de existencia y representación legal",
      "Estados financieros recientes",
      "Documento de identidad del representante legal",
      "Comprobante de ingresos o flujo de caja",
    ],
  },
  {
    id: 3,
    title: "Consolidación de Deudas",
    description:
      "Unifica todas tus deudas en una sola cuota con tasas más bajas y mejor manejo de tu presupuesto.",
    image: img3,
    imageOnPage: imgOnPageConso,
    descriptionOnPage:
      "Con nuestro plan de consolidación de deudas podrás simplificar tus finanzas al reunir todos tus créditos en uno solo. Esto te permitirá pagar una única cuota mensual con una tasa reducida y un plazo más conveniente. Además, tendrás un mejor control de tus pagos y evitarás cargos adicionales por intereses acumulados o moras.",
    interestRate: "Desde 0.9% mensual",
    term: "12 a 72 meses",
    amountRange: { min: "$2,000", max: "$100,000" },
    benefits: [
      "Unificación de múltiples deudas en una sola cuota",
      "Tasas reducidas frente a tus créditos actuales",
      "Mejor control de tus finanzas personales",
      "Aprobación rápida y sin papeleos excesivos",
      "Atención personalizada para tu caso específico",
      "Sin costos ocultos ni penalizaciones por cancelación anticipada",
    ],
    requirements: [
      "Ser mayor de 18 años",
      "Documento de identidad válido",
      "Historial de crédito activo",
      "Comprobante de ingresos o extractos bancarios recientes",
    ],
  },
];

export default services;
