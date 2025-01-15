import ProfileForm from './ProfileForm';
import classes from './user-profile.module.css';

function UserProfile() {


  async function changePasswordHandler(passwordData) {

  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;