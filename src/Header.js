function Header({ profileImg, username}) {
  return (
    <div>
      <img
        src={profileImg} />
      <h1>{username}</h1>
    </div>
  );
}

export default Header;