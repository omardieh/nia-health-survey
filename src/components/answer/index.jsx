import { colors } from "..";

export const Answer = ({
  possible_answers,
  question_id,
  storage,
  setStorage
}) => {
  const handleOnChange = (e) => {
    setStorage((prevStates) => ({
      ...prevStates,
      [question_id]: {
        score: e.target.value,
        question_id: e.target.id
      }
    }));
  };

  let borderColor = storage?.[question_id]?.score
    ? colors.success
    : colors.orange;

  return (
    <div
      style={{
        ...styles.main,
        border: `1px solid ${borderColor}`
      }}
    >
      {possible_answers.map((o) => (
        <label key={o} style={styles.label}>
          <input
            id={question_id}
            value={o}
            onChange={handleOnChange}
            checked={o === Number(storage?.[question_id]?.score)}
            type="radio"
          />
          <p> {o} </p>
        </label>
      ))}
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: ".5em",
    borderRadius: "14px"
  },
  label: {
    padding: "0 .3em"
  }
};
