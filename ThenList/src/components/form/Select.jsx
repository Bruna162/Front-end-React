import style from './Select.module.css'

function Select({text, name, id, handlerChange}){
  return(
      <div className={style.form_control}>
          <label htmlFor={name}>{text}</label>

          <select name={name} id={id}>
              <option value="">Selecione uma categoria</option>
              <option value="">Shonen</option>
              <option value="">Seinen</option>
              <option value="">Isekai</option>
              <option value="">Shoujo</option>

          </select>

      </div>
  )


}
export default Select