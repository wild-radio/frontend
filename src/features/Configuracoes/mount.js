export const mountInitialValues = configuracao => ({
  ...configuracao,
  ativa: !!configuracao.ativa,
  temporizador: !!configuracao.temporizador,
  presenca: !!configuracao.presenca,
});

export const mountToSave = configuracao => ({
  ...configuracao,
  ativa: configuracao.ativa ? 1 : 0,
  temporizador: configuracao.temporizador ? 1 : 0,
  presenca: configuracao.presenca ? 1 : 0,
});
