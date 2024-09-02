export const Profile = () => {
  return (
    <>
      <ProfileCard
        name=" BOB"
        age={22}
        greeting={
          <div>
            <strong>Hello Bob, Keep up Greet Work!</strong>
          </div>
        }
      >
        <h3>Hobby : Cricket, Swimming, Dancing</h3>
        <button>Contact Us</button>
      </ProfileCard>

      <ProfileCard
        name=" John"
        age={21}
        greeting={
          <div>
            <strong>Hello John, Keep up Greet Work!</strong>
          </div>
        }
      >
        <h3>Hobby : Cricket, Swimming, Dancing</h3>
        <button>Contact Us</button>
      </ProfileCard>
    </>
  );
};

function ProfileCard({name,age,greeting,children}) {

  return (
    <>
      <h3>Name:{name}</h3>
      <h3>Age:{age}</h3>
      <h3>Greeting:{greeting}</h3>
      <p>{children}</p>
    </>
  );
}
