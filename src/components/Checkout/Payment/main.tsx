import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import type { RootState } from '../../../store'
import { clearCart } from '../../../store/reducers/cart'
import { goToConfirmation, goToDelivery, setOrderId } from '../../../store/reducers/Checkout'
import { useCheckoutMutation } from '../../../services/api'
import { formataPreco, getTotalPrice } from '../../../utils/format'
import Button from '../../Button/main'
import { FormContainer, FormList, InputGroup, InputRow } from '../style'

const validationSchema = Yup.object({
  cardName: Yup.string().required('Campo obrigatório'),
  cardNumber: Yup.string().length(16, 'Deve ter 16 dígitos').required('Campo obrigatório'),
  cvv: Yup.string().length(3, 'Deve ter 3 dígitos').required('Campo obrigatório'),
  cardMonth: Yup.string().length(2, 'Deve ter 2 dígitos').required('Campo obrigatório'),
  cardYear: Yup.string().length(4, 'Deve ter 4 dígitos').required('Campo obrigatório'),
})

const errorStyle = { border: '2px solid #ff0000' }

const Payment = () => {
  const dispatch = useDispatch()
  const { delivery } = useSelector((state: RootState) => state.checkout)
  const { items } = useSelector((state: RootState) => state.cart)
  const [checkout] = useCheckoutMutation()

  const handleBackToDelivery = () => {
    dispatch(goToDelivery())
  }

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      cardMonth: '',
      cardYear: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!delivery) return

      const result = await checkout({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.address,
            city: delivery.city,
            zipCode: delivery.cep,
            number: Number(delivery.number),
            complement: delivery.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear),
            },
          },
        },
      })

      if ('data' in result && result.data?.orderId) {
        dispatch(setOrderId(result.data.orderId))
        dispatch(clearCart())
        dispatch(goToConfirmation(values))
      }
    },
  })

  const hasError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field]

  return (
    <FormContainer>
      <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}</h3>
      <FormList>
        <li>
          <label htmlFor="cardName">Nome no cartão</label>
          <IMaskInput
            mask={/^[a-zA-ZÀ-ÿ\s]*$/}
            id="cardName"
            value={form.values.cardName}
            onAccept={(value) => form.setFieldValue('cardName', value)}
            onBlur={form.handleBlur}
            style={hasError('cardName') ? errorStyle : undefined}
          />
        </li>
        <li>
          <InputRow>
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <IMaskInput
                mask="0000 0000 0000 0000"
                id="cardNumber"
                value={form.values.cardNumber}
                unmask={true}
                onAccept={(value) => form.setFieldValue('cardNumber', value)}
                onBlur={form.handleBlur}
                style={hasError('cardNumber') ? errorStyle : undefined}
              />
            </InputGroup>
            <InputGroup $maxWidth="87px">
              <label htmlFor="cvv">CVV</label>
              <IMaskInput
                mask="000"
                id="cvv"
                value={form.values.cvv}
                unmask={true}
                onAccept={(value) => form.setFieldValue('cvv', value)}
                onBlur={form.handleBlur}
                style={hasError('cvv') ? errorStyle : undefined}
              />
            </InputGroup>
          </InputRow>
        </li>
        <li>
          <InputRow>
            <div>
              <label htmlFor="cardMonth">Mês de vencimento</label>
              <IMaskInput
                mask="00"
                id="cardMonth"
                value={form.values.cardMonth}
                unmask={true}
                onAccept={(value) => form.setFieldValue('cardMonth', value)}
                onBlur={form.handleBlur}
                style={hasError('cardMonth') ? errorStyle : undefined}
              />
            </div>
            <div>
              <label htmlFor="cardYear">Ano de vencimento</label>
              <IMaskInput
                mask="0000"
                id="cardYear"
                value={form.values.cardYear}
                unmask={true}
                onAccept={(value) => form.setFieldValue('cardYear', value)}
                onBlur={form.handleBlur}
                style={hasError('cardYear') ? errorStyle : undefined}
              />
            </div>
          </InputRow>
        </li>
      </FormList>
      <Button
        type="button"
        variant="primary"
        title="clique aqui para finalizar o pedido"
        onClick={form.submitForm}
      >
        Finalizar Pedido
      </Button>
      <Button
        type="button"
        variant="primary"
        title="clique aqui para voltar à edição de endereço"
        onClick={handleBackToDelivery}
      >
        Voltar para a edição de endereço
      </Button>
    </FormContainer>
  )
}

export default Payment
