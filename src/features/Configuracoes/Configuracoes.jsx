// React & Redux
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Material UI
import { withStyles, Divider, Typography, CircularProgress } from '@material-ui/core';
import { Switch } from 'redux-form-material-ui';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import Dialog from '../../components/Dialog/Dialog';
import Slider from '../../components/SliderWrapper/SliderWrapper';

// Utils
import cameraSelecionadaCheck from '../../utils/cameraSelecionadaCheck';
import { mountInitialValues, mountToSave } from './mount';
import { WEB_SOCKETS } from '../../utils/url';

// Tempo estimado para entrega da foto de confirmação (em segundos)
const TEMPO_ESTIMADO = 30;

const fieldContainerStyles = theme => ({
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

const FieldContainer = withStyles(fieldContainerStyles)(props => (
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

const styles = {
  capturaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dialogText: {
    marginBottom: 16,
  },
};

class Configuracoes extends React.Component {
  state = {
    validacao: {
      open: false,
      values: null,
    },
    captura: {
      open: false,
      values: null,
      progress: 0,
      conteudo: null,
    },
    interval: null,
    webSocket: null,
  };

  componentWillMount() {
    cameraSelecionadaCheck();
    this.initialLoad();
  }

  initialLoad = async () => {
    await this.props.thunks.getConfiguracao();
    this.props.initialize(mountInitialValues(this.props.camera));
  };

  componentWillUnmount() {
    this.props.actions.clearConfiguracao();
  }

  setInterval = () => this.setState({ interval: setInterval(this.incrementProgress, 1000) });

  clearInterval = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  };

  incrementProgress = () =>
    this.setState({
      captura: { ...this.state.captura, progress: this.state.captura.progress + 1 },
    });

  openCaptura = () => {
    this.setInterval();

    const webSocket = new WebSocket(WEB_SOCKETS);
    webSocket.onopen = () =>
      webSocket.send(JSON.stringify({ idCamera: this.props.cameraSelecionada.id }));
    webSocket.onmessage = ({ data }) => {
      this.props.appThunks.showSnackbar('Captura recebida', 'success');
      this.setState({ captura: { ...this.state.captura, conteudo: data } });
      webSocket.close();
    };
    webSocket.onclose = () => this.setState({ webSocket: null });

    this.setState({
      captura: { open: true, progress: 0, values: this.state.validacao.values, conteudo: null },
      validacao: { open: false },
      webSocket,
    });
  };

  closeCaptura = () => {
    this.clearInterval();

    if (this.state.webSocket) {
      this.state.webSocket.close();
    }

    this.setState({ captura: { open: false, progress: 0 }, webSocket: null });
  };

  hasAngleChanged = values =>
    values.horizontal !== this.props.camera.horizontal ||
    values.vertical !== this.props.camera.vertical;

  onSubmit = formValues => {
    const values = mountToSave(formValues);

    if (this.hasAngleChanged(values)) {
      this.setState({ validacao: { open: true, values } });
    } else {
      this.props.thunks.putConfiguracao(values);
    }
  };

  render() {
    return (
      <div>
        <Frame
          title="Configurações"
          primaryButton="Salvar"
          onClickPrimaryButton={this.props.handleSubmit(this.onSubmit)}
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
          title="Posicionamento alterado"
          confirm="Sim"
          onClickConfirm={() => {
            this.props.thunks.postConfiguracaoConfirmacao(this.state.validacao.values);

            this.openCaptura();
          }}
          cancel="Não"
          onClickCancel={() => {
            this.props.thunks.putConfiguracao(this.state.validacao.values);
            this.setState({ validacao: { open: false } });
          }}
          open={this.state.validacao.open}>
          <Typography className={this.props.classes.dialogText}>
            Você deseja solicitar uma captura para validação do novo posicionamento?
          </Typography>
          <Typography>
            A imagem deve demorar cerca de {TEMPO_ESTIMADO} segundos para chegar.
          </Typography>
        </Dialog>
        <Dialog
          title={
            this.state.captura.conteudo === null
              ? 'Aguardando captura de validação...'
              : 'Captura recebida'
          }
          confirm="Confirmar"
          onClickConfirm={async () => {
            this.closeCaptura();
            await this.props.thunks.putConfiguracao(this.state.captura.values);
            this.props.initialize(this.props.camera);
          }}
          cancel="Descartar"
          onClickCancel={async () => {
            this.closeCaptura();
            await this.props.thunks.putConfiguracao(this.props.camera);
            this.props.initialize(this.props.camera);
            this.props.appThunks.showSnackbar('As configurações foram revertidas', 'info');
          }}
          open={this.state.captura.open}>
          {this.state.captura.conteudo === null ? (
            <div className={this.props.classes.capturaContainer}>
              <Typography>
                {this.state.captura.progress} segundo
                {this.state.captura.progress > 1 ? 's' : ''} passado
                {this.state.captura.progress > 1 ? 's' : ''}
              </Typography>
              <Typography className={this.props.classes.dialogText}>
                {this.state.captura.progress > TEMPO_ESTIMADO
                  ? 'O processo está demorando mais do que o esperado'
                  : `Tempo estimado: ${TEMPO_ESTIMADO} segundos`}
              </Typography>
              <CircularProgress size={50} />
            </div>
          ) : (
            <img
              src={`data:image/png;base64, ${this.state.captura.conteudo}`}
              alt="Captura de validação"
            />
          )}
        </Dialog>
      </div>
    );
  }
}

Configuracoes.propTypes = {
  actions: PropTypes.object.isRequired,
  thunks: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  camera: PropTypes.object.isRequired,
  cameraSelecionada: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Configuracoes);
