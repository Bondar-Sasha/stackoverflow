import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch, setIsRegistered } from '../../../App/redux'

// import { userApiController } from '../../../Features'

interface RegisterFormData {
  username: string
  password: string
}

// const { registerControls } = userApiController

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = async () => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(9)
      }, 200)
    })
    dispatch(setIsRegistered(true))
    console.log(res)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  )
}

export default RegisterPage
