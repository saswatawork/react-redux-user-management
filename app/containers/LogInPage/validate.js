const validate = values => {
  console.log('values', values)
  const errors = {}
  if (!values.get('username')) {
    errors.username = 'Required'
  } else if (values.get('username').length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.get('password')) {
    errors.password = 'Required'
  }
  return errors
}

export default validate
