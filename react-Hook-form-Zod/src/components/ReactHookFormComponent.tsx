// ReactHookFormComponent.tsx
import '../App.css';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormField = {
  email: string;
  password: string;
};

function ReactHookFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormField>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Datos enviados: ', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='form-gap' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='form-input'
        {...register('email', {
          required: 'El correo es obligatorio',
          validate: (value) => value.includes('@') || 'El correo debe incluir @'
        })}
        type='text'
        placeholder='Email'
      />
      {errors.email && (
        <div className='error-message'>{errors.email.message}</div>
      )}

      <input
        className='form-input'
        {...register('password', {
          required: 'La contraseña es obligatoria',
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres'
          }
        })}
        type='password'
        placeholder='Password'
      />
      {errors.password && (
        <div className='error-message'>{errors.password.message}</div>
      )}

      <button disabled={isSubmitting} className='form-button' type='submit'>
        {isSubmitting ? 'Cargando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default ReactHookFormComponent;
