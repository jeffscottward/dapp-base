import { s, Flex, Button, Box, Text, Input, Heading } from './stitches'

// Hooks
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { DevTool } from '@hookform/devtools'

type UserSubmitForm = {
  fullname: string
  username: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Fullname is required'),
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
})

const Form = () => {
  // Example of React Hook Form
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  // Submit form
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2))
  }
  return (
    <>
      <s.form onSubmit={handleSubmit(onSubmit)} css={{ maxW: '300px' }}>
        <Heading variant={'h6'} css={{ mb: 10, fw: 'bold', mt: 0 }}>
          React Hook Form Example
        </Heading>
        <Box className="form-group">
          <Text>Full Name</Text>
          <Input
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <Box className="invalid-feedback">{errors.fullname?.message}</Box>
        </Box>
        <Box className="form-group">
          <Text>Username</Text>
          <Input
            type="text"
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <Box className="invalid-feedback">{errors.username?.message}</Box>
        </Box>
        <Box className="form-group">
          <Text>Email</Text>
          <Input
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <Box className="invalid-feedback">{errors.email?.message}</Box>
        </Box>
        <Box className="form-group">
          <Text>Password</Text>
          <Input
            type="new-password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <Box className="invalid-feedback">{errors.password?.message}</Box>
        </Box>
        <Box className="form-group">
          <Text>Confirm Password</Text>
          <Input
            type="new-password"
            {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          />
          <Box className="invalid-feedback">{errors.confirmPassword?.message}</Box>
        </Box>
        <Box className="form-group form-check">
          <input
            id="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-Input ${errors.acceptTerms ? 'is-invalid' : ''}`}
          />
          <label htmlFor="acceptTerms" className="form-check-Text">
            I have read and agree to the Terms
          </label>
          <Box className="invalid-feedback">{errors.acceptTerms?.message}</Box>
        </Box>
        <Box className="form-group">
          <Flex css={{ jc: 'flex-end', mt: '$2' }}>
            <Button
              css={{ mr: '$2' }}
              type="button"
              onClick={() => reset()}
              color="secondary"
              size="small"
            >
              Reset
            </Button>
            <Button type="submit" color="primary" size="small">
              Register
            </Button>
          </Flex>
        </Box>
      </s.form>
      <DevTool control={control} />
    </>
  )
}

export default Form
