import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import { changeStep } from '../../../store/reducers/cart'
import { backToCart, goToPayment } from '../../../store/reducers/Checkout'
import Button from '../../Button/main'
import { FormContainer, FormList, InputRow } from '../style'

const validationSchema = Yup.object({
  receiver: Yup.string().required('Campo obrigatório'),
  address: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  cep: Yup.string().length(8, 'CEP deve ter 8 dígitos').required('Campo obrigatório'),
  number: Yup.number().required('Campo obrigatório'),
  complement: Yup.string(),
})

const errorStyle = { border: '2px solid #ff0000' }

const Delivery = () => {
  const dispatch = useDispatch()

  const handleBackToCart = () => {
    dispatch(backToCart())
    dispatch(changeStep('cart'))
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(goToPayment(values))
    },
  })

  const hasError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field]

  return (
    <FormContainer>
      <h3>Entrega</h3>
      <FormList>
        <li>
          <label htmlFor="receiver">Quem irá receber</label>
          <IMaskInput
            mask={/^[a-zA-ZÀ-ÿ\s]*$/}
            id="receiver"
            value={form.values.receiver}
            onAccept={(value) => form.setFieldValue('receiver', value)}
            onBlur={form.handleBlur}
            style={hasError('receiver') ? errorStyle : undefined}
          />
        </li>
        <li>
          <label htmlFor="address">Endereço</label>
          <IMaskInput
            mask={/^[a-zA-ZÀ-ÿ\s]*$/}
            id="address"
            value={form.values.address}
            onAccept={(value) => form.setFieldValue('address', value)}
            onBlur={form.handleBlur}
            style={hasError('address') ? errorStyle : undefined}
          />
        </li>
        <li>
          <label htmlFor="city">Cidade</label>
          <IMaskInput
            mask={/^[a-zA-ZÀ-ÿ\s]*$/}
            id="city"
            value={form.values.city}
            onAccept={(value) => form.setFieldValue('city', value)}
            onBlur={form.handleBlur}
            style={hasError('city') ? errorStyle : undefined}
          />
        </li>
        <li>
          <InputRow>
            <div>
              <label htmlFor="cep">CEP</label>
              <IMaskInput
                mask="00000-000"
                id="cep"
                value={form.values.cep}
                unmask={true}
                onAccept={(value) => form.setFieldValue('cep', value)}
                onBlur={form.handleBlur}
                style={hasError('cep') ? errorStyle : undefined}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <IMaskInput
                mask="0000"
                id="number"
                value={form.values.number}
                unmask={true}
                onAccept={(value) => form.setFieldValue('number', value)}
                onBlur={form.handleBlur}
                style={hasError('number') ? errorStyle : undefined}
              />
            </div>
          </InputRow>
        </li>
        <li>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            type="text"
            {...form.getFieldProps('complement')}
          />
        </li>
      </FormList>
      <Button
        title="clique aqui para continuar com o pagamento"
        type="button"
        variant={'primary'}
        onClick={form.submitForm}
      >
        Continuar com o pagamento
      </Button>
      <Button
        title="clique aqui para voltar ao carrinho"
        type="button"
        variant={'primary'}
        onClick={handleBackToCart}
      >
        Voltar ao carrinho
      </Button>
    </FormContainer>
  )
}

export default Delivery
