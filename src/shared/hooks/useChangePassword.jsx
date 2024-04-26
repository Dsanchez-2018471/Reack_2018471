


export const useChangePassword = () => {
    const changePassword = async (password, newpassword) => {
        const responseData = await changePasswordRequest({ password, newpassword })

        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'No fue posible actualizar el password'
            )
        }

        toast.success('Password actulizado exitosamente !!!!')
    };
    return{
        changePassword
    };
};
