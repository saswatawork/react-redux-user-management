const validate = v => {
  const errors = {}
  const values = v.toJS();

  if (!values.firstname) {
    errors.firstname = 'Required'
  } else if (!/^[A-Z ][a-z]{2,30}$/.test(values.firstname)) {
    errors.firstname = 'Invalid first name'
  }

  if (!values.lastname) {
    errors.lastname = 'Required'
  } else if (!/^[A-Z ][a-z]{2,30}$/.test(values.lastname)) {
    errors.lastname = 'Invalid last name'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address eg.example@mail.com'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
    errors.password = 'Minimum eight characters, at least one letter, one number and one special character'
  }

  return errors
}

export default validate
