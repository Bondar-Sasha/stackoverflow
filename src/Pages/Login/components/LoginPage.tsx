import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { setIsLogin } from '../../../App/redux/slices/auth.slice'

import { userApiControls } from '../../../Features'
import { useAppDispatch } from './../../../App/redux/hooks/hooks'

const { loginControls } = userApiControls.userApiController
interface RegisterFormData {
  username: string
  password: string
}

const LoginPage: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const [login] = loginControls()
  const onSubmit = async (data: RegisterFormData) => {
    const res = await login(data)
    dispatch(setIsLogin(true))

    console.log(res)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black">
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

export default LoginPage
