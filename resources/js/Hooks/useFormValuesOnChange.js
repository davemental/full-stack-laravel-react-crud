/**
 *
 * @param {Input Events} ev
 * @param {Form values state} setValues
 */
export const handleOnChange = (ev, setFormValues) => {
    setFormValues((prevValues) => {
        return {
            ...prevValues,
            [ev.target.name]: ev.target.value,
        }
    });
}
