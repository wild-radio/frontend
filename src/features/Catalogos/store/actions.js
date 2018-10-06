export const setCatalogos = catalogos => ({
  type: 'catalogos/list/set',
  payload: catalogos,
});

export const setFotosCatalogos = fotos => ({
  type: 'catalogos/fotos/set',
  payload: fotos,
});
