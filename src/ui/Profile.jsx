import moment from "moment";
import Logout from "./Logout";

function Profile({ user }) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const lastLogin = moment(+user.metadata.lastLoginAt).format(
    "MMM Do YY, h:mm:ss a"
  );
  return (
    <>
      <aside class="profile-card">
        <header>
          <a href="/">
            <img src={photoURL} alt="..." />
          </a>

          <h1 className="h1-profile">{displayName}</h1>

          <h2 className="h2-profile">{email}</h2>
        </header>

        <div class="profile-bio">
          <p className="p-profile" style={{ paddingBottom: "3px" }}>
            {lastLogin}
          </p>
          <p
            className="p-profile"
            style={{
              marginTop: "20px",
              paddingBottom: "3px",
              backgroundColor: "#06D001",
            }}
          >
            Email Verified
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Logout />
        </div>
      </aside>
    </>
  );
}

export default Profile;
