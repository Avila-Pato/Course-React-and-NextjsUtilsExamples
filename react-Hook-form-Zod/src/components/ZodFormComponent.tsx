// ZodFormComponent.tsx
import '../App.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Definición del esquema Zod
const schema = z.object({
  email: z.string().email('El correo no es válido').nonempty('El correo es requerido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').nonempty('La contraseña es requerida')
});

type FormField = z.infer<typeof schema>;

function ZodFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormField>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(schema)
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
        {...register('email')}
        type='text'
        placeholder='Email'
      />
      {errors.email && (
        <div className='error-message'>{errors.email?.message}</div>
      )}

      <input
        className='form-input'
        {...register('password')}
        type='password'
        placeholder='Password'
      />
      {errors.password && (
        <div className='error-message'>{errors.password?.message}</div>
      )}

      <button disabled={isSubmitting} className='form-button' type='submit'>
        {isSubmitting ? 'Cargando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default ZodFormComponent;
