import "./TextInput.css";

export default function TextInput({ label, type, value, onChange, name }) {
  return (
    <div className="input-group-brot">
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        required
        className={value ? "filled" : ""}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
