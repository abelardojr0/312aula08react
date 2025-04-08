import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Função para mostrar o toast de sucesso
export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right", // Posição do toast
    autoClose: 3000, // Tempo em milissegundos
    hideProgressBar: false, // Exibe a barra de progresso
    closeOnClick: true,
    draggable: true,
    progress: undefined, // Barra de progresso
    style: {
      color: "#4CAF50", // Cor de fundo verde para sucesso
      backgroundColor: "#FFFFFF", // Cor do texto em branco
    },
  });
};

// Função para mostrar o toast de alerta
export const toastAlert = (message: string) => {
  toast.info(message, {
    position: "top-right", // Posição do toast
    autoClose: 3000, // Tempo em milissegundos
    hideProgressBar: false, // Exibe a barra de progresso
    closeOnClick: true,
    draggable: true,
    progress: undefined, // Barra de progresso
    style: {
      color: "#FF9800", // Cor de fundo laranja para alerta
      backgroundColor: "#FFFFFF", // Cor do texto em branco
    },
  });
};

// Função para mostrar o toast de erro
export const toastError = (message: string) => {
  toast.error(message, {
    position: "top-right", // Posição do toast
    autoClose: 3000, // Tempo em milissegundos
    hideProgressBar: false, // Exibe a barra de progresso
    closeOnClick: true,
    draggable: true,
    progress: undefined, // Barra de progresso
    style: {
      color: "#F44336", // Cor de fundo vermelha para erro
      backgroundColor: "#FFFFFF", // Cor do texto em branco
    },
  });
};
