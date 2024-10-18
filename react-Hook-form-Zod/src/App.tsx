// import { zodResolver } from '@hookform/resolvers/zod';
// import './App.css';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { z } from 'zod';

// // Definición del esquema Zod con mensajes de error personalizados
// const schema = z.object({
//   email: z.string().email('El correo no es válido').nonempty('El correo es requerido'),
//   password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').nonempty('La contraseña es requerida')
// });

// type FormField = z.infer<typeof schema>;

// function App() {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting }
//   } = useForm<FormField>({
//     // Valores por defecto en el formulario
//     defaultValues: {
//       email: '',
//       password: ''
//     },
//     // Integración con Zod para validaciones
//     resolver: zodResolver(schema)
//   });

//   const onSubmit: SubmitHandler<FormField> = async (data) => {
//     console.log(data);
//     try {
//       // Simulación de una llamada a una API con un delay de 1 segundo
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Simulación de un error en la respuesta
//       throw new Error('Este correo ya ha sido tomado');
//     } catch (error) {
//       console.error(error);
//       setError('root', {
//         message: 'Este correo ya ha sido tomado'
//       });
//     }
//   };

//   return (
//     <form className='form-gap' onSubmit={handleSubmit(onSubmit)}>
//       {/* Campo de email */}
//       <input
//         className='form-input'
//         {...register('email')}
//         type='text'
//         placeholder='Email'
//       />
//       {errors.email && (
//         <div className='error-message'>{errors.email.message}</div>
//       )}

//       {/* Campo de password */}
//       <input
//         className='form-input'
//         {...register('password')}
//         type='password'
//         placeholder='Password'
//       />
//       {errors.password && (
//         <div className='error-message'>{errors.password.message}</div>
//       )}

//       <button disabled={isSubmitting} className='form-button' type='submit'>
//         {isSubmitting ? 'Cargando...' : 'Enviar'}
//       </button>

//       {errors.root && (
//         <div className='error-message'>{errors.root.message}</div>
//       )}
//     </form>
//   );
// }

// export default App;
