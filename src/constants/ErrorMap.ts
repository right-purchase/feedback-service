export type TServerErrorPayload = {
  message: string;
  status: number;
};

export const ErrorMap = {
  UNKOWN: { message: "Ocorreu um erro desconhecido.", status: 500 },
  FORM_URL_UNDEFINED: {
    message: "Endereço do formulário não definido.",
    status: 500,
  },
  VALIDATION: {
    message: "Erro de validação.",
    status: 400,
  },
} satisfies Record<string, TServerErrorPayload>;
