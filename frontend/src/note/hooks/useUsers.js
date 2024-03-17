
export const useUsers = () => {


    const handlerAddUser = async (user) => {

        if (!login.isAdmin) return;

        let response;
        try {

            if (user.id === 0) {
                response = await save(user);
                dispatch(addUser(response.data))
            } else {
                response = await update(user);
                dispatch(updateUser(response.data));
            }

            Swal.fire(
                (user.id === 0) ?
                    'Usuario Creado' :
                    'Usuario Actualizado',
                (user.id === 0) ?
                    'El usuario ha sido creado con exito!' :
                    'El usuario ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users');
        } catch (error) {
            if (error.response && error.response.status == 400) {
                dispatch(loadingError(error.response.data));
            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {
            
                if (error.response.data?.message?.includes('UK_username')) {
                    dispatch(loadingError({ username: 'El username ya existe!' }));
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    dispatch(loadingError({ email: 'El email ya existe!' }));
                }
            } else if (error.response?.status == 401) {
                handlerLogout();
            } else {
                throw error;
            }
        }
    }





  return {
    handlerAddUser
  }
}
