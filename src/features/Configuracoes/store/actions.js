export const setConfiguracao = camera => ({
  type: 'configuracoes/camera/set',
  payload: camera,
});

export const clearConfiguracao = () => ({
  type: 'configuracoes/camera/clear',
});
