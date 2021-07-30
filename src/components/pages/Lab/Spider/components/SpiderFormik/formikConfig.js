import * as Yup from 'yup'

const formikConfig = (props) => {
  return {
    validationSchema: Yup.object().shape({}),

    initialValues: {},

    onSubmit(values) {},
  }
}

export default formikConfig
