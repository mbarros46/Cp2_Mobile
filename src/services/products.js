const products = [
  {
    id: 1,
    title: "Honda CRF 450R 2025",
    description: "Potente motocicleta off-road com motor de 450cc e tecnologia avançada de suspensão.",
    price: 45999.99,
    image: require("../../assets/honda-crf-450.png"), 
  },
  {
    id: 2,
    title: "Yamaha YZ250F 2025",
    description: "Motocicleta de motocross com motor de 250cc e chassi leve para máxima agilidade.",
    price: 42499.99,
    image: require("../../assets/yz-250.png"), 
  },
  {
    id: 3,
    title: "Kawasaki KX450 2025",
    description: "Combinação perfeita de potência e manuseio para competições de motocross.",
    price: 44999.99,
    image: require("../../assets/kx-450.jpg"), 
  },
  {
    id: 4,
    title: "Suzuki RM-Z450 2025",
    description: "Design aerodinâmico e motor potente para desempenho superior em trilhas.",
    price: 43999.99,
    image: require("../../assets/rm-450.jpg"), 
  },
  {
    id: 5,
    title: "Husqvarna FC 450 2025",
    description: "Tecnologia europeia de ponta com componentes premium para pilotos exigentes.",
    price: 47999.99,
    image: require("../../assets/2025_HUSQVARNA_fc450_1.png"), 
  },
  {
    id: 6,
    title: "GasGas MC 250F 2025",
    description: "Motocicleta espanhola com excelente manuseio e motor de alta performance.",
    price: 41999.99,
    image: require("../../assets/gasgas.png"), 
  },
  {
    id: 7,
    title: "Varg EX 2025",
    description: "Motocicleta elétrica de alta performance com autonomia impressionante.",
    price: 52999.99,
    image: require("../../assets/stark_varg_ex.png"), 
  },
]

export default {
  getAll: async () => products,
}
