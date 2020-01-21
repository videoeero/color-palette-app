import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

export default class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: 'teal',
      newColorName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  render() {
    const { paletteFull } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
          <TextValidator
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Color must have name!',
              'Color name must be unique',
              'Color already used!'
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{
              backgroundColor: paletteFull ? 'grey' : currentColor
            }}
            disabled={paletteFull}
          >
            {paletteFull ? 'Palette is full' : 'Add color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
