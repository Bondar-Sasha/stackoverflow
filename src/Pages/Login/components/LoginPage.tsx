import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { userApiController } from '../../../Features'
// import { TextLoader } from '../../../Shared'
// import Cookies from 'js-cookie'

interface RegisterFormData {
  username: string
  password: string
}
const { loginControls } = userApiController

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const [login] = loginControls()
  const onSubmit = async (formData: RegisterFormData) => {
    try {
      await login(formData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required' })}
          value="useruser1"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
          value="useruser1"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-16">
        <span>log in</span>
      </button>
    </form>
  )
}

export default LoginPage
