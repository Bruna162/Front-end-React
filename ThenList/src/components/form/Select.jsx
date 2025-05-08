import style from './Select.module.css'

function Select({ text, name, id, handlerChange, options }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={id} onChange={handlerChange}>
        <option value="">Selecione uma categoria</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
