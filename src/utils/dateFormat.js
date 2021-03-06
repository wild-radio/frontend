export const dateFormat = timestamp => {
  const date = new Date(timestamp * 1000);

  let dia = date.getDate();
  if (dia.toString().length === 1) {
    dia = `0${dia}`;
  }

  let mes = date.getMonth() + 1;
  if (mes.toString().length === 1) {
    mes = `0${mes}`;
  }

  const ano = date.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

export const hourFormat = timestamp => {
  const date = new Date(timestamp * 1000);

  let hora = date.getHours();
  if (hora.toString().length === 1) {
    hora = `0${hora}`;
  }

  let minuto = date.getMinutes();
  if (minuto.toString().length === 1) {
    minuto = `0${minuto}`;
  }

  let segundo = date.getSeconds();
  if (segundo.toString().length === 1) {
    segundo = `0${segundo}`;
  }

  return `${hora}:${minuto}:${segundo}`;
};

export const dateHourFormat = timestamp => `${dateFormat(timestamp)} ${hourFormat(timestamp)}`;
