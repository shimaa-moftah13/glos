
import styles from "./styles.module.css";
const {
  accountSettings,
  mainHead,
  form,
  formGroup,
  label,
  input,
  mainButton,
  birthdayInput,
  inputField,
  radioButtonsGender,
  title
} = styles;

const AccountSettings = () => {


  return (
    <div className={accountSettings}>
      <h1 className={mainHead}>Personal Information</h1>

      <div className={form}>
        <div className={formGroup}>
          <div className={inputField}>
            <label htmlFor="firstname" className={label}>
              First Name
            </label>
            <input type="text" id="firstname" className={input} />
          </div>
        </div>

        <div className={formGroup}>
          <div className={inputField}>
            <label htmlFor="lastname" className={label}>
              Last Name
            </label>
            <input type="text" id="lastname" className={input} />
          </div>
        </div>

        <div className={formGroup}>
          <div className={inputField}>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input type="email" id="email" className={input} />
          </div>
        </div>

        <div className={formGroup}>
          <div className={inputField}>
            <label className={label}>Birthday</label>
            <input type="date" className={birthdayInput} />
          </div>
        </div>
      </div>

      <div className={radioButtonsGender}>
        <label className={title}>Gender</label>

        <div className={radioButtonsGender}>
          <label>
            <input type="radio" name="gender" />
            <i></i>
            <span>Female</span>
          </label>
          <label>
            <input type="radio" name="gender" />
            <i></i>
            <span>Male</span>
          </label>
        </div>
      </div>
      <button className={mainButton}>Save Changes</button>
    </div>


  );
};

export default AccountSettings;
