/**
 * TODOs:
 *  - Envio das alterações nas configurações
 *  - Modal de espera de confirmação do ângulo (WebSockets)
 */
// React & Redux
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Material UI
import { withStyles, Divider, Typography } from '@material-ui/core';
import { Switch } from 'redux-form-material-ui';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import Dialog from '../../components/Dialog/Dialog';
import Slider from '../../components/SliderWrapper/SliderWrapper';

// Utils
import cameraSelecionadaCheck from '../../utils/cameraSelecionadaCheck';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
  divider: {
    marginBottom: 16,
  },
});

const FieldContainer = withStyles(styles)(props => (
  <div>
    <div className={props.classes.container}>
      <div>
        <Typography variant="title">{props.title}</Typography>
        <Typography variant="subheading" className={props.classes.subtitle}>
          {props.subtitle}
        </Typography>
      </div>
      <Field name={props.name} component={props.component} vertical={props.vertical} />
    </div>
    <Divider className={props.classes.divider} />
  </div>
));

FieldContainer.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};

class Configuracoes extends React.Component {
  state = {
    validacao: {
      open: false,
    },
    captura: {
      open: false,
    },
  };

  componentWillMount() {
    cameraSelecionadaCheck();
    this.props.thunks.getConfiguracao();
  }

  render() {
    return (
      <div>
        <Frame
          title="Configurações"
          primaryButton="Salvar"
          secondaryButton="Descartar"
          onClickBackButton={this.props.routesThunks.inicio}>
          <form>
            <FieldContainer
              title="Câmera ativa"
              subtitle="Determina se a câmera está ligada ou não"
              name="ativa"
              component={Switch}
            />
            <FieldContainer
              title="Temporizador"
              subtitle="Realizar uma captura a cada 5 minutos"
              name="temporizador"
              component={Switch}
            />
            <FieldContainer
              title="Sensor de presença"
              subtitle="Realizar uma captura ao detectar presença"
              name="presenca"
              component={Switch}
            />
            <FieldContainer
              title="Posicionamento horizontal"
              subtitle="Ajuste de posicionamento horizontal"
              name="horizontal"
              component={Slider}
            />
            <FieldContainer
              title="Posicionamento vertical"
              subtitle="Ajuste de posicionamento vertical"
              name="vertical"
              component={Slider}
              vertical
            />
          </form>
        </Frame>
        <Dialog
          title="Validação de novo ângulo"
          confirm="Sim"
          onClickConfirm={() => console.log('TODO: sim')}
          cancel="Não"
          onClickCancel={() => console.log('TODO: não')}
          open={this.state.validacao.open}>
          <Typography>
            Você deseja solicitar uma captura para validação do novo ângulo definido? A imagem deve
            demorar cerca de 30 segundos para chegar.
          </Typography>
        </Dialog>
        <Dialog
          title="Aguardando captura de validação..."
          confirm="Confirmar"
          onClickConfirm={() => console.log('TODO: confirmar')}
          cancel="Cancelar"
          onClickCancel={() => console.log('TODO: cancelar')}
          open={this.state.captura.open}>
          <Typography>TODO: carregando...</Typography>
        </Dialog>
      </div>
    );
  }
}

Configuracoes.propTypes = {
  thunks: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  camera: PropTypes.object.isRequired,
};

export default Configuracoes;
