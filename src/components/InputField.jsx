export const InputField = ({text, handleSubmit, handleInput}) => {
  return (
    <label>
      <input value={text} onChange={(evt) => handleInput(evt.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};
